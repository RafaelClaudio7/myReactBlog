import './styles.css';

import React from 'react';

export default function PostCard({title, body, cover}) {

    return (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className='post-card'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
    )
}