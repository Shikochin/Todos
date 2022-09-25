<template>
  <a class="check actions green-action-colors" @click="todoStore.checkTodo(todoId)">{{ text }}</a>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore';
import { computed } from 'vue';

const todoStore = useStore()

const props = defineProps<{
  todoId: string
}>()

const [todo] = todoStore.getTodo(props.todoId)

const text = computed(() => todo.todoChecked ? '✅ Checked' : '✏️ Check')
</script>