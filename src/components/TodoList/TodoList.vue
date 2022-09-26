<template>
  <TransitionGroup id="todo-list" class="grid gap-5 grid-cols-todo auto-rows-fr" name="list" tag="div">
    <TodoItem v-for="todo of (todoStore.hideCheckedTodos ? todoStore.uncheckedTodos : todoStore.todos)"
      :key="todo.todoId" :todo-id="todo.todoId"></TodoItem>
    <AddTodo key="0"></AddTodo>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import TodoItem from './TodoItem.vue'
import AddTodo from './AddTodo.vue'
import { useStore } from '@/stores/todoStore'

const todoStore = useStore()
</script>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0px);
}

.list-leave-active {
  position: absolute;
}
</style>