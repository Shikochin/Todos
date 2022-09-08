<template>
  <div class="todos">
    <a v-if="todoChecked" class="check" @click="$emit('check-todo', id)">✅ Checked</a>
    <a class="pin" @click="$emit('pin-todo', id)">📌 Pin</a>
    <h1 :style="{
    textDecoration: todoChecked
    ? 'line-through'
    : 'none'
    }">{{ todoTitle }}</h1>
    <p>{{ todoDescription || todoTitle }}</p>
    <a v-if="!todoChecked" class="check" @click="$emit('check-todo', id)">✏️ Check</a>
    <a v-if="todoChecked" class="delete" @click="$emit('delete-todo', id)">❌ Delete</a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: number,
  todoTitle: string
  todoChecked: boolean,
  todoDescription?: string
}>()

defineEmits<{
  (e: 'check-todo', id: number): void,
  (e: 'pin-todo', id: number): void,
  (e: 'delete-todo', id: number): void,
}>()
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