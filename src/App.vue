<template>
  <client-only>
    <Navbar></Navbar>
    <FunctionsBar></FunctionsBar>
    <TodoList></TodoList>
  </client-only>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList/TodoList.vue'
import FunctionsBar from './components/FunctionsBar/FunctionsBar.vue'
import Navbar from './components/Navbar.vue'
</script>
