<template>
  <div>
    <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
      <label>
        <input type="checkbox" v-model="isCheck"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Item',
    props: {
      todo: Object,
      deleteTodo: Function,
      updateTodo: Function
    },
    data () {
      return {
        bgColor: 'white',
        isShow: false
      }
    },

    computed: {
      isCheck: {
        get () {
          return this.todo.complete
        },
        set (value) {
          this.updateTodo(this.todo,value)
        }
      }
    },

    methods: {
      handleEnter (isEnter) {
        if(isEnter) {
          this.bgColor = '#cccccc'
          this.isShow = true
        } else {
          this.bgColor = 'white'
          this.isShow = false
        }
      },

      deleteItem() {
        if(confirm('确定删除?')) {
          this.deleteTodo(this.todo.id)
        }
      }
    },


  }
</script>

<style scoped>
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    /* display: none; */
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
 
</style>
