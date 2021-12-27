<template>
  <div class="hello">
    <h1 class="message">{{ msg }} ({{ getTodoCount() }})</h1>

    <form v-on:submit.prevent="onSubmitTodo">
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
        v-for="(todo, idx) in getTodos()"
        :key="idx"
        :text="todo.text"
        @remove="onRemoveTodo(idx)"
      >
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      newTodoText: "",
    };
  },
  props: {
    msg: String,
  },
  computed: {},
  methods: {
    ...mapActions(["addTodo", "removeTodo"]),
    ...mapGetters(["getTodoCount", "getTodos"]),
    onSubmitTodo() {
      this.addTodo(this.newTodoText);
      this.newTodoText = "";
    },
    onRemoveTodo(idx) {
      this.removeTodo(idx);
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
