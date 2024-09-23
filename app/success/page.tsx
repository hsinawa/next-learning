'use client';
import React from "react";
import "../../styles/common.css";
import Image from "next/image";

const SuccessPage = () => {
    React.useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        },5000)
    }   , []);
  return (
    <main id="width-and-center-body" className="flex justify-center items-center flex-col min-h-screen">
      <section className="mt-5 pb-[23%] flex flex-col items-center">
        <div className="flex justify-center">
          <Image 
            src='/images/success.png'
            width={300}
            height={300}
            alt="Success"
          />
        </div>
        <h1 className="text-2xl font-bold text-center mt-5">
          Thank you for contacting me. Will get back to you soon.
        </h1>
        <p className="text-gray-500 text-center mt-5">Please check your inbox</p>
      </section>
    </main>
  );
};

export default SuccessPage;

