<template>
  <a class="delete" @click="todoStore.deleteTodo(todoId)">❌ Delete</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

defineProps<{
  todoId: number
}>()
</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

.delete {
  color: $delete-color-light;
  user-select: none;
}

.delete:hover {
  color: $delete-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .delete {
    color: $delete-color-dark
  }
  .delete:hover {
    color: $delete-color-dark-hover
  }
}
</style>