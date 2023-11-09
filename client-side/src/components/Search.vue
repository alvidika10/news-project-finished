<script>

import { mapActions, mapWritableState } from 'pinia'
import { useCounterNews } from '../stores/news'

export default {
    computed: {
        ...mapWritableState(useCounterNews, ['filter', 'userData'])
    },
    methods: {
        ...mapActions(useCounterNews, ['changeFilter'])
    }
}
</script>

<template>
 <section>
    <div v-if="userData.statusUser ? userData.statusUser.status === 'premium' : false" class=" bg-white">
      <div class="container h-48 mx-auto flex justify-center items-center p-2 md:p-0">
        <div
          class="w-max border border-gray-300 p-6 grid grid-cols-1 gap-6 bg-white shadow-lg rounded-lg"
        >
          <div class="flex ">
            <div class="flex border rounded bg-gray-300 items-center p-2"> 
              <input
                type="text"
                placeholder="Name..."
                class="bg-gray-300 max-w-full focus:outline-none text-gray-700 w-auto"
                v-model="filter"
              />
              
            </div>
            <div class="flex justify-center ml-3">
              <button @click="changeFilter(filter)" class="p-2 border w-20 space-x-60 rounded-md bg-gray-800 text-white">Search</button>              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
