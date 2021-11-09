import React from 'react';

const MemberForm = (members) => {



  return (
    {members.map( member => {
      <div className= "memberForm" key={member.email}>
        <h3 id={member.name}>Add a Team Member</h3>
      </div>
    })}
  );
}

export default MemberForm