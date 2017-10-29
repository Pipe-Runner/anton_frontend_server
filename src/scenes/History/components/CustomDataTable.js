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
  <Table height="670px" fixedHeader selectable>
    <TableHeader adjustForCheckbox>
      <TableRow>
        <TableHeaderColumn colSpan="9" style={{ textAlign: 'center' }}>
          History Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Order ID</TableHeaderColumn>
        <TableHeaderColumn>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn>Cusetomer Email ID</TableHeaderColumn>
        <TableHeaderColumn>Employee Name</TableHeaderColumn>
        <TableHeaderColumn>Employee ID</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Transaction Type</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.transactionId}</TableRowColumn>
          <TableRowColumn>{row.emailId}</TableRowColumn>
          <TableRowColumn>{row.fullName}</TableRowColumn>
          <TableRowColumn>{row.employeeId}</TableRowColumn>
          <TableRowColumn>{row.transactionAmount}</TableRowColumn>
          <TableRowColumn>{row.transactionTime}</TableRowColumn>
          <TableRowColumn>{row.transactionDate}</TableRowColumn>
          <TableRowColumn>{row.transactionType}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
