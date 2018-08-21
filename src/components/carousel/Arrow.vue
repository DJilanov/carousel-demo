<style scoped>
svg {
  height: 100px;
  position: absolute;
  top: 180px;
  left: 0;
}

.next {
  transform: scaleX(-1);
  right: 0;
  left: auto;
}
</style>

<template>
  <svg viewBox="0 0 100 100" 
    class="flickity-button-icon" 
    :class="{
      next: next
    }">
    <path 
      d="M 10,50 L 60,100 L 60,95 L 15,50  L 60,5 L 60,0 Z" 
      class="arrow">
    </path>
  </svg>
</template>

<script>
export default {
  name: 'arrow',
  inject: ['carousel'],
  props: {
    next: Boolean
  }
}
</script>
