import React, { Component } from 'react';
import AddSupplier from './components/AddSupplier';
import AddItem from './components/AddItem';
import { Container, Wrapper } from './styles';

class Add extends Component {
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

  // componentDidMount() {
  //   this.props.dispatchFetchAdd();
  // }

  render() {
    return (
      <Container>
        <AddItem />
        <AddSupplier />
      </Container>
    );
  }
}

export default Add;
