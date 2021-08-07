from requests import request
from time import sleep

from integration.constants import LIMIT_POKEMONS



def get_total_pokemons():
    config = {
        "method": "GET",
        "url": "https://pokeapi.co/api/v2/pokemon",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
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
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "params": {
            "limit": LIMIT_POKEMONS,
            "offset": offset
        },
        "timeout": 120
    }

    req = request(**config)
    return req.json()["results"]


def get_pokemon(name):
    config = {
        "method": "GET",
        "url": f"https://pokeapi.co/api/v2/pokemon/{name}",
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        "timeout": 120
    }

    req = request(**config)
    return req.json()
