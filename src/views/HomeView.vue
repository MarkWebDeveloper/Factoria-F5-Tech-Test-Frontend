<script setup lang="ts">
import ImagesContainer from '@/components/home/ImagesContainer.vue';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore()
</script>

<template>
  <main>
    <div id="login-container">
      <h2 class="greeting" id="greeting-not-logged" v-if="!authStore.isAuthorized">Log in to see your photos</h2>
      <h2 class="greeting" id="greeting-logged" v-if="authStore.isAuthorized">Welcome to your favorite photos.</h2>
      <button class="button" id="login-button" @click="authStore.switchLoginForm()" v-if="!authStore.isAuthorized">LOGIN</button>
      <button class="button" id="logout-button" @click="authStore.logout()" v-if="authStore.isAuthorized">LOGOUT</button>
    </div>
    <h1 v-if="authStore.isAuthorized">FAVORITE IMAGES</h1>
    <button v-if="authStore.isAuthorized" class="button" id="add-button">ADD</button>
    <ImagesContainer v-if="authStore.isAuthorized"/>
  </main>
</template>

<style lang="scss" scoped>
#login-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}
.greeting {
  font-size: 1.1rem;
  font-family: "Anybody", sans-serif;
  width: 60%;
}
.button {
  background-color: $factoria-orange;
  width: 6rem;
  font-size: 1rem;
  padding: 0.7rem;
  font-family: "Ubuntu", sans-serif;
  color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 4px #888888;
  cursor: pointer;
}
#add-button {
  display: block;
  margin: 2rem auto;
}
h1 {
  font-family: "Ubuntu", sans-serif;
  font-size: 1.5rem;
  text-align: center;
}
@media only screen and (min-width: 960px) {
  #login-container {
    padding: 2.5rem;
  }

  #greeting {
    font-size: 1.5rem;
  }

  .button {
    width: 8rem;
    font-size: 1.3rem;
    padding: 1rem;
  }
  h1 {
  font-size: 2rem;
}
#add-button {
  margin: 2.5rem auto 3.5rem auto;
}
}

@media only screen and (min-width: 1264px) {
  #login-container {
    padding: 3rem;
  }

  #greeting {
    font-size: 1.5rem;
  }

  .button {
    width: 8rem;
    border-radius: 15px;
  }
  #add-button {
  margin: 3rem auto;
}
}
</style>
