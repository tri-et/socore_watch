import $ from 'jquery';
class GetData {
    constructor(){

    }
    
    getDataInPlay(app){
        $.ajax({
            url: 'index.php/api/get_running',
            jsonp: 'callback',
            dataType: 'jsonp',
            success: function(response) {
                let data = JSON.parse(response);
                app.inplay = data.Running;
            }
        })
    }

    getDataPregame(app){
        $.ajax({
            url: 'index.php/api/get_pregame',
            jsonp: 'callback',
            dataType: 'jsonp',
            success: function(response) {
                let data = JSON.parse(response);
                app.pregame = data.Pregame;
            }
        })
    }
}

export default GetData;