from requests import get as getRequest
from time import sleep



def get_total_pokemons(config):
    request = getRequest(
        config["baseUrl"].format(limit=1, offset=0),
        **config["call"]
    )
    return request.json()["count"]


def get_pokemons(config, offset):
    request = getRequest(
        url=config["baseUrl"].format(limit=config["limit"], offset=offset),
        **config["call"]
    )
    return request.json()["results"]


def filter_fields(fieldPath, currentLocal):
    if type(currentLocal) is dict:
        if (len(fieldPath) == 1):
            return currentLocal[fieldPath[0]]
        else:
            return filter_fields(fieldPath[1:], currentLocal[fieldPath[0]])
    elif type(currentLocal) is list:
        if (len(fieldPath) == 1):
            values = []
            for item in currentLocal:
                values.append(filter_fields(fieldPath[0], item))
            return ','.join(values)
        else:
            values = []
            for item in currentLocal:
                values.append(filter_fields(fieldPath, item))
            return ','.join(values)

    return currentLocal


def proccess_pokemons(config, pokemons):
    if not pokemons:
        print('[ERROR] No pokemons to process')
        raise Exception()

    csv_rows = []

    for pokemon in pokemons:
        request = getRequest(
            url=config["baseUrl"].format(name=pokemon["name"]),
            **config["call"]
        )

        pokemonInfo = request.json()

        values = []

        for fieldPath in config["fields"]:
            try:
                values.append(filter_fields(fieldPath, pokemonInfo))
            except Exception as e:
                print('[ERROR] Error in filter fields')
                print(fieldPath, pokemonInfo)
                raise Exception()

        csv_rows.append(values)

        sleep(0.4)

    return csv_rows