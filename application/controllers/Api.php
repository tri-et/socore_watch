<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Api extends CI_Controller {
	function __construct()
    {
		parent::__construct();
		$this->load->driver('cache');
    }
	public function get_pregame(){
		$prediction=null;
		$callback="";
		if($this->cache->file->is_supported() && $this->cache->file->get('pregame')) {
			$prediction=$this->cache->file->get('pregame') ;
		}else{
			$prediction=$this->get_pregame_cron();
		};

		if (array_key_exists('callback', $_GET) == TRUE) {
			$callback = $_GET['callback'];
		}
			echo $callback . '(' . json_encode($prediction) . ');';

	}
	
	public function get_running(){
		$prediction=null;
		$callback="";
		if($this->cache->file->is_supported() && $this->cache->file->get('running')) {
			$prediction=$this->cache->file->get('running') ;
		}else{
			$prediction=$this->get_running_cron();
		};
		//$prediction=$this->get_running_cron();
		if (array_key_exists('callback', $_GET) == TRUE) {
			$callback = $_GET['callback'];
		}
		echo $callback . '(' . json_encode($prediction) . ');';
	}

	public function get_running_cron(){
		$soap_client=new SoapClient('http://118.107.179.27:13881/Vig_WebService/Vig_WebService.asmx?WSDL');
		$prediction=$soap_client->Prediction_Running()->Prediction_RunningResult;
		$this->cache->file->save('running', $prediction, 60000);
		return $prediction;
	}
	public function get_pregame_cron(){
		$soap_client=new SoapClient('http://118.107.179.27:13881/Vig_WebService/Vig_WebService.asmx?WSDL');
		$prediction=$soap_client->Prediction_Pregame()->Prediction_PregameResult;
		$this->cache->file->save('pregame', $prediction, 60000);
		return $prediction;
	}

}