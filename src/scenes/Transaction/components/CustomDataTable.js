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
  <Table
    height={`${window.innerHeight * 0.75}px`}
    fixedHeader
    selectable
    bodyStyle={{ backgroundColor: '#ffffff' }}
  >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn colSpan="8" style={{ textAlign: 'center' }}>
          Transaction Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn>Payment Method</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Transaction Type</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Contact Number</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.paymentMethod}</TableRowColumn>
          <TableRowColumn>{row.amount}</TableRowColumn>
          <TableRowColumn>{row.transactionType}</TableRowColumn>
          <TableRowColumn>{row.cardOwnerName}</TableRowColumn>
          <TableRowColumn>{row.contactNumberOnCard}</TableRowColumn>
          <TableRowColumn>{moment(row.date).format('DD-MM-YY')}</TableRowColumn>
          <TableRowColumn>{row.time}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
