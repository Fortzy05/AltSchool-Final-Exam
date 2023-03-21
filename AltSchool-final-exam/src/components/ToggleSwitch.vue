<template>
  <div class="absolute top-25 left-1/2 -translate-x-[50%]">
    <label class=" switch relative inline w-15 h-[36px]  ">
    <input class="h-0 w-0 opacity-0 rounded-[30%]" type="checkbox" v-model="isDarkMode" @click="toggleDarkMode"/>
    <span class="slider"></span>
  </label>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      isDarkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      const body = document.querySelector("body");
      if (this.isDarkMode) {
        body.classList.add("dark-mode");
      } else {
        body.classList.remove("dark-mode");
      }
      localStorage.setItem("isDarkMode", this.isDarkMode);
    },
  },
  created() {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode) {
      this.isDarkMode = JSON.parse(isDarkMode);
      const body = document.querySelector("body");
      if (this.isDarkMode)
      {body.classList.add("dark-mode")}
      else {body.classList.remove("dark-mode")};
    }
  },
};
</script>
<style>
.switch input{
opacity: 0;
width: 0;
height: 0; 
border-radius: 30%;
}
</style>