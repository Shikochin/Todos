<template>
  <div id="add-todo"
       class="grid
              gap-4
              p-6
              font-mono
              border-dotted
              border-4
              border-colors
              background-colors
              shadows
              rounded-md">
    <AddTodoInputArea></AddTodoInputArea>
    <a id="insert"
       class="actions text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400"
       @click="todoStore.addTodo()"
    >✒️ Insert</a>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore';
import AddTodoInputArea from './AddTodoInputArea.vue'

const todoStore = useStore()
</script>