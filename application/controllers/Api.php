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
		$prediction=json_decode($soap_client->Prediction_Running()->Prediction_RunningResult,true)['Running'];
		$oldData=json_decode($this->cache->file->get('running'),true)['Running'];
		foreach($prediction as $items){
			foreach($oldData as $item){
				if($items["match_code"]==$item["match_code"]){
					$items['sys']['hdp']=($items['sys']['hdp']==""?$item['sys']['hdp']:$items['sys']['hdp']);
					break;
				}
			}
		}
		$this->cache->file->save('test',  date("l jS \of F Y h:i:s A") . "<br>", 60000);
		$this->cache->file->save('running',  "{\"Running\":".json_encode($prediction)."}", 60000);
		return $prediction;
	}
	public function get_pregame_cron(){
		$soap_client=new SoapClient('http://118.107.179.27:13881/Vig_WebService/Vig_WebService.asmx?WSDL');
		$prediction=json_decode($soap_client->Prediction_Pregame()->Prediction_PregameResult,true)['Pregame'];
		$this->cache->file->save('pregame', "{\"Pregame\":".json_encode($prediction)."}", 60000);
		return $prediction;
	}

}