<template>
  <h1>test page</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/vue.svg'
export default defineComponent({
  name: 'Home',
  setup() {
    return {
      logo
    }
  }
})
</script>

<style lang="scss">
  h1 {
    color: red;
  }
</style>
