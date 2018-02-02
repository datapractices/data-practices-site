const axios = require('axios')
const csvjson = require('csvjson')
const fs = require('fs')

const manifestSignatoriesQueryUrl = 'https://query.data.world/s/9sBOkOomWru8CeO19vNmzN1wNrhRDY'
axios.get(manifestSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const manifestoSignatories = csvjson.toObject(response.data)
    fs.writeFileSync('./contents/manifesto/signatories.json', JSON.stringify(manifestoSignatories))
  },
  error => console.error('Failed to write approved manifesto signatories: ', error)
)
