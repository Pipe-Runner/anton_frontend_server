import React, { Component } from 'react';
import CustomSelectionTab from './components/CustomSelectionTab';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, SelectionTabWrapper } from './styles.js';
import { fakeData } from './fakeData';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { dispatchFetchInventory, fetchingData, inventoryTableData } = this.props;

    const inventoryTableData = fakeData;

    return (
      <Container>
        <SelectionTabWrapper>
          <CustomSelectionTab onSearch={() => {}} />
        </SelectionTabWrapper>
        <TableWrapper>
          {inventoryTableData ? <CustomDataTable tableData={inventoryTableData} /> : undefined}
        </TableWrapper>
      </Container>
    );
  }
}

export default Inventory;
