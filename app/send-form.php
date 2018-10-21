<?php
$to = "hello@vmassive.ru";
$from = 'example';
$subject = 'Заявка с заглушки ПИК ремонт';
$message = 'Заявка с заглушки ПИК ремонт<br>Телефон для связи: '.$_POST['Phone'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <noreply@pik-remont.ru>\r\n";
$result = mail($to, $subject, $message, $headers);
echo $result;
?>
