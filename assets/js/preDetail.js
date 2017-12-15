
import Vue from 'vue'
import {store} from './modules/store'
import VueResize from 'vue-resize'
import preDetail from './vuecomponent/preDetail.vue'
Vue.use(VueResize)


new Vue({
	el:'#detailprediction',
	store,
    render:h=>h(preDetail),
    mounted(){
        this.$store.state.predictionSelected.type=window.predetaildata.type
        this.$store.state.dataPredictionDetail=window.predetaildata.data
        this.$store.state.ishidetoolbar=true
    }
})


