# Atividade Prática — Arquitetura de Software

**Unidade Curricular:** Desenvolvimento de Sistemas Web  
**Aula:** 02 — Arquitetura Inicial e Organização Profissional do Código  
**Duração estimada:** 60 minutos  
**Modalidade:** Individual ou em dupla

---

## Situação de Aprendizagem

Você foi contratado como desenvolvedor júnior em uma empresa de tecnologia.

Sua primeira tarefa é trabalhar em um sistema chamado **SysVendas**, desenvolvido às pressas pela equipe anterior. O sistema funciona, mas todos os arquivos foram colocados na mesma pasta — sem nenhuma separação entre o que é interface e o que é servidor.

O líder técnico pediu que você reorganize o projeto antes de qualquer nova funcionalidade ser desenvolvida. Ele deixou claro: **não altere o funcionamento do sistema. Apenas organize a estrutura.**

---

## O que você vai fazer

### Etapa 1 — Explorar o projeto (10 minutos)

Abra o projeto no VS Code e observe os arquivos que existem na raiz:

```
SysVendas/
  index.html
  login.html
  produtos.html
  style.css
  app.js
  server.js
  package.json
  README.md
```

Antes de mover qualquer coisa, execute o projeto para entender como ele funciona:

```
npm install
npm start
```

Acesse http://localhost:3000 e navegue pelas três páginas.

---

### Etapa 2 — Analisar e classificar (10 minutos)

Para cada arquivo, responda a pergunta:

> **"Esse arquivo roda no navegador ou no servidor?"**

Use a tabela abaixo para registrar sua análise:

| Arquivo       | Roda onde?       | Justificativa |
|---------------|------------------|---------------|
| index.html    |                  |               |
| login.html    |                  |               |
| produtos.html |                  |               |
| style.css     |                  |               |
| app.js        |                  |               |
| server.js     |                  |               |
| package.json  |                  |               |
| README.md     |                  |               |

---

### Etapa 3 — Reorganizar a estrutura (15 minutos)

Com base na análise, crie a seguinte estrutura de pastas:

```
SysVendas/
  frontend/
    (mova aqui os arquivos que rodam no navegador)
  server.js
  package.json
  README.md
```

Mova os arquivos para as pastas corretas.

---

### Etapa 4 — Corrigir o servidor (10 minutos)

Após mover os arquivos, o servidor não saberá mais onde encontrar o frontend.

Abra o `server.js` e localize a linha que serve os arquivos estáticos.
Altere o caminho para apontar para a nova pasta `frontend/`.

**Dica:** procure pela função `express.static` no arquivo.

---

### Etapa 5 — Testar (5 minutos)

Execute o projeto novamente:

```
npm start
```

Acesse http://localhost:3000 e verifique se:

- [ ] A página inicial carrega
- [ ] A página de login carrega e o formulário funciona
- [ ] A página de produtos carrega e exibe os itens da tabela

Se todas as três páginas funcionarem, a atividade foi concluída com sucesso.

---

### Etapa 6 — Reflexão (10 minutos)

Responda por escrito as perguntas abaixo. Pode ser num documento, num bloco de notas ou no próprio README do projeto.

1. Por que separar arquivos de frontend e backend facilita o trabalho de uma equipe?

2. O que poderia acontecer se o projeto continuasse crescendo sem essa separação?

3. Além da separação frontend/backend, você consegue identificar alguma outra melhoria que poderia ser feita na organização deste projeto?

---

## O que entregar

- Projeto reorganizado e funcionando
- Tabela de classificação preenchida (Etapa 2)
- Respostas das perguntas de reflexão (Etapa 6)

---

## Critérios de avaliação

| Critério                                                   | Sim | Parcial | Não |
|------------------------------------------------------------|-----|---------|-----|
| Os arquivos de frontend foram movidos para a pasta correta |     |         |     |
| O servidor foi ajustado e o projeto continua funcionando   |     |         |     |
| A tabela de classificação foi preenchida com justificativa |     |         |     |
| As perguntas de reflexão foram respondidas                 |     |         |     |

---

## Lembre-se

> O objetivo desta atividade não é programar funcionalidades novas.
> É aprender a pensar antes de codar — organizando o projeto da forma que
> profissionais de verdade fazem antes de qualquer desenvolvimento.
