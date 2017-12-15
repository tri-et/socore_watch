<template>
    <div id="detaillivescore">
        <livescoredetail :items="$store.state.dataLivescoreDetail"></livescoredetail>
    </div>
</template>
<script>
import livescoredetail from './livescoreDetail.vue'
export default {
  components: {
    livescoredetail,
  },
}
</script>
