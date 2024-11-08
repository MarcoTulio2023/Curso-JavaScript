function carregar(){
var msg = window.document.getElementById("msg")
var imagem = window.document.getElementById("imagem")
var data = new Date()
var hora = 0//data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 6 && hora <12){
    imagem.src = 'manhã.png'
    document.body.style.background = '#e2cd9f'
} else if(hora >= 12 && hora < 18){
    imagem.src = 'tarde.png'
    document.body.style.background = '#f9a62e'
} else if(hora >= 18){
    imagem.src = 'noite.png'
    document.body.style.background = '#604a70'
} else if(hora >= 0 && hora < 6){
    imagem.src = 'noite.png'
    document.body.style.background = '#604a70'
}
}
