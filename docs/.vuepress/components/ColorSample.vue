<template>
  <div
    class="color-sample"
    :style="[
      color === '#ffffff'
        ? { border: '1px solid #e0e0e0' }
        : { border: 'none' },
      { backgroundColor: color }
    ]"
  ></div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.color-sample {
  border-radius: 3px;
  height: 4rem;
  width: 4rem;
}
</style>
