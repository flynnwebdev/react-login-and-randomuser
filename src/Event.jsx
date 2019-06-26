import React from 'react'

export default function Event({ id, action, timestamp }) {
    return (
        <p key={id}>{action} at {timestamp.toLocaleString()}</p>
    )
}
