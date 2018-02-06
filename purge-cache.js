const axios = require('axios')


const purge_url = 'https://api.cloudflare.com/client/v4/zones/cb1489e48d47dd5957b86f738d7054a1/purge_cache'

const flareemail = process.env['DATA_PRACTICES_CLOUDFLARE_EMAIL']
const flarekey = process.env['DATA_PRACTICES_CLOUDFLARE_KEY']

axios({
    url: purge_url,
    method: 'DELETE',
    data: {
        purge_everything: true
    },
    headers: {
        'X-Auth-Email': flareemail,
        'X-Auth-Key': flarekey,
        'Content-Type': 'application/json'
    }
}).then(
  response => {
    console.log("Purge Success!")
  },
  error => console.error('Failed to write approved manifesto signatories: ', error)
)
