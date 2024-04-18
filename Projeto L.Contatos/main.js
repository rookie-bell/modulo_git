const form = document.getElementById('form-dados');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</tr>`;
    linha += `<td>${inputNumeroContato.value}</tr>`;
    linha += `</tr>`;

    const corpoContatos = document.querySelector('tbody');