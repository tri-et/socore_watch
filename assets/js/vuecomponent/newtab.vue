<template>
    <div class="newtab-container" :class="{'newtab-container--is-visible':$store.state.newtabOpen}">
        <div class="newtabcontent">
            <div>
                <span>open in new tab ?</span>
            </div>
            <div>
                <span>This will open the link in New Tab. Please make sure that popups are enabled</span>
            </div>
            <div @click="askAgain()">
                <div><input type="checkbox" :checked="$store.state.checkAskAgain"></div>
                <div>
                    <span>Don't ask me again</span>
                </div>
            </div>
            <div class="newtabcontent--btnOpen">
                <div @click="closeNewTab()" :class="{'askActived':$store.state.checkAskAgain}">
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

    askAgain(){
        this.$store.state.checkAskAgain=!this.$store.state.checkAskAgain

        if(this.$store.state.checkAskAgain){
            this.$root.$options.methods.setCookie('isopennewtab',true);
        }else{
            this.$root.$options.methods.setCookie('isopennewtab',false);
        }
    }
  },
}
</script>

