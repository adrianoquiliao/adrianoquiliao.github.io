<?php
if($_POST) {

    $name = $_POST['name'];
    $inst = $_POST['inst'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $file_down = $_POST['file'];

    // Save log
    $file_name="log.txt";
	$file_p = fopen($file_name, 'a');
	$log  = "\n===================================================================";
	$log .= "\nNAME: ".$name;
	$log .= "\nFROM: ".$inst;
	$log .= "\nEMAIL: ".$email;
	$log .= "\nFILE: ".$file_down;
	$log .= "\nMSG: \n".$message;
	$log .= "\n===================================================================";
	fwrite($file_p, $log);
	fclose($file_p);

    // Mail in future.. 

	echo 1;

}
?>