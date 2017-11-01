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
      customerContactNumber: '',
      selected: [],
      cart: [],
      filter: {},
    };
  }

  onTextFieldChange = textField => (event, value) => {
    this.setState({
      ...this.state,
      [textField]: value,
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
    this.props.dispatchAddPartsToBill(
      this.props.employeeId,
      this.state.cart,
      this.state.customerEmailId,
      this.state.customerContactNumber,
      this.reset
    );
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
            customerEmailId={this.state.customerEmailId}
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
