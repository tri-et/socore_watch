<template>
    <div class="account-container" :class="{'account-container--is-visible':$store.state.accountOpen}">
        <div class="account-content">
            <div class="account-content--imgaccount">
                <div><img src="assets/images/img_account.png" width="100" alt=""></div>
                <div>
                    <span>lee amy ryan</span>
                </div>
            </div>
            <div class="account-content--header">
                <div>
                    <i class="fa fa-bars"></i>
                </div>
                <div>
                    <span>my account</span>
                </div>
                <div>
                    <i class="material-icons">more_vert</i>
                </div>
            </div>
            <div class="account-content--main-content">
                <div class="account-content--memnership">
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <span>Membership</span>
                                </div>
                                <div>
                                    <span>Unlimited (Trial)</span>
                                    <span>Valid till 30-Nov, '17</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Member Since</span>
                                </div>
                                <div>
                                    <span>22-Aug, '17</span>
                                    <span>100 days</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Transction History</span>
                                </div>
                                <div>
                                    <i class="material-icons">expand_more</i>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="account-content--foodter">footer</div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  methods: {
    closeAccount() {
      this.$store.state.accountOpen = false
    },
  },
}
</script>

