import React from 'react'
import TodoItem from '../TodoItem';

class TodoList extends React.Component {
  shouldComponentUpdate(nextProps, nextState) { //prop과 state 를 세팅
    return this.props.todos !== nextProps.todos; //현재 prop과 부모에서 날라온 prop 비교
  }
  render () {
    const {todos, onToggle, onRemove} = this.props;
    const todoList = todos.map(
      todo => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          onToggle={() => onToggle(todo.id)}
          onRemove={() => onRemove(todo.id)}>
          {todo.text}
        </TodoItem>
      )
    )
    return (
      <div>
        {todoList}
      </div>
    )
  }
}

export default TodoList;
