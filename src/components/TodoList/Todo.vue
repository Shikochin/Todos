<template>
  <div class="todos">
    <!--  切换是否完成  -->
    <a v-if="todoChecked" class="check" @click="todoStore.checkTodo(id)">✅ Checked</a>
    <a class="pin" @click="todoStore.pinTodo(id)">📌 Pin</a>
    <!--  根据是否完成切换 h1 样式  -->
    <h1 :style="{
    textDecoration: todoChecked
    ? 'line-through'
    : 'none'
    }">{{ todoTitle }}</h1>
    <p>{{ todoDescription || todoTitle }}</p>
    <!--  切换是否完成  -->
    <a v-if="!todoChecked" class="check" @click="todoStore.checkTodo(id)">✏️ Check</a>
    <a v-else class="delete" @click="todoStore.deleteTodo(id)">❌ Delete</a>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()

// 定义 Todo 接口
interface Todo {
  id: number,
  todoTitle: string,
  todoDescription: string,
  todoChecked: boolean
}

// 定义要传入的参数
defineProps<Todo>()
</script>

<style scoped>
.todos {
  border-style: solid;
  border-color: black;
  border-radius: 6px;
  padding: 30px;
  background-color: #F5F5A0FF;
  box-shadow: 6px 6px 6px 1px rgba(0, 0, 255, .2);
}

.check {
  color: green;
  user-select: none;
  margin-right: 1em;
}

.check:hover {
  color: darkgreen;
  cursor: pointer;
}

.delete {
  color: red;
  user-select: none;
}

.delete:hover {
  color: darkred;
  cursor: pointer;
}

.pin {
  color: deepskyblue;
  user-select: none;
  cursor: pointer;
}

.pin:hover {
  color: blue;
  cursor: pointer;
}
</style>