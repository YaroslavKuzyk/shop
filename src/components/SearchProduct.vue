<template lang="pug">
  v-container
    .search-product
      .search-product__tabs
        button(@click="inputField = 'name'" :class="{'active': inputField === 'name'}").search-product__title Поиск по названию товара
        button(@click="inputField = 'number'" :class="{'active': inputField === 'number'}").search-product__title Поиск по номеру
        button(@click="inputField = 'brand'" :class="{'active': inputField === 'brand'}").search-product__title Поиск по марке
      .search-product__field
        input(:placeholder="getPlaceholder" @keydown.enter="sendRequest")
        button(@click="sendRequest").desktop-only Искать
        button(@click="sendRequest").mobile-only
          svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
            path(d='M24.0889 22.2056L18.4027 16.8577C20.2569 15.0556 21.4313 12.6142 21.4313 9.88208C21.4313 4.41787 16.7339 0 10.9241 0C5.1143 0 0.416992 4.41787 0.416992 9.88208C0.416992 15.3463 5.1143 19.7642 10.9241 19.7642C13.1492 19.7642 15.2506 19.0666 16.9812 17.9621L22.791 23.4263C22.9764 23.6007 23.2236 23.6589 23.4709 23.6589C23.7181 23.6589 23.9653 23.6007 24.1507 23.4263C24.4598 23.0776 24.4598 22.5544 24.0889 22.2056ZM2.27119 9.88208C2.27119 5.40608 6.16501 1.7439 10.9241 1.7439C15.6832 1.7439 19.5771 5.40608 19.5771 9.88208C19.5771 14.3581 15.6832 18.0203 10.9241 18.0203C6.16501 18.0203 2.27119 14.3581 2.27119 9.88208Z' fill='#2F3035')
</template>

<script>
export default {
  name: "SearchProduct",
  data() {
    return{
      inputField: 'name',
    }
  },
  computed: {
    getPlaceholder() {
      let placeholderField = 'Введите название'
      switch (this.inputField) {
        case 'name':
          placeholderField = 'Введите название'
          break
        case 'number':
          placeholderField = 'Введите номер'
          break
        case 'brand':
          placeholderField = 'Введите марку'
          break
        default:
          placeholderField = ''
      }
      return placeholderField
    }
  },
  methods: {
    sendRequest() {
      try {
        if (this.inputField === 'name') console.log("Ищу по имени")
        if (this.inputField === 'number') console.log("Ищу по номеру")
        if (this.inputField === 'brand') console.log("Ищу по марке")
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.mobile-only {
  display: none;
}
.search-product {
  margin: 80px 0;
}
.search-product__tabs {
  margin-bottom: 25px;
  button.active {
    background: #F0F0F4;
    border-radius: 3px;
  }
}
.search-product__title {
  margin-right: 28px;
  padding: 11px 29px;
}

.search-product__field {

  input {
    width: calc(100% - 140px);
    height: 58px;
    background: #F0F0F4;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    padding: 0 20px;
    outline: none;
  }

  button {
    text-transform: uppercase;
    color: #fff;
    background: #1C62CD;
    padding: 17px 39px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
}

@media (max-width: 992px) {
  .search-product__tabs {
    overflow: auto;
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 15px;
    margin-bottom: 10px;
  }

  .search-product__title {
    flex-shrink: 0;
  }
}

@media (max-width: 768px) {
  .search-product__tabs {
    &::-webkit-scrollbar {
      display: none;
    }
  }
}

@media (max-width: 600px) {
  .desktop-only {
    display: none;
  }
  .mobile-only {
    display: block;
  }
  .search-product__field {
    display: flex;
    button {
      padding:17px;
      background: #F0F0F4;
    }
    input {
      width: calc(100% - 59px);
      height: 65px;
    }
  }
  .search-product__title {
    font-size: 14px;
    margin-right: 0;
  }
}
</style>