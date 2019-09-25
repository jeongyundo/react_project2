import React, {Component} from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <TodoItem done>첫번째 할일</TodoItem>
        <TodoItem>두번째 할일</TodoItem>
      </div>
    );
  }
}

export default TodoList;