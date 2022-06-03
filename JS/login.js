window.onload = inicio;

function inicio(){
    let boton = document.getElementById("btnContinuar");
    boton.addEventListener("click", clickBoton )
}

function clickBoton(e){
    e.preventDefault();
    let usuario = document.getElementById("txtUsuario").value;
    let mostrarus = document.getElementById("mostrar");
    mostrarus.innerHTML += "Bienvenido: " + usuario + "<br>" + "Ingreso el: " + Date() +"<br>" + "<br>"; 
}