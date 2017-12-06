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
                                <buttonprediction :items="item" v-for="(item,index) in $root.$data.inplay" 
                                :key="item.match_code" inplaypregame="inplay"></buttonprediction>

                            </div>
                            <div class="row row__inplay inplay-pregame--pregame">
                                <div class="header-title header-title--pregame">
                                    <span>pregame</span>
                                </div>
                                <buttonprediction :items="item" v-for="(item,index) in $root.$data.pregame" 
                                :key="item.match_code" inplaypregame="pregame"></buttonprediction>
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
                    <div class="row__inplay-pregame inplay-pregame">
                        <div class="inplay-pregame--content">
                            <div class="row row__inplay inplay-pregame--inplay">
                                <div class="header-title header-title--livescore">
                                    <div>
                                        <span>MEX D1off taf</span>
                                    </div>
                                    <div>
                                        <span>Germany Oberliga Bade-Wurttemberg</span>
                                    </div>
                                </div>
                                <div class="match-livescore">
                                    <ul>
                                        <li>
                                            <div class="match-livescore match-livescore--items" title="test1">
                                                <div class="match-livescore--kickoff">
                                                    <span>17:00</span>
                                                    <span>kickoff</span>
                                                </div>
                                                <div class="match-livescore--teamname">
                                                    <span>SC Ostbahn XI</span>
                                                    <span>SC Mannsworth</span>
                                                </div>
                                                <div class="match-livescore--score">
                                                    <span>1</span>
                                                    <span>0</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="match-livescore match-livescore--items">
                                                <div class="match-livescore--kickoff">
                                                    <span>17:00</span>
                                                    <span>kickoff</span>
                                                </div>
                                                <div class="match-livescore--teamname">
                                                    <span>SC Ostbahn XI</span>
                                                    <span>SC Mannsworth</span>
                                                </div>
                                                <div class="match-livescore--score">
                                                    <span>1</span>
                                                    <span>0</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="row row__pregame inplay-pregame--pregame">
                                <div class="header-title header-title--livescore">
                                    <div>
                                        <span>KSA PR</span>
                                    </div>
                                    <div>
                                        <span>Germany Oberliga Bade-Wurttemberg</span>
                                    </div>
                                </div>
                                <div class="match-livescore">
                                    <ul>
                                        <li>
                                            <div class="match-livescore match-livescore--items">
                                                <div class="match-livescore--kickoff">
                                                    <span>17:00</span>
                                                    <span>kickoff</span>
                                                </div>
                                                <div class="match-livescore--teamname">
                                                    <span>SC Ostbahn XI</span>
                                                    <span>SC Mannsworth</span>
                                                </div>
                                                <div class="match-livescore--score">
                                                    <span>1</span>
                                                    <span>0</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <span>All Right Reserved. © 2017. Powered by In-Play</span>
                        </div>
                    </div>
                </div>
                <div class="row__livescore-detail fade-in">
                    <div class="no-match-livescore">
                        <span>no match selected</span>
                        <br>
                        <img src="assets/images/livescore_empty.png">
                        <br>
                        <p>Select a match from the left to see it's detail here!</p>
                    </div>
                    <livescoredetail>
                        <template slot-scope="{msg}">
                            <livecastlivescore :msg="msg"></livecastlivescore>
                        </template>
                    </livescoredetail>
                </div>
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
export default {
  components: {
    menuheader,
    buttonprediction,
    predictiondetailpanel,
    livescoredetail,
    livecastlivescore,
    help,
    about,
    menusidebar
  },
}
</script>

