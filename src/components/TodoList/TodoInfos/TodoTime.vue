<template>
  <p class="time dark:text-stone-100"># {{ time }}</p>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

const props = defineProps<{
  todoCreatedTime: number
}>()

const time = dayjs(props.todoCreatedTime).format('MM/DD')
</script>