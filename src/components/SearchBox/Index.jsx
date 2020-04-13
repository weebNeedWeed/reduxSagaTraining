import React from "react";

import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";

function SearchBox({ keyword, onHandleChangeKeyword }) {
  return (
    <TextField
      onChange={onHandleChangeKeyword}
      variant="standard"
      type="search"
      name="search-box"
      label="Search"
      value={keyword}
    />
  );
}

SearchBox.propTypes = {
  keyword: PropTypes.string,
  onHandleChangeKeyword: PropTypes.func,
};

export default SearchBox;
