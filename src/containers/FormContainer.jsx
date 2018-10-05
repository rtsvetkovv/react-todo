import React from "react";

import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

import Form from "../components/Form";

// mapDispatchToProps нужна, когда нужны взаимодействия с хранилищем (dispatch)
const mapDispatchToProps = dispatch => {
  // return <Form onAdd={this.handleAdd} /> -- было
  return {
    onAdd: title => dispatch(addTodo(title))
  };
};

const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);

export default FormContainer;
