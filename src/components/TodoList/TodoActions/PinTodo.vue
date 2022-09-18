<template>
  <a class="pin actions mr-[1em] text-sky-600 hover:text-sky-900 dark:text-sky-100 dark:hover:text-sky-200"
     @click="todoStore.pinTodo(todoId)">📌 Pin</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

defineProps<{
  todoId: string
}>()
</script>