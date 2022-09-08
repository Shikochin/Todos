<template>
  <nav id="func-nav">
    <!--  抛出 toggle-hide-checked-todo 事件 -->
    <a id="hide" @click="$emit('toggle-hide-checked-todo')">😎 Toggle show / hide checked todos</a>
  </nav>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'toggle-hide-checked-todo'): void
}>()
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

#func-nav {
  margin-bottom: 10px;
}
</style>