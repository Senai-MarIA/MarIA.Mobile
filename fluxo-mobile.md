# Fluxo Mobile

## Usuário

MariaGO

## Tela 01 - ViaCEP

Digita o CEP, faz a requisição pelo ViaCEP e retorna os dados:

```js
logradouro: data.logradouro,
bairro:
cidade:
uf:
cep:
```

O fluxo da criação da API é trabalhar em conjunto com o ViaCEP. Ao pedir a requisição, ele vai mandar os dados listados acima e, logo em seguida, buscar horários e tipo de coleta do CEP em questão, colocando dentro de um JSONB.

## Tela 02

```json
{
  "comum": {
    "dias": [
      1,
      3,
      5
    ],
    "horario": "19:35 - 19:40"
  },
  "reciclavel": {
    "dias": [
      4
    ],
    "horario": "08:15"
  },
  "cata_bagulho": {
    "horario": "06:00 - 14:20",
    "dia_texto": "Quinzenal"
  }
}
```

Exemplo de como fiz os dados retornados no banco, porém manualmente.

O fluxo desejado é o usuário digitar o CEP e o ViaCEP coletar os dados da figura 1 e automaticamente gerar os dados da figura 2, mesmo que seja aleatoriamente, mas com os dados bem fiéis ao lixo comum, reciclável e cata-bagulho, de modo que cada CEP tenha um retorno de dados diferente do outro, ou que pelo menos não seja padronizado, sendo algo fluido e legal visualmente ao usuário.

## Observação

Uma observação é que não é obrigação sua, mas se puder ajudar, o mapa do mobile retorna o CEP desejado e aparece normalmente. Porém, queria que ele fosse interativo e buscasse ao menos pontos de coleta perto, ou algo similar.
