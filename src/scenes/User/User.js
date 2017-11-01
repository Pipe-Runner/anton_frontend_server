import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
// import AddPartToBillBar from './components/AddPartToBillBar';
import CustomDataTable from './components/CustomDataTable';
import { Container, TableWrapper, Wrapper } from './styles.js';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatchFetchUser();
  }

  render() {
    const { userTableData } = this.props;
    console.log(userTableData);

    return (
      <Container>
        <TableWrapper>
          {userTableData ? <CustomDataTable tableData={userTableData} /> : undefined}
        </TableWrapper>
        <Wrapper>
          <SearchBar onSearch={() => {}} />
        </Wrapper>
      </Container>
    );
  }
}

export default User;
