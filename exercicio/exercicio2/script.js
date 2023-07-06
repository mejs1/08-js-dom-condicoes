function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!') 
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value) 
    var img = document.createElement('img')
    img.setAttribute('id', 'foto!')
    var gênero_masculino = document.getElementById('masculino')
    var gênero_feminino = document.getElementById('feminino')
    if (gênero_masculino.checked) {
        var gênero = 'Homem'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('scr', 'foto-bebe-m.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('scr', 'foto-jovem-m.png')
        } else if (idade < 50) {
            // Adulto 
            img.setAttribute('scr', 'foto-adulto-m.png')
        } else {
            // Idoso 
            img.setAttribute('scr', 'foto-idoso-m.png')
        }
    } else if (gênero_feminino.checked) {
        var gênero = 'Mulher' 
        if (idade >= 0 && idade < 10) {
            // Criança 
            img.setAttribute('scr', 'foto-bebe-f.png')
        } else if (idade < 21) {
            // Jovem 
            img.setAttribute('scr', 'foto-jovem-f.png')
        } else if (idade < 50) {
            // Adulto 
            img.setAttribute('scr', 'foto-adulto-f.png')
        } else {
            // Idoso 
            img.setAttribute('scr', 'foto-idoso-f.png')
        }
    }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
} 