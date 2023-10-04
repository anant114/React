import React, { Component } from 'react';
import LinkedInLogo from './linkedin-logo.png'; // Import your LinkedIn logo image
import GitHubLogo from './github-logo.png'; // Import your GitHub logo image
import BlogLogo from './blog-logo.png';
export default class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false
    }
  }
  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }
  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: false,
    };

    // Call the addTodo function passed from props
    this.props.addTodo(newTodo);

    // Reset the form fields
    this.setState({
      todo_description: '',
      todo_responsible: '',
      todo_priority: '',
      todo_completed: false,
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create New Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description: </label>
            <input type="text"
              className="form-control"
              value={this.state.todo_description}
              onChange={this.onChangeTodoDescription}
            />
          </div>
          <div className="form-group">
            <label>Responsible: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.todo_responsible}
              onChange={this.onChangeTodoResponsible}
            />

            <br></br>
          </div>
          <label>Priority: </label>
       

          <div className="form-group">
              <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === 'Low'}
                onChange={this.onChangeTodoPriority}
              />
              
              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === 'Medium'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === 'High'}
                onChange={this.onChangeTodoPriority}
              />
              <label className="form-check-label">High</label>
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>
        </form>  {/* Footer */}
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