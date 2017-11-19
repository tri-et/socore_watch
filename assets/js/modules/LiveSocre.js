import $ from 'jquery';

class LiveScore {
    constructor() {
        this.btnBackLiveScore = $('.livescore-detail--toolbar--back-icon');
        this.livescoreDetail = $('.livescore-detail');
        this.livescoreContent = $('.row__livescore-detail');
        this.noMatchLiveScore = $('.no-match-livescore');
        this.matchLiveScore = $('.match-livescore--items');
        this.events();
    }

    events() {
        this.matchLiveScore.click(this.openLiveScoreDetail.bind(this));
        this.btnBackLiveScore.click(this.closeLivescoreDetail.bind(this));
    }

    openLiveScoreDetail(item) {
        let that = this;

        if (this.livescoreDetail.hasClass('livescore-detail--is-visible')) {
            this.livescoreDetail.addClass('livescore-detail--shrink');
            this.livescoreDetail.one('animationend', function() {
                that.livescoreDetail.removeClass('livescore-detail--shrink');
            })
        };
        this.livescoreContent.addClass('fade-out').removeClass('fade-in');
        this.noMatchLiveScore.addClass('no-match-livescore--is-visible');
        this.livescoreDetail.addClass('livescore-detail--is-visible');


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

export default LiveScore;