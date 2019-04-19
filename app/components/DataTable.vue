<template>
  <div class="px-5 overflow-x-scroll">
    <table class="text-left w-full border-collapse">
      <thead>
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">{{ header }}</th>
          <th v-if="showActions" class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index" class="hover:bg-grey-lighter">
          <td v-for="key in Object.keys(item)" :key="key" class="py-4 px-6 border-b border-grey-light"> 
            {{ item[key] }}
          </td>
          <td v-if="showActions" class="py-4 px-6 border-b border-grey-light">
            <span @click="$emit('editItem', item)" href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark cursor-pointer">Edit</span>
            <span @click="$emit('deleteItem', item)" href="#" class="text-grey-lighter font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark cursor-pointer">View</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
    showActions: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
