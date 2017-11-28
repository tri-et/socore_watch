import $ from 'jquery';
//import deskTopMenu from './DesktopMenu'
class MobileMenu {
    constructor() {
        this.menuIcon = $(".primary-nav--icon-menu-bar")
        this.menuContent = $(".side-bar-menu")
        this.btnClose = $(".side-bar-search-content--btnclosemenu")
        this.itemMenu = $(".sidebar-list-menu ul li")
        this.predictions = $('.primary-nav ul li:nth-child(2)')
        this.helpContainer = $('.help-container')
        this.aboutContainer = $('.about-container')
        this.contentPrediction = $('.main-contents--prediction')
        this.contentLiveScore = $('.main-contents--livescore')
        this.mainContainer = $('.main-container > div')
        this.itemMainMenu = $('.primary-nav ul li a')
        this.events()
    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        this.menuContent.click(this.toggleTheMenu.bind(this));
        this.btnClose.click(this.toggleTheMenu.bind(this));
        this.itemMenu.click(this.itemClick.bind(this));
        this.predictions.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        if (!this.menuIcon.is(':hidden')) {
            this.menuContent.toggleClass("side-bar-menu--is-visible");
        }
    }

    itemClick(item) {
        this.itemMenu.find('div').removeClass('sidebar-list-menu--activemenu')
        $($(item.currentTarget).find('div')).addClass('sidebar-list-menu--activemenu')
        this.toggleTheMenu()
        switch (item.currentTarget.dataset.menuType) {
            case 'predictions': case 'livescore':
                this.mainContainer.removeClass('main-contents--is-visible')
                this.itemMainMenu.removeClass('primary-nav--activemenu')
                if (item.currentTarget.dataset.menuType == 'predictions') {
                    this.contentPrediction.addClass('main-contents--is-visible')
                    $(this.itemMainMenu[0]).addClass('primary-nav--activemenu')
                } else {
                    this.contentLiveScore.addClass('main-contents--is-visible')
                    $(this.itemMainMenu[1]).addClass('primary-nav--activemenu')
                }
                break;
            case 'help':
                this.helpContainer.toggleClass('help-container--is-visible')
                break;
            case 'aboutus':
                this.aboutContainer.toggleClass('about-container--is-visible')
                break;
            case 'test':
                break;
        }


    }
}

export default MobileMenu;