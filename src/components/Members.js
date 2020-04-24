import React from 'react';
import styled from 'styled-components';

const MemberCard = styled.div`
background: linear-gradient(90deg, #b2c1ff 0%,#fffba3 80%);
width: 100%;
max-width: 250px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5), 0 5px 2px rgba(0, 0, 0, 0.12);
padding: 10px;
margin: 16px auto;
text-align: left;
border-radius: 5px;
`;

const CardsContainer = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Members = props => {
  return (
    <CardsContainer>
      {props.members.map(member => (
        <MemberCard key={member.id}>
        <h2>{member.name}</h2>
        <p>{member.email}</p>
        <p>{member.role}</p>
        </MemberCard>
      ))}
    </CardsContainer>
  );
};

export default Members;
