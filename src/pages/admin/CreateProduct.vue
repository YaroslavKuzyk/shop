<template lang="pug">
  div
    AdminHeader
    v-row.justify-center
      v-col(cols="6")
        form
          v-file-input(
            v-model="item.img"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
          )
          v-text-field(v-model="item.title" label="Название")
          v-text-field(v-model="item.id" label="Код товара")
          v-text-field(v-model="item.price" label="Цена")
          v-select(v-model="item.categories" :items="categories" label="Категория")
          v-text-field(v-model="item.brand" label="Бренд")
          v-text-field(v-model="item.model" label="Модель")
          v-text-field(v-model="item.country" label="Страна")
          v-select(v-model="item.type_product" :items="type_product" label="Тип")
          v-text-field(v-model="item.feature.manufacturer" label="Производитель")
          v-text-field(v-model="item.feature.count_places" label="Количество Мест")
          v-text-field(v-model="item.feature.power" label="Мощность л.с")
          v-text-field(v-model="item.feature.type" label="Тип двигателя")
          v-text-field(v-model="item.feature.year" label="Год выпуска")
          v-row
            v-col(cols="6")
              v-btn(@click="clear").mr-6 Очистить
              v-btn(@click="sendRequest" color="primary") Отправить
</template>

<script>
import AdminHeader from "@/components/Admin/AdminHeader";
export default {
  name: "CreateProduct",
  components: {AdminHeader},
  data () {
    return {
      item: {
        id: null,
        title: '',
        img: '',
        feature: {
          manufacturer: '',
          count_places: null,
          power: null,
          type: '',
          year: null,
        },
        categories: '',
        price: null,
        brand: '',
        model: '',
        country: '',
        type_product: ''
      },
      categories: ['Категория 1', 'Категория 2'],
      type_product: ['Default', 'Sale', 'New', 'Hit']
    }
  },
  methods: {
    clear() {
      this.item = {
        id: null,
        title: '',
        img: '',
        feature: {
          manufacturer: '',
          count_places: null,
          power: null,
          type: '',
          year: null,
        },
        categories: '',
        price: null,
        brand: '',
        model: '',
        country: '',
        type_product: ''
      }
    },
    sendRequest() {
      console.log(this.item)
      this.clear()
    }
  }
}
</script>

<style scoped>

</style>