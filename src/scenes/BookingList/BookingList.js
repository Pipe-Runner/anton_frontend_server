import React, { Component } from 'react';
import ChangeStatusBar from './components/ChangeStatusBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class BookingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerFullName: '',
      numberPlate: '',
      employeeId: '',
      isDone: '',
      customerEmailId: '',
      customerContactNumber: '',
      selected: [],
    };
  }

  componentDidMount() {
    this.props.dispatchFetchPendingBooking();
  }

  onTextFieldChange = textField => (event, value) => {
    this.setState(prevState => ({
      ...prevState,
      [textField]: value,
    }));
  };

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  onRowSelection = selectedElements => {
    const selectedItem = this.props.bookingTableData[selectedElements[0]];
    if (selectedItem !== undefined) {
      this.setState(prevState => ({
        ...prevState,
        selected: selectedElements,
        customerFullName: selectedItem.fullName,
        customerContactNumber: selectedItem.contactNumber,
        customerEmailId: selectedItem.emailId,
        numberPlate: selectedItem.numberPlate,
        isDone: selectedItem.isDone,
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        selected: [],
        customerFullName: '',
        customerContactNumber: '',
        customerEmailId: '',
        numberPlate: '',
        isDone: '',
      }));
    }
  };

  reset = () => {
    this.setState({
      ...this.state,
      customerFullName: '',
      numberPlate: '',
      employeeId: '',
      isDone: '',
      customerEmailId: '',
      customerContactNumber: '',
      selected: [],
    });
  };

  onBookingCleared = () => {
    const index = this.state.selected[0];
    const selectedRow = this.props.bookingTableData[index];
    const data = {
      userId: selectedRow.userId,
      bookingId: selectedRow.id,
      employeeId: this.props.employeeId,
      transactionId: selectedRow.transactionId,
    };

    this.props.dispatchChangeBookingStatus(data);
  };

  render() {
    const { bookingTableData, employeeId } = this.props;
    console.log(this.props.bookingTableData);
    const {
      customerFullName,
      customerEmailId,
      customerContactNumber,
      numberPlate,
      isDone,
    } = this.state;

    return (
      <Container>
        <TableWrapper>
          {bookingTableData ? (
            <CustomDataTable
              isSelected={this.isSelected}
              onRowSelection={this.onRowSelection}
              tableData={bookingTableData}
            />
          ) : (
            undefined
          )}
        </TableWrapper>
        <Wrapper>
          <ChangeStatusBar
            selected={this.state.selected}
            customerFullName={customerFullName}
            customerContactNumber={customerContactNumber}
            customerEmailId={customerEmailId}
            numberPlate={numberPlate}
            isDone={isDone}
            employeeId={employeeId}
            onBookingCleared={this.onBookingCleared}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default BookingList;
