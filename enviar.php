<?php
$destino = "bep.contadoras@gmail.com";
$nombre = $_POST["nombre"];
$asunto = $_POST["asunto"];
$correo = $_POST["correo"];
$consulta = $_POST["consulta"];
$comentarios = $_POST["comentarios"];

$contenido = "Nombre: "  . $nombre . "\nAsunto: "  . $asunto ."\nCorreo: " .$correo. "\nConsulta: " . $consulta ;
    
    
mail($destino,"contacto",$contenido);

?>