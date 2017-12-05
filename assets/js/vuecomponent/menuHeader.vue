<template>
    <header class="header-menu">
        <nav class="primary-nav">
            <ul>
                <li>
                    <i @click="itemMenuClick($event)" data-type-menu="menusidebar" class="fa fa-bars primary-nav--icon-menu-bar"></i>
                </li>
                <li>
                    <a @click="$store.state.iconMenuShow==false?openSidebar():itemMenuClick($event)" data-type-menu="prediction" :class="{'primary-nav--activemenu':$store.state.headermenu.type=='prediction'}" href="#"><img src="assets/images/menu_predictions@1x.png">
                        <span>predictions</span>
                        <span class="badge badge--inplay">1+ New</span><br>
                        <div class="primary-nav--highlight"></div>
                    </a>
                </li>
                <li>
                    <a @click="itemMenuClick($event)" data-type-menu="livescore" :class="{'primary-nav--activemenu':$store.state.headermenu.type=='livescore'}" href="#"><img class="primary-nav--icon-menu-livescore" src="assets/images/menu_livescores@1x.png">
                        <span>live scores</span>
                        <span class="badge badge--pregame">1+ New</span><br>
                        <div class="primary-nav--highlight"></div>
                    </a>
                </li>
                <li class="primary-nav--tooltip">
                    <a @click="itemMenuClick($event)" data-type-menu="help" href="#">
                        <img class="primary-nav--icon-menu-help primary-nav--icon-padding" src="assets/images/icon_help@1x.png">
                        <span class="primary-nav--is-hide-text-menu">help</span><br>
                        <div class="primary-nav--highlightmenuright"></div>
                    </a>
                    <span class="primary-nav--tooltiptext">Help</span>
                </li>
                <li class="primary-nav--tooltip">
                    <a @click="itemMenuClick($event)" data-type-menu="about" href="#">
                        <img class="primary-nav--icon-menu-about primary-nav--icon-padding" src="assets/images/menu_aboutus@1x.png">
                        <span class="primary-nav--is-hide-text-menu">about</span><br>
                        <div class="primary-nav--highlightmenuright"></div>
                    </a>
                    <span class="primary-nav--tooltiptext">About Us</span>
                </li>
                <!--<li><a href="#"><img class="primary-nav==icon-menu-login primary-nav==icon-padding"src="<?php echo base_url()?>assets/images/menu_login@1x.png"/><span class="primary-nav==is-hide-text-menu">login</span><br><div class="primary-nav==highlightmenuright"></div></a></li>-->
                <resize-observer @notify="checkIconMenu()" />
            </ul>
        </nav>
    </header>
</template>
<script>
import $ from 'jquery'
export default {
  methods: {
    itemMenuClick(ob) {
      let typeMenu = ob.currentTarget.dataset.typeMenu
      switch (typeMenu) {
        case 'prediction':
        case 'livescore':
          this.$store.state.headermenu.type = typeMenu
          break
        case 'help':
          this.$store.state.helpOpen = true
          break
        case 'about':
          this.$store.state.aboutOpen = true
          break
        case 'menusidebar':
          this.$store.state.menu_side_bar_open = true
          break
      }
    },

    checkIconMenu() {
      let isHidden = $('.primary-nav--icon-menu-bar').is(':hidden')
      if (isHidden) {
        this.$store.state.iconMenuShow = true
      } else {
        this.$store.state.iconMenuShow = false
      }
    },

    openSidebar() {
      this.$store.state.menu_side_bar_open = true
    },
  },
}
</script>

