<template>
  <nav class="flex items-center ">
    <img class="w-28 h-28" src="../assets/AltSchoolLogo.png" alt="">
    <div>My Counter Application</div>
    <div class="">
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
