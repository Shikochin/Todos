<template>
  <client-only>
    <nav id="navbar"><h1>Todos!</h1></nav>
    <TodoList></TodoList>
  </client-only>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList/TodoList.vue'</script>

<style scoped>
#navbar {
  text-align: center;
}
</style>