document.getElementById("registro-form").addEventListener("submit", function(event){
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    const datos = {
        nombre,apellido,fechaNacimiento
    };

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        Headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    
    .then(response => response.json())
    .then(data => {
        console.log("Servidor:", datos);
        alert("Registro Exitoso.")
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error en el registro.");
    });
})
