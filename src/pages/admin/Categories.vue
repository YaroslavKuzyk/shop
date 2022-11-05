<template lang="pug">
  div
    AdminHeader
    v-data-table(:headers="headers" :items="items" :items-per-page="5").elevation-1
      template(v-slot:top='')
        v-row.justify-end
          v-col(cols="2")
            v-btn(fab dark small color="indigo" @click="openCreate")
              v-icon mdi-plus
      template(v-slot:item.edit="{ item }")
        td
          v-btn(color="primary" @click="openEdit(item.id)") Редактирование
      template(v-slot:item.remove="{ item }")
        td
          v-btn(color="error" @click="removeCategories(item.id)") Удалить
    v-dialog(v-model="createDialog")
      v-card
        v-card-title.text-h5
          | Создание
        v-card-text
          v-text-field(v-model="newCategory")
        v-card-actions
          v-spacer
          v-btn(color='green darken-1' text='' @click='closeCreate')
            | Disagree
          v-btn(color='green darken-1' text='' @click='saveCreate')
            | Agree
    v-dialog(v-model="editDialog")
      v-card
        v-card-title.text-h5
          | Редактирование
        v-card-text
          span(v-for="item in editItem")
            v-text-field(v-model="item.name")
        v-card-actions
          v-spacer
          v-btn(color='green darken-1' text='' @click='closeEdit')
            | Disagree
          v-btn(color='green darken-1' text='' @click='closeEdit')
            | Agree
</template>

<script>
import AdminHeader from "@/components/Admin/AdminHeader";
export default {
  name: "CategoriesPage",
  components: {AdminHeader},
  data() {
    return {
      createDialog: false,
      newCategory: '',
      editDialog: false,
      editItem: [],
      updateItems: [],
      headers: [
        { text: 'Название', value: 'name' },
        { text: 'ID', value: 'id' },
        { text: '', value: 'edit' },
        { text: '', value: 'remove' },
      ],
      items: [
        { name: 'Категория 1', id: 1,},
        { name: 'Категория 2', id: 2,},
        { name: 'Категория 3', id: 3,},
        { name: 'Категория 4', id: 4,},
      ],
    }
  },
  methods: {
    openCreate() {
      this.createDialog = true
    },
    saveCreate() {
      let item = {
        name: this.newCategory,
        id: Date.now()
      }
      this.items.push(item)
      this.newCategory = ''
      this.createDialog = false
    },
    closeCreate() {
      this.newCategory = ''
      this.createDialog = false
    },
    openEdit (id) {
      let item = []
      item = this.items.filter(e => e.id === id)
      this.editItem = item
      this.editDialog = true
    },
    closeEdit () {
      this.editDialog = false
    },
    removeCategories(id) {
      let item = []
      item = this.items.filter(e => e.id !== id)
      this.items = item
    }
  }
}
</script>

<style scoped>

</style>