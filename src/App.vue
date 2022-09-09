<template>
  <client-only>
    <Navbar></Navbar>
    <FunctionsBar></FunctionsBar>
    <TodoList></TodoList>
  </client-only>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
import FunctionsBar from './components/FunctionsBar/FunctionsBar.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { useStore } from "@/stores/todoStore";
import { watch } from "vue";

const todoStore = useStore()

watch(todoStore.todos, () => {
  todoStore.updateTodo()
})
</script>
