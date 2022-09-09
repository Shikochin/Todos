<template>
  <h1>
    <input class="input"
           v-model.lazy="todoStore.cacheTodo.todoTitle"
           placeholder="Todo title (required)"
           required
           type="text"
    >
  </h1>
  <textarea
      class="input desc"
      v-model.lazy="todoStore.cacheTodo.todoDescription"
      placeholder="Todo description"
  >
  </textarea>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()
</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

.input {
  border-radius: 5px;
  background-color: $todo-background-color-light;
  border-color: $todo-border-color-light;
  border-width: 2px;
  border-style: dotted;
}

.desc {
  resize: none;
  width: 70%;
  height: 50%;
  margin-right: 10px;
}

@media (prefers-color-scheme: dark) {
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