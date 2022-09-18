<template>
  <p class="time dark:text-stone-100"># {{ todoCreatedTime }}</p>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

const props = defineProps<{
  todoId: number
}>()

const todoCreatedTime = dayjs(props.todoId).format('MM/DD')
</script>