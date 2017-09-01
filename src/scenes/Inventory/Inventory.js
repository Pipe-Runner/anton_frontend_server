import React, { Component } from 'react';
import CustomSelectionTab from './components/CustomSelectionTab';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, SelectionTabWrapper } from './styles.js';

class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: props,
    };
  }

  render() {
    const { dispatchFetchInventory, fetchingData, inventoryTableData } = this.props;

    return (
      <Container>
        <SelectionTabWrapper>
          <CustomSelectionTab />
        </SelectionTabWrapper>
        <TableWrapper>
          {inventoryTableData ? <CustomDataTable tableData={inventoryTableData} /> : undefined}
        </TableWrapper>
      </Container>
    );
  }
}

export default Inventory;
