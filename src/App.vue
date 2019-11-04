<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- <Header :addTodo="addTodo"/> -->
      <!-- 通过自定义事件实现添加功能 -->
      <!-- 在父组件中给子组件对象绑定自定义事件监听 -->
      <!-- <Header @addTodo="addTodo"/> -->
      <Header ref="header"/>
      <List :todos="todos" :updateTodo="updateTodo"/>
      <Footer>
        <input type="checkbox" v-model="isCheckAll" slot="left"/>
        <span slot="center">
          <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
        </span>
        <button class="btn btn-danger" v-show="completeSize>0" @click="clearAllComplete" slot="right">清除已完成任务</button>
      </Footer>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'

  export default {

    data () {
      return {
        // 可能有多个数据
        todos: [],
        xxx: 2
      }
    },

    computed: {
      completeSize () {
        return this.todos.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0)
      },

      isCheckAll: {
        get () {
          return this.todos.length === this.completeSize && this.completeSize > 0 
        },
        set (value) {
          this.selectAll(value)
        }
      }
    },

    // 异步操作,读取数据,但是还没有存储,刷新就没有
    mounted () {

      // 给header组件对象绑定自定义事件监听
      this.$refs.header.$on('addTodo',this.addTodo)
      // 通过事件总线对象绑定事件监听
      this.$eventBus.$on('deleteTodo',this.deleteTodo)

      setTimeout( () => {
        // 读取local中保存的todos数据
        const todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
        // 更新数据
        this.todos = todos
      },1000)
    },
    
    // 在组件消失前,解绑事件监听
    beforeDestroy () {
      this.$eventBus.$off('deleteTodo')
    },

    // 深度监视  deep:true
    watch: {
      todos: {
        // 深度监视
        deep: true,
        handler: (value) => {  //todos的最新值
          //将数据保存到本地 
          localStorage.setItem('todos_key', JSON.stringify(value))
        }
      }
    },

    methods: {
      // 添加
      addTodo (todo) {
        this.todos.unshift(todo)
      },
      // 更新
      deleteTodo (id) {
        // 删除完需要接收数据进行更新
        this.todos = this.todos.filter(todo => id !== todo.id)
      },
      // 全选/全不选
      selectAll (check) {
        this.todos.forEach (todo => todo.complete = check)
      },
      // 清楚已完成任务
      clearAllComplete () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      // 更新todo的complete的值
      updateTodo (todo,isCheck) {
        todo.complete = isCheck
      }

    },

    components: {
      Header,
      List,
      Footer
    }
  }
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
