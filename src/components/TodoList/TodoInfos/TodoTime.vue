<template>
  <p class="time"># {{ todoCreatedTime }}</p>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

const props = defineProps<{
  todoId: number
}>()

const todoCreatedTime = dayjs(props.todoId).format('MM/DD')
</script>

<style scoped>
.time {
  line-height: 0;
}
</style>