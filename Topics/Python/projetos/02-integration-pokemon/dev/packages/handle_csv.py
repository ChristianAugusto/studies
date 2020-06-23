import csv
from json import load as jsonLoad



def generate_csv(config, rows=None):
    if not rows:
        raise Exception('No rows to process')

    with open(**config["openFile"]) as csvFile:
        writer = csv.writer(csvFile, **config["csvWriter"])
        writer.writerows(rows)