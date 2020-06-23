from datetime import datetime
from json import load as jsonLoad
from packages.handle_pokemons import get_total_pokemons, get_pokemons, proccess_pokemons
from packages.handle_csv import generate_csv
from os import remove as removeFile



REQUESTS_CONFIG = jsonLoad(open('./filesConfig/handle_pokemons.json', 'r'))
CSV_CONFIG = jsonLoad(open('./filesConfig/handle_csv.json', 'r'))


def execute(full):
    if full:
        print('[WARNING] Running fully integration')
    else:
        CSV_CONFIG["openFile"]["file"] = CSV_CONFIG["openFile"]["file"].format(complement=f"{datetime.today().strftime('%Y%m%d')}-")
        print('[WARNING] Normal execute')

    try:
        removeFile(CSV_CONFIG["openFile"]["file"])
    except Exception as e:
        print('[ERROR] Error in remove old file', CSV_CONFIG["openFile"]["file"])
        print(e)


    total = 0
    currentOffset = 0

    try:
        total = get_total_pokemons(config=REQUESTS_CONFIG["getPokemons"])
    except Exception as e:
        print('[Error] Error in get total pokemons')
        raise Exception()


    print(f'[WARNING] Total pokemons: {total}')


    try:
        generate_csv(config=CSV_CONFIG, rows=[CSV_CONFIG["header"]])
        print('[WARNING] Success in generate csv')
    except Exception as e:
        print('[ERROR] Error in generate csv')
        print(e)
        raise Exception()


    while currentOffset < total:
        print(f'[WARNING] Current offset: {currentOffset}')

        csvRows = None

        try:
            csvRows = proccess_pokemons(
                config=REQUESTS_CONFIG["getPokemon"],
                pokemons=get_pokemons(config=REQUESTS_CONFIG["getPokemons"], offset=currentOffset)
            )
            print('[WARNING] Success in get and process pokemons')
        except Exception as e:
            print('[ERROR] Error in get and process pokemons')
            print(e)
            raise Exception()

        try:
            generate_csv(config=CSV_CONFIG, rows=csvRows)
            print('[WARNING] Success in append csv')
        except Exception as e:
            print('[ERROR] Error in append csv')
            print(e)
            raise Exception()


        currentOffset += REQUESTS_CONFIG["getPokemons"]["limit"]

        progress = round(currentOffset * 100/total, 2)
        print(f'[WARNING] Progress {progress if progress <= 100.00 else 100.00}%')


def main(full=False):
    execute(full)


if __name__ == "__main__":
    main()