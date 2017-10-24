import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  VideoContainer,
  Video,
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
import backgroundVideo from '../../images/background_vid.mp4';

const Home = ({ orders = [], token, username, adminUser }) =>
  token !== undefined && username !== undefined && !adminUser ? (
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
    <VideoContainer>
      <Video style={{ height: 'auto', width: '100%', bottom: '0px' }} loop muted autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
      </Video>
      <PromotionContainer>
        <RubberBand iterationCount="2" duration="1.5s" delay="1.5s">
          <TitleWrapper>"Athithi Devo Bhava"</TitleWrapper>
        </RubberBand>
        <Swing iterationCount="infinite" delay="4.5s">
          <Logo>
            <CompanyIcon size={96} color="#FF9800" />
          </Logo>
        </Swing>
      </PromotionContainer>
    </VideoContainer>
  );

export default Home;
