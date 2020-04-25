import React from 'react';
import styled from 'styled-components';

const MemberCard = styled.div`
background: linear-gradient(90deg, #b2c1ff 0%,#fffba3 80%);
width: 100%;
max-width: 250px;
box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, .5), 5px 5px 5px rgba(0, 0, 0, .25);
padding: 10px;
margin: 16px auto;
text-align: left;
border-radius: 5px;
`;

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Name = styled.h2`
text-transform: capitalize;
`;

const Members = props => {
  return (
    <CardsContainer>
      {props.members.map(member => (
        <MemberCard key={member.id}>
        <Name>{member.name}</Name>
        <p>{member.email}</p>
        <p>{member.role}</p>
        </MemberCard>
      ))}
    </CardsContainer>
  );
};

export default Members;
