document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    
    contactForm.addEventListener("submit", async function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
      
      // Realiza el envío de los datos del formulario usando fetch
      try {
        const response = await fetch(contactForm.action, {
          method: "POST",
          body: new FormData(contactForm)
        });
  
        if (response.ok) {
          // Muestra el mensaje de alerta
          alert("Genia, tus datos han sido enviados");
          
          // Puedes redirigir al usuario a otra página si es necesario
          // window.location.href = "ruta-de-destino";
        } else {
          console.error("Error al enviar el formulario");
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    });
  });
  
  
  
  
  