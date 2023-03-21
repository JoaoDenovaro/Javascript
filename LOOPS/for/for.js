function Contagem() {
    num = prompt("DIGAI UM NUMERO")
    document.write("<br>")
    for (num; num > 0; num--){
        document.write(num + "<br>")
    }
}

function LoopFor(){
    console.log("rodei")
    for(let i = 0; i <=10; i++){
        document.write('OI')
    }
    Contagem()
}