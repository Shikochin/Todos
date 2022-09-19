<template>
  <p class="time text-colors"># {{ time }}</p>
</template>

<script lang="ts" setup>
import dayjs from 'dayjs';

const props = defineProps<{
  todoCreatedTime: number
}>()

const time = dayjs(props.todoCreatedTime).format('MM/DD')
</script>