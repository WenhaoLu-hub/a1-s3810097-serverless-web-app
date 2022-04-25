import React from 'react';
import ContactForm from "../../ContactForm";
import { useEffect } from "react";
export default function Welcome() {

  return (
    <section className="section auth">
      <div className="container">
        <h1>Welcome!</h1>
        <p>Congratulations! you have successfully registered a new account. </p>
        <p> Please check the email and click to link to active your account.</p>
      </div>
    </section>
  )


}
