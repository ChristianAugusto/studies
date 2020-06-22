from requests import get as getRequest
from json import load as jsonLoad



CONFIG = jsonLoad(open('./filesConfig/handle_breeds.json'))


def get_breeds():
    request = getRequest(**CONFIG["getBreeds"])

    return request.json()


def process_breeds(breeds=None):
    if not breeds:
        raise Exception('No breeds to process')

    csv_rows = [CONFIG["processBreeds"]["header"]]

    for breed, subBreeds in breeds["message"].items():
        if (len(subBreeds) > 0):
            for subBreed in subBreeds:
                csv_rows.append([breed, subBreed])
        else:
            csv_rows.append([breed, ""])

    return csv_rows

