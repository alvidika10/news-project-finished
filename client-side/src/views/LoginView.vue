<script> 
import { mapActions } from 'pinia'
import { useCounterNews } from '../stores/news'

export default{
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(useCounterNews, ['handleLogin']),
        addLogin() {
            const data = {
                email: this.email,
                password: this.password
            }

            this.handleLogin(data)
        }
    }
}
</script>

<template>
  <!-- sign in start -->
  <section id="signin-section" class="flex justify-center items-center h-screen bg-white">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-3xl block text-center font-semibold">
        <i class="fa fa-user" aria-hidden="true"></i> <span> </span>Sign In
      </h1>
      <hr class="mt-3" />
      <form  @submit.prevent="addLogin" id="signin-form" action="">
        <div class="mt-3">
          <label for="email" class="block text-base mb-2">Email</label>
          <input
            v-model="email"
            type="text"
            id="signin-email"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
            placeholder="Enter Email..."
          />
        </div>
        <div class="mt-3">
          <label for="password" class="block text-base mb-2">Password</label>
          <input
            v-model="password"
            type="password"
            id="signin-password"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500"
            placeholder="Enter Password..."
          />
        </div>
        <div class="mt-3 py-2">
          <button
            type="submit"
            class="border-2 border-gray-500 bg-gray-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-500 font-semibold"
          >
            Sign In
          </button>
        </div>
        <div class="text-center">
          <span class="text-slate-400 me-2"> Don't have an account? </span>
          <a @click.prevent="this.$router.push('/register')" href="" class="text-gray-500" id="signup-form-in-signin">Sign Up</a>
        </div>
      </form>
    </div>
  </section>
  <!-- sign in end -->
</template>
