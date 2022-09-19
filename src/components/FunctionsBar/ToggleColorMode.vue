<template>
  <a id="toggle-color-mode"
     class="font-mono actions text-gray-500 hover:text-slate-800 dark:text-stone-100 dark:hover:text-gray-400"
     @click="toggleColorMode()">{{ emoji }} Toggle color mode</a>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';
import { computed } from 'vue';

const isDark = useDark()
const toggleColorMode = useToggle(isDark)

const emoji = computed(() => isDark.value ? '🤍' : '🖤')
</script>