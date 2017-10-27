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
        <TableHeaderColumn>Order ID</TableHeaderColumn>
        <TableHeaderColumn>Employee Name</TableHeaderColumn>
        <TableHeaderColumn>Employee ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>ContactNumber</TableHeaderColumn>
        <TableHeaderColumn>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway showRowHover>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.name}</TableRowColumn>
          <TableRowColumn>{row.employeeId}</TableRowColumn>
          <TableRowColumn>{row.username}</TableRowColumn>
          <TableRowColumn>{row.contactNumber}</TableRowColumn>
          <TableRowColumn>{row.transactionId}</TableRowColumn>
          <TableRowColumn>{row.amount}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
