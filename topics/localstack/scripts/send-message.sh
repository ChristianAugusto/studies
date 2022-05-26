AWS_ENDPOINT="http://localhost:4566"
SQS_QUEUE_NAME="test-queue"
MESSAGE_BODY="sua mãe"

echo "Creating $SQS_QUEUE_NAME"

aws --endpoint-url $AWS_ENDPOINT sqs send-message --queue-url $AWS_ENDPOINT/000000000000/$SQS_QUEUE_NAME --message-body "$MESSAGE_BODY" > /dev/null
