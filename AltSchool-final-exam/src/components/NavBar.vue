<template>
  <nav>
    <div>My Counter Application</div>
    <div class="mx-2 text-3xl font-bold ">
      <router-link to="/">Home</router-link>
      <router-link to="/counter">Counter</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
