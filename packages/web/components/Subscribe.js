/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
// import { META } from '../constants/Meta'

export default function Subscribe() {
  // const toSubmitEmail = e => {
  //   e.preventDefault()

  //   // const email = document.getElementById('paemail').value

  //   // window.open(`https://propagate.at/share/kumar/email/${email}`, '_blank')

  //   window.open('https://buttondown.email/kumar', 'popupwindow')

  //   return false
  // }

  return (
    <>
      <form
        style={{
          textAlign: 'center',
          height: '100%',
        }}
        action="https://buttondown.email/api/emails/embed-subscribe/kumar"
        method="post"
        target="popupwindow"
        // onSubmit={toSubmitEmail}
        class="embeddable-buttondown-form"
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
            // name="email"
            // id="paemail"
            name="email" 
            id="bd-email"
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
