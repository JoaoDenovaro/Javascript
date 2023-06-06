
URL_BASE = 'http://localhost:/api'

form = document.getElementById("#scheduleForm")

function chamarEspecialidades() {
    dados = fetch(`${URL_BASE}/consultas`).then(resposta => resposta.json())
    .then(dados => {
        let select = document.querySelector("#especialities")
        for (numero of dados){
            select.innerHTML += `<option value=${numero.id}>${numero.especiality}</option>`
        }
    })
}

function chamarHorarios() {
    valor_especialidade = document.querySelector("#especialities").value
    console.log(valor_especialidade)

    document.querySelector("#selbut").remove()

    fetch(`${URL_BASE}/consultas/${valor_especialidade}`)
    .then(resposta => resposta.json())
    .then(dados => {
        document.querySelector("#schedule_dates").style.display = "initial"

        for (data of dados.openDates){
            document.querySelector("#schedule_dates").innerHTML += `<option value=${data.id}>${data.date}</option>`
        }
    })
}

function Marcar() {
    form = document.querySelector("#scheduleForm")
    novaConsulta = {
        name: form.elements['nome'].value,
        phone: form.elements['telefone'].value,
        convenio: form.elements['convenio'].value,
        date: form.elements['data'].value,
        especiality: form.elements['especialidade'].value
    }
    console.log(novaConsulta)
    
    fetch(`${URL_BASE}/consultas`, {
        method: "POST",
        body: JSON.stringify(novaConsulta),
        headers: {"Content-type" : "application/json"}
    })
}

function chamarConsultas() {
    fetch(`${URL_BASE}/marcadas`).then(resposta => resposta.json())
    .then(dados => {
        let consultas_box = document.querySelector(".appointments_container")
        for (consulta of dados){
            consultas_box.innerHTML += `<section class="consulta" >Nome: ${consulta.name}<br> Data: ${consulta.date} <br>Especialidade: ${consulta.especiality} </option>`
        }
    })
}

chamarEspecialidades()
chamarConsultas()


//if (form.elements['name'] != '' && form.elements['telefone'] != '' && form.elements['convenio'].value != '') {}