/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import validateEmail from '../../lib/validateEmail'
import { DisplayError } from '../ErrorMessage'

const FieldErrorText = styled.span`
  color: red;
`

const SuccessMsg = styled.div`
  background: green;
  color: #fff;
  border-radius: 10px;
  border: 2px solid darkgreen;
  padding: 15px;
  font-size: 25px;
`

const ErrorMsg = styled.div`
  background: red;
  color: #fff;
  border-radius: 10px;
  border: 2px solid darkred;
  padding: 15px;
  font-size: 25px;
`

const SEND_MESSAGE_MUTATION = gql`
  mutation SEND_MESSAGE_MUTATION(
    $fullname: String!
    $email: String!
    $subject: String!
    $message: String!
    $humanKey: String!
  ) {
    sendMessage(
      fullname: $fullname
      email: $email
      subject: $subject
      message: $message
      humanKey: $humanKey
    ) {
      id
      fullname
    }
  }
`

export default class Contact extends Component {
  // State Management
  state = {
    human: false,
    disabled: true,
  }

  saveToState = async e => {
    this.setState({ [e.target.name]: e.target.value })

    switch (e.target.name) {
      case 'fullname':
        this.fullnameValidation(e)
        break

      case 'email':
        this.emailValidation(e)
        break

      case 'phone':
        this.phoneValidation(e)
        break

      case 'subject':
        this.subjectValidation(e)
        break

      case 'message':
        this.messageValidation(e)
        break

      default:
        break
    }

    this.setState({ disabled: this.isDisabled() })
  }

  // Name validation
  fullnameValidation = e => {
    if (e.target.value === null || e.target.value.length === 0) {
      this.setState({ fullname: null, fullnameError: null })
    } else if (e.target.value.length < 4) {
      this.setState({ fullnameError: `Fullname so small? 🤔` })
    } else {
      this.setState({ fullnameError: null })
    }
  }

  // Email validation
  emailValidation = e => {
    if (e.target.value === null || e.target.value.length === 0) {
      this.setState({ email: null, emailError: null })
    } else if (!validateEmail(e.target.value)) {
      this.setState({ emailError: `Please enter your CORRECT EMAIL ADDRESS` })
    } else {
      this.setState({ emailError: null })
    }
  }

  // Phone validation
  phoneValidation = async e => {
    // await wait(2000)

    const isPhoneValid = await fetch(
      `http://apilayer.net/api/validate?access_key=${process.env.APILAYER_KEY}&number=${e.target.value}`
    )
      .then(res => res.json())
      .then(json => json.valid)
      .catch(err => console.log('Some error just triggered!', err.message))

    if (this.state.phone != null && !isPhoneValid) {
      this.setState({ phoneError: `Please write a valid phone number` })
    } else {
      this.setState({ phoneError: null })
    }
  }

  // Subject validation
  subjectValidation = e => {
    if (e.target.value === null || e.target.value.length === 0) {
      this.setState({ subject: null, subjectError: null })
    } else if (e.target.value.length < 6) {
      this.setState({ subjectError: `Subject needs to be longer` })
    } else {
      this.setState({ subjectError: null })
    }
  }

  // Message validation
  messageValidation = e => {
    if (e.target.value === null || e.target.value.length === 0) {
      this.setState({ message: null, messageError: null })
    } else if (e.target.value.length < 9) {
      this.setState({ messageError: `Can you not express yourself some more?` })
    } else {
      this.setState({ messageError: null })
    }
  }

  // ReCAPTCHA Client Side
  onCaptchaLoad = () => {
    console.log('Captcha loaded.')
  }

  verifyCaptcha = res => {
    if (res) {
      this.setState({ human: true, humanKey: res })
      this.setState({ disabled: this.isDisabled() })
    }
  }

  // ReCAPTCHA Expired
  expireCaptcha = () => {
    this.setState({ human: false, humanKey: null })
    this.setState({ disabled: this.isDisabled() })
  }

  isDisabled = () => {
    if (
      this.state.fullname != null &&
      this.state.email != null &&
      this.state.subject != null &&
      this.state.message != null &&
      this.state.fullnameError === null &&
      // this.state.phoneError === null &&
      this.state.emailError === null &&
      this.state.subjectError === null &&
      this.state.messageError === null &&
      this.state.human === true
    )
      return false
    return true
  }

  finalData = () => {
    const data = { ...this.state }
    delete data.fullnameError
    delete data.emailError
    delete data.subjectError
    delete data.phoneError
    delete data.messageError
    delete data.human
    delete data.disabled
    delete data.phone
    delete data.successMsg
    delete data.errorMsg
    return data
  }

  onSubmit = async (e, mutation) => {
    e.preventDefault()
    const res = await mutation()
    if (res.data.sendMessage) {
      this.setState({
        successMsg: `Thanks, ${res.data.sendMessage.fullname}! Will get back to you shortly.`,
        errorMsg: null,
        fullname: null,
        phone: null,
        email: null,
        subject: null,
        message: null,
        human: false,
        humanKey: null,
        disabled: true,
      })
    } else {
      this.setState({
        errorMsg: `Something went wrong. Please try again later.`,
        successMsg: null,
        human: false,
        humanKey: null,
      })
    }
  }

