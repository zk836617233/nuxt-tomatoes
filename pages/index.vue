<template>
  <section class="container mx-auto mt-10">
    <div class="flex justify-between">
      <Label>正在热映</Label>
      <button class="more_btn">查看更多</button>
    </div>
    <div class="mt-3">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        slidesPerView="auto"
        spaceBetween="10"
      >
        <SwiperSlide v-for="item in hotMovie.subjects" :key="item.id">
          <CardCover :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="flex justify-between mt-10">
      <Label>热门电视剧</Label>
      <button class="more_btn">查看更多</button>
    </div>
    <div class="mt-3">
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        slidesPerView="auto"
        spaceBetween="10"
      >
        <SwiperSlide v-for="item in hotTv.subjects" :key="item.id">
          <CardCover :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
const { data: hotMovie } = await useFetch(
  "https://movie.douban.com/j/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0",
  {
    pick: ["subjects"],
  }
);

const { data: hotTv } = await useFetch(
  "https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0",
  {
    pick: ["subjects"],
  }
);
</script>

<style scoped>
.more_btn {
  @apply text-sm font-bold text-[#3976DC] hover:opacity-70;
}

.swiper-slide {
  @apply w-auto h-full;
}
</style>
