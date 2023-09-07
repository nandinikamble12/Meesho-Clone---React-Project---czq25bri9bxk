import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Navbar from './Navbar';
// import {Navbar} from 'react-router-dom'

const ProductDetails = () => {
  const getdata = JSON.parse(localStorage.getItem("cartArray"))
  const [product, setProduct] = useState({});
  // const[cartItem, setcartItem]=useState([]);
  const [data, setdata] = useState(() => {
    if (getdata === null) {
      return [];
    }
    else {
      return getdata;
    }
  });
  const param = useParams();

  useEffect(() => {
    api();
  }, [])
  const api = async () => {
    const response = await fetch(`https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products/${param.id}`)
    const jsonData = await response.json();
    console.log(jsonData);
    setProduct(jsonData);
  }
  function addTocart() {
    // console.log(cartItem);
    // Agar user logged in hai, to buy functionality ko enable karein
   
     localStorage.setItem
      ("cartArray", JSON.stringify([...data, product]))

  

    }

    return (
      <>
           
        <div className='parent'>
          <div className='img2'><img src={product.image} alt="" /></div>

          <div className='child'>
         
            <h5 className='title2'>{product.title}</h5>
            <h5 className='price2'>Price: ₹{product.price}</h5>
            <div>
              <h3 className='sizeh3'>Select Size</h3>
              <button className='sizebtn' > Free size</button>
            </div>
            <h2  className='productheading'>Product Details</h2>
            <p className='des2'>{product.description}</p>
            {/* <p className='rating'>{product.rating.rate}</p> */}
            <div className='SoldBy'>
              <h2>Sold By</h2>
              <span className='span'>Samna Handicrafts shop</span><button  className='view'><a href='https://www.samnahandicrafts.com/'>Viewmore</a></button>
            </div>

          </div>

          {/* <button onClick={addToCart(product)}>Add to Cart</button> */}
        </div>

        
        <NavLink to="/cart"> <button className='cart2' onClick={addTocart}>   Add to cart  </button></NavLink>
          <button className='cart3'>Buy now</button>
      </>
    )
  }

  export default ProductDetails
