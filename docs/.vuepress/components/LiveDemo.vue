<template>
  <div class="live-demo">
    <component :is="componentName" />
  </div>
</template>

<script>
export default {
  props: {
    componentName: { type: String, required: true }
  }
}
</script>

<style scoped>
div.live-demo {
  background: #fff;
  padding: 0.5rem 1.5rem 1.5rem;
  border-radius: 3px;
}
</style>
