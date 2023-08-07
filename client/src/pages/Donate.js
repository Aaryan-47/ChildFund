import axios from 'axios';

function Donate(){

    const handleCheckout=async()=>{
        const res=await axios.post(`http://localhost:4000/server/stripe/create-checkout-session`,{amount:3000});
        if(res.data.url)
        {
            window.location.href=res.data.url
        }
        else
        {
            console.log("Error")
        }
    }
   return (
    <button onClick={()=>{handleCheckout()}}></button>
   )
}

export default Donate