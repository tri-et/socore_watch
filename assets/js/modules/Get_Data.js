import $ from 'jquery'
import axios from 'axios'
class GetData {
	constructor() {}

	checkLeague(leaguename, leagueArray) {
		for (var i = 0; i < leagueArray.length; i++) {
			if (leagueArray[i].league == leaguename) {
				return true;
			}
		}
		return false;
	}

	getDataInPlay(app) {
		let that=this
		$.ajax({
			url: 'index.php/api/get_running',
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function (response) {
				let data = JSON.parse(response);
				app.inplay = data.Running;
				setTimeout(()=>{
					that.getDataInPlay(app)
				},3000)
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

				setTimeout(()=>{
					that.getDataPregame(app)
				},600000)
			}
		})
	}

	getMatchLiveScore() {
		return axios.get('http://www.hasilskor.com/API/JSON.aspx?sport=soccer&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf')
	}

	getDataPreInplay(app) {
		let that = this
		let urlInplay = 'index.php/api/get_running'
		let urlPregame = 'index.php/api/get_pregame'
		$.when($.ajax({
			url: urlInplay,
			dataType: 'jsonp'
		}), $.ajax({
			url: urlPregame,
			dataType: 'jsonp'
		})).done((inplay, pregame) => {
			let inplayData = JSON.parse(inplay[0]).Running
			let pregameData = JSON.parse(pregame[0]).Pregame
			let data = []
			let type = ''
			app.pregame = pregameData
			app.inplay = inplayData

			if (inplayData.length > 0) {
				data = inplayData[0]
				type = 'inplay'
			} else {
				data = pregameData[0]
				type = 'pregame'
			}
			app.$store.state.dataPredictionDetail = data
			app.$store.state.predictionSelected = {
				match_code: data.match_code,
				type: type,
				isopening: app.$store.state.isOpenPredictionDetail == false ? false : true
			}
			app.$store.state.isOpenPredictionDetail = true
			setTimeout(()=>{
				that.getDataInPlay(app)
			},3000)

			setTimeout(()=>{
				that.getDataPregame(app)
			},600000)
		})
	}

	getDataLiveScore(app) {
		let that = this
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
			app.livescoreStats = that.formatJson(stats.data)
			app.livescoreTimeLine = that.formatJson(timeline.data)

			let id = app.livescore[0][0]
			app.$store.state.dataLivescoreDetail = {
			  match: app.livescore[0],
			  stats: app.$root.livescoreStats.r.find(x => x[2] == id)==undefined?[]:app.$root.livescoreStats.r.find(x => x[2] == id),
			  timeline: app.$root.livescoreTimeLine.r.filter(x => x[2] == id)
			}
			app.$store.state.livescoreSelected = {
			  match_code:id,
			  isopening:app.$store.state.isOpenLiveScoreDetail == false ? false : true
			}
			app.$store.state.isOpenLiveScoreDetail = true
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
