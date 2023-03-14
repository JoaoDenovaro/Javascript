let day = ""
hoje = new Date().getDay()
switch (hoje){
    case 0:
        day = "Domingo"; break;
    case 1:
        day = "Segunda"; break;
    case 2:
        day = "Terça"; break;
    case 3:
        day = "Quarta"; break;
    case 4:
        day = "Quinta"; break;
    case 5:
        day = "Sexta"; break;
    case 6:
        day = "Sábado"; break;
    default:
        alert("Valor inválido")
}
alert("Hoje é " + day)