<?php


/**
* @author TMJP BPO Services
* 
**/

try
{
	$data 		= array();
	$message 	= '';
	$success 	= FALSE;
	
	if(EMPTY($HTTP_RAW_POST_DATA))
		return FALSE;
	
	$params 	= json_decode($HTTP_RAW_POST_DATA);
	$accounts	= array(
					(object) array(
					'username'	=> 'Rej',
					'password'	=> 'Mediodia$2015'
					),
					(object) array(
					'username'	=> 'Test',
					'password'	=> 'QWERTY'
					)
				)
		;

	foreach($accounts AS $val)
	{
		if($val->username == $params->uname)
			if($val->password == $params->password)
			{
				$success = TRUE;
				$message = 'Login successfully.';
			}
	}

	if(!$success)
		throw new Exception('Error. Username or password is incorrect. Please try again.');
	// print_r($accounts);
	// print_r($params->uname);
	// echo json_decode($params);
}
catch(Exception $e)
{
	$message = $e->getMessage();
}

$data['message']	= $message;
$data['success']	= $success;

echo json_encode($data);
