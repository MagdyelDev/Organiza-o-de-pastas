# Guia do Aluno — Arquitetura de Software

## O que é arquitetura de software?

Arquitetura de software é a forma como organizamos os arquivos e as responsabilidades de um projeto.

Ela não muda o que o sistema faz.
Ela muda como o sistema é construído — e como ele pode crescer e ser mantido.

---

## A analogia da casa

Imagine construir uma casa jogando todos os móveis, tijolos, fios e canos no mesmo cômodo.
A casa existe. Funciona. Mas é impossível de manter.

No software acontece a mesma coisa.
Colocar todos os arquivos na mesma pasta funciona por um tempo — mas dificulta tudo quando o projeto cresce.

---

## As duas grandes responsabilidades de uma aplicação web

Todo sistema web tem, no mínimo, duas camadas:

```
┌─────────────────────────────────┐
│           FRONTEND              │
│                                 │
│  O que o usuário vê e usa       │
│  HTML, CSS, JavaScript          │
│  Roda no navegador              │
└─────────────────┬───────────────┘
                  │
                  │  requisição HTTP
                  │
┌─────────────────▼───────────────┐
│            BACKEND              │
│                                 │
│  As regras e os dados           │
│  Node.js, Express               │
│  Roda no servidor               │
└─────────────────────────────────┘
```

### Frontend
É tudo que roda no navegador do usuário.
Cuida da interface: o que aparece na tela, como se parece, o que acontece ao clicar.

Exemplos de arquivos frontend:
- Páginas HTML
- Arquivos CSS (estilos visuais)
- Arquivos JavaScript que manipulam a tela

### Backend
É tudo que roda no servidor.
Cuida das regras de negócio, dos dados e da comunicação com o banco de dados.

Exemplos de arquivos backend:
- server.js (servidor Express)
- Arquivos de configuração do servidor
- Conexão com banco de dados

---

## O projeto que você vai receber

O projeto **SysVendas** é uma aplicação web funcional com três páginas:
- Página inicial
- Página de login
- Página de produtos

Ele funciona corretamente. Mas todos os arquivos estão misturados na raiz do projeto:

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

O problema é que arquivos do **frontend** e do **backend** estão no mesmo lugar — sem nenhuma separação.

---

## O que você precisa identificar

Olhe cada arquivo e pergunte:

> "Esse arquivo roda no navegador ou no servidor?"

| Arquivo         | Onde roda?    | Por quê?                                      |
|-----------------|---------------|-----------------------------------------------|
| index.html      | Navegador     | É uma página HTML exibida ao usuário          |
| login.html      | Navegador     | É uma página HTML exibida ao usuário          |
| produtos.html   | Navegador     | É uma página HTML exibida ao usuário          |
| style.css       | Navegador     | Define a aparência visual das páginas         |
| app.js          | Navegador     | Controla o comportamento da interface         |
| server.js       | Servidor      | É o servidor Express — roda com Node.js       |
| package.json    | Raiz          | Configuração do projeto — fica na raiz        |
| README.md       | Raiz          | Documentação — fica na raiz                   |

---

## A estrutura esperada após a atividade

```
SysVendas/
  frontend/
    index.html
    login.html
    produtos.html
    style.css
    app.js
  server.js
  package.json
  README.md
```

Os cinco arquivos que rodam no navegador vão para a pasta `frontend/`.
O `server.js` fica na raiz porque ele é o ponto de entrada do servidor.

---

## A única linha de código que precisa ser alterada

Depois de mover os arquivos, o servidor precisa saber que os arquivos do frontend estão
agora dentro da pasta `frontend/`.

Abra o arquivo `server.js` e localize esta linha:

```javascript
// ANTES — aponta para a raiz do projeto
app.use(express.static(path.join(__dirname)))
```

Altere para:

```javascript
// DEPOIS — aponta para a pasta frontend
app.use(express.static(path.join(__dirname, 'frontend')))
```

Essa é a única alteração necessária no código.
Os arquivos HTML não precisam de alteração porque `style.css` e `app.js`
continuam na mesma pasta que os HTMLs — agora dentro de `frontend/`.

---

## Como testar se funcionou

Após mover os arquivos e alterar a linha no `server.js`:

```
npm start
```

Abra no navegador: http://localhost:3000

Se as três páginas carregarem corretamente, a reorganização foi bem-sucedida.

---

## Resumo do que você fez

Você aplicou o conceito mais fundamental da arquitetura de software:

**Separação de responsabilidades.**

Cada pasta agora tem um propósito claro.
Qualquer desenvolvedor que abrir o projeto saberá exatamente onde encontrar cada tipo de arquivo.
