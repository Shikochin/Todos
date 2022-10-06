<template>
    <header>
        <TitleBar></TitleBar>
        <FunctionsBar></FunctionsBar>
    </header>
    <TodoList></TodoList>
</template>

<script lang="ts" setup>
import TitleBar from './components/TitleBar.vue'
import FunctionsBar from './components/FunctionsBar/FunctionsBar.vue'
import TodoList from './components/TodoList/TodoList.vue'
</script>
