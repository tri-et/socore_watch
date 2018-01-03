<template>
  <div class="prediction-detail" :class="{'prediction-detail--is-visible':$store.state.isOpenPredictionDetail==true,'detailcenter':$store.state.ishidetoolbar}" title="inplay">
    <div class="prediction-detail--toolbar" :class="{'prediction-detail--toolbar-hide':$store.state.ishidetoolbar}">
      <div class="prediction-detail--toolbar--back-icon" @click="closePredictionDetail()">
        <i class="material-icons">keyboard_backspace</i>
        <span>Back</span>
      </div>
      <div class="prediction-detail--toolbar--opentab-icon" @click="openNewTab()">
        <i class="material-icons">open_in_new</i>
      </div>
    </div>
    <div class="prediction-detail-content">
      <div class="prediction-detail-content--header-team" :class="{'prediction-detail-content--header-team--inplay':$store.state.predictionSelected.type=='inplay',
      'prediction-detail-content--header-team--pregame':$store.state.predictionSelected.type=='pregame'}">
        <div class="prediction-detail-content--btn" :class="{'prediction-detail-content--btn--pregame':$store.state.predictionSelected.type=='pregame',
        'prediction-detail-content--btn--inplay':$store.state.predictionSelected.type=='inplay'}">
          <div :style="{'max-width':activeMarquee?'75px':'max-content'}">
            <span :class="{'marquee':activeMarquee}">{{items.pick_hdp=="H"?items.team_home:items.team_away}}</span>
          </div>
          <div>
            <span>&nbsp;[{{items.sys.hdp}}]</span>
            <span>&nbsp;@&nbsp;</span>
            <span>{{items.sys.odds_home}}</span>
            <span><img class="stopwatch btn--watchicon"></span>
            <span>-&nbsp;</span>
          </div>
        </div>
        <div class="prediction-detail-content--header-team">
          <div class="prediction-detail-content--panel-live">
            <span>{{items.match_period|setStatus}}</span>
            <span>{{items.match_period|setTimeMatch(matchDate(items.match_dt),items.match_minute)}}</span>
          </div>
          <div class="prediction-detail-content--team-score">
            <div class="prediction-detail-content--team-score--home">
              <span>{{items.team_home}}</span>
            </div>
            <div class="prediction-detail-content--team-score--comma">
              <span>{{items.score_home}}</span>
              <span>:</span>
              <span>{{items.score_away}}</span>
            </div>
            <div class="prediction-detail-content--team-score--away">
              <span>{{items.team_away}}</span>
            </div>
          </div>
        </div>
        <resize-observer @notify="setMarquee()" />
      </div>
      <div class="prediction-detail-content--header-team--stats-livestream-menu">
        <div class="row">
          <div data-type="stats" @click="statLiveClick($event)" class="row__6 prediction-detail-content--header-team--stats-livestream" :class="{'prediction-detail-content--header-team--active':$store.state.statLiveActive=='stats'}">
            <span>stats</span>
          </div>
          <div data-type="livestream" @click="statLiveClick($event)" class="row__6 prediction-detail-content--header-team--stats-livestream" :class="{'prediction-detail-content--header-team--active':$store.state.statLiveActive=='livestream'}">
            <span>live stream</span>
          </div>
        </div>
      </div>
      <div class="prediction-detail-content--stats-livestream-content">
        <div class="prediction-detail-content--stats" :class="{'prediction-detail-content--is-visible':$store.state.statLiveActive=='stats',
        'predictionpaddingtop':$store.state.ishidetoolbar}">
          <div class="odds-ou-header" :class="{'odds-ou-header--inplay':$store.state.predictionSelected.type=='inplay',
          'odds-ou-header--pregame':$store.state.predictionSelected.type=='pregame'}">
            <div>
              <span>ODDS</span>
            </div>
            <div>
              <span>Handicap</span>
            </div>
            <div>
              <span>Home</span>
            </div>
            <div>
              <span>Away</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div class="odds-ou-content--m8" :class="{'odds-ou-content--m8--pregame':$store.state.predictionSelected.type=='pregame',
            'odds-ou-content--m8--inplay':$store.state.predictionSelected.type=='inplay'}">
              <span>M8</span>
            </div>
            <div>
              <span>{{items.sys.hdp|setDash}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_home|setDash}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_away|setDash}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>{{items.sbo.hdp|setDash}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_home|setDash}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_away|setDash}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>{{items.ibc.hdp|setDash}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_home|setDash}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_away|setDash}}</span>
            </div>
          </div>
          <!-- end Odds-->
          <!--start OD-->
          <div class="odds-ou-header" :class="{'odds-ou-header--inplay':$store.state.predictionSelected.type=='inplay',
          'odds-ou-header--pregame':$store.state.predictionSelected.type=='pregame'}">
            <div>
              <span>OU</span>
            </div>
            <div>
              <span>Total Goals</span>
            </div>
            <div>
              <span>Over</span>
            </div>
            <div>
              <span>Under</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div class="odds-ou-content--m8" :class="{'odds-ou-content--m8--pregame':$store.state.predictionSelected.type=='pregame',
            'odds-ou-content--m8--inplay':$store.state.predictionSelected.type=='inplay'}">
              <span>M8</span>
            </div>
            <div>
              <span>{{items.sys.ou|setDash}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_over|setDash}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_under|setDash}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>{{items.sbo.ou|setDash}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_over|setDash}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_under|setDash}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>{{items.ibc.ou|setDash}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_over|setDash}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_under|setDash}}</span>
            </div>
          </div>
          <!-- end OU-->
        </div>
        <div class="prediction-detail-content--livestream" :class="{'prediction-detail-content--is-visible':$store.state.statLiveActive=='livestream'}">
          <div class="livestream-container" :class="{'livestream-container--is-visible':$store.state.predictionSelected.type=='pregame'}">
            <slot :items="items"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
    },
  },
  data() {
    return {
      activeMarquee: false
    }
  },
  filters: {
    setStatus(value) {
      return value == '' ? 'Kickoff' : value
    },

    setTimeMatch(val, time, minute) {
      return val == '' ? time : minute + "'"
    },

    setDash(value){
      return value == '' ? '-' : value
    }
  },
  methods: {
    setMarquee() {
      var that = this
      this.activeMarquee = false

      setTimeout(() => {
        var divContain = that.$el.querySelector('.prediction-detail-content--btn div:nth-child(1)')
        var textWidth = divContain.children[0].offsetWidth
        var divWidth = divContain.offsetWidth

        if (divWidth < textWidth) {
          that.activeMarquee = true
        } else {
          that.activeMarquee = false
        }
      }, 300)
    },
    matchDate(value) {
      var date = new Date(value)
      return (
        date.getHours() +
        ':' +
        (date.getMinutes() == 0 ? '00' : date.getMinutes())
      )
    },
    statLiveClick(ob) {
      let type = ob.currentTarget.dataset.type
      this.$store.state.statLiveActive = type
    },

    closePredictionDetail() {
      this.$store.state.isOpenPredictionDetail = false

      setTimeout(() => {
        this.$store.state.predictionSelected = {
          match_code: '',
          type: '',
          isopening: false,
        }
      }, 500)
    },

    openTab() {
      let newWindow
      this.$store.state.newtabOpen = false
      newWindow = window.open('index.php/home/detailprediction', '_blank')
      newWindow.predetaildata = {
        data: this.$store.state.dataPredictionDetail,
        type: this.$store.state.predictionSelected.type,
      }
    },

    openNewTab() {
      if (this.$root.$options.methods.getCookie('isopennewtab') == 'true') {
        this.openTab()
      } else {
        this.$store.state.newtabOpen = true
      }
    },
  },
  mounted() {
    this.setMarquee()
  }
}
</script>

