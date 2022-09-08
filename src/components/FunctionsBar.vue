<template>
  <nav id="func-nav">
    <a id="hide" @click="$emit('hide-checked-todo')">😎 Toggle show / hide checked todos</a>
  </nav>
</template>

<script lang="ts" setup>
defineEmits<{
  (e: 'hide-checked-todo'): void
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