import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatchFetchHistory();
  }

  render() {
    const { historyTableData } = this.props;
    console.log(historyTableData);

    return (
      <Container>
        <TableWrapper>
          {historyTableData ? <CustomDataTable tableData={historyTableData} /> : undefined}
        </TableWrapper>
        <Wrapper>
          <SearchBar onSearch={() => {}} />
        </Wrapper>
      </Container>
    );
  }
}

export default History;
