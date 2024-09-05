<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Warning from './components/global/Warning.vue';
import LoginForm from './components/global/LoginForm.vue';
import { useAuthStore } from './stores/authStore';

const authStore = useAuthStore()
</script>

<template>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Home</RouterLink>
        <RouterLink class="link" to="/about">About</RouterLink>
      </nav>
    </div> -->
    
    <Warning/>
    <LoginForm v-if="authStore.loginFormIsOpened"/>

  <RouterView />
</template>

<style lang="scss" scoped>
.link {
  margin-left: 1rem;
}
</style>
