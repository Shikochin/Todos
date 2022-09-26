<template>
  <a id="toggle-color-mode" class="font-mono actions function-colors" @click="toggleColorMode()">{{ emoji }} Toggle
    color mode</a>
</template>

<script lang="ts" setup>
import { useDark, useToggle, useFavicon } from '@vueuse/core'
import { computed } from 'vue'

const isDark = useDark()
const toggleColorMode = useToggle(isDark)

const favicon = computed(() => isDark.value ? 'dark.png' : 'light.png')
useFavicon(favicon)

const emoji = computed(() => isDark.value ? '🤍' : '🖤')
</script>