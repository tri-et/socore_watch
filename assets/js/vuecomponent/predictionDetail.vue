<template>
  <div class="prediction-detail" :class="{'prediction-detail--is-visible':$store.state.isOpenPredictionDetail==true}" title="inplay">
    <div class="prediction-detail--toolbar">
      <div class="prediction-detail--toolbar--back-icon">
        <i class="material-icons">keyboard_backspace</i>
        <span>Back</span>
      </div>
      <div class="prediction-detail--toolbar--opentab-icon">
        <i class="material-icons">open_in_new</i>
      </div>
    </div>
    <div class="prediction-detail-content">
      <div class="prediction-detail-content--header-team" :class="{'prediction-detail-content--header-team--inplay':$store.state.predictionSelected.type=='inplay',
      'prediction-detail-content--header-team--pregame':$store.state.predictionSelected.type=='pregame'}">
        <div class="prediction-detail-content--btn" :class="{'prediction-detail-content--btn--pregame':$store.state.predictionSelected.type=='pregame',
        'prediction-detail-content--btn--inplay':$store.state.predictionSelected.type=='inplay'}">
          <div>
            <span>{{items.team_home}}</span>
          </div>
          <span>&nbsp;[{{items.sys.hdp}}]</span>
          <span>&nbsp;@&nbsp;</span>
          <span>{{items.sys.odds_home}}</span>
          <span><img src="assets/images/stopwatch_@1x.png"></span>
          <span>-&nbsp;</span>
        </div>
        <div class="prediction-detail-content--header-team">
          <div class="prediction-detail-content--panel-live">
            <span>{{items.match_period|setStatus}}</span>
            <span>{{items.match_period|setTimeMatch(matchDate(items.match_dt),items.match_minute)}}</span>
          </div>
          <div class="prediction-detail-content--team-score">
            <div class="prediction-detail-content--team-score--home">
              <span>{{items.team_home}}</span>
            </div>
            <div class="prediction-detail-content--team-score--comma">
              <span>{{items.score_home}}</span>
              <span>:</span>
              <span>{{items.score_away}}</span>
            </div>
            <div class="prediction-detail-content--team-score--away">
              <span>{{items.team_away}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="prediction-detail-content--header-team--stats-livestream-menu">
        <div class="row">
          <div data-type="stats" @click="statLiveClick($event)" class="row__6 prediction-detail-content--header-team--stats-livestream"
          :class="{'prediction-detail-content--header-team--active':$store.state.statLiveActive=='stats'}">
            <span>stats</span>
          </div>
          <div data-type="livestream" @click="statLiveClick($event)" class="row__6 prediction-detail-content--header-team--stats-livestream"
          :class="{'prediction-detail-content--header-team--active':$store.state.statLiveActive=='livestream'}">
            <span>live stream</span>
          </div>
        </div>
      </div>
      <div class="prediction-detail-content--stats-livestream-content">
        <div class="prediction-detail-content--stats" :class="{'prediction-detail-content--is-visible':$store.state.statLiveActive=='stats'}">
          <div class="odds-ou-header" :class="{'odds-ou-header--inplay':$store.state.predictionSelected.type=='inplay',
          'odds-ou-header--pregame':$store.state.predictionSelected.type=='pregame'}">
            <div>
              <span>ODDS</span>
            </div>
            <div>
              <span>Handicap</span>
            </div>
            <div>
              <span>Home</span>
            </div>
            <div>
              <span>Away</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div class="odds-ou-content--m8" :class="{'odds-ou-content--m8--pregame':$store.state.predictionSelected.type=='pregame',
            'odds-ou-content--m8--inplay':$store.state.predictionSelected.type=='inplay'}">
              <span>M8</span>
            </div>
            <div>
              <span>{{items.sys.hdp}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_home}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_away}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>{{items.sbo.hdp}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_home}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_away}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>{{items.ibc.hdp}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_home}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_away}}</span>
            </div>
          </div>
          <!-- end Odds-->
          <!--start OD-->
          <div class="odds-ou-header" :class="{'odds-ou-header--inplay':$store.state.predictionSelected.type=='inplay',
          'odds-ou-header--pregame':$store.state.predictionSelected.type=='pregame'}">
            <div>
              <span>OU</span>
            </div>
            <div>
              <span>Total Goals</span>
            </div>
            <div>
              <span>Over</span>
            </div>
            <div>
              <span>Under</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div class="odds-ou-content--m8" :class="{'odds-ou-content--m8--pregame':$store.state.predictionSelected.type=='pregame',
            'odds-ou-content--m8--inplay':$store.state.predictionSelected.type=='inplay'}">
              <span>M8</span>
            </div>
            <div>
              <span>{{items.sys.ou}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_over}}</span>
            </div>
            <div>
              <span>{{items.sys.odds_under}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>{{items.sbo.ou}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_over}}</span>
            </div>
            <div>
              <span>{{items.sbo.odds_under}}</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>{{items.ibc.ou}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_over}}</span>
            </div>
            <div>
              <span>{{items.ibc.odds_under}}</span>
            </div>
          </div>
          <!-- end OU-->
        </div>
        <div class="prediction-detail-content--livestream" :class="{'prediction-detail-content--is-visible':$store.state.statLiveActive=='livestream'}">
          <div class="livestream-container" :class="{'livestream-container--is-visible':$store.state.predictionSelected.type=='pregame'}">
            <slot :items="items"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
    },
  },
  filters: {
    setStatus(value) {
      return value == '' ? 'Kickoff' : value
    },

    setTimeMatch(val, time, minute) {
      return val == '' ? time : minute + "'"
    },
  },
  methods: {
    matchDate(value) {
      var date = new Date(value)
      return (
        date.getHours() +
        ':' +
        (date.getMinutes() == 0 ? '00' : date.getMinutes())
      )
    },
    statLiveClick(ob) {
      let type = ob.currentTarget.dataset.type
      this.$store.state.statLiveActive=type
      switch(type){
        case 'stats':
        
        break
        case 'livestream':
        break
      }

    },
  },
  data() {
    return {
      msg: '456568989',
    }
  },
}
</script>

