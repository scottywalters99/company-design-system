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
          title: "Common Actions",
          description: "Common actions guidelines. e.g., Add, Delete, Cancel, Save.",
          img: '/images/icons/click.svg',
          link: "/patterns/common-actions",
        },
        {
          title: "Login",
          description: "Login pattern guidelines.",
          img: '/images/icons/login.svg',
          link: "/patterns/login",
        },
        {
          title: "Notifications",
          description: "Use this guide for communicating with users through notifications.",
          img: '/images/icons/notification.svg',
          link: "/patterns/notifications",
        },
      ],
    };
  },
};
</script>
