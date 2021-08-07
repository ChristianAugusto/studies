from json import load as json_load



def load(path):
    file = open(path, 'r')

    config = json_load(file)

    file.close()

    return config
