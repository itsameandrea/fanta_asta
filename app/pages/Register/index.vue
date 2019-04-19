<template>
  <div class="container mx-auto h-full flex justify-center items-center">
    <div class="w-1/3">
      <h1 class="font-hairline mb-6 text-center">Create an account</h1>
      <div class="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2">Email</label>
          <input
            v-model="user.email"
            type="text"
            class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2">Business name</label>
          <input
            v-model="user.business"
            type="text"
            class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Business name">
        </div>
        <div class="mb-4">
          <label class="block text-grey-darker text-sm font-bold mb-2">Password</label>
          <input
            v-model="user.password"
            type="text"
            class="w-full shadow appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Password">
        </div>

        <div class="flex items-center justify-center">
          <custom-button color="bg-green" icon="fas fa-check" @click="onClick">
            Register
          </custom-button>
        </div>
      </div>
      <div class="text-center">
        <p class="text-grey-dark text-sm">
          Do you have an account already?
          <nuxt-link to="/login" class="no-underline text-blue font-bold">
            Login
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton'
export default {
  components: {
    CustomButton
  },
  data () {
    return {
      user: {
        email: '',
        business: '',
        password: ''
      }
    }
  },
  methods: {
    onClick () {
      // Registration Logic
    }
  }
}
</script>

<style>
</style>
