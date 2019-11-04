<template>
    <ul class="todo-main">
      <!-- 遍历添加多个Item 并添加删除,更新功能-->
      <Item v-for="todo in todos" :key="todo.id" :todo="todo" :updateTodo="updateTodo"/>
    </ul>
</template>

<script type="text/ecmascript-6">
import Item from './Item'
  export default {
    name: 'List',
    // 声明接收的标签属性: 属性名 使接收到的属性会成为当前组件对象的属性: this.todos
    props: ['todos','updateTodo'],
    components: {
      Item,
    }
  }
</script>

<style scoped>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
 
</style>
