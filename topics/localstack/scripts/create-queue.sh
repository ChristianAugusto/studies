AWS_ENDPOINT="http://localhost:4566"
SQS_QUEUE_NAME="test-queue"

echo "Creating $SQS_QUEUE_NAME"

aws --endpoint-url $AWS_ENDPOINT sqs create-queue --queue-name $SQS_QUEUE_NAME > /dev/null
