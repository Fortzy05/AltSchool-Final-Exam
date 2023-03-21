<template>
  <main
    class="flex flex-col justify-center text-center items-center gap-5 h-full w-full my-0 mx-auto transition-all ease-in-out"
  >
    <h1 class="text-7xl mb-4 items-center font-extrabold">Counter App</h1>
    <p
      class="items-center text-center text-4xl flex flex-col gap-5 justify-center"
    >
      This is a counter with the functionalities, on the click of a button the following happens:
      <ul class="flex flex-col items-start gap-2 text-2xl justify-start">
        <li>Increment: The counter increases by 1</li>
        <li>Decrement: The counter decreases by 1</li>
        <li>Reset: The counter resets to 0</li>
        <li>Set Value: The counter is set to the value of the input field</li>
      </ul>
      
    </p>
    <div>
      <button type="button" class="h-12 m-3 border-none rounded-lg shadow-md outline-none w-28">
        <router-link to="/counter">Counter</router-link>
      </button>
      <button class="h-12 m-3 border-none rounded-lg shadow-md outline-none w-28" type="button">
        <a class="font-semibold text-sm" href="https://www.github.com/fortzy05">Github Profile</a>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
