const { getBuffer, sleep } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()
         
     async function waifu2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/waifu`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function neko2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function shinobu2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/shinobu`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function megumin(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/megumin`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function bully(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/bully`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function cuddle(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/cuddle`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function cry(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/cry`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function hug(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/hug`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function awoo(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/awoo`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function kiss(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/kiss`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function lick(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/lick`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function slap(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/slap`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }     
     
     async function pat(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/pat`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function bite(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/bite`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function yeet(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/yeet`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function bonk2(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/bonk`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
      async function nom(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/nom`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function smile(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/smile`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function wave(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/wave`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }     
     
     async function blush(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/blush`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function smug(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/smug`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function glomp(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/glomp`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function happy(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/happy`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function dance(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/dance`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function cringe(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/cringe`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function highfive(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/highfive`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
     
     async function handhold(req, res) {
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://waifu.pics/api/sfw/handhold`))
         .then(response => response.json())
         .then(async data => {
             let result = data
             let buffer = await fetch(data.url)
             res.type('png')
             res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
      })
     }
   
module.exports = {    
   waifu2, 
   neko2, 
   shinobu2,
   megumin,
   bully,
   cuddle,
   cry,
   awoo,
   kiss,
   lick,
   slap,
   bonk2,
   yeet,
   bite,
   pat,
   hug,
   smug,
   blush,
   wave,
   smile,
   nom,
   highfive,
   cringe,
   dance,
   happy,
   glomp,
   handhold
}