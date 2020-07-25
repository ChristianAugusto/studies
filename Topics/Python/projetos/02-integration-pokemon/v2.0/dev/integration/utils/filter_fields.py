


def filter_fields(fieldPath, currentLocal):
    if type(currentLocal) is dict:
        if (len(fieldPath) == 1):
            return currentLocal[fieldPath[0]]
        else:
            return filter_fields(fieldPath[1:], currentLocal[fieldPath[0]])
    elif type(currentLocal) is list:
        if (len(fieldPath) == 1):
            values = []
            for item in currentLocal:
                values.append(filter_fields(fieldPath[0], item))
            return ','.join(values)
        else:
            values = []
            for item in currentLocal:
                values.append(filter_fields(fieldPath, item))
            return ','.join(values)

    return currentLocal