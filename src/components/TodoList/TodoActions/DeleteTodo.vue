<template>
  <a class="delete select-none mr-[1em] text-red-600 hover:text-red-900 hover:cursor-pointer dark:text-red-400 dark:hover:text-red-500"
     @click="todoStore.deleteTodo(todoId)">❌ Delete</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

defineProps<{
  todoId: number
}>()
</script>