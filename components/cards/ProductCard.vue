<template>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-48 rounded overflow-hidden">
      <img :alt="imgAlt" class="object-cover object-center w-full h-full block" :src="url">
    </a>
    <div class="mt-4">
      <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{{ title }}</h3>
      <p class="mt-1">{{pricing}}</p>
    </div>
  </div>
</template>

<style lang="scss">
.product-card {
  @apply w-1/6 h-32;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ['imgAlt', 'title', 'pricing', 'url']
});
</script>
