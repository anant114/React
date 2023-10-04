import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTodo from './components/create-todo.component';
// import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [], // Initialize an empty array to store todos
    };
  }

  // Define the addTodo function
  addTodo = (newTodo) => {
    // Update the state to include the new todo
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/" className="navbar-brand">
              MERN-Stack Todo App
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/create" className="nav-link">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Routes>
            <Route
              path="/"
              element={<TodosList todos={this.state.todos} />}
            />
            <Route
  path="/create"
  element={<CreateTodo addTodo={this.addTodo} />}
/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
