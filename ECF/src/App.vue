<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';


</script>

<template>
  <router-link to="/add">Operations</router-link>
  <router-link to="/history"> | History</router-link>
  <router-view></router-view>
</template>

<style scoped>

</style>
