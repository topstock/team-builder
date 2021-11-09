import React from 'react';

const Member = (props) => {
    const { details } = props

    if (!details) {
        return <h3>Fetching your member&apos;s details...</h3>
    }

    return (
      <div className='member'>
        <h2>{details.username}</h2>
        <p>Email: {details.email}</p>
        <p>Role: {details.role}</p>
      </div>
    )
}

export default Member
