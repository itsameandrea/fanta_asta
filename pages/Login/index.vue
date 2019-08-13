<template>
  <div class="flex justify-center h-full">
    <div class="w-1/3">
      <login-form @onSubmit="onLogin" class="mt-20"/>
    </div>
  </div>
</template>
<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login-page',
  components: { LoginForm },
  methods: {
    async onLogin(loginDetails) {
      await this.$store.dispatch('auth/login', loginDetails)
      this.$router.replace('/')
    }
  }
}
</script>