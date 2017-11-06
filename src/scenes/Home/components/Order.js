import React, { Component } from 'react';
import moment from 'moment';
import {
  OrdersContainer,
  OrderWrapper,
  MomentWrapper,
  MomentData,
  IdWrapper,
  IdData,
} from './styles.js';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.dispatchGetBooking(userId);
  }

  render() {
    const bookingData = this.props.bookingData ? this.props.bookingData : [];

    return (
      <OrdersContainer>
        {bookingData.map((item, index) => (
          <OrderWrapper key={index}>
            <IdWrapper>
              <IdData>{item.id}</IdData>
            </IdWrapper>
            <MomentWrapper>
              <MomentData>{moment(item.date).format('DD/MM/YY')}</MomentData>
              <MomentData>{moment(item.startTime, 'HH:mm').format('hh:mm a')}</MomentData>
            </MomentWrapper>
          </OrderWrapper>
        ))}
      </OrdersContainer>
    );
  }
}

export default Order;
