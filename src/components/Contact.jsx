import React from 'react'
import {CONTACT} from "../constants";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">
        Get In<span className="text-purple-400"> Touch</span>
      </h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href='#' className='border-b'>{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
