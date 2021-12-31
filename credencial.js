var botoncredencial = document.getElementById("boton_credencial");
botoncredencial.addEventListener("click",credencial);

function credencial(){
    const nombreAlumno = document.getElementById("name_alumno").value;
    const matricula = document.getElementById("matricula").value;
    const curp = document.getElementById("curp").value;
    const carrera = document.getElementById("carrera").value;
    const tipoSangre = document.getElementById("tipo_sangre").value;
    const nss = document.getElementById("nss").value;
    const nombreCompletoFamiliar = document.getElementById("nombre_completo").value;
    const numeroTelefono = document.getElementById("telefono_alumno").value;

    let datoscredencial = [nombreAlumno,matricula,curp,carrera,tipoSangre,nss,nombreCompletoFamiliar,numeroTelefono]

    axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    axios.post("http://localhost:8000/credencialstudent", {
        datos:datoscredencial
        
    }).then((data) => {
        Swal.fire({
            icon: 'success',
            title: "Datos guardados exitosamente",
            confirmButtonText: `Aceptar`,
        })
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El registro fallo"); })
}