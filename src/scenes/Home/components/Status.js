import React, { Component } from 'react';
import { StatusContainer, StatusInfoContainer } from './styles';

class Status extends Component {
  componentDidMount() {
    this.props.dispatchFetchSoldCount();
  }

  render() {
    const { partCount, transactionCount, bookingCount } = this.props;
    console.log({
      partCount,
      transactionCount,
      bookingCount,
    });
    return (
      <StatusContainer>
        <StatusInfoContainer>
          <span style={{ fontSize: '32px', color: '#E91E63' }}>{partCount}</span>
          {`  parts sold`}
        </StatusInfoContainer>
        <StatusInfoContainer>
          <span style={{ fontSize: '32px', color: '#E91E63' }}>{bookingCount}</span>
          {`  bookings confirmed`}
        </StatusInfoContainer>
        <StatusInfoContainer>
          <span style={{ fontSize: '32px', color: '#E91E63' }}>{transactionCount}</span>
          {`  happy customers`}
        </StatusInfoContainer>
      </StatusContainer>
    );
  }
}

export default Status;
