
var boton = document.getElementById("admi");
boton.addEventListener("click",usuarios,true);

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
    alert("prueba");
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;  
    let datos=[username,password];

    /*axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

    axios.post("http://localhost:8000/usuarios", {
        data:datos
        
    }).then((data) => {
        swal("Buen trabajo!", "Ha ingresado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })*/

}

/*function aspirantes(){
    const nombre = document.getElementById("nombre").value;
    const apellidopaterno = document.getElementById("paterno").value;
    const apellidomaterno = document.getElementById("materno").value;
    const telefonoprincipal = document.getElementById("telefono_principal").value;
    const telefonosecundario = document.getElementById("telefono_secundario").value;
    const correo = document.getElementById("correo").value;
    const domicilio = document.getElementById("domicilio").value;
    const alergias = document.getElementById("alergia").value;
    const padecimientos = document.getElementById("padecimiento").value;

    const nombrefactura = document.getElementById("nombre_factura").value;
    const paternofactura = document.getElementById("paterno_factura").value;
    const maternofactura = document.getElementById("materno_factura").value;
    const codigopostal = document.getElementById("codigo_postal").value;
    const colonia = document.getElementById("colonia").value;
    const nexterno = document.getElementById("no_ext").value;
    const ninterno = document.getElementById("no_int").value;
    const rfc = document.getElementById("id_rfc").value;

    axios.post("http://localhost:8000/aspirantes", {
        nombre1 = nombre,
        apellidopaterno1 = apellidopaterno,
        apellidomaterno1 = apellidomaterno,
        telefonoprincipal1 = telefonoprincipal,
        telefonosecundario1 = telefonosecundario,
        correo1 = correo,
        domicilio1 = domicilio,
        alergias1 = alergias,
        padecimientos1 = padecimientos,

        nombrefactura1 = nombrefactura, 
        paternofactura1 = paternofactura,
        maternofactura1 = maternofactura,
        codigopostal1 = codigopostal,
        colonia1 = colonia,
        nexterno1 = nexterno,
        ninterno1 = ninterno,
        rfc1 = rfc
        
    }).then((data) => {
        swal("Buen trabajo!", "Ha ingresado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })
}

function interesados(){
    const nombreinteresados = document.getElementById("nombre_personal").value;
    const paternointeresados = document.getElementById("apellido_paterno").value;
    const maternointeresados = document.getElementById("apellido_materno").value;
    const generointeresados = document.getElementById("genero_interesados").value;
    const fechanacimientointeresado = document.getElementById("fecha_nac").value;
    const escuelaprocedenciainteresados = document.getElementById("escuela_procedencia_interesados").value;
    const comoenterointeresados = document.getElementById("entero").value;
    
    const correointeresados = document.getElementById("correo").value;
    const domiciliointeresados = document.getElementById("domicilio").value;
    const telefonoprincipalinteresados = document.getElementById("tel_principal").value;
    const telefonosecundariointeresados = document.getElementById("tel_secundario").value;
    const nivelinteresados = document.getElementById("nivel").value;
    const gradointeresados = document.getElementById("grado_interesados").value;
    
    const nombretutorinteresados = document.getElementById("name_tutor").value;
    const paternotutorinteresados = document.getElementById("tutor_paterno").value;
    const maternotutorinteresados = document.getElementById("tutor_materno").value;

    axios.post("http://localhost:8000/interesados", {
        nombreinteresados1 = nombreinteresados,
        paternointeresados1 = paternointeresados,
        maternointeresados1 = maternointeresados,
        generointeresados1 = generointeresados,
        fechanacimientointeresado1 = fechanacimientointeresado,
        escuelaprocedenciainteresados1= escuelaprocedenciainteresados,
        comoenterointeresados1 = comoenterointeresados,

        correointeresados1 = correointeresados,
        domiciliointeresados1 = domiciliointeresados,
        telefonoprincipalinteresados1 = telefonoprincipalinteresados,
        telefonosecundariointeresados1 = telefonosecundariointeresados,
        nivelinteresados1 = nivelinteresados,
        gradointeresados1 = gradointeresados,
        
        nombretutorinteresados1 = nombretutorinteresados,
        paternointeresados1 = paternotutorinteresados,
        maternotutorinteresados1 = maternotutorinteresados
    
    }).then((data) => {
        swal("Buen trabajo!", "ingresado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })
}*/