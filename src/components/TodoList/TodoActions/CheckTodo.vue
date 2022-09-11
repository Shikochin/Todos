<template>
  <a v-if="!curTodo.todoChecked" class="check" @click="todoStore.checkTodo(todoId)">✏️ Check</a>
  <a v-else class="check" @click="todoStore.checkTodo(todoId)">✅ Checked</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

const props = defineProps(['todoId'])

const [curTodo] = todoStore.currentTodo(props.todoId)
</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

.check {
  color: $check-color-light;
  user-select: none;
  margin-right: 1em;
}

.check:hover {
  color: $check-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .check {
    color: $check-color-dark;
  }
  .check:hover {
    color: $check-color-dark-hover;
  }
}
</style>