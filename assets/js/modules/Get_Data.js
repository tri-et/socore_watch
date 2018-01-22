import $ from 'jquery'
import axios from 'axios'
class GetData {
	constructor() {}
	checkLeague(leaguename, leagueArray) {
		for (var i = 0; i < leagueArray.length; i++) {
			if (leagueArray[i].league == leaguename) {
				return true
			}
		}
		return false
	}

	getDataInPlay(app) {
		let that = this
		$.ajax({
			url: 'index.php/api/get_running?timestamp=' + new Date().getTime(),
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function(response) {
				
				let data = JSON.parse(response)
				//app.inplay = data.Running
				app.inplayExpired=[]
				app.inplay=[]
				if (app.$store.state.predictionSelected.match_code != '') {
					let type = app.$store.state.predictionSelected.type
					let match_code = app.$store.state.predictionSelected.match_code
					switch (type) {
						case 'inplay':
							app.$store.state.dataPredictionDetail = data.Running.find(
								x => x.match_code == match_code,
							)
							break
					}
				}

				data.Running.forEach(v=>{
					if(v.match_period=='FT'){
						app.inplayExpired.push(v)
					}else{
						app.inplay.push(v)
					}
				})

				setTimeout(() => {
					that.getDataInPlay(app)
				}, 3000)

			},
		})
	}

	getDataPregame(app) {
		let that = this
		$.ajax({
			url: 'index.php/api/get_pregame',
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function(response) {
				let data = JSON.parse(response)
				app.pregame = data.Pregame
				app.expiredPregame=data.MatchesFinished
				if (app.$store.state.predictionSelected.match_code != '') {
					let type = app.$store.state.predictionSelected.type
					let match_code = app.$store.state.predictionSelected.match_code
					switch (type) {
						case 'pregame':
							app.$store.state.dataPredictionDetail = data.Pregame.find(
								x => x.match_code == match_code,
							)
							break
					}
				}

				setTimeout(() => {
					that.getDataPregame(app)
				}, 600000)
			},
		})
	}

	getDataExpiredPregame(app) {
		let that = this
		$.ajax({
			url: 'index.php/api/get_expired_pregame',
			jsonp: 'callback',
			dataType: 'jsonp',
			success: function(response) {
				let data = JSON.parse(response)
				app.expiredPregame=data.MatchesFinished
			},
		})
	}

	getMatchLiveScore() {
		return axios.get(
			'http://www.hasilskor.com/API/JSON.aspx?sport=soccer&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf',
		)
	}

	getDataPreInplay(app) {
		let that = this
		let urlInplay = 'index.php/api/get_running'
		let urlPregame = 'index.php/api/get_pregame'
		$.when(
			$.ajax({
				url: urlInplay,
				dataType: 'jsonp',
			}),
			$.ajax({
				url: urlPregame,
				dataType: 'jsonp',
			}),
		).done((inplay, pregame) => {
			let inplayData = JSON.parse(inplay[0]).Running
			let pregameData = JSON.parse(pregame[0]).Pregame
			let data = []
			let type = ''
			app.pregame = pregameData
			app.expiredPregame=JSON.parse(pregame[0]).MatchesFinished
			app.inplay = []
			app.inplayExpired=[]
			inplayData.forEach(v=>{
				if(v.match_period=='FT'){
					app.inplayExpired.push(v)
				}else{
					app.inplay.push(v)
				}
			})

			if (app.inplay.length > 0) {
				data = app.inplay[0]
				type = 'inplay'
			} else {
				data = pregameData[0]
				type = 'pregame'
			}
			if (!app.$store.state.iconMenuShow) {
				app.$store.state.dataPredictionDetail = data
				app.$store.state.predictionSelected = {
					match_code: data.match_code,
					type: type,
					isopening:
						app.$store.state.isOpenPredictionDetail == false ? false : true,
				}
				app.$store.state.isOpenPredictionDetail = true
			}

			setTimeout(() => {
				that.getDataInPlay(app)
			}, 3000)

			setTimeout(() => {
				that.getDataPregame(app)
			}, 600000)
		})
	}

