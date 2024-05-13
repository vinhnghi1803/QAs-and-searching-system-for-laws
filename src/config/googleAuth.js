import axios from 'axios'

export async function getGoogleUserInfo(signupData, googleLogin, accessToken) {
  if (googleLogin) {
    const rawGoogleInfo = await axios.get(
      'https://people.googleapis.com/v1/people/me?personFields=names,genders,emailAddresses,locales,birthdays,addresses,phoneNumbers&key=',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )
    const responseData = JSON.parse(rawGoogleInfo.request.response)
    console.log(responseData)
    signupData.fullName = responseData.names?.[0].displayName || ''
    signupData.email = responseData.emailAddresses?.[0].value || ''
    signupData.phone = responseData.phoneNumbers?.[0].canonicalForm || ''

    const { day, month, year } = responseData.birthdays?.[0].date
    signupData.birthdays = parseDate(day, month, year)
    // const { day, month, year } = responseData.birthdays?.[0].date || ''
    // signupData.birthdays = `${day}/${month}/${year}`

    signupData.genders = responseData.genders?.[0].formattedValue || ''
    signupData.addresses = responseData.addresses?.[0].formattedValue || ''

    //Sometime login user have this but it disapear with no info
    signupData.locales = responseData.locales?.[0].value || ''
  }
}

export async function decodeGoogleIDToken(token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export function parseDate(day, month, year) {
  const birthdays = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  console.log(new Date(birthdays - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10))
  return new Date(birthdays - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
}
