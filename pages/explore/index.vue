<template>
  <section class="container mx-auto py-3">
    <VBanner lines="one" icon="mdi-alert" color="warning" v-if="bannerShow">
      <VBannerText
        >由于豆瓣api限制，本页数据为mock导出数据，数据有限！
      </VBannerText>

      <template v-slot:actions>
        <Icon
          name="ic:baseline-close"
          size="30"
          class="cursor-pointer"
          @click="bannerShow = false"
        />
      </template>
    </VBanner>
    <Label class="mt-4">选电影</Label>
    <div class="my-4 flex flex-wrap gap-4">
      <SelectOption :option="tagsType" label="类型" />
      <SelectOption :option="tagsRegion" label="地区" />
      <SelectOption :option="tagsTime" label="年代" />
      <SelectOption :option="tagsLabel" label="标签" />
      <SelectOption :option="tagsSort" label="排序" />
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div v-for="item in movieList" :key="item.id">
        <div>
          <div><NuxtImg class="w-full" :src="item.cover" /></div>
        </div>
        <div class="mt-4 space-y-2">
          <h3>{{ item.title }}</h3>
          <p>{{ item.card_subtitle }}</p>
          <span>{{ item.rate }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  tagsTime,
  tagsType,
  tagsSort,
  tagsRegion,
  tagsLabel,
} from "~/mock/tags.ts";
import { movieList } from "~/mock/selectMovie";
console.log(movieList);

const bannerShow = ref(true);
// const { data: tags } = await useFetch(
//   "http://localhost:3000/mapi/v2/movie/recommend?refresh=0&start=0&count=20&selected_categories=%7B%7D&uncollect=false&tags=",
//   {
//     pick: ["tags"],
//   }
// );
</script>

<style scoped>
.tab-btn {
  @apply py-1 px-3 md:py-2 md:px-4 text-sm font-semibold bg-white border-[1px] border-solid border-[#bcbdbe] rounded-2xl flex items-center hover:border-black;
}
</style>
