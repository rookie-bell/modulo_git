const form = document.getElementById('camp');

let formValid = false;

function numbervalid (menorN, maiorN){
    return maiorN > menorN;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    let menorN = parseFloat(document.getElementById('menorN').value);
    let maiorN = parseFloat(document.getElementById('maiorN').value);

    const messagesucess = 'Operação concluída com sucesso!';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(menorN, maiorN);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        menorN.value = '';
        maiorN.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})