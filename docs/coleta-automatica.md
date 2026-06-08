# Geração Automática de Dados de Coleta

## O que foi implementado

Ao digitar um CEP na tela inicial, o app agora busca automaticamente os horários e tipos de coleta para aquela região — sem necessidade de cadastro manual no banco.

---

## Fluxo

```
Usuário digita o CEP
        ↓
ViaCEP retorna os dados do endereço
        ↓
    ┌───────────────────────────────────┐
    │ UF = SP?                          │
    │  Não → exibe aviso e para         │
    │  Sim → continua                   │
    └───────────────────────────────────┘
        ↓
Supabase (Coletas_Bairro) é consultado pelo CEP
        ↓
    ┌───────────────────────────────────┐
    │ CEP já existe?                    │
    │  Sim → usa dados salvos           │
    │  Não → gera dados + salva + usa   │
    └───────────────────────────────────┘
        ↓
Navega para Home com endereço + dados de coleta
```

---

## Dados gerados

```json
{
  "comum": {
    "dias": [1, 3, 5],
    "horario": "18:00 - 20:00"
  },
  "reciclavel": {
    "dias": [4],
    "horario": "08:00 - 11:00"
  },
  "cata_bagulho": {
    "horario": "06:00 - 14:00",
    "dia_texto": "Quinzenal"
  }
}
```

| Campo | Descrição |
|---|---|
| `dias` | Array com números dos dias da semana (0 = Dom, 1 = Seg ... 6 = Sáb) |
| `horario` | Janela de horário da coleta |
| `dia_texto` | Frequência do cata-bagulho (`"Quinzenal"` ou `"Mensal"`) |

---

## Validações

| Etapa | Regra |
|---|---|
| Comprimento | CEP deve ter 8 dígitos |
| CEP válido | ViaCEP não pode retornar erro |
| Estado | `uf` retornado deve ser `SP` |

CEPs de outros estados exibem aviso e interrompem o fluxo antes de qualquer consulta ao banco.

---

## Regras de geração

**Lixo Comum**
- 2 ou 3 dias por semana
- Horário noturno (17h–21h)

**Reciclável**
- 1 dia por semana
- Nunca coincide com os dias do lixo comum
- Horário matutino (7h–13h)

**Cata-Bagulho**
- Frequência quinzenal ou mensal
- Horário diurno amplo (6h–16h)

---

## Determinismo

A geração usa o número do CEP como seed. Isso garante que:

- O mesmo CEP sempre produz a mesma agenda
- CEPs diferentes produzem agendas diferentes
- Não há dependência de dados externos além do ViaCEP

---

## Persistência

Após gerar, os dados são salvos na tabela `Coletas_Bairro` do Supabase. Na próxima consulta do mesmo CEP, os dados já existem e são reutilizados diretamente.

---

## Arquivos envolvidos

| Arquivo | Papel |
|---|---|
| `src/Services/gerarColeta.js` | Lógica de geração dos dados |
| `src/pages/CepFolder/index.jsx` | Orquestra ViaCEP + Supabase + geração |
| `src/Services/supabaseClient.js` | Conexão com o banco |
| `src/Services/Viacep.js` | Busca de endereço por CEP |
