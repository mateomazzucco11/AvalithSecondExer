import React, { useEffect, useState } from 'react'
import { ListProducts } from './components/ListProducts';

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
      <ListProducts
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={data}
      />
    </div>
  )
}
