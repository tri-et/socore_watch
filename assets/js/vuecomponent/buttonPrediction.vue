<template>
  <div class="match-prediction" :class="{'match-prediction--inplay':inplaypregame=='inplay',
  'match-prediction--pregame':inplaypregame=='pregame'}" data-pridiction-type="inplay" @click="openPredictionDetail(items)">
    <div class="match-prediction--items">
      <div :class="{'match-prediction--kickoff-inplay':inplaypregame=='inplay','match-prediction--kickoff-pregame':inplaypregame=='pregame'}">
        <span>{{items.match_dt|matchDate}}</span>
        <span>kickoff</span>
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
    <div :id="items.match_code" class="btn" :class="{'btn--inplay':inplaypregame=='inplay',
    'btn--pregame':inplaypregame=='pregame','btn--btn-selected':getId()==$store.state.predictionSelected.match_code}">
      <div><img class="btn--tickicon" src="assets/images/icon_tick@2x.png"></div>
      <div>
        <span :class="{'marquee':activeMarquee}">{{items.team_home}}</span>
      </div>
      <div>
        <span>-</span>
        <span>[{{items.sys.hdp}}]</span>
        <span> @ </span>
        <span>{{items.sys.odds_home}}</span>
      </div>
      <div>
        <span>{{items.match_minute }}'</span>
        <span><img class="btn--watchicon" src="assets/images/stopwatch_@1x.png"></span>
      </div>
    </div>
    <resize-observer @notify="setMarquee()" />
  </div>
</template>
<script>
export default {
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
      activeMarquee: false,
    }
  },
  filters: {
    matchDate(value) {
      var date = new Date(value)
      return (
        date.getHours() +':' +(date.getMinutes() == 0 ? '00' : date.getMinutes())
      )
    },
  },
  methods: {
    setMarquee() {
      var divContain = this.$el.querySelector('.btn div:nth-child(2)')
      var textWidth = divContain.children[0].offsetWidth
      var divWidth = divContain.offsetWidth

      if (divWidth < textWidth) {
        this.activeMarquee = true
      } else {
        this.activeMarquee = false
      }
    },
    openPredictionDetail(ob) {
      let that = this
      this.$store.state.dataPredictionDetail = ob
      this.$store.state.statLiveActive='stats'
      this.$store.state.predictionSelected = {
        match_code: ob.match_code,
        type: this.inplaypregame,
        isopening:
          this.$store.state.isOpenPredictionDetail == false ? false : true,
      }
      this.$store.state.isOpenPredictionDetail = true
      setTimeout(function() {
        that.$store.state.predictionSelected.isopening = false
      }, 900)
    },
    getId() {
      return this.items.match_code
    },
  },
  mounted() {
    this.setMarquee()
  },
}
</script>
