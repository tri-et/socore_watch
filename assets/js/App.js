import Vue from 'vue'
import PredictionDetailVue from './vuecomponent/predictionDetail.vue'
import LiveScoreDetailVue from './vuecomponent/livescoreDetail.vue'
import LiveCastLiveScoreVue from './vuecomponent/livecastLiveScore.vue'
import LiveCastPrediction from './vuecomponent/livecastPrediction.vue'
import MobileMenu from './modules/MobileMenu'
import DesktopMenu from './modules/DesktopMenu'
import StatsLiveStreamClick from './modules/StatsLiveStreamClick'
import Prediction from './modules/Prediction'
import LiveScore from './modules/LiveSocre'
new Vue({
  el: '.main-container',
  components: {
    predictiondetail: PredictionDetailVue,
    livescoredetail: LiveScoreDetailVue,
    livecastprediction:LiveCastPrediction,
    livecastlivescore: LiveCastLiveScoreVue,
  },
})

var livescore = new LiveScore()

var mobileMenu = new MobileMenu()

var desktopMenu = new DesktopMenu()

var prediction = new Prediction()

var statsLiveStreamClick = new StatsLiveStreamClick()
