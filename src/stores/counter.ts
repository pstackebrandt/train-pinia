import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * @summary Stores a counter state with additional functionality.
 * @description Uses pinia to manage a counter state of the application.
 */

// Configuration constants
// Constraint: INITIAL_VALUE >= LOWER_BOUND
// (initial value cannot be lower than lower bound)
const LOWER_BOUND = 0
const INITIAL_VALUE = 0

// Validate constraint at initialization
if (INITIAL_VALUE < LOWER_BOUND) {
  throw new Error(
    `INITIAL_VALUE (${INITIAL_VALUE}) cannot be lower than LOWER_BOUND (${LOWER_BOUND})`,
  )
}

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(INITIAL_VALUE)

    /**
     * @summary Computed property indicating if decrement is allowed.
     * @description Returns true when count is greater than LOWER_BOUND.
     */
    const canDecrement = computed(() => count.value > LOWER_BOUND)

    /**
     * @summary Increments the counter value.
     */
    function increment() {
      count.value++
    }

    /**
     * @summary Decrements the counter value.
     * @description Prevents the counter from going below LOWER_BOUND.
     */
    function decrement() {
      if (canDecrement.value) {
        count.value--
      }
    }

    /**
     * @summary Computed property indicating if reset is allowed.
     * @description Returns true when count differs from INITIAL_VALUE.
     */
    const canReset = computed(() => count.value !== INITIAL_VALUE)

    /**
     * @summary Resets the counter value to INITIAL_VALUE.
     * @description Only enabled when count differs from INITIAL_VALUE.
     */
    function reset() {
      count.value = INITIAL_VALUE
    }

    return {
      count,
      canDecrement,
      canReset,
      increment,
      decrement,
      reset,
    }
  },
  {
    persist: {
      key: 'counter',
      storage: localStorage,
    },
  },
)
