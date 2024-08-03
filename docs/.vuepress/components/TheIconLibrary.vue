<template>
  <div class="container">
    <input
      type="text"
      v-model="name"
      class="search-input"
      placeholder="Search by icon name. Ex. 'save', or 'edit'"
    />
  </div>
  <h2 id="actions" v-if="filteredActionIcons != 0">Actions</h2>
  <div class="icon-container">
    <div
      v-for="icon in filteredActionIcons"
      :key="icon.name"
      class="panel"
      @mouseover="icon.hover = true"
      @mouseleave="icon.hover = false"
    >
      <span class="icon-title"><code>{{ icon.name }}.svg</code></span>
      <img :src="icon.url" :alt="icon.name" />
      <a :href="icon.url" download :title="`Download ${icon.name} icon`">
        <img
          v-show="icon.hover"
          src="/images/icons/download.svg"
          :alt="`Download ${icon.name} icon`"
          class="download-icon"
        />
      </a>
    </div>
  </div>

  <h2 id="navigation" v-if="filteredNavigationIcons != 0">Navigation</h2>
  <div class="icon-container">
    <div
      v-for="icon in filteredNavigationIcons"
      :key="icon.name"
      class="panel"
      @mouseover="icon.hover = true"
      @mouseleave="icon.hover = false"
    >
      <span class="icon-title"><code>{{ icon.name }}.svg</code></span>
      <img :src="icon.url" :alt="icon.name" />
      <a :href="icon.url" download :title="`Download ${icon.name} icon`">
        <img
          v-show="icon.hover"
          src="/images/icons/download.svg"
          :alt="`Download ${icon.name} icon`"
          class="download-icon"
        />
      </a>
    </div>
  </div>

  <h2 id="navigation" v-if="filteredRegulatoryIcons != 0">Regulatory</h2>
  <div class="icon-container">
    <div
      v-for="icon in filteredRegulatoryIcons"
      :key="icon.name"
      class="panel"
      @mouseover="icon.hover = true"
      @mouseleave="icon.hover = false"
    >
      <span class="icon-title"><code>{{ icon.name }}.svg</code></span>
      <img :src="icon.url" :alt="icon.name" />
      <a :href="icon.url" download :title="`Download ${icon.name} icon`">
        <img
          v-show="icon.hover"
          src="/images/icons/download.svg"
          :alt="`Download ${icon.name} icon`"
          class="download-icon"
        />
      </a>
    </div>
  </div>
</template>

<script>
import actionIcons from './data/action-icons.json'
import navigationIcons from './data/navigation-icons.json'
import regulatoryIcons from './data/regulatory-icons.json'

export default {
  data() {
    return {
      actionIcons: actionIcons,
      navigationIcons: navigationIcons,
      regulatoryIcons: regulatoryIcons,
      name: '',
      hover: false
    }
  },
  computed: {
    filteredActionIcons: function () {
      var self = this
      return self.actionIcons.filter(icon =>
        icon.name.toLowerCase().includes(this.name.toLowerCase())
      )
    },
    filteredNavigationIcons: function () {
      var self = this
      return self.navigationIcons.filter(icon =>
        icon.name.toLowerCase().includes(this.name.toLowerCase())
      )
    },
    filteredRegulatoryIcons: function () {
      var self = this
      return self.regulatoryIcons.filter(icon =>
        icon.name.toLowerCase().includes(this.name.toLowerCase())
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-container {
  max-width: 1200px;
  display: grid;
  margin-top: 1rem;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fill, minmax(142px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}
.icon-title {
  color: #161616;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.3;
  position: absolute;
  align-self: flex-start;
  // left: 1rem;
  top: 0.75rem;
}
.panel {
  position: relative;
  flex: 1 1 150px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #fff;
}
.download-icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  padding: 4px;

  &:hover {
    background: #e8e8e8;
    padding: 4px;
  }
}

/* Set the margin used on flex items to 0
 * as we use gaps in grid.  */
@supports (display: grid) {
  .icon-container > * {
    margin: 0;
  }
}
</style>
