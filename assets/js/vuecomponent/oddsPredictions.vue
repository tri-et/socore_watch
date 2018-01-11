<template>
  <div>
    <span>{{items|setDash}}</span>
    <span class="arrow" :class="arrow"></span>
    <!--<span class="arrow" :class="status.ibcodds_over"></span>-->
  </div>
</template>
<script>
export default {
  props: ['items', 'currentmatchcode'],
  data() {
    return {
      current_code: '',
      arrow: '',
    }
  },
  methods: {
    setArrow(olddata, newdata) {
      let that = this
      if (olddata != '') {
        let oldvalue = parseFloat(olddata)
        let newvalue = parseFloat(newdata)
        if (newvalue > oldvalue) {
          this.arrow = 'arrow--up'

          setTimeout(() => {
            that.arrow = ''
          }, 3000)
        } else if (newvalue < oldvalue) {
          this.arrow = 'arrow--down'
          setTimeout(() => {
            that.arrow = ''
          }, 3000)
        } else {
          this.arrow = ''
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

