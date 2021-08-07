from os import getpid
from psutil import Process

from integration.utils import logger



def measure():
    process = Process(getpid())
    mega_bytes = round(process.memory_info().rss / 1024 / 1024)

    logger.info(f"Memory used: {mega_bytes} Mb")
