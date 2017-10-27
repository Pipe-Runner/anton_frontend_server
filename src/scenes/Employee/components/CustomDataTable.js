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
    <TableHeader adjustForCheckbox>
      <TableRow>
        <TableHeaderColumn colSpan="7" style={{ textAlign: 'center' }}>
          Inventory Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Parts ID</TableHeaderColumn>
        <TableHeaderColumn>Part Type</TableHeaderColumn>
        <TableHeaderColumn>Model Number</TableHeaderColumn>
        <TableHeaderColumn>Supplier ID</TableHeaderColumn>
        <TableHeaderColumn>Vehicle</TableHeaderColumn>
        <TableHeaderColumn>Price</TableHeaderColumn>
        <TableHeaderColumn>Stored At</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway showRowHover>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.partType}</TableRowColumn>
          <TableRowColumn>{row.modelNumber}</TableRowColumn>
          <TableRowColumn>{row.supplierId}</TableRowColumn>
          <TableRowColumn>{row.vehicleName}</TableRowColumn>
          <TableRowColumn>{row.price}</TableRowColumn>
          <TableRowColumn>{row.storedAt}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
