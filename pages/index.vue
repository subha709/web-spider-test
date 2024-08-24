<template>
    <p>Index page</p>
    <clickCounter></clickCounter>
    <MouseHover></MouseHover>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
//import clickCounter from '~/components/clickCounter.vue'

export default defineComponent({
  components: { clickCounter },
    setup() {
        
    },
})
</script>
