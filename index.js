function credencial(){
    const nombreAlumno = document.getElementById("name_alumno").value;
    const matricula = document.getElementById("matricula").value;
    const curp = document.getElementById("curp").value;
    const carrera = document.getElementById("carrera").value;
    const tipoSangre = document.getElementById("tipo_sangre").value;
    const nss = document.getElementById("nss").value;
    const nombreCompletoFamiliar = document.getElementById("nombre_completo").value;
    const numeroTelefono = document.getElementById("telefono_alumno").value;

    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    axios.post("http://localhost:8000/credencialstudent", {
        nombreAlumno1: nombreAlumno,
        matricula1: matricula,
        curp1: curp,
        carrera1: carrera,
        tipoSangre1: tipoSangre,
        nss1: nss,
        nombreCompletoFamiliar1: nombreCompletoFamiliar,
        numeroTelefono1: numeroTelefono
        
    }).then((data) => {
        swal("Buen trabajo!", "Se ha registrado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El registro fallo"); })
}

function usuarios(){
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;  

    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    axios.post("http://localhost:8000/usuarios", {
        username1 = username,
        password1 = password 
        
    }).then((data) => {
        swal("Buen trabajo!", "Ha ingresado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })

}
