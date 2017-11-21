<template>
  <div class="prediction-detail">
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
      <div class="prediction-detail-content--header-team">
        <div class="prediction-detail-content--btn">
          <div>
            <span>Gil Vicente Gil Vicente</span>
          </div>
          <span>[0.5]</span>
          <span>&nbsp;@&nbsp;</span>
          <span>0.91</span>
          <span><img src="assets/images/stopwatch_@1x.png"></span>
          <span>-&nbsp;</span>
        </div>
        <div class="prediction-detail-content--header-team">
          <div class="prediction-detail-content--panel-live">
            <span>live</span><br>
            <span>86'</span>
          </div>
          <div class="prediction-detail-content--team-score">
            <div class="prediction-detail-content--team-score--home">
              <span>home</span>
            </div>
            <div class="prediction-detail-content--team-score--comma">
              <span>3</span>
              <span>:</span>
              <span>0</span>
            </div>
            <div class="prediction-detail-content--team-score--away">
              <span>away</span>
            </div>
          </div>
        </div>
      </div>
      <div class="prediction-detail-content--header-team--stats-livestream-menu">
        <div class="row">
          <div class="row__6 prediction-detail-content--header-team--stats-livestream prediction-detail-content--header-team--active">
            <span>stats</span>
          </div>
          <div class="row__6 prediction-detail-content--header-team--stats-livestream">
            <span>live stream</span>
          </div>
        </div>
      </div>
      <div class="prediction-detail-content--stats-livestream-content">
        <div class="prediction-detail-content--stats prediction-detail-content--is-visible">
          <div class="odds-ou-header">
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
            <div class="odds-ou-content--m8">
              <span>M8</span>
            </div>
            <div>
              <span>-2.00</span>
            </div>
            <div>
              <span>0.99</span>
            </div>
            <div>
              <span>0.96</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>-2.50</span>
            </div>
            <div>
              <span>0.99</span>
            </div>
            <div>
              <span>0.96</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>-2.00</span>
            </div>
            <div>
              <span>0.99</span>
            </div>
            <div>
              <span>0.96</span>
            </div>
          </div>
          <!-- end Odds-->
          <!--start OD-->
          <div class="odds-ou-header">
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
            <div class="odds-ou-content--m8">
              <span>M8</span>
            </div>
            <div>
              <span>-2.00</span>
            </div>
            <div>
              <span>0.99</span>
            </div>
            <div>
              <span>0.96</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>sbo</span>
            </div>
            <div>
              <span>-2.50</span>
            </div>
            <div>
              <span>0.99</span>
            </div>
            <div>
              <span>0.96</span>
            </div>
          </div>
          <div class="odds-ou-content">
            <div>
              <span>ibc</span>
            </div>
            <div>
              <span>-2.00</span>
            </div>
            <div>
              <span>0.99</span>
            </div>
            <div>
              <span>0.96</span>
            </div>
          </div>
          <!-- end OU-->
        </div>
        <div class="prediction-detail-content--livestream"></div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      msg: '456568989',
    }
  }
}
</script>

