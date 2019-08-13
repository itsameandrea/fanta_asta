<template>
  <div>
    <!-- <search-input :items="players.filter(p => p.role === selectedRole)" search-field="name" @onIn0put="filterPlayers" /> -->
    <div class="flex w-full py-3">
      <div v-for="role in roles" :key="role.name" class="w-1/4 flex justify-center items-center">
        <span
          class="h-10 w-10 flex justify-center items-center bg-grey-light cursor-pointer"
          :class="{ [`bg-${role.color}`]: selectedRole === role.name }"
          @click="selectedRole = role.name">
          {{ role.name }}
        </span>
      </div>
    </div>
    <table class="text-left w-full border-separate">
      <thead>
        <tr class="shadow hover:shadow-md">
          <th
            v-for="header in headers" 
            :key="header"
            class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in availablePlayers"
          :key="index"
          class="hover:bg-grey-lighter shadow hover:shadow-md">
          <td
            v-for="header in headers"
            :key="header" 
            class="py-4 px-6">
            {{ item[header] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput'

export default {
  name: 'players-table',
  components: {
    SearchInput,
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    players: {
      type: Array,
      required: true
    },
    defaultSelected: {
      type: String,
      default: 'P'
    }
  },
  data() {
    return {
      filteredPlayers: null,
      roles: [
        {
          name:'P',
          color: 'yellow-light'
        },
        {
          name: 'D',
          color: 'green-light'
        },
        {
          name: 'C',
          color: 'blue-light'
        },
        {
          name: 'A',
          color: 'orange-light'
        }
      ],
      selectedRole: null
    }
  },
  computed: {
    availablePlayers() {
      return this.filteredPlayers
        ? this.filteredPlayers
        : this.players
    }
  },
  watch: {
    selectedRole(role) {
      this.filteredPlayers = this.players.filter(player => player.role === role)
    }
  },
  methods: {
    filterPlayers(players) {
      this.filteredPlayers = players
    }
  },
  mounted() {
    this.selectedRole = this.defaultSelected
  }
}
</script>
<style scoped>
  table {
    border-spacing: 0 10px;
  }
</style>