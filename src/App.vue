<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Warning from './components/global/Warning.vue';
import LoginForm from './components/global/LoginForm.vue';
import { useAuthStore } from './stores/authStore';
import RegisterForm from './components/global/RegisterForm.vue';

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
    <RegisterForm v-if="authStore.registerFormIsOpened"/>

  <RouterView />
</template>

<style lang="scss" scoped>
.link {
  margin-left: 1rem;
}
</style>
