<template>
  <nav>
    <div>My Counter Application</div>
    <div class="my-2 text-3xl font-bold bg-pink dark:bg-black ">
      <router-link to="/">Home</router-link>
      <router-link to="/counter" class="dark">Counter</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
