<template>
  <!-- add / delete / pin 动画 -->
  <TransitionGroup id="todo-list" name="list" tag="div">
    <!--  如果 hideCheckedTodos 为 true，则遍历没有已完成 Todo 的 todos 数组  -->
    <Todo v-for="todo of (hideCheckedTodos ? uncheckedTodos : todos)"
          :id="todo.id"
          :todo-checked="todo.todoChecked"
          :todo-description="todo.todoDescription"
          :todo-title="`${todo.todoTitle}`"
          :key="todo.id"
          @check-todo="checkTodo"
          @pin-todo="pinTodo"
          @delete-todo="deleteTodo"
    ></Todo>
    <AddTodo key="0" @add-todo="addTodo"></AddTodo>
  </TransitionGroup>

</template>

<script lang="ts" setup>
import Todo from './Todo.vue';
import AddTodo from './AddTodo.vue'
import { computed, reactive } from "vue";

// 定义 Todo 接口
interface TodoType {
  id: number,
  todoTitle: string,
  todoDescription: string,
  todoChecked: boolean
}

defineProps<{
  hideCheckedTodos: boolean
}>()

let todos = reactive<TodoType[]>([])

if (localStorage.getItem('todos')) {
  todos = reactive(JSON.parse(localStorage.getItem('todos') as string))
}

// 过滤 todoChecked 为 true 的 Todo
const uncheckedTodos = computed(() => {
  return todos.filter((todo) => !todo.todoChecked)
})

function addTodo(todoTitle: string, todoDescription: string) {
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