<template lang="pug">
  div
    AdminHeader
    v-tabs(v-model="tab")
      v-tab Последние заказы
      v-tab Заказы на отправку
      v-tab Законченые заказы
    v-tabs-items(v-model="tab")
      v-tab-item
        v-data-table(:headers="last" :items="items" :items-per-page="5").elevation-1
          template(v-slot:item.remove="{ item }")
            v-btn(color="error") Удалить
          template(v-slot:item.add="{ item }")
            v-btn(color="primary") Обработать
      v-tab-item
        v-data-table(:headers="ongoing" :items="items" :items-per-page="5").elevation-1
          template(v-slot:item.remove="{ item }")
            v-btn(color="error") Удалить
          template(v-slot:item.finish="{ item }")
            v-btn Завершить
      v-tab-item
        v-data-table(:headers="finished" :items="items" :items-per-page="5").elevation-1
</template>

<script>
import AdminHeader from "@/components/Admin/AdminHeader";
export default {
  name: 'AdminPage',
  components: {AdminHeader},
  data () {
    return {
      tab: 0,
      last: [
        { text: 'Название', value: 'name' },
        { text: 'ID', value: 'id' },
        { text: 'Цена', value: 'price' },
        { text: 'Заказчик', value: 'user' },
        { text: 'Область', value: 'region' },
        { text: 'Город', value: 'city' },
        { text: 'Номер почты', value: 'mail' },
        { text: '', value: 'remove' },
        { text: '', value: 'add' },
      ],
      ongoing: [
        { text: 'Название', value: 'name' },
        { text: 'ID', value: 'id' },
        { text: 'Цена', value: 'price' },
        { text: 'Заказчик', value: 'user' },
        { text: 'Область', value: 'region' },
        { text: 'Город', value: 'city' },
        { text: 'Номер почты', value: 'mail' },
        { text: '', value: 'remove' },
        { text: '', value: 'finish' },
      ],
      finished: [
        { text: 'Название', value: 'name' },
        { text: 'ID', value: 'id' },
        { text: 'Цена', value: 'price' },
        { text: 'Заказчик', value: 'user' },
        { text: 'Область', value: 'region' },
        { text: 'Город', value: 'city' },
        { text: 'Номер почты', value: 'mail' },
      ],
      items: [
        { name: 'Гироскутер', id: 1, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 2, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 3, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 4, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 5, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 6, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 7, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 8, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 9, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 10, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 11, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 12, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 13, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
        { name: 'Гироскутер', id: 14, price: 1000, user: 'Кузик Ярослав Олексійович', region: 'Вінницька обл.', city: 'м. Бар', mail: 'Нова пошта №1'},
      ]
    }
  }
}
</script>