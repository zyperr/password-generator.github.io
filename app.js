const outputPassword = document.getElementById('output-password');
const btn = document.querySelector('.button');
const icono = document.querySelector('fa-copy');
const checkboxLowerCase = document.getElementById('checkbox');


btn.addEventListener('click',()=>{
    let passwordLength = 12;
    let  chars = ["0123456789qhwjerktlyñuapsdfgzmxncbv"];
    let simbolos = [",.-_{}[]+*'?¡¿!#$%&/()"];
    let password = '';
    outputPassword.textContent= "";
    for(let i = 0; i < passwordLength;i++){
        let random = Math.floor(Math.random()*13);
        password += chars.toString().substring(random,random + 1);


        if(checkboxLowerCase.checked === true){
            outputPassword.textContent = password.toLowerCase();
        }else{
            outputPassword.textContent = password.toUpperCase();
        }
    }
})
