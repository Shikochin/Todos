import { defineStore } from 'pinia'
import type Todo from '@/types'
import { nanoid } from 'nanoid'

export const useStore = defineStore({
  id: 'todoStore',
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos') as string) as Todo[] | null ?? [],
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
    getTodo (id: string): [Todo, number] {
      const todoIndex = this.todos.findIndex(todo => todo.todoId === id)
      return [this.todos[todoIndex], todoIndex]
    },
    toggleHide () {
      this.hideCheckedTodos = !this.hideCheckedTodos
      localStorage.setItem('hideCheckedTodos', this.hideCheckedTodos ? '1' : '0')
    },
    updateTodo () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    addTodo () {
      if (this.addedTodo.todoTitle.trim() !== '') {
        this.todos.push({
          todoId: nanoid(),
          todoCreatedTime: Date.now(),
          todoTitle: this.addedTodo.todoTitle.trim(),
          todoDescription: this.addedTodo.todoDescription.trim(),
          todoChecked: false
        })
        this.addedTodo.todoTitle = 'Untitled'
        this.addedTodo.todoDescription = ''
      }
    },
    checkTodo (id: string) {
      const [checkedTodo] = this.getTodo(id)
      checkedTodo.todoChecked = !checkedTodo.todoChecked
    },
    deleteTodo (id: string) {
      if (confirm('Confirm to delete?')) {
        const [, deletedTodoIndex] = this.getTodo(id)
        this.todos.splice(deletedTodoIndex, 1)
      }
    },
    pinTodo (id: string) {
      const [pinnedTodo, pinnedTodoIndex] = this.getTodo(id)
      this.todos.splice(pinnedTodoIndex, 1)
      this.todos.unshift(pinnedTodo)
    }
  }
})
