import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatchTransactionInventory();
  }

  render() {
    const { transactionTableData } = this.props;
    console.log(transactionTableData);

    return (
      <Container>
        <TableWrapper>
          {transactionTableData ? <CustomDataTable tableData={transactionTableData} /> : undefined}
        </TableWrapper>
        <Wrapper>
          <SearchBar onSearch={() => {}} />
        </Wrapper>
      </Container>
    );
  }
}

export default Transaction;
