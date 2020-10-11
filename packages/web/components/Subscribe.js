/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
import { META } from '../constants/Meta'

export default function Subscribe() {
  const toSubmitEmail = e => {
    e.preventDefault();

    let email = document.getElementById("paemail").value;

    window.open(
      'https://propagate.at/share/kumar/email/' + email,
      "_blank"
    );

    return false;
  }

  return (
    <>
    <form
      style={{
        textAlign: 'center',
        height: '100%',
      }}
      onSubmit={toSubmitEmail}
    >
      <h1 style={{ lineHeight: '50px' }}>
        <label htmlFor="paemail">Stay Updated</label>
      </h1>
      <p className="style">
        If you like what I write on my blog and twitter, <br />I bet you gonna
        love the stuff I'll be mailing you!
        <br />I don't spam, really!
      </p>
      <p>
        <input
          type="email"
          style={{ width: '140px' }}
          name="email"
          id="paemail"
          placeholder="Your awesome email address!"
          required
        />
      </p>
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Welcome to the club 🔥" />
    </form>
    </>
  )
}
