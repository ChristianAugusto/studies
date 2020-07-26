from os import remove as remove_file

from integration.utils import logger



def clean_files(_files):
    for file in _files:
        clean_file(file)


def clean_file(_file):
    try:
        remove_file(_file)
        logger.info(f"File removed: {_file}")
    except Exception as e:
        logger.error(str(e))
        raise Exception(f"Error in clean file {_file}")
