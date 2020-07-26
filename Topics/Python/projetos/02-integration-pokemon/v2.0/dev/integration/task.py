from datetime import datetime
from pytz import timezone

from integration.constants import (
    BUILD_DIR_PROD, BUILD_DIR_DEV, UPLOAD_DIR_DEV,
    TIMEZONE_DEFAULT, LIMIT_POKEMONS
)
from integration.classes.csv import CSV
from integration.utils import logger, load_config, clean
from integration.services import pokemons as pokemon_services



def execute(event, environment='prod'):
    init_now = datetime.now(timezone(TIMEZONE_DEFAULT))

    logger.info(f"Running for event {event}, environment: {environment}")


    CONFIG = load_config.load(event["clientConfig"])

    logger.info(f"Config = {CONFIG}")


    build_dir = BUILD_DIR_PROD

    if environment == 'dev':
        build_dir = BUILD_DIR_DEV

    file = None

    if CONFIG["type"] == "csv":
        file = CSV(build_dir, init_now, CONFIG["csv"]["header"])


    total_pokemons = pokemon_services.get_total_pokemons()

    logger.info(f"Total pokemons = {total_pokemons}")


    pokemons_processed = 0
    current_offset = 0

    while pokemons_processed < total_pokemons:
        try:
            pokemons = pokemon_services.get_pokemons(current_offset)
        except Exception as e:
            logger.error(str(e))
            raise Exception("Error in get pokemons")


        try:
            file.proccess_pokemons(CONFIG, pokemons)
        except Exception as e:
            logger.error(str(e))
            raise Exception("Error in process pokemons")


        pokemons_processed += LIMIT_POKEMONS
        current_offset += LIMIT_POKEMONS

        progress = round(current_offset*100 / total_pokemons, 2)
        logger.info(f"Build progress {progress if progress <= 100.00 else 100.00}%")


    if environment == 'dev':
        logger.info(f'Uniting dev upload, destination = {CONFIG["devDestination"]}')
        file.upload_dev(CONFIG["devDestination"], init_now)
    else:
        for destination in CONFIG["destinations"]:
            logger.info(f"Uniting upload, destination = {destination}")

            """ Upload prod """

    clean.clean_file(file.local_path)


    final_now = datetime.now(timezone(TIMEZONE_DEFAULT))

    logger.info(f"Execution time = {final_now - init_now}")
