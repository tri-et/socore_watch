<template>
  <div class="btn" :class="{'btn--inplay':inplaypregame=='inplay','btn--pregame':inplaypregame=='pregame'}">
    <div><img class="btn--tickicon" src="assets/images/icon_tick@2x.png"></div>
    <div>
      <span>Gil Vicente Gil Vicente</span>
    </div>
    <div>
      <span>-</span>
      <span>[0.25]</span>
      <span> @ </span>
      <span>0.79</span>
    </div>
    <div>
      <span>90'</span>
      <span><img class="btn--watchicon" src="assets/images/stopwatch_@1x.png"></span>
      <resize-observer @notify="setMarquee" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    inplaypregame: {
      type: String,
    },
  },
  methods: {
    setMarquee() {
      console.log(1);
      let divContain = this.$el.querySelector('div:nth-child(2)')
      let textWidth = divContain.children[0].offsetWidth
      let divWidth = divContain.offsetWidth

      if (divWidth < textWidth) {
        divContain.children[0].classList.add('marquee')
      } else {
        divContain.children[0].classList.remove('marquee')
      }
    },
  },
  mounted() {
    this.$nextTick(function() {
      this.setMarquee
    })
  },
  
}
</script>
