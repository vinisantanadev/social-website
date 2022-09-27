
var janela = window.document.getElementsByTagName('main')[0]

// fechar ou minizar a janela
var close = window.document.getElementById('close')
close.addEventListener('click', clicar)

var minimize = window.document.getElementById('minimize')
minimize.addEventListener('click', clicar)

function clicar() {

    janela.style.display = 'none'

}
// maximizar a janela
var maximize = window.document.getElementById('maximize')
maximize.addEventListener('click', maximizar)

function maximizar() {

    janela.style.width = '100%'
    janela.style.maxWidth = 'none'

    maximize.addEventListener('click', redimensionar)

    function redimensionar() {

        janela.style.width = '100%'
        janela.style.maxWidth = '1333px'

    }

}

