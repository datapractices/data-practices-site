const axios = require('axios')
const mandrill = require('mandrill-api/mandrill')
const fs = require('fs')

// TODO: implement for CPEDS signatories too

const client = new mandrill.Mandrill(process.env['DATA_PRACTICES_MANDRILL_KEY'])

const lastManifestoEmail = JSON.parse(fs.readFileSync('./contents/manifesto/last-email-sent'))['last-email']
const manifestoSignatories = JSON.parse(fs.readFileSync('./contents/manifesto/signatories2.json'))
const newManifestoSignatories = manifestoSignatories.filter(
    (s) => {
        return parseInt(s.number) > lastManifestoEmail
    })

let lastManifestoProcessedDuringCurrentSession = lastManifestoEmail

const message = {
    subject: 'Your name is live on datapractices.org',
    from_email: 'noreply@datapractices.org',
    from_name: 'Manifesto for Data Practices Community',
    to: newManifestoSignatories.map((s) => {
        return {
            email: s.email_address,
            name: s.full_name,
            type: 'to'
        }
    }),
    merge: true,
    merge_language: 'handlebars',
    merge_vars: newManifestoSignatories.map((s) => {
        lastManifestoProcessedDuringCurrentSession = s.number
        console.log(`${s.email_address} = ${s.number}`)
        return {
            rcpt: s.email_address,
            vars: [{
                name: 'full_name',
                content: s.full_name
            }, {
                name: 'snum',
                content: s.number
            }]
        }
    })
}

client.messages.sendTemplate(
    {
        message: message,
        template_name: 'manifesto-signatory-confirm',
        template_content: {}
    },
    (result) => {
        console.log(result)
    },
    (error) => {
        console.error(error)
    })

fs.writeFileSync(
    './contents/manifesto/last-email-sent',
    JSON.stringify({
        'last-email': lastManifestoProcessedDuringCurrentSession
    }))

console.log(JSON.stringify({
    'last-email': lastManifestoProcessedDuringCurrentSession
}))