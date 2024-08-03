<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'standard-component',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title'
    }
  }
};
</script>

<style scoped>
.card-text {
  color: green;
}
</style>
