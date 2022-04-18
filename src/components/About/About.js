import React from 'react';
import img from "./Photo-1d1089fc-c3b3-4b68-ae00-43c882ff28d6.jpg"

const About = () => {
    return (
        <div className='w-full md:w-4/5 mx-auto my-4 '>
            <div className='p-5 flex flex-col md:flex-row justify-center  md:justify-start items-center md:items-start gap-3 shadow-lg '>
           
            <img width={300} height={400} src={img} alt="" />
            <div className=''>
            <h1 className='text-4xl font-semibold '>About of me </h1>
            <hr className='my-2' />
            <p> 
                আমার নাম হোসাইন মোহাম্মদ রাহিম । আমি অনেক দিন যাবত চেষ্টা কিরছি নিজেকে একজন  ওয়েব ডেবেলপার হিসাবে গরে তুলার
                এবং আমি কখনোই হাল ছারি নাই সবসময় নিজেকে ফ্লোতে ধরে রাখতে পেরেছি এবং আমি একজন হার্ডওয়ার্কার যতক্ষন না পর্যন্ত আমি সফলতার মোখ দেখছি আমি হাল ছারব না। আমি চেষ্টা করে যাব । বর্তমানে আমার একটাই স্বপ্ন যে আমি কিভাবে একজন ওয়েব ডেবেলপার হিসাবে নিজেকে গরে তুলার পারি      </p>
            </div>
            </div>
            
        </div>
    );
};

export default About;