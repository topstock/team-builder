import React from 'react';

const MemberForm = (members) => {
  const submit = (evt) => {
    evt.preventDefault();
    const newMembert = {
      username: formValues.username.trim(),
      email:
      role: formValues.role.trim()
    }
    setMembers(members.concat(newMember));
    setFormValues({username: '', email: '', role: ''});
  }

  const change = (evt) => {
    const {name, value} = evt.target;
    console.log(name, value)
    setFormValues({ ...formValues, [name]: value});
  }

  return (
    {members.map( member => {
      <div className= "memberForm" key={member.email}>
        <h3 id={member.name}>Add a Team Member</h3>
      </div>
    })}
  );
}

export default MemberForm