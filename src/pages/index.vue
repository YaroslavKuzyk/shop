<template lang="pug">
div 
  CatigoriesCard
  ProductPopular
</template>

<script>
import CatigoriesCard from "@/components/Categories/CatigoriesCard";
import ProductPopular from "@/components/Product/ProductPopular";
export default {
  name: "IndexPage",
  components: {ProductPopular, CatigoriesCard},
};
</script>
