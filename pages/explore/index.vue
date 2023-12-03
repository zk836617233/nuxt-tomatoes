<template>
  <section class="container mx-auto py-3">
    <Label class="mt-4">选电影</Label>
    <div class="my-4 flex gap-x-4">
      <VMenu>
        <template v-slot:activator="{ props }">
          <button class="tab-btn" v-bind="props">
            类型<Icon class="ml-1" name="ep:caret-bottom" />
          </button>
        </template>

        <VList>
          <div class="pr-4 pl-2">
            <VRadioGroup>
              <VRadio label="Radio One" value="1"></VRadio>
              <VRadio label="Radio Two" value="2"></VRadio>
              <VRadio label="Radio Three" value="3"></VRadio>
            </VRadioGroup>
          </div>
          <!-- <VListItem color="primary" :value="1" :key="1">
              12
            </VListItem>
            <VListItem color="primary" :value="1" :key="2">
              122
            </VListItem> -->
        </VList>
      </VMenu>

      <button class="tab-btn">
        地区<Icon class="ml-1" name="ep:caret-bottom" />
      </button>
      <button class="tab-btn">
        年代<Icon class="ml-1" name="ep:caret-bottom" />
      </button>
      <button class="tab-btn">
        标签<Icon class="ml-1" name="ep:caret-bottom" />
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const radios = "1";
</script>

<style scoped>
.tab-btn {
  @apply py-2 px-4 text-sm font-semibold bg-white border-[1px] border-solid border-[#bcbdbe] rounded-2xl flex items-center hover:border-black;
}
</style>
