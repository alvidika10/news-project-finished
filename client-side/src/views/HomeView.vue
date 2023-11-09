<script>
import { mapActions, mapState } from 'pinia'
import { useCounterNews } from '../stores/news'
import Card from '../components/Card.vue'
import Header from '../components/Header.vue'
import Pagination from '../components/Pagination.vue'
import Search from '../components/Search.vue'

export default {
  components: {
    Card,
    Header,
    Pagination,
    Search
  },
  methods: {
    ...mapActions(useCounterNews, ['fetchNews', 'userHandle'])
  },
  computed: {
    ...mapState(useCounterNews, ['dataNews', 'userData'])
  },
  created() {
    this.fetchNews()
    this.userHandle()
  }
}
</script>

<template>

  <Header />

  <Search />
  
 <!-- Card -->
 <section class="mb-32 text-center pt-12">
      <h2 class="mb-12 pb-4 text-center text-3xl font-bold">
        Latest articles
      </h2>
  
      <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
       
      <Card v-for="data_new in dataNews.articles" :key="data_new.id"
      v-bind:data_new="data_new" />

        
      </div>
    </section>
    <!-- end card -->

    <Pagination />
</template>
