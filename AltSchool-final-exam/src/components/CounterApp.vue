<template>
    <div class="counter">
      <h2 class="heading-main">Counter: {{ count }}</h2>
      <div class="btn-wrapper">
        <button class="btn decrement" @click="decrement">
          Decrement
        </button>
        <button class="btn increment" @click="increment">
          Increment
        </button>
      </div>
      <div class="input-wrapper">
        <input class="input-field" type="number" v-model="value" />
        <input class='submit' type='submit' @click='setValue(value)' value='Set Value'>
      </div>
      <button class="btn reset" @click="reset">
        Reset
      </button>
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
