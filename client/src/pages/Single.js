import React from 'react'
import {useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import "./SIngle.css";
import {useLocation} from 'react-router';
import Navbar from '../components/Navbar';
import cookie from 'js-cookie'
import jwt_decode from 'jwt-decode';

function Single(){
  const tok=cookie.get("token")
  const decodedToken=jwt_decode(tok)
  console.log(decodedToken) 
  const [user,setUser]=useState(decodedToken.userId)
  const [child,setChild]=useState('');
  const id=useLocation()
  let loc=id.pathname.split("/")[2];
  let loc2=loc.split(':')[1];
 
  useEffect(()=>{
    async function fetchChildren(){
    const res=await axios.get(`http://localhost:4000/server/child/${loc2}`)
    setChild(res.data);
   //console.log(res.data.data)
    }
    fetchChildren()
   },[])
   
    const handleCheckout=async ()=>{
     
      const res=await axios.post(`http://localhost:4000/server/stripe/create-checkout-session`,{amount:30});
        if(res.data.url)
        {
            await axios.post(`http://localhost:4000/server/donation`,{userId:user,childId:child._id})
            window.location.href=res.data.url
        }
        else
        {
            console.log("Error")
        }
    }
   
    return (
    <>
     <Navbar/>
     <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
      
      <div className="container main_container d-flex justify-content-around flex-wrap">
      <div className="right_container mt-5">
          <img src={child?.picUrl} alt="image" />
        </div>
        <div className="left_container mt-5" style={{ width: 600 }}>
          <h2>{child?.name}</h2>
          <p style={{ color: "black", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>{child?.bio}</p>
    
          <div>
            <h6>
            <span style={{ fontWeight: 'bold' }}>AGE:</span>
              <p style={{ display: 'inline', marginLeft: 5, marginBottom: 0, fontWeight: 'normal' }}>{child?.age}</p>
          </h6>
        </div>
         <div>
            <h6>
            <span style={{ fontWeight: 'bold' }}>GENDER:</span>
              <p style={{ display: 'inline', marginLeft: 5, marginBottom: 0, fontWeight: 'normal' }}>{child?.gender}</p>
          </h6>
        </div>
        <div>
            <h6>
            <span style={{ fontWeight: 'bold' }}>Location:</span>
              <p style={{ display: 'inline', marginLeft: 5, marginBottom: 0, fontWeight: 'normal' }}>{child?.location}</p>
          </h6>
        </div>
        <div>
            <h6>
            <span style={{ fontWeight: 'bold' }}>ID:</span>
              <p style={{ display: 'inline', marginLeft: 5, marginBottom: 0, fontWeight: 'normal' }}>{child?._id}</p>
          </h6>
        </div>
         <div className="btn_div mt-4">
              <Button variant="danger" onClick={()=>{handleCheckout()}}style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>Sponser Me</Button>
              
            </div>

        </div>
        
      </div>
    </div>
    </>
  
   )
}


export default Single

