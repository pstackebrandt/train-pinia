import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * @summary Stores a counter state with additional functionality.
 * @description Uses pinia to manage a counter state of the application.
 */
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  /**
   * @summary Increments the counter value.
   */
  function increment() {
    count.value++
  }

  // todo Make sure that the counter can't go below 0.

  /**
   * @summary Decrements the counter value.
   */
  function decrement() {
    count.value--
  }

  /**
   * @summary Resets the counter value to 0.
   */
  function reset() {
    count.value = 0
  }

  return { count, increment, decrement, reset }
})
