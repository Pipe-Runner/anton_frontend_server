import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import moment from 'moment';

const CustomDataTabel = ({ tableData }) => (
  <Table height="670px" fixedHeader selectable={false}>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn colSpan="7" style={{ textAlign: 'center' }}>
          History Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn>Cusetomer Email ID</TableHeaderColumn>
        <TableHeaderColumn>Employee Name</TableHeaderColumn>
        <TableHeaderColumn>Employee ID</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Transaction Type</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} deselectOnClickaway>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.transactionId}</TableRowColumn>
          <TableRowColumn>{row.userEmailId}</TableRowColumn>
          <TableRowColumn>{row.employeeName}</TableRowColumn>
          <TableRowColumn>{row.employeeId}</TableRowColumn>
          <TableRowColumn>&#x20b9; {row.transactionAmount}</TableRowColumn>
          <TableRowColumn>{moment(row.transactionDate).format('DD-MM-YYYY')}</TableRowColumn>
          <TableRowColumn>{row.transactionType}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
