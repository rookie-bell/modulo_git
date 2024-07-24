$(document).ready(function() {
    $('form button').click(function() {
    });

$('ul').on('click', function(e) {
    e.preventDefault();
    $('.through').css("text-decoration", "line-through");
})

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<div class="through">${novaTarefa}</div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nova-tarefa').val('')
    })
})