<template>
  <div>
    <Header />

    <div class="content">
      <nuxt />
    </div>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.content {
  padding: 3%;
}
</style>

<script lang="ts">
import Vue from "vue";

import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default Vue.extend({
  components: {
    Header,
    Footer
  }
});
</script>
