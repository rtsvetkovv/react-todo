import { connect } from "react-redux";

import { deleteTodo, editTodo, toggleTodo } from "../redux/actions";

import List from "../components/List";
// <Старый код>
//   todos={this.context.getState()}
//   onDelete={id => this.store.dispatch(deleteTodo(id))}
//   onToggle={id => this.store.dispatch(toggleTodo(id))}
//   onEdit={(id, title) => this.store.dispatch(editTodo(id, title))}
// </Старый код>

//Описывает свойства для компонента <List />
// Предназначена для данных. Для массива с задачами
//Сопоставить состояние со свойствами
const mapStateToProps = state => {
  return {
    //в качестве свойств у объекта указываются свойства у презинтационного компонента
    //для которого генерируется контейнер
    todos: state // todos: state то же самое, что и todos={this.context.getState()}, только указано через объект
  };
};

//Предназначена для "сопоставления" событий компонента с действиями изменяющими состояние
//Сопоставить функцию dispatch у хранилища (store.dispatch()) со свойствами
const mapDispatchToProps = dispatch => {
  return {
    //в качестве свойств указываются названия свойств у компонента
    // в качестве значений функции
    onDelete: id => dispatch(deleteTodo(id)),
    onToggle: id => dispatch(toggleTodo(id)),
    onEdit: (id, title) => dispatch(editTodo(id, title))
  };
};
//ПО СУТИ ДЕЛА МЫ ВЫПОЛНЯЕМ ТО ЖЕ САМОЕ, ЧТО И ЗАКОМЕНТИРОВАНО ВЫШЕ, НО В ДРУГОМ ВИДЕ

//результатом вызова функции connect будет другая функция
const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
// Принимает в качестве аргумента презентационный компонент

export default ListContainer;
