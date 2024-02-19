<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <h1>Wizard Wallet</h1>
  <router-view class="router-view"></router-view>
  <nav>
    <router-link class="router" to="/add">Operations</router-link>
    <router-link class="router" to="/history"> | History</router-link>
  </nav>
</template>

<style scoped>

h1 {
  margin-top: 10px;
  font-size: 3.5rem;
}

nav {
  
  bottom: 0;
  margin-bottom: 20px;
  
}

.router{
    font-size: 2rem;
    text-decoration: none;
  }


.router-view {
  height: 70%;
  width: 70%;
  border: 1px solid black;
  border-radius:35px 0px 35px 0px;
  background-color: #777;
  padding: 10px;
}
</style>
