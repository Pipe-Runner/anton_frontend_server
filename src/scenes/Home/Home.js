import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  GifContainer,
  Container,
  FabContainer,
  OrdersContainer,
  PromotionContainer,
  OrderWrapper,
  MomentWrapper,
  MomentData,
  IdWrapper,
  IdData,
  TitleWrapper,
  Logo,
} from './styles';
import { RubberBand, Swing } from 'animate-css-styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RepairIcon from 'react-icons/lib/go/tools';
import CompanyIcon from 'react-icons/lib/md/build';

const Home = ({ orders = [], username, isAdmin }) =>
  username !== undefined && !isAdmin ? (
    <Container>
      <OrdersContainer>
        <OrderWrapper>
          <IdWrapper>
            <IdData>123D232</IdData>
          </IdWrapper>
          <MomentWrapper>
            <MomentData>23/9/2017</MomentData>
            <MomentData>10:20 AM</MomentData>
          </MomentWrapper>
        </OrderWrapper>
        <OrderWrapper>
          <IdWrapper>
            <IdData>123D232</IdData>
          </IdWrapper>
          <MomentWrapper>
            <MomentData>23/9/2017</MomentData>
            <MomentData>10:20 AM</MomentData>
          </MomentWrapper>
        </OrderWrapper>
      </OrdersContainer>
      <FabContainer>
        <NavLink to="/booking">
          <FloatingActionButton>
            <RepairIcon size={24} />
          </FloatingActionButton>
        </NavLink>
      </FabContainer>
    </Container>
  ) : (
    <GifContainer>
      <PromotionContainer>
        <RubberBand iterationCount="2" duration="1.5s" delay="1.5s">
          <TitleWrapper>"CAR REPAIRS ++"</TitleWrapper>
        </RubberBand>
        <Swing iterationCount="infinite" delay="4.5s">
          <Logo>
            <CompanyIcon size={96} color="#FF9800" />
          </Logo>
        </Swing>
      </PromotionContainer>
    </GifContainer>
  );

export default Home;
