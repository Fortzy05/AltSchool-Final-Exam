<template>
  <div class="counter">
    <h2>Counter: {{ count }}</h2>
    <div>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
    <div>
      <input type="number" v-model="value" />
      <input type="submit" @click="setValue(value) value='Set Value'" />
    </div>
    <button @click="reset">Reset</button>
  </div>
</template>
<script>
import useCounter from "@composable/useCounter";

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    return { count, increment, decrement, reset, setValue, value: 0 };
  },
};
</script>
