<template>
  <div class="h-[100vh] w-[100vw] max-w-[100%]">
    <Navbar />
    <ToggleSwitch />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/NavBar.vue";
import ToggleSwitch from "./components/ToggleSwitch.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ToggleSwitch,
  },
};
</script>


