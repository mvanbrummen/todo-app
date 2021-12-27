<template>
  <div class="hello">
    <h1 class="message">{{ msg }} ({{ todoCount }})</h1>

    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
        v-model="newTodoText"
        id="new-todo"
        placeholder="E.g. Learn Vue.js"
      />
      <button id="add-btn">Add</button>
    </form>

    <ul>
      <todo-item
        v-for="(todo, idx) in todos"
        :key="idx"
        :text="todo.text"
        @remove="removeTodo(idx)"
      >
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todo",
  data() {
    return {
      newTodoText: "",
      todos: [],
    };
  },
  props: {
    msg: String,
  },
  computed: {
    todoCount() {
      return this.todos.length;
    },
  },
  methods: {
    addNewTodo() {
      this.todos.push({
        text: this.newTodoText,
      });
      this.newTodoText = "";
    },
    removeTodo(idx) {
      this.todos.splice(idx, 1);
    },
  },
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
