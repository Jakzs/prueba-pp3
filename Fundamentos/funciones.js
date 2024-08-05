function ejecutar(){
    const dato = document.getElementById("inp_dato").value
    const respuesta = calcular(dato)
    alert(respuesta)
 }
 
 function calcular(d1){
     const resultado = Number(d1) + 2
     return resultado
 }
 
 const btn = document.getElementById("btn_ejecutar")
 btn.addEventListener("click",ejecutar)
 
 function cambiar_label(){
     const select = document.getElementById("slt_operacion").value
     const label = document.getElementById("lbl_dato")
 
     if(select == 0){
         label.textContent = "Opcion 1"
     }else{
         label.textContent = "Opcion 2"
     }
 }