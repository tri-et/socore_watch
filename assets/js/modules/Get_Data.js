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
				//let data={"Pregame":[{"active":"1","match_code":"57023","match_dt":"09 Jan 2018 05:00","match_period":"Part2","match_minute":"56","league":"PORTUGAL LIGA NOS","team_home":"Estoril Praia","team_away":"Feirense","score_home":"0","score_away":"2","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"U","sys_company":"M8","sys":{"hdp":"-0.50","odds_home":"1.00","odds_away":"0.92","ou":"2.25","odds_over":"-0.98","odds_under":"0.88"},"sbo":{"hdp":"-0.50","odds_home":"1.00","odds_away":"0.92","ou":"2.25","odds_over":"-0.98","odds_under":"0.88"},"ibc":{"hdp":"-0.50","odds_home":"0.95","odds_away":"0.97","ou":"2.25","odds_over":"0.98","odds_under":"0.92"}},{"active":"1","match_code":"57020","match_dt":"09 Jan 2018 04:00","match_period":"Part2","match_minute":"45","league":"SPAIN LA LIGA","team_home":"Malaga","team_away":"RCD Espanyol","score_home":"0","score_away":"1","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"O","sys_company":"M8","sys":{"hdp":"0.00","odds_home":"-0.85","odds_away":"0.80","ou":"2.00","odds_over":"0.94","odds_under":"0.98"},"sbo":{"hdp":"0.00","odds_home":"-0.85","odds_away":"0.80","ou":"2.00","odds_over":"0.94","odds_under":"0.98"},"ibc":{"hdp":"0.00","odds_home":"-0.83","odds_away":"0.78","ou":"2.00","odds_over":"0.91","odds_under":"-0.99"}},{"active":"1","match_code":"57024","match_dt":"09 Jan 2018 04:00","match_period":"Part2","match_minute":"89","league":"FRANCE CUP","team_home":"Lens","team_away":"Boulogne","score_home":"2","score_away":"2","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"U","sys_company":"M8","sys":{"hdp":"-1.00","odds_home":"-0.91","odds_away":"0.83","ou":"2.75","odds_over":"-0.86","odds_under":"0.76"},"sbo":{"hdp":"-0.75","odds_home":"0.81","odds_away":"-0.89","ou":"2.50","odds_over":"0.80","odds_under":"-0.90"},"ibc":{"hdp":"-1.00","odds_home":"-0.92","odds_away":"0.84","ou":"2.75","odds_over":"-0.97","odds_under":"0.87"}},{"active":"1","match_code":"57021","match_dt":"09 Jan 2018 03:45","match_period":"Part2","match_minute":"87","league":"ENGLISH FA CUP","team_home":"Brighton \u0026 Hove Albion","team_away":"Crystal Palace","score_home":"2","score_away":"1","rb_id":"","bet_period":"90","pick_hdp":"H","pick_ou":"U","sys_company":"M8","sys":{"hdp":"0.25","odds_home":"0.94","odds_away":"0.98","ou":"2.00","odds_over":"1.00","odds_under":"0.90"},"sbo":{"hdp":"0.25","odds_home":"0.80","odds_away":"-0.88","ou":"2.00","odds_over":"0.92","odds_under":"0.98"},"ibc":{"hdp":"0.00","odds_home":"-0.82","odds_away":"0.74","ou":"2.00","odds_over":"0.91","odds_under":"0.99"}},{"active":"1","match_code":"57022","match_dt":"09 Jan 2018 03:00","match_period":"Part2","match_minute":"73","league":"PORTUGAL LIGA NOS","team_home":"Pacos de Ferreira","team_away":"Portimonense","score_home":"1","score_away":"2","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"O","sys_company":"M8","sys":{"hdp":"-0.50","odds_home":"0.83","odds_away":"-0.93","ou":"1.50","odds_over":"0.94","odds_under":"0.96"},"sbo":{"hdp":"0.00","odds_home":"0.95","odds_away":"0.97","ou":"2.25","odds_over":"0.90","odds_under":"1.00"},"ibc":{"hdp":"0.00","odds_home":"0.97","odds_away":"0.95","ou":"2.25","odds_over":"0.91","odds_under":"0.99"}}],"Running":[{"active":"1","match_code":"57026","match_dt":"09 Jan 2018 03:00","match_period":"FT","match_minute":"98","league":"PORTUGAL LIGA NOS","team_home":"Pacos de Ferreira","team_away":"Portimonense","score_home":"1","score_away":"1","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"O","sys_company":"M8","sys":{"hdp":"","odds_home":"","odds_away":"","ou":"","odds_over":"","odds_under":""},"sbo":{"hdp":"0.00","odds_home":"0.24","odds_away":"-0.4","ou":"2.50","odds_over":"-0.11","odds_under":"0.03"},"ibc":{"hdp":"0.00","odds_home":"0.28","odds_away":"-0.38","ou":"2.50","odds_over":"-0.13","odds_under":"0.05"}},{"active":"1","match_code":"57027","match_dt":"09 Jan 2018 03:45","match_period":"FT","match_minute":"94","league":"ENGLISH FA CUP","team_home":"Brighton \u0026 Hove Albion","team_away":"Crystal Palace","score_home":"2","score_away":"1","rb_id":"","bet_period":"90","pick_hdp":"H","pick_ou":"U","sys_company":"M8","sys":{"hdp":"0.00","odds_home":"0.90","odds_away":"-0.98","ou":"","odds_over":"","odds_under":""},"sbo":{"hdp":"0.00","odds_home":"0.82","odds_away":"-0.90","ou":"3.50","odds_over":"-0.13","odds_under":"0.05"},"ibc":{"hdp":"0.00","odds_home":"0.83","odds_away":"-0.91","ou":"3.50","odds_over":"-0.11","odds_under":"0.03"}},{"active":"1","match_code":"57029","match_dt":"09 Jan 2018 04:00","match_period":"FT","match_minute":"94","league":"FRANCE CUP","team_home":"Lens","team_away":"Boulogne","score_home":"2","score_away":"2","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"U","sys_company":"M8","sys":{"hdp":"0.00","odds_home":"0.50","odds_away":"-0.58","ou":"","odds_over":"","odds_under":""},"sbo":{"hdp":"0.00","odds_home":"0.42","odds_away":"-0.50","ou":"4.50","odds_over":"-0.13","odds_under":"0.05"},"ibc":{"hdp":"0.00","odds_home":"0.49","odds_away":"-0.57","ou":"4.50","odds_over":"-0.11","odds_under":"0.03"}},{"active":"1","match_code":"57028","match_dt":"09 Jan 2018 04:00","match_period":"FT","match_minute":"95","league":"SPAIN LA LIGA","team_home":"Malaga","team_away":"RCD Espanyol","score_home":"0","score_away":"1","rb_id":"","bet_period":"90","pick_hdp":"H","pick_ou":"O","sys_company":"M8","sys":{"hdp":"0.00","odds_home":"0.87","odds_away":"-0.95","ou":"","odds_over":"","odds_under":""},"sbo":{"hdp":"0.00","odds_home":"0.84","odds_away":"-0.92","ou":"1.50","odds_over":"-0.14","odds_under":"0.06"},"ibc":{"hdp":"0.00","odds_home":"0.83","odds_away":"-0.91","ou":"1.50","odds_over":"-0.10","odds_under":"0.02"}},{"active":"1","match_code":"57030","match_dt":"09 Jan 2018 05:00","match_period":"FT","match_minute":"94","league":"PORTUGAL LIGA NOS","team_home":"Estoril Praia","team_away":"Feirense","score_home":"0","score_away":"2","rb_id":"","bet_period":"90","pick_hdp":"A","pick_ou":"U","sys_company":"M8","sys":{"hdp":"0.00","odds_home":"0.60","odds_away":"-0.68","ou":"","odds_over":"","odds_under":""},"sbo":{"hdp":"0.00","odds_home":"0.59","odds_away":"-0.67","ou":"2.50","odds_over":"-0.10","odds_under":"0.02"},"ibc":{"hdp":"0.00","odds_home":"0.60","odds_away":"-0.68","ou":"2.50","odds_over":"-0.10","odds_under":"0.02"}}]}
				
				let data = JSON.parse(response)
				//app.inplay = data.Running
				app.inplayExpired=[]
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
			//app.inplay = inplayData
			app.inplayExpired=[]
			inplayData.forEach(v=>{
				if(v.match_period=='FT'){
					app.inplayExpired.push(v)
				}else{
					app.inplay.push(v)
				}
			})

			if (app.inplay > 0) {
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
