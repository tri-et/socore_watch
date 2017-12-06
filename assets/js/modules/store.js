import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		predictionSelected: {
			match_code: '',
			type: '',
			isopening: false,
			transitionName: ''
		},
		headermenu: {
			type: 'prediction',
			help_about_active: false
		},
		isOpenPredictionDetail: false,

		helpOpen: false,
		aboutOpen: false,
		menu_side_bar_open: false,
		iconMenuShow: true,

		dataPredictionDetail: {
			sys: {
				hdp: "",
				odds_away: "",
				odds_home: "",
				odds_over: "",
				odds_under: "",
				ou: ""
			},
			sbo: {
				hdp: "",
				odds_away: "",
				odds_home: "",
				odds_over: "",
				odds_under: "",
				ou: ""
			},
			ibc: {
				hdp: "",
				odds_away: "",
				odds_home: "",
				odds_over: "",
				odds_under: "",
				ou: ""
			}
		},

		statLiveActive:"stats"

	}
});
