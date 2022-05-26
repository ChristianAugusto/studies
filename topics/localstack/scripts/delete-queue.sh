AWS_ENDPOINT="http://localhost:4566"
SQS_QUEUE_NAME="test-queue"

echo "Deleting $SQS_QUEUE_NAME"

aws --endpoint-url $AWS_ENDPOINT sqs delete-queue --queue-url $AWS_ENDPOINT/000000000000/$SQS_QUEUE_NAME > /dev/null
