let but = document.querySelector(".but")
but.addEventListener("click", sorteio)

function sorteio(){
    let div_comp = document.querySelector(".computer")
    let div_user = document.querySelector(".user")
    
    let pontos_comp = 0
    let pontos_user = 0
    
    div_comp.innerHTML = ''
    div_user.innerHTML = ''

    // setTimeout(() => {
    //     div_comp.innerHTML = ''
    //     div_user.innerHTML = ''
    // }, 300)

    for (let i = 0; i<3; i++){
        let aleatorio = (Math.floor(Math.random() * 6 + 1))
        pontos_comp += aleatorio
        div_comp.innerHTML += `<img src="./assets/dice-${aleatorio}.png"/>`
    }
    if (pontos_comp < 10){
        div_comp.innerHTML += '0' + String(pontos_comp)
    }
    else{div_comp.innerHTML += String(pontos_comp)}

    for (let i = 0; i<3; i++){
        let aleatorio = (Math.floor(Math.random() * 6 + 1))
        pontos_user += aleatorio
        div_user.innerHTML += `<img src="./assets/dice-${aleatorio}.png"/>`
    }
    if (pontos_user < 10){
        div_user.innerHTML += '0' + String(pontos_user)
    }
    else{div_user.innerHTML += String(pontos_user)}

    // setTimeout(() => {
    //     mostrar_placar(pontos_comp, pontos_user)
    // }, 300)


    
}

function mostrar_placar(pontos_comp, pontos_user){
    if (pontos_comp > pontos_user){
        alert(`Computador: ${pontos_comp}
Usuário: ${pontos_user}
////////////////////////////////
Perdeu otario`)
    }
    else if (pontos_comp < pontos_user){
        alert(`Computador: ${pontos_comp}
Usuário: ${pontos_user}
////////////////////////////////
Boa`)
    }
    else{
        alert(`Computador: ${pontos_comp}
Usuário: ${pontos_user}
////////////////////////////////
Empaty`)
    }
}
