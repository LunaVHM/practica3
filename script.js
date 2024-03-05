function validateForm( ) {

    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if (  name== "rata" &&  password== "princesa" ) {
       //alert("usuario y contrasena validos")
       window.open('content.html');
     }   else {
       alert("hubo un problema con el usuario y la contraseña. Alguno es incorrecto, porfavor intente de nuevo.");
     }

 };