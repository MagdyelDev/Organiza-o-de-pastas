// app.js
// JavaScript do frontend
// Este arquivo controla todas as paginas do sistema ao mesmo tempo

document.addEventListener('DOMContentLoaded', function() {
    marcarPaginaAtual()
    iniciarPagina()
})

// --- NAVEGACAO ---

function marcarPaginaAtual() {
    var links = document.querySelectorAll('nav a')
    var paginaAtual = window.location.pathname.split('/').pop()
    links.forEach(function(link) {
        if (link.getAttribute('href') === paginaAtual) {
            link.classList.add('ativo')
        }
    })
}

function iniciarPagina() {
    var pagina = window.location.pathname.split('/').pop()

    if (pagina === 'index.html' || pagina === '') {
        iniciarHome()
    }

    if (pagina === 'login.html') {
        iniciarLogin()
    }

    if (pagina === 'produtos.html') {
        iniciarProdutos()
    }
}

// --- HOME ---

function iniciarHome() {
    var hora = new Date().getHours()
    var saudacao = 'Boa noite'
    if (hora >= 6 && hora < 12) saudacao = 'Bom dia'
    if (hora >= 12 && hora < 18) saudacao = 'Boa tarde'

    var el = document.getElementById('saudacao')
    if (el) el.textContent = saudacao + ', bem-vindo ao SysVendas!'
}

// --- LOGIN ---

function iniciarLogin() {
    var btn = document.getElementById('btnEntrar')
    if (btn) btn.addEventListener('click', processarLogin)

    var form = document.getElementById('formLogin')
    if (form) {
        form.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') processarLogin()
        })
    }
}

function processarLogin() {
    var email = document.getElementById('email').value.trim()
    var senha = document.getElementById('senha').value.trim()
    var msg = document.getElementById('mensagem')

    msg.style.display = 'none'

    if (!email || !senha) {
        msg.textContent = 'Preencha e-mail e senha'
        msg.className = 'mensagem erro'
        msg.style.display = 'block'
        return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        msg.textContent = 'Informe um e-mail valido'
        msg.className = 'mensagem erro'
        msg.style.display = 'block'
        return
    }

    msg.textContent = 'Login realizado (simulacao)'
    msg.className = 'mensagem sucesso'
    msg.style.display = 'block'

    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
}

// --- PRODUTOS ---

function iniciarProdutos() {
    carregarProdutos()
}

function carregarProdutos() {
    var aviso = document.getElementById('aviso')
    aviso.textContent = 'Carregando produtos...'
    aviso.style.display = 'block'

    fetch('/api/produtos')
        .then(function(res) { return res.json() })
        .then(function(lista) {
            aviso.style.display = 'none'
            preencherTabela(lista)
            document.getElementById('contador').textContent = lista.length + ' produto(s) encontrado(s)'
        })
        .catch(function() {
            aviso.textContent = 'Erro ao carregar produtos. Verifique se o servidor esta ativo.'
        })
}

function preencherTabela(lista) {
    var tbody = document.querySelector('#tabelaProdutos tbody')
    tbody.innerHTML = ''
    lista.forEach(function(item) {
        var tr = document.createElement('tr')
        var preco = 'R$ ' + parseFloat(item.preco).toFixed(2).replace('.', ',')
        tr.innerHTML = '<td>' + item.id + '</td><td>' + item.nome + '</td><td>' + preco + '</td>'
        tbody.appendChild(tr)
    })
}
