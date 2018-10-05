import React from "react";

import HeaderContainer from "./containers/HeaderContainer";
import ListContainer from "./containers/ListContainer";
import FormContainer from "./containers/FormContainer";

const App = () => {
  return (
    <main>
      <HeaderContainer />
      <ListContainer />
      <FormContainer />
    </main>
  );
};

export default App;
