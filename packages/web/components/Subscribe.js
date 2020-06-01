/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
import { META } from '../constants/Meta'

export default function Subscribe() {
  return (
    <form
      style={{
        textAlign: 'center',
        height: '100%',
      }}
      action={`https://tinyletter.com/${META.social.tinyletter}`}
      method="post"
      target="popupwindow"
      onSubmit={`window.open('https://tinyletter.com/${META.social.tinyletter}', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true`}
    >
      <h1 style={{ lineHeight: '50px' }}>
        <label htmlFor="tlemail">Stay Updated</label>
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
          id="tlemail"
          placeholder="Your awesome email address!"
          required
        />
      </p>
      <input type="hidden" value="1" name="embed" />
      <input type="submit" value="Welcome to the club!" />
    </form>
  )
}
