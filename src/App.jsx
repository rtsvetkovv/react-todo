import React from "react";

import HeaderContainer from "./containers/HeaderContainer";
import FilterContainer from "./containers/FilterContainer";
import ListContainer from "./containers/ListContainer";
import FormContainer from "./containers/FormContainer";

const App = () => {
  return (
    //здесь stateless component App рендрит контейнеры Header, List и Form
    <main>
      <HeaderContainer />
      <FilterContainer />
      <ListContainer />
      <FormContainer />
    </main>
  );
};

export default App;
