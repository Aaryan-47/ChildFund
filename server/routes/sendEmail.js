const express=require('express');
const nodemailer=require('nodemailer');
const router=express.Router();

const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    auth:{
        user:'gtaloveraaryan@gmail.com',
        pass:'rtvcfrkvdqyadsfc'
    }

});

router.post('/sendMail',async(req,res)=>{
    const{mail}=req.body;
    const mailOptions = {
        from: 'gtaloveraaryan@gmail.com',
        to: `${mail}`,
        subject: 'Test Email for PR Project',
        text: 'This is a test email sent from ChildFund App. Please verify'
      };

      transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.status(500).send('Error Sending Email');
        }
        else{
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
      })
})

module.exports=router;