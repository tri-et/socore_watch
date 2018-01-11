<template>
  <div class="match-prediction" :class="{'match-prediction--inplay':inplaypregame=='inplay',
  'match-prediction--pregame':inplaypregame=='pregame','match-prediction--expired':inplaypregame=='expired'}" data-pridiction-type="inplay" @click="openPredictionDetail(items)">
    <div class="match-prediction--items">
      <div :class="{'match-prediction--kickoff-expired':inplaypregame=='expired','match-prediction--kickoff-inplay':inplaypregame=='inplay','match-prediction--kickoff-pregame':inplaypregame=='pregame'}">
        <span>{{items.match_period|setTimeMatch(matchDate(items.match_dt),items.match_minute)}}</span>
        <span>{{items.match_period|setStatus}}</span>
      </div>
      <div class="match-prediction--teamname">
        <span>{{items.team_home}}</span>
        <span>{{items.team_away}}</span>
      </div>
      <div class="match-prediction--score">
        <span>{{items.score_home}}</span>
        <span>{{items.score_away}}</span>
      </div>
    </div><br>
    <div :id="items.match_code" class="btn" :class="{'btn--expired':inplaypregame=='expired','btn--inplay':inplaypregame=='inplay',
    'btn--pregame':inplaypregame=='pregame','btn--btn-selected':getId()==$store.state.predictionSelected.match_code}">
      <div>
        <!--<img class="btn--tickicon" src="assets/images/icon_tick@2x.png">-->
        <img :class="{'btn--tickicon':inplaypregame!='expired','btn--winicon':inplaypregame=='expired'}" :src="setSrcIcon(inplaypregame,items)">
      </div>
      <div :style="{'max-width':activeMarquee1?'75px':'max-content'}">
        <span :class="{'marquee':activeMarquee1}">{{items.pick_hdp=="H"?items.team_home:items.team_away}}</span>
      </div>
      <div>
        <span>&nbsp;</span>
        <span>[{{items.sys.hdp}}]</span>
        <span> @ </span>
        <span>{{items.sys.odds_home}}</span>
      </div>
      <div>
        <span>{{items.match_minute }}'</span>
        <span><img class="btn--watchicon" src="assets/images/icon_clock@2x.png"></span>
      </div>
    </div>
    <resize-observer @notify="setMarquee()" />
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'buttonPrediction',
  props: {
    inplaypregame: {
      type: String,
    },
    items: {
      type: Object,
    },
  },
  data() {
    return {
      activeMarquee1: false,
    }
  },
  filters: {
    setStatus(value) {
      return value == '' ? 'Kickoff' : value
    },
    setTimeMatch(val, time, minute) {
      return val == '' ? time : minute + "'"
    },
  },
  methods: {
    setOdds(newdata, olddata) {
      let newHpd = newdata.sys.hdp
      let oldHpd = olddata.sys.hdp
      if (newHpd == '') {
        this.items.sys.hdp = newHpd
      } else {
        this.items.sys.hdp = oldHpd
      }
    },
    setSrcIcon(value, data) {
      let url = ''
      let score_home = parseInt(data.score_home)
      let score_away = parseInt(data.score_away)
      if (value == 'expired') {
        switch (data.pick_hdp) {
          case 'H':
            url =
              score_home > score_away
                ? 'assets/images/icon_expired_win@1x_2.png'
                : 'assets/images/icon_expired_lose@1x_2.png'
            break
          default:
            url =
              score_away > score_home
                ? 'assets/images/icon_expired_win@1x_2.png'
                : 'assets/images/icon_expired_lose@1x_2.png'
            break
        }
      } else {
        url = 'assets/images/icon_tick@2x.png'
      }
      return url
    },
    matchDate(value) {
      var date = new Date(value)
      return (
        date.getHours() +
        ':' +
        (date.getMinutes() == 0 ? '00' : date.getMinutes())
      )
    },
    setMarquee() {
      var that = this
      this.activeMarquee1 = false

      setTimeout(() => {
        var divContain = that.$el.querySelector('.btn div:nth-child(2)')
        var textWidth = divContain.children[0].offsetWidth
        var divWidth = divContain.offsetWidth

        if (divWidth < textWidth) {
          that.activeMarquee1 = true
        } else {
          that.activeMarquee1 = false
        }
      }, 300)
    },
    openPredictionDetail(ob) {
      let that = this
      this.$store.state.statLiveActive = 'stats'
      this.$store.state.predictionSelected.isopening =
        this.$store.state.isOpenPredictionDetail == false ? false : true
      setTimeout(function() {
        that.$store.state.dataPredictionDetail = ob
        that.$store.state.predictionSelected = {
          match_code: ob.match_code,
          type: that.inplaypregame,
          isopening:
            that.$store.state.isOpenPredictionDetail == false ? false : true,
        }
      }, 500)
      this.$store.state.isOpenPredictionDetail = true
      setTimeout(function() {
        that.$store.state.predictionSelected.isopening = false
      }, 900)
    },
    getId() {
      return this.items.match_code
    },
  },
  watch: {
    items: function(newdata, olddata) {
      this.setOdds(newdata, olddata)
    },
  },
  mounted() {
    this.setMarquee()
  },
}
</script>
