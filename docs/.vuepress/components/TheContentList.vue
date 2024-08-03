<template>
  <div class="overview-grid">
    <div
      v-for="item in listItems"
      class="grid-item"
      :to="item.link"
      :key="item.title"
    >
      <router-link :to="item.link">
        <h3>{{ item.title }}</h3>
        <img :src="item.img" alt="Date &amp; time" />
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
          title: "Date \& Time",
          description: "Communicate date and time using consistent patterns",
          img: '/images/icons/date-time.svg',
          link: "/content/date-and-time-guideline",
        },
        {
          title: "Terminolgy",
          description: "Abbreviations & common radiation treatment terminology.",
          img: '/images/icons/terminology.svg',
          link: "/content/terminology",
        },
        {
          title: "Actionable Language",
          description: "Use this guide to find the most appropriate verb for an experience.",
          img: '/images/icons/click.svg',
          link: "/content/actionable-language",
        },
      ],
    };
  },
};
</script>
