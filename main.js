const { createApp } = Vue

const app = createApp({
	data() {
		return {
			name: 'Adrián Santana Suárez',
			message: 'Tareas Pendientes',
			arr: [],
			arr2: [],
			newTodo: { text: '', done: false },
		}
	},
	computed: {
		pendingTasks: function () {
			return this.arr.length
		},
	},
	methods: {
		addTodo() {
			this.arr.push(this.newTodo)
			this.newTodo = { text: '', done: false }
		},
		removeTodo(index) {
			this.arr.splice(index, 1)
		},
		doneTrue(index) {
			this.arr[index].done = !this.arr[index].done
		},
	},
}).mount('#app')

const todosCompleted = createApp({
	data() {
		return {
			message: 'Tareas Completadas',
		}
	},
	methods: {
        todosFinish() {
            (this.arr = this.newTodo.done === true) ? this.arr2.push(this.arr) : false
		},
	},
}).mount('#todosCompleted')
