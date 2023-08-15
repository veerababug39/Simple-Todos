// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItems, deleteTodo} = props
  const {title, id} = todoItems
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p className="paragraph">{title}</p>
      <button type="button" onClick={onDeleteTodo} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
