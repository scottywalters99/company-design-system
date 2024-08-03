<template>
  <div class="overview-grid">
    <div v-for="item in listItems" class="grid-item" :key="item.title">
      <router-link :to="item.link">
        <h3>{{ item.title }}</h3>
        <img :src="item.img" :alt="item.title" />
        <p>
          {{ item.description }}
        </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listItems: [
        {
          title: 'Color',
          description:
            'Color and contrast has an enormous psychological impact on users. The guidelines explain how to use color properly.',
          img: '/images/icons/color.svg',
          link: '/foundations/color'
        },
        {
          title: 'Iconography',
          description:
            'When used sparingly, icons are an efficient way to help guide a user through a digital experience.',
          img: '/images/icons/linac.svg',
          link: '/foundations/iconography'
        },
        {
          title: 'Typography',
          description:
            'Typography is a vitial part of user interface design. It guides and informs users through an experience.',
          img: '/images/icons/typography.svg',
          link: '/foundations/typography'
        }
      ]
    }
  }
}
</script>
