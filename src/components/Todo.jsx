import React, { Component } from "react";

import Checkbox from "./Checkbox";
import Button from "./Button";

class Todo extends Component {
  state = {
    editing: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editing) {
      this.refs.title.focus();
      this.refs.title.select();
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const title = this.refs.title.value;

    this.props.onEdit(this.props.id, title);
    this.setState({ editing: false });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.id);
  };

  handleToggle = () => {
    this.props.onToggle(this.props.id);
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  renderDisplay = () => {
    const className = `todo${this.props.completed ? " completed" : ""}`;

    return (
      <div className={className}>
        <Checkbox checked={this.props.completed} onChange={this.handleToggle} />

        <span className="todo-title">{this.props.title}</span>

        <Button className="edit icon" icon="edit" onClick={this.handleEdit} />
        <Button
          className="delete icon"
          icon="delete"
          onClick={this.handleDelete}
        />
      </div>
    );
  };

  renderForm = () => {
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title" defaultValue={this.props.title} />
        <Button className="save icon" icon="save" type="submit" />
      </form>
    );
  };

  render() {
    return this.state.editing ? this.renderForm() : this.renderDisplay();
  }
}

export default Todo;