  render() {
    const { data } = this.props
    return (
      <>
        {/* <Head>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Head> */}
        <section
          className="mbr-section form4 cid-rezNDSe3Nt"
          id="form4-n"
          data-rv-view="243"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                {/* MAP IS NOT YET CONNECTED TO API! */}
                <div className="google-map">
                  <iframe
                    title="Google Maps"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=IQubex,+Nashik"
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
              <div className="col-md-6">
                {this.state.errorMsg && (
                  <ErrorMsg>{this.state.errorMsg}</ErrorMsg>
                )}
                {this.state.successMsg ? (
                  <SuccessMsg>{this.state.successMsg}</SuccessMsg>
                ) : (
                  <>
                    <h2 className="pb-3 align-left mbr-fonts-style display-2">
                      {data.title}
                    </h2>
                    <div>
                      <div className="icon-block pb-3">
                        <span className="icon-block__icon">
                          <span
                            className={`mbr-iconfont ${data.icon}`}
                            media-simple="true"
                          ></span>
                        </span>
                        <h4 className="icon-block__title align-left mbr-fonts-style display-5">
                          {data.iconText}
                        </h4>
                      </div>
                      {/* <div className="icon-contacts pb-3">
                              <h5 className="align-left mbr-fonts-style display-7">{ data.text }</h5>
                              <p className="mbr-text align-left mbr-fonts-style display-7"></p>
                          </div> */}
                    </div>
                    <div data-form-type="formoid">
                      <Mutation
                        mutation={SEND_MESSAGE_MUTATION}
                        variables={this.finalData()}
                      >
                        {(sendMessage, { loading, error }) => (
                          <form
                            className="block mbr-form"
                            method="post"
                            data-form-title="Contact form"
                          >
                            <DisplayError error={error} />
                            <div className="row">
                              <div
                                className="col-md-12 multi-horizontal"
                                data-for="name"
                              >
                                <FieldErrorText>
                                  {this.state.fullnameError &&
                                    this.state.fullnameError}
                                </FieldErrorText>
                                <input
                                  type="text"
                                  className="form-control input"
                                  name="fullname"
                                  data-form-field="Name"
                                  placeholder={data.placeholders.name}
                                  required
                                  id="name-form4-n"
                                  value={this.state.name}
                                  onChange={e => this.saveToState(e)}
                                  disabled={loading}
                                />
                              </div>
                              {/* <div className="col-md-6 multi-horizontal" data-for="phone">
                                          <FieldErrorText>{ this.state.phoneError && this.state.phoneError }</FieldErrorText>
                                          <input type="text" className="form-control input" name="phone" data-form-field="Phone" placeholder={data.placeholders.phone} id="phone-form4-n" value={this.state.phone} onChange={e => this.saveToState(e)} disabled={loading} />
                                      </div> */}
                              <div className="col-md-12" data-for="email">
                                <FieldErrorText>
                                  {this.state.emailError &&
                                    this.state.emailError}
                                </FieldErrorText>
                                <input
                                  type="email"
                                  className="form-control input"
                                  name="email"
                                  data-form-field="Email"
                                  placeholder={data.placeholders.email}
                                  required
                                  id="email-form4-n"
                                  value={this.state.email}
                                  onChange={e => this.saveToState(e)}
                                  disabled={loading}
                                />
                              </div>
                              <div className="col-md-12" data-for="subject">
                                <FieldErrorText>
                                  {this.state.subjectError &&
                                    this.state.subjectError}
                                </FieldErrorText>
                                <input
                                  type="text"
                                  className="form-control input"
                                  name="subject"
                                  data-form-field="Subject"
                                  placeholder={data.placeholders.subject}
                                  required
                                  id="subject-form4-n"
                                  value={this.state.subject}
                                  onChange={e => this.saveToState(e)}
                                  disabled={loading}
                                />
                              </div>
                              <div className="col-md-12" data-for="message">
                                <FieldErrorText>
                                  {this.state.messageError &&
                                    this.state.messageError}
                                </FieldErrorText>
                                <textarea
                                  className="form-control input"
                                  name="message"
                                  rows="3"
                                  data-form-field="Message"
                                  placeholder={data.placeholders.message}
                                  style={{ resize: 'none' }}
                                  id="message-form4-n"
                                  value={this.state.message}
                                  onChange={e => this.saveToState(e)}
                                  disabled={loading}
                                />
                              </div>
                              <div
                                className="col-md-12"
                                data-for="recaptcha"
                                style={{ alignItems: 'center' }}
                              >
                                <ReCAPTCHA
                                  sitekey={process.env.RECAPTCHA_CLIENT_KEY}
                                  onChange={this.verifyCaptcha}
                                  onExpired={this.expireCaptcha}
                                />
                              </div>
                              <div
                                className="input-group-btn col-md-12"
                                style={{ marginTop: '10px' }}
                              >
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-form display-4"
                                  disabled={loading || this.state.disabled}
                                  onClick={e => this.onSubmit(e, sendMessage)}
                                >
                                  {loading ? `💌 Sending...` : data.submitText}
                                </button>
                              </div>
                            </div>
                          </form>
                        )}
                      </Mutation>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
