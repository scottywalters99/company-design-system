<template>
  <div class="example-grid-row">
    <div class="example-grid-column">
      <div class="card card-correct">
        <CorrectIcon class="icon" />
        <div>
          <img :src="doImgUrl" alt="" />
        </div>
      </div>
      <p class="description">
        <slot name="correct" />
      </p>
    </div>
    <div class="example-grid-column">
      <div class="card card-incorrect">
        <IncorrectIcon class="icon" />
        <img :src="dontImgUrl" alt="" />
      </div>
      <p class="description">
        <slot name="incorrect" />
      </p>
    </div>
  </div>
</template>

<script>
import CorrectIcon from './icons/correct.vue'
import IncorrectIcon from './icons/incorrect.vue'

export default {
  components: {
    CorrectIcon,
    IncorrectIcon
  },
  props: {
    doImgUrl: {
      type: String,
      default: '',
      required: true
    },
    dontImgUrl: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.example-grid-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 32px;
  margin: 1.5rem 0;
}

.example-grid-column {
  & .icon {
    position: absolute;
    margin: 8px;
  }
  & .card {
    background-color: #fff;
  }
  & .card-correct {
    border-top: 3px solid var(--ds-color-success);
  }
  & .card-incorrect {
    border-top: 3px solid var(--ds-color-danger);
  }
}
</style>
