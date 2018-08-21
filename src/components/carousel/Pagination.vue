<style scoped>
  .carousel-pagination {
    width: 100%;
    text-align: center;
  }

  .carousel-dot-container {
    display: inline-block;
    margin: 0 auto;
    padding: 0;
  }

  .carousel-dot {
    background-color: #bbb;
    display: inline-block;
    cursor: pointer;
    height: 25px;
    width: 25px;
    margin: 10px;
    border-radius: 50%;
  }

  .carousel-dot--active {
    background-color: rgb(26, 91, 231);
  }

  .carousel-dot-button {
    appearance: none;
    border: none;
    background-color: transparent;
    padding: 0;
    border-radius: 100%;
    outline: none;
    cursor: pointer;
  }

  .carousel-dot-button:focus {
    outline: 1px solid lightblue;
  }
</style>

<template>
  <div v-show="carousel.pageCount > 1" class="carousel-pagination">
    <ul class="carousel-dot-container" role="tablist">
      <li
        class="carousel-dot"
        aria-hidden="false"
        role="presentation"
        :aria-selected="isCurrentDot(index) ? 'true' : 'false'"
        v-bind:class="{ 'carousel-dot--active': isCurrentDot(index) }"
        v-for="(page, index) in paginationCount"
        :key="`${page}_${index}`"
        v-on:click="goToPage(index)"
        :style="`
          margin-top: ${carousel.paginationPadding * 2}px
          padding: ${carousel.paginationPadding}px
        `"
      >
        <button
          type="button"
          role="button"
          aria-label="`Item ${index}`"
          :title="`Item ${index}`"
          class="carousel-dot-button"
          :class="`
            active: ${isCurrentDot(index)}
          `"
          :tabindex="0"
        ></button>
      </li>
    </ul>
    <arrow 
      class="carousel-back-button"
      :next="false"
      v-show="carousel.pageCount > 1"
      v-on:click.native="goToPage(carousel.currentPage - 1)"
      :style="`
        display: ${showBack() ? 'none' : 'inherit'}
      `"
    ></arrow>
    <arrow 
      class="carousel-next-button"
      :next="true"
      v-show="carousel.pageCount > 1"
      v-on:click.native="goToPage(carousel.currentPage + 1)"
      :style="`
        display: ${showNext() ? 'none' : 'inherit'}
      `"
    ></arrow>
  </div>
</template>

<script>
  import Arrow from './Arrow.vue'

  export default {
    name: 'pagination',
    inject: ['carousel'],
    components: {
      Arrow
    },
    computed: {
      paginationCount() {
        return this.carousel.scrollPerPage
          ? this.carousel.pageCount
          : this.carousel.slideCount - 2
      }
    },
    methods: {
      /**
       * Change page by index
       * @param {number} index
       * return {void}
       */
      goToPage(index) {
        /**
         * @event paginationclick
         * @type {number}
         */
        this.$emit('paginationclick', index)
      },
      /**
       * Check can we go back
       * @return {boolean}
       */
      showBack() {
        return this.carousel.currentPage === 0
      },
      /**
       * Check can we go next
       * @return {boolean}
       */
      showNext() {
        return this.carousel.currentPage === this.paginationCount - 1
      },

      /**
       * Check on current dot
       * @param {number} index - dot index
       * @return {boolean}
       */
      isCurrentDot(index) {
        return index === this.carousel.currentPage
      }
    }
  }
</script>
