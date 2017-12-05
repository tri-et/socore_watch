<template>
    <div class="help-container" :class="{'help-container--is-visible':$store.state.helpOpen}">
        <div class="help-content" onclick="event.cancelBubble=true;">
            <div class="help-content--header">
                <span>Help & Info</span>
                <span>A quick overview of how to make the most of Score.Watch</span>
                <span class="help-content--btnclosemenu" @click="closeHelp()">&times;</span>
            </div>
            <div class="help-content--content">
                <ul>
                    <li>
                        <div><img src="assets/images/help-1.png" alt="">
                        </div>
                        <div>
                            <span>Keep an eye on Predictions</span>
                            <span>Using our deep information network, our algorithms calculate and deduce
                                 the most likely outcome of the match. Each prediction is valid for a 
                                 set amount of time, so be sure to keep an eye out for its validity!</span>
                        </div>
                    </li>
                    <li>
                        <div><img src="assets/images/help-2.png" alt="">
                        </div>
                        <div>
                            <span>Pre-Game & In-Play Predictionss</span>
                            <span>For matches that are live, the In-Play Predictions are updated constantly,
                                 taking into account changes to the match as it plays out. All In-Play 
                                 matches are colored orange. Matches that are yet to be played, or are 
                                 ‘Pre-game’, are colored green.</span>
                        </div>
                    </li>
                    <li>
                        <div><img src="assets/images/help-3.png" alt="">
                        </div>
                        <div>
                            <span>Handicaps, Odds & OUs</span>
                            <span>In a Match’s details screen, Odds for the match outcome, and if available,
                                the Over-Under [a fixed amount of goals - OU] are shown. Handicaps under 
                                the Odds represent the amount by which the home team’s score is adjusted
                                 at the end of the match</span>
                        </div>
                    </li>
                    <li>
                        <div><img src="assets/images/help-4.png" alt="">
                        </div>
                        <div>
                            <span>Expired Predictions</span>
                            <span>Once a match has been completed, the last made predictions are shown 
                                along with the actual outcome of the match. Matches that have recently just 
                                been completed will stay in their respective sections for a short duration 
                                before being moved to the Expired sections.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        closeHelp(){
            this.$store.state.helpOpen=false
        }
    }
}
</script>

