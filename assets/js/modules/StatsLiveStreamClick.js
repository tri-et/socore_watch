import $ from 'jquery'
class StatsLiveStreamClick {
  constructor() {
    this.btnStats = $('.prediction-detail-content--header-team--stats-livestream-menu>div div')
    this.statsLiveStreamContent = $('.prediction-detail-content--stats-livestream-content>div')
    this.statsContent = $('.prediction-detail-content--stats')
    this.liveStreamContent = $('.prediction-detail-content--livestream')
    this.predictionDetail = $('.prediction-detail')
    this.livestreamContainer = $('.livestream-container')
    this.events()
  }

  events() {
    this.btnStats.click(this.menuStatsLiveStreamClick.bind(this))
  }

  menuStatsLiveStreamClick(item) {
    let title = $(item.currentTarget).find('span')[0]
    this.btnStats.removeClass('prediction-detail-content--header-team--active')
    $(item.currentTarget).addClass('prediction-detail-content--header-team--active')
    this.statsLiveStreamContent.removeClass('prediction-detail-content--is-visible')

    if (title.innerHTML == 'stats') {
      this.statsContent.addClass('prediction-detail-content--is-visible')
    } else {
      this.liveStreamContent.addClass('prediction-detail-content--is-visible')
      if(this.predictionDetail.attr('title')=='pregame'){
        this.livestreamContainer.addClass('livestream-container--is-visible')
      }
    }
  }

  refreshStatLiveStream(){
    this.btnStats.removeClass('prediction-detail-content--header-team--active')
    this.statsLiveStreamContent.removeClass('prediction-detail-content--is-visible')
    this.statsContent.addClass('prediction-detail-content--is-visible')
    this.livestreamContainer.attr('class','livestream-container')
    $(this.btnStats[0]).addClass('prediction-detail-content--header-team--active')
  }
}

export default StatsLiveStreamClick
