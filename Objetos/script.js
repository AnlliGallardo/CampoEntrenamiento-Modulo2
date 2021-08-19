const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function localStorage(){

    let email = document.querySelector('#inputEmail').value;
    let password = document.querySelector('#inputClave').value;

    if( (email == "") || (password == "")){
        alert('Ingresar todos los campos');
        return true;
    }
    else{
        if(isNaN(email)){
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            ObtenerLocalStorage();
        }
        else{
            alert("El correo debe estar completo");
        }
        return false;
    }
})

function ObtenerLocalStorage(){
    let emailGuardado = localStorage.setItem("email");
    let passwordGuardado = localStorage.setItem("password");

    alert(`Bienvenido: ${emailGuardado}`);
    console.log(passwordGuardado);
}
