from requests import request


def insert_into_mask(values):
    return f"INSERT INTO CI63A_EMPLOYEE VALUES ({','.join(values)});"


def person_tuple(person):
    return (
        f"'{person['nome'].split(' ')[0]}'",
        f"'{person['nome'].split(' ')[1]}'",
        f"'{person['data_nasc']}'",
        f"'{('MALE' if person['sexo'] == 'Masculino' else 'FEMALE')}'",
        f"'{'8500.00'}'",
        f"'{person['endereco'].split(' ')[0]}'",
        f"'{person['endereco'].split(' ')[1]}'",
        f"'{person['numero']}'",
        f"'{'NULL'}'",
        f"'{person['bairro']}'",
        f"'{person['cep']}'",
        f"'{person['cidade']}'",
        f"'{person['estado']}'"
    )


def get_people():
    for _try in range(0, 5):
        try:
            config = {
                "method": "POST",
                "url": "https://www.4devs.com.br/ferramentas_online.php",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                "data": "acao=gerar_pessoa&sexo=I&pontuacao=S&idade=0&txt_qtde=30",
                "timeout": 120
            }

            req = request(**config)

            return req.json()
        except Exception as e:
            print(f"Error in get_people, try number {_try+1}")
            print(str(e))


def main():
    output = None

    try:
        output = open("build/employees.sql", "w")

        total_people = 0

        while total_people < 20:
            people = get_people()

            for person in people:
                _person_tuple = person_tuple(person)

                insert_into_cmd = insert_into_mask(_person_tuple)

                output.write(insert_into_cmd)
                output.write("\n")

            total_people += len(people)

            print(f"People processed = {total_people}")

        print("Success execution")
    except Exception as e:
        print("Error in execution")
        print(str(e))

    if output != None:
        output.close()


main()
