const state = {
  images: [],
  imagesCount: 0,
  isLoading: true
}

const getters = {
  getImages(state) {
    return state.images
  }
}

const actions = {
  fetchImages({ commit }, params) {
    // TODO: Make request for the images. For now we return cached response
    // TODO: Move the action types as symbols in constants file
    commit('fetchImagesEnd', {
      images: [
        'https://i2.cars.bg/2018-08-20_2/24319361o.jpg',
        'https://i2.cars.bg/2018-08-20_2/24319362o.jpg',
        'https://i3.cars.bg/2018-08-20_2/24319363o.jpg',
        'https://i3.cars.bg/2018-08-20_2/24319364o.jpg',
        'https://i3.cars.bg/2018-08-20_2/24319365o.jpg',
        'https://i1.cars.bg/2018-08-20_2/24319366o.jpg',
        'https://i1.cars.bg/2018-08-20_2/24319368o.jpg',
        'https://i2.cars.bg/2018-08-20_2/24319370o.jpg',
        'https://i1.cars.bg/2018-08-20_2/24319371o.jpg',
        'https://i4.cars.bg/2018-08-20_2/24319372o.jpg',
        'https://i4.cars.bg/2018-08-20_2/24319373o.jpg',
        'https://i1.cars.bg/2018-08-20_2/24319374o.jpg',
        'https://i2.cars.bg/2018-08-20_2/24319375o.jpg',
        'https://i4.cars.bg/2018-08-20_2/24319376o.jpg'
      ]
    })
  }
}

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  fetchImages(state) {
    state.isLoading = true
  },
  fetchImagesEnd(state, { images }) {
    state.images = images
    state.imagesCount = images.length
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
