var botonaspirantes = document.getElementById("boton_aspirantes");
botonaspirantes.addEventListener("click",aspirantes,true);

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
        datos:datosaspirantes
        
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