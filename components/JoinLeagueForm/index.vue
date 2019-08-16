<template>
  <base-form :title="`Unisciti a ${leagueProp.name}`">
    <input-text-field 
      placeholder="Email"
      type="email"
      v-model="user.email" />
    <input-text-field 
      placeholder="Password"
      type="password"
      v-model="user.password" />
    <input-text-field 
      placeholder="Passcode della lega"
      v-model="league.passcode" />
    <button
      type="submit"
      class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
      @click="$emit('onSubmit', { user, league })">
        Submit
    </button>
    <template slot="footer">
      <div class="text-center text-sm text-grey-dark mt-4">
        By signing up, you agree to the 
        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
          Terms of Service
        </a> and 
        <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
          Privacy Policy
        </a>
      </div>
    </template>
    <template slot="below-form">
      <div class="text-grey-dark mt-6">
        Already have an account? 
        <a class="no-underline border-b border-blue text-blue" href="../login/">
          Log in
        </a>
      </div>
    </template>
  </base-form>
</template>
<script>
import InputTextField from '@/components/InputTextField'
import BaseForm from '@/components/BaseForm'

export default {
  name: 'login-form',
  components: { InputTextField, BaseForm },
  props: {
    leagueProp: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      league: {
        passcode: ''
      }
    }
  },

}
</script>