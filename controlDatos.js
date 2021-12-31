

function rellenarTabla(aux, tipo){

    if(aux === 1 ){

    }else if(aux === 2){

    }else if( aux === 3){

    }

    axios.get("http://localhost:8000/controlDatos",)
    .then( (response) => {
        
        console.log(response.data);

    }).catch( e=> {
        console.log("error");
    })
}

rellenarTabla(11,"credencialestudiante");