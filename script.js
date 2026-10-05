document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        
        if(nombre && email) {
            alert(`¡Guau! Gracias por escribirnos, ${nombre}. Hemos recibido tu mensaje y te responderemos a ${email} para consentir a tu mascota.`);
            form.reset();
        }
    });
});