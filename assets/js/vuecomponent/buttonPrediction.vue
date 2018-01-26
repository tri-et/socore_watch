<template>
  <div class="match-prediction" :class="{'match-prediction--inplay':inplaypregame=='inplay',
  'match-prediction--pregame':inplaypregame=='pregame','match-prediction--expired':inplaypregame=='expired','match-prediction--active':(getId()==$store.state.predictionSelected.match_code && inplaypregame=='expired')}" data-pridiction-type="inplay" @click="openPredictionDetail(items)">
    <div class="match-prediction--items">
      <div :class="{'match-prediction--kickoff-expired':inplaypregame=='expired','match-prediction--kickoff-inplay':inplaypregame=='inplay','match-prediction--kickoff-pregame':inplaypregame=='pregame'}">
        <span>{{items.match_period|setTimeMatch(matchDate(items.match_dt),items.match_minute,inplaypregame)}}</span>
        <span>{{items.match_period|setStatus}}</span>
      </div>
      <div class="match-prediction--teamname">
        <span :style="homewin">{{items.team_home}}</span>
        <span :style="awaywin">{{items.team_away}}</span>
      </div>
      <div class="match-prediction--time" v-show="items.match_period==''">
        <span>{{items.match_dt|setremaining}}</span>
      </div>
      <div class="match-prediction--live" v-show="items.match_period!='' && items.match_period!='FT' && inplaypregame=='pregame'">
        <span>Live</span>
      </div>
      <div class="match-prediction--score" v-show="items.match_period=='FT' || inplaypregame=='inplay'">
        <span :style="homewin">{{items.score_home}}</span>
        <span :style="awaywin">{{items.score_away}}</span>
      </div>
    </div><br>
    <div :id="items.match_code" class="btn" :class="{'btn--expired':inplaypregame=='expired','btn--inplay':inplaypregame=='inplay',
    'btn--pregame':inplaypregame=='pregame','btn--btn-selected':(getId()==$store.state.predictionSelected.match_code && inplaypregame!='expired')}">
      <div>
        <img :class="{'btn--tickicon':inplaypregame!='expired','btn--winicon':inplaypregame=='expired'}" :src="setSrcIcon(inplaypregame,items)">
      </div>
      <div :style="{'max-width':activeMarquee1?'75px':'max-content'}" :class="{'btn--font-expired':inplaypregame=='expired'}">
        <span :class="{'marquee':activeMarquee1}">{{items.pick_hdp=="H"?items.team_home:items.team_away}}</span>
      </div>
      <div :class="{'btn--font-expired':inplaypregame=='expired'}">
        <span v-show="inplaypregame!='pregame'">[{{items.score_home+':'+items.score_away}}]</span>
        <span>&nbsp;</span>
        <span>{{items.sys.hdp}}</span>
        <span> @ </span>
        <span>{{items.pick_hdp=="H"?items.sys.odds_home:items.sys.odds_away}}</span>
      </div>
      <div v-show="items.match_period!=''">
        <span>{{items.match_minute|setTimeExpired(inplaypregame,items.minute_expired,expiredpregame)}}</span>
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
    expiredpregame: {
      type: String,
    },
  },
  data() {
    return {
      activeMarquee1: false,
      homewin: {},
      awaywin: {},
    }
  },
  filters: {
    setStatus(value) {
      var st = ''
      switch (value) {
        case '':
          st = 'Kickoff'
          break
        case 'Part1':
          st = '1H'
        case 'Part2':
          st = '2H'
          break
        default:
          st = value
      }
      return st
    },
    setTimeMatch(val, time, minute, inplaypregame) {
      var matchtime =
        val == '' || inplaypregame == 'expired' ? time : minute + "'"
      return matchtime
    },
    setTimeExpired(val, inplaypregame, minute_expired, expiredpregame) {
      let time = ''
      if (inplaypregame == 'expired' || inplaypregame == 'pregame') {
        if (inplaypregame == 'expired') {
          time = 'expired'
        } else {
          time = val + "'"
        }
      } else {
        time =
          minute_expired == 0 || minute_expired == undefined
            ? val + "'"
            : minute_expired + 'm'
      }
      return time
    },
    setremaining(matchdate) {
      var matchDate = new Date(matchdate)
      var currentDate = new Date()
      var millisec = matchDate.getTime() - currentDate.getTime()
      var seconds = (millisec / 1000).toFixed(0)
      var minutes = Math.floor(seconds / 60)
      var hours = ''
      if (minutes > 59) {
        hours = Math.floor(minutes / 60)
        hours = hours >= 10 ? hours : '0' + hours
        minutes = minutes - hours * 60
        minutes = minutes >= 10 ? minutes : '0' + minutes
      }

      seconds = Math.floor(seconds % 60)
      seconds = seconds >= 10 ? seconds : '0' + seconds
      if (hours != '') {
        return hours + 'h ' + minutes + 'm'
      }
      return minutes + 'm'
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
    setTeamWin(homescore, awayscore) {
      if (this.inplaypregame == 'expired') {
        if (homescore > awayscore) {
          this.homewin = {
            fontWeight: 'bold',
          }
          this.awaywin = {
            color: 'rgba(0,0,0,0.54)',
          }
        } else if (awayscore > homescore) {
          this.homewin = {
            color: 'rgba(0,0,0,0.54)',
          }
          this.awaywin = {
            fontWeight: 'bold',
          }
        } else {
          this.homewin = {}
          this.awaywin = {}
        }
      } else {
        this.homewin = {}
        this.awaywin = {}
      }
    },
    /*setTeamWin(val, homeAwayScore) {
      var winstyle='';
      if(this.inplaypregame=='expired'){
        winstyle=parseInt(val) > parseInt(homeAwayScore) ? 'bold' : ''
      }
      return winstyle
    },*/
    setSrcIcon(value, data) {
      let url = ''
      let score_home = parseInt(data.score_home)
      let score_away = parseInt(data.score_away)
      let hpd = parseFloat(data.sys.hdp)
      if (value == 'expired') {
        switch (data.pick_hdp) {
          case 'H':
            if (hpd + score_home > score_away) {
              url = 'assets/images/icon_expired_win@1x_2.png'
            } else if (hpd + score_home < score_away) {
              url = 'assets/images/icon_expired_lose@1x_2.png'
            } else {
              url = 'assets/images/icon_draw@x1.png'
            }
            break
          default:
            if (hpd + score_away > score_home) {
              url = 'assets/images/icon_expired_win@1x_2.png'
            } else if (hpd + score_away < score_home) {
              url = 'assets/images/icon_expired_lose@1x_2.png'
            } else {
              url = 'assets/images/icon_draw@x1.png'
            }
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
    this.setTeamWin(
      parseInt(this.items.score_home),
      parseInt(this.items.score_away),
    )
  },
}
</script>
