<template>
    <div class="about-container" :class="{'about-container--is-visible':$store.state.aboutOpen}">
        <div class="about-content" onclick="event.cancelBubble=true;">
            <div class="about-content--header">
                <img src="assets/images/logo@1x.png" alt="">
                <span class="about-content--btnclosemenu" @click="closeAbout()">&times;</span>
            </div>
            <div class="about-content--content">
                <div class="about-content--content--items">
                    <div>
                        <img src="assets/images/about_syndication@1x.png" alt="">
                        <span class="about-content--content--about-syn">syndication</span>
                    </div>
                    <div>
                        <span>Leveraging the many networks and existing connections that already exist 
                            in the world of football-related live scores, news & predictions! Built upon 
                            reliable networks that are totally immersed in the scene from the underground 
                            tips to the backroom insights, all collected and refined through a reliable 
                            mechanism that has been the cornerstone of competitive odds</span>
                    </div>
                </div>
                <div class="about-content--content--items">
                    <div>
                        <img src="assets/images/about_ai@1x.png" alt="">
                        <span class="about-content--content--about-ai">Advanced A.I</span>
                    </div>
                    <div>
                        <span>Building the systems of tomorrow, that make use of the many advances in 
                            Artificial Intelligence, for faster, more accurate information! We make use 
                            of the latest, most powerful and accurate AI systems that have ever been put 
                            to use with sports information. This gives us the ability to send a large amount 
                            of data to the servers, and compute with great accuracy the likely results!</span>
                    </div>
                </div>
                <div class="about-content--content--items">
                    <div>
                        <img src="assets/images/about_professionals@1x.png" alt="">
                        <span class="about-content--content--about-pro">Independent Professionals</span>
                    </div>
                    <div>
                        <span>Stay ahead of the game with collected insights, information and knowledge from 
                            our network of independent professionals! With the flexibility of automation, it 
                            is possible for us to gather data from a large selection of individual tipsters, 
                            which gives access to the bigger picture, the reasoning and the likelihoods behind
                             different odds available on the market at any time!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        closeAbout(){
            this.$store.state.aboutOpen=false
        }
    }
}
</script>

