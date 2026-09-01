<template>
  <header class="flex justify-between px-10 py-10 border-b border-lime-500">
    <div class="flex items-center gap-7">
      <img src="/logo.png" alt="Logo" class="w-24" />
      <div>
        <h1 class="text-xl font-bold uppercase">Vite + Vue My First Project</h1>
        <p class="text-slate-600 font-medium">Магазин лучших кроссовок</p>
      </div>
    </div>

    <nav>
      <ul class="flex items-center gap-10">
        <li
          class="flex items-center gap-3 text-gray-600 hover:text-gray-400 cursor-pointer"
        >
          <img src="/cart.svg" alt="Cart" />
          <b>1250 руб.</b>
        </li>

        <li
          class="flex items-center gap-3 text-lime-600 hover:text-lime-400 cursor-pointer"
        >
          <img src="/heart.svg" alt="heart" />
          <span>Закладки</span>
        </li>

        <li
          class="flex items-center gap-3 text-lime-600 hover:text-lime-400 cursor-pointer"
        >
          <img src="/profile.svg" alt="" />
          <span>Профиль</span>
        </li>
      </ul>
    </nav>
  </header>
</template>
