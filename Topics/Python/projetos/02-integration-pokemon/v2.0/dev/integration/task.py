from datetime import datetime
from pytz import timezone

from integration.constants import (
    BUILD_DIR_PROD, BUILD_DIR_DEV, UPLOAD_DIR_DEV,
    TIMEZONE_DEFAULT, LIMIT_POKEMONS
)
from integration.classes.csv import CSV
from integration.utils import logger, load_config
from integration.services import pokemons as pokemon_services




def execute(event, environment='prod'):
    now = datetime.now(timezone(TIMEZONE_DEFAULT))

    logger.info(f"Running for event {event}, environment: {environment}")


    CONFIG = load_config.load(event["clientConfig"])

    logger.info(f"Config = {CONFIG}")


    build_dir = BUILD_DIR_PROD

    if environment is 'dev':
        build_dir = BUILD_DIR_DEV

    file = None

    if CONFIG["type"] == "csv":
        file = CSV(build_dir, now, CONFIG["csv"]["header"])


    total_pokemons = pokemon_services.get_total_pokemons()

    logger.info(f"Total pokemons = {total_pokemons}")


    pokemons_processed = 0
    current_offset = 0

    while pokemons_processed < total_pokemons:
        try:
            pokemons = pokemon_services.get_pokemons(current_offset)
        except Exception as e:
            logger.error(str(e))
            raise Exception('Error in get pokemons')

        """
        TODO: process pokemons

        try:
            file.process_pokemons(pokemons, fields)
        except Exception as e:
            logger.error(str(e))
            raise Exception('Error in process pokemons')
        """

        pokemons_processed += LIMIT_POKEMONS
        current_offset += LIMIT_POKEMONS

        progress = round(current_offset*100 / total_pokemons, 2)
        logger.info(f"Progress {progress if progress <= 100.00 else 100.00}%")