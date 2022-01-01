var boton = document.getElementById("iniciar");
boton.addEventListener("click",usuarios);

function usuarios(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;  
    if(username.length>0 && password.length>0){
        axios.post("http://localhost:8000/usuarios", {
            user:username,
            pass:password
            
        }).then((data) => {
            if (data.data) {
                Swal.fire({
                    icon: 'success',
                    title: 'Sesion iniciada correctamente',
                    showConfirmButton: false,
                    timer: 1500
                  }).then((result) => {
                    location = "../marketing/marketing.html";
                });
                console.log(data);
                console.log("registro")
            }else{
                Swal.fire({
                    icon: 'warning',
                    title: "Correo y/o contrasena incorrectos",
                    confirmButtonText: `Aceptar`,
                })
            }
        }).catch(e => { console.log("El ingreso fallo"); })
    }else{
        alert("error");
    }
}