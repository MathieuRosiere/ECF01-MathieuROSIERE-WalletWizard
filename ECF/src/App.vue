<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1>Wizard Wallet</h1>
  </header>
  <router-view class="router-view"></router-view>
  <nav>
    <router-link class="router" to="/">Home</router-link>
    <router-link class="router" to="/add"> | Operations</router-link>
    <router-link class="router" to="/history"> | History</router-link>
  </nav>
</template>

<style scoped>
h1 {
  margin-top: 15px;
  font-size: 4rem;
}

nav {
  bottom: 0;
  margin-bottom: 40px;
}

.router {
  font-size: 2rem;
  text-decoration: none;
}

.router-link-active {
  color: #e32525;
}

.router-view {
  height: 70%;
  width: 70%;
  border: 1px solid black;
  border-radius: 35px 0px 35px 0px;
  background-color: #931f1f;
  padding: 10px;
}
</style>
