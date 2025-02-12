document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        
        if(nombre.trim() === "" || email.trim() === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }
        
        alert("Gracias, " + nombre + ". Hemos recibido tu mensaje y te contactaremos pronto.");
        form.reset();
    });
});