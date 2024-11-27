document.getElementById("employee-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario para prueba
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    // Mostrar datos del formulario en consola
    console.log("Datos del formulario:", data);
  
    alert("Formulario enviado correctamente (solo para pruebas).");
  });
  