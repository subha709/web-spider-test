<script setup>
// import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)
//const fetchData = ref(null)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

async function  fetchData(){
  const { data, refresh, status } = await useFetch('https://catfact.ninja/fact')
  console.log("data",data.data,data.value)

  //const data1 = await data.json()

}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
   fetchData()
})


</script>

<template>
  <button @click="increment">Count is: {{ count }}</button>
</template>