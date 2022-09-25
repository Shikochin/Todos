<template>
  <a class="delete actions red-action-colors" @click="todoStore.deleteTodo(todoId)">❌ Delete</a>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore';

const todoStore = useStore()

defineProps<{
  todoId: string
}>()
</script>