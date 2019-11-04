<template>
<!-- 鼠标移入移出的CSS效果 -->
  <li :style="{background: bgColor}" @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Item',
    props: {
      todo: Object,
      updateTodo: Function
    },
    data () {
      return {
        // 初始状态
        bgColor: 'white',
        isShow: false
      }
    },
    // 计算属性: 计算是否有已被勾选项 并更新
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
      // 移入移出判断
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
          // this.deleteTodo(this.todo.id)
          // 通过全局事件总线分发事件
          this.$eventBus.$emit('deleteTodo',this.todo.id)
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
