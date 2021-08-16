import React from 'react'

export const MapProducts = ({ data }) => {
    return (
        <>
            {
                data.map(p => {
                    return (
                        <ul key={p.id}>
                            <li>
                                <img src={p.image} alt={p.title} />
                                <h1 >{p.title}</h1>
                                <p >{p.description}</p>
                                <p >{p.category}</p>
                                <h2 >${p.price}</h2>
                            </li>
                        </ul>
                    )
                })
            }
        </>
    )
}
