<template>
  <client-only>
    <nav id="navbar"><h1>/ Todos! /</h1></nav>
    <!--  处理子组件 FunctionsBar 抛出的事件 hide-checked-todo  -->
    <FunctionsBar @toggle-hide-checked-todo="hideHandler"></FunctionsBar>
    <!--  Todo 列表，动态传入 hideCheckedTodos -->
    <TodoList :hide-checked-todos="hideCheckedTodos"></TodoList>
  </client-only>
</template>

<script lang="ts" setup>
import TodoList from './components/TodoList/TodoList.vue'
import FunctionsBar from './components/FunctionsBar.vue'
import { ref } from "vue";

let hideCheckedTodos = ref(false)

// 从本地存储获取可能存在的 hideCheckedTodos，并进行赋值
if (localStorage.getItem('hideCheckedTodos')) {
  hideCheckedTodos = ref(localStorage.getItem('hideCheckedTodos') === '1')
}

function hideHandler() {
  hideCheckedTodos.value = !hideCheckedTodos.value
  // 保存用户的设置
  localStorage.setItem('hideCheckedTodos', hideCheckedTodos.value ? '1' : '0')
}

</script>

<style scoped>
#navbar {
  text-align: center;
}
</style>