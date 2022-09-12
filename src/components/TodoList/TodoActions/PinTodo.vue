<template>
  <a class="pin" @click="todoStore.pinTodo(todoId)">📌 Pin</a>
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

.pin {
  color: $pin-color-light;
  user-select: none;
  margin-right: 1em;
}

.pin:hover {
  color: $pin-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .pin {
    color: $pin-color-dark
  }
  .pin:hover {
    color: $pin-color-dark-hover
  }
}
</style>