export interface Todo {
  readonly todoId: string
  readonly todoCreatedTime: number
  todoTitle: string
  todoDescription: string
  todoChecked: boolean
}