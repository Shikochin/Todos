import { defineStore } from "pinia";

interface Todo {
    todoId: number,
    todoChecked: boolean,
    todoTitle: string,
    todoDescription: string
}

export const useStore = defineStore({
    id: "todoStore",
    state: () => ({
        todos: JSON.parse(localStorage.getItem('todos') as string) || [],
        hideCheckedTodos: localStorage.getItem('hideCheckedTodos') === '1',
        cacheTodos: {
            addedTodo: {
                todoTitle: 'Untitled',
                todoDescription: ''
            }
        }
    }),
    getters: {
        uncheckedTodos: (state) => state.todos.filter((todo: { todoChecked: boolean }) => !todo.todoChecked)
    },
    actions: {
        currentTodo(id: number): [Todo, number] {
            return [this.todos.find((todo: { todoId: number }) => todo.todoId === id), this.todos.findIndex((todo: { todoId: number }) => todo.todoId === id)]
        },
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
            }
        },
        checkTodo(id: number) {
            const [curTodo] = this.currentTodo(id)
            curTodo.todoChecked = !curTodo.todoChecked
        },
        deleteTodo(id: number) {
            if (confirm(`Confirm to delete?`)) {
                const [, curTodoIndex] = this.currentTodo(id)
                this.todos.splice(curTodoIndex, 1)
            }
        },
        pinTodo(id: number) {
            const [pinnedTodo, pinnedTodoIndex] = this.currentTodo(id)
            this.todos.splice(pinnedTodoIndex, 1)
            this.todos.unshift(pinnedTodo)
        }
    }
});