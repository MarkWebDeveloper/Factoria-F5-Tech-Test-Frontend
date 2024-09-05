<script setup lang="ts">

</script>

<template>
    <div class="container">
        <img class="factoria-logo" src="/images/logos/logo-factoria-f5.png" alt="factoria-f5-logo">
        <p>This project is a part of technical challenge with Factoría F5.</p>
    </div>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    box-shadow: 3px 3px 8px #888888;
}
.factoria-logo {
    width: 7rem;
    margin: 1rem;
}
p {
    font-size: 1.2rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 500;
    width: 50%;
    text-align: left;
}
@media only screen and (min-width: 960px) {
    .container {
    justify-content: space-between;
    width: 100%;
    box-shadow: 3px 3px 8px #888888;
}
.factoria-logo {
    width: 10rem;
    margin: 1.5rem 0rem 1.5rem 3rem;
}
p {
    font-size: 1.5rem;
    width: 70%;
    margin: 1.5rem;
    text-align: center;
}
}
@media only screen and (min-width: 1264px) {
    .container {
    box-shadow: 4px 4px 8px #888888;
}
.factoria-logo {
    width: 10rem;
    margin: 1.5rem 0rem 1.5rem 3rem;
}
p {
    font-size: 2rem;
    width: 70%;
    margin: 2rem;
    text-align: right;
}
}
</style>