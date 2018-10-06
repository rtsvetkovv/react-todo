import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

import Filter from "../components/Filter";

const mapStateToProps = state => {
  return {
    activeFilter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetFilter: filter => dispatch(setFilter(filter))
  };
};

const FilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilterContainer;
