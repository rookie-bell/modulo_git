$(document).ready(function() {
    console.log($('#botao-cancelar'));
})


$(document).ready(function() {
    $('header button').click(function() {
        alert("Expandir formulário")
    })

    $('form').on('submit', funtion(e) {
        console.log("submit");
    })
}