<template lang="pug">
div 
  IntroCarousel
  ProductPopular
  div.category-wrap
    CategoryesCard(v-for="(item, index) in  items" :item="item" :key="index")
</template>

<script>
import CategoryesCard from "@/components/Categories/CategoryesCard";
import ProductPopular from "@/components/Product/ProductPopular";
import IntroCarousel from "@/components/Intro/IntroCarousel";
export default {
  name: "IndexPage",
  components: { ProductPopular, CategoryesCard, IntroCarousel },
  data() {
    return {
      items: [
        {
          name: "ATVs",
          id: "1",
          type: "category",
          href: "1",
        },
        {
          name: "jet skis",
          id: "2",
          type: "category",
          href: "#",
        },
        {
          name: "boats",
          id: "3",
          type: "category",
          href: "#",
        },
        {
          name: "snowmobiles",
          id: "4",
          type: "category",
          href: "#",
        },
        {
          name: "all-terrain vehicles",
          id: "5",
          type: "category",
          href: "#",
        },
        {
          name: "engines",
          id: "6",
          type: "category",
          href: "#",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.category-wrap {
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
</style>
