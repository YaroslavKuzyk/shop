<template lang="pug">
  div.product-popualr
    .product-popular__title Популярные товары
    div.product-popualr__filter
      button(v-for="filter in filters" :class="{'active' : filterActive == filter.value}"  @click="productFilter(filter.value)") {{ filter.name }}
    VueSlickCarousel(v-if="itemOnFilter.length" v-bind="settings" :slidesToShow="slidesToShow")
      div(v-for="(item, index) in  itemOnFilter").product-popular-wrapper
        ProductCard(v-if="item" :item="item" :key="index")
    div(v-else).product-popular__empty Извините! </br> Данных товаров в наличии нет!
</template>

<script>
import ProductCard from "@/components/Product/ProductCard";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "ProductPopular",
  components: { ProductCard, VueSlickCarousel },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        responsive: [
          {
            breakpoint: 1201,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              dots: false,
            },
          },
        ],
      },
      items: [
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "1",
          filters: "spares",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "spares",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "electronics",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "electronics",
        },
        {
          title: "electronics",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "electronics",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "1",
          filters: "spares",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "spares",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "1",
          filters: "spares",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "spares",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "electronics",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "electronics",
        },
        {
          title: "electronics",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "electronics",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "1",
          filters: "spares",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "spares",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "1",
          filters: "spares",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "spares",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "electronics",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "electronics",
        },
        {
          title: "electronics",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "electronics",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "1",
          filters: "spares",
        },
        {
          title: "spares",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "spares",
        },
        {
          title: "tools",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tools",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "motors",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "motors",
        },
        {
          title: "tires",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "tires",
        },
        {
          title: "accessories",
          price: "9 800",
          type: "sale",
          href: "#",
          filters: "accessories",
        },
      ],
      itemOnFilter: [],
      filterActive: "",
      filters: [
        { name: "Запчасти", value: "spares" },
        { name: "Моторы", value: "motors" },
        { name: "Шины", value: "tires" },
        { name: "Электроника", value: "electronics" },
        { name: "Инструменты", value: "tools" },
        { name: "Аксессуары", value: "accessories" },
        { name: "Пусто", value: "empty" },
      ],
    };
  },
  computed: {
    slidesToShow() {
      return this.itemOnFilter.length < 4 ? this.itemOnFilter.length : 4;
    },
  },
  mounted() {
    this.productFilter();
  },
  methods: {
    productFilter(val = "spares") {
      let item = [];
      item = this.items.filter((el) => el.filters === val);
      this.filterActive = val;
      this.itemOnFilter = item;
    },
  },
};
</script>

<style lang="scss">
.product-popualr__empty {
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 48px;
  opacity: 0.5;
}

.product-popular__title {
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  color: #2f3035;
  margin-bottom: 35px;
}

.product-popualr__filter {
  display: flex;
  margin-bottom: 35px;

  button {
    margin-right: 50px;
  }
}

.product-popualr__filter {
  .active {
    border-bottom: 2px solid #1c62cd;
  }
}

.product-popualr {
  max-width: 1170px;
  margin: 0 auto;
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
