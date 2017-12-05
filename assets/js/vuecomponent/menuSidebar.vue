<template>
    <div class="side-bar-menu" @click="closeSidebar()" :class="{'side-bar-menu--is-visible':$store.state.menu_side_bar_open}">
        <div class="side-bar-search-content" onclick="event.cancelBubble=true;">
            <div class="side-bar-search-content--logo">
                <img height="92" src="assets/images/logo@1x.png" width="293">
                <a class="side-bar-search-content--btnclosemenu" @click="closeSidebar()">&times;</a>
            </div>
            <div class="side-bar-search-content--input-search">
                <img height="30" src="assets/images/search.png" width="30">
                <input placeholder="Search for a match" type="text">
            </div>
            <div class="sidebar-list-menu">
                <div class="sidebar-list-menu--items">
                    <nav>
                        <ul>
                            <li data-menu-type="predictions">
                                <a>
                                    <div class="sidebar-list-menu--activemenu"></div><img src="assets/images/menu_predictions@1x.png">
                                    <span>predictions</span>
                                </a>
                            </li>
                            <li data-menu-type="livescore">
                                <a>
                                    <div></div><img class="sidebar-list-menu--icon-livescores" src="assets/images/menu_livescores@1x.png">
                                    <span>live scores</span>
                                </a>
                            </li>
                            <li data-menu-type="help">
                                <a>
                                    <div></div><img class="sidebar-list-menu--icon-help" src="assets/images/icon_help@1x.png">
                                    <span>help</span>
                                </a>
                            </li>
                            <li data-menu-type="aboutus">
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
    methods:{
        closeSidebar(){
            this.$store.state.menu_side_bar_open=false
        }
    }
}
</script>

