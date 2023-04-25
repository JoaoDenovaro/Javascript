let usuarios = [
    {nome: "Fernanda", email: "nanda@email"}
] //nosso banco de dados
let ul = document.getElementById("usuarios_salvos")

function cadastro() {
    let nome = document.getElementById("name").value 
    let email = document.getElementById("email").value 

    if(nome == "" || email == "") {
        alert("Prencha todos os campos")
        return
    }

    for(let usuario of usuarios) {
        if(email == usuario.email) {
            alert("Usuario já cadastrado!")
            return
        }
    }

    const novoUsuario = {
        //nome: nome,
        nome,
        email
    }

    usuarios.push(novoUsuario)

    alert("Usuário cadastrado com sucesso!")
}

const usuariosSalvos = function () {
    //função anonima
    ul.innerHTML = ""

    for(let usuario of usuarios) {
        ul.innerHTML += `<li>Nome: ${usuario.nome}, E-mail: ${usuario.email}</li>`
    }
}


const descadastro = () => {
    let emailDescadastro = prompt("Digite o email para descadastrar")

    for(let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].email === emailDescadastro) {
            usuarios.splice(i, 1)
            alert("Email descadastrado com sucesso!")
            usuariosSalvos()
            
            return;
        }
    }
    
    alert("Usuário não encontrado!")
}


