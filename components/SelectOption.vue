<template>
  <VMenu>
    <template v-slot:activator="{ props }">
      <button
        class="tab-btn"
        :class="selectValue && 'btn-active'"
        v-bind="props"
      >
        {{ selectValue || label }}<Icon class="ml-1" name="ep:caret-bottom" />
      </button>
    </template>

    <VList>
      <div class="pr-6 pl-4 py-2">
        <Option :value="selectValue" :option="option" @changeItem="change" />
      </div>
    </VList>
  </VMenu>
</template>

<script setup>
const selectValue = ref();

const props = defineProps({
  label: String,
  option:Array
});

const emit = defineEmits(["change"]);

const change = (value) => {
  selectValue.value = value;
  emit("change", value);
};
</script>

<style scoped>
.tab-btn {
  @apply py-1 px-3 md:py-2 md:px-4 text-sm font-semibold bg-white border-[1px] border-solid border-[#bcbdbe] rounded-2xl flex items-center hover:border-black;
}

.btn-active {
  @apply text-[#3976dc] border-[#3976dc];
}
</style>
