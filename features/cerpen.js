const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const cerpen2 = require('../lib/cerpen')

const fs = require('fs')
const fetch = require('node-fetch')
const request = require('request')

__path = process.cwd()
         
     async function cerpennn(req, res) {
            try {
            let category = req.query.category
            let apikey = req.query.apikey
            if (!category) return res.status(400).send({ status: 400, message: 'category parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await cerpen2(category)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via whatsapp wa.me/6285714627920', result: 'error' })
         }
     }

module.exports = { 
   cerpennn
}