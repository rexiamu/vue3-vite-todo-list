<template>完成：{{ done }} / {{ total }}</template>

<script setup>
import { computed, inject } from "vue";

const todoList = inject("todoList");

const done = computed(
  () => todoList.filter((item) => item.done === true).length
);
const total = computed(() => todoList.length);
</script>

<style lang="scss" scoped></style>
