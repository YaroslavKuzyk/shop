<template lang="pug">
  div
    AdminHeader
    v-data-table(:headers="headers" :items="items" :items-per-page="5").elevation-1
      template(v-slot:item.edit="{ item }")
        td
          v-btn(color="primary" @click.stop="openModal(item.id)") Редактирование
    v-dialog(v-model="dialog")
      v-card
        v-card-title.text-h5
          | Редактирование
        v-card-text
          span(v-for="item in modalItems" )
            v-text-field(v-model="item.id")
            v-text-field(v-model="item.name")
            v-text-field(v-model="item.price")
        v-card-actions
          v-spacer
          v-btn(color='green darken-1' text='' @click='closeModal')
            | Disagree
          v-btn(color='green darken-1' text='' @click='closeModal')
            | Agree

</template>

<script>
import AdminHeader from "@/components/Admin/AdminHeader";
export default {
  name: "AllProducts",
  components: {AdminHeader},
  data() {
    return {
      dialog: false,
      headers: [
        { text: 'Название', value: 'name' },
        { text: 'ID', value: 'id' },
        { text: 'Цена', value: 'price' },
        { text: '', value: 'edit' },
      ],
      items: [
        { name: 'Гироскутер', id: 1, price: 1000,},
        { name: 'Гироскутер', id: 2, price: 1000,},
        { name: 'Саша', id: 3, price: 1000,},
        { name: 'Влад', id: 4, price: 1000,},
      ],
      modalItems: []
    }
  },
  methods: {
    openModal(id) {
      let item = []
      item = this.items.filter(el => el.id === id)
      this.modalItems = item
      this.dialog = true
    },
    closeModal () {
      this.modalItems = []
      this.dialog = false
    },
  }
}
</script>

<style scoped>

</style>