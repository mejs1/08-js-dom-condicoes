function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = 'Agora são ${hora} hora'
    if (hora >= 0 && hora < 12) {
        // BOM DIA! <3
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE! <3
        img.src = 'fototarde.png'
    } else {
        // BOA NOITE! <3
        img.src = 'fotonoite.png'
    }
}