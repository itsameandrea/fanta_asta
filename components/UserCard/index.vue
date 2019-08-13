<template>
  <div class="pr-3 pb-3">
    <div
      class="bg-red-lighter border rounded shadow p-2"
      :class="{ 'bg-green': isLoggedIn }">
      <div class="flex flex-row items-center">
        <div class="flex-shrink pl-1 pr-4 flex items-center">
          <user-avatar src="https://i.imgur.com/8Km9tLL.jpg" />	
        </div>
        <div class="flex-1 text-right">
          <h5 class="text-white">{{ user.email }}</h5>
          <h5 class="text-white"> Juventus </h5>
        </div>
      </div>
    </div>
    <!-- <div class="rounded rounded-t-lg shadow" style="max-height: 300px;">
      <img src="https://i.imgur.com/dYcYQ7E.png" class="w-full"/>
      <div class="flex justify-center -mt-8">
          <img src="https://i.imgur.com/8Km9tLL.jpg" class="rounded-full border-solid border-white border-2 -mt-3">		
      </div>
      <div class="text-center px-3 pb-6 pt-2">
        <h3 class="text-black text-sm bold font-sans">{{ user.email }}</h3>
        <p class="mt-2 font-sans font-light text-grey-dark">Juventus</p>
      </div>
    </div> -->
  </div>
</template>
<script>
import UserAvatar from '@/components/UserAvatar'

export default {
  name: 'user-card',
  components: { UserAvatar },
  props: {
    user: {
      type: Object,
      required: true
    },
    loggedInUsers: {
      type: Array,
      required: true
    }
  },
  computed: {
    isLoggedIn() {
      return !!this.loggedInUsers.find(u => u.uid === this.user.uid)
    }
  }
}
</script>