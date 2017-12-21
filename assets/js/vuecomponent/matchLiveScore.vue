<template>
  <li :class="{'match-livescore--actived':getId()==$store.state.livescoreSelected.match_code}">
    <div class="match-livescore match-livescore--items" @click="livescoreClick(items,$event)" :id="items[0]">
      <div class="match-livescore--kickoff">
        <div v-show="items[4]!='FT'" :class="{'match-livescore--live':setStyleLive(items[3])=='Live'}">
          <span>{{items[4]|setTime(items[10])}}</span>
          <span>{{items[3]|setStatus}}</span>
        </div>
        <div v-show="items[4]=='FT'">
          <span>FT</span>
        </div>

      </div>
      <div class="match-livescore--teamname">
        <div><span :class="{'marquee':activeMarqueehome}">{{items[8]}}</span></div>
        <div><span :class="{'marquee':activeMarqueeaway}">{{items[9]}}</span></div>
      </div>
      <div class="match-livescore--score">
        <span>{{items[12]}}</span>
        <span>{{items[13]}}</span>
      </div>
    </div>
    <resize-observer @notify="setMarquee()" />
  </li>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      activeMarqueeaway: false,
      activeMarqueehome:false
    }
  },
  filters: {
    setStatus(val) {
      var st = val
      switch (val) {
        case '3':
        case '1':
        case '2':
          st = 'Live'
          break
        case '0':
          st = 'Kickoff'
      }
      return st
    },
    setTime(val, time) {
      let times = val
      switch (val) {
        case '':
          let date = new Date(time)
          times =
            date.getHours() +
            ':' +
            (date.getMinutes() == '0' ? '00' : date.getMinutes())
          break
        default:
          times = val.indexOf('+')>0?val:val + "'"
      }
      return times
    },
  },
  methods: {
    setMarquee() {
      var that = this
      this.activeMarqueehome = false
      this.activeMarqueeaway = false

      setTimeout(() => {
        var divContainaway = that.$el.querySelector('.match-livescore--teamname div:nth-child(2)')
        var textWidthaway = divContainaway.children[0].offsetWidth
        var divWidthaway = divContainaway.offsetWidth

        if (divWidthaway < textWidthaway) {
          that.activeMarqueeaway = true
        } else {
          that.activeMarqueeaway = false
        }


        var divContainhome = that.$el.querySelector('.match-livescore--teamname div:nth-child(1)')
        var textWidthhome = divContainhome.children[0].offsetWidth
        var divWidthhome = divContainhome.offsetWidth

        if (divWidthhome < textWidthhome) {
          that.activeMarqueehome = true
        } else {
          that.activeMarqueehome = false
        }
      }, 300)
    },
    setStyleLive(val) {
      return this.$options.filters.setStatus(val)
    },
    livescoreClick(ob, event) {
      let that = this
      let id = event.currentTarget.id
      this.$store.state.livescoreSelected.isopening=true
      this.$store.state.dataLivescoreDetail = {
        match: ob,
        stats:
          this.$root.livescoreStats.r.find(x => x[2] == id) == undefined
            ? []
            : this.$root.livescoreStats.r.find(x => x[2] == id),
        timeline: this.$root.livescoreTimeLine.r.filter(x => x[2] == id),
      }
      this.$store.state.livescoreSelected = {
        match_code: id,
        isopening:this.$store.state.isOpenLiveScoreDetail == false ? false : true,
      }
      this.$store.state.isOpenLiveScoreDetail = true
      setTimeout(function() {
        that.$store.state.livescoreSelected.isopening = false
      }, 900)
    },
    getId() {
      return this.items[0]
    },
  },
}
</script>

