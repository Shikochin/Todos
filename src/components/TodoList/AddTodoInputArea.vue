<template>
  <input v-model.lazy="todoStore.addedTodo.todoTitle" class="inputs
             col-span-2" placeholder="Todo title (required)" required type="text">
  <textarea v-model.lazy="todoStore.addedTodo.todoDescription" class="inputs
             resize-none
             col-span-3" placeholder="Todo description">
  </textarea>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore'

const todoStore = useStore()
</script>