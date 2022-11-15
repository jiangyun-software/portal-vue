<template>
  <div class="home">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/vue.svg'
export default defineComponent({
  name: 'Home',
  setup () {
    return {
      logo
    }
  }
})
</script>
<style lang="scss">
.home{
  background-color: black;
  min-height: 500px;
}
</style>
