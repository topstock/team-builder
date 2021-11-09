import React from 'react';

const MemberForm = (props) => {
  const { values, update, submit } = props;
  
  const handleChange = evt => {
    const {name, value} = evt.target;
    //  updateForm(inputName, value);
    props.onChange(name, value);
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    props.onSubmit();
  }

  return (
    <form className='form container' onSubmit={handleSubmit}>
      <div className ='form-group inputs'>
        <label>Member Name
          <input 
            type="text"
            name="memberName"
            value={props.values.memberName}
            onChange={handleChange}
            maxLength="30"
          />
        </label>
        <label>Email
          <input
            type="email"
            name="email"
            value={props.values.email}
            onChange={handleChange}
          />
        </label>Role
          <select value={props.values.role} name="role" onChange={handleChange}>
            <option value="">-- Select a Role --</option>
            <option value="Paraeducator">Paraeducator</option>
            <option value="Teacher">Teacher</option>
            <option value="Counsellor">Counsellor</option>
          </select>
        <div className='submit'>
          <button disabled={!values.memberName || !values.email || !values.role}>Add Team Member</button>
        </div>
      </div>
    </form>
  );
}

export default MemberForm