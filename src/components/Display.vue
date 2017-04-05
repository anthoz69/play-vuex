<template>
  <div>
    <h1>Count is: {{ getCounter }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getCounter'
    ])
  }
}
</script>

<style lang="css">
</style>
