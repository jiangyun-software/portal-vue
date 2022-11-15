<template>
  <div class="content">
    <RouterView />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'JyContent',
  setup() {}
})
</script>
<style lang="scss">
.content{
  padding-top: 100px;
}
</style>
