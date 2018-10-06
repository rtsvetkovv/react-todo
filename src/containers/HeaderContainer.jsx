import Header from "../components/Header";

import { connect } from "react-redux";
// <Старый код>
//   render() {
//     const todos = this.store.getState();
//     return <Header todos={todos} />;
//   }
// </Старый код>

//mapStateToProps нужна, когда компоненту нужны данные из хранилища
const mapStateToProps = state => {
  return {
    //называем так же как и пропс, который принимает компонент Header
    todos: state.todos
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
