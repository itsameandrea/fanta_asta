<template>
  <div class="bg-white shadow w-1/6 h-full">
    <ul class="list-reset">
      <li class="p-3 flex items-center justify-start">
        <user-avatar src="https://i.imgur.com/8Km9tLL.jpg" size="md" />
        <span class="pl-2 font-bold"> John Doe </span>
      </li>
      <li v-for="item in items" :key="item.url">
        <span
          @click="$router.push(item.url)"
          class="block p-4 text-grey-darker cursor-pointer hover:bg-grey-lighter hover:border-purple border-r-4"
          :class="{ 'border-purple': $route.path === item.url }">
            {{ item.label }}
        </span>
      </li>
    </ul>
  </div>  
</template>
<script>
import UserAvatar from '@/components/UserAvatar'
export default {
  name: 'side-drawer',
  components: { UserAvatar },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style scoped>

</style>