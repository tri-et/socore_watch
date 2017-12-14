<template>
    <div class="newtab-container" :class="{'newtab-container--is-visible':$store.state.newtabOpen}">
        <div class="newtabcontent">
            <div>
                <span>open in new tab ?</span>
            </div>
            <div>
                <span>This will open the link in New Tab. Please make sure that popups are enabled</span>
            </div>
            <div>
                <div><input type="checkbox"></div>
                <div>
                    <span>Don't ask me again</span>
                </div>
            </div>
            <div class="newtabcontent--btnOpen">
                <div @click="closeNewTab()">
                    <span>don't open</span>
                </div>
                <div @click="openTab()">
                    <span>yes, open</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    closeNewTab() {
      this.$store.state.newtabOpen = false
    },

    openTab() {
      let newWindow
      this.$store.state.newtabOpen = false
      newWindow = window.open('index.php/home/detailprediction', '_blank')
      newWindow.predetaildata = {
        data: this.$store.state.dataPredictionDetail,
        type:this.$store.state.predictionSelected.type
      }
    },
  },
}
</script>

