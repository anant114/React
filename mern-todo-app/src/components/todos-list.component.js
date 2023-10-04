import React, { Component } from 'react';
import LinkedInLogo from './linkedin-logo.png'; // Import your LinkedIn logo image
import GitHubLogo from './github-logo.png'; // Import your GitHub logo image
import BlogLogo from './blog-logo.png';
class TodosList extends Component {
  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((currentTodo, index) => (
              <tr key={index}>
                <td className={currentTodo.todo_completed ? 'completed' : ''}>
                  {currentTodo.todo_description}
                </td>
                <td className={currentTodo.todo_completed ? 'completed' : ''}>
                  {currentTodo.todo_responsible}
                </td>
                <td className={currentTodo.todo_completed ? 'completed' : ''}>
                  {currentTodo.todo_priority}
                </td>
                <td>
                  <button className="btn btn-primary">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <footer className="bg-light p-4 fixed-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-1">
                <img
                  src='/profile-picture.jpeg' // Make sure the path is relative to the public directory
                  alt="Profile"
                  width="70"
                  height="90"
                  className="d-inline-block align-top rounded-circle ms-5"
                />
              </div>
              <div className="desc col-md-5 me-4 pe-5">
                <p>
                I'm Anant Sharma, results-driven Computer Science and Engineering graduate. With a passion for problem-solving, I've excelled in diverse roles, notably as an Automation Developer , Full-Stack Developer at Integer.  <br></br>I leveraged Python, Bootstrap 5, Django , React , HTML, and CSS 
                </p>
              </div>
              <div className="col-md-5 ms-5 ps-5   ">
                <div className="row">
                  <div className="col-md-1 ms-5    ">
                    <a href="linkedin.com/in/anant-sharma-5a9355194/">
                      <img
                        src={LinkedInLogo}
                        alt="LinkedIn"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                  <div className="col-md-1 ">
                    <a href="https://github.com/anant114">
                      <img
                        src={GitHubLogo}
                        alt="GitHub"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                  <div className="col-md-1">
                    <a href="https://anant114blog.netlify.app/">
                      <img
                        src={BlogLogo}
                        alt="Blog"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default TodosList;
