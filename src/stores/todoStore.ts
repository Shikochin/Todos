import { defineStore } from "pinia";
import type { Todo } from "@/types";

export const useStore = defineStore({
    id: "todoStore",
    state: () => ({
        todos: <Todo[]>JSON.parse(localStorage.getItem('todos') as string) || [],
        hideCheckedTodos: localStorage.getItem('hideCheckedTodos') === '1',
        addedTodo: {
            todoTitle: 'Untitled',
            todoDescription: ''
        }
    }),
    getters: {
        uncheckedTodos: (state) => state.todos.filter(todo => !todo.todoChecked)
    },
    actions: {
        getTodo(id: number): [Todo, number] {
            return [this.todos.find(todo => todo.todoId === id) as Todo, this.todos.findIndex(todo => todo.todoId === id)]
        },
        toggleHide() {
            this.hideCheckedTodos = !this.hideCheckedTodos
            localStorage.setItem('hideCheckedTodos', this.hideCheckedTodos ? '1' : '0')
        },
        updateTodo() {
            localStorage.setItem('todos', JSON.stringify(this.todos))
        },
        addTodo(todoTitle: string, todoDescription: string) {
            if (todoTitle.trim()) {
                this.todos.push({
                    todoId: Date.now(),
                    todoTitle: todoTitle.trim(),
                    todoDescription: todoDescription.trim(),
                    todoChecked: false,
                })
                this.updateTodo()
            }
        },
        checkTodo(id: number) {
            const [curTodo] = this.getTodo(id)
            curTodo!.todoChecked = !curTodo!.todoChecked
            this.updateTodo()
        },
        deleteTodo(id: number) {
            if (confirm('Confirm to delete?')) {
                const [, deletedTodoIndex] = this.getTodo(id)
                this.todos.splice(deletedTodoIndex, 1)
                this.updateTodo()
            }
        },
        pinTodo(id: number) {
            const [pinnedTodo, pinnedTodoIndex] = this.getTodo(id)
            this.todos.splice(pinnedTodoIndex, 1)
            this.todos.unshift(pinnedTodo as Todo)
            this.updateTodo()
        }
    }
});