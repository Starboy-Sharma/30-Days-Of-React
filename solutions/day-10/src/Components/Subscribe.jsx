import React from 'react'

export default function Subscribe() {
  return (
    <section className="subscriber-container">
    <h1> Subscribe </h1>
    <p> Sign up with your email address to receive news and updates. </p>

    <div className="form">
      <input type="text" className="input-text" placeholder="First Name" />
      <input type="text" className="input-text" placeholder="Last Name" />
      <input type="email" className="input-text" placeholder="Email" />
    </div>
    
    <button className="btn"> Subscribe </button>
  </section>
  )
}
