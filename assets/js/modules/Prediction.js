'use strict'
import $ from 'jquery';
import statsLive from './StatsLiveStreamClick';
class Prediction  {
    constructor() {
        this.btnBack = $('.prediction-detail--toolbar--back-icon');
        this.btnOpenNewTab = $('.prediction-detail--toolbar--opentab-icon');
        this.predictionDetail = $('.prediction-detail');
        this.predictionContent = $('.row__prediction-detail');
        this.noMatchPrediction = $('.no-match-prediction');
        this.matchPrediction = $('.match-prediction');
        this.predictionDetailBtn = $('.prediction-detail-content--btn');
        this.predictionHeader = $('.prediction-detail-content--header-team');
        this.ou_odd_header = $('.odds-ou-header');
        this.odds_ou_content_m8 = $('.odds-ou-content--m8');
        this.statsContent = $('.prediction-detail-content--stats')
        this.statsLiveStreamClick =new statsLive();
        this.events();
    }

    events() {
        this.btnBack.click(this.closePredictionDetail.bind(this));
        this.matchPrediction.click(this.openPredictionDetail.bind(this));
        this.btnOpenNewTab.click(this.openNewTabPrediction.bind(this));
    }

    openPredictionDetail(item) {
        let that = this;
        let title = $(item.currentTarget).attr('data-pridiction-type');
        if (this.predictionDetail.hasClass('prediction-detail--is-visible')) {
            this.predictionDetail.addClass('prediction-detail--shrink');
            this.predictionDetail.one('animationend', function() {
                that.predictionDetail.removeClass('prediction-detail--shrink');
            })

        };
        $(this.matchPrediction.find('div.btn')).removeClass('btn--btn-selected')
        $($(item.currentTarget).find('div.btn')).addClass('btn--btn-selected')
        this.predictionContent.addClass('fade-out').removeClass('fade-in');
        this.noMatchPrediction.addClass('no-match-prediction--is-visible');
        this.predictionDetail.addClass('prediction-detail--is-visible');

        //reset class
        this.predictionDetailBtn.attr('class', 'prediction-detail-content--btn');
        this.predictionHeader.attr('class', 'prediction-detail-content--header-team');
        this.ou_odd_header.attr('class', 'odds-ou-header');
        this.odds_ou_content_m8.attr('class', 'odds-ou-content--m8');
        this.statsLiveStreamClick.refreshStatLiveStream();
        

        switch (title) {
            case 'inplay':
                this.predictionDetailBtn.addClass('prediction-detail-content--btn--inplay');
                this.predictionHeader.addClass('prediction-detail-content--header-team--inplay');
                this.ou_odd_header.addClass('odds-ou-header--inplay');
                this.odds_ou_content_m8.addClass('odds-ou-content--m8--inplay');
                this.predictionDetail.attr('title','inplay');
                break;
            case 'pregame':
                this.predictionDetailBtn.addClass('prediction-detail-content--btn--pregame');
                this.predictionHeader.addClass('prediction-detail-content--header-team--pregame');
                this.ou_odd_header.addClass('odds-ou-header--pregame');
                this.odds_ou_content_m8.addClass('odds-ou-content--m8--pregame');
                this.predictionDetail.attr('title','pregame');
                break;
        }

    }

    closePredictionDetail() {
        let that = this;
        window.setTimeout(function() {
            that.predictionContent.addClass('fade-in').removeClass('fade-out');
            that.noMatchPrediction.removeClass('no-match-prediction--is-visible');
        }, 500);
        this.predictionDetail.removeClass('prediction-detail--is-visible');
    }

    openNewTabPrediction(){
        alert();
    }
}

export default Prediction;