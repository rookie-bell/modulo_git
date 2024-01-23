    let lista = localStorage.getItem("minhaLista");

    const formulario = document.querySelector(form);
    const ulPessoas = document.querySelector(ul);

    if (lista) {
        lista = JSON.parse(lista);
    } else {
        lista = [];
    }

    listar();

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();
        let novaPessoa = new Object();
        novaPessoa.nome = this.nome.value;
        novaPessoa.telefone = this.telefone.value;
        novaPessoa.email = this.email.value;

        lista.push(novaPessoa);

        this.reset();

        localStorage.setItem("minhaLista", JSON.stringify(lista));

        listar();

    })

    function listar(filtro='') {
        ulPessoas.innerHTML = "";
        lista.forEach((item,key) => {

                if (item.nome.toUpperCase().indexOf(filtro.toUpperCase()) >= 0 || filtro =="") {
                linha = document.createElement('li');

                let s = `<button>[Excluir]</button><button>[Editar]</button>`

                linha.innerHTML = " Nome: " + item.nome + " Telefone: " + item.telefone + "E-mail" + item.email + s;
                ulPessoas.appendChild(linha);
            }
        });
    }