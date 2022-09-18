<template>
  <a v-show="!todo.todoChecked"
     class="check actions mr-[1em] text-green-600 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400"
     @click="todoStore.checkTodo(todoId)">✏️ Check</a>
  <a v-show="todo.todoChecked"
     class="check actions mr-[1em] text-green-600 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400"
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