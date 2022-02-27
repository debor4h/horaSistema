function carregar(){
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    dataAtual = new Date();
    //o comprimento é de 2 e se não tiver 2 preencher com zero
    //convertendo hora p string, pq padStart e um metodo de string

    hora = dataAtual.getHours().toString().padStart(2, '0')
    minutos = dataAtual.getMinutes().toString().padStart(2, '0')
    segundos = dataAtual.getSeconds().toString().padStart(2, '0')
    dia = dataAtual.getDate().toString().padStart(2,'0')
    mes = String(dataAtual.getMonth()+ 1).padStart(2,'0')

    ano = dataAtual.getFullYear()
    msg.innerHTML = `Hoje é ${dia}/${mes}/${ano} são ${hora}:${minutos}:${segundos} horas.`
  
    setTimeout('carregar()',1000);

    if(hora >= 0 && hora<6){ //boa madrugada
        img.src = 'imagens/madrugada.png'
        document.body.style.background = '#a7a7a7'  
    }else if(hora>=6 && hora<12){ // bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#acbac4'
    }else if(hora>=12 && hora<18){ //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#8cb9c0' 
    }else{ //boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#021116'
    }
}
