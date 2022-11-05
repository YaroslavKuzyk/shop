<template lang="pug">
div.header
		div(@click="burgerActive = !burgerActive").burger-menu
			span
			span
			span
		div.header-mobile(:class="{'active' : burgerActive}")
			ul.header-link.px-0
				li
					router-link(to="/admin/index" exact) Главная
				li
					router-link(to="/admin/create-product" exact) Создать Продукт
				li
					router-link(to="/admin/all-products") Все Продукты
				li
					router-link(to="/admin/categories") Категория
</template>

<script>
export default {
  name: "AdminHeader",
  data() {
    return {
      burgerActive: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 600px) {
  .burger-menu {
    display: flex;
    flex-direction: column;
    span {
      width: 20px;
      height: 2px;
      background: #000;
      margin-bottom: 5px;
    }
  }
}
.header {
  padding: 24px 16px;
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 600px) {
    position: relative;
    display: flex;
    justify-content: flex-end;
  }

  &-mobile {
    @media (max-width: 600px) {
      position: fixed;
      top: 0;
      left: -500px;
      z-index: 2;
      padding: 24px;
      height: 100vh;
      width: 80%;
      background: #fff;
      transition: 0.4s;
    }
  }

  &-mobile.active {
    left: 0;
  }

  &-link {
     list-style: none;
     display: flex;
     justify-content: space-between;

    @media (max-width: 600px) {

      flex-direction: column;


      li {
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    a {
      color: #000;
      text-decoration: none;

      &:hover {
         color: #1976d2;
       }
    }
  }
}
.router-link-active {
  color: #1976d2 !important;
}
</style>