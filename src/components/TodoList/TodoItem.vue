<template>
  <div class="todos">
    <TodoTime :todo-id="todoId" :class="['info']"></TodoTime>
    <h1 class="info" :style="{
    textDecoration: todo.todoChecked
    ? 'line-through'
    : 'none'
    }">{{ todo.todoTitle }}</h1>
    <p class="info">{{ todo.todoDescription || todo.todoTitle }}</p>
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
const props = defineProps(['todoId'])
const [todo] = todoStore.currentTodo(props.todoId)

</script>

<style scoped lang="scss">
@import "@/style/palette.scss";

.todos {
  border-style: solid;
  border-color: $todo-border-color-light;
  border-radius: 6px;
  padding: 30px;
  background-color: $todo-background-color-light;
  box-shadow: 6px 6px 6px 1px $todo-box-shadow-color-light;
}

@media (prefers-color-scheme: dark) {
  .todos {
    border-color: $todo-border-color-dark;
    background-color: $todo-background-color-dark;
    box-shadow: 6px 6px 6px 1px $todo-box-shadow-color-dark;
  }
  .info, .info {
    color: $text-color-dark;
  }
}
</style>