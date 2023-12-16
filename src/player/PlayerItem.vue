<template>
  <div class="card text-left">
    <div class="player-overlay">
    </div>
      <img class="card-img-top-playerItem" :src="playerItem.img" alt="">
      <div class="card-body">
        <div class="number-player">{{ playerItem.number }}</div>
        <span class="card-title">{{ playerItem.position }}</span>
        <h3 class="card-text">{{ playerItem.namePlayer }}</h3>
        <div class="player-position">
          <span class="positionPlayer">{{ playerItem.positionPlayer }}</span>
        </div>
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'playerdetail-page',
  props: {
    playerItem: {
      type :Object,
    }
  }
}
</script>

<style>

</style>