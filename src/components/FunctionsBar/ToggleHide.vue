<template>
  <a id="hide" @click="todoStore.toggleHide()">😎 Toggle show / hide checked todos</a>
</template>

<script lang="ts" setup>
// 获取 hideCheckedTodos store
import { useStore } from "@/stores/todoStore";

let todoStore = useStore()
</script>

<style scoped>
#hide {
  color: gray;
  user-select: none;
}

#hide:hover {
  color: black;
  cursor: pointer;
}
</style>