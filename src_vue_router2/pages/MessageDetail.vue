<template>
  <ul>
    <li>ID:{{id}} -- {{$route.params.id}}</li>
    <li>TITLE:{{detail.title}}</li>
    <li>CONTENT:{{detail.content}}</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  const allDetails = [
    {id: 1, title: 'message001', content: 'message content001'},
    {id: 3, title: 'message003', content: 'message content003'},
    {id: 5, title: 'message005', content: 'message content005'},
  ]
  export default {
    
    props: ['id'],

    data () {
      return {
        detail: {}
      }
    },

    mounted () {
      setTimeout(() => {
        const id = this.id * 1
        const detail = allDetails.find(detail => detail.id === id)
        this.detail = detail
      }, 1000);
    },

    watch: {
      $route (value) {
        setTimeout(() => {
          const id = value.params.id * 1
          const detail = allDetails.find(detail => detail.id === id)
          this.detail = detail
        }, 1000);
      }
    }

  }
</script>

<style scoped>

 
</style>
