

document.addEventListener("DOMContentLoaded", () => {
    const user = document.querySelector("#user");
    const password = document.querySelector("#userPassword");
    const viewpw = document.querySelector("#viewpw")
    const form = document.querySelector("#form_st")
    const summitButton = document.querySelector("#summitButton")
    const main = document.querySelector(".main__content")
    
    let nowmodal = false

    function modalError(messageError) {
        
        const modal = document.createElement('div');
        modal.classList.add('background__modal');
        modal.innerHTML = `
            <span class="modal__error__message">
                <h5 class="message__error">¡Ha Ocurrido Un Error!</h5>
                <p>${messageError}</p>
                <button class="form__btn modal__error" >Aceptar </button>
            </span>
        `;

        main.appendChild(modal);

        const closeButton = modal.querySelector('.modal__error');
        closeButton.addEventListener('click', () => {
            main.removeChild(modal);
        });
    }


    
    function submitForm () {
        if (user.value.length <= 4) {
            modalError("Tu nombre usuario debe tener un minimo de 4 caracteres")
        } else if (password.value.includes(" ")) {
            modalError("Tu contraseña no puede incluir espacios")

        }  else if (password.value.length <= 8) {
           modalError("Tu contraseña debe tener un minimo de 8 caracteres")

        } else {
            form.submit()
        }
 
    }
    
    


    viewpw.addEventListener("click",() => {
        if (password.getAttribute("type") == "password") {
            password.type = "text"
            viewpw.style.backgroundImage = 'url("../public/eye-fill.svg")'

        } else {
            password.type = "password"
            viewpw.style.backgroundImage = 'url("../public/eye.svg")'
        }
    })  

    summitButton.addEventListener("click",() => {
        submitForm()
    })  
    

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

})});
