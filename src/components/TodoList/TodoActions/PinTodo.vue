<template>
  <a class="pin actions blue-action-colors" @click="todoStore.pinTodo(todoId)">📌 Pin</a>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore';

const todoStore = useStore()

defineProps<{
  todoId: string
}>()
</script>