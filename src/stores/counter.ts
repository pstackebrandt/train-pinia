import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * @summary Stores a counter state with additional functionality.
 * @description Uses pinia to manage a counter state of the application.
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  /**
   * @summary Computed property indicating if decrement is allowed.
   * @description Returns true when count is greater than 0.
   */
  const canDecrement = computed(() => count.value > 0)

  /**
   * @summary Increments the counter value.
   */
  function increment() {
    count.value++
  }

  /**
   * @summary Decrements the counter value.
   * @description Prevents the counter from going below 0.
   */
  function decrement() {
    if (canDecrement.value) {
      count.value--
    }
  }

  /**
   * @summary Resets the counter value to 0.
   */
  function reset() {
    count.value = 0
  }

  return { count, canDecrement, increment, decrement, reset }
})
