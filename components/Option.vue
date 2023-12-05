<template>
  <ul class="option-ul">
    <li
      v-for="item in option"
      :key="item"
      @click="activeHandle(item)"
      :class="item === value && 'li-active'"
    >
      <span>{{ item }}</span>
      <Icon name="clarity:success-line" size="24" v-show="item === value" />
    </li>
  </ul>
</template>

<script setup>
const list = ["喜剧", "动作", "犯罪222"];
const props = defineProps({
  value: String,
  option:Array
});

const emit = defineEmits(["changeItem"]);

const activeHandle = (item) => {
  emit("changeItem", item);
};
</script>

<style scoped>
.option-ul {
  @apply w-[235px] h-auto;
}
.option-ul > li {
  @apply py-2 flex justify-between items-center cursor-pointer;
}

.option-ul > li:not(:last-child) {
  border-bottom: 1px solid #e9e9ea;
}

.li-active {
  @apply text-[#3976dc];
}
</style>
