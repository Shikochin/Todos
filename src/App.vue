<template>
    <Navbar></Navbar>
    <FunctionsBar></FunctionsBar>
    <TodoList></TodoList>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import FunctionsBar from './components/FunctionsBar/FunctionsBar.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()
window.addEventListener('beforeunload', () => {
  todoStore.updateTodo()
})
</script>
