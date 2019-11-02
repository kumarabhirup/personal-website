function validateEmail(mail): boolean {
  if (
    /\b[a-zA-Z0-9\u00C0-\u017F._%+-]+@[a-zA-Z0-9\u00C0-\u017F.-]+\.[a-zA-Z]{2,}\b/.test(
      mail
    )
  ) {
    return true
  }
  return false
}

export default validateEmail
