let texto = prompt('Digite uma frase: ')
    if (texto.length < 20){
        alert('A frase é pequena (menor que 20 caracteres)\n' + texto + '\nTem ' + texto.length + ' caracteres')
    }    
    else if (texto.length <= 30){
        alert('A frase é média (entre 20 e 30 caracteres)\n' + texto + '\nTem ' + texto.length + ' caracteres')
    }
    else if (texto.length < 40){
        alert('A frase é grande (maior que 30 caracteres)\n' + texto + '\nTem ' + texto.length + ' caracteres')
    }
    else {
        alert('Não vou contar kkk\n' + texto + '\nTem ' + texto.length + ' caracteres')
    }