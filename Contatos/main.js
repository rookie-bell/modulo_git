const btn_contatos=document.querySelector("#btn_contatos");
const btn_novo_c=document.querySelector("#btn_novo_c");
const home=document.querySelector("#home");

btn_contatos.addEventListener("click",(evt)=>{
    window.open("./contatos.html","if_principal");
});

btn_novo_c.addEventListener("click",(evt)=>{
    window.open("./NovoC.html","if_principal");
});

home.addEventListener("click",(evt)=>{
    window.open("./home.html","if_principal");
});