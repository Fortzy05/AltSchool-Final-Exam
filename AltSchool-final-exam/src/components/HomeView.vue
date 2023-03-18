<template>
  <main>
    <h1>Counter App</h1>
    <p>
      This is a counter with the functionalities, on the click of a button to
      perform Increment, decrement,Reset and set Value
    </p>
    <div>
      <button type="button">
        <router-link to="/counter">Counter</router-link>
      </button>
      <button type="button">
        <a href="https://www.github.com/fortzy05">Github Profile</a>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
