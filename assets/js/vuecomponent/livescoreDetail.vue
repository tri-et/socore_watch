<template>
  <div class="livescore-detail" :class="{'livescore-detail--is-visible':$store.state.isOpenLiveScoreDetail==true}">
    <div class="livescore-detail--toolbar">
      <div class="livescore-detail--toolbar--back-icon">
        <i class="material-icons">keyboard_backspace</i>
        <span>Back</span>
      </div>
      <div class="livescore-detail--toolbar--opentab-icon">
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
          <span :style="{'font-weight':setTeamWin(items.match[13],items[12])}">{{items.match[13]}}</span>
        </div>
      </div>
      <div class="livescore-detail-content--stats-timeline">
        <div class="livescore-detail-content--header-league">
          <div class="livescore-detail-content--header-league--league">
            <span>kickoff</span>
            <span>league</span>
          </div>
          <div class="livescore-detail-content--header-league--nameleague">
            <span>10:45</span>
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
        <div class="livescore-detail-content--stats-detail">
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
        <div class="livescore-detail-content--timeline-detail">
          <ul>
            <li>
              <div><img src="assets/images/iconl/1.gif" alt=""></div>
              <div>
                <span>testting</span>
              </div>
              <div>
                <span>86'</span>
              </div>
              <div>
                <span>testting1</span>
              </div>
              <div><img src="assets/images/iconl/1.gif" alt=""></div>
            </li>
          </ul>
        </div>
        <div class="livescore-detail-content--header-livestream">
          <div>
            <span>livestream</span>
          </div>
        </div>
        <div>
          <slot :items="items"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items'],
  methods: {
    setTeamWin(val, homeAwayScore) {
      return val > homeAwayScore ? 'bold' : ''
    },

    setStats(val, homeAway) {
      let stat = ''
      let homeoraway = []
      if (val != undefined) {
        homeoraway = (val==''?'0,0'.split(','):val.split(','))
        switch (homeAway) {
          case 'home':
            stat = homeoraway[0]=='0'?'-':homeoraway[0]
            break
          case 'away':
            stat = homeoraway[1]=='0'?'-':homeoraway[1]
            break
        }
      }
      return stat
    },

    setWidthStats(val){
      return val=='-'?'0%':((parseInt(val) * 100 / 30) + '%')
    }

  },
}
</script>

