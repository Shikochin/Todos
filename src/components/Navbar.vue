<template>
  <nav id="navbar"><a id="headerLink" href="https://github.com/CQBerry/Todos"><h1>/ Todos! /</h1></a></nav>
</template>

<style scoped lang="scss">
@import "@/style/palette.scss";

#navbar {
  text-align: center;
}

#headerLink {
  text-decoration: none;
  color: $header-color-light;
  user-select: none;
}

@media (prefers-color-scheme: dark) {
  #headerLink {
    color: $header-color-dark;
  }
}
</style>