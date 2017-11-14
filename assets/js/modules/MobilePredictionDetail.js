import $ from 'jquery';

class MobilePredictionDetail {
    constructor() {
        this.btnBack = $('.prediction-detail--toolbar--back-icon');
        this.btnBackLiveScore = $('.livescore-detail--toolbar--back-icon');


        this.btnOpenNewTab = $('.prediction-detail--toolbar--opentab-icon');

        this.predictionDetail = $('.prediction-detail');
        this.livescoreDetail = $('.livescore-detail');

        this.predictionContent = $('.row__prediction-detail');
        this.livescoreContent = $('.row__livescore-detail');

        this.noMatchPrediction = $('.no-match-prediction');
        this.noMatchLiveScore = $('.no-match-livescore');

        this.matchPrediction = $('.match-prediction');
        this.matchLiveScore = $('.match-livescore--items');
        this.predictionDetailBtn = $('.prediction-detail-content--btn');
        this.predictionHeader = $('.prediction-detail-content--header-team');
        this.ou_odd_header = $('.odds-ou-header');
        this.odds_ou_content_m8 = $('.odds-ou-content--m8');
        this.events();
    }

    events() {
        this.btnBack.click(this.closePredictionDetail.bind(this));
        this.matchPrediction.click(this.openPredictionDetail.bind(this));
        this.matchLiveScore.click(this.openLiveScoreDetail.bind(this));
        this.btnOpenNewTab.click(this.openNewTabPrediction.bind(this));
        this.btnBackLiveScore.click(this.closeLivescoreDetail.bind(this));
    }

    openPredictionDetail(item) {
        let that = this;
        let title = $(item.currentTarget).attr('data-pridiction-type');

        this.predictionContent.addClass('fade-out').removeClass('fade-in');
        this.noMatchPrediction.addClass('no-match-prediction--is-visible');
        this.predictionDetail.addClass('prediction-detail--is-visible');

        //reset class
        this.predictionDetailBtn.attr('class', 'prediction-detail-content--btn');
        this.predictionHeader.attr('class', 'prediction-detail-content--header-team');
        this.ou_odd_header.attr('class', 'odds-ou-header');
        this.odds_ou_content_m8.attr('class', 'odds-ou-content--m8');

        switch (title) {
            case 'inplay':
                this.predictionDetailBtn.addClass('prediction-detail-content--btn--inplay');
                this.predictionHeader.addClass('prediction-detail-content--header-team--inplay');
                this.ou_odd_header.addClass('odds-ou-header--inplay');
                this.odds_ou_content_m8.addClass('odds-ou-content--m8--inplay');
                break;
            case 'pregame':
                this.predictionDetailBtn.addClass('prediction-detail-content--btn--pregame');
                this.predictionHeader.addClass('prediction-detail-content--header-team--pregame');
                this.ou_odd_header.addClass('odds-ou-header--pregame');
                this.odds_ou_content_m8.addClass('odds-ou-content--m8--pregame');
                break;
        }

    }

    openLiveScoreDetail(item) {
        this.livescoreContent.addClass('fade-out').removeClass('fade-in');
        this.noMatchLiveScore.addClass('no-match-livescore--is-visible');
        this.livescoreDetail.addClass('livescore-detail--is-visible');
    }

    closePredictionDetail() {
        let that = this;
        window.setTimeout(function() {
            that.predictionContent.addClass('fade-in').removeClass('fade-out');
            that.noMatchPrediction.removeClass('no-match-prediction--is-visible');
        }, 500);
        this.predictionDetail.removeClass('prediction-detail--is-visible');
    }

    closeLivescoreDetail() {
        let that = this;
        window.setTimeout(function() {
            that.livescoreContent.addClass('fade-in').removeClass('fade-out');
            that.noMatchLiveScore.removeClass('no-match-livescore--is-visible');
        }, 500);
        this.livescoreDetail.removeClass('livescore-detail--is-visible');
    }

    openNewTabPrediction() {
        alert('open');
    }
}

export default MobilePredictionDetail;