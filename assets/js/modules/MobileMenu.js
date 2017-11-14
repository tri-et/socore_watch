import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.menuIcon = $(".primary-nav--icon-menu-bar");
        this.menuContent = $(".side-bar-menu");
        this.btnClose = $(".side-bar-search-content--btnclosemenu");
        this.itemMenu = $(".sidebar-list-menu ul li");
        this.predictions = $('.primary-nav ul li:nth-child(2)');
        this.events();
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
        this.itemMenu.find('div').removeClass('sidebar-list-menu--activemenu');
        $($(item.currentTarget).find('div')).addClass('sidebar-list-menu--activemenu');

    }
}

export default MobileMenu;