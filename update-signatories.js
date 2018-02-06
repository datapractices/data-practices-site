const axios = require('axios')
const csvjson = require('csvjson')
const fs = require('fs')

const manifestSignatoriesQueryUrl = 'https://query.data.world/s/gIfPpOHbjhyryOsvO5MoLekbz6wioW'
const codeOfEthicsSignatoriesQueryUrl = 'https://query.data.world/s/sPcUfUm_bl5Wr79YSvAQJO42rcwh5W'

axios.get(manifestSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const manifestoSignatories = csvjson.toObject(response.data)
    fs.writeFileSync('./contents/manifesto/signatories.json', JSON.stringify(manifestoSignatories))
  },
  error => console.error('Failed to write approved manifesto signatories: ', error)
)

axios.get(codeOfEthicsSignatoriesQueryUrl).then(
  response => {
    // parse cs
    const codeOfEthicsSignatories = csvjson.toObject(response.data)
    fs.writeFileSync('./contents/code-of-ethics/signatories.json', JSON.stringify(codeOfEthicsSignatories))
  },
  error => console.error('Failed to write approved code of ethics signatories: ', error)
)
