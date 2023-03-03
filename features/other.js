const { Wangy, Nenen, Simp, Sherk, Wangy2 } = require('../lib/stres')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const ch = require('../lib/scraper')
const { getBuffer, sleep } = require('../lib/function')

const fs = require('fs')
const genshin = require('genshin')
const fetch = require('node-fetch')
const request = require('request')

__path = process.cwd()
     
     async function wangy(req, res) {
         let name = req.query.name
         let apikey = req.query.apikey
         if (!name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await Wangy(name)
         res.status(200).json({ status: 200, result: result })
     }
     
     async function wangy2(req, res) {
         let name = req.query.name
         let apikey = req.query.apikey
         if (!name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await Wangy2(name)
         res.status(200).json({ status: 200, result: result })
     }
    
    async function nenen(req, res) {
         let name = req.query.name
         let apikey = req.query.apikey
         if (!name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await Nenen(name)
         res.status(200).json({ status: 200, result: result })
     }
     
     async function simp(req, res) {
         let name = req.query.name
         let apikey = req.query.apikey
         if (!name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await Simp(name)
         res.status(200).json({ status: 200, result: result })
     }
     
     async function sherk(req, res) {
         let name = req.query.name
         let apikey = req.query.apikey
         if (!name) return res.status(400).send({ status: 400, message: 'name parameter cannot be empty', result: 'error' })
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await Sherk(name)
         res.status(200).json({ status: 200, result: result })
     }
     
     async function gi(req, res) {
         try {
            let chara = req.query.chara
            let apikey = req.query.apikey
            if (!chara) return res.status(400).send({ status: 400, message: 'chara parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await await genshin.characters(chara)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via telegram at https://t.me/iamkizakixd or wa.me/6285878313791', result: 'error' })
         }
     }
     
     async function giwp(req, res) {
         try {
            let weapon = req.query.weapon
            let apikey = req.query.apikey
            if (!weapon) return res.status(400).send({ status: 400, message: 'weapon parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await await genshin.weapons(weapon)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function herodetail(req, res) {
         try {
            let hero = req.query.hero
            let apikey = req.query.apikey
            if (!hero) return res.status(400).send({ status: 400, message: 'hero parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await await ch.herodetails(hero)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }
     
     async function herolist(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = await await ch.herolist()
         res.status(200).json({ status: 200, result: result })
     }
     
     async function ssweb(req, res) {
         let apikey = req.query.apikey
         let url = req.query.url
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!url) return res.status(400).send({ status: 400, message: 'url parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://shot.screenshotapi.net/screenshot?&url=${url}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.screenshot)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }

     async function simisimi(req, res) {
         try {
            let text = req.query.text
            let apikey = req.query.apikey
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://api.simsimi.net/v2/?text=${text}&lc=id`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result.success })
            })
          } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }    
     
     async function tokohindo(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         let result = JSON.parse(fs.readFileSync(__path +'/lib/data/others/tokohindo.json'))         
         res.json({ status: 200, result: result.result })
     }
     
     async function styletext(req, res) {
            try {
            let text = req.query.text
            let apikey = req.query.apikey
            if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await await ch.styletext(text)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         }
     }

module.exports = { 
   wangy, 
   wangy2,
   nenen, 
   simp, 
   sherk, 
   gi,
   tokohindo,
   giwp,
   ssweb,
   herodetail,
   herolist,
   simisimi,
   styletext
}
