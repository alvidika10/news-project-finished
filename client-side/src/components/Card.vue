<script>

import { mapActions, mapState } from 'pinia'
import { useCounterNews } from '../stores/news'

export default {
    props: ['data_new'],
    methods: {
      ...mapActions(useCounterNews, ['addFavorite']),
      dataFavorite() {
        this.addFavorite(this.data_new)
      }
    },
    computed: {
      ...mapState(useCounterNews, ['userData'])
    }
}
</script>

<template>
     <div class="mb-6 lg:mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex">
              <div
                class="px-6 pt-2 relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                
                <img :src="data_new.urlToImage ? data_new.urlToImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'" class="h-60 w-96 pt-5" />
                
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
                
              </div>
              
            </div>
            <div class="p-6">
              <h5 class="mb-3 text-lg font-bold">{{ data_new.title }}</h5>
              <p class="mb-4 text-neutral-500 dark:text-neutral-300">
                <small>Published <u>{{ data_new.publishedAt }}</u> by
                  <a href="#!">{{ data_new.author }}</a></small>
              </p>
              <p class="mb-4 pb-2">
                {{ data_new.description}}
              </p>
              <button @click.prevent="dataFavorite" v-if="this.$route.name === 'home'">
                <a  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add Favorite
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
              </button>
              
            <a target="_blank" v-if="userData.statusUser.status === 'premium'" :href="data_new.url" class="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            
            </div>
          </div>
        </div>
  
</template>