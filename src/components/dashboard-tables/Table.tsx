import React from "react";
import { Table,Image } from "react-bootstrap";

export const TotalBalance = () => {
  return (
   <div>
    <h6>Transition History</h6>
     <Table striped bordered hover variant="danger">
      <thead>
        <tr>         
          <th>Withdraw Amount</th>
          <th>Date/Time</th>
        </tr>
      </thead>
      <tbody>
        <tr>          
          <td>$87,689</td>
          <td>20/03/2023/12.00 am</td>
        </tr>
      </tbody>
    </Table>
   </div>
  );
};

export const CourseTransitionHistory = () => {
  return (
    <Table striped bordered hover variant="primary">
      <thead>
        <tr>         
          <th colSpan={2}>Buyer Name/Image</th>
          <th>Sailed Plan Name</th>
          <th>Category Name</th>
          <th>Date/Time</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Image src={require("../../assets/images/usericon.png")} alt="Buyer" width={50}/></td>
          <td>St. Mary H.S. School</td>
          <td>Silver Plan</td>
          <td>@Leadership</td>
          <td>20-03-2023 12:00 Am</td>
          <td>@$10,000</td>
        </tr>
      </tbody>
    </Table>
  )
};
export const MostSellingPlan = () => {
  return (
   <div>
    <div>Test Name :Platinum Plan  Total Purchased:<b>100k+</b>  Total Earning : <b>$73,828,790</b></div>
   </div>
  );
};


export const OverallSelling = () => {
  return (
    <Table striped bordered hover variant="secondary" >
    <thead>
      <tr>         
        <th>Test Name</th>
        <th>Total sell</th>
        <th>Total Earning</th>
      </tr>
    </thead>
    <tbody>
      <tr>          
        <td>Single Use Plan</td>
        <td>1029837</td>
        <td>$44,234,575</td>
      </tr>
      <tr>          
        <td>Single Use Plan</td>
        <td>1029837</td>
        <td>$44,234,575</td>
      </tr>
      <tr>          
        <td>Single Use Plan</td>
        <td>1029837</td>
        <td>$44,234,575</td>
      </tr>
      <tr>          
        <td>Single Use Plan</td>
        <td>1029837</td>
        <td>$44,234,575</td>
      </tr>

      <tr>          
        <td>Single Use Plan</td>
        <td>1029837</td>
        <td>$44,234,575</td>
      </tr>
      <tr>          
        <td>Single Use Plan</td>
        <td>1029837</td>
        <td>$44,234,575</td>
      </tr>   
    </tbody>
  </Table>
  );
};

