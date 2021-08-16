import React, { useEffect, useState } from 'react'

export const ProductApp = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json)
    }
    fetchData();
  }, []);

  const [newProduct, setNewProduct] = useState({
    id: data?.id + 1,
    title: '',
    price: 0,
    description: '',
    category: '',
    image: ''
  })

  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setData([
      {
        ...newProduct,
        id: data.length + 1,
      },
      ...data,
    ])
  }

  return (
    <div>
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
      </div>
    </div>
  )
}
