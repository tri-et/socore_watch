import Vue from 'vue'
import {store} from './modules/store'
import VueResize from 'vue-resize'
import liveDetail from './vuecomponent/liveDetail.vue'
Vue.use(VueResize)


new Vue({
	el:'#detaillivescore',
	store,
    render:h=>h(liveDetail),
    mounted(){
        this.$store.state.dataLivescoreDetail=window.livedetaildata.data
        this.$store.state.ishidetoolbar=true
    }
})
