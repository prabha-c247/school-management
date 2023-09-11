// import React, { ChangeEvent } from "react";
import { Form, FormControl, Button,InputGroup } from "react-bootstrap";
import { BsSearch } from 'react-icons/bs';
//css
import "./SearchBar.scss";

// interface SearchBarProps {
//   handleSearch: (query: string) => void;
// }
const SearchBar =()=>{
// const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   handleSearch(event.target.value);
  // };

  return (
    // <Form >
    //   <div className="form-inline rounded">
    //   <InputGroup className="rounded">
    //     <FormControl
    //       type="text"
    //       placeholder="Search"
    //       className="mr-sm-2"
    //       // value={searchValue}
    //       // onChange={handleInputChange}
    //     />
    //       <InputGroup.Append>
    //     <Button type="submit" variant="outline-success">
    //       <BsSearch />
    //     </Button>
    //   </InputGroup.Append>       
    //     </InputGroup>
    //   </div>
    // </Form>
    <div>
    {/* <Form className="">    */}
       {/* <Form onSubmit={handleSubmit}> */}
      <InputGroup className="rounded">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          // value={searchValue}
          // onChange={handleInputChange}
        />
        <Button type="submit" variant="outline-success">
          <BsSearch />
        </Button>
      </InputGroup>      
    {/* </Form> */}
    </div>
  );
};

export default SearchBar;
