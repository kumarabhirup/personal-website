/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
// import { META } from '../constants/metadata'

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
      {/* <iframe
        className="substackIframe"
        src="https://kumarz.substack.com/embed"
        style={{
          width: '100%',
          height: '400px',
          // border: '1px solid #EEE',
          // background: 'white',
          borderRadius: '25px',
        }}
        frameBorder="0"
        scrolling="no"
        title="Kumar's Substack Newsletter"
      /> */}
      <div id="revue-embed">
        <div className="card">
          <form
            action="https://www.getrevue.co/profile/kumareth/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
            style={{
              textAlign: 'center',
              height: '100%',
              fontWeight: '100 !important',
            }}
            // className="embeddable-buttondown-form"
          >
            <h2>Subscribe to Kumar's Newsletter</h2>
            <div className="revue-form-group">
              {/* <label htmlFor="member_email">Email address</label> */}
              <input
                className="revue-form-field"
                placeholder="Your email address"
                type="email"
                name="member[email]"
                id="member_email"
                required
              />
            </div>
            <div className="revue-form-group">
              {/* <label htmlFor="member_first_name">First name</label> */}
              <input
                className="revue-form-field"
                placeholder="First name"
                type="text"
                name="member[first_name]"
                id="member_first_name"
                required
              />
            </div>
            <div className="revue-form-group">
              {/* <label htmlFor="member_last_name">Last name</label> */}
              <input
                className="revue-form-field"
                placeholder="Last name"
                type="text"
                name="member[last_name]"
                id="member_last_name"
                required
              />
            </div>
            <br />
            <div className="revue-form-actions">
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            <div className="revue-form-footer" style={{ fontSize: '15px' }}>
              By subscribing, you agree with Revue’s{' '}
              <a
                target="_blank"
                href="https://www.getrevue.co/terms"
                rel="noreferrer"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                target="_blank"
                href="https://www.getrevue.co/privacy"
                rel="noreferrer"
              >
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </div>
      {/* <form
        style={{
          textAlign: 'center',
          height: '100%',
        }}
        action="https://buttondown.email/api/emails/embed-subscribe/kumar"
        method="post"
        target="popupwindow"
        // onSubmit={toSubmitEmail}
        className="embeddable-buttondown-form"
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
      </form> */}
    </>
  )
}
