<template>
  <a id="toggle-hide" @click="todoStore.toggleHide()" v-show="!todoStore.hideCheckedTodos">😐 Toggle checked todos
    visibility</a>
  <a id="toggle-hide" @click="todoStore.toggleHide()" v-show="todoStore.hideCheckedTodos">🫥 Toggle checked todos
    visibility</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()
</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

#toggle-hide {
  color: $functions-color-light;
  user-select: none;
}

#toggle-hide:hover {
  color: $functions-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  #toggle-hide {
    color: $functions-color-dark;
  }
  #toggle-hide:hover {
    color: $functions-color-dark-hover;
  }
}
</style>