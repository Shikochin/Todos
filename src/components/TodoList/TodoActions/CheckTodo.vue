<template>
  <a class="check actions mr-[1em] text-green-600 dark:text-green-300 hover:text-green-900 dark:hover:text-green-400"
     @click="todoStore.checkTodo(todoId)">{{ text }}</a>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";
import { computed } from "vue";

const todoStore = useStore()

const props = defineProps<{
  todoId: string
}>()

const [todo] = todoStore.getTodo(props.todoId)

const text = computed(() => todo.todoChecked ? '✅ Checked' : '✏️ Check')
</script>