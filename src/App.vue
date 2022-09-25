<template>
  <TitleBar></TitleBar>
  <FunctionsBar></FunctionsBar>
  <TodoList></TodoList>
  {{ autoSave }}
</template>

<script lang="ts" setup>
import TitleBar from './components/TitleBar.vue'
import FunctionsBar from './components/FunctionsBar/FunctionsBar.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { useStore } from '@/stores/todoStore'
import { useIdle } from '@vueuse/core'
import { computed } from 'vue'

// 离开页面时保存
const todoStore = useStore()
window.addEventListener('beforeunload', () => {
  todoStore.updateTodo()
})

// 利用 computed 的特性实现 “用户五秒无动作自动保存”
const { idle } = useIdle(5000)
const autoSave = computed(() => {
  if (idle.value) {
    todoStore.updateTodo()
  }
  return undefined
})
</script>