<template>
  <div id="add-todo">
    <AddTodoInputArea></AddTodoInputArea>
    <a id="insert"
       @click="todoStore.addTodo()"
    >✒️ Insert</a>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";
import AddTodoInputArea from './AddTodoInputArea.vue'

const todoStore = useStore()
</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

#add-todo {
  border-style: dotted;
  border-color: $todo-border-color-light;
  border-radius: 6px;
  padding-left: 30px;
  padding-bottom: 20px;
  background-color: $todo-background-color-light;
  overflow: auto;
  min-height: 200px;
  box-shadow: 6px 6px 6px 1px $todo-box-shadow-color-light;
}

#insert {
  color: $insert-color-light;
  user-select: none;
}

#insert:hover {
  color: $insert-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  #add-todo {
    border-color: $todo-border-color-dark;
    background-color: $todo-background-color-dark;
    box-shadow: 6px 6px 6px 1px $todo-box-shadow-color-dark;
  }
  #insert {
    color: $insert-color-dark;
  }
  #insert:hover {
    color: $insert-color-dark-hover;
  }
}
</style>