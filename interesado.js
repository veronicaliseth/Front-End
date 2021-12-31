var botoninteresados = document.getElementById("boton_interesados");
botoninteresados.addEventListener("click",interesados);

function interesados(){
    const nombreinteresados = document.getElementById("nombre_personal").value;
    const paternointeresados = document.getElementById("apellido_paterno").value;
    const maternointeresados = document.getElementById("apellido_materno").value;
    let generointeresados ='';
    const fecha = new Date();
    if($('#mujer').is(':checked')){
        generointeresados = $('input[name="GeneroM"]:checked').val();
    }
    if($('#hombre').is(':checked')){
        generointeresados = $('input[name="GeneroH"]:checked').val();
    }
    if($('#otro').is(':checked')){
        generointeresados = $('input[name="GeneroT"]:checked').val();
    }
    const fechanacimientointeresado = document.getElementById("fecha_nac").value;
    const escuelaprocedenciainteresados = $('#esc option:selected').val()
    const comoenterointeresados = $('#ent option:selected').val()
    
    const correointeresados = document.getElementById("correo").value;
    const domiciliointeresados = document.getElementById("domicilio").value;
    const telefonoprincipalinteresados = document.getElementById("tel_principal").value;
    const telefonosecundariointeresados = document.getElementById("tel_secundario").value;
    const nivelinteresados = $('#nivel option:selected').val()
    const gradointeresados = $('#grado option:selected').val()
    
    const nombretutorinteresados = document.getElementById("name_tutor").value;
    const paternotutorinteresados = document.getElementById("tutor_paterno").value;
    const maternotutorinteresados = document.getElementById("tutor_materno").value;

   // let datosinteresados = [nombreinteresados,paternointeresados,maternointeresados,generointeresados,fechanacimientointeresado,escuelaprocedenciainteresados,comoenterointeresados,correointeresados,domiciliointeresados,telefonoprincipalinteresados,telefonosecundariointeresados,nivelinteresados,gradointeresados,nombretutorinteresados,paternotutorinteresados,maternotutorinteresados]

    axios.post("http://localhost:8000/interesados", {
       nombreInteresados : nombreinteresados,
       paternoInteresados: paternointeresados,
       maternoInteresados: maternointeresados,
       generoInteresados : generointeresados,
       fechaNacimientoInteresado: fechanacimientointeresado,
       escuelaProcedenciaInteresados: escuelaprocedenciainteresados,
       comoEnteroInteresados: comoenterointeresados,
       correoInteresados: correointeresados,
       domicilioInteresados:domiciliointeresados,
       telefonoPrincipalInteresados: telefonoprincipalinteresados,
       telefonoSecundarioInteresados: telefonosecundariointeresados,
       nivelInteresados: nivelinteresados,
       gradoInteresados:gradointeresados,
       nombreTutorInteresados: nombretutorinteresados,
       paternoTutorInteresados:paternotutorinteresados,
       maternoTutorInteresados: maternotutorinteresados,
       fecha:fecha
    }).then((data) => {
        Swal.fire({
            icon: 'success',
            title: "Datos guardados exitosamente",
            confirmButtonText: `Aceptar`,
        })
        console.log(data);
        console.log("registro")
    }).catch(e => { console.log("El ingreso fallo"); })
}