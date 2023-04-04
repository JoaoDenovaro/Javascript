let lista = []

function cadastrar(){
    let user = document.getElementById('input').value
    lista.push(user)
    alert(user + " foi cadastrado com sucesso!")
}

function descadastrar(){
    user = prompt('Digite o email que deseja descadastrar:')
    index = lista.findIndex((item) => item === user)
    console.log(index)
    lista.splice(index, 1)
    alert(user + " foi descadastrado com sucesso!")
}

function listar(){
    console.log(lista)
}