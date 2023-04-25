listaAtletas = [
    {nome: 'Pedro Sampaio', esporte: 'Nado Sincronizado'},
    {nome: 'José Luis', esporte: 'Nado Sincronizado'},
    {nome: 'José Eduardo', esporte: 'Tênis'},
    {nome: 'Rodriguinho o brabo', esporte: 'Basquete'}
]

listaHtml = ''

function mostrarLista(){
    var lista = document.getElementById("lista");

    listaHtml = `
        <table>
        <thead>
            <tr>
                <th colspan="2" id="first">Atletas</th>
            </tr>
        `
    for (atleta of listaAtletas){
        
        listaHtml += `
        <tr>
            <th>${atleta.nome}</th>
            <th>${atleta.esporte}</th>
        </tr>`
    }

    document.getElementById("but1").innerHTML = "Ocultar Lista"
    document.getElementById("but1").addEventListener("click", ocultarLista)

    lista.innerHTML = listaHtml
}

function ocultarLista(){
    var lista = document.getElementById("lista");
    lista.innerHTML = ""

    botao = document.getElementById("but1")
    botao.innerHTML = "Veja a lista dos atletas mais foda"
    botao.removeEventListener("click", ocultarLista)
    botao.addEventListener("click", mostrarLista)
}

function cadastrar(){
    var lista = document.getElementById("lista");
    lista.innerHTML = ""

    document.getElementById("inputNome").hidden = false
    document.getElementById("inputEsporte").hidden = false
    document.getElementById("but3").hidden = false

    document.getElementById("but1").hidden = true
}

function comitar(){
    nome =  document.getElementById("inputNome").value
    esporte =  document.getElementById("inputEsporte").value
    listaAtletas.push({
        nome: nome,
        esporte: esporte
    })
    
    document.getElementById("inputNome").hidden = true
    document.getElementById("inputEsporte").hidden = true
    document.getElementById("but3").hidden = true

    document.getElementById("but1").hidden = false
    document.getElementById("but1").innerHTML = "Veja a lista dos atletas mais foda"
}

function exportarJson(){
    let json = JSON.stringify(listaAtletas)
}