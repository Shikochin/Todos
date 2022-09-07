<template>
  <nav id="navbar"><h1>Todos!</h1></nav>
  <TodoList></TodoList>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList/TodoList.vue'</script>


<style scoped>
#navbar {
  font-family: "Cascadia Code", "Microsoft YaHei UI";
  text-align: center;
}
</style>