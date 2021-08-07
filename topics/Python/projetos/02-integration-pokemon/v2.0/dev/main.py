from sys import argv as sys_args

from integration import task
from integration.constants import (
    ENVIRONMENTS
)



def main(event):
    if len(sys_args) >= 2:
        environment = sys_args[1]

        if environment not in ENVIRONMENTS:
            raise Exception(f"Choose one environment: {ENVIRONMENTS}")

        task.execute(event, environment)
    else:
        task.execute(event)



if __name__ == "__main__":
    events = [
        {
            "clientConfig": "./filesConfig/client/client.json"
        }
    ]

    for event in events:
        main(event)
