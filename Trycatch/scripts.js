empresas = []

var form = document.getElementById("form")
var botao = document.getElementById("btn")
var campo = document.getElementById("campo")
var botao2 = document.getElementById("btn2")


botao.addEventListener("click", mostrarBotao)

function mostrarBotao() {
    botao2.hidden = false
}

function mostrarEmpresas() {
    for (let empresa of empresas){
        campo.innerHTML += (empresa.nome + ', ' + empresa.cidade + ', '  + empresa.valor)
    }
}

botao.addEventListener("click", cadastrar)

function cadastrar() {
    // testes
    try{
        // valor = document.getElementById("valor")
        // nome = document.getElementById("nome")
        // cidade = document.getElementById("cidade")

        let nome = document.getElementById("nome_empresa").value
        let cidade = document.getElementById("cidade").value
        let valor = Number(document.getElementById('valor').value)


        if (nome === '' || cidade === ''){
            throw new TypeError('Todos os campos precisam ser preenchidos')
        }
        else if (valor <= 0){
            throw new Error('O valor precisa ser maior que 0')
        }

        // add na array
        empresas.push({
            "nome" : nome, "cidade": cidade, "valor": valor
        })

        mostrarEmpresas()
    }
    
    catch (error) {
        alert(error.message)
    }

    
    // mostrar na tela
}