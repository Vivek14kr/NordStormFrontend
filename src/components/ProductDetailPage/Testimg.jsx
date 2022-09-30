import React from 'react'

const Testimg = () => {
  const getProducts = async () => {
    let res = await fetch("https://nordstormbc.onrender.com/products");
    let data = await res.json()
    console.log(data)
  }

  getProducts()
  return <div></div>
}

export default Testimg
