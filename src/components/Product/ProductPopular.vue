<template lang="pug">
  div.product-popular
    .product-popular__title Популярные товары
    div.product-popular__filter
      button(v-for="filter in filters" :class="{'active' : filterActive === filter.value}"  @click="productFilter(filter.value)") {{ filter.name }}
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
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              dots: false
            }
          },
        ]
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
      if(window.innerWidth < 550) {
        return this.itemOnFilter.length < 1 ? this.itemOnFilter.length : 1;
      }
      if(window.innerWidth < 790) {
        return this.itemOnFilter.length < 2 ? this.itemOnFilter.length : 2;
      }
      if(window.innerWidth < 1025) {
        return this.itemOnFilter.length < 3 ? this.itemOnFilter.length : 3;
      }
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
.product-popular-wrapper {
  display: flex !important;
  justify-content: center;
}
.product-popular__empty {
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

.product-popular__filter {
  display: flex;
  margin-bottom: 35px;

  @media (max-width: 1200px) {
    overflow: scroll;
    padding-bottom: 20px;
    margin-bottom: 15px;
  }

  button {
    margin-right: 50px;
  }
}

.product-popular__filter {
  .active {
    border-bottom: 2px solid #1c62cd;
  }
}

.product-popular {
  max-width: 1170px;
  padding: 0 24px;
  margin: 0 auto 120px;

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
  .slick-dots {
    bottom: -50px;
    display: none !important;

    @media (max-width: 1200px) {
      display: block !important;
    }

    li.slick-active button {
      background: #1C62CD;
    }

    li button {
      width: 14px;
      height: 14px;
      padding: 0;
      background: #C4C4C4;
      border-radius: 50%;

      &:before {
        display: none;
      }
    }
  }
}
</style>
