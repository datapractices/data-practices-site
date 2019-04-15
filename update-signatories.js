const axios = require('axios')
const csvjson = require('csvjson')
const fs = require('fs')

const manifestSignatoriesQueryUrl = 'https://download.data.world/s/ql6c3noiz6n44xrlolwnpzjbwsmrra'

axios.get(manifestSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const manifestoSignatories = decorateWithSocialNetwork(csvjson.toObject(response.data))

    fs.writeFileSync('./contents/manifesto/signatories2.json', JSON.stringify(manifestoSignatories))
  },
  error => console.error('Failed to write approved manifesto signatories: ', error)
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
