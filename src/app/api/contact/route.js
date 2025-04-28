import { NextResponse } from "next/server";
import nodemailer from "nodemailer";



let transporter = nodemailer.createTransport({
  service:'Gmail',
  auth:{
      user:"okunlolaridwanat@gmail.com",
      pass:process.env.MAIL_PASSWORD
  },
  tls: {
      rejectUnauthorized: false  // This bypasses the certificate validation
  }
})

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    console.log({ name, email, message });

    let mailOptions = {
      from:email,
      to:"okunlolaridwanat@gmail.com",
      subject:"from your porfolio",
      text:message,
  }
  
  
  // SEND MAIL
  
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.log('Error occurred:', error.message);
          return;
      }
      console.log('Email sent successfully!', info.response);
  });

  
    return NextResponse.json({
      status: 200,
      body: { name, email, message, success: true }
    });
  } catch (error) {
    console.error(error);

    
    return NextResponse.json({
      status: 500,
      body: { success: false, message: "Something went wrong" }
    });
  }
}
