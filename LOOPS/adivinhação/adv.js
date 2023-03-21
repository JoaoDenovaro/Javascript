function Jogo(){
    let certo = Math.floor(Math.random() * 10)
    var input = -1
    let lista_tent = ''
        while (certo != input){
            input = Number(prompt(`Seu número: ${lista_tent}`))
            if (certo != input){
                alert('Errouu')
                lista_tent = '[' + lista_tent.slice(1, -1) + input + ' ' + ']'
            }
            else{
                alert('Arrasou!')
                document.getElementById('xuris').innerHTML = certo
            }
        }
}