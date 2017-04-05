<template>
  <div class="">
    <button type="button" @click="increment(5)">Inc The Count</button>
    <br>
    <br>
    <button type="button" @click="deincrement(10)">DeInc The Count</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'increment',
      'deincrement'
    ])
  }
}
</script>

<style lang="css">
</style>
