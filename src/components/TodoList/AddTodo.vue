<template>
  <div id="add-todo">
    <h1>
      <!--   Todo 标题输入框   -->
      <input v-model.lazy="newTodo.todoTitle" placeholder="Todo title (required)" required type="text">
    </h1>
    <!--  Todo description 输入框（可选，默认为 Todo 的标题）  -->
    <textarea v-model.lazy="newTodo.todoDescription" placeholder="Todo description"></textarea>
    <!--  抛出要添加的 Todo，并携带两个参数：added.todoTitle, added.todoDescription  -->
    <a id="insert" @click="todoStore.addTodo(newTodo.todoTitle, newTodo.todoDescription)">✒️ Insert</a>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

const newTodo = reactive({
  todoTitle: 'Untitled',
  todoDescription: ''
})
</script>

<style scoped>
#add-todo {
  border-style: dotted;
  border-color: black;
  border-radius: 6px;
  padding-left: 30px;
  background-color: #F5F5A0FF;
  overflow: auto;
  min-height: 200px;
  box-shadow: 6px 6px 6px 1px rgba(0, 0, 255, .2);
}

#add-todo > textarea {
  resize: none;
  width: 70%;
  height: 50%;
  margin-right: 10px;
}

#insert {
  color: green;
  user-select: none;
}

#insert:hover {
  color: darkgreen;
  cursor: pointer;
}
</style>