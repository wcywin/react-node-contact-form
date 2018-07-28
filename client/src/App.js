import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    async handleSubmit(e) {
        e.preventDefault();

        const { name, email, message } = this.state;

        const form = await axios.post('/api/form', {
            name,
            email,
            message
        });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Contact Form</h1>
        </header>
          <Form className="App-form" onSubmit={this.handleSubmit}>
              <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="email">Email:</Label>
                  <Input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                  />
              </FormGroup>
              <FormGroup>
                  <Label for="message">Message:</Label>
                  <Input
                      type="textarea"
                      name="message"
                      onChange={this.handleChange}
                  />
              </FormGroup>

              <Button>Submit</Button>
          </Form>
      </div>
    );
  }
}

export default App;
