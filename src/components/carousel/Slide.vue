<style scoped>
  .carousel-slide {
    flex-basis: inherit;
    flex-grow: 0;
    flex-shrink: 0;
    user-select: none;
    backface-visibility: hidden;
    -webkit-touch-callout: none;
    outline: none;
    min-height: 100%;
  }
</style>

<template>
  <div class="carousel-slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slide',
  inject: ['carousel'],
  mounted() {
    // Stop the bad behavior of image drag in the browsers
    this.$el.addEventListener('dragstart', e => e.preventDefault())
    this.$el.addEventListener(
      // On browser we use mouseup and on phone touch
      this.carousel.isTouch ? 'touchend' : 'mouseup',
      this.onInteractionEnd
    )
  },
  methods: {
    onInteractionEnd(e) {
      const eventPosX =
        this.carousel.isTouch && e.changedTouches && e.changedTouches.length > 0
          ? e.changedTouches[0].clientX
          : e.clientX
      const deltaX = this.carousel.dragStartX - eventPosX

      if (
        this.carousel.minSwipeDistance === 0 ||
        Math.abs(deltaX) < this.carousel.minSwipeDistance
      ) {
        this.$emit('slideClick', Object.assign({}, e.currentTarget.dataset))
      }
    }
  }
}
</script>
