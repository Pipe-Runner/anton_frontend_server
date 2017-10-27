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
        <TableHeaderColumn colSpan="5" style={{ textAlign: 'center' }}>
          Inventory Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Transaction ID</TableHeaderColumn>
        <TableHeaderColumn>Payment Method</TableHeaderColumn>
        <TableHeaderColumn>Amount</TableHeaderColumn>
        <TableHeaderColumn>Transaction Type</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox deselectOnClickaway showRowHover>
      {tableData.map((row, index) => (
        <TableRow key={index}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.paymentMethod}</TableRowColumn>
          <TableRowColumn>{row.amount}</TableRowColumn>
          <TableRowColumn>{row.transactionType}</TableRowColumn>
          <TableRowColumn>{row.name}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
