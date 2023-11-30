<template>
  <div class="cover-card">
    <div class="cover">
      <NuxtImg
        class="img"
        src="https://img2.doubanio.com/view/photo/s_ratio_poster/public/p2899486451.webp"
      />
    </div>
    <div class="flex">
      <NuxtImg src="/img/fresh.svg" width="16" height="16" alt="fresh" />
      <div class="ml-2">88%</div>
    </div>
    <div>河边的错误</div>
  </div>
</template>

<script setup></script>

<style scoped>
.cover-card {
  @apply w-[180px] h-[250px] rounded-md;
}

.cover {
  @apply w-full cursor-pointer hover:opacity-70;
}

.cover .img {
  @apply w-full h-full rounded-md;
}
</style>
