import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const CustomDataTabel = ({ tableData, onRowSelection }) => (
  <Table height="670px" fixedHeader selectable onRowSelection={onRowSelection}>
    <TableHeader adjustForCheckbox>
      <TableRow>
        <TableHeaderColumn colSpan="8" style={{ textAlign: 'center' }}>
          Inventory Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Parts ID</TableHeaderColumn>
        <TableHeaderColumn>Part Type</TableHeaderColumn>
        <TableHeaderColumn>Model Number</TableHeaderColumn>
        <TableHeaderColumn>Supplier Name</TableHeaderColumn>
        <TableHeaderColumn>Vehicle</TableHeaderColumn>
        <TableHeaderColumn>Fuel Type</TableHeaderColumn>
        <TableHeaderColumn>Cost</TableHeaderColumn>
        <TableHeaderColumn>Stored At</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.partType}</TableRowColumn>
          <TableRowColumn>{row.modelNumber}</TableRowColumn>
          <TableRowColumn>{row.supplierName}</TableRowColumn>
          <TableRowColumn>{row.vehicle}</TableRowColumn>
          <TableRowColumn>{row.fuelType}</TableRowColumn>
          <TableRowColumn>{row.cost}</TableRowColumn>
          <TableRowColumn>{row.storedAt}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
