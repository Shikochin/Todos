<template>
  <TransitionGroup id="todo-list" name="list" tag="div">
    <Todo v-for="todo of todos"
          :id="todo.id"
          :todo-checked="todo.todoChecked"
          :todo-description="todo.todoDescription"
          :todo-title="`${todo.todoTitle}`"
          :key="todo.id"
          @check-todo="checkTodo"
          @pin-todo="pinTodo"
          @delete-todo="deleteTodo"
    ></Todo>
    <AddTodo key="0" @return-todo="returnTodo"></AddTodo>
  </TransitionGroup>

</template>

<script lang="ts" setup>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue'
import { reactive } from "vue";

let todos = reactive<{
  id: number,
  todoChecked: boolean,
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
      todoChecked: false,
      todoTitle,
      todoDescription
    })
    localStorage.setItem('todos', JSON.stringify(todos))
  }
}

function checkTodo(id: number) {
  for (const todo of todos) {
    if (todo.id === id) {
      todo.todoChecked = !todo.todoChecked
      break
    }
  }
  localStorage.setItem('todos', JSON.stringify(todos))
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

function pinTodo(id: number) {
  for (const [index, todo] of todos.entries()) {
    if (todo.id === id) {
      const deletedTodo = todos.splice(index, 1)[0]
      todos.unshift(deletedTodo)
      break
    }
  }
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