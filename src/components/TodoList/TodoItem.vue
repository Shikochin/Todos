<template>
  <div class="todos
              font-mono
              border-solid
              border-[3px]
              shadows
              border-colors
              background-colors
              rounded-md
              p-8">
    <TodoTime :todo-created-time="todo.todoCreatedTime"></TodoTime>
    <h1 :style="{
    textDecoration: todo.todoChecked
    ? 'line-through'
    : 'none'
    }" class="dark:text-stone-100 text-4xl my-4">{{ todo.todoTitle }}</h1>
    <p class="dark:text-stone-100 mb-4">{{ todo.todoDescription || todo.todoTitle }}</p>
    <PinTodo :todo-id="todoId"></PinTodo>
    <CheckTodo :todo-id="todoId"></CheckTodo>
    <DeleteTodo :todo-id="todoId"></DeleteTodo>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";
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