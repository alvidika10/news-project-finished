<script>

import Header from '../components/Header.vue';
import { mapActions } from 'pinia'
import { useCounterNews } from '../stores/news'


export default {
    components: {
        Header
    },
    methods: {
        ...mapActions(useCounterNews, ['paymentUser'])
    }
}

</script>

<template>

    <Header />

  <section>
    <div
      class="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 pb-10 pt-16"
    >
      <div
        class="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
        style="max-width: 600px"
      >
        <div class="w-full pt-1 pb-5">
          <div
            class="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center"
          >
            <i class="mdi mdi-credit-card-outline text-3xl"></i>
          </div>
        </div>
        <div class="mb-10">
          <h1 class="text-center font-bold text-xl uppercase">Pay and become a premium member</h1>
        </div>

        <div>
          <button
          @click.prevent="paymentUser"
            class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
          >
            <i class="mdi mdi-lock-outline mr-1"></i> PAY NOW
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
