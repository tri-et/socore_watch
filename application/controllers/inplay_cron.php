<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inplay_cron extends CI_Controller{
    function __construct()
    {
        parent::__construct();
    }

    public function index(){
        $soap_client=new SoapClient('http://118.107.179.27:13881/Vig_WebService/Vig_WebService.asmx?WSDL');
		$prediction=$soap_client->Prediction_Running()->Prediction_RunningResult;
		$this->cache->file->save('running', $prediction, 60000);
		return $prediction;
    }
}