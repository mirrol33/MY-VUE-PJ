<!-- src/App.vue -->
<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/non-existent-path">잘못된 링크</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>
