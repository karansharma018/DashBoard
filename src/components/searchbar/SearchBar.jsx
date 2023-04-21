import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = ({ search, setsearch, onsubmit }) => {
  return (
    <Form
      onSubmit={onsubmit}
      inline="true"
      className="d-flex justify-content-around container"
    >
      <FormControl
        type="text"
        value={search}
        onChange={setsearch}
        placeholder="Search"
        className="mr-sm-2"
      />
      <Button variant="outline-info ms-3" type="submit">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
