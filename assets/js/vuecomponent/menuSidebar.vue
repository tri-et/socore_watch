<template>
    <div class="side-bar-menu" @click="closeSidebar()" :class="{'side-bar-menu--is-visible':$store.state.menu_side_bar_open}">
        <div class="side-bar-search-content" onclick="event.cancelBubble=true;">
            <div class="side-bar-search-content--logo">
                <img height="92" src="assets/images/logo@1x.png" width="293">
                <a class="side-bar-search-content--btnclosemenu" @click="closeSidebar()">&times;</a>
            </div>
            <!--<div class="side-bar-search-content--input-search">
                <img height="30" src="assets/images/search.png" width="30">
                <input placeholder="Search for a match" type="text">
            </div>-->
            <div class="sidebar-list-menu">
                <div class="sidebar-list-menu--items">
                    <nav>
                        <ul>
                            <li data-menu-type="prediction" @click="itemClick($event)">
                                <a>
                                    <div :class="{'sidebar-list-menu--activemenu':$store.state.headermenu.type=='prediction'}"></div>
                                    <img src="assets/images/menu_predictions@1x.png">
                                    <span>predictions</span>
                                </a>
                            </li>
                            <li data-menu-type="livescore" @click="itemClick($event)">
                                <a>
                                    <div :class="{'sidebar-list-menu--activemenu':$store.state.headermenu.type=='livescore'}"></div>
                                    <img class="sidebar-list-menu--icon-livescores" src="assets/images/menu_livescores@1x.png">
                                    <span>live scores</span>
                                </a>
                            </li>
                            <li data-menu-type="notification" @click="itemClick($event)">
                                <a>
                                    <div></div><img width="24" class="sidebar-list-menu--icon-notification" src="assets/images/notification/notification_icon_disabled.png">
                                    <span>notification</span>
                                </a>
                            </li>
                            <li data-menu-type="help" @click="itemClick($event)">
                                <a>
                                    <div></div><img class="sidebar-list-menu--icon-help" src="assets/images/icon_help@1x.png">
                                    <span>help</span>
                                </a>
                            </li>
                            <li data-menu-type="about" @click="itemClick($event)">
                                <a>
                                    <div></div><img src="assets/images/menu_aboutus@1x.png">
                                    <span>about us</span>
                                </a>
                            </li>
                            <!--<li data-menu-type="login">
                                    <a><div></div><img class="sidebar-list-menu--icon-login" src="<?php echo base_url()?>assets/images/menu_login@1x.png"><span>login/sign up</span></a>
                                </li>-->
                        </ul>
                    </nav>
                </div>
                <div class="footerSidebar">
                    <span>Made by AMSB. All Right Reserved. © 2017</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  methods: {
    closeSidebar() {
      this.$store.state.menu_side_bar_open = false
    },

    itemClick(ob) {
      let typeMenu = ob.currentTarget.dataset.menuType
      this.closeSidebar()
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
      }
    },
  },
}
</script>

