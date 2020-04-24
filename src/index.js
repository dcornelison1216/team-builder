import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form';
import Members from './components/Members';
import styled from 'styled-components';

const AppContainer = styled.div`
font-family: 'Chalkduster', fantasy;
text-align: center;
background-image: linear-gradient(90deg, #e8d714 0%,#b2c1ff 80%);
padding: 32px;
`;

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Derek',
      email: 'dcornelison1216@gmail.com',
      role: 'Designer'
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };
  return (
    <AppContainer>
      <h1>Add a New Member</h1>
      <Form addNewMember={addNewMember} />
      <h1>Current Team Members</h1>

      <Members members={members} />
    </AppContainer>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
