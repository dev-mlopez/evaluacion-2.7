const d = document;

d.addEventListener("DOMContentLoaded", () => {
    const contactForm = d.getElementById("contactForm"),
        userField = d.getElementById("user"),
        emailField = d.getElementById("email"),
        textField = d.getElementById("text");

    contactForm.addEventListener("submit", (event) => {
        let isValid = true;

        // Validar el campo de usuario
        if (userField.value.trim() === "") {
            userField.classList.add("is-invalid");
            isValid = false;
        } else {
            userField.classList.remove("is-invalid");
        }

        // Validar el campo de correo
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value.trim())) {
            emailField.classList.add("is-invalid");
            isValid = false;
        } else {
            emailField.classList.remove("is-invalid");
        }

        // Validar el campo de mensaje
        if (textField.value.trim() === "") {
            textField.classList.add("is-invalid");
            isValid = false;
        } else {
            textField.classList.remove("is-invalid");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});