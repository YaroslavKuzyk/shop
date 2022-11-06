<template lang="pug">
  div.product-card
    .product-card__type {{ item.type }}
    a(:href="item.href").product-card__watch посмотреть товар
    button(:class="{'is-favorite': isFavorite}" @click="isFavorite = !isFavorite").product-card__favorite
      svg(width='24' height='22' viewbox='0 0 24 22' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M12 8.22892C12.234 7.10892 13.547 1.99992 17.382 1.99992C19.602 1.99992 22 3.55092 22 7.00292C22 10.9099 18.373 15.4729 12 19.6319C5.627 15.4729 2 10.9099 2 7.00292C2 3.51892 4.369 1.99792 6.577 1.99792C10.5 1.99792 11.722 7.12392 12 8.22892ZM0 7.00292C0 11.0709 3.06 16.4839 12 21.9999C20.94 16.4839 24 11.0709 24 7.00292C24 -0.959077 14.352 -2.02508 12 3.26592C9.662 -1.99608 0 -1.00408 0 7.00292Z' fill='black')
    img(src="@/assets/img/product/1.png").product-card__img
    h4.product-card__title {{ item.title }}
    span.product-card__price {{ item.price }}
    .product-card__basket
      svg(width='30' height='23' viewbox='0 0 30 23' fill='none' xmlns='http://www.w3.org/2000/svg')
        path(d='M30 0L29.0713 2.5H26.66L22.3175 17.5H5.76875L0 3.75H21.015L20.31 6.25H3.76L7.43125 15H20.4662L24.7563 0H30ZM10.625 18.75C9.59 18.75 8.75 19.59 8.75 20.625C8.75 21.6612 9.59 22.5 10.625 22.5C11.66 22.5 12.5 21.6612 12.5 20.625C12.5 19.59 11.66 18.75 10.625 18.75ZM19.25 10L16.875 18.75C15.84 18.75 15 19.5888 15 20.625C15 21.6612 15.84 22.5 16.875 22.5C17.91 22.5 18.75 21.6612 18.75 20.625C18.75 19.59 17.91 18.75 16.875 18.75L19.25 10Z' fill='white')

</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      isFavorite: false,
    }
  }
}
</script>

<style scoped lang="scss">
  .product-card {
    position: relative;
    display: inline-flex;
    flex-direction: column;
    padding: 50px 20px 30px;
    border: 1px solid #CDCDCD;
    border-radius: 3px;
    text-decoration: none;
    color: #2F3035;
    transition: 0.5s;

    &:hover {
      box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);

      .product-card__watch {
        opacity: 1;
      }
    }
  }

  .product-card__favorite {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .product-card__favorite.is-favorite {
    path {
      fill: red;
    }
  }

  .product-card__img {
    max-width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .product-card__title {
    margin-top: 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    max-width: 230px;
  }

  .product-card__price {
    margin-top: 25px;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    color: #2F3035;
  }

  .product-card__basket {
    position: absolute;
    right: -1px;
    bottom: -1px;
    z-index: 10;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1C62CD;
    border-radius: 10px 0px 0px 0px;
  }

  .product-card__type {
    position: absolute;
    top: 0;
    left: 0;
    background: #1C62CD;
    font-weight: 400;
    font-size: 15px;
    line-height: 14px;
    letter-spacing: 0.07em;
    color: #fff;
    text-transform: uppercase;
    padding: 8px 15px;
  }

  .product-card__watch {
    position: absolute;
    top: 122px;
    left: calc(50% - 89px);
    padding: 18px 21px;
    background: rgba(255,255,255, 0.9);
    opacity: 0;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    text-decoration: none;
    color: #2F3035;
  }
</style>