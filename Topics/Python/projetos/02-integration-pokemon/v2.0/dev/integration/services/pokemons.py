from requests import request
from time import sleep

from integration.constants import LIMIT_POKEMONS



def get_total_pokemons():
    config = {
        "method": "GET",
        "url": "https://pokeapi.co/api/v2/pokemon",
        "headers": {
            "Accept": "application/application/json",
            "Content-Type": "application/application/json"
        },
        "params": {
            "limit": 1,
            "offset": 0
        },
        "timeout": 120
    }

    req = request(**config)
    return req.json()["count"]


def get_pokemons(offset):
    config = {
        "method": "GET",
        "url": "https://pokeapi.co/api/v2/pokemon",
        "headers": {
            "Accept": "application/application/json",
            "Content-Type": "application/application/json"
        },
        "params": {
            "limit": LIMIT_POKEMONS,
            "offset": offset
        },
        "timeout": 120
    }

    req = request(**config)
    return req.json()["results"]