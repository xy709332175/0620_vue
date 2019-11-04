<template>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add"/>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Header',
    // 声明接收属性: 属性名/值的类型/属性的必要性
    props: {
      // addTodo: {
      //   type: Function,
      //   required: true,
      // }
    },
    data () {
      return {
        title: '',
      }
    },

    methods: {
      // 添加功能
      add() {
        const title = this.title.trim()
        // 合法性检测
        if(title === '') return

        const todo = {
          id: Date.now(),
          // 复选框是否选中
          complete: false,
          title,
        }
        // 添加
        // this.addTodo(todo)
        // 分发自定义事件监听
        this.$emit('addTodo',todo)
        // 添加后清空输入框
        this.title = ''
      }
    }
  }
</script>

<style scoped>
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
 
</style>
