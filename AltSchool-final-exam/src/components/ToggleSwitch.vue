<template>
  <label>
    <input type="checkbox" v-model="isDarkMode" />
    <span></span>
  </label>
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
      {body.classList.add("dark-mode");}
      else {body.classList.remove("dark-mode")};
    }
  },
};
</script>
