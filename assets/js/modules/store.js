import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        predictionSelected:{
            match_code:'',
            type:'',
            isopening:false,
            transitionName:''
        },
        isOpenPredictionDetail:false
    }
});