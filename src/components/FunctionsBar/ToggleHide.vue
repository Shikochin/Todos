<template>
  <a id="toggle-hide" class="font-mono actions function-colors" @click="todoStore.toggleHide()">{{ emoji }} Toggle checked todos visibility</a>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore';
import { computed } from 'vue';

const todoStore = useStore()

const emoji = computed(() => todoStore.hideCheckedTodos ? '🫥' : '😐')
</script>