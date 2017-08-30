import React, { Component } from 'react'
import Axois from 'axios'
import './style.css'

class QuoteAPI extends Component{
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleSubmit(e) {
    // Stop browser from submitting the form.
    e.preventDefault();

    // Validate here or directly when setting state.
    // Then send a POST request to your endpoint.
    axios
      .post('https://reqres.in/api/users', {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
}

export default QuoteAPI
