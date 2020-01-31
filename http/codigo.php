<?php

    /* print_r($_POST); */
     header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    $respuesta = [];

    if ($_POST['usuario']=='admin'&&$_POST['clave']=='1234'){
        $respuesta['status'] = 'logueado';
        $respuesta['user'] = $_POST['usuario'];
    }else{
        $respuesta['status'] = 'Error';
    }

    echo json_encode($respuesta); 

?>