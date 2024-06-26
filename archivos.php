<?php

$curriculum = $_FILES['curriculum'];

$video = $_FILES['video'];

if (!empty($curriculum) && !empty($video)) {

    if (move_uploaded_file($curriculum['tmp_name'], 'Drive') &&     move_uploaded_file($video['tmp_name'], 'Drive')) {
    
    $respuesta['curriculum'] = true;
    $respuesta['video'] = true;
  }else {

    $respuesta['curriculum'] = false;
    $respuesta['video'] = false;
  }
} else {

    $respuesta['curriculum'] = false;
    $respuesta['video'] = false;
}


echo json_encode($respuesta);

?>