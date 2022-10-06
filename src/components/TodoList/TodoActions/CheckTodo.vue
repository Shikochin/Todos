<template>
    <a class="check actions green-action-colors" @click="todoStore.checkTodo(todo)">{{ text }}</a>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore'
import type Todo from '@/types'
import { computed } from 'vue'

const todoStore = useStore()

const props = defineProps<{
    todo: Todo
}>()

const text = computed(() => props.todo.todoChecked ? '✅ Checked' : '✏️ Check')
</script>