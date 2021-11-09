import logo from '../logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Member from './Member';
import MemberForm from './MemberForm';

const initialTeamMembers = {
  username: '',
  email: '',
  role: ''
}

const App = () => {
  const [members, setMembers] = useState([]);
  // state  holds all values of the form
  const [formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState("");

  const updateForm = (inputName, inputValue) => {
    //step 8
  }

  const submitForm = () => {
    //step 9
  }

  useEffect(() => {}
  )

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Management</h1>
        <p>Assign Team Members</p>
        
      </header>
      <div className="newMember">
      <MemberForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
