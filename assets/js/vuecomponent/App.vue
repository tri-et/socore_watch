<template>
    <div id="main">
        <menuheader></menuheader>
        <div class="main-container">
            <div class="row main-contents--prediction" :class="{'main-contents--is-visible':$store.state.headermenu.type=='prediction'}">
                <div class="row__prediction">
                    <div class="row__inplay-pregame inplay-pregame">
                        <div class="inplay-pregame--content">
                            <div class="row row__inplay inplay-pregame--inplay">
                                <div class="header-title header-title--inplay">
                                    <span>inplay</span>
                                </div>
                                <buttonprediction :items="item" v-for="(item,index) in $root.$data.inplay" :key="item.match_code" inplaypregame="inplay"></buttonprediction>
                                <div class="header-title header-title--expired">
                                    <span>EXPIRED inplay</span>
                                </div>
                                <div class="prediction-detail-content--expired">
                                    <span>No In-Play Predictions for today</span>
                                </div>
                            </div>
                            <div class="row row__inplay inplay-pregame--pregame">
                                <div class="header-title header-title--pregame">
                                    <span>pregame</span>
                                </div>
                                <buttonprediction :items="item" v-for="(item,index) in $root.$data.pregame" :key="item.match_code" inplaypregame="pregame"></buttonprediction>
                                <div class="header-title header-title--expired">
                                    <span>EXPIRED Pregame</span>
                                </div>
                                <div class="prediction-detail-content--expired">
                                    <span>No Pregame Predictions for today</span>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <span>All Right Reserved. © 2017. Powered by In-Play</span>
                        </div>
                    </div>
                </div>
                <predictiondetailpanel></predictiondetailpanel>

            </div>
            <div class="row main-contents--livescore" :class="{'main-contents--is-visible':$store.state.headermenu.type=='livescore'}">
                
                <div class="row__livescore">
                    <div class="loading">
                        <img src="assets/images/loading_spinner.gif" alt="" width="40">
                    </div>
                    <calender></calender>
                    <div class="row__livescorecontent inplay-pregame">
                        <div v-show="$root.$data.livescore.length==0" class="no-match">no match</div>
                        <div class="inplay-pregame--content">
                            <div class="row row__inplay inplay-pregame--inplay">
                                <template v-for="(league,index) in $root.$data.leagueLiveScoreLeft">
                                    <div class="header-title header-title--livescore" :key="index">
                                        <div :style="{'background-color':league.leagueColorCode}">
                                            <span>{{league.leagueShortName}}</span>
                                        </div>
                                        <div>
                                            <span>{{league.league}}</span>
                                        </div>
                                    </div>
                                    <div class="match-livescore" :key="league.leagueShortName">
                                        <ul>
                                            <matchlivescore :items="item" v-for="item in $root.$data.livescore" v-if="item[5]==league.league" :key="item[0]"></matchlivescore>
                                        </ul>
                                    </div>

                                </template>
                            </div>
                            <div class="row row__pregame inplay-pregame--pregame">
                                <template v-for="(league,index) in $root.$data.leagueLiveScoreRight">
                                    <div class="header-title header-title--livescore" :key="index">
                                        <div :style="{'background-color':league.leagueColorCode}">
                                            <span>{{league.leagueShortName}}</span>
                                        </div>
                                        <div>
                                            <span>{{league.league}}</span>
                                        </div>
                                    </div>
                                    <div class="match-livescore" :key="league.leagueShortName">
                                        <ul>
                                            <matchlivescore :items="item" v-for="item in $root.$data.livescore" v-if="item[5]==league.league" :key="item[0]"></matchlivescore>
                                        </ul>
                                    </div>

                                </template>
                            </div>
                        </div>
                        <div class="footer">
                            <span>All Right Reserved. © 2017. Powered by In-Play</span>
                        </div>
                    </div>
                </div>
                <livescoredetailpanel></livescoredetailpanel>
            </div>
        </div>
        <help></help>
        <about></about>
        <menusidebar></menusidebar>
    </div>
</template>
<script>
import menuheader from './menuHeader.vue'
import buttonprediction from './buttonPrediction.vue'
import predictiondetailpanel from './predictionDetailPanel.vue'
import livescoredetail from './livescoreDetail.vue'
import livecastlivescore from './livecastLiveScore.vue'
import help from './help.vue'
import about from './about.vue'
import menusidebar from './menuSidebar.vue'
import matchlivescore from './matchLiveScore.vue'
import livescoredetailpanel from './livescoreDetailPanel.vue'
import calender from './calender.vue'
export default {
  components: {
    menuheader,
    buttonprediction,
    predictiondetailpanel,
    livescoredetail,
    livecastlivescore,
    help,
    about,
    menusidebar,
    matchlivescore,
    livescoredetailpanel,
    calender
  },
}
</script>

