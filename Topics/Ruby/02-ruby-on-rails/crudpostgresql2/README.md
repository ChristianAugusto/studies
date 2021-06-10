# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

- Ruby version

- System dependencies

- Configuration

- Database creation

- Database initialization

- How to run the test suite

- Services (job queues, cache servers, search engines, etc.)

- Deployment instructions

- ...

## Build repo command

This project has builded with the following command:

```
rails new crudpostgresql --api --database=postgresql
```

## Steps

1.

```
bin/rails g model person name:string email:string cpf:string rg:string
```

2.

```
sql/01-create-database.sql
```

3.

```
bin/bundle exec rake db:migrate (se já existir a tabela, vai dar erro)
```

4. Install rspec e rspec-rails

5.

```
bin/rails generate rspec:install
```

6.

```
bin/rails generate rspec:model person
```

7.

```
bin/rake spec
```

## Dados

```json
[
  {
    "id": 1,
    "name": "Tiago Nicolas da Rocha",
    "email": "evelynvalentinaluciasantos-83@gmx.com",
    "cpf": "70101273525",
    "rg": "10.880.136-6",
    "created_at": "2021-06-07T18:12:00.885Z",
    "updated_at": "2021-06-07T18:12:00.885Z"
  },
  {
    "id": 2,
    "name": "Kaique Ricardo da Paz",
    "email": "kaique.ricardo.paz@gmail.com",
    "cpf": "82062572506",
    "rg": "49.502.455-7",
    "created_at": "2021-06-07T18:14:20.951Z",
    "updated_at": "2021-06-07T18:14:20.951Z"
  },
  {
    "id": 3,
    "name": "Gabrielly Beatriz Sandra Souza",
    "email": "gabriellybeatrizsandrasouza_@mirabeau.art.br",
    "cpf": "04306458644",
    "rg": "32.898.541-7",
    "created_at": "2021-06-07T18:14:56.466Z",
    "updated_at": "2021-06-07T18:14:56.466Z"
  },
  {
    "id": 4,
    "name": "Danilo Caio Pinto",
    "email": "danilocaiopinto__danilocaiopinto@chavao.com.br",
    "cpf": "45936256707",
    "rg": "37.703.565-8",
    "created_at": "2021-06-07T18:15:28.799Z",
    "updated_at": "2021-06-07T18:36:17.013Z"
  },
  {
    "id": 5,
    "name": "Manoel Erick Duarte",
    "email": "manoelerickduarte@vlcorporate.com",
    "cpf": "77975679569",
    "rg": "48.331.343-9",
    "created_at": "2021-06-07T18:17:15.371Z",
    "updated_at": "2021-06-07T18:17:15.371Z"
  },
  {
    "id": 8,
    "name": "Manoel Erick Duarte",
    "email": "manoelerickduarte@vlcorporate.com",
    "cpf": "19915296002",
    "rg": "48.331.3439",
    "created_at": "2021-06-07T18:35:46.005Z",
    "updated_at": "2021-06-07T18:36:32.728Z"
  }
]
```
