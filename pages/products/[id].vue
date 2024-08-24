<template>
    <p>PRODUCTS ID PAGE {{ id }}</p>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

    setup() {
      
        const { id } = useRoute().params

    return {
      id // Expose id to the template
    }
   
    },
})
</script>
