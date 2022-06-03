    window.onload = iniciar;

    function iniciar(){
        let boton = document.getElementById('btnContinuar');
        boton.addEventListener("click", btnMostrar);
    }

    function btnMostrar(){
        let mostrar = document.getElementById('txtUsuario').value;
        let muestra = document.getElementById('mostrar');
        muestra.innerHTML = "Bienvenido: " + mostrar;

    }