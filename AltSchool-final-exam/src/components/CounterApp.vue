<template>
  <div
    class="flex justify-center items-center w-full max-w-[100vw] my-0 mx-auto h-[calc(100vh-60px)] transition duration-150 ease-in-out md:ease-in flex-col"
  >
    <h2 class="mb-4 items-center font-extrabold font-serif text-7xl">
      Counter: {{ count }}
    </h2>
    <div class="flex justify-center items-center gap-3 m-2.5">
      <button class="bg-blue-500 hover:bg-blue-800 font-semibold w-28 h-12 outline-none border-none rounded-lg" @click="decrement">
        Decrement
      </button>
      <button class="bg-red-500 hover:bg-red-800 font-semibold w-28 h-12 outline-none border-none rounded-lg" @click="increment">Increment</button>
    </div>
    <div class="w-full my-0 mx-auto flex justify-center items-center">
      <input
        class="outline-none rounded-l-xl rounded-r-xl"
        type="number"
        v-model="value"
      />
      <input
        class="p-2 text-center bg-yellow-500 ml-4 hover:bg-yellow-800 font-semibold w-28 h-12 outline-none border-none rounded-lg"
        type="submit"
        @click="setValue(value)"
        value="Set Value"
      />
    </div>
    <button class="bg-green-500 text-center hover:bg-green-800 font-semibold w-24 h-12 outline-none border-none rounded-lg" @click="reset">Reset</button>
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
