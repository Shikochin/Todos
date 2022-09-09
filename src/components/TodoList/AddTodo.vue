<template>
  <div id="add-todo">
    <h1>
      <!--   Todo 标题输入框   -->
      <input class="input" v-model.lazy="newTodo.todoTitle" placeholder="Todo title (required)" required type="text">
    </h1>
    <!--  Todo description 输入框（可选，默认为 Todo 的标题）  -->
    <textarea class="input" v-model.lazy="newTodo.todoDescription" placeholder="Todo description"></textarea>
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

#add-todo > textarea {
  resize: none;
  width: 70%;
  height: 50%;
  margin-right: 10px;
}

#insert {
  color: $insert-color-light;
  user-select: none;
}

#insert:hover {
  color: $insert-color-light-hover;
  cursor: pointer;
}

.input {
  border-radius: 5px;
  background-color: $todo-background-color-light;
  border-color: $todo-border-color-light;
  border-width: 2px;
  border-style: dotted;
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
  .input {
    background-color: $todo-background-color-dark;
    border-color: $todo-border-color-dark;
    border-width: 2px;
    border-style: dotted;
    color: $text-color-dark;
  }
  .input::placeholder {
    color: $text-placeholder-color-dark;
  }
}
</style>