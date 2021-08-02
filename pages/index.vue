<template>
  <div class="w-full">
    <div class="recommend-products w-full">
      <ProductLists/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ProductLists from '~/components/app/products/ProductLists.vue';

export default Vue.extend({
  components: { ProductLists }
})
</script>
