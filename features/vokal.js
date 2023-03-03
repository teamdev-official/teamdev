const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getBuffer, sleep } = require('../lib/function')

const fs = require('fs')
const genshin = require('genshin')
const fetch = require('node-fetch')
const request = require('request')

__path = process.cwd()
     
     async function katahilih(req, res) {
            try {
            let kata = req.query.kata
            let apikey = req.query.apikey
            if (!kata) return res.status(400).send({ status: 400, message: 'kata parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            const lower = /[aiueo]/g
            const upper = /[AIUEO]/g
            const good = kata.replace(lower, 'i').replace(upper, 'I')
             res.status(200).json({ status: 200, result: good })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
         }
     }
     
     async function katahuluh(req, res) {
            try {
            let kata = req.query.kata
            let apikey = req.query.apikey
            if (!kata) return res.status(400).send({ status: 400, message: 'kata parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            const lower = /[aiueo]/g
            const upper = /[AIUEO]/g
            const good = kata.replace(lower, 'u').replace(upper, 'U')
             res.status(200).json({ status: 200, result: good })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
         }
     }
     
     async function katahalah(req, res) {
            try {
            let kata = req.query.kata
            let apikey = req.query.apikey
            if (!kata) return res.status(400).send({ status: 400, message: 'kata parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            const lower = /[aiueo]/g
            const upper = /[AIUEO]/g
            const good = kata.replace(lower, 'a').replace(upper, 'A')
             res.status(200).json({ status: 200, result: good })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
         }
     }
     
     async function kataheleh(req, res) {
            try {
            let kata = req.query.kata
            let apikey = req.query.apikey
            if (!kata) return res.status(400).send({ status: 400, message: 'kata parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            const lower = /[aiueo]/g
            const upper = /[AIUEO]/g
            const good = kata.replace(lower, 'e').replace(upper, 'E')
             res.status(200).json({ status: 200, result: good })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
         }
     }
     
     async function kataholoh(req, res) {
            try {
            let kata = req.query.kata
            let apikey = req.query.apikey
            if (!kata) return res.status(400).send({ status: 400, message: 'kata parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            const lower = /[aiueo]/g
            const upper = /[AIUEO]/g
            const good = kata.replace(lower, 'o').replace(upper, 'O')
             res.status(200).json({ status: 200, result: good })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
         }
     }
          
     
module.exports = { 
   katahilih,
   katahuluh,
   katahalah,
   kataheleh,
   kataholoh
}