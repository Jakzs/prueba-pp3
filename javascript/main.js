
/*
para comentar varias lineas es asi
*/
//funcion clasica
function mostrar(){

    const d1 = document.getElementById("inp_nombre").value
    const d2 = document.getElementById("inp_apellido").value
    
    const select = document.getElementById("slt_operaciones").value

    let resultado = null
    if(select == 0){
        resultado = Number(d1) + Number(d2) 
    }
    if(select == 1){
        resultado = d1 - d2
    }
    if(select == 2){
        resultado = d1 * d2 
    }
    if(select == 3){
        resultado = d1 / d2 
    }
    document.getElementById("h_resultado").textContent = 'resultado: '+resultado
}

document.getElementById("btn_aceptar").addEventListener("click", mostrar)