## Executar programa go:

```
go run filename.go
```

## Compilar programa go

```
go build filename.go
./filename
```

## Executar testes programa go

```
go test **/*.go
```

ou

```
go test ./...
```

ou

```
go test pacote
```

## Baixar todas as dependências

```
go mod download
```

## Deleta desnecessários, baixa necessários e atualiza go.mod e go.sum
```
go mod tidy
```
