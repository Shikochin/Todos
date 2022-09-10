<template>
  <div class="todos">
    <Time :todo-id="todoId" :class="['info']"></Time>
    <h1 class="info" :style="{
    textDecoration: todo.todoChecked
    ? 'line-through'
    : 'none'
    }">{{ todo.todoTitle }}</h1>
    <p class="info">{{ todo.todoDescription || todo.todoTitle }}</p>
    <Pin :todo-id="todoId"></Pin>
    <Check :todo-id="todoId"></Check>
    <Delete :todo-id="todoId"></Delete>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";
import Pin from './TodoActions/Pin.vue'
import Check from './TodoActions/Check.vue'
import Delete from './TodoActions/Delete.vue'
import Time from './TodoInfos/Time.vue'

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