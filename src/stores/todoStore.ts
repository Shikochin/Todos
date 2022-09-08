import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "todoStore",
    state: () => ({
        todos: localStorage.getItem('todos')
            ? JSON.parse(localStorage.getItem('todos') as string)
            : [],
        hideCheckedTodos: localStorage.getItem('hideCheckedTodos') === '1'
    }),
    actions: {
        toggleHide() {
            this.hideCheckedTodos = !this.hideCheckedTodos
            localStorage.setItem('hideCheckedTodos', this.hideCheckedTodos ? '1' : '0')
        },
        updateTodo() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        addTodo(todoTitle: string, todoDescription: string) {
            if (todoTitle) {
                this.todos.push({
                    todoId: Date.now(),
                    todoChecked: false,
                    todoTitle,
                    todoDescription
                })
                this.updateTodo()
            }
        },
        checkTodo(id: number) {
            for (const todo of this.todos) {
                if (todo.todoId === id) {
                    todo.todoChecked = !todo.todoChecked
                    break
                }
            }
            this.updateTodo()
        },
        deleteTodo(id: number) {
            for (const [index, todo] of this.todos.entries()) {
                if (todo.todoId === id) {
                    this.todos.splice(index, 1)
                    break
                }
            }
            this.updateTodo()
        },
        pinTodo(id: number) {
            for (const [index, todo] of this.todos.entries()) {
                if (todo.todoId === id) {
                    const deletedTodo = this.todos.splice(index, 1)[0]
                    this.todos.unshift(deletedTodo)
                    break
                }
            }
            this.updateTodo()
        }
    }
});