<template>
  <a id="hide" @click="todoStore.toggleHide()">😎 Toggle show / hide checked todos</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()
</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

#hide {
  color: $toggleHide-color-light;
  user-select: none;
}

#hide:hover {
  color: $toggleHide-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  #hide {
    color: $toggleHide-color-dark;
  }
  #hide:hover {
    color: $toggleHide-color-dark-hover;
  }
}
</style>