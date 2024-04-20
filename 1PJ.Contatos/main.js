const btFlutuante = document.querySelector('button.bt-flutuante');
const modalAdicionar = document.querySelector('div.modal.adicionar');
const modalAdicionarForm = modalAdicionar.querySelector('form');

btFlutuante.addEventListener('click', () => {
    modalAdicionar.classList.add('open');
});

modalAdicionarForm.addEventListener('submit', ev => {
    ev.preventDefault();
    modalAdicionar.classList.remove('open');
})