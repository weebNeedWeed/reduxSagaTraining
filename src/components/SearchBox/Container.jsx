import React, { useState } from "react";

import SearchBox from "./Index";

import { useDispatch } from "react-redux";

import { filterTaskRequest } from "./../../actions/task";

function SearchBoxContainer() {
  const [keyword, setKeyword] = useState("");

  const dispatch = useDispatch();

  const handleChangeKeyword = function (event) {
    const fieldInput = event.target.value;

    setKeyword(fieldInput);

    dispatch(filterTaskRequest(fieldInput));
  };

  return (
    <SearchBox keyword={keyword} onHandleChangeKeyword={handleChangeKeyword} />
  );
}

export default SearchBoxContainer;
