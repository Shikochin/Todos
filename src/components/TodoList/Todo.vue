<template>
  <div class="todos">
    <h1>{{ todoTitle }}</h1>
    <p>{{ todoDescription || todoTitle }}</p>
    <a class="check" @click="$emit('delete-todo', id)">Check</a>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: number,
  todoTitle: string
  todoDescription?: string
}>()

defineEmits<{
  (e: 'delete-todo', id: number): void
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
}

.check:hover {
  color: darkgreen;
  cursor: pointer;
}
</style>