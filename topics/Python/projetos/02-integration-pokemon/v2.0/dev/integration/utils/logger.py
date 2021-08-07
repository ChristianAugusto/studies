from datetime import datetime
from pytz import timezone

from integration.constants import TIMEZONE_DEFAULT



def info(message):
    nowDatetime = datetime.now(timezone(TIMEZONE_DEFAULT)).strftime('%Y-%m-%d %H:%M:%S')
    print(f"[{str(nowDatetime)}]  [INFO]  -  {message}")


def error(message):
    nowDatetime = datetime.now(timezone(TIMEZONE_DEFAULT)).strftime('%Y-%m-%d %H:%M:%S')
    print(f"[{str(nowDatetime)}]  [ERROR]  -  {message}")
