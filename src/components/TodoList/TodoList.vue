<template>
  <TransitionGroup id="todo-list" name="list" tag="div">
    <Todo v-for="todo of todos"
          :id="todo.id"
          :key="todo.id"
          :todo-description="todo.todoDescription"
          :todo-title="`${todo.todoTitle}`"
          @delete-todo="deleteTodo"
    ></Todo>
    <AddTodo @return-todo="returnTodo"></AddTodo>
  </TransitionGroup>

</template>

<script lang="ts" setup>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue'
import { reactive } from "vue";

let todos = reactive<{
  id: number,
  todoTitle: string,
  todoDescription: string
}[]>([])

if (localStorage.getItem('todos')) {
  todos = reactive(JSON.parse(localStorage.getItem('todos') as string))
}

function returnTodo(todoTitle: string, todoDescription: string) {
  if (todoTitle) {
    todos.push({
      id: Date.now(),
      todoTitle,
      todoDescription
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

function deleteTodo(id: number) {
  for (const [index, todo] of todos.entries()) {
    if (todo.id === id) {
      todos.splice(index, 1)
      break
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos))
}
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