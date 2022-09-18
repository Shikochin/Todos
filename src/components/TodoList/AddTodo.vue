<template>
  <div id="add-todo" class="
            grid
            gap-4
            p-6
            font-mono
            border-dotted
            border-4
            border-black
            dark:border-stone-100
            rounded-md
            bg-todoLight
            dark:bg-todoGray
            shadow-xl
            shadow-indigo-900/20
            dark:shadow-violet-600/20
            hover:shadow-indigo-900/30
            dark:hover:shadow-violet-600/30
">
    <AddTodoInputArea></AddTodoInputArea>
    <a id="insert"
       class="select-none text-green-700 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400 hover:cursor-pointer"
       @click="todoStore.addTodo()"
    >✒️ Insert</a>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";
import AddTodoInputArea from './AddTodoInputArea.vue'

const todoStore = useStore()
</script>