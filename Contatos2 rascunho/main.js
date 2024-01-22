const btn_contatos=document.querySelector("#btn_contatos");
const btn_novo_c=document.querySelector("#btn_novo_c");
const home=document.querySelector("#home");

btn_contatos.addEventListener("click",(evt)=>{
    console.log(evt.target);
    selecionarAba(evt.target);
    window.open("./contatos.html","if_principal");
});

btn_novo_c.addEventListener("click",(evt)=>{
    selecionarAba(evt.target);
    window.open("./NovoC.html","if_principal");
});

home.addEventListener("click",(evt)=>{
    selecionarAba(evt.target);
    window.open("./home.html","if_principal");
});

const selecionarAba=(el)=>{
    const abas=[...document.querySelectorAll(".aba")];
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada");
    });
    el.classList.add("abaSelecionada");
}