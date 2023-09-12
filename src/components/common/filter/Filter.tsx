import React from "react";
import { Dropdown  } from "react-bootstrap";

const Filter = () => {
  return (
    <Dropdown>
    <Dropdown.Toggle variant="transparent" id="dropdown-basic">
      Filter
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">year</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default Filter;