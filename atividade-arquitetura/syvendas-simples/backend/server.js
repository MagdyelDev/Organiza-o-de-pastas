// server.js
// Servidor principal da aplicacao

const express = require('express')
const path = require('path')

const app = express()
const PORTA = 3000

// dados dos produtos em memoria
var listaProdutos = [
    { id: 1, nome: 'Notebook', preco: 3500 },
    { id: 2, nome: 'Mouse', preco: 90 },
    { id: 3, nome: 'Teclado', preco: 150 }
]

app.use(express.json())

// serve os arquivos estaticos diretamente da raiz do projeto
// isso mistura arquivos do frontend com arquivos do backend
app.use(express.static(path.join(__dirname)))

// retorna a lista de produtos
app.get('/api/produtos', function(req, res) {
    res.json(listaProdutos)
})

app.listen(PORTA, function() {
    console.log('Servidor rodando em http://localhost:' + PORTA)
})
