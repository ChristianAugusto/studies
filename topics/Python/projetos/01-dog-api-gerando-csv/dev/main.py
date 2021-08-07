from packages.handle_breeds import get_breeds, process_breeds
from packages.handle_csv import generate_csv
from datetime import datetime



def execute(full):
    complement = ""

    if full:
        print('[WARNING] Full execute')
    else:
        complement = f"-{datetime.today().strftime('%Y%m%d')}"
        print('[WARNING] Normal execute')


    csvRows = None

    try:
        csvRows = process_breeds(get_breeds())
        print('[WARNING] Success in get and process breeds')
    except Exception as e:
        print('[ERROR] Error in get and process breeds')
        print(e)

    try:
        generate_csv(rows=csvRows, complement=complement)
        print('[WARNING] Success in generate csv')
    except Exception as e:
        print('[ERROR] Error in generate csv')
        print(e)


def main(full=False):
    execute(full)


if __name__ == "__main__":
    main()