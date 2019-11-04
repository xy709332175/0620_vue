<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo" :updataTodo="updateTodo"/>
      <Footer :todos="todos" :selectAll="selectAll" :clearAllComplete="clearAllComplete"/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  import List from './components/List'
  import Footer from './components/Footer'

  export default {

    data () {
      return {
        // 更能有多个数据
        todos: [],
        xxx: 2
      }
    },

    // 异步操作,读取数据,但是还没有存储,刷新就没有
    mounted () {
      setTimeout( () => {
        // 读取local中保存的todos数据
        const todos = JSON.parse(localStorage.getItem('todos_key') || '[]')
        // 更新数据
        this.todos = todos
      },1000)
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
