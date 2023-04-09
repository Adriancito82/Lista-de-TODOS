<template>
  <div id="app">
    <h1>Bienvenido {{ name }}</h1>
    <h2>{{ message }}</h2>

    <input
      id="add"
      type="text"
      v-model="newTodo.text"
      @keydown.enter.prevent="addTodo"
    />

    <button id="addButton" @click="addTodo">Añadir tarea</button>

    <p v-if="arr.length === 0">No hay tareas pendientes</p>

    <ul v-else>
      <li
        :class="[elem.done === true ? 'green' : 'red']"
        v-for="(elem, index) in arr"
        :key="index"
      >
        <h3>{{ elem.text }} - {{ elem.done }}</h3>
        <button id="finalizar" @click="doneTrue(index)">Finalizar</button>
        <button id="eliminar" @click="removeTodo(index)">Eliminar</button>
      </li>
    </ul>

    <p>Tareas del Día: {{ pendingTasks }}</p>

        <TodoList />
  </div>
</template>

<script>
 import TodoList from './components/TodoList.vue'

export default {
    name: 'app',
    components: {
       TodoList,
    }

}

</script>

<style>
</style>
