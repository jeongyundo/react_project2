import React, {Component} from 'react';
import PageTemplate from './PageTemplate';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class App extends Component {
    state = {
      input: '',
  };

  onChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({
      input: value,
    });
  };

  render() {
    const { input } = this.state;
    const { onChangeHandler } = this;

    return (
      <PageTemplate>
        <InputTodo onChange={onChangeHandler} value={input}/>
        <TodoList/>
      </PageTemplate>
    );
  }
}

export default App;