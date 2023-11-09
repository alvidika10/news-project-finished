<script>
import { mapActions } from 'pinia'
import { useCounterNews } from '../stores/news'

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: '',
      address: ''
    }
  },
  methods: {
    ...mapActions(useCounterNews, ['handleRegister']),
    addRegister() {
      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address
      }

      this.handleRegister(data)
    }
  }
}


</script>

<template>

     <!-- sign up start -->
     <section id="signup-section" class="flex justify-center items-center h-screen bg-white">
      <div class="min-h-screen bg-white-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      
        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
            <p class="mt-2 text-center text-sm text-gray-600 max-w mb-3">
              Already registered?
              <a @click.prevent="this.$router.push('/login')" href="" class="font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500">Sign in</a>
              <hr class="mt-3">
            </p>
      
            <form @submit.prevent="addRegister" id="signup-form" class="mb-0 space-y-6 mt-3" action="#" method="POST">
      
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">First Name</label>
                <div class="mt-1">
                  <input v-model="firstName" id="firstName-signup" name="text" type="text" autocomplete="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Last Name</label>
                <div class="mt-1">
                  <input v-model="lastName" id="lastName-signup" name="text" type="text" autocomplete="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
                <div class="mt-1">
                  <input v-model="email" id="email-signup" name="email" type="email" autocomplete="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">password</label>
                <div class="mt-1">
                  <input v-model="password" id="password-signup" name="password" type="password" autocomplete="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Phone Number</label>
                <div class="mt-1">
                  <input v-model="phoneNumber" id="phoneNumber-signup" name="text" type="text" autocomplete="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                </div>
              </div>

              <div>
                <label for="password" class="block text-sm font-medium text-gray-700">Address</label>
                <div class="mt-1">
                  <input v-model="address" id="address-signup" name="text" type="text" autocomplete="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-500" />
                </div>
              </div>
        
              <div class="flex items-center">
                <input id="terms-and-privacy" name="terms-and-privacy" type="checkbox" class="" />
                <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-900"
                  >I agree to the
                  <a href="#" class="text-gray-600 hover:text-gray-500">Terms</a>
                  and
                  <a href="#" class="text-gray-600 hover:text-gray-500">Privacy Policy</a>.
                </label>
              </div>
      
              <div class="mt-3 py-2">
                <button type="submit" class="border-2 border-gray-500 bg-gray-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-gray-500 font-semibold">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </section>
    <!-- sign up end -->
</template>