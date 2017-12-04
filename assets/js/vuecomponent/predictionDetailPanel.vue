<template>
    <div class="row__prediction-detail" :class="{'fade-in':$store.state.isOpenPredictionDetail==false,'fade-out':$store.state.isOpenPredictionDetail==true}">
        <div class="no-match-prediction" :class="{'no-match-prediction--is-visible':$store.state.isOpenPredictionDetail==true}">
            <span>no match selected</span>
            <br>
            <img src="assets/images/livescore_empty.png">
            <br>
            <p>Select a match from the left to see it's detail here!</p>
        </div>
        <predictiondetail :class="{'prediction-detail--shrink':$store.state.predictionSelected.isopening==true}">
            <template slot-scope="{msg}">
                <livecastprediction :msg="msg"></livecastprediction>
            </template>
        </predictiondetail>
    </div>
</template>
<script>
import predictionDetail from './predictionDetail.vue'
import LiveCastPrediction from './livecastPrediction.vue'
export default {
  components: {
    predictiondetail: predictionDetail,
    livecastprediction: LiveCastPrediction,
  },
}
</script>

