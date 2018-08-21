<style scoped>
.carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.carousel {
  width: 80%;
}

.slide {
  width: 100%;
}
</style>

<template>
  <div class="carousel-container">
    <app-carousel class="carousel">
      <app-slide v-for="image in images">
        <img class="slide" :src="image" />
      </app-slide>
    </app-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppCarousel from '@/components/carousel/Carousel'
import AppSlide from '@/components/carousel/Slide'

export default {
  name: 'home',
  components: {
    AppCarousel,
    AppSlide
  },
  mounted() {
    this.$store.dispatch('fetchImages')
  },
  computed: {
    ...mapGetters({
      images: 'getImages'
    })
  }
}
</script>
