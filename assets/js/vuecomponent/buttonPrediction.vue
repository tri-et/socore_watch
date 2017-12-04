<template>
  <div class="match-prediction" :class="{'match-prediction--inplay':inplaypregame=='inplay',
  'match-prediction--pregame':inplaypregame=='pregame'}" data-pridiction-type="inplay" @click="openPredictionDetail(items.item)">
    <div class="match-prediction--items">
      <div :class="{'match-prediction--kickoff-inplay':inplaypregame=='inplay','match-prediction--kickoff-pregame':inplaypregame=='pregame'}">
        <span>18:15</span>
        <span>kickoff</span>
      </div>
      <div class="match-prediction--teamname">
        <span>{{items.item.team_home}}</span>
        <span>{{items.item.team_away}}</span>
      </div>
      <div class="match-prediction--score">
        <span>{{items.item.score_home}}</span>
        <span>{{items.item.score_away}}</span>
      </div>
    </div><br>
    <div :id="items.item.match_code" class="btn" :class="{'btn--inplay':inplaypregame=='inplay',
    'btn--pregame':inplaypregame=='pregame','btn--btn-selected':getId()==$store.state.predictionSelected.match_code}">
      <div><img class="btn--tickicon" src="assets/images/icon_tick@2x.png"></div>
      <div>
        <span>{{items.item.team_home}}</span>
      </div>
      <div>
        <span>-</span>
        <span>[{{items.item.sys.hdp}}]</span>
        <span> @ </span>
        <span>{{items.item.sys.odds_home}}</span>
      </div>
      <div>
        <span>{{items.item.match_minute }}'</span>
        <span><img class="btn--watchicon" src="assets/images/stopwatch_@1x.png"></span>
        <resize-observer @notify="setMarquee" />
      </div>
    </div>
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
  methods: {
    setMarquee() {
      let divContain = this.$el.querySelector('div:nth-child(2)')
      let textWidth = divContain.children[0].offsetWidth
      let divWidth = divContain.offsetWidth

      if (divWidth < textWidth) {
        divContain.children[0].classList.add('marquee')
      } else {
        divContain.children[0].classList.remove('marquee')
      }
    },
    openPredictionDetail(ob) {
      let that=this;
      this.$store.state.predictionSelected = {
        match_code: ob.match_code,
        type:this.inplaypregame,
        isopening:this.$store.state.isOpenPredictionDetail==false?false:true
      }
      this.$store.state.isOpenPredictionDetail = true
      setTimeout(function(){
        that.$store.state.predictionSelected.isopening=false
      },600)
    },
    getId() {
      return this.items.item.match_code
    },
  },
  mounted() {
    this.setMarquee()
  },
}
</script>
