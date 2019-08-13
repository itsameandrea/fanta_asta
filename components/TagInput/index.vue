<template>
  <div class="flex flex-col">
    <input-text-field 
      :placeholder="placeholder"
      @keyup.enter.space.188="onAddEmail"
      v-model="text" />
    <div class="flex flex-wrap">
      <chip v-for="(tag, index) in value" :key="index" class="m-1">
        {{ tag }}
      </chip>
    </div>
  </div>  
</template>
<script>
import InputTextField from '@/components/InputTextField'
import Chip from '@/components/Chip'

export default {
  name: 'tag-input',
  components: { Chip, InputTextField },
  props: {
    value: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Type something'
    }
  },
  data() {
    return {
      text: ''    
    }
  },
  methods: {
    onAddEmail() {
      const tag = this.text.slice(0, -1)
      this.text = ''
      this.$emit('input', [ ...this.value, tag ])
    }
  }
}
</script>