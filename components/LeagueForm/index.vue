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
    
    <div class="flex justify-end mt-5">
      <base-button
        type="submit"
        variant="filled"
        color="purple"
        class="px-8 text-xl"
        @click="$emit('onSubmit', { name, passcode, emails })">
          Crea
      </base-button>
    </div>
  </base-form>
</template>
<script>
import BaseForm from '@/components/BaseForm'
import BaseButton from '@/components/BaseButton'
import InputTextField from '@/components/InputTextField'
import TagInput from '@/components/TagInput'

export default {
  name: 'league-form',
  components: {
    BaseForm,
    BaseButton,
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