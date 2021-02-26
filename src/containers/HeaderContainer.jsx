import Header from "../components/Header";
import { connect } from "react-redux";

// render() {
//   const todos = this.store.getState();
//   return <Header todos={todos} />;
// }

//mapStateToProps нужна, когда компоненту нужны данные из хранилища
const mapStateToProps = state => {
  return {
    todos: state
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
