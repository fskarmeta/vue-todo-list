<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
// import axios from 'axios'
import {db} from '../firebase/db'

export default {
  name: 'Home',
  components: {
    Todos,
    AddTodo
  },
data() {
  return {
   todos: []
  }
},
methods: {
  async addTodo(newTodo) {
    if(newTodo) {
    const { title, completed} = newTodo
    await db.collection("ToDos").add({title: title, completed: completed})
    }
  },
      deleteTodo(id) {
      db.collection("ToDos").doc(id).delete()
    }
},
firestore: {
  todos: db.collection("ToDos")
}
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>