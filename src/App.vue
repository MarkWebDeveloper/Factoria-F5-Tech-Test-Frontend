<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Warning from './components/global/Warning.vue';
</script>

<template>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
      </nav>
    </div> -->
    
    <Warning/>

  <RouterView />
</template>

<style lang="scss" scoped>
.link {
  margin-left: 1rem;
}
</style>
