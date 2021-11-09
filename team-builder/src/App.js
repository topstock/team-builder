import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Member from './components/Member';
import MemberForm from './components/MemberForm';

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}

const initialMembers = [
  {
    username: 'PhilG',
    email: 'philG@philGLambda.net',
    role: 'student'
  },
  {
    username: 'BabsD',
    email: 'babsD@philGLambda.net',
    role: 'coach'
  },
  {
    username: 'RileyC',
    email: 'rileyC@philGLambda.net',
    role: 'instructor'
  }
]

const App = () => {
  const [members, setMembers] = useState(initialMembers);
  // state  holds all values of the form
  const [formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState("");

  const updateForm = (inputName, inputValue) => {
    //step 8
  }

  const submitForm = () => {
    //step 9
    const newMember= {
      username: formValues.username,
      email: formValues.email,
      role: formValues.role
    }
    setMembers(members.concat(newMember));
    setFormValues({username: '', email: '', role: ''});
  }
  
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
