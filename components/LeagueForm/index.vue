<template>
  <base-form title="Crea la tua lega">
    <input-text-field 
      placeholder="Nome"
      v-model="name" />

    <input-text-field 
      placeholder="Codice d'ingresso da dare ai tuoi amici"
      v-model="passcode" />

    <tag-input
      placeholder="Email dei tuoi amici"
      v-model="emails" />
    <button
      type="submit"
      class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
      @click="$emit('onSubmit', { name, passcode, emails })">
        Crea
    </button>
  </base-form>
</template>
<script>
import BaseForm from '@/components/BaseForm'
import InputTextField from '@/components/InputTextField'
import TagInput from '@/components/TagInput'

export default {
  name: 'league-form',
  components: {
    BaseForm,
    InputTextField,
    TagInput
  },
  data() {
    return {
      name: '',
      passcode: '',
      emails: []
    }
  }
}
</script>