<template>
  <a v-show="!todoStore.hideCheckedTodos"
     id="toggle-hide" class="font-mono select-none text-gray-500 hover:text-black dark:text-stone-100 dark:hover:text-gray-400 hover:cursor-pointer" @click="todoStore.toggleHide()">😐 Toggle checked todos
    visibility</a>
  <a v-show="todoStore.hideCheckedTodos"
     id="toggle-hide" class="font-mono select-none text-gray-500 hover:text-black dark:text-stone-100 dark:hover:text-gray-400 hover:cursor-pointer" @click="todoStore.toggleHide()">🫥 Toggle checked todos
    visibility</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()
</script>