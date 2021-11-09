import React from 'react';

const MemberForm = (members) => {

  const onChange = evt => {
    const inputName = evt.target.username;
    const { value } = evt.target;
  //  updateForm(inputName, value);

  }

  //const onSubmit = 
  
  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className ='form-group inputs'>
      <label>Member Name
        <input 
          type="text"
          name="username"
          value={values.username}
          onChange={onChange}
          maxLength="30"
        />
      </label>
      <label>Email
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={onChange}
        />
      </label>Role
        <select value={values.role} name="role" onChange={onChange}>
          <option value="">-- Select a Role --</option>
          
        </select>
      <label>

      </label>
    </form>
  );
}

export default MemberForm