<template>
  <div>
    <JyHeader />
    <JyContent />
    <JyFooter />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import JyHeader from './Header.vue'
import JyContent from './Content.vue'
import JyFooter from './Footer.vue'

export default defineComponent({
  name: 'MyLaout',
  components: {
    JyHeader,
    JyContent,
    JyFooter
  },
  setup() {}
})
</script>
<style lang="less"></style>
