<template>
    <section id="add-todo" class="grid
              gap-4
              p-6
              rounded-md
              border-dotted
              border-4
              font-mono
              border-colors
              todo-background-colors
              shadows">
        <AddTodoInputArea></AddTodoInputArea>
        <a id="insert" class="actions green-action-colors" @click="todoStore.addTodo()">✒️ Insert</a>
    </section>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore'
import AddTodoInputArea from './AddTodoInputArea.vue'

const todoStore = useStore()
</script>