import axios from "axios";

export const REQUEST_TODOS = "REQUEST_TODOS";
export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";

//getTodos является функцией, которая возвращает другую функцию или thunk
export const getTodos = () => {
  //возвращаем другую функцию
  return dispatch => {
    dispatch({
      type: REQUEST_TODOS
    });
    return axios
      .get("http://localhost:5000/api/todos") //в качестве ответа от сервера с помощью метода fetch мы получаем объект
      .then(response => response.data) //переводим объект в массив
      .then(todos =>
        dispatch({
          type: GET_TODOS,
          todos
        })
      );
  };
};

/**
 * ADD TODO
 */

export const addTodo = title => {
  return axios
    .post("http://localhost:5000/api/todos", { title: title })
    .then(response => response.data)
    .then(todo => ({
      type: ADD_TODO,
      todo
    }));
};

/**
 * DELETE TODO
 */

export const deleteTodo = id => {
  return axios
    .delete(`http://localhost:5000/api/todos/${id}`)
    .then(response => ({
      type: DELETE_TODO,
      id
    }));
};

/**
 * TOGGLE TODO
 */

export const toggleTodo = id => {
  return axios
    .patch(`http://localhost:5000/api/todos/${id}`)
    .then(response => response.data)
    .then(todo => ({
      type: TOGGLE_TODO,
      todo
    }));
};

/**
 * EDIT TODO
 */

export const editTodo = (id, title) => {
  return axios
    .put(`http://localhost:5000/api/todos/${id}`, { title: title })
    .then(response => response.data)
    .then(todo => ({
      type: EDIT_TODO,
      todo
    }));
};
