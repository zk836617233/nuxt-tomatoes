<template>
  <div class="header-search">
    <Icon name="ic:baseline-search" class="search-icon" size="26" color="#fff" />
    <input v-bind="$attrs" type="text" />
    <!-- <Icon name="ic:baseline-search" class="search-icon" /> -->
  </div>
</template>

<script setup></script>

<style scoped>
.header-search {
  @apply relative w-[380px];
}
.header-search > .search-icon {
  @apply absolute top-1/2 -translate-y-1/2 left-2;
}
.header-search > input {
  @apply w-full h-[35px] px-[42px] border-[1px] border-white bg-[rgba(0,0,0,.5)] rounded-3xl text-base font-medium text-white;
}
</style>
