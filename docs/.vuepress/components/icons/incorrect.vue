<template>
  <svg
    focusable="false"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
    class="incorrect-icon"
  >
    <path
      d="M12,1C6,1,1,6,1,12s5,11,11,11s11-4.9,11-11S18.1,1,12,1z M16.2,17.5L12,13.3l-4.2,4.2l-1.3-1.3l4.2-4.2L6.5,7.8l1.3-1.3	l4.2,4.2l4.2-4.2l1.3,1.3L13.3,12l4.2,4.2L16.2,17.5z"
    ></path>
    <path
      fill="none"
      d="M16.2,17.5L12,13.3l-4.2,4.2l-1.3-1.3l4.2-4.2L6.5,7.8l1.3-1.3l4.2,4.2l4.2-4.2l1.3,1.3	L13.3,12l4.2,4.2L16.2,17.5z"
      data-icon-path="inner-path"
      opacity="0"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>
.incorrect-icon {
  fill: var(--ds-color-danger);
}
</style>
