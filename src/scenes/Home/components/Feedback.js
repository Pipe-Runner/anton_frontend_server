import React from 'react';
import { darkBlack } from 'material-ui/styles/colors';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import { FeedbackContainer, FeedbackWrapper } from './styles';
import { BounceInUp } from 'animate-css-styled-components';
import user1Image from '../../../images/user1.jpg';
import user2Image from '../../../images/user2.jpg';
import user3Image from '../../../images/user3.jpg';
import user4Image from '../../../images/user4.jpg';

const Feedback = () => (
  <FeedbackContainer>
    <BounceInUp iterationCount="1" delay="1.5s">
      <FeedbackWrapper>
        <List>
          <Subheader>What people say...</Subheader>
          <ListItem
            leftAvatar={<Avatar src={user1Image} />}
            primaryText="How is our car servicing?"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Himanshu Adarsh</span> -- The quiality of work is
                beyond what you pay for
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src={user2Image} />}
            primaryText="How good is our repair job"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Dhiraj Singh</span> -- They can fix anything..
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
          <ListItem
            leftAvatar={<Avatar src={user3Image} />}
            primaryText="Any thing on online booking?"
            secondaryText={
              <p>
                <span style={{ color: darkBlack }}>Chaitanya Bhatiya</span> -- Absolutelty the best.
                No time clashes ever.
              </p>
            }
            secondaryTextLines={2}
          />
          <Divider inset={true} />
        </List>
      </FeedbackWrapper>
    </BounceInUp>
  </FeedbackContainer>
);

export default Feedback;
