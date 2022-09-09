<template>
  <div class="todos">
    <a class="pin" @click="todoStore.pinTodo(todoId)">📌 Pin</a>
    <!--  根据是否完成切换 h1 样式  -->
    <h1 class="text" :style="{
    textDecoration: todoChecked
    ? 'line-through'
    : 'none'
    }">{{ todoTitle }}</h1>
    <p class="text">{{ todoDescription || todoTitle }}</p>
    <!--  切换是否完成  -->
    <a v-if="!todoChecked" class="check" @click="todoStore.checkTodo(todoId)">✏️ Check</a>
    <a v-else class="check" @click="todoStore.checkTodo(todoId)">✅ Checked</a>
    <a class="delete" @click="todoStore.deleteTodo(todoId)">❌ Delete</a>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

// 定义 Todo 接口
interface Todo {
  todoId: number,
  todoTitle: string,
  todoDescription: string,
  todoChecked: boolean
}

// 定义要传入的参数
defineProps<Todo>()
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

.check {
  color: $check-color-light;
  user-select: none;
  margin-right: 1em;
}

.check:hover {
  color: $check-color-light-hover;
  cursor: pointer;
}

.delete {
  color: $delete-color-light;
  user-select: none;
}

.delete:hover {
  color: $delete-color-light-hover;
  cursor: pointer;
}

.pin {
  color: $pin-color-light;
  user-select: none;
  cursor: pointer;
}

.pin:hover {
  color: $pin-color-light-hover;
  cursor: pointer;
}

@media (prefers-color-scheme: dark) {
  .todos {
    border-color: $todo-border-color-dark;
    background-color: $todo-background-color-dark;
    box-shadow: 6px 6px 6px 1px $todo-box-shadow-color-dark;
  }
  .check {
    color: $check-color-dark;
  }
  .check:hover {
    color: $check-color-dark-hover;
  }
  .delete {
    color: $delete-color-dark
  }
  .delete:hover {
    color: $delete-color-dark-hover
  }
  .pin {
    color: $pin-color-dark
  }
  .pin:hover {
    color: $pin-color-dark-hover
  }
  .text{
    color: $text-color-dark;
  }
}
</style>