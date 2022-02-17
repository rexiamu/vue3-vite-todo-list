<template>
  <h1>待办清单</h1>
  <el-container>
    <el-header>
      <Header @add="add" />
    </el-header>
    <el-main>
      <Main @del="del" @update="update" />
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script setup>
import { provide, reactive } from "vue";

const todoList = reactive([
  {
    id: 1,
    content: "吃饭",
    done: false,
  },
  {
    id: 2,
    content: "睡觉",
    done: false,
  },
  {
    id: 3,
    content: "玩游戏",
    done: false,
  },
]);

provide("todoList", todoList);

const add = (val) => {
  todoList.unshift({
    id: new Date().getTime(),
    content: val,
    done: false,
  });
  ElMessage({
    message: "添加成功",
    type: "success",
    showClose: true,
  });
};

const update = (id) => {
  const index = todoList.findIndex((item) => item.id === id);
  index > -1 && (todoList[index].done = !todoList[index].done);
};

const del = (id) => {
  todoList.splice(
    todoList.findIndex((item) => item.id === id),
    1
  );
  ElMessage({
    message: "删除成功",
    type: "success",
    showClose: true,
  });
};
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-container {
  width: 380px;

  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .el-button {
      margin-left: 20px;
    }
  }

  .el-main {
    width: 100%;
  }

  .el-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
