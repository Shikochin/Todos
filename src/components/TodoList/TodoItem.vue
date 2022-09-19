<template>
  <div class="todos
              border-solid
              border-[3px]
              rounded-md
              shadows
              font-mono
              border-colors
              todo-background-colors
              p-8">
    <TodoTime :todo-created-time="todo.todoCreatedTime"></TodoTime>
    <h1 :style="{
    textDecoration: todo.todoChecked
    ? 'line-through'
    : 'none'
    }" class="text-colors text-4xl mt-2 mb-4 truncate">{{ todo.todoTitle }}</h1>
    <p class="text-colors mb-4 truncate">{{ todo.todoDescription || todo.todoTitle }}</p>
    <PinTodo :todo-id="todoId"></PinTodo>
    <CheckTodo :todo-id="todoId"></CheckTodo>
    <DeleteTodo :todo-id="todoId"></DeleteTodo>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores/todoStore';
import PinTodo from './TodoActions/PinTodo.vue'
import CheckTodo from './TodoActions/CheckTodo.vue'
import DeleteTodo from './TodoActions/DeleteTodo.vue'
import TodoTime from './TodoInfos/TodoTime.vue'

const todoStore = useStore()
const props = defineProps<{
  todoId: string
}>()
const [todo] = todoStore.getTodo(props.todoId)
</script>