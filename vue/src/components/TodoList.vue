<template>
<div>
                <h2>{{ message2 }}</h2>
                <ul>
                    <li v-for="(elem) in showPendingTask">
                        <h2>{{ elem.text }} 👌</h2>
                    </li>
                </ul>

                <p>Tareas del día Completadas: {{ showPendingTask.length }}</p>
            </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
