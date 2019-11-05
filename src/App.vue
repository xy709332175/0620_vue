<template>
  <div>
    <p>clicked: {{count}} times, count is {{evenOrOdd}}</p>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex'

  export default {


    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },

    methods: {
      ...mapMutations({
        increment: 'INCREMENT',
        decrement: 'DECREMENT'
      }),
      ...mapActions(['incrementIfOdd','incrementAsync'])
    }


    // methods: {
    //   increment() {
    //     this.$store.commit('INCREMENT')
    //   },
    //   decrement() {
    //     this.$store.commit('DECREMENT')
    //   },
    //   incrementIfOdd() {
    //     this.$store.dispatch('incrementIfOdd')
    //   },
    //   incrementAsync() {
    //     this.$store.dispatch('incrementAsync')
    //   }
    // },
  }
</script>

<style>
</style>
