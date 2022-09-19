<template>
  <input
      v-model.lazy="todoStore.addedTodo.todoTitle"
      class="rounded-md
             bg-todoLight
             dark:bg-todoGray
             border-black
             dark:border-stone-100
             border-dotted
             border-2
             dark:placeholder-blue-200
             dark:text-stone-100
             col-span-2
             pl-1"
      placeholder="Todo title (required)"
      required
      type="text"
  >
  <textarea
      v-model.lazy="todoStore.addedTodo.todoDescription"
      class="rounded-md
             bg-todoLight
             dark:bg-todoGray
             border-black
             dark:border-stone-100
             border-dotted
             border-2
             dark:placeholder-blue-200
             dark:text-stone-100
             resize-none
             col-span-3
             pl-1"
      placeholder="Todo description">
  </textarea>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/todoStore";

const todoStore = useStore()
</script>