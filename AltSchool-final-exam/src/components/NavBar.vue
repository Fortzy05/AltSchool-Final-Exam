<template>
  <nav
    class="flex items-center justify-between hover:bg-slate-900 bg-inherit w-full p-3 my-0 mx-auto shadow-md text-inherit"
  >
    <img
      class="w-28 h-28 hover:bg-gray-500 rounded-full"
      src="../assets/AltSchoolLogo.png"
      alt=""
    />
    <div class="text-4xl font-light ml-4 tracking-tight hover:tracking-wide">
      Counter Application
    </div>
    <div class="flex gap-3 justify-between ml-4">
      <router-link
        to="/"
        class="text-2xl font-extrabold text-inherit hover:tracking-wide"
        >Home</router-link
      >
      <router-link
        to="/counter"
        class="text-2xl text-inherit font-extrabold hover:tracking-wide"
        >Counter</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
