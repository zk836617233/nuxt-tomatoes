<template>
  <header class="header">
    <div class="container mx-auto h-full p-3 flex justify-between items-center">
      <div class="flex items-center gap-x-4">
        <NuxtImg src="/img/logo.svg" width="161" height="50" alt="logo" />
        <SearchInput placeholder="搜索电影，电视剧，综艺，影人" class="hidden lg:block" />
      </div>
      <ul class="header-ul">
        <li>购票</li>
        <li>选电影</li>
        <li>电视剧</li>
        <li>排行榜</li>
        <li>影评</li>
        <li>2022年度榜单</li>
        <li>2022书影音榜单</li>
      </ul>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
.header {
  @apply w-full h-[100px] bg-red;
}

.header-ul {
  @apply hidden xl:flex;
}

.header-ul > li {
  @apply py-3 px-4 text-white font-bold text-base rounded-xl cursor-pointer hover:bg-white hover:text-black;
}
</style>
