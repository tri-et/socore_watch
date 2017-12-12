<template>
  <div class="row__calendar">
    <div class="material-icons" @click="nextday($event)">keyboard_arrow_left</div>
    <div class="calenders">
      <ul>
        <li v-for="(item,index) in days" :id="index" :key="index" @click="selectedDay(item,$event)" :class="{'calenders--active':(index==$store.state.activecalender.id)}">
          <div>
            <span>{{item|date}}</span>
            <span>{{item|day}}</span>
          </div>
        </li>
      </ul>
    </div>
    <div @click="preday($event)" class="material-icons">keyboard_arrow_right</div>
  </div>
</template>
<script>
import $ from 'jquery'
import getData from '../modules/Get_Data'
var getdata=new getData()
export default {
  data() {
    return {
      days: [],
    }
  },
  filters: {
    date(val) {
      var month_names_short = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      return month_names_short[val.getMonth()] + '-' + val.getDate()
    },
    day(val) {
      var day_names_short = ['Sun', 'Mon', 'Tue', 'Web', 'Thu', 'Fri', 'Sat']
      return day_names_short[val.getDay()]
    },
  },
  methods: {
    renderDays() {
      var dateOfmonth = []
      for (var i = 15; i--; ) {
        var today = new Date()
        var preday = today.setDate(today.getDate() - i)
        dateOfmonth.push(new Date(preday))
      }
      var current = new Date()

      for (var i = 0; i < 15; i++) {
        var nextday = current.setDate(current.getDate() + 1)
        dateOfmonth.push(new Date(nextday))
      }

      this.days = dateOfmonth
    },
 
    nextday(val) {
      $(this.$el.querySelector('.calenders')).animate({ scrollLeft: '-=' + 95 })
    },

    preday(val) {
      $(this.$el.querySelector('.calenders')).animate({ scrollLeft: '+=' + 95 })
    },

    setActive(val,index) {
      var today = new Date()
      if (
        today.getDate() == val.getDate() &&
        today.getMonth() == val.getMonth()
      ) {
        this.$store.state.activecalender.id=index.toString()
        
      }else{
        this.$store.state.activecalender.active=false
      }
    },

    getId(index) {
      return index
    },

    selectedDay(ob,event) {
      this.$store.state.activecalender.id=event.currentTarget.id
      let today =new Date()
      let date=ob.getFullYear()+'-'+(ob.getMonth()+1)+'-'+ob.getDate()
      if(ob.getFullYear()==today.getFullYear()&&ob.getMonth()==today.getMonth()&&ob.getDate()==today.getDate()){
        getdata.getDataLiveScore(this.$root)
      }else{
        getdata.getDataLiveScoreByDate(date,this.$root)
      }
      
    },
  },
  created() {
    this.renderDays()
  },
}
</script>

