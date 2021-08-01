<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

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
