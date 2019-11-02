export default function validateEmail(email) {
  if (
    /\b[a-zA-Z0-9\u00C0-\u017F._%+-]+@[a-zA-Z0-9\u00C0-\u017F.-]+\.[a-zA-Z]{2,}\b/.test(
      email
    )
  ) {
    return true
  }
  return false
}
