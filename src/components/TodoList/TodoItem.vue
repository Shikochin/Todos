<template>
  <div class="todos
              font-mono
              border-solid
              border-[3px]
              border-black
              dark:border-stone-100
              bg-todoLight
              dark:bg-todoGray
              rounded-md
              p-8
              shadow-xl
              shadow-indigo-900/20
              dark:shadow-violet-600/20
              hover:shadow-indigo-900/30
              dark:hover:shadow-violet-600/30">
    <TodoTime :todo-id="todoId"></TodoTime>
    <h1 :style="{
    textDecoration: todo.todoChecked
    ? 'line-through'
    : 'none'
    }" class="info dark:text-stone-100 text-4xl my-4">{{ todo.todoTitle }}</h1>
    <p class="info dark:text-stone-100 mb-4">{{ todo.todoDescription || todo.todoTitle }}</p>
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
  todoId: number
}>()
const [todo] = todoStore.getTodo(props.todoId)
</script>