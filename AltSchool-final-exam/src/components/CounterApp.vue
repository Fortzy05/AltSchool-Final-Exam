<template>
  <div
    class="flex justify-center items-center w-full max-w-screen-lg my-0 mx-auto h-1/2 transition duration-150 ease-in-out md:ease-in flex-col"
  >
    <h2 class="mb-4 items-center font-extrabold font-serif text-7xl">
      Counter: {{ count }}
    </h2>
    <div class="flex justify-center items-center gap-3 m-2.5">
      <button class="bg-blue-500" @click="decrement">Decrement</button>
      <button class="bg-red-500" @click="increment">Increment</button>
    </div>
    <div class="input-wrapper">
      <input class="outline-none rounded-l-xl rounded-r-xl" type="number" v-model="value" />
      <input
        class="submit"
        type="submit"
        @click="setValue(value)"
        value="Set Value"
      />
    </div>
    <button class="bg-green-500" @click="reset">Reset</button>
  </div>
</template>
<script>
import useCounter from "@/composables/counter";

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    return { count, increment, decrement, reset, setValue, value: 0 };
  },
};
</script>
