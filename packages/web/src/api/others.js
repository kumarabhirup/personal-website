import React from 'react'
import { meta } from './meta';

export const page404Text = {
  title: `You seem to exist at a wrong place...`,
  body: (
    <>
      Hey, I'm <strong>Kumar Abhirup</strong>. Visit the <a href={meta.domain}>homepage</a> to know more about me. 😃
    </>
  )
}

export const contactSection = {
  title: `👋🏻 Drop me a message`,
  icon: `mbri-speed`,
  iconText: `Instant reply`,
  text: `Trust. Write. I don't disclose 😜`,
  submitText: `SEND MESSAGE 💌`,
  map: "https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=IQubex,+Nashik",
  placeholders: {
    name: `* Full name`,
    phone: `Phone: +91-7304257125`,
    email: `* A valid email`,
    subject: `* Subject of the message`,
    message: `* Write in brief...`
  },
  disabled: true
}