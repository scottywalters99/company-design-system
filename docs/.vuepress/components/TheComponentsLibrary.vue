<template>
  <div class="container">
    <input
      type="text"
      v-model="title"
      class="search-input"
      placeholder="Search by component name like “button”, or “radio”"
    />
    <div class="compnents-wrapper">
      <div
        v-for="component in filteredComponents"
        class="components-box"
        :key="component.title"
      >
        <router-link :to="component.link">
          <img :src="component.img" alt="component.title" />
          <h3>{{ component.title }}</h3>
          <p>
            {{ component.description }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Components from './data/components.json'

export default {
  data() {
    return {
      title: '',
      components: Components
    }
  },
  computed: {
    filteredComponents: function () {
      var self = this
      return self.components.filter(component =>
        component.title.toLowerCase().includes(this.title.toLowerCase())
      )
    }
  }
}
</script>

<style scoped>
.compnents-wrapper {
  display: grid;
  margin-top: 2em;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));
  grid-gap: 16px;
}
.components-box a {
  text-decoration: none !important;
  display: block;
}
.components-box h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  width: 100%;
  margin-bottom: 0;
}
.components-box p {
  color: var(--ds-text-secondary);
}
.components-box img {
  width: 100%;
  margin: 0 auto;
  height: 150px;
  background: #f4f4f4;
}
.components-box {
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  font-size: 100%;
  box-shadow: 0 1px 1px rgba(9, 30, 66, 0.25), 0 0 1px 0 rgba(9, 30, 66, 0.31);
}
</style>
