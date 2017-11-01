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
import NotDoneIcon from 'react-icons/lib/md/thumb-down';
import DoneIcon from 'react-icons/lib/md/thumb-up';

const CustomDataTabel = ({ tableData, onRowSelection, isSelected }) => (
  <Table height="670px" fixedHeader onRowSelection={onRowSelection} selectable>
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn colSpan="8" style={{ textAlign: 'center' }}>
          Pending Booking
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Booking ID</TableHeaderColumn>
        <TableHeaderColumn>Customer Name</TableHeaderColumn>
        <TableHeaderColumn>Customer ID</TableHeaderColumn>
        <TableHeaderColumn>Contact Number</TableHeaderColumn>
        <TableHeaderColumn>Date</TableHeaderColumn>
        <TableHeaderColumn>Time</TableHeaderColumn>
        <TableHeaderColumn>Number Plate</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
      {tableData.map((row, index) => (
        <TableRow key={index} selected={isSelected(index)}>
          <TableRowColumn>{row.id}</TableRowColumn>
          <TableRowColumn>{row.fullName}</TableRowColumn>
          <TableRowColumn>{row.userId}</TableRowColumn>
          <TableRowColumn>{row.contactNumber}</TableRowColumn>
          <TableRowColumn>{moment(row.date).format('DD-MM-YYYY')}</TableRowColumn>
          <TableRowColumn>{moment(row.startTime, 'HH:MM:SS').format('hh:MM a')}</TableRowColumn>
          <TableRowColumn>{row.numberPlate}</TableRowColumn>
          <TableRowColumn>
            {row.isDone ? (
              <DoneIcon size={24} color="#00C853" />
            ) : (
              <NotDoneIcon size={24} color="#DD2C00" />
            )}
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
