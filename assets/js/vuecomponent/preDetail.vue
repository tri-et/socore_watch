<template>
    <div id="detailprediction">
        <predictiondetail :items="$store.state.dataPredictionDetail"></predictiondetail>
    </div>
</template>
<script>
import predictiondetail from './predictionDetail.vue'
export default {
  components: {
    predictiondetail,
  },
}
</script>
