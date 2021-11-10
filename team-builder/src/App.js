import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Member from './components/Member';
import MemberForm from './components/MemberForm';

const initialFormValues = {
  memberName: '',
  email: '',
  role: ''
}

const App = () => {
  const [members, setMembers] = useState( [{
    memberName: 'RileyC',
    email: 'rileyC@philGLambda.net',
    role: 'Counsellor'
  }]);

  // state  holds all values of the form
  const [formValues, setFormValues] = useState({ memberName: '', email: '', role: ''});

  const onSubmit = () => {
    const newMember = {
      memberName: formValues.memberName,
      email: formValues.email,
      role: formValues.role
    }
    setMembers(members.concat(newMember));
    setFormValues({memberName: '', email: '', role: ''});
  }

  const onChange = (name, value) => { //update form
    setFormValues({ ...formValues, [name]: value})
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Management</h1>
      </header>
      <div className="newMember indent">
        <h2>Assign Team Members</h2>
        <MemberForm
          values={formValues}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
      <div className="indent bottomSection">
        <h2>Your Team</h2>
        <div className="yourTeam">
        {
          members.map(member => {
            return (
              <Member key={member.email} details={member} />
            )
          })
        } 
        </div>
      </div>
    </div>
  );
}

export default App;
