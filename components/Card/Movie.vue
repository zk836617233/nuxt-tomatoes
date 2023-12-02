<template>
  <div class="movie-card">
    <div class="img-box">
      <NuxtImg class="w-full" :src="item.cover" />
      <Icon
        class="text-red absolute top-4 right-4 cursor-pointer"
        size="26"
        name="ic:baseline-close"
        @click="closeHandle"
      />
    </div>
    <div class="p-4">
      <h2 class="text-white text-2xl font-semibold">{{ item.title }}</h2>
      <div class="flex justify-between text-white mt-4">
        <span>评分：{{ item.rate || "--" }}</span>
        <span>{{ item.region }}</span>
      </div>
      <div
        class="text-white flex flex-wrap gap-x-2 gap-y-3 mt-2"
        v-if="item.types"
      >
        <div class="movie-chip" v-for="type in item.types" :key="type">
          {{ type }}
        </div>
      </div>
      <div class="text-sm text-[#9b9b9b] mt-4" v-if="item.short_comment.content">
        短评：{{ item.short_comment.content }} 来自--{{
          item.short_comment.author
        }}
      </div>
      <div class="text-sm text-[#9b9b9b] mt-4" v-else>暂无短评</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
});

const closeHandle = () => {
  emit("close");
};

const emit = defineEmits(["close"]);
</script>

<style scoped>
.movie-card {
  @apply w-[365px];
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 38%,
    rgba(255, 255, 255, 0.06) 39%,
    rgba(30, 27, 38, 0.88) 53%,
    #1e1b26 55%
  );
  box-shadow: 5px 5px 115px -14px black;
}

.movie-chip {
  @apply px-3 text-sm font-light bg-[rgb(66,66,66)] rounded;
}

.img-box {
  @apply w-full h-[380px] relative;
  -webkit-mask-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, black),
    color-stop(0.35, black),
    color-stop(0.5, black),
    color-stop(0.65, black),
    color-stop(0.85, rgba(0, 0, 0, 0.6)),
    color-stop(1, transparent)
  );
}
</style>
