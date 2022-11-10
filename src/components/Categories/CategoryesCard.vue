<template lang="pug">
div
  div.category-card
    div.category
      a(class='button', href='#').category-name {{ item.name }}
      div.category-links 
        a(class='button2', href='#').category-link Подробнее
        img(src="@/assets/img/category/Back.svg").category-links__img  
    img(src="@/assets/img/category/categori-logo.png").category-card__img  
</template>
<script>
export default {
  name: "CategoryesCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
<style lang="scss" scoped>
.category-card {
  display: flex;
  justify-content: space-between;
  height: 135px;
  width: 330px;
  border: 3px solid #cdcdcd;
  margin: 20px;
  max-width: 1170px;
  padding: 15px;
  transition: all 0.9s;

  &:hover {
    box-shadow: 3px 3px 20px rgba(50, 50, 50, 0.25);
    border-radius: 3px;
    border-style: hidden;
  }
  a {
    text-decoration: none;
  }
}
.catigori {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.category-name {
  font-weight: 700;
  font-size: 23px;
  line-height: 28px;
  color: #2f3035;
}
.category-link {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #c4c4c4;
}
.category-card__img {
  width: 130.21px;
  height: 100px;
}
.category-links__img {
  padding-left: 8px;
}
</style>
