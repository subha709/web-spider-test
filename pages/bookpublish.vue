<script setup>
import { reactive, computed } from 'vue'

const msg = ref('')

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// functions that mutate state and trigger updates
function increment() {
    author.name = 'Jhon toe'
}

function calculateBooksMessage() {
  return author
}

// a computed ref
const publishedBooksMessage = computed(() => {
  return author
})
</script>

<template>
  <p>Has published books:</p>
  <input v-model.lazy="msg" />
  <p>{{ msg }}</p>
  <span>{{ publishedBooksMessage }}</span>
  <!-- <p>{{ calculateBooksMessage() }}</p> -->
  <button @click="increment">Add more book</button>
</template>