<script setup>
import { onMounted, provide, reactive, ref, watch } from 'vue';
import axios from 'axios';

import Header from './components/Header.vue';
import CardList from './components/CardList.vue';
import Drawer from './components/Drawer.vue';

const items = ref([]);

const filters = reactive({
  sortBy: 'title',
  searchValue: '',
});

const sortBy = ref('');
const searchValue = ref('');

const onChangeSelect = (e) => {
  filters.sortBy = e.target.value;
};

const onChangeInput = (e) => {
  filters.searchValue = e.target.value;
};

// Закладки
const fetchFavorites = async () => {
  try {
    const { data: favorites } = await axios.get(
      `https://3980f537f1af0ea9.mokky.dev/favorites`,
    );

    items.value = items.value.map((item) => {
      const favorite = favorites.find(
        (favorite) => favorite.parentId === item.id,
      );

      if (!favorite) {
        return item;
      }

      return {
        ...item,
        isFavorites: true,
        favoriteId: favorite.id,
      };
    });
  } catch (e) {
    console.error(e);
  }
};
//Добавление в закладки
const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id,
      };
      const { data } = await axios.post(
        `https://3980f537f1af0ea9.mokky.dev/favorites`,
        obj,
      );

      item.isFavorite = true;
      item.favorite = data.id;
    } else {
      item.isFavorite = false;
      await axios.delete(
        `https://3980f537f1af0ea9.mokky.dev/favorites/${item.favoriteId}`,
      );
      item.isfavorite = null;
    }
  } catch (err) {
    console.log(err);
  }
};

//Список товаров
const fetchItems = async () => {
  try {
    const params = {
      sortBy: filters.sortBy,
    };

    if (filters.searchValue) {
      params.title = `*${filters.searchValue}*`;
    }

    const { data } = await axios.get(
      `https://3980f537f1af0ea9.mokky.dev/items`,
      {
        params,
      },
    );
    items.value = data.map((obj) => ({
      ...obj,
      isFavorite: false,
      false: null,
      isAdded: false,
    }));
  } catch (e) {
    console.error(e);
  }
};

onMounted(async () => {
  await fetchItems();
  await fetchFavorites();
});
watch(filters, fetchItems);

provide('addToFavorite', addToFavorite);
</script>

<template>
  <!-- <Drawer /> -->

  <div class="bg-pink-200 w-4/5 m-auto rounded-xl shadow-2xl mt-14">
    <Header />

    <div class="p-10">
      <div class="flex justify-between items-center">
        <h1 class="text-4xl font-bold mb-8">Все кроссовки</h1>

        <div class="flex items-center gap-2">
          <select
            @change="onChangeSelect"
            class="py-2 px-3 outline-none border rounded-md"
          >
            <option value="name">По названию</option>
            <option value="price">По цене(дешевые)</option>
            <option value="-price">По цене(дорогие)</option>
          </select>
          <div class="relative">
            <img class="absolute left-5 top-4" src="/search.svg" alt="Search" />
            <input
              @input="onChangeInput"
              placeholder="Поиск..."
              class="w-30 h-12 px-12 outline-none rounded-xl border border-lime-500"
            />
          </div>
        </div>
      </div>

      <div class="mt-10">
        <CardList :items="items" @addToFavorite="addToFavorite" />
      </div>
    </div>
  </div>
</template>
