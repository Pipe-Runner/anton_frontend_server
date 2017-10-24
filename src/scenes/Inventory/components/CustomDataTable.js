import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const CustomDataTabel = ({ tableData }) => (
  <Table height="670px" fixedHeader selectable multiSelectable>
    <TableHeader displaySelectAll adjustForCheckbox enableSelectAll>
      <TableRow>
        <TableHeaderColumn colSpan="8" style={{ textAlign: 'center' }}>
          Inventory Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Index</TableHeaderColumn>
        <TableHeaderColumn>Parts ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Model Number</TableHeaderColumn>
        <TableHeaderColumn>Supplier</TableHeaderColumn>
        <TableHeaderColumn>Manufacturer</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Location</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway showRowHover>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{index}</TableRowColumn>
          <TableRowColumn>{row.partId}</TableRowColumn>
          <TableRowColumn>{row.name}</TableRowColumn>
          <TableRowColumn>{row.modelNumber}</TableRowColumn>
          <TableRowColumn>{row.supplier}</TableRowColumn>
          <TableRowColumn>{row.manufacturer}</TableRowColumn>
          <TableRowColumn>{row.price}</TableRowColumn>
          <TableRowColumn>{row.location}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
