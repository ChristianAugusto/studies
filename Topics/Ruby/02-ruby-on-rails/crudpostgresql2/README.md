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
bin/rails db:create
```

2.

```
bin/rails g model person name:string email:string cpf:string:uniq rg:string
```

3.

```
bin/rails db:migrate (se já existir a tabela, vai dar erro)
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
    "name": "Tiago Nicolas da Rocha",
    "email": "evelynvalentinaluciasantos-83@gmx.com",
    "cpf": "70101273525",
    "rg": "10.880.136-6"
  },
  {
    "name": "Kaique Ricardo da Paz",
    "email": "kaique.ricardo.paz@gmail.com",
    "cpf": "82062572506",
    "rg": "49.502.455-7"
  },
  {
    "name": "Gabrielly Beatriz Sandra Souza",
    "email": "gabriellybeatrizsandrasouza_@mirabeau.art.br",
    "cpf": "04306458644",
    "rg": "32.898.541-7"
  },
  {
    "name": "Danilo Caio Pinto",
    "email": "danilocaiopinto__danilocaiopinto@chavao.com.br",
    "cpf": "45936256707",
    "rg": "37.703.565-8"
  },
  {
    "name": "Manoel Erick Duarte",
    "email": "manoelerickduarte@vlcorporate.com",
    "cpf": "77975679569",
    "rg": "48.331.343-9"
  },
  {
    "name": "Manoel Erick Duarte",
    "email": "manoelerickduarte@vlcorporate.com",
    "cpf": "19915296002",
    "rg": "48.331.3439"
  }
]
```
