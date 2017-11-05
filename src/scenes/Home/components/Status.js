import React, { Component } from 'react';
import { StatusContainer, StatusWrapper, StatusInfoContainer } from './styles';
import { BounceInUp } from 'animate-css-styled-components';

class Status extends Component {
  componentDidMount() {
    this.props.dispatchFetchSoldCount();
  }

  render() {
    const { partCount, transactionCount, bookingCount } = this.props;
    return (
      <StatusContainer>
        {transactionCount ? (
          <BounceInUp iterationCount="1">
            <StatusWrapper>
              <StatusInfoContainer>
                <span style={{ fontSize: '1.4em', color: '#E91E63' }}>{partCount}</span>
                {`  parts sold`}
              </StatusInfoContainer>
              <StatusInfoContainer>
                <span style={{ fontSize: '1.4em', color: '#E91E63' }}>{bookingCount}</span>
                {`  bookings confirmed`}
              </StatusInfoContainer>
              <StatusInfoContainer>
                <span style={{ fontSize: '1.4em', color: '#E91E63' }}>{transactionCount}</span>
                {`  happy customers`}
              </StatusInfoContainer>
            </StatusWrapper>
          </BounceInUp>
        ) : (
          undefined
        )}
      </StatusContainer>
    );
  }
}

export default Status;
