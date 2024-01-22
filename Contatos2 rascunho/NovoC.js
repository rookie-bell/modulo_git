const btn_salvar=document.querySelector("#btn_salvar");
const btn_limpar=document.querySelector("#btn_limpar");
const f_nome=document.querySelector("#f_nome");
const f_telefone=document.querySelector("#f_telefone");
const f_email=document.querySelector("#f_email");

btn_salvar.addEventListener("click",(evt)=>{
    const dados={
        "f_nome":f_nome.value,
        "f_telefone":f_telefone.value,
        "f_email":f_email.value
    }
    console.log(dados);
});