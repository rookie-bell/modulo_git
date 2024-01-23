const form = document.getElementById('form-cadastro');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomePart = document.getElementById('nome-part');
    const inputTelPart = document.getElementById('tel-part');
    const inputEmailPart = document.getElementById('email-part');
    const inputPart = document.getElementById('Part');

    let linha = '<tr>';
    linha += `<td>${inputNomePart.value}</td>`;
    linha += `<td>${inputTelPart.value}</td>`;
    linha += `<td>${inputEmailPart.value}</td>`;
    linha += `<td>${}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tfoot');
    corpoTabela.innerHTML = linhas;

    // alert(`Participante: ${inputNomePart.value} - Cadastrado com sucesso!`);
});