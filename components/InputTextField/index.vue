<template>
  <input
    :value="value"
    :type="type"
    @input="$emit('input',$event.target.value)"
    @keyup="$emit('keyup', $event)"
    :placeholder="placeholder"
    class="shadow appearance-none border w-full rounded mb-3 py-2 px-3 text-grey-darker">
</template>
<script>
export default {
  name: 'input-text-field',
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>