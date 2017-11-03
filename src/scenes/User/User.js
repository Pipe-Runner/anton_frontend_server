import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ChangeUserStatusBar from './components/ChangeUserStatusBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: '',
      userId: '',
      userLevel: '',
      isWorking: '',
      selected: [],
      isChanged: false,
    };
  }

  componentDidMount() {
    this.props.dispatchFetchUser();
  }

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  onChangeTextField = textField => (event, value) => {
    this.setState({ ...this.state, [textField]: value }, () => {
      const selectedItem = this.props.userTableData[this.state.selected[0]];
      let isChanged = false;
      if (this.state.userLevel !== selectedItem.userLevel) {
        isChanged = true;
      }
      if (this.state.isWorking !== selectedItem.isWorking) {
        isChanged = true;
      }
      this.setState({ ...this.state, isChanged });
    });
  };

  onReset = () => {
    const selectedItem = this.props.userTableData[this.state.selected[0]];
    this.setState({
      ...this.state,
      isWorking: selectedItem.isWorking,
      userLevel: selectedItem.userLevel,
      isChanged: false,
    });
  };

  onRowSelection = selectedElements => {
    const selectedItem = this.props.userTableData[selectedElements[0]];
    if (selectedItem !== undefined) {
      this.setState({
        ...this.state,
        selected: selectedElements,
        employeeId: selectedItem.employeeId,
        userId: selectedItem.id,
        isWorking: selectedItem.isWorking,
        userLevel: selectedItem.userLevel,
        contactNumber: selectedItem.contactNumber,
        fullName: selectedItem.fullName,
        isChanged: false,
      });
    } else {
      this.setState({
        employeeId: '',
        userId: '',
        userLevel: '',
        isWorking: '',
        contactNumber: '',
        fullName: '',
        selected: [],
        isChanged: false,
      });
    }
  };

  onChangeUserStatus = () => {
    this.props.dispatchChangeUserStatus(
      {
        userId: this.state.userId,
        employeeId: this.state.employeeId,
        userLevel: this.state.userLevel,
        isWorking: this.state.isWorking,
      },
      this.props.userId
    );
  };

  onMakeEmployee = () => {
    this.props.dispatchMakeEmployee({
      userId: this.state.userId,
      contactNumber: this.state.contactNumber,
      fullName: this.state.fullName,
    });
  };

  render() {
    const { userTableData } = this.props;
    const { userId, employeeId, userLevel, isWorking } = this.state;

    return (
      <Container>
        <TableWrapper>
          {userTableData ? (
            <CustomDataTable
              tableData={userTableData}
              isSelected={this.isSelected}
              onRowSelection={this.onRowSelection}
            />
          ) : (
            undefined
          )}
        </TableWrapper>
        <Wrapper>
          <SearchBar onSearch={() => {}} />
          <ChangeUserStatusBar
            userId={userId !== null ? userId : ''}
            employeeId={employeeId !== null ? employeeId : ''}
            userLevel={userLevel}
            isWorking={isWorking}
            onMakeEmployee={this.onMakeEmployee}
            onReset={this.onReset}
            onChangeUserStatus={this.onChangeUserStatus}
            onChangeTextField={this.onChangeTextField}
            isChanged={this.state.isChanged}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default Inventory;
