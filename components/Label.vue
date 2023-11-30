<template>
  <h3 class="label">
    <span></span>
    <slot></slot>
  </h3>
</template>

<script setup></script>

<style scoped>
.label {
  @apply text-xl font-medium pl-2 relative;
}
.label > span{
    @apply absolute w-1 h-full bg-red left-0 top-0;
}
</style>
