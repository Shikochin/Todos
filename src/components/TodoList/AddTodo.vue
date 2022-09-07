<template>
  <div id="add-todo">
    <h1><input v-model.lazy="added.todoTitle" type="text">
    </h1>
    <textarea v-model.lazy="added.todoDescription"></textarea>
    <a id="insert" @click="$emit('return-todo', added.todoTitle, added.todoDescription)">Insert</a>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

defineEmits<{
  (e: 'return-todo', todoTitle: string, todoDescription: string): void
}>()

const added = reactive({
  todoTitle: 'Untitled',
  todoDescription: 'Todo description'
})
</script>

<style scoped>
#add-todo {
  border-style: dotted;
  border-color: black;
  border-radius: 6px;
  padding-left: 30px;
  background-color: #F5F5A0FF;
  overflow: auto;
  min-height: 200px;
  box-shadow: 6px 6px 6px 1px rgba(0, 0, 255, .2);
}

#add-todo > textarea {
  resize: none;
  width: 70%;
  height: 50%;
  margin-right: 10px;
}

#insert {
  color: green;
  user-select: none;
}

#insert:hover {
  color: darkgreen;
  cursor: pointer;
}
</style>