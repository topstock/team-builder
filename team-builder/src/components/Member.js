import React from "react";

const Member = () => {
    const { details } = props

    if (!details) {
        return <h3>working fetching your member&apos;s details...</h3>
    }

    return (
        <div className='member'>
            <h2></h2>
        </div>
    )
}

//concat and setFormValues