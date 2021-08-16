import React from 'react'
import { MapProducts } from './MapProducts'

export const ListProducts = ({ handleChange, handleSubmit, data }) => {
    return (
        <>
            <form onSubmit={handleSubmit} className='content-form'>
                <input
                    type='text'
                    name='title'
                    placeholder='Titulo'
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='price'
                    placeholder='Precio'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='category'
                    placeholder='Categoria'
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='description'
                    placeholder='Descripción'
                    onChange={handleChange}
                />
                <div>
                    <button
                        type='submit'
                    >
                        Agregar
                    </button>
                </div>
            </form>
            <div className='content-card'>
                <MapProducts data={data} />
            </div>
        </>
    )
}
