import React from 'react'
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

// const initalTodos = new Array(500).fill(0).map(
//   (foo, index) => ({id: index, text: `일정 ${index}`, done: false})
// );

class App extends React.Component {
  render () {
    return (
      <PageTemplate>
        {/*<TodoInput onChange={handleChange} onInsert={handleInsert} value={input}>*/}
        <TodoInputContainer />
        {/*<TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />*/}
        <TodoListContainer/>
      </PageTemplate>
    )
  }
}

export default App;
