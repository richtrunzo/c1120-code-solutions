import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos', {method: 'GET'})
      .then(res => res.json())
      .then(data => this.setState({
        todos: data
      }))

    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newTodo)
  })
    .then(res => res.json())
    .then(data => {
      let arr = [...this.state.todos];
      arr.push(data);
      this.setState({todos: arr});
    })

     /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    */
  }

  toggleCompleted(todoId) {
    let indexFound = null;
    let completed = null;
     this.state.todos.map((todo, index) => {
       if (todo.todoId === todoId) {
         indexFound = index;
         completed = todo.isCompleted;
       }
       })
     let newStatus = {isCompleted: null};
     if (completed === false) {
       newStatus.isCompleted = true;
     } else {
       newStatus.isCompleted = false;
     }
     fetch(`/api/todos/${todoId}`, {
       method: 'PATCH',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify(newStatus)
     })
      .then(res => res.json())
      .then(data => {
        let arr = [...this.state.todos];
        arr[indexFound].isCompleted = data.isCompleted;
        this.setState({todos: arr})
      })
    }


    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */

  render() {
    console.group(this.state.todos)
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
