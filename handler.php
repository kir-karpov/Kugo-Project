<?php 
$useremail = htmlspecialchars ($_POST["useremail"]);
$userphone = htmlspecialchars ($_POST ["userphone"]);

$token = "6210989086:AAGEEZLNDkYFafACSscT9Ug4W7dhzGhTjlU";
$chat_id = "-812503358";

$formData = array(
  "Телефон клиента: " => $userphone, 
  
);


foreach ($formData as $key => $value) {
$text .= $key . $value;

}



$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&text={$text}", "r" );



echo "Телефон,  " . $userphone;
$user = htmlspecialchars ($_POST ["user"]);


?>