<template>
  <a v-show="!todo.todoChecked"
     class="check mr-[1em] select-none text-green-600 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400 hover:cursor-pointer"
     @click="todoStore.checkTodo(todoId)">✏️ Check</a>
  <a v-show="todo.todoChecked"
     class="check mr-[1em] select-none text-green-600 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400 hover:cursor-pointer"
     @click="todoStore.checkTodo(todoId)">✅ Checked</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

const props = defineProps<{
  todoId: number
}>()

const [todo] = todoStore.getTodo(props.todoId)
</script>

<!--<style lang="scss" scoped>-->
<!--@import "@/style/palette.scss";-->

<!--.check {-->
<!--  color: $check-color-light;-->
<!--  user-select: none;-->
<!--  margin-right: 1em;-->
<!--}-->

<!--.check:hover {-->
<!--  color: $check-color-light-hover;-->
<!--  cursor: pointer;-->
<!--}-->

<!--@media (prefers-color-scheme: dark) {-->
<!--  .check {-->
<!--    color: $check-color-dark;-->
<!--  }-->
<!--  .check:hover {-->
<!--    color: $check-color-dark-hover;-->
<!--  }-->
<!--}-->
<!--</style>-->