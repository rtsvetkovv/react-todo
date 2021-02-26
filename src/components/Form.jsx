import React, { Component } from 'react';

import Button from './Button';

class Form extends Component {
  state = {
    title: '',
  };

  store = this.props.store;

  handleSubmit = (event) => {
    event.preventDefault();

    const title = this.state.title;

    if (title) {
      this.props.onAdd(title);
      this.setState({ title: '' });
    }
  };

  handleChange = (event) => {
    const title = event.target.value;

    this.setState({ title });
  };

  render() {
    const disabled = !this.state.title;

    return (
      <form className="todo-add-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.title}
          placeholder="Что нужно сделать?"
          onChange={this.handleChange}
        />

        <Button type="submit" disabled={disabled}>
          Добавить
        </Button>
      </form>
    );
  }
}

export default Form;
