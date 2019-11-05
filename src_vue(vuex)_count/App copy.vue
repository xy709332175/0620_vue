<template>
  <div>
    <p>clicked: {{$store.state.count}} times, count is {{$store.getters.evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>

  export default {

    // copmuted: {
    //   count () {
    //     return this.$store.state.count
    //   },
    //   evenOrOdd () {
    //     return this.$store.getters.evenOrOdd
    //   }
    // },

    methods: {
      increment() {
        this.$store.commit('INCREMENT')
      },
      decrement() {
        this.$store.commit('DECREMENT')
      },
      incrementIfOdd() {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync() {
        this.$store.dispatch('incrementAsync')
      }
    },
  }
</script>

<style>
</style>
