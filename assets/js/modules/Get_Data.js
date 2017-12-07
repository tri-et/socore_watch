import $ from 'jquery'
import axios from 'axios'
class GetData {
	constructor() {

	}

	checkLeague(leaguename, leagueArray) {
		for (var i = 0; i < leagueArray.length; i++) {
			if (leagueArray[i].league == leaguename) {
				return true;
			}
		}
		return false;
	}

	getDataInPlay(app) {
		$.ajax({
			url: 'index.php/api/get_running',
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function (response) {
				let data = JSON.parse(response);
				app.inplay = data.Running;
			}
		})
	}

	getDataPregame(app) {
		$.ajax({
			url: 'index.php/api/get_pregame',
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function (response) {
				let data = JSON.parse(response);
				app.pregame = data.Pregame;
			}
		})
	}

	getMatchLiveScore() {
		return axios.get('http://www.hasilskor.com/API/JSON.aspx?sport=soccer&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf')
	}

	getDataLiveScore(app) {
		let that=this
		$.when(this.getMatchLiveScore(), this.getStatsData(), this.getTimeLineData()).done(function (matchlivescore, stats, timeline) {
			var leaguename = []
			for (var i = 0; i < matchlivescore.data.r.length; i++) {
				if (!that.checkLeague(matchlivescore.data.r[i][5], leaguename)) {
					leaguename.push({
						league: matchlivescore.data.r[i][5],
						leagueShortName: matchlivescore.data.r[i][6],
						leagueColorCode: matchlivescore.data.r[i][7]
					});
				}
			}
			app.livescore = matchlivescore.data.r
			app.leagueLiveScoreLeft = leaguename.splice(0, Math.round(leaguename.length / 2))
			app.leagueLiveScoreRight = leaguename
			app.livescoreStats=that.formatJson(stats.data)
			app.livescoreTimeLine=that.formatJson(timeline.data)
		})
	}

	getTimeLineData() {
		return axios.get('http://www.hasilskor.com/API/JSON.aspx?callback=callbackJSON&sport=soccerDA&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf&date=&lut=&isJSONP=true&_=1506409621930')
	}

	getStatsData() {
		return axios.get('http://www.hasilskor.com/API/JSON.aspx?callback=callbackJSON&sport=soccerDB&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf&date=&lut=&isJSONP=true&_=1506412139882')
	}
	formatJson(data) {
		return JSON.parse(data.replace('callbackJSON(', '').replace(/\)$/g, ''));
	}

}

export default GetData;
