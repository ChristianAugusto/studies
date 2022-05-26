package main

import (
	"fmt"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/credentials"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sqs"
)

const (
	awsEndpoint         = "http://localhost:4566"
	queueUrl            = "http://localhost:4566/000000000000/test-queue"
	awsRegion           = "us-east-1"
	maxNumberOfMessages = 10
	maxNumberOfRetries  = 5
	visibility          = 10
	waitSeconds         = 10
)

type Execution struct {
	queueService SqsQueueService
}

func main() {
	execution := new(Execution)

	execution.queueService = NewSqsQueueService(Config{
		Region:        awsRegion,
		UseLocalStack: true,
		Endpoint:      awsEndpoint,
	})

	execution.queueService.WatchQueue(queueUrl, execution.processMessage)
}

func (e *Execution) processMessage(message *QueueMessage) error {
	fmt.Printf("message.QueueURL: %v\n", message.QueueURL)
	fmt.Printf("message.ReceiptHandle: %v\n", message.ReceiptHandle)
	fmt.Printf("message.RawBody: %v\n", message.RawBody)
	fmt.Print("\n\n\n")

	e.queueService.DeleteMessage(queueUrl, message.ReceiptHandle)

	return nil
}

type QueueMessage struct {
	QueueURL      string
	ReceiptHandle string
	RawBody       string
}

type SqsQueueService struct {
	client *sqs.SQS
}

type Config struct {
	Region        string
	UseLocalStack bool
	Endpoint      string
}

type WatchQueueCallback func(*QueueMessage) error

func NewSqsQueueService(config Config) SqsQueueService {
	awsConfig := &aws.Config{}
	awsConfig.Region = aws.String(config.Region)
	awsConfig.MaxRetries = aws.Int(maxNumberOfRetries)

	if config.UseLocalStack {
		awsConfig.Credentials = credentials.NewStaticCredentials("abc", "123", "")
		awsConfig.Endpoint = aws.String(config.Endpoint)
	}

	sqsSession := sqs.New(session.Must(session.NewSession(awsConfig)))
	return SqsQueueService{client: sqsSession}
}

func (s SqsQueueService) WatchQueue(queueURL string, callback WatchQueueCallback) error {
	for {
		messages, err := s.PullMessages(queueURL)
		if err != nil {
			return err
		}
		for _, message := range messages {
			callback(message)
		}
	}
}

func (s SqsQueueService) PullMessages(queueURL string) ([]*QueueMessage, error) {
	msgOutput, err := s.client.ReceiveMessage(&sqs.ReceiveMessageInput{
		AttributeNames: []*string{
			aws.String(sqs.MessageSystemAttributeNameSentTimestamp),
		},
		MessageAttributeNames: []*string{
			aws.String(sqs.QueueAttributeNameAll),
		},
		QueueUrl:            &queueURL,
		MaxNumberOfMessages: aws.Int64(maxNumberOfMessages),
		VisibilityTimeout:   aws.Int64(visibility),
		WaitTimeSeconds:     aws.Int64(waitSeconds),
	})
	if err != nil {
		return nil, fmt.Errorf("sqscli -- %s", err)
	}

	totalMsg := len(msgOutput.Messages)
	messages := make([]*QueueMessage, 0, totalMsg)
	msg := make(chan *QueueMessage)

	for _, rawMessage := range msgOutput.Messages {
		go func(queueURL *string, rawMessage *sqs.Message, msg chan<- *QueueMessage) {
			msg <- &QueueMessage{
				QueueURL:      *queueURL,
				ReceiptHandle: *rawMessage.ReceiptHandle,
				RawBody:       *rawMessage.Body,
			}
		}(&queueURL, rawMessage, msg)
	}

	for i := 0; i < totalMsg; i++ {
		messages = append(messages, <-msg)
	}
	close(msg)

	return messages, nil
}

func (s SqsQueueService) DeleteMessage(queueURL, identifier string) error {
	_, err := s.client.DeleteMessage(&sqs.DeleteMessageInput{
		QueueUrl:      &queueURL,
		ReceiptHandle: &identifier,
	})

	if err != nil {
		return err
	}

	return nil
}
