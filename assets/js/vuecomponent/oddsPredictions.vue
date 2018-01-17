<template>
  <div>
    <div :class="{'odds-ou-content--heighlighOdd':(comp=='M8' && odds_type==true),'bg-up':bgupdown=='up','bg-down':bgupdown=='down'}">
      <span>{{items|setDash}}</span>
      <span class="arrow" :class="arrow"></span>
    </div>
    <!--<span class="arrow" :class="status.ibcodds_over"></span>-->
  </div>
</template>
<script>
export default {
  props: ['items', 'currentmatchcode','comp','odds'],
  data() {
    return {
      current_code: '',
      arrow: '',
      bgupdown:'',
      odds_type:false,
    }
  },
  methods: {
    setArrow(olddata, newdata) {
      let that = this
      if (olddata != '') {
        let oldvalue = parseFloat(olddata)
        let newvalue = parseFloat(newdata)
        if (newvalue > oldvalue) {
          this.arrow = this.comp=='M8'?'arrow--upodd':'arrow--up'
          this.bgupdown='up'
          if(this.odds!=undefined){
            this.odds_type=(this.odds.split('-')[0]==this.odds.split('-')[1]?true:false)
          }
          setTimeout(() => {
            that.arrow = ''
            that.odds_type=false
            this.bgupdown=''
          }, 3000)
        } else if (newvalue < oldvalue) {
           this.arrow = this.comp=='M8'?'arrow--downodd':'arrow--down'
          this.bgupdown='down'
          if(this.odds!=undefined){
            this.odds_type=(this.odds.split('-')[0]==this.odds.split('-')[1]?true:false)
          }
          setTimeout(() => {
            that.arrow = ''
            that.odds_type=false
            this.bgupdown=''
          }, 3000)
        } else {
          this.arrow = ''
          this.odds_type=false
        }
      }
    },
  },
  filters: {
    setDash(value) {
      return value == '' ? '-' : value
    },
  },
  watch: {
    items: function(newdata, olddata) {
      if (
        this.current_code == '' ||
        this.current_code != this.currentmatchcode
      ) {
        this.current_code = this.currentmatchcode
        this.arrow = ''
      } else {
        this.setArrow(olddata, newdata)
        this.current_code = this.currentmatchcode
      }
    },
  },
}
</script>

