
import Vue from 'vue'
import {store} from './modules/store'
import VueResize from 'vue-resize'
import App1 from './vuecomponent/App1.vue'
Vue.use(VueResize)


new Vue({
	el:'#detailprediction',
	store,
    render:h=>h(App1),
    mounted(){
        this.$store.state.predictionSelected.type=window.predetaildata.type
        this.$store.state.dataPredictionDetail=window.predetaildata.data
        this.$store.state.isOpenPredictionDetail=true
    }
})


