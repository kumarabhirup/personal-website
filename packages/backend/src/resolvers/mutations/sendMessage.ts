import '../../utils/env'
import * as fetch from 'isomorphic-fetch'

import validateEmail from '../../utils/validateEmail'

async function sendMessage(parent, args, context): Promise<object> {
  const data = { ...args }
  delete data.humanKey

  // Check fullname
  if (args.fullname.length < 4) {
    throw new Error(`Fullname so small? 🤔`)
  }

  // Validate email
  if (!validateEmail(args.email)) {
    throw new Error(`Please enter your CORRECT EMAIL ADDRESS! 😡`)
  }

  // Validate subject
  if (args.subject.length < 6) {
    throw new Error(`I hate lazy ppl writing less in subject field!`)
  }

  // Validate message
  if (args.message.length < 9) {
    throw new Error(`Can you not express yourself longer?`)
  }

  // Validate Phone number
  if (args.phone != null) {
    const isPhoneValid = await fetch(
      `http://apilayer.net/api/validate?access_key=${process.env.APILAYER_KEY}&number=${args.phone}`
    )
      .then(res => res.json())
      .then(json => json.valid)
      .catch(err => {
        throw new Error(`Error in apilayer API. ${err.message}`)
      })

    if (!isPhoneValid) {
      throw new Error(`Please write a valid phone number.`)
    }
  }

  // Validate Human
  const isHuman = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      },
      body: `secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${args.humanKey}`,
    }
  )
    .then(res => res.json())
    .then(json => json.success)
    .catch(err => {
      throw new Error(`Error in Google Siteverify API. ${err.message}`)
    })

  if (args.humanKey == null || !isHuman) {
    throw new Error(`YOU ARE NOT A HUMAN.`)
  }

  // JUST DO IT!!!
  const contact = await context.prisma.createContact({ ...data })
  return contact
}

export default sendMessage
