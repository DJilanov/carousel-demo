<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/shared/Header'
import AppFooter from '@/shared/Footer'

import AppCarousel from '@/components/Carousel'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,

    AppCarousel
  }
}
</script>
