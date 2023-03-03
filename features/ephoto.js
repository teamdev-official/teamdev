const { cekKey, limitAdd, isLimit } = require('../database/db');
const { getBuffer, sleep } = require('../lib/function')

const fs = require('fs')
const axios = require('axios')
const fetch = require('node-fetch')

__path = process.cwd()
     
     async function wetglass2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-text-on-wet-glass-online-589.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }
         
     async function coveramongus(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-cover-image-for-the-game-among-us-online-762.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }
         
       async function advancedglow(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/advanced-glow-effects-74.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }
         
      async function nigeria3dflag(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      
         
      async function americanflag3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      
         
     async function eraserdeleting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      
         
      async function blackpink20(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      
         
      async function blackpinkneon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      
         
      async function glowingtext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-glowing-text-effects-online-706.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      
         
      async function travelingbear(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          

    async function underwater3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/3d-underwater-text-effect-online-682.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
     async function bearlogo2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/free-bear-logo-maker-online-673.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
      async function cartoongraffiti2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
      async function cutegirlpaintinggraffiti(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/cute-girl-painting-graffiti-text-effect-667.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
      async function graffititext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-graffiti-text-effect-on-the-wall-online-665.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
       async function graffititext2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/graffiti-text-5-180.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
       async function graffititext3(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/graffiti-text-text-effect-online-178.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
      async function multicolor3dpapercut(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
      async function watercolortext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
      async function cloudssky(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      

      async function pubgmascot(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/pubg-mascot-logo-maker-for-an-esports-team-612.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          

     async function blackpinklogo(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-blackpink-logo-online-free-607.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

     async function gradient3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               
         
      async function gradient3d2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-3d-gradient-text-effect-online-686.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

    async function sandsummerbeach(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          
         
     async function sandsummerbeach2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          

     async function luxurygold(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            

    async function tahun(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/1917-style-text-effect-523.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          

      async function pubgbirthday(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-name-on-pubg-birthday-cake-images-522.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

     async function neonlight27(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }          

     async function puppycute(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-puppy-cute-animated-online-478.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            

    async function royaltext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/royal-text-effect-online-free-471.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function rosebirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/heart-shaped-rose-birthday-cake-with-name-edit-469.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
       async function chocolatebirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/chocolate-birthday-cake-with-candle-with-name-generator-461.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

     async function hologram3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function galaxystyle(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

     async function lightgreenneon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-light-effects-green-neon-online-429.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function glossychrome2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/glossy-chrome-text-effect-online-424.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
       async function greenbrushtext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/green-brush-text-effect-typography-maker-online-153.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
       async function cakes(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/writing-on-the-cakes-127.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

     async function metallogo(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/metal-logo-online-108.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

     async function noeltext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/noel-text-effect-online-99.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               
   
     async function glittergold(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/glitter-gold-98.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function textcake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-cake-90.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            
 
    async function starsnight10(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/stars-night-online-1-85.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
       
     async function roadpainttext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/road-paint-text-effect-70.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function wooden3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/wooden-3d-text-effect-59.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

     async function wooden3d2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/3d-wooden-text-effects-online-104.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
      
      async function writegalaxy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-galaxy-online-18.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function writegalaxybat(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-galaxy-bat-17.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function crack3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-3d-crack-text-effect-online-704.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            

     async function brokenglass2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-broken-glass-text-effect-online-698.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function artpapercut(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/free-online-art-paper-cut-text-effects-695.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

     async function shinymetallic3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-3d-shiny-metallic-text-effect-online-685.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

     async function neondevil23(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/neon-devil-wings-text-effect-online-683.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function christmassnow2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/christmas-snow-text-effect-online-631.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

    async function snow3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-snow-3d-text-effect-free-online-621.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function colorfulbirthdayfoilballoon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/colorful-birthday-foil-balloon-text-effects-620.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

    async function cloudsky(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-cloud-text-effect-in-the-sky-618.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            

     async function sandmessages(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-names-and-messages-on-the-sand-online-582.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

     async function realistic3dsand(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/realistic-3d-sand-text-effect-online-580.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

    async function summerysandwriting(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-a-summery-sand-writing-text-effect-577.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function funnyminion(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/funny-minion-text-effect-online-544.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function hotairballoon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }        

    async function lovelycute3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/lovely-cute-3d-text-effect-with-pig-397.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

   async function greenneon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/green-neon-text-effect-395.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function joker2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-avatar-online-style-joker-365.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function darkgreentypography(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/dark-green-typography-online-359.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

    async function typography(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/typography-online-leaf-autumn-358.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            

     async function typography2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-typography-status-online-with-impressive-leaves-357.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
       
     async function typography3(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/typography-maker-online-5-343.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }      

    async function typography4(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/typography-maker-facebook-online-340.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }        
         
     async function typography5(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/make-typography-text-online-338.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }        

     async function typographytexture(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/typography-texture-online-nature-theme-342.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

    async function firework2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-firework-effect-356.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              
         
     async function dragonsteel(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/dragon-steel-text-effect-online-347.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

    async function lightgalaxy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-light-galaxy-effectt-345.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

     async function hotmetallic(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/online-hot-metallic-effect-341.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

     async function angelwing(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/angel-wing-effect-329.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

    async function metallictext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/metallic-text-effect-with-impressive-font-307.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function mechanical(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-your-name-in-a-mechanical-style-306.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
     
     async function metaltext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/metal-text-effect-online-new-305.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function metaltext2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/metal-text-effect-online-110.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
      
     async function jeanfabric(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-effect-on-jean-fabric-304.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
       
      async function water(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-water-effect-text-online-295.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }           

     async function water2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/water-text-effects-online-106.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function metalborder(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-metal-border-294.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function galaxytree(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-galaxy-tree-effect-288.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
     
     async function galaxy1(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/galaxy-text-effect-new-258.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

     async function galaxy2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/galaxy-text-effect-116.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function leaves(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-letters-on-the-leaves-248.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
     
     async function fabric2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/fabric-text-effect-247.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function messagecoffee(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/message-coffee-245.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function incandescentbulbs(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-effects-incandescent-bulbs-219.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function moderngold(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/modern-gold-5-215.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function moderngold2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/modern-gold-4-213.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

     async function moderngold3(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/modern-gold-3-212.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function moderngoldsilver(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/modern-gold-silver-210.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function moderngoldred(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/modern-gold-red-183.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               
  
    async function moderngoldpurple(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/modern-gold-purple-175.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   
         
      async function graffiti3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-graffiti-3d-208.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function wingsgalaxy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/wings-galaxy-206.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function neontext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/neon-text-effect-light-200.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
       async function neontext2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/neon-text-effect-171.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function neontext3(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/neon-text-effect-68.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function graffiticolor1(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/graffiti-color-199.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }              

    async function chocolate(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-text-on-chocolate-186.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function capercut(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/caper-cut-effect-184.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function covergraffiti(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/cover-graffiti-181.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function writegraffiti(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/graffiti-text-3-179.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
       async function wingstext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/wings-text-effect-176.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         

    async function viettel(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/logo-viettel-156.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function matrixtext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/matrix-text-effect-154.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function ligatures(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/ligatures-effects-from-leaves-146.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

     async function zombie3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/zombie-3d-text-effect-143.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

    async function wordgreenflares(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-word-green-flares-140.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }        

    async function cloudtext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/cloud-text-effect-139.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

    async function water3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/water-3d-text-effect-online-126.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function blueneon(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/blue-neon-text-effect-117.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function dragonfire2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/dragon-fire-text-effect-111.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }     

     async function snow(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/snow-on-text-online-107.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }            

      async function thundertext2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/thunder-text-effect-online-97.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function diamondtext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/diamond-text-95.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function candytext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/candy-text-effect-94.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function colorfultext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/colorful-text-effects-93.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function chrometext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/chrome-text-effect-91.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }       

     async function cubic3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/3d-cubic-text-effect-online-88.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function bokehtext2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/bokeh-text-effect-86.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function starsnight11(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/stars-night-online-84.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function foggyrainy(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/foggy-rainy-text-effect-75.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
    async function underwatertext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/underwater-text-73.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
     async function paintsplatter(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/paint-splatter-text-effect-72.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               
       
      async function plasmatext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/plasma-text-effects-online-71.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                
         
      async function colorfulglowing(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/colorful-glowing-text-effect-69.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   
         
     async function retrotext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/retro-text-effect-67.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   
         
     async function graffitilettering(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/graffiti-lettering-online-64.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   
         
     async function greenlight22(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-unique-word-green-light-63.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   

    async function cloth(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-on-cloth-effect-62.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                

    async function writingchalk1(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/writing-chalk-on-the-blackboard-61.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

     async function writingchalk2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   

    async function sunlightshadow2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/sunlight-shadow-text-204.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }             

    async function flowervalentinesday(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/beautiful-flower-valentine-s-day-greeting-cards-online-512.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                

    async function heartflashlight2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-heart-flashlight-188.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                    

    async function lovecard(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/love-card-187.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                                  
          
      async function romanticanniversarybirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/romantic-anniversary-birthday-cake-with-name-edit-473.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                     

    async function flowerbirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-name-on-flower-birthday-cake-pics-472.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                         

     async function romanticflowerheartbirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/romantic-flower-heart-birthday-cake-by-name-edit-466.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                     

    async function amazingflowerbirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/amazing-flower-birthday-cake-with-name-generator-465.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                      

    async function redrosebirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-name-on-red-rose-birthday-cake-images-462.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                       

    async function birthdaycards3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-birthday-cards-by-3d-names-373.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                      

    async function greetingbirthdaycake(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-a-greeting-on-the-birthday-cake-229.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                                  
          
      async function birthdaycake27(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/birthday-cake-96.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }               

    async function flamelettering(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/flame-lettering-effect-372.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                   

   async function womenday(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-card-8-march-happy-international-women-s-day-online-518.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                     

   async function womendaycards(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-beautiful-international-women-s-day-cards-399.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                      

     async function horrorcemeterygate(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-your-name-on-horror-cemetery-gate-597.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                       

   async function halloweenfire1(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/halloween-fire-text-effect-online-369.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                      

     async function halloweenfire2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/halloween-fire-text-online-83.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                        

    async function frankenstainhalloween(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-frankenstain-halloween-style-text-322.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                       

    async function halloween(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/create-halloween-theme-text-321.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                  

   async function halloween2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/cards-halloween-online-81.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                     

    async function halloween3(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-halloween-80.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                    

    async function halloween4(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/text-effect-halloween-online-79.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                           

    async function writinghorror(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/writing-horror-text-online-266.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                 

     async function writinghorror2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/writing-horror-letters-on-metal-plates-265.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                                  
          
      async function writeblood(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/write-blood-text-on-the-wall-264.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                     

     async function bloodwriting2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/blood-writing-text-online-77.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                          

    async function halloweenbats(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto1?url=https://en.ephoto360.com/halloween-bats-text-effects-76.html&text=${text}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }                                  
          
     async function banneramongus(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-a-banner-game-among-us-with-your-name-763.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function pornhub(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function captainamerica(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-a-cinematic-captain-america-text-effect-online-715.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function realisticvintage3dlight(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-realistic-vintage-3d-light-bulb-608.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
     async function juventus2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-juventus-shirt-effect-536.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function tiktokmaker(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/tik-tok-text-effects-online-generator-485.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function lifebuoys2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/write-letters-on-life-buoys-484.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function writestatus(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/write-status-quotes-on-photo-online-free-455.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function typography55(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-typography-status-quotes-images-online-for-free-452.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function avengers3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-logo-3d-style-avengers-online-427.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function wood3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-3d-wood-text-effects-online-free-705.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function lovelyfloralornamentalbanner(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/lovely-floral-ornamental-banner-online-603.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function latestspace3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/latest-space-3d-text-effect-online-559.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function stone3d(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-3d-stone-text-effect-online-508.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }        

     async function wolfgalaxy2(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-logo-avatar-wolf-galaxy-online-366.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function polygonlogo(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-logo-avatar-online-style-polygon-logo-320.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
    async function paulscholes(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/paul-scholes-shirt-foot-ball-335.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
      
      async function steeltext(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/steel-text-effect-66.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
       async function heatedsteel(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/heated-steel-lettering-effect-65.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function loveballoonscards(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-love-balloons-cards-334.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function balloonslove(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/write-letters-on-the-balloons-love-189.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function messi(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-football-shirt-messi-barca-online-268.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function realmadrid(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/text-on-shirt-club-real-madrid-267.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function premierleaguecup(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-photo-premier-league-cup-263.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
         
      async function barca(req, res) {            
         let apikey = req.query.apikey
         let text = req.query.text
         let text2 = req.query.text2
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (100 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
         fetch(encodeURI(`https://dap-apiz.herokuapp.com/ephoto2?url=https://en.ephoto360.com/create-barca-shirt-effect-262.html&text1=${text}&text2=${text2}`))
        .then(response => response.json())
        .then(async data => {
         let result = data
         let buffer = await fetch(data.result)
         res.type('png')
         res.send(await buffer.buffer())
         }).catch(e => {
         console.log(e)
         res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/6285714627920', result: 'error' })
         })
         }         
      
     
     
module.exports = { 
   americanflag3d,
   nigeria3dflag,
   advancedglow,
   coveramongus,
   wetglass2,
   travelingbear,
   glowingtext,
   blackpinkneon,
   blackpink20,
   eraserdeleting,
   cutegirlpaintinggraffiti,
   cartoongraffiti2,
   bearlogo2,
   underwater3d,
   graffititext,
   graffititext2,
   graffititext3,
   blackpinklogo,
   pubgmascot,
   cloudssky,
   watercolortext,
   multicolor3dpapercut,
   tahun,
   luxurygold,
   sandsummerbeach,
   sandsummerbeach2,
   gradient3d2,
   gradient3d,
   rosebirthdaycake,
   chocolatebirthdaycake,
   royaltext,
   puppycute,
   neonlight27,
   pubgbirthday,
   greenbrushtext,
   glossychrome2,
   lightgreenneon,
   galaxystyle,
   hologram3d,
   textcake,
   glittergold,
   noeltext,
   metallogo,
   cakes,
   writegalaxy,
   wooden3d2,
   wooden3d,
   roadpainttext,
   starsnight10,
   shinymetallic3d,
   artpapercut,
   brokenglass2,
   crack3d,
   writegalaxybat,
   cloudsky,
   colorfulbirthdayfoilballoon,
   snow3d,
   christmassnow2,
   neondevil23,
   hotairballoon,
   funnyminion,
   summerysandwriting,
   realistic3dsand,
   sandmessages,
   darkgreentypography,
   typography,
   typography2,
   typography3,
   typography4,
   typography5,
   typographytexture,
   joker2,
   greenneon,
   lovelycute3d,
   hotmetallic,
   lightgalaxy,
   dragonsteel,
   firework2,
   jeanfabric,
   metaltext,
   metaltext2,
   mechanical,
   metallictext,
   angelwing,
   leaves,
   galaxy1,
   galaxy2,
   galaxytree,
   metalborder,
   water,
   water2,
   fabric2,
   messagecoffee,
   incandescentbulbs,
   moderngold,
   moderngold2,
   moderngold3,
   neontext,
   neontext2,
   neontext3,
   wingsgalaxy,
   graffiti3d,
   moderngoldpurple,
   moderngoldred,
   moderngoldsilver,
   writegraffiti,
   covergraffiti,
   capercut,
   chocolate,
   graffiticolor1,
   zombie3d,
   ligatures,
   matrixtext,
   viettel,
   wingstext,
   dragonfire2,
   blueneon,
   water3d,
   cloudtext,
   wordgreenflares,
   colorfultext,
   candytext,
   diamondtext,
   thundertext2,
   snow,
   foggyrainy,
   starsnight11,
   bokehtext2,
   cubic3d,
   chrometext,
   retrotext,
   colorfulglowing,
   plasmatext,
   paintsplatter,
   underwatertext,
   writingchalk1,
   writingchalk2,
   cloth,
   greenlight22,
   graffitilettering,
   flowervalentinesday,
   sunlightshadow2,
   romanticflowerheartbirthdaycake,
   flowerbirthdaycake,
   lovecard,
   romanticanniversarybirthdaycake,
   heartflashlight2,
   birthdaycake27,
   greetingbirthdaycake,
   birthdaycards3d,
   redrosebirthdaycake,
   amazingflowerbirthdaycake,
   horrorcemeterygate,
   womendaycards,
   womenday,
   flamelettering,
   halloweenfire1,
   halloweenfire2,
   halloween,
   halloween2,
   halloween3,
   halloween4,
   frankenstainhalloween,
   writinghorror,
   writinghorror2,
   halloweenbats,
   bloodwriting2,
   writeblood,
   juventus2,
   realisticvintage3dlight,
   captainamerica,
   pornhub,
   banneramongus,
   avengers3d,
   writestatus,
   lifebuoys2,
   tiktokmaker,
   wolfgalaxy2,
   stone3d,
   latestspace3d,
   typography55,
   lovelyfloralornamentalbanner,
   wood3d,
   heatedsteel,
   steeltext,
   paulscholes,
   polygonlogo,
   loveballoonscards,
   barca,
   premierleaguecup,
   realmadrid,
   messi,
   balloonslove
}
