<template lang="pug">
div.carousel-intro-wrap
  VueSlickCarousel(v-if="itemOnFilter.length" v-bind="settings")
          img(src="@/assets/img/intro/intro.jpg", :slidesToShow="slidesToShow") 
        
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "IntroCarousel",
  components: { VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
      },
    };
  },
  computed: {
    slidesToShow() {
      return this.itemOnFilter.length < 1 ? this.itemOnFilter.length : 1;
    },
  },
};
</script>
<style lang="scss" scoped>
.carousel-intro-wrap {
  .slick-slider {
    .slick-arrow {
      width: 15px;
      height: 28px;
      background-repeat: no-repeat;
      background-size: contain;

      &:before {
        display: none;
      }
    }
    .slick-prev {
      background: url("@/assets/img/product/arrow-left.svg");
    }
    .slick-next {
      background: url("@/assets/img/product/arrow-right.svg");
    }
  }
}
</style>
