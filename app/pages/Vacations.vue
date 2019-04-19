<template>
  <div class="flex justify-center">
    <div class="container w-2/3">
      <data-table 
        :headers="headers" 
        :items="items"
        :showActions="true"/>
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable'
export default {
  components: {
    DataTable
  },
  data () {
    return {
      headers: ['City', 'Population'],
      items: [
        {
          city: 'New York',
          population: '16M'
        },
        {
          city: 'Catanzaro',
          population: '100.000'
        }
      ]
    }
  }
}
</script>
