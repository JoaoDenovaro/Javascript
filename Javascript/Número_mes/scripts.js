while (true){
    let texto = prompt('Digite o número do mes:')
    let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    
    let mesnum = Number(texto)
    let mes = meses[mesnum - 1]
    
    if (mesnum > 0 && mesnum < 13){
        alert(mes)
    }
    else{
        alert('Mês inválido')
    }
}