	getDataLiveScore(app) {
		let that = this
		$.when(
			this.getMatchLiveScore(),
			this.getStatsData(),
			this.getTimeLineData(),
		).done(function(matchlivescore, stats, timeline) {
			var leaguename = []
			var leagueLeft = []
			var leagueRight = []
			var dataleftcoln = []
			var datarightcoln = []
			for (var i = 0; i < matchlivescore.data.r.length; i++) {
				if (!that.checkLeague(matchlivescore.data.r[i][5], leaguename)) {
					leaguename.push({
						league: matchlivescore.data.r[i][5],
						leagueShortName: matchlivescore.data.r[i][6],
						leagueColorCode: matchlivescore.data.r[i][7],
					})
				}
			}

			for (var i = 0; i < leaguename.length; i++) {
				let dataArr = matchlivescore.data.r.filter(
					x => x[5] == leaguename[i].league,
				)

				if (
					dataleftcoln.length < datarightcoln.length ||
					dataleftcoln.length == 0
				) {
					leagueLeft.push(leaguename[i])
					for (var l = 0; l < dataArr.length; l++) {
						dataleftcoln.push(dataArr[l])
					}
				} else {
					leagueRight.push(leaguename[i])
					for (var l = 0; l < dataArr.length; l++) {
						datarightcoln.push(dataArr[l])
					}
				}
			}
			app.livescore = matchlivescore.data.r
			/*app.leagueLiveScoreLeft = leaguename.splice(
				0,
				Math.round(leaguename.length / 2),
			)
			app.leagueLiveScoreRight = leaguename*/
			app.leagueLiveScoreLeft = leagueLeft
			app.leagueLiveScoreRight = leagueRight
			app.livescoreStats = that.formatJson(stats.data)
			app.livescoreTimeLine = that.formatJson(timeline.data)

			let id = app.livescore[0][0]

			if (!app.$store.state.iconMenuShow) {
				if (!app.$store.state.isOpenLiveScoreDetail) {
					app.$store.state.dataLivescoreDetail = {
						match: app.livescore[0],
						stats:
							app.$root.livescoreStats.r.find(x => x[2] == id) == undefined
								? []
								: app.$root.livescoreStats.r.find(x => x[2] == id),
						timeline: app.$root.livescoreTimeLine.r.filter(x => x[2] == id),
					}
					app.$store.state.livescoreSelected = {
						match_code: id,
						isopening: false,
					}
				}
				app.$store.state.isOpenLiveScoreDetail = true
			}

			//update data for detail panel
			if (app.$store.state.dataLivescoreDetail.match[0] != undefined) {
				let id = app.$store.state.dataLivescoreDetail.match[0]
				app.$store.state.dataLivescoreDetail = {
					match: app.livescore.find(x => x[0] == id),
					stats:
						app.$root.livescoreStats.r.find(x => x[2] == id) == undefined
							? []
							: app.$root.livescoreStats.r.find(x => x[2] == id),
					timeline: app.$root.livescoreTimeLine.r.filter(x => x[2] == id),
				}
			}

			app.$store.state.timer = setTimeout(() => {
				that.getDataLiveScore(app)
			}, 5000)
		})
	}

	getDataLiveScoreByDate(date, app) {
		let that = this
		$('.loading').addClass('loading-is-visible')
		clearTimeout(app.$store.state.timer)
		$.ajax({
			url:
				'http://www.hasilskor.com/API/JSON.aspx?date=' +
				date +
				'&sport=soccer&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf',
			success: function(res) {
				var leaguename = []
				for (var i = 0; i < res.r.length; i++) {
					if (!that.checkLeague(res.r[i][5], leaguename)) {
						leaguename.push({
							league: res.r[i][5],
							leagueShortName: res.r[i][6],
							leagueColorCode: res.r[i][7],
						})
					}
				}
				app.livescore = res.r
				app.leagueLiveScoreLeft = leaguename.splice(
					0,
					Math.round(leaguename.length / 2),
				)
				app.leagueLiveScoreRight = leaguename
				$('.loading').removeClass('loading-is-visible')
			},
			error: function(error) {
				app.league = []
				app.livescore = []
				app.leagueLiveScoreLeft = []
				app.leagueLiveScoreRight = []
				$('.loading').removeClass('loading-is-visible')
			},
		})
	}

	getTimeLineData() {
		return axios.get(
			'http://www.hasilskor.com/API/JSON.aspx?callback=callbackJSON&sport=soccerDA&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf&date=&lut=&isJSONP=true&_=1506409621930',
		)
	}

	getStatsData() {
		return axios.get(
			'http://www.hasilskor.com/API/JSON.aspx?callback=callbackJSON&sport=soccerDB&s=26PDpiffaaBbGrBdfgnrK2pknndskc1f3IMeKLW6PqdprBMHMqSTQ7gcmlcx7jZMxmyeTTBXRqwDh5p044MJHrf&date=&lut=&isJSONP=true&_=1506412139882',
		)
	}

	formatJson(data) {
		return JSON.parse(data.replace('callbackJSON(', '').replace(/\)$/g, ''))
	}
}

export default GetData
