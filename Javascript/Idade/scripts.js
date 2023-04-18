while (true){
    let texto = prompt('Digite o ano em que nasceu: ')
    let idade = 2023 - texto
    if (idade < 16){
        alert('Não vota\n' + idade + ' anos')
    }    
    else if (idade <= 18){
        alert('Voto opcional\n' + idade + ' anos')
    }
    else if (idade < 70){
        alert('Voto obrigatório\n' + idade + ' anos')
    }
    else {
        alert('Voto opcional\n' + idade + ' anos')
    }
}