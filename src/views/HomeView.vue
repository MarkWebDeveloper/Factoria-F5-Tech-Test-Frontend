<script setup lang="ts">

</script>

<template>
  <main>
    <div id="login-container">
      <h2 id="greeting">Log in to see your Photos</h2>
      <button class="button" id="login-button">LOGIN</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
#login-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
#greeting {
  font-size: 1.1rem;
  font-family: "Anybody", sans-serif;
}
#login-button {
  background-color: $factoria-orange;
  width: 6rem;
  font-size: 1rem;
  padding: 0.7rem;
  font-family: "Ubuntu", sans-serif;
  color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 4px #888888;
}
</style>
