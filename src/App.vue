<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
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
      todos: [
        {id: 1, title: 'A', complete: false},
        {id: 2, title: 'B', complete: true},
        {id: 3, title: 'C', complete: false},
      ],

    }
  },

  methods: {
    // 添加
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    // 更新
    deleteTodo (id) {
      // 删除完需要接受数据进行更新
      this.todos = this.todos.filter(todo => id !== todo.id)
    },
    // 全选/全不选
    selectAll (check) {
      this.todos.forEach (todo => todo.complete = check)
    },
    // 清楚已完成任务
    clearAllComplete () {
      this.todos = this.todos.filter(todo => !todo.complete)
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
