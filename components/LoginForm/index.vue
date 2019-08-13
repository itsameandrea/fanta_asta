<template>
  <base-form title="login">
    <input-text-field 
      placeholder="Email"
      type="email"
      v-model="email" />

    <input-text-field 
      placeholder="Password"
      type="password"
      v-model="password" />
    <button
      type="submit"
      class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
      @click="$emit('onSubmit', { email, password })">
        Submit
    </button>
    <template slot="footer">
      By signing up, you agree to the 
      <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
          Terms of Service
      </a> and 
      <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
          Privacy Policy
      </a>
    </template>
    <template slot="below-form">
      Already have an account? 
      <a class="no-underline border-b border-blue text-blue" href="../login/">
        Log in
      </a>.
    </template>
  </base-form>
</template>
<script>
import BaseForm from '@/components/BaseForm'
import InputTextField from '@/components/InputTextField'

export default {
  name: 'login-form',
  components: { BaseForm, InputTextField },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>