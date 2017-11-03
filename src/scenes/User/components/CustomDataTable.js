import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import NotWorkingIcon from 'react-icons/lib/md/thumb-down';
import WorkingIcon from 'react-icons/lib/md/thumb-up';
import UserLevelIcon from 'react-icons/lib/md/pan-tool';

const CustomDataTabel = ({ tableData, onRowSelection, isSelected }) => (
  <Table
    height={`${window.innerHeight * 0.75}px`}
    fixedHeader
    onRowSelection={onRowSelection}
    selectable
    bodyStyle={{ backgroundColor: '#ffffff' }}
  >
    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
      <TableRow>
        <TableHeaderColumn colSpan="5" style={{ textAlign: 'center' }}>
          User Table
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Full Name</TableHeaderColumn>
        <TableHeaderColumn>Email ID</TableHeaderColumn>
        <TableHeaderColumn>Contact Number</TableHeaderColumn>
        <TableHeaderColumn>User Level</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
      {tableData.map((row, index) => (
        <TableRow key={index} selected={isSelected(index)}>
          <TableRowColumn>{row.fullName}</TableRowColumn>
          <TableRowColumn>{row.emailId}</TableRowColumn>
          <TableRowColumn>{row.contactNumber}</TableRowColumn>
          <TableRowColumn>
            {
              <UserLevelIcon
                size={24}
                color={
                  row.userLevel === 2 ? '#3F51B5' : row.userLevel === 1 ? '#4FC3F7' : '#FFA000'
                }
              />
            }
          </TableRowColumn>
          <TableRowColumn>
            {row.isWorking === null ? (
              undefined
            ) : row.isWorking ? (
              <WorkingIcon size={24} color="#00C853" />
            ) : (
              <NotWorkingIcon size={24} color="#DD2C00" />
            )}
          </TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default CustomDataTabel;
