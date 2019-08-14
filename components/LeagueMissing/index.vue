<template>
  <div class="w-full h-full flex">
    <div class="flex w-full flex-col justify-around missing-illustration">
      <div class="pl-5">
        <h1 class="text-6xl font-bold"> Qui non ci sono leghe </h1>
        <h3 class="font-thin text-2xl mt-2 mb-8"> Non ti preoccupare. Crearla sara' semplice e veloce </h3>
        <base-button 
          class="text-2xl px-10 py-4 font-thin"
          variant="outline"
          color="purple"
          @click="$emit('ctaClick')">
          Crea lega
        </base-button>
      </div>
      <div>
      </div>
    </div>
    <!-- <div class="w-1/2 missing-illustration">
    </div> -->
  </div>
</template>
<script>
import BaseButton from '@/components/BaseButton'

export default {
  name: 'league-missing',
  components: { BaseButton }
}
</script>
<style scoped>
  .missing-illustration {
    background-image: url(/images/league_not_found.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: 150px;
    background-position-y: 50px;
  }
</style>