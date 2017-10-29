import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  GifContainer,
  Container,
  FabContainer,
  PromotionContainer,
  TitleWrapper,
  Logo,
  SocialMediaContainer,
  Button,
} from './styles';
import { Swing, Jello } from 'animate-css-styled-components';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import TwitterIcon from 'react-icons/lib/fa/twitter-square';
import RepairIcon from 'react-icons/lib/go/tools';
import CompanyIcon from 'react-icons/lib/md/build';
import Order from './components/Order';
import Service from './components/Service';
import Notification from './components/Notification';

const Home = ({
  bookingData = [],
  contactNumber,
  userId,
  emailId,
  userLevel,
  dispatchGetBooking,
}) =>
  userId !== undefined && userLevel < 1 ? (
    <Container>
      <Order
        dispatchGetBooking={dispatchGetBooking}
        userId={userId}
        contactNumber={contactNumber}
        bookingData={bookingData}
      />
      <Service />
      <Notification />
      <FabContainer>
        <NavLink to="/booking">
          <FloatingActionButton backgroundColor="#9C27B0">
            <RepairIcon size={24} />
          </FloatingActionButton>
        </NavLink>
      </FabContainer>
    </Container>
  ) : (
    <GifContainer>
      <PromotionContainer>
        <TitleWrapper>GUPTA MOTORSHOP</TitleWrapper>
        <Swing iterationCount="infinite" duration="2.0s" delay="3.5s">
          <Logo>
            <CompanyIcon size={78} color="#673AB7" />
          </Logo>
        </Swing>
      </PromotionContainer>
      <SocialMediaContainer>
        <Jello iterationCount="infinite" delay="1.5s">
          <Button>
            <FacebookIcon size={48} color="#1A237E" />
          </Button>
        </Jello>
        <Jello iterationCount="infinite" delay="1.5s">
          <Button>
            <TwitterIcon size={48} color="#01579B" />
          </Button>
        </Jello>
      </SocialMediaContainer>
    </GifContainer>
  );

export default Home;
