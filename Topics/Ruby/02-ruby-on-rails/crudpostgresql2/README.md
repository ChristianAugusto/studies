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
rails g model person name:string email:string cpf:string rg:string
```

2.

```
01-create-database.sql
```

3.

```
bundle exec rake db:migrate (se já existir a tabela, vai dar erro)
```
