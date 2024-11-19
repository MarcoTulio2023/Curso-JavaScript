function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('ERRO')
    } else{
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'homem.png')
            } else if (idade < 50 ){
                img.setAttribute('src', 'idoso.png')
            } else {
                img.setAttribute('src', 'hold.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 50 ){
                img.setAttribute('src', 'idosa.png')
            } else {
                img.setAttribute('src', 'mold.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}