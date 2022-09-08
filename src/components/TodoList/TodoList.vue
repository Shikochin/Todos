<template>
  <!-- add / delete / pin 动画 -->
  <TransitionGroup id="todo-list" name="list" tag="div">
    <!--  如果 hideCheckedTodos 为 true，则遍历 todoChecked === false 的 Todo 的 todos 数组  -->
    <Todo v-for="todo of (todoStore.hideCheckedTodos ? todoStore.uncheckedTodos : todoStore.todos)"
          :todoId="todo.todoId"
          :todo-checked="todo.todoChecked"
          :todo-description="todo.todoDescription"
          :todo-title="`${todo.todoTitle}`"
          :key="todo.todoId"
    ></Todo>
    <AddTodo key="0"></AddTodo>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue'
import { useStore } from '@/stores/todoStore'

const todoStore = useStore()
</script>

<style scoped>
#todo-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translate3d(-30px, -30px, 0px);
}

.list-leave-active {
  position: absolute;
}
</style>