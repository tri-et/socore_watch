import Vue from 'vue'
import {store} from './modules/store'
import VueResize from 'vue-resize'

import LiveScoreDetailVue from './vuecomponent/livescoreDetail.vue'
import LiveCastLiveScoreVue from './vuecomponent/livecastLiveScore.vue'
import ButtonPrediction from './vuecomponent/buttonPrediction.vue'
import predictionDetailPanel from './vuecomponent/predictionDetailPanel.vue'
import MobileMenu from './modules/MobileMenu'
import DesktopMenu from './modules/DesktopMenu'
import StatsLiveStreamClick from './modules/StatsLiveStreamClick'
import Prediction from './modules/Prediction'
import LiveScore from './modules/LiveSocre'
import GetData from './modules/Get_Data'
Vue.use(VueResize)

let livescore = new LiveScore()

let mobileMenu = new MobileMenu()

let desktopMenu = new DesktopMenu()

let prediction = new Prediction()

let statsLiveStreamClick = new StatsLiveStreamClick()

let getdata = new GetData()
new Vue({
	el: '.main-container',
	store,
	data: {
		pregame: [],
		inplay:[]
	},
	components: {
		predictiondetailpanel:predictionDetailPanel,
		livescoredetail: LiveScoreDetailVue,
		livecastlivescore: LiveCastLiveScoreVue,
		buttonprediction: ButtonPrediction
	},
	mounted() {
		getdata.getDataInPlay(this)
		getdata.getDataPregame(this)
	}
})


