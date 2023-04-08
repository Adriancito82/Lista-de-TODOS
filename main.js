const { createApp } = Vue

const app = createApp({
	data() {
		return {
			name: 'Adrián Santana Suárez',
            message: 'Tareas Pendientes',
            message2: 'Tareas del día Completadas',
			arr: [],
			newTodo: { text: '', done: false },
		}
	},
	computed: {
		pendingTasks: function () {
			return this.arr.length
        },
        showPendingTask: function () {
            let arr2 = this.arr.filter((elem) => {
                elem.done === false
            })
            return arr2

        },
        showTask: function () {
            return this.arr
        }
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
