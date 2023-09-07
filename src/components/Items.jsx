import React from 'react'
import { useState } from 'react'
import { NavLink} from 'react-router-dom'
import '../styles/Items.css'
// import Checkout from './src/components/Checkout'

const Items = () => {
    const [address, setaddress] = useState("");
    const handleChange = (e) => {
        setaddress(e.target.value)

    }
    const submit = (e) =>{
        e.preventDefault();
    }

  return (
    <>
    <div className='mainform'>
      <div >
      <form onSubmit={submit}>
      <div className='mainform2'>
          <div className='mainform11'>
             <div>
             <label>Enter Name :</label>
            
            <input type="text"  /> 
             </div>
             <br />
             <br />
             <div>
             <label>Phone num:</label>
            <input type= "number" />
             </div>
             <br />
             <br />
              <div>
              <label>Address :</label>
            <textarea placeholder='Enter address' rows={9} cols={44} value = {address} onChange={handleChange} ></textarea>
              </div>
              <br />
             <br />
            </div>
             <div className='mainform12'>
            <div>
            <label>Payment Method</label>
            <select >
                <option>Google Pay</option>
                <option>PhonePe</option>
                <option>Cash on Delivery</option>
            </select>
            <h2 className='order'>Reselling the Order?</h2>
             <label>Yes</label><input type="checkbox" name="yes" id="" />
             <label>No</label><input type="checkbox" name="No" id="" />
            </div>
                <NavLink to="/checkout" className="cart">
                <div><button className='placebtn'>Place order</button></div>
                </NavLink>
                <div className='imgfo'>

                </div>
                </div>
                
        </div>  
      </form>
      </div>
      </div>
    </>
  )
}

export default Items
