<template>
  <nav>
    <div>My Counter Application</div>
    <div>
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
