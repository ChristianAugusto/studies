import csv
from json import load as jsonLoad



CONFIG = jsonLoad(open('./filesConfig/handle_csv.json'))


def generate_csv(rows=None, complement=""):
    if not rows:
        raise Exception('No rows to process')


    CONFIG["openFile"]["file"] = CONFIG["openFile"]["file"].format(complement=complement)

    with open(**CONFIG["openFile"]) as csvFile:
        writer = csv.writer(csvFile, **CONFIG["csvWriter"])
        writer.writerows(rows)