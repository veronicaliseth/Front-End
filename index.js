var boton = document.getElementById("admi");
boton.addEventListener("click",usuarios);
var botonmark = document.getElementById("mark");
botonmark.addEventListener("click",usuarios);


function usuarios(){
    let username = document.getElementById("user").value;
    let password = document.getElementById("password").value;  
    if(username.length>0 && password.length>0){
        axios.post("http://localhost:8000/usuarios", {
            user:username,
            pass:password
            
        }).then((data) => {
            alert(data.data.resp);
            Swal.fire({
                icon: 'success',
                title: 'Sesion iniciada correctamente',
                showConfirmButton: false,
                timer: 1500
              })
            console.log(data);
            console.log("registro")
        }).catch(e => { console.log("El ingreso fallo"); })
    }else{
        alert("error");
    }
}