## Banco Users (MongoDB):
- username: kAiiN
- password: aKImeowV6Dt4gTrB

## Métodos HTTP:
- get: listar
- post: criar
- put: editar vários
- patch: editar um
- delete: deletar

## Request:
- query params (get): consultas (ex: servidor.com/series?tipo=comedia&streaming=netflix)
- route params (get / put / delete): buscar, deletar ou editar algo específico (ex: get servidor.com/users/1)
- body params (post / put): enviar informações pelo body (ex: { "nome": "Caio", "id": 1 })

## Status HTTP
- 2xx: sucesso
- 4xx: erro client (front-end)
- 5xx: erro server (back-end)