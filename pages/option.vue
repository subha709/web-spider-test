<template>
  <component-1/>
  <!-- <button @click="increment">Count is: {{ count }}</button>
  <p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p> -->
</template>
<script>
import { nextTick } from 'vue'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
      rawHtml:'any',
      foods: [
        { name: 'Pizza', imgUrl: '/img_pizza.svg' },
        { name: 'Apple', imgUrl: '/img_apple.svg' },
        { name: 'Cake', imgUrl: '/img_cake.svg' },
        { name: 'Fish', imgUrl: '/img_fish.svg' },
        { name: 'Rice', imgUrl: '/img_rice.svg' }
      ]
    }
  },

  provide() {
    return {
      foods: this.foods
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
   async increment() {
      this.count++
     // await nextTick()
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  }
}
</script>

