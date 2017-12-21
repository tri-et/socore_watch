<template>
    <div class="row__livescore-detail" :class="{'fade-in':$store.state.livescoreSelected.match_code==''}">
        <div class="no-match-livescore" :class="{'no-match-livescore--is-visible':$store.state.isOpenLiveScoreDetail}">
            <span>no match selected</span>
            <br>
            <img src="assets/images/livescore_empty.png">
            <br>
            <p>Select a match from the left to see it's detail here!</p>
        </div>
        <livescoredetail :items="$store.state.dataLivescoreDetail" :class="{'livescore-detail--shrink':$store.state.livescoreSelected.isopening}">
            <template slot-scope="{items}">
                <livecastlivescore :items="items"></livecastlivescore>
            </template>
        </livescoredetail>
    </div>
</template>
<script>
import livescoredetail from './livescoreDetail.vue'
import livecastlivescore from './livecastLiveScore.vue'
export default {
    components:{
        livescoredetail,
        livecastlivescore
    }
}
</script>

