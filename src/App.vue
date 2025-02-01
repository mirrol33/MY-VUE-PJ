<!-- src/App.vue -->
<template>
  <div>
    <header>
      <div class="header">
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <div class="inner">
        <p>2025 FREELIFE11</p>
      </div>
    </footer>
  </div>
</template>

<!-- <script setup></script> -->
