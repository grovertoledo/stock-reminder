import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

function TodoSearch(/* { searchValue, setSearchValue } */) {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
    
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };

  return /* [ */ (
    <input 
      className="TodoSearch" 
      placeholder="e.g. Arroz, Manzana"
      value={searchValue} 
      onChange={onSearchValueChange}
    />
    // <p>{searchValue}</p>
  /* ] */ 
  );
};

export { TodoSearch };
