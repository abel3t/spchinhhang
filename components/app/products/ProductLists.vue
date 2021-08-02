<template>
  <div class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4">
        <ProductCard v-for="i in [1,2,3,4,5,6,7,8,9,10,11]" :key="i" v-bind="product"/>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../../cards/ProductCard';

export default {
  components: { ProductCard },
  data() {
    return {
      product:
        {
          'imgAlt': 'image',
          'title': 'Laptop Lenovo Ideapad Gaming 3 15IMH05 81Y4006SVN',
          'pricing': '17.979.000 ₫',
          'url': 'https://salt.tikicdn.com/cache/w1200/ts/product/33/da/45/551f384c965ce8ff79e1811da061b7f9.jpg'
        }
    };
  }
};
</script>
