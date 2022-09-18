<template>
  <a class="delete actions mr-[1em] text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-500"
     @click="todoStore.deleteTodo(todoId)">❌ Delete</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

defineProps<{
  todoId: string
}>()
</script>