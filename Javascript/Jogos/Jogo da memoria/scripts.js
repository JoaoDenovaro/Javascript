
let cartas = document.querySelectorAll(".memory-card")
for (let carta of cartas){
    carta.addEventListener("click", virarCarta)
}

let primeiraCarta, segundaCarta 
let algumaCartaVirou = false
let listaCartas = []
travarOTabuleiro = false

function virarCarta(){
    if(travarOTabuleiro){
        return
    }

    this.classList.toggle("flip")

    if(!algumaCartaVirou) {
        primeiraCarta = this
        algumaCartaVirou = true
        return
    }

    else if (this === primeiraCarta){
        return
    }

    segundaCarta = this
    algumaCartaVirou = false

    if (segundaCarta.dataset.framework === primeiraCarta.dataset.framework & segundaCarta != 'None'){
        primeiraCarta.removeEventListener("click", virarCarta)
        segundaCarta.removeEventListener("click", virarCarta)
        listaCartas.push(segundaCarta.dataset.framework)

        if (listaCartas.length == 6){
            setTimeout(() => {
                alert('PARABEIS')
            }, 500)
        }
        return
    }
    else{
        travarOTabuleiro = true
        setTimeout(() => {
            primeiraCarta.classList.remove("flip")
            segundaCarta.classList.remove("flip")
            travarOTabuleiro = false
        }, 750)
    }
 
}

function aleatorio(){
    for (carta of cartas){
        let aleatorio = (Math.floor(Math.random() * 12))
        carta.style.order = aleatorio
    }
}

aleatorio()

let botao = document.querySelector('button')
botao.addEventListener("click", reiniciar)

function reiniciar(){
    travarOTabuleiro = true
    for (let carta of cartas){
        carta.addEventListener("click", virarCarta)
    }
    listaCartas = []
    for (let carta of cartas){
        setTimeout(() => {
            carta.classList.remove("flip")
        }, 300)
        setTimeout(() => {
            aleatorio()
            travarOTabuleiro = false
        }, 1000)
    }
}