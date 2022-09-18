<template>
  <a id="toggle-hide"
     class="font-mono actions text-gray-500 hover:text-black dark:text-stone-100 dark:hover:text-gray-400"
     @click="todoStore.toggleHide()">{{ text }}</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";
import { computed } from "vue";

const todoStore = useStore()

const text = computed(() => todoStore.hideCheckedTodos ? '🫥 Toggle checked todos visibility' : '😐 Toggle checked todos visibility')
</script>