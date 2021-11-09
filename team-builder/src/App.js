import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  const initialTeamMembers = [
    {
      memberName: "Georgie Porgy",
      email: "datQueen@porgynpie.com",
      role: "Broker"
    },
    {
      memberName: "Mary Quite-Contrary",
      email: "numbaOneHustlah@porgynpie.com",
      role: "Trend Setter"
    }
  ]

  const submit = memberValues => {
    setTeamMembersList( ...teamMembersList, memberValues )
  }
  
  const [teamMembersList setTeamMembersList] = useState(initialTeamMembers);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Management</h1>
        <p>Assign Team Members</p>
      </header>
      <div className="newMember">
      <Label name="NewMember">
      <h2>NewMember</h2>
      <form>
        
        </Label>
      </div>
      <div className="currentMembers">
        <h2> currentMembers</h2>
         <MemberList members={teamMembersList}/>
      </div>
    </div>
  );
}

export default App;
