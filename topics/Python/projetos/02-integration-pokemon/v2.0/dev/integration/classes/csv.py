import csv

from integration.utils import logger, measure_memory
from integration.constants import (
    INTERVAL_REQUISITIONS, UPLOAD_DIR_DEV
)
from integration.services import pokemons as pokemon_services
from time import sleep as sleep_execution
from gc import collect as garbage_collect



NEWLINE = ""
CSV_WRITER = {
    "delimiter": "|"
}


class CSV:
    def __init__(self, build_dir, now, header):
        name = self.generate_local_name(now)

        self.local_name = name
        self.local_path = f'{build_dir}/{name}'

        self.create_file(header)


    def generate_local_name(self, now):
        return f"{now.strftime('%Y-%m-%d %H:%M:%S.%f')}.csv"


    def create_file(self, header):
        if not header:
            raise Exception('No header to write')

        with open(self.local_path, 'w', newline=NEWLINE) as csvFile:
            csv_writer = csv.writer(csvFile, **CSV_WRITER)
            csv_writer.writerow(header)


    def write_rows(self, rows):
        if not rows:
            raise Exception('No rows to write')

        with open(self.local_path, 'a', newline=NEWLINE) as csvFile:
            csv_writer = csv.writer(csvFile, **CSV_WRITER)
            csv_writer.writerows(rows)

        garbage_collect()


    def generate_upload_name(self, mask, now):
        now_datetime = now.strftime('%Y%m%d%H%M%S')
        now_date = now.strftime('%Y%m%d')

        return f"{mask.format(date=str(now_date), datetime=str(now_datetime))}.csv"


    def upload_dev(self, destination, now):
        upload_name = self.generate_upload_name(destination["mask"], now)

        local_file = open(self.local_path, 'r')
        upload_file = open(f"{UPLOAD_DIR_DEV}/{upload_name}", 'w')

        try:
            for line in local_file:
                upload_file.write(line)
        except Exception as e:
            local_file.close()
            upload_file.close()

            logger.error(str(e))
            raise Exception("Error in upload_dev")

        local_file.close()
        upload_file.close()





    """ functions exclusive for this integration """

    def filter_fields(self, fieldPath, currentLocal):
        if type(currentLocal) is dict:
            if (len(fieldPath) == 1):
                return currentLocal[fieldPath[0]]
            else:
                return self.filter_fields(fieldPath[1:], currentLocal[fieldPath[0]])
        elif type(currentLocal) is list:
            if (len(fieldPath) == 1):
                values = []
                for item in currentLocal:
                    values.append(self.ilter_fields(fieldPath[0], item))
                return ','.join(values)
            else:
                values = []
                for item in currentLocal:
                    values.append(self.filter_fields(fieldPath, item))
                return ','.join(values)

        return currentLocal


    def proccess_pokemons(self, config, pokemons):
        if not pokemons:
            raise Exception("No pokemons to process")

        csv_rows = []

        for pokemon in pokemons:
            pokemonInfo = pokemon_services.get_pokemon(pokemon["name"])

            values = []

            for fieldPath in config["csv"]["fields"]:
                try:
                    values.append(self.filter_fields(fieldPath, pokemonInfo))
                except Exception as e:
                    logger.error(str(e))
                    logger.error(f"fieldPath = {fieldPath}, pokemonInfo = {pokemonInfo}")
                    raise Exception("Error in filter fields")

            csv_rows.append(values)

            # measure_memory.measure()

            garbage_collect()

            sleep_execution(INTERVAL_REQUISITIONS)

        self.write_rows(csv_rows)
