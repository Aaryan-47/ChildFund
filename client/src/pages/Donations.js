import axios from 'axios';
import { useEffect,useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Navbar from "../components/Navbar";
import "./testimonials.css";
function Donations(){
    const[donationDetails,setDonationDetails]=useState("");
    useEffect(()=>{
    async function fetchDetails()
    {
        const res=await axios.get('http://localhost:4000/server/donation/:6499b06ea9f276af44e7f627')
        setDonationDetails(res.data.data);
        console.log(res.data.data)
    }
    fetchDetails()
    },[])
  return(
    <>
        <Navbar/>
        <br></br>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {donationDetails!==""&&donationDetails.map((donation)=>(
             <div>
             <img src={donation.picUrl} />
             <div className="myCarousel">
               <h3>{donation.name}</h3>
               <h4>Age: {donation.age}</h4>
               <h5>Disease: {donation.disease}</h5>
              
               <p>
                {donation.name.split(' ')[0]} sends {donation.gender==="female"?"her":"his"} thanks for helping her out in a time of grave need. Your Donations can change the lives of several children like {donation.name.split(' ')[0]}
               </p>
             </div>
           </div>
        ))}
       
      </Carousel>
      </>
  )

}

export default Donations