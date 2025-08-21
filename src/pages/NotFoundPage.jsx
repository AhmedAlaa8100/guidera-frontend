import React from 'react'

export default function NotFoundPage({ children }) {
    console.log(children);

    return (
        <div>
            <h1>Not Found Page</h1>
            {children}
        </div>
    )
}
