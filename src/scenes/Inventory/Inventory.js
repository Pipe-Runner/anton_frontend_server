import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import AddPartToBillBar from './components/AddPartToBillBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerEmailId: '',
      customerEmailIdError: undefined,
      customerContactNumber: '',
      customerContactNumberError: undefined,
      selected: [],
      cart: [],
      filter: {},
    };
  }

  onTextFieldChange = textField => (event, value) => {
    this.setState({
      ...this.state,
      [textField]: value,
      [textField + 'Error']: undefined,
    });
  };

  componentDidMount() {
    this.props.dispatchFetchInventory();
  }

  isSelected = index => {
    return this.state.selected.indexOf(index) !== -1;
  };

  onRowSelection = selectedElements => {
    if (selectedElements.length > 10) {
      this.props.dispatchCartFullError();
    } else {
      let cart = [];
      selectedElements.map(item => {
        cart = [...cart, this.props.inventoryTableData[item]];
        return cart;
      });
      this.setState({ ...this.state, selected: selectedElements, cart: cart });
    }
  };

  reset = () => {
    this.setState({
      ...this.state,
      selected: [],
      cart: [],
    });
  };

  onCheckOut = () => {
    let isDirty = false;
    let customerContactNumberError = undefined;
    let customerEmailIdError = undefined;

    if (this.state.customerContactNumber === '') {
      isDirty = true;
      customerContactNumberError = 'Contact Number cannot be empty';
    }
    if (this.state.customerEmailId === '') {
      isDirty = true;
      customerEmailIdError = 'Contact Email ID cannot be empty';
    }
    this.setState({ ...this.state, customerContactNumberError, customerEmailIdError });

    if (!isDirty) {
      const amount = this.state.cart.reduce((acc, curr) => (acc = acc + curr.cost), 0);

      this.props.dispatchAddPartsToBill(
        this.props.employeeId,
        this.state.cart,
        this.state.customerEmailId,
        this.state.customerContactNumber,
        amount,
        this.reset
      );
    }
  };

  render() {
    const { inventoryTableData, employeeId } = this.props;

    return (
      <Container>
        <TableWrapper>
          {inventoryTableData ? (
            <CustomDataTable
              isSelected={this.isSelected}
              onRowSelection={this.onRowSelection}
              tableData={inventoryTableData}
            />
          ) : (
            undefined
          )}
        </TableWrapper>
        <Wrapper>
          <SearchBar onSearch={() => {}} />
          <AddPartToBillBar
            customerContactNumber={this.state.customerContactNumber}
            customerContactNumberError={this.state.customerContactNumberError}
            customerEmailId={this.state.customerEmailId}
            customerEmailIdError={this.state.customerEmailIdError}
            cart={this.state.cart}
            employeeId={employeeId}
            onTextFieldChange={this.onTextFieldChange}
            onCheckOut={this.onCheckOut}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default Inventory;
