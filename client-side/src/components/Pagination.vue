<script>

import { mapActions, mapState } from 'pinia'
import { useCounterNews } from '../stores/news'

export default {
    methods: {
        ...mapActions(useCounterNews, ['changePagination'])
    },
    computed: {
        ...mapState(useCounterNews, ['pagination', 'userData'])
    }
}

</script>

<template>
  <section id="card-detail-section" class="fixed content-center bottom-0 w-full  body-font overflow-hidden bg-white">
    <!-- This is an example component -->
    <div class="bg-white w-screen p-4 container mx-100">
      <div class="flex justify-center ">
        <button
          type="button"
          class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
          @click="changePagination(-1)"
          v-if="pagination !== 1 && (userData.statusUser ? userData.statusUser.status === 'premium' : false)"
        >
          <div class="flex flex-row align-middle">
            <svg
              class="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p class="ml-2">Prev</p>
          </div>
        </button>
        <button
          type="button"
          class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
          v-if="pagination !== 2 && (userData.statusUser ? userData.statusUser.status === 'premium' : false)"
          @click="changePagination(1)"
        >
          <div class="flex flex-row align-middle">
            <span class="mr-2">Next</span>
            <svg
              class="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  </section>

</template>