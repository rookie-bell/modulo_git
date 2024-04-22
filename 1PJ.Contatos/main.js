const btFlutuante = document.querySelector('button.bt-flutuante');
const modalAdicionar = document.querySelector('div.modal.adicionar');
const modalAdicionarForm = modalAdicionar.querySelector('form');
const main = document.querySelector('main');
const tPessoa = main.querySelector('template');
const database = [];

function modalAdd(ev) {
    const multiplo = ev.target.closest(".multiplo");
    if (!multiplo) return;
    const template = multiplo.querySelector("template");
    if (!template) return;
    const clone = template.content.cloneNode(true);
    const input = ev.target.closest('.container').querySelector('input');
    if (input.value.trim() === "") return;
    multiplo.insertBefore(clone, template);
}

function modalRemove(ev) {
    const container = ev.target.closest(".container");
    if (!container) return;
    container.remove();
}

const modalAction = {
    close: () => modalAdicionar.classList.remove('open'),
    add: modalAdd,
    remove: modalRemove,
    novo: () => novo("asjdiasj", [], [])
}

btFlutuante.addEventListener('click', () => {
    modalAdicionar.classList.add('open');
});

modalAdicionarForm.addEventListener('submit', ev => {
    ev.preventDefault();
});

modalAdicionarForm.addEventListener('click', ev => {
    const button = ev.target.clcosest('button');
    if (!button || !button.dataset) return;
    const action = button.dataset.action;
    const callback = modalAction[action];
    if (!callback) return;
    callback(ev);
});

function novo(nome, rTelefone, rEmail) {
    const template = tPessoa.cloneNode(true);
    const dNome = template.content.querySelector('.nome');
    const dTelefone = template.content.querySelector('.telefone');
    const dEmail = template.content.querySelector('.email');

    dNome.innerText = nome;

    rTelefone.forEach(tel => {
        const span = document.createElement('span');
        span.innerText = tel;
        dTelefone.appendChild(span);
    });

    rEmail.forEach(mail => {
        const span = document.createElement('span');
        span.innerText = mail;
        dEmail.appendChild(span);
    });

    database.push({
        nome,
        telefone: rTelefone,
        email: rEmail
    });

    main.appendChild(template.content);
}