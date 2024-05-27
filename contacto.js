const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Nombre Completo: ${fullName.value} <br> Email: ${email.value} <br> Teléfono: ${phone.value} <br> Mensaje: ${message.value} <br>`;

    Email.send({
        SecureToken: " f8b8ed96-eca6-489d-be62-af6dc32b1c27",
        Host: "smtp.elasticemail.com",
        Username: "lopez.omar.cb37@gmail.com",
        Password: "C002D66C4655C92A15DAB6670334BE11A9A0",
        To: 'lopez.omar.cb37@gmail.com',
        From: "lopez.omar.cb37@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "¡Muy Bien!",
                text: "¡Mensaje enviado con éxito!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");  
            }
            else{
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Ingrese una dirección de correo válida.";
        }
        else {
            errorTxtEmail.innerText = "Debes responder este espacio.";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error")&& !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});

// Agregamos el evento de click al botón de regresar
backButton.addEventListener("click", () => {
    window.location.href = 'index.html'; // Redirigir a la página de inicio
});

// Función para actualizar la fecha y hora en el footer
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('dateTime').textContent = dateTimeString;
}

// Actualizar la fecha y hora cada segundo
setInterval(updateDateTime, 1000);

// Inicializar con la fecha y hora actual
updateDateTime();