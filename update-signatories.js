const axios = require('axios')
const csvjson = require('csvjson')
const fs = require('fs')

const manifestSignatoriesQueryUrl = 'https://query.data.world/s/AHh98AY4I4Q-C3LYuAdu7eF_xpv1tS'
const codeOfEthicsSignatoriesQueryUrl = 'https://query.data.world/s/01L82qtW73jvWN6vAqEDDwYY4jRgdg'

axios.get(manifestSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const manifestoSignatories = decorateWithSocialNetwork(csvjson.toObject(response.data))

    fs.writeFileSync('./contents/manifesto/signatories.json', JSON.stringify(manifestoSignatories))
  },
  error => console.error('Failed to write approved manifesto signatories: ', error)
)

axios.get(codeOfEthicsSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const codeOfEthicsSignatories = decorateWithSocialNetwork(csvjson.toObject(response.data))
    fs.writeFileSync('./contents/community-principles-on-ethical-data-sharing/signatories.json', JSON.stringify(codeOfEthicsSignatories))
  },
  error => console.error('Failed to write approved code of ethics signatories: ', error)
)

function decorateWithSocialNetwork (list) {
  return list.map(signatory => {
    if (signatory.social_url.startsWith("https://twitter.com")) {
      signatory.socialNetwork = 'twitter'
    } else if (signatory.social_url.startsWith("https://www.linkedin.com")) {
      signatory.socialNetwork = 'linkedin'
    } else if (signatory.social_url.startsWith("https://github.com")) {
      signatory.socialNetwork = 'github'
    }
    return signatory
  })
}
