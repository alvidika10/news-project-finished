<script>
import { mapActions, mapState } from 'pinia'
import { useCounterNews } from '../stores/news'
import Card from '../components/Card.vue'
import Header from '../components/Header.vue'

export default {
    components: {
        Card,
        Header
    },
    computed: {
        ...mapState(useCounterNews, ['favoriteData'])
    },
    methods: {
        ...mapActions(useCounterNews, ['fetchFavorite', 'userHandle'])
    },
    created() {
        this.fetchFavorite()
        this.userHandle()
    }
}
</script>

<template>
    <Header />

<section class="mb-32 text-center pt-12">
      <h2 class="mb-12 pb-4 text-center text-3xl font-bold">
        My News Favorite
      </h2>
  
      <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
       
      <Card v-for="data_fav in favoriteData" :key="data_fav.id"
      v-bind:data_new="data_fav" />

        
      </div>
    </section>

</template>