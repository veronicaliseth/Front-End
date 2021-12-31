var boton = document.getElementById("admi");
boton.addEventListener("click",usuarios,true);
var botonmark = document.getElementById("mark");
botonmark.addEventListener("click",usuarios,true);

var botoncredencial = document.getElementById("boton_credencial");
botoncredencial.addEventListener("click",credencial,true);

var botonaspirantes = document.getElementById("boton_aspirantes");
botonaspirantes.addEventListener("click",aspirantes,true);

var botoninteresados = document.getElementById("boton_interesados");
botoninteresados.addEventListener("click",interesados,true);

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
        data:datoscredencial
        
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

    axios.post("http://localhost:8000/usuarios", {
        data:datos
        
    }).then((data) => {
        swal("Buen trabajo!", "Ha ingresado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })

}

function aspirantes(){
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

    let datosaspirantes = [nombre,apellidopaterno,apellidomaterno,telefonoprincipal,telefonosecundario,correo,domicilio,alergias,padecimientos,nombrefactura,paternofactura,maternofactura,codigopostal,colonia,nexterno,ninterno,rfc]
    axios.post("http://localhost:8000/aspirantes", {
        data:datosaspirantes
        
    }).then((data) => {
        swal("Buen trabajo!", "Ha registrado con exito!", "success");
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

    let datosinteresados = [nombreinteresados,paternointeresados,maternointeresados,generointeresados,fechanacimientointeresado,escuelaprocedenciainteresados,comoenterointeresados,correointeresados,domiciliointeresados,telefonoprincipalinteresados,telefonosecundariointeresados,nivelinteresados,gradointeresados,nombretutorinteresados,paternotutorinteresados,maternotutorinteresados]

    axios.post("http://localhost:8000/interesados", {
        data:datosinteresados
    
    }).then((data) => {
        swal("Buen trabajo!", "Ingresado con exito!", "success");
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })
}