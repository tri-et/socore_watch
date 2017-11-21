import Vue from 'vue'
import PredictionDetailVue from './vuecomponent/predictionDetail.vue'
import LiveScoreDetailVue from './vuecomponent/livescoreDetail.vue'
import LiveCastLiveScoreVue from './vuecomponent/livecastLiveScore.vue'
import MobileMenu from './modules/MobileMenu'
import DesktopMenu from './modules/DesktopMenu'

import Prediction from './modules/Prediction'
import StatsLiveStreamClick from './modules/StatsLiveStreamClick'
import LiveScore from './modules/LiveSocre'
new Vue({
  el: '.main-container',
  components: {
    livecastlivescore: LiveCastLiveScoreVue,
    predictiondetail: PredictionDetailVue,
    livescoredetail: LiveScoreDetailVue,
  },
})

var livescore = new LiveScore()

var mobileMenu = new MobileMenu()

var desktopMenu = new DesktopMenu()

var prediction = new Prediction()

var statsLiveStreamClick = new StatsLiveStreamClick()
