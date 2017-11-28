<template>
  <div class="btn btn--inplay">
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
        <span>90'</span> <span><img class="btn--watchicon" src="assets/images/stopwatch_@1x.png"></span>
        <resize-observer @notify="setMarquee" />
    </div>
  </div>
</template>
<script>
module.exports = {
  methods: {
    setMarquee() {
      console.log('123')
    },
  },
}
</script>
