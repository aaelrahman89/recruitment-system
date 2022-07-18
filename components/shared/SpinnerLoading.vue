<template>
  <div class="loading">
    <i class="fas fa-spinner loading__icon"></i>
  </div>
</template>

<script>
export default {
  name: 'SpinnerLoading',
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variable.scss';

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading {
  text-align: center;
  font-size: 28px;
  color: $mainColor;
  min-height: 50vh;
  line-height: 50vh;

  &__icon {
    animation-name: loading;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-duration: 0.8s;
    animation-timing-function: linear;
  }
}
</style>
