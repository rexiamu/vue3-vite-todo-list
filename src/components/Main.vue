<template>
  <el-scrollbar max-height="400px">
    <el-row class="row" align="middle" v-for="todo in todoList" :key="todo.id">
      <el-col :span="2">
        <el-checkbox
          :checked="todo.done"
          @change="update(todo.id)"
        ></el-checkbox>
      </el-col>
      <el-col :span="17" class="content">
        <span :class="{ done: todo.done }">{{ todo.content }}</span></el-col
      >
      <el-col :span="5">
        <el-popconfirm
          title="确定要删除这项代办吗?"
          confirm-button-text="确定"
          cancel-button-text="取消"
          @confirm="del(todo.id)"
        >
          <template #reference>
            <el-button style="float: right" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </el-col>
    </el-row>
  </el-scrollbar>
  <div class="empty" v-if="todoList.length == 0">暂无数据</div>
</template>

<script setup>
import { inject } from "vue";
const emit = defineEmits(["del", "update"]);

const todoList = inject("todoList");

const del = (id) => {
  emit("del", id);
};

const update = (id) => {
  emit("update", id);
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
.content {
  word-wrap: break-word;
}
.row {
  margin: 10px 0;
}
.done {
  text-decoration: line-through;
  color: gray;
}
</style>
