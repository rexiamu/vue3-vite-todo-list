<template>
  <el-scrollbar max-height="400px">
    <el-row align="middle" v-for="todo in todoList" :key="todo.id">
      <el-col :span="2">
        <el-checkbox :checked="todo.done"></el-checkbox>
      </el-col>
      <el-col :span="18">{{ todo.content }}</el-col>
      <el-col :span="4">
        <el-popconfirm
          title="确定要删除这项代办吗?"
          confirm-button-text="确定"
          cancel-button-text="取消"
          @confirm="del(todo.id)"
        >
          <template #reference>
            <el-button style="float: right" size="small" type="danger"
              >删除</el-button
            >
          </template>
        </el-popconfirm>
      </el-col>
    </el-row>
  </el-scrollbar>
  <div class="empty" v-if="todoList.length == 0">暂无数据</div>
</template>

<script setup>
import { inject } from "vue";
const emit = defineEmits(["del"]);

const todoList = inject("todoList");

const del = (id) => {
  emit("del", id);
};
</script>

<style lang="scss" scoped>
.empty {
  width: 100%;
  color: gray;
  text-align: center;
}
.el-scrollbar {
  width: 100%;
}
</style>
