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
            <!-- <div>
              <span>{{items.sys.odds_home|setDash}}</span>
              <span class="arrow" :class="status.m8odds_home"></span>
            </div>
            <div>
              <span>{{items.sys.odds_away|setDash}}</span>
              <span class="arrow" :class="status.m8odds_away"></span>
            </div> -->
            <oddspredictions :items="items.sys.odds_home" :currentmatchcode="items.match_code"></oddspredictions>
            <oddspredictions :items="items.sys.odds_away" :currentmatchcode="items.match_code"></oddspredictions>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>{{items.sbo.hdp|setDash}}</span>
            </div>
            <!--<div>
              <span>{{items.sbo.odds_home|setDash}}</span>
              <span class="arrow" :class="status.sboodds_home"></span>
            </div>
            <div>
              <span>{{items.sbo.odds_away|setDash}}</span>
              <span class="arrow" :class="status.sboodds_away"></span>
            </div>-->
            <oddspredictions :items="items.sbo.odds_home" :currentmatchcode="items.match_code"></oddspredictions>
            <oddspredictions :items="items.sbo.odds_away" :currentmatchcode="items.match_code"></oddspredictions>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>{{items.ibc.hdp|setDash}}</span>
            </div>
            <!-- <div>
              <span>{{items.ibc.odds_home|setDash}}</span>
              <span class="arrow" :class="status.iboodds_home"></span>
            </div>
            <div>
              <span>{{items.ibc.odds_away|setDash}}</span>
              <span class="arrow" :class="status.iboodds_away"></span>
            </div> -->
            <oddspredictions :items="items.ibc.odds_home" :currentmatchcode="items.match_code"></oddspredictions>
            <oddspredictions :items="items.ibc.odds_away" :currentmatchcode="items.match_code"></oddspredictions>
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
            <!-- <div>
              <span>{{items.sys.odds_over|setDash}}</span>
              <span class="arrow" :class="status.m8odds_over"></span>
            </div>
            <div>
              <span>{{items.sys.odds_under|setDash}}</span>
              <span class="arrow" :class="status.m8odds_under"></span>
            </div> -->
            <oddspredictions :items="items.sys.odds_over" :currentmatchcode="items.match_code"></oddspredictions>
            <oddspredictions :items="items.sys.odds_under" :currentmatchcode="items.match_code"></oddspredictions>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>{{items.sbo.ou|setDash}}</span>
            </div>
            <!--<div>
              <span>{{items.sbo.odds_over|setDash}}</span>
              <span class="arrow" :class="status.sboodds_over"></span>
            </div>
            <div>
              <span>{{items.sbo.odds_under|setDash}}</span>
              <span class="arrow" :class="status.sboodds_under"></span>
            </div>-->
            <oddspredictions :items="items.sbo.odds_over" :currentmatchcode="items.match_code"></oddspredictions>
            <oddspredictions :items="items.sbo.odds_under" :currentmatchcode="items.match_code"></oddspredictions>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>{{items.ibc.ou|setDash}}</span>
            </div>
            <!-- <div>
              <span>{{items.ibc.odds_over|setDash}}</span>
              <span class="arrow" :class="status.ibcodds_over"></span>
            </div>
            <div>
              <span>{{items.ibc.odds_under|setDash}}</span>
              <span class="arrow" :class="status.ibcodds_under"></span>
            </div> -->
            <oddspredictions :items="items.ibc.odds_over" :currentmatchcode="items.match_code"></oddspredictions>
            <oddspredictions :items="items.ibc.odds_under" :currentmatchcode="items.match_code"></oddspredictions>
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
import oddspredictions from './oddsPredictions.vue'
export default {
  props: {
    items: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    oddspredictions,
  },
  data() {
    return {
      activeMarquee: false,
      status: {
        m8odds_home: '',
        m8odds_way: '',
        sboodds_home: '',
        sboodds_away: '',
        ibcodds_home: '',
        ibcodds_away: '',
        m8odds_over: '',
        m8odds_under: '',
        sboodds_over: '',
        sboodds_under: '',
        ibcodds_over: '',
        ibcodds_under: '',
      },
    }
  },
  /*watch: {
    items: function(newData, oldData) {
      var match_code = this.$store.state.predictionSelected.match_code
      if (
        match_code == newData.match_code &&
        newData.match_code == oldData.match_code
      ) {
        let m8keys = Object.keys(newData.sys).filter(
          item => !['hdp', 'ou'].includes(item),
        )
        let ibckeys = Object.keys(newData.ibc).filter(
          item => !['hdp', 'ou'].includes(item),
        )
        let sbokeys = Object.keys(newData.sbo).filter(
          item => !['hdp', 'ou'].includes(item),
        )

        for (var i = 0; i < m8keys.length; i++) {
          let newVal = parseFloat(newData.sys[m8keys[i]])
          let oldVal = parseFloat(oldData.sys[m8keys[i]])

          if (newVal > oldVal) {
            this.status['m8' + m8keys[i]] = 'arrow--up'
          } else if (newVal < oldVal) {
            this.status['m8' + m8keys[i]] = 'arrow--down'
          }
        }

        for (var i = 0; i < sbokeys.length; i++) {
          let newVal = parseFloat(newData.sbo[sbokeys[i]])
          let oldVal = parseFloat(oldData.sbo[sbokeys[i]])
          if (newVal > oldVal) {
            this.status['sbo' + sbokeys[i]] = 'arrow--up'
          } else if (newVal < oldVal) {
            this.status['sbo' + sbokeys[i]] = 'arrow--down'
          }
        }

        for (var i = 0; i < ibckeys.length; i++) {
          let newVal = parseFloat(newData.ibc[ibckeys[i]])
          let oldVal = parseFloat(oldData.ibc[ibckeys[i]])

          if (newVal > oldVal) {
            this.status['ibc' + ibckeys[i]] = 'arrow--up'
          } else if (newVal < oldVal) {
            this.status['ibc' + ibckeys[i]] = 'arrow--down'
          }
        }
      }
    },
  },*/

  filters: {
    setStatus(value) {
      return value == '' ? 'Kickoff' : value
    },

    setTimeMatch(val, time, minute) {
      return val == '' ? time : minute + "'"
    },

    setDash(value) {
      return value == '' ? '-' : value
    },
  },
  methods: {
    setMarquee() {
      var that = this
      this.activeMarquee = false

      setTimeout(() => {
        var divContain = that.$el.querySelector(
          '.prediction-detail-content--btn div:nth-child(1)',
        )
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
  },
}
</script>

