<template>
  <div class="cover-card">
    <Icon
      v-if="item.is_new"
      class="absolute top-2 left-2 z-10"
      name="material-symbols:fiber-new-sharp"
      color="#0AC855"
      size="26"
    />
    <div class="cover">
      <NuxtImg class="img" :src="item.cover" :alt="item.title" />
    </div>
    <div class="flex mt-1">
      <NuxtImg :src="getRateImg" width="16" height="16" alt="fresh" />
      <div class="ml-2">{{ item.rate || "--" }}</div>
    </div>
    <div class="text-sm text-[#2a2c32]">{{ item.title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
});
const getRateImg = computed(() => {
  const _rate = props.item.rate;
  if (!_rate) {
    return "/img/empty.svg";
  } else if (_rate >= 8) {
    return "/img/fresh.svg";
  } else if (_rate < 8 && _rate >= 6) {
    return "/img/notext.svg";
  } else {
    return "/img/rotten.svg";
  }
});
</script>

<style scoped>
.cover-card {
  @apply w-[180px] rounded-lg relative cursor-pointer;
}

.cover {
  @apply w-full h-[250px];
}

.cover .img {
  @apply w-full h-full rounded-lg hover:opacity-80 transition duration-150;
}
</style>
