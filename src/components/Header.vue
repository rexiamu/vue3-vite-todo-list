<template>
  <el-input
    v-model="input"
    type="text"
    placeholder="请输入"
    clearable
  ></el-input>
  <el-button type="primary" @click="add">新增</el-button>
</template>

<script setup>
import { ref } from "vue";
const emit = defineEmits(["add"]);

const input = ref("");

const add = () => {
  if (input.value.length === 0) {
    ElMessage({
      message: "待办事项不可为空",
      type: "warning",
      showClose: true,
    });
    return;
  }
  emit("add", input.value);
  input.value = "";
};
</script>

<style lang="scss" scoped></style>
