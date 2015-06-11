<?php

$headers = 'From: prestadoresdservicios@gmail.com' . "\r\n" .
    'Reply-To: prestadoresdservicios@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
$subject = 'prestadoresdservicios@hotmail.com';
$title = 'Contacto desde Prestadores de servicios';
$mensaje = "ha recibido un mensaje de {$_POST['nombre']}. Correo : {$_POST['correo']}. Mensaje : {$_POST['mensaje']} " ;

if(strtolower($_SERVER['REQUEST_METHOD']) == 'post') {

mail($subject,$title,$headers,$mensaje);
}
header('Location: index.html');
// {$_POST['nombre']} . "se contacto contigo por medio del formulario de tu pagian web, y te dice: " .$_POST['mensaje']
?>