const formulario = document.querySelector(form);
const ulPessoas = document.querySelector(ul);

formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let novaPessoa = new Object();
    novaPessoa.nome = this.nome.value;
    novaPessoa.telefone = this.telefone.value;
});