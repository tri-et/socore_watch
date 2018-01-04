<template>
  <div class="livescore-detail" :class="{'livescore-detail--is-visible':$store.state.isOpenLiveScoreDetail==true,'detailcenterlive':$store.state.ishidetoolbar}">
    <div class="livescore-detail--toolbar" :class="{'livescore-detail--toolbar-hide':$store.state.ishidetoolbar}">
      <div class="livescore-detail--toolbar--back-icon" @click="closeLiveScoreDetail()">
        <i class="material-icons">keyboard_backspace</i>
        <span>Back</span>
      </div>
      <div class="livescore-detail--toolbar--opentab-icon" @click="openNewTab()">
        <i class="material-icons">open_in_new</i>
      </div>
    </div>
    <div class="livescore-detail-content">
      <div class="livescore-detail-content--header">
        <div v-show="items.match[3]!='0'" class="livescore-detail-content--header--status">
          <div v-show="items.match[4]!='FT'">
            <span>{{items.match[4]+"'"}}</span>
            <span>Live</span>
          </div>
          <div v-show="items.match[4]=='FT'">
            <span>FT</span>
          </div>
        </div>
        <div class="livescore-detail-content--header--teamname" :style="{'color':items.match[3]=='0'?'rgb(54, 204, 100)':'rgb(56, 97, 158)'}">
          <span :style="{'font-weight':setTeamWin(items.match[12],items.match[13])}">{{items.match[8]}}</span>
          <span :style="{'font-weight':setTeamWin(items.match[13],items.match[12])}">{{items.match[9]}}</span>
        </div>
        <div class="livescore-detail-content--header--score">
          <span :style="{'font-weight':setTeamWin(items.match[12],items.match[13])}">{{items.match[12]}}</span>
          <span :style="{'font-weight':setTeamWin(items.match[13],items.match[12])}">{{items.match[13]}}</span>
        </div>
      </div>
      <div class="livescore-detail-content--stats-timeline" :class="{'livepaddingtop':$store.state.ishidetoolbar}">
        <div class="livescore-detail-content--header-league">
          <div class="livescore-detail-content--header-league--league">
            <span>{{items.match[4]|setFT}}</span>
            <span>league</span>
          </div>
          <div class="livescore-detail-content--header-league--nameleague">
            <span>{{items.match[10]|setTimeLive}}</span>
            <span>{{items.match[5]}}</span>
          </div>
        </div>
        <div class="livescore-detail-content--header-stats-timeline">
          <div>
            <span>home</span>
          </div>
          <div>
            <span>stats</span>
          </div>
          <div>
            <span>away</span>
          </div>
        </div>
        <div v-show="items.stats.length==0 || items.match[3]==0" class="livescore-detail-content--stats-empty">
          <div><img src="assets/images/nodata.png" alt=""></div>
          <div>
            <span v-show="items.match[3]!=0">Don't have any Stats at the moment!</span>
            <span v-show="items.match[3]==0">Stats will be shown here when the match starts, at {{items.match[10]|setTimeLive}}</span>
          </div>
        </div>
        <div class="livescore-detail-content--stats-detail" v-show="items.stats.length!=0">
          <ul>
            <li>
              <div>
                <span>{{setStats(items.stats[6],'home')}}</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[6],'home'))}" class="livescore-detail-content--home-percent-line"></div>
              <div>
                <span>shots</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[6],'away'))}" class="livescore-detail-content--away-percent-line"></div>
              <div>
                <span>{{setStats(items.stats[6],'away')}}</span>
              </div>
            </li>
            <li>
              <div>
                <span>{{setStats(items.stats[37],'home')}}</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[37],'home'))}" class="livescore-detail-content--home-percent-line"></div>
              <div>
                <span>off target</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[37],'away'))}" class="livescore-detail-content--away-percent-line"></div>
              <div>
                <span>{{setStats(items.stats[37],'away')}}</span>
              </div>
            </li>
            <li>
              <div>
                <span>{{setStats(items.stats[9],'home')}}</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[9],'home'))}" class="livescore-detail-content--home-percent-line"></div>
              <div>
                <span>corner kicks</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[9],'away'))}" class="livescore-detail-content--away-percent-line"></div>
              <div>
                <span>{{setStats(items.stats[9],'away')}}</span>
              </div>
            </li>
            <li>
              <div>
                <span>{{setStats(items.stats[14],'home')}}</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[14],'home'))}" class="livescore-detail-content--home-percent-line"></div>
              <div>
                <span>yellow cards</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[14],'away'))}" class="livescore-detail-content--away-percent-line"></div>
              <div>
                <span>{{setStats(items.stats[14],'away')}}</span>
              </div>
            </li>
            <li>
              <div>
                <span>{{setStats(items.stats[16],'home')}}</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[16],'home'))}" class="livescore-detail-content--home-percent-line"></div>
              <div>
                <span>red cards</span>
              </div>
              <div><hr :style="{'width':setWidthStats(setStats(items.stats[16],'away'))}" class="livescore-detail-content--away-percent-line"></div>
              <div>
                <span>{{setStats(items.stats[16],'away')}}</span>
              </div>
            </li>
          </ul>
        </div>
        <div class="livescore-detail-content--header-stats-timeline">
          <div>
            <span>home</span>
          </div>
          <div>
            <span>timeline</span>
          </div>
          <div>
            <span>away</span>
          </div>
        </div>
        <div v-show="items.timeline.length==0 || items.match[3]==0" class="livescore-detail-content--timeline-empty">
          <div><img src="assets/images/nodata.png" alt=""></div>
          <div>
            <span v-show="items.match[3]!=0">Don't have any TimeLine at the moment!</span>
            <span v-show="items.match[3]==0">TimeLine will be shown here when the match starts, at {{items.match[10]|setTimeLive}}</span>
          </div>
        </div>
        <div class="livescore-detail-content--timeline-detail">
          <ul>
            <li v-for="item in items.timeline" :key="item[2]">
              <div><img :src="setIconTimeLine(item[4],'home',item[3])" alt=""></div>
              <div>
                <span>{{showHidePlayer(item[6],'home',item[3])}}</span>
              </div>
              <div>
                <span>{{item[5]+"'"}}</span>
              </div>
              <div>
                <span>{{showHidePlayer(item[6],'away',item[3])}}</span>
              </div>
              <div><img :src="setIconTimeLine(item[4],'away',item[3])" alt=""></div>
            </li>
          </ul>
        </div>
        <div class="livescore-detail-content--header-livestream" v-show="items.match[3]!=0">
          <div>
            <span>livestream</span>
          </div>
        </div>
        <div v-show="items.match[3]!=0">
          <slot :items="items"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],
  filters: {
    setTimeLive(val) {
      let date = new Date(val.replace(/-/g,'/'))
      return (
         (date.getHours().toString().length==1?("0"+date.getHours()):(date.getHours())) +':' + (date.getMinutes() == '0' ? '00' : date.getMinutes())
      )
    },

    setFT(val) {
      return val == 'FT' ? 'FT' : 'kickoff'
    },
  },
  methods: {
    setTeamWin(val, homeAwayScore) {
      return parseInt(val) > parseInt(homeAwayScore) ? 'bold' : ''
    },

    setStats(val, homeAway) {
      let stat = ''
      let homeoraway = []
      if (val != undefined) {
        homeoraway = val == '' ? '0,0'.split(',') : val.split(',')
        switch (homeAway) {
          case 'home':
            stat = homeoraway[0] == '0' ? '-' : homeoraway[0]
            break
          case 'away':
            stat = homeoraway[1] == '0' ? '-' : homeoraway[1]
            break
        }
      }
      return stat
    },

    setWidthStats(val) {
      return val == '-' ? '0%' : parseInt(val) * 100 / 30 + '%'
    },

    showHidePlayer(val, homeaway, number) {
      let player = ''
      switch (homeaway) {
        case 'home':
          player = number == 1 ? val : ''
          break
        case 'away':
          player = number == 0 ? val : ''
          break
      }
      return player
    },

    setIconTimeLine(val, homeaway, number) {
      let iconl = ''
      switch (homeaway) {
        case 'home':
          iconl = number == 1 ? (this.$store.state.ishidetoolbar?'../../assets/images/iconl/':'assets/images/iconl/') + val + '.gif' : ''
          break
        case 'away':
          iconl = number == 0 ? (this.$store.state.ishidetoolbar?'../../assets/images/iconl/':'assets/images/iconl/')  + val + '.gif' : ''
          break
      }
      return iconl
    },

    closeLiveScoreDetail() {
      this.$store.state.isOpenLiveScoreDetail = false

      setTimeout(() => {
        this.$store.state.livescoreSelected = {
          match_code: '',
          type: '',
          isopening: false,
        }
      }, 500)
    },
    openTab() {
      let newWindow
      this.$store.state.newtabOpen = false
      newWindow = window.open('index.php/home/detaillivescore', '_blank')
      newWindow.livedetaildata = {
        data: this.$store.state.dataLivescoreDetail
      }
    },

    openNewTab() {
      if (this.$root.$options.methods.getCookie('isopennewtab') == 'true') {
        this.openTab()
      } else {
        this.$store.state.newtabOpen = true
      }
    },
  },
}
</script>

