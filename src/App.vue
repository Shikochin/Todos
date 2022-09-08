<template>
  <client-only>
    <nav id="navbar"><h1>Todos!</h1></nav>
    <FunctionsBar @hide-checked-todo="hideCheckedTodo"></FunctionsBar>
    <TodoList :hide-checked-todos="hideCheckedTodos"></TodoList>
  </client-only>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList/TodoList.vue'
import FunctionsBar from './components/FunctionsBar.vue'
import { ref } from "vue";

let hideCheckedTodos = ref(false)

if (localStorage.getItem('hideCheckedTodos')) {
  hideCheckedTodos = ref(localStorage.getItem('hideCheckedTodos') === '1')
}

function hideCheckedTodo() {
  hideCheckedTodos.value = !hideCheckedTodos.value
  localStorage.setItem('hideCheckedTodos', hideCheckedTodos.value ? '1' : '0')
}

</script>

<style scoped>
#navbar {
  text-align: center;
}
</style>