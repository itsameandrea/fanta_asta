<template>
  <registration-form @onSubmit="onRegister"/>
</template>
<script>
import RegistrationForm from '@/components/RegistrationForm'

export default {
  name: 'registration-page',
  components: { RegistrationForm },
  methods: {
    async onRegister(registrationDetails) {
      await this.$store.dispatch('auth/register', registrationDetails)
      this.$router.replace('/')
    }
  }
}
</script>