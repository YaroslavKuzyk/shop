<template lang="pug">
div 
  SearchProduct
  ProductPopular
</template>

<script>
import ProductPopular from "@/components/Product/ProductPopular";
import SearchProduct from "@/components/SearchProduct";
export default {
  name: "IndexPage",
  components: {SearchProduct, ProductPopular},
};
</script>
