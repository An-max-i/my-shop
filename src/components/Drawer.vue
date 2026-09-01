<script setup>
import DrawerHead from './DrawerHead.vue';
import CartItemList from './CartItemList.vue';
</script>

<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8">
    <DrawerHead />

    <CartItemList />

    <div>
      <div class="flex justify-between mt-20">
        <span> Итого: </span>
        <div></div>
        <b>12 990 руб.</b>
      </div>
    </div>

    <div class="flex justify-between mt-5">
      <span> Налог: </span>
      <b>7 569 руб.</b>
    </div>
    <div>
      <button class="w-full bg-lime-600 text-white py-3 rounded-2xl mt-8">
        Оформить заказ
      </button>
    </div>
  </div>
</template>
