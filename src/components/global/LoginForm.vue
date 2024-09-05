<script setup lang="ts">
import type { ILoginDTO } from '@/core/auth/ILoginDTO';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';

const authStore = useAuthStore()

const username = ref<string>("")
const password = ref<string>("")

const loginDTO: ILoginDTO = {
    username: "",
    password: ""
}

const createLoginDTO = (): void => {
    loginDTO.username = username.value
    loginDTO.password = password.value
}

function submitForm() {
    createLoginDTO()
    authStore.login(loginDTO)
}

</script>

<template>
    <div class="login-background">
        <form class="login-form-container" @submit.prevent="submitForm">
            <button class="close-button" @click="authStore.switchLoginForm()">
                <img class="close-button-image" src="/images/icons/close-tab-svgrepo-com.svg" alt="close-image">
            </button>
            <h2>LOGIN</h2>
            <label for="email-input">Username</label>
            <input class="email-input" type="text" name="email-input" id="email-input" v-model="username" required>
            <label for="password-input">Password</label>
            <input class="password-input" type="password" name="password-input" id="password-input" v-model="password" autocomplete="on" required>
            <p class="register-text">Register here</p>
            <button class="login-button" id="login-button" type="submit">LOGIN</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login-background {
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: rgba($color: #000000, $alpha: 0.06);
    backdrop-filter: blur(3px);
}

.login-form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17rem;
    background-color: white;
    z-index: 99;
    border-radius: 10px;
    padding: 0.5rem 0.5rem 1rem 0.5rem;
    margin: auto;
}

.close-button {
    margin-left: auto;
    background-color: transparent;
    cursor: pointer;
}

.close-button-image {
    width: 2rem;
}

h2 {
    font-family: "Anybody", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 3rem;
}

label {
    display: block;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    text-align: left;
}

input {
    width: 80%;
    background-color: $input-background-color;
    border-radius: 5px;
    margin-bottom: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.2rem;
    z-index: 98;
    padding: 0.3rem;
    box-shadow: 2px 2px 4px #888888;
}

.register-text {
    font-family: "Anybody", sans-serif;
    color: black;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 2rem;
}

.login-button {
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

@media only screen and (min-width: 992px) {
.login-form-container {
    width: 25rem;
    padding: 1rem 1rem 1rem 1rem;
}

.close-button-image {
    width: 2.5rem;
}

h2 {
    font-size: 2rem;
    margin-bottom: 4rem;
}

label {
    font-size: 2rem;
    margin-bottom: 1rem;
}

input {
    border-radius: 5px;
    margin-bottom: 3rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.5rem;
    padding: 0.5rem;
}


.register-text {
    font-size: 1.3rem;
    margin-bottom: 3rem;
}

.login-button {
    width: 7rem;
    font-size: 1.3rem;
    padding: 1rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
    border-radius: 10px;
    margin-bottom: 2rem;
}
}

@media only screen and (min-width: 1200px) {
    .login-form-container {
    width: 22rem;
    padding: 1rem 1rem 1rem 1rem;
}

.close-button-image {
    width: 2rem;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 3rem;
}

label {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

input {
    border-radius: 5px;
    margin-bottom: 2rem;
    font-family: "Ubuntu", sans-serif;
    font-size: 1.3rem;
    padding: 0.7rem;
}


.register-text {
    font-size: 1.1rem;
    margin-bottom: 3rem;
    margin-top: 1rem;
}

.login-button {
    width: 7rem;
    font-size: 1.3rem;
    padding: 1rem;
    font-family: "Ubuntu", sans-serif;
    color: white;
    border-radius: 10px;
    margin-bottom: 2rem;
}
}
</style>