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
          <CardCover
            :item="item"
            @click="getMovieDetails(item.id, item.cover)"
          />
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
          <CardCover
            :item="item"
            @click="getMovieDetails(item.id, item.cover)"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    <VDialog width="auto" v-model="dialog">
      <CardMovie :item="movieCard" @close="dialog = false" />
    </VDialog>
  </section>
</template>

<script setup>
const dialog = ref(false);
const movieCard = ref(null);
const { data: hotMovie } = await useFetch(
  "http://localhost:3000/api/search_subjects?type=movie&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0",
  {
    pick: ["subjects"],
  }
);

const { data: hotTv } = await useFetch(
  "http://localhost:3000/api/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&page_limit=50&page_start=0",
  {
    pick: ["subjects"],
  }
);

const getMovieDetails = async (id, cover) => {
  const { data } = await useFetch(
    `http://localhost:3000/api/subject_abstract?subject_id=${id}`,
    {
      pick: ["subject"],
    }
  );
  console.log(data);
  movieCard.value = { ...data.value.subject, cover };
  console.log(movieCard.value);
  dialog.value = true;
};
</script>

<style scoped>
.more_btn {
  @apply text-sm font-bold text-[#3976DC] hover:opacity-70;
}

.swiper-slide {
  @apply w-auto h-full;
}
</style>
