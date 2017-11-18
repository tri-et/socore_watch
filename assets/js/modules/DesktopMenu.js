import $ from 'jquery';
import openCloseTab from './Open_Close_Tab';
class DesktopMenu extends openCloseTab {
    constructor() {
        super();
        this.menuIcon = $(".primary-nav--icon-menu-bar");
        this.itemMenu = $('.primary-nav ul li a');
        this.contentPrediction = $('.main-contents--prediction');
        this.contentLiveScore = $('.main-contents--livescore');
        this.mainContainer = $('.main-container > div');
        this.helpContainer = $('.help-container');
        this.btnCloseHelpContent = $('.help-content--btnclosemenu');
        this.events();
    }

    events() {
        this.itemMenu.click(this.itemMenuClick.bind(this));
        this.btnCloseHelpContent.click(this.closeHelpContent.bind(this));
        this.helpContainer.click(this.closeHelpContent.bind(this));
    }

    itemMenuClick(item) {
        if (this.menuIcon.is(':hidden')) {
            let titleMenu = $(item.currentTarget).find('span')[0];
            if (titleMenu.innerHTML == 'live scores' || titleMenu.innerHTML == 'predictions') {

                this.itemMenu.removeClass('primary-nav--activemenu');
                $(item.currentTarget).addClass('primary-nav--activemenu');
                this.mainContainer.removeClass('main-contents--is-visible');

                if (titleMenu.innerHTML == 'live scores') {
                    this.contentLiveScore.addClass('main-contents--is-visible');
                } else {
                    this.contentPrediction.addClass('main-contents--is-visible');
                }

            } else {
                if (titleMenu.innerHTML == 'help') {
                    this.helpContainer.toggleClass('help-container--is-visible')
                } else {
                    console.log(titleMenu.innerHTML);
                }

            }
        }

    }

    closeHelpContent() {
        this.helpContainer.toggleClass('help-container--is-visible');
    }
}

export default DesktopMenu;