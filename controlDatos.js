let prueba = [
    {
        ruta: "controlDatos",
        status: "Alumno"
    },
    {
        ruta: "controldatosaspirantes",
        status: "Aspirantes"
    },
    {
        ruta: "controldatosinteresados",
        status: "Interesados"
    }
]

function rellenarTabla(){
    for (let i = 0; i < prueba.length; i++) {
        axios.get(`http://localhost:8000/${prueba[i].ruta}`)
    .then( (response) => {
        const tr_id= '';
        const id_tabla = document.getElementById("tabla_datos");
        for (let index = 0; index < response.data.length; index++) {
            let tr = document.createElement("tr");

            let columna1 = document.createElement("th");
            columna1.innerHTML = response.data[index].nombreAlumno;

            let columna2 = document.createElement("th");
            columna2.innerHTML = response.data[index].fecha;

            let columna5 = document.createElement("th");
            columna5.innerHTML = i === 0 ? "Alumno" : i ===1 ? "Aspirante" : i === 2 ? "Interesado" : "Niguno";

            console.log(response.data[index].nombreAlumno);
            id_tabla.appendChild(tr);
            tr.appendChild(columna1);
            tr.appendChild(columna5);
            tr.appendChild(columna2);
            console.log(response.data[index].nombreAlumno);
        }
    }).catch( e=> {
        console.log("error");
    })
    }
}

rellenarTabla();