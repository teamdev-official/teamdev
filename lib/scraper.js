const request = require('request')
const cheerio = require('cheerio')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
const got = require('got')
const qs = require("qs")
const fakeUa = require('fake-useragent')
const { sizeFormatter } = require("human-readable");
const ytdl = require('ytdl-core');
const yts = require('yt-search');
const { shorts } = require('./function')
const APIKey = "18d044eb8e1c06eaf7c5a27bb138694c";
const units = "metric";

function bytesToSize(bytes) {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };

async function ytDonlodMp4(url) {
    return new Promise(async(resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength, approxDurationMs } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes,
                        duration: formated(parseInt(approxDurationMs))
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
            let tinyUrl = resultFix[0].video;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = parseInt(getUrl.videoDetails.viewCount || 0)
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({               
                title,
                result: tinyUrl,
                quality: resultFix[0].quality,
                size: resultFix[0].size,
                duration: resultFix[0].duration,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
};

async function ytDonlodMp3(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let { contentLength, approxDurationMs } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes,
                        duration: formated(parseInt(approxDurationMs))
                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
            let tinyUrl = resultFix[0].audio;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = parseInt(getUrl.videoDetails.viewCount || 0);
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({               
                title,
                result: tinyUrl,
                size: resultFix[0].size,
                duration: resultFix[0].duration,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
}

async function ytPlayMp3(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async(getData) => {
            let result = getData.videos.slice( 0, 5 );
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url);
            }
            let random = url[0];
            let getAudio = await ytDonlodMp3(random);
            resolve(getAudio);
        }).catch(reject);
    });
};

async function ytPlayMp4(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async(getData) => {
            let result = getData.videos.slice( 0, 5 );
            let url = [];
            for (let i = 0; i < result.length; i++) {
                url.push(result[i].url);
            }
            let random = url[0];
            let getVideo = await ytDonlodMp4(random);
            resolve(getVideo);
        }).catch(reject);
    });
};

function formated(ms) { 
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60; 
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

function goredl(link){
	return new Promise(async (resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $$ = cheerio.load(data)
				const format = {
					judul: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > header > h1').text(),
					views: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > span > span.count').text(),
					comment: $$('div.single-main-container > div > div.bb-col.col-content > div > div > div > div > div.s-post-meta-block.bb-mb-el > div > div > div.col-r.d-table-cell.col-md-6.col-sm-6.text-right-sm > div > a > span.count').text(),
					link: $$('video > source').attr('src')
				}
				const result = {
					creator: 'Dani',
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function pinterest(query){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + query, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}

function pinterestdl(url) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            url: `https://www.expertsphp.com/facebook-video-downloader.php`,
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                "cookie": "__gads=ID=a826d8f71f32cdce-228526c6c4d30038:T=1656127044:RT=1656127044:S=ALNI_Mbc0q65XMPrQjf8pqxKtg_DfBEnNw; __gpi=UID=0000068f7e0217a6:T=1656127044:RT=1656334216:S=ALNI_MYDy-jLWlGuI8I9ZeSAgcTfDaJohQ; _gid=GA1.2.1776710921.1656334217; _gat_gtag_UA_120752274_1=1; _ga_D1XX1R246W=GS1.1.1656354473.4.1.1656354584.0; _ga=GA1.2.136312705.1656127045"
            },
            formData: {url: url}
        }
        request(options, async function(error, response, body) {
            if (error) throw new Error(error);
            const $ = cheerio.load(body)
            const hasil = [];
            $('#showdata > div:nth-child(4) > table > tbody > tr ').each(function(a, b) {
                const result = {                    
                    quality: $(b).find('> td:nth-child(2) > strong').text(),
                    format: $(b).find('> td:nth-child(3) > strong').text(),
                    url: $(b).find('> td:nth-child(1) > a').attr('href')
                }
                hasil.push(result)
            })
            resolve(hasil)
        });
    })
}

function film(query){
	return new Promise((resolve, reject) => {
		axios.get(`http://167.99.31.48/?s=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hasil = [];
				$('#content > div > div.los').each(function (a, b) {
                    $(b).find('article').each(function (c, d) {
                        const judul = $(d).find('div > a > div.addinfox > header > h2').text()
                        const quality = $(d).find('div > a > div > div > span').text()
                        const type = $(d).find('div > a > div.addinfox > div > i.type').text()
                        const upload = $(d).find('div > a > div.addinfox > div > span').text()
                        const link = $(d).find('div > a').attr('href');
                        const thumb = $(d).find('div > a > div > img').attr('src');
                        const result = {                         
                            judul: judul,
                            quality: quality,
                            type: type,
                            upload: upload,
                            link: link,
                            thumb: thumb,
                        };
                        hasil.push(result);
                    });
                });
				resolve(hasil)
			})
			.catch(reject)
	})
}

const mediafireDl = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nama = seplit[5]
mime = nama.split('.')
mime = mime[1]
hasil.push({ nama, mime, size, link })
return hasil
}

function solidfiles(URL) {
	return new Promise((resolve, reject) => {
		axios.request({
			url: URL,
			method: "GET",
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const token = $('#content > div > div.middle > div.right > article:nth-child(1) > section:nth-child(3) > div.buttons > form > input[type=hidden]:nth-child(1)').attr('value')
			const title = $('#content > div > div.middle > div.right > article:nth-child(1) > section.box-content.meta > h1').text().trim()
			const _size = $('#content > div > div.middle > div.right > article:nth-child(1) > section.box-content.meta > p').text().trim()
			const size_ = _size.split('-')
			const size = size_[0]
		axios({
			url: URL+'/dl',
			method: "POST",
			data: new URLSearchParams(Object.entries({csrfmiddlewaretoken: token, referrer: URL})),
			headers: {
				"User-Agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36",
				"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
			}
		}).then(respon => {
			const ch = cheerio.load(respon.data)
			const url = ch('#content > div > div.middle > div.right > article:nth-child(1) > section > p > a').attr('href')
			const result = {
				title: title,
				size: size,
				url: url
			}
			resolve(result)
		})
		})
	})
}

function igDownload(link) {
  return new Promise((resolve, reject) => {
		const options = {
			method: 'POST',
			url: "https://downloadgram.org/#downloadhere",
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			formData: {
				url: link,
				submit: ''
			}
		};
		request(options, async function(error, response, body) {
			if (error) throw new Error(error);
			const $ = cheerio.load(body)
			const result = [];
			$('#downloadBox > a').each(function(a, b) {
				result.push($(b).attr('href'))
			})
			resolve(result);
		});
	})
}

function igStory(username) {
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/instagram-story-downloader.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url':'https://www.instagram.com/'+ username,
					'action': 'story',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data.medias)
		   })
		})
	.catch(reject)
	})
}

scdl = async function (link) {
  return new Promise((resolve, reject) => {
		const options = {
			method: 'POST',
			url: "https://www.klickaud.co/download.php",
			headers: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			formData: {
				'value': link,
				'2311a6d881b099dc3820600739d52e64a1e6dcfe55097b5c7c649088c4e50c37': '710c08f2ba36bd969d1cbc68f59797421fcf90ca7cd398f78d67dfd8c3e554e3'
			}
		};
		request(options, async function(error, response, body) {
			console.log(body)
			if (error) throw new Error(error);
			const $ = cheerio.load(body)
			resolve({
				judul: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text(),
				download_count: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(3)').text(),
				thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0]
			});
		});
	})
}

function anonfiledl(url) {
	return new Promise((resolve, reject) => {
		if (!/https?:\/\//.test(url)) return reject('Invalid url!')
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text().replace('- AnonFiles', '').trim()
			let size = $('#download-url').text().split('\n')[1].replace(/ /g, '').replace(/\(|\)/g, '')
			let link = $('#download-url').attr('href')
			link = encodeURI(link)
			resolve({ title, size, link })
		}).catch(reject)
	})
}

function sfiledl(link) {
	return new Promise((resolve, reject) => {
		axios.get(link)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const nama = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(2) > b').text();
				const size = $('#download').text().split('Download File')
				const desc = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(7) > center > h1').text();
				const type = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(3)').text();
				const upload = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(5)').text();
				const uploader = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(4) > a:nth-child(2)').text();
				const download = $('body > div.w3-row-padding.w3-container.w3-white > div > div:nth-child(6)').text();
				const link = $('#download').attr('href')
				other = link.split('/')[7].split('&is')[0]
				const format = {
					judul: nama + other.substr(other.length - 6).split('.')[1],
					size: size[1].split('(')[1].split(')')[0],
					type: type,
					mime: other.substr(other.length - 6).split('.')[1],
					desc: desc,
					uploader: uploader,
					uploaded: upload.split('\n - Uploaded: ')[1],
					download_count: download.split(' - Downloads: ')[1],
					link: link
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function sfilesearch(query, page = 1) {
	return new Promise((resolve, reject) => {
		axios.get(`https://sfile.mobi/search.php?q=${query}&page=${page}`).then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.list').each(function(i, e) {
				let title = $(e).find('a').text()
				let size = $(e).text().trim().split('(')[1]
				let link = $(e).find('a').attr('href')
				if (link !== undefined) result.push({ title, size: size.replace(')', ''), link })
			})
			resolve(result)
		}).catch(reject)
	})
}


function stickerDl(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(res => {
			const $ = cheerio.load(res.data)
			const link = []
			const main = $('#stickerPack > div > div.row > div > img')

			main.each( function() {
				const result_link = $(this).attr('src').split('&d=')[0]
				const result_thumb = $('#intro > div > div > img').attr('src')
				const result_title = $('#intro > div > div > h1').text()
				link.push(result_link)	
				const result = {
					title: result_title,
					thumb: result_thumb,
					result: link
				}
			resolve(result)
			})
		}).catch(resolve)
	})
}

function pixivDl(id, ext) {
	return new Promise((resolve, reject) => {
		const result = 'https://pixiv.cat/'+id+ext
		resolve(result)
	})
}

function xnxxDl(URL) {
	return new Promise((resolve, reject) => {
		fetch(`${URL}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			const title = $('meta[property="og:title"]').attr('content');
			const videoScript = $('#video-player-bg > script:nth-child(6)').html();
			const files = {
				low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
				high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
			};
			resolve({ title, files })
		 }).catch(reject)
	})
}

function musicaldown(URL) {
    return new Promise((resolve, rejecet) => {
        axios.get('https://musicaldown.com/id', {
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            }
        }).then(res => {
            const $ = cheerio.load(res.data)
            const url_name = $("#link_url").attr("name")
            const token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")
            const token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value")
            const verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
            let data = {
                [`${url_name}`]: URL,
                [`${token_name}`]: token_,
                verify: verify
            }
        axios.request({
            url: 'https://musicaldown.com/id/download',
            method: 'post',
            data: new URLSearchParams(Object.entries(data)),
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                'cookie': res.headers["set-cookie"]
            }
        }).then(respon => {
            const ch = cheerio.load(respon.data)
        axios.request({
            url: 'https://musicaldown.com/id/mp3',
            method: 'post',
            headers: {
                'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
                'cookie': res.headers["set-cookie"]
            }
        }).then(resaudio => { 
            const hc = cheerio.load(resaudio.data)       
            const result = {
                video: ch('body > div.welcome.section > div').find('div:nth-child(2) > div.col.s12.l8 > a:nth-child(4)').attr('href'),
                audio: hc('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(4)').attr('href'),
                nowm: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(6)').attr('href'),
                video_original: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(8)').attr('href'),
                audio_original: hc('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(8)').attr('href'),
                preview: ch('body > div.welcome.section > div > div:nth-child(2) > div.col.s12.l4 > img').attr('src')
            }
        resolve(result)
      })
    })
  })
})
}

function zippyshare(urls) {
    return new Promise((resolve, reject) => {
        axios.get(urls).then(({ data }) => {
            const $ = cheerio.load(data)
            const li = $.html()
            const po = $('#dlbutton').next().html()
            const le = po.split(';')[0]
            const lo = le.split("document.getElementById('dlbutton').href =")[1]
            const result = `${urls.split('/v')[0]}${eval(lo)}`
            const ho = $('#lrbox').text().replace(/\n/g, '')
			const hasil = {
                nama: ho.split('Name:')[1].split('Size:')[0].trim(),
                ukuran: ho.split('Size:')[1].split('Uploaded:')[0].trim(),
                up_at: ho.split('Uploaded:')[1].split('          ')[0].trim(),
                link: result
            }
            resolve(hasil)
        })
    })
}

function getLatestAnime() {
	return new Promise((resolve, reject) => {
		axios.get('https://www.mynimeku.com/').then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.flexbox-item > a').each(function(i, e) {
				let title = $(e).attr('title')
				let link = $(e).attr('href')
				let status = $(e).find('div.flexbox-status').text()
				let thumb = $(e).find('div.flexbox-thumb > img').attr('data-src')
				let episode = $(e).find('div.flexbox-episode > span.eps').text().split(' ')[1]
				let type = $(e).find('div.flexbox-type').text()
				result.push({ title, status, episode, type, thumb, link })
			})
			resolve(result)
		}).catch(reject)
	})
}

function getLatestKomik() {
	return new Promise((resolve, reject) => {
		axios.get('https://www.mynimeku.com/').then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.flexbox4-item').each(function(i, e) {
				let title = $(e).find('a').attr('title')
				let link = $(e).find('a').attr('href')
				let thumb = $(e).find('div.flexbox4-thumb > img').attr('data-src')
				let type = $(e).find('div.flexbox4-type').text()
				let status = $(e).find('div.flexbox-status').text()
				let chapter = $(e).find('ul.chapter > li').text().split(' ')[1]
				result.push({ title, status, chapter, type, thumb, link })
			})
			resolve(result)
		}).catch(reject)
	})
}

function kusoNime(query) {
    return new Promise(async (resolve, reject) => {
      const optionsGet = {
        method: 'GET',
        headers: {
           'user-agent': 'Mozilla/5.0 (Linux; Android 9; Redmi 7A) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.99 Mobile Safari/537.36'
        }
    }
    const getHtml = await fetch('https://kusonime.com/?s=' + query + '&post_type=anime', optionsGet).then(rsp => rsp.text())
    const $ = cheerio.load(getHtml)
    const url = []
    $('div > div > ul > div > div > div').each(function() {
      url.push($(this).find('a').attr('href'))
    })
    const randomUrl = url[Math.floor(Math.random() * url.length)]
    const getHtml2 = await fetch(randomUrl, optionsGet).then(rsp => rsp.text())
    const $$ = cheerio.load(getHtml2)
    resolve({
        title: $$('.vezone > .venser').find('.jdlz').text(),
        thumb: $$('.vezone > .venser').find('div > img').attr('src'),
        views: $$('.vezone > .venser').find('div > div > span').text().trim().replace(' Views', ''),
        genre: $$('.vezone > .venser').find('.lexot > .info > p').eq(1).text().replace('Genre : ', ''),
        seasons: $$('.vezone > .venser').find('.lexot > .info > p').eq(2).text().replace('Seasons : ', ''),
        producers: $$('.vezone > .venser').find('.lexot > .info > p').eq(3).text().replace('Producers: ', ''),
        type: $$('.vezone > .venser').find('.lexot > .info > p').eq(4).text().replace('Type: ', ''),
        status: $$('.vezone > .venser').find('.lexot > .info > p').eq(5).text().replace('Status: ', ''),
        rating: $$('.vezone > .venser').find('.lexot > .info > p').eq(7).text().replace('Score: ', ''),
        duration: $$('.vezone > .venser').find('.lexot > .info > p').eq(8).text().replace('Duration: ', ''),
        release: $$('.vezone > .venser').find('.lexot > .info > p').eq(9).text().replace('Released on: ', ''),
        desc: $$('.vezone > .venser').find('p').eq(10).text(),
        url: randomUrl
    })
  })
}

function doujindesuSearch(query) {
	return new Promise((resolve, reject) => {
		axios.get(`https://doujindesu.xxx/?s=${query}`).then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.animposx').each(function(i, e) {
				let title = $(e).find('div.title').text().trim()
				let score = $(e).find('div.score').text().trim()
				let type = $(e).find('div.type').text().replace(/Publishing|Finished/i, '')
				let status = $(e).find('div.type').text().replace(/Manhwa|Manga|Doujinshi/i, '')
				let thumb = $(e).find('img').attr('src')
				let link = $(e).find('a').attr('href')
				result.push({ title, score, type, status, thumb, link })
			})
			resolve(result)
		}).catch(reject)
	})
}

function doujindesuDl(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('div.lm').find('h1').text().replace('.', '').trim()
			let link_dl = $('div.chright').find('a').attr('href')
			let image = []
			$('div.reader-area> img').each(function(a, b) {
				image.push($(b).attr('src'))
			})
			resolve({ title, link_dl, image })
		}).catch(reject)
	})
}

function doujindesuLatest() {
	return new Promise((resolve, reject) => {
		axios.get(`https://doujindesu.xxx/`).then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.animposx').each(function(a, b) {
				let title = $(b).find('a').attr('alt')
				let chapter = $(b).find('div.plyepisode').find('a').text().trim()
				let type = $(b).find('div.type').text()
				let score = $(b).find('div.score').text().trim()
				let thumb = $(b).find('img').attr('src')
				let link = $(b).find('div.plyepisode').find('a').attr('href')
				result.push({ title, chapter, type, score, thumb, link })
			})
			resolve(result)
		}).catch(reject)
	})
}

function mynimeSearch(query) {
	return new Promise((resolve, reject) => {
		axios.get(`https://www.mynimeku.com/?s=${query}`).then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.flexbox2-item').each(function(i, e) {
				let title = $(e).find('a').attr('title')
				let link = $(e).find('a').attr('href')
				let studio = $(e).find('span.studio').text() || '-'
				let type = $(e).find('div.type').text()
				let score = $(e).find('div.info > div.score').text().trim()
				let season = $(e).find('div.season > a').text() || '-'
				let synopsis = $(e).find('div.synops').text()
				let thumb = $(e).find('div.flexbox2-thumb > img').attr('src')
				result.push({ title, type, score, season, studio, synopsis, thumb, link })
			})
			resolve(result)
		}).catch(reject)
	})
}

function getInfoAnime(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('div.series-titlex').find('h2').text()
			let type = $('span.type').text()
			let status = $('span.status').text()
			let score = $('div.series-infoz.score > span').text()
			let premiered = $('div.series-info > ul > li:nth-child(3) > span').text().trim()
			let studios = $('div.series-info > ul > li:nth-child(4) > span').text().trim()
			let english = $('div.series-info > ul > li:nth-child(6) > span').text()
			let japanese = $('div.series-title > span').text()
			let genre = $('div.series-genres > a').text()
			let synopsis = $('div.series-synops > p').text()
			let thumb = $('div.series-thumb > img').attr('src')
			let list_eps = []
			$('div.flexeps-infoz > a').each(function(a, b) {
				list_eps.push({ title: $(b).attr('title'), link: $(b).attr('href') })
			})
			resolve({ title, japanese, english, type, status, score, premiered, studios, genre, synopsis, thumb, list_eps })
		}).catch(reject)
	})
}

function getLatestHanime() {
	return new Promise((resolve, reject) => {
		let url = 'https://hanime.tv'
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let result = []
			$('div.elevation-3').each(function(a, b) {
				let title = $(b).find('a').attr('alt')
				let link = url + $(b).find('a').attr('href')
				result.push({ title, link })
			})
			resolve(result)
		}).catch(reject)
	})
}

function artinama(nama) {
	return new Promise((resolve, reject) => {
		axios.get('http://www.primbon.com/arti_nama.php?nama1='+nama+'&proses=+Submit%21+').then(res => {
		const $ = cheerio.load(res.data)
		const r = $('#body').text();
		const re = r.split('\n      \n        \n        \n')[0]
		const result = re.trim()
		resolve(result)
		})
	})
}

function artimimpi(mimpi) {
    return new Promise((resolve, reject) => {
       axios.get(`https://www.primbon.com/tafsir_mimpi.php?mimpi=${mimpi}&submit=+Submit+`)
          .then(({
              data
        }) => {
        const $ = cheerio.load(data)
        const detect = $('#body > font > i').text()
        const isAva = /Tidak ditemukan/g.test(detect) ? false : true
        if (isAva) {
            const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${mimpi}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi, '\n')
            const res = {
                status: 200,
                result: isi
             }
             resolve(res)
         } else {
            const res = {
                 status: 404,
                 result: `Arti Mimpi ${mimpi} Tidak Di Temukan`
              }
              resolve(res)
           }
       })
     .catch(reject)
  })
}

function ramalanJodoh(nama, pasangan) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.primbon.com/kecocokan_nama_pasangan.php?nama1='+nama+'&nama2='+pasangan+'&proses=+Submit%21+').then(res => {
		const $ = cheerio.load(res.data)
		const thumb = 'https://www.primbon.com/'+$('#body > img').attr('src')
		const isi = $('#body').text().split(pasangan)[1].replace('< Hitung Kembali','').split('\n')[0]
      		const positif = isi.split('Sisi Negatif Anda: ')[0].replace('Sisi Positif Anda: ','')
      		const negatif = isi.split('Sisi Negatif Anda: ')[1]
      		const result = {
      			thumb: thumb,
      			positif: positif,
      			negatif: negatif
      		}
      		resolve(result)
		})

	})
}

function konachan(q) {
	return new Promise((resolve, reject) => {
		let query = q.replace(/ /g, '_')
		axios.get('https://konachan.net/post?tags='+query+'+').then(res => {
			const $ = cheerio.load(res.data)
			const aray = []
			$('div.pagination > a').each(function(a, b) {
				const u = $(b).text()
				aray.push(u)
				let math = Math.floor(Math.random() * aray.length)
				axios.get('https://konachan.net/post?page='+math+'&tags='+query+'+').then(respon => {
					const ch = cheerio.load(respon.data)
					const result = []
					ch('#post-list > div.content > div:nth-child(4) > ul > li > a.directlink.largeimg').each(function(c, d) {
						const r = $(d).attr('href')
						result.push(r)
					})
					resolve(result)
				}).catch(reject)
			})
		}).catch(reject)
	})
}

function happymodSearch(query) {
	return new Promise((resolve, reject) => {
		const baseUrl = 'https://www.happymod.com/'
		axios.get(baseUrl+'search.html?q='+query).then(async res => {
		var $ = cheerio.load(res.data)
		const hasil = []
		$("div.pdt-app-box").each(function(c, d) {
			var title = $(d).find("a").text().trim();
			var icon = $(d).find("img.lazy").attr('data-original');
			var rating = $(d).find("span").text();
			var link = baseUrl+$(d).find("a").attr('href');
			hasil.push({
				title,
				icon,
				link,
				rating
			})
	})
		resolve(hasil)
		console.log(hasil)
	}).catch(reject)
})
}

function searchIlust(query) {
	return new Promise((resolve, reject) => { 
		axios.get('https://api.lolicon.app/setu/v2?&size=regular&num=100&keyword='+query).then(res => {
			const result = res.data.data
      if (result.length < 1) {
          throw 'Hasil tidak di temukan!'
      } else {
        resolve(result)
      }
		})
	})
}

function stickerSearch(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://getstickerpack.com/stickers?query='+query).then(res => {
			const $ = cheerio.load(res.data)
			const result = []
			const main = $('#stickerPacks > div > div:nth-child(3) > div > a')

			main.each( function() {
				const url = $(this).attr('href')
				const title = $(this).find('div > span').text()
				result.push({ title, url })
			})
			resolve(result)
		}).catch(reject)
	})
}

function xnxxSearch(query) {
	return new Promise((resolve, reject) => {
		const baseurl = 'https://www.xnxx.com'
		fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'})
		.then(res => res.text())
		.then(res => {
			let $ = cheerio.load(res, {
				xmlMode: false
			});
			let title = [];
			let url = [];
			let desc = [];
			let results = [];

			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb').each(function(c, d) {
					url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/"))
				})
			})
			$('div.mozaique').each(function(a, b) {
				$(b).find('div.thumb-under').each(function(c, d) {
					desc.push($(d).find('p.metadata').text())
					$(d).find('a').each(function(e,f) {
					    title.push($(f).attr('title'))
					})
				})
			})
			for (let i = 0; i < title.length; i++) {
				results.push({
					title: title[i],
					info: desc[i],
					link: url[i]
				})
			}
			resolve({
				status: 200,
				result: results
			})
		})
		.catch(err => reject({ code: 503, status: false, result: err }))
	})
}

function alphacoders(query) {
    return new Promise((resolve, reject) => {
        axios.get('https://wall.alphacoders.com/search.php?search='+query).then(res => {
            const $ = cheerio.load(res.data)
            const result = []
            $('div.boxgrid > a > picture').each(function(a, b) {
                result.push($(b).find('img').attr('src').replace('thumbbig-', ''))
            })
            resolve(result)
        }).catch(reject)
    })
}

function wallpapercave(query) {
    return new Promise((resolve, reject) => {
		axios.get('https://wallpapercave.com/search?q='+query).then(res => {
				const $ = cheerio.load(res.data)
				const result = [];
				$('div.imgrow > a').each(function(a, b) {
					if (!$(b).find('img').attr('src').includes('.gif')) {
						result.push('https://wallpapercave.com/' + $(b).find('img').attr('src').replace('fuwp', 'uwp'))
					}
				})
				resolve(result)
			}).catch(reject)
	})
}

function wallpaperscraft(query) {
    return new Promise((resolve, reject) => {
		axios.get('https://wallpaperscraft.com/search/?query='+query).then(res => {
			const $ = cheerio.load(res.data)
			const result = [];
			$('span.wallpapers__canvas').each(function(a, b) {
				result.push($(b).find('img').attr('src'))
			})
			resolve(result)
		}).catch(reject)
	})
}

async function _tebakgambar() {
	return new Promise((resolve, reject) => {
		axios.get('https://jawabantebakgambar.net/all-answers/').then(res => {
			const $ = cheerio.load(res.data)
			const result = []
			$('#images > li > a').each(function(a, b) {
				const img = 'https://jawabantebakgambar.net'+$(b).find('img').attr('data-src')
				const jawaban = $(b).find('img').attr('alt').replace('Jawaban ', '')
				result.push({ img, jawaban })
			})
			resolve(result)
		}).catch(reject)
	})
}

async function tebakgambar() {
	return new Promise(async(resolve, reject) => {
		let ctrl = await _tebakgambar()
		let ct = await  ctrl[Math.floor(Math.random() * ctrl.length)]
		resolve(ct)
	})
}

function ghstalk(username) {
    url= `https://api.github.com/users/${username}`; 
    return axios.get(url).then(({ data }) => {
    return data
})
}

function npmstalk(username) {
    url= `https://registry.npmjs.org/${username}`; 
    return axios.get(url).then(({ data }) => {
    return data
})
}

function herodetails(name) {
    return new Promise((resolve, reject) => {
                  var splitStr = name.toLowerCase().split(' ');
                  for (var i = 0; i < splitStr.length; i++) {
                       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
                  }
                  const que = splitStr.join(' ')
                  axios.get('https://mobile-legends.fandom.com/wiki/' + que)
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let mw = []
                       let attrib = []
                       let skill = []
                       const name = $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > table > tbody > tr > td > font > b').text() 
                       $('.mw-headline').get().map((res) => {
                            const mwna = $(res).text()
                            mw.push(mwna)
                       })
                       $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td').get().map((rest) => {
                            const haz = $(rest).text().replace(/\n/g,'')
                            attrib.push(haz)
                       })
                       $('#mw-content-text > div > div > div > div > div > div > table > tbody > tr > td > div.progressbar-small.progressbar > div').get().map((rest) => {
                            skill.push($(rest).attr('style').replace('width:',''))
                       })
                       axios.get('https://mobile-legends.fandom.com/wiki/' + que + '/Story')
                       .then(({ data }) => {
                            const $ = cheerio.load(data)
                            let pre = []
                            $('#mw-content-text > div > p').get().map((rest) => {
                                 pre.push($(rest).text())
                            })
                            const story = pre.slice(3).join('\n')
                            const items = []
                            const character = []
                            $('#mw-content-text > div > aside > section > div').get().map((rest) => {
                                 character.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                            })
                            $('#mw-content-text > div > aside > div').get().map((rest) => {
                                 items.push($(rest).text().replace(/\n\t\n\t\t/g, '').replace(/\n\t\n\t/g,'').replace(/\n/g,''))
                            })
                            const img = $('#mw-content-text > div > aside > figure > a').attr('href')
                            const chara = character.slice(0,2)
                            const result = {                                 
                                 hero_name: name + ` ( ${mw[0].replace('CV:',' CV:')} )`,
                                 entrance_quotes: attrib[2].replace('Entrance Quotes','').replace('\n',''),
                                 hero_feature: attrib[attrib.length - 1].replace('Hero Feature',''),
                                 image: img,
                                 items: items,
                                 character: {
                                      chara
                                 },
                                 attributes: {
                                      movement_speed: attrib[12].replace('● Movement Speed',''),
                                      physical_attack: attrib[13].replace('● Physical Attack',''),
                                      magic_power: attrib[14].replace('● Magic Power',''),
                                      attack_speed: attrib[15].replace('● Attack Speed',''),
                                      physical_defense: attrib[16].replace('● Physical Defense',''),
                                      magic_defense: attrib[17].replace('● Magic Defense',''),
                                      basic_atk_crit_rate: attrib[18].replace('● Basic ATK Crit Rate',''),
                                      hp: attrib[19].replace('● HP',''),
                                      mana: attrib[20].replace('● Mana',''),
                                      ability_crit_rate: attrib[21].replace('● Ability Crit Rate',''),
                                      hp_regen: attrib[22].replace('● HP Regen',''),
                                      mana_regen: attrib[23].replace('● Mana Regen','')
                                 },
                                 price: {
                                      battle_point: mw[1].split('|')[0].replace(/ /g,''),
                                      diamond: mw[1].split('|')[1].replace(/ /g,''),
                                      hero_fragment: mw[1].split('|')[2] ? mw[1].split('|')[2].replace(/ /g,'') : 'none'
                                 },
                                 role: mw[2],
                                 skill: {
                                      durability: skill[0],
                                      offense: skill[1],
                                      skill_effects: skill[2],
                                      difficulty: skill[3]
                                 },
                                 speciality: mw[3],
                                 laning_recommendation: mw[4],
                                 release_date: mw[5],
                                 background_story: story
                            }
                            resolve(result)
                       }).catch((e) => reject({ status: 404, message: e.message }))
                  }).catch((e) => reject({ status: 404, message: e.message }))
             })
        }
 
function herolist(){
    return new Promise((resolve, reject) => {
                  axios.get('https://mobile-legends.fandom.com/wiki/Mobile_Legends:_Bang_Bang_Wiki')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let data_hero = []
                       let url = []
                       $('div > div > span > span > a').get().map((result) => {
                            const name = decodeURIComponent($(result).attr('href').replace('/wiki/',''))
                            const urln = 'https://mobile-legends.fandom.com' + $(result).attr('href')
                            data_hero.push(name)
                            url.push(urln)
                       })
                       resolve({ status: 200, hero: data_hero })
                  }).catch((e) => reject({ status: 404, message: e.message }))
             })
        }
      
function akanekoApi(param) {
	return new Promise(async(resolve, reject) => {
		const data = await axios.get('https://akaneko-api.herokuapp.com/api/'+param)
		resolve(data.data.url)
	})
}

async function twitterdl(link) {
	return new Promise((resolve, reject) => {
		let config = {
			'URL': link
		}
		axios.post('https://twdown.net/download.php',qs.stringify(config),{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "_ga=GA1.2.1388798541.1625064838; _gid=GA1.2.1351476739.1625064838; __gads=ID=7a60905ab10b2596-229566750eca0064:T=1625064837:RT=1625064837:S=ALNI_Mbg3GGC2b3oBVCUJt9UImup-j20Iw; _gat=1"
			}
		})
		.then(({ data }) => {
		const $ = cheerio.load(data)
		resolve({
				desc: $('div:nth-child(1) > div:nth-child(2) > p').text().trim(),
				thumb: $('div:nth-child(1) > img').attr('src'),
				HD: $('tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
				SD: $('tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
				audio: 'https://twdown.net/' + $('tr:nth-child(4) > td:nth-child(4) > a').attr('href')
			})
		})
	.catch(reject)
	})
}

function ttdownloader(url){
	return new Promise(async(resolve, reject) => {
		axios.get('https://ttdownloader.com/',{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let token = $('#token').attr('value')
			let config = {
				'url': url,
				'format': '',
				'token': token
			}
		axios('https://ttdownloader.com/req/',{
			method: 'POST',
			data : new URLSearchParams(Object.entries(config)),
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
			})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			resolve({
				nowm: $('div:nth-child(2) > div.download > a').attr('href'),
				wm: $('div:nth-child(3) > div.download > a').attr('href'),
				audio: $('div:nth-child(4) > div.download > a').attr('href')
				})
			})
		})
	.catch(reject)
	})
}

function igtv(link) {
      return new Promise(async(resolve, reject) => {
        let config = {
          'url': link,
          'submit': ''
        }
          axios('https://downloadgram.org/igtv-downloader.php',{
            method: 'POST',
            data : new URLSearchParams(Object.entries(config)),
            headers: {
              "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
              }
            })
          .then(tod => {
            const $ = cheerio.load(tod.data)
            resolve({
              link: $('#downloadBox > a').attr('href')
          })
       })
    })
 }

function KomikDl(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text().replace('Bahasa Indonesia - MyNimeku', '').trim()
			let result = []
			$('div.reader-area > p > img').each(function () {
				result.push($(this).attr('src'))
			})
			resolve({ title, result })
		}).catch(reject)
	})
}

function AnimeDl(url) {
	return new Promise((resolve, reject) => {
		axios.get(url).then(({ data }) => {
			let $ = cheerio.load(data)
			let title = $('title').text()
			let thumb = $('meta[property="og:image"]').attr('content')
			let url = $('#linklist').find('a').attr('href')
			resolve({ title, thumb, url })
		}).catch(reject)
	})
}

async function telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'Enther your url telegram sticker'
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {           
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
    resolve(hasil)
    })
}

function WattpadUser(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/user/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('#app-container > div > header ').each(function(a, b) {
                    $('#profile-about > div > div ').each(function(c, d) {
                    result = {
                    username: $(b).find('> div.badges > h1').text().trim(),
                    works: $(b).find('> div.row.header-metadata > div:nth-child(1) > p:nth-child(1)').text(),
                    reading_list: $(b).find('> div.row.header-metadata > div.col-xs-4.scroll-to-element > p:nth-child(1)').text(),
                    followers: $(b).find('> div.row.header-metadata > div.col-xs-4.on-followers > p.followers-count').text(),
                    joined: $(d).find('> ul > li.date.col-xs-12.col-sm-12 > span').text().trim().replace('Joined',''),
                    pp_picture: `https://img.wattpad.com/useravatar/${query}.128.851744.jpg`,
                    about: $(d).find('> div.description > pre').text() ? $(d).find('> div.description > pre').text() : 'Not found'
                }
                resolve(result)
                })
                })
            })
            .catch(reject)
    })
}

async function whois(domain = 'lolhuman.xyz') {
  return new Promise((resolve, reject) => {
    var options = { 
      method: 'POST',
      url: 'https://www.hostinger.co.id/whois',
      headers: { 
        'content-type': 'application/x-www-form-urlencoded'
      },
      form: { 
        domain: `${domain}`, 
        submit: 'search' 
      }
    };

    request(options, async function (error, response, body) {
      if (error) throw new Error(error);
      const result = JSON.parse(body);
      resolve({
        result: result["domain"]
      });
    });
  });
}

function domainSearch(query) {
	return new Promise((res, rej) => {
		axios(`https://www.domainesia.com/domain/?domain=${query}`).then(c => {
			let $ = cheerio.load(c.data)
			let result = []
			$('div.results_domain').get().map(v => {
				let domain = $(v).attr('id')
				let price = $(v).text().trim().split(' ')[0]
				if (domain !== undefined && price !== '') result.push({ domain: domain.replace('result_', query + '.'), price })
			})
			res(result)
		}).catch(rej)
	})
}

function palingmurah(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://palingmurah.net/pencarian-produk/?term=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  hasil = []
  $("div.ui.card.wpj-card-style-2").each(function(c, d) {
    //INFO BARANG
    name = $(d).find("div.content.wpj-small.list-70-right > a.list-header").text().trim();
    link = $(d).find("div.content.wpj-small.list-70-right > a.list-header").attr('href');
    img = $(d).find("div.card-image-helper > img").attr('data-src');
    harga = $(d).find("div.flex-master.card-job-price.text-right.text-vertical-center").text().trim();
    //user
    usernamepenjual = $(d).find("strong").text().trim();
    linkpenjual = $(d).find("a.ui.wpj-big.avatar.image").attr('href');
    iconpenjual = $(d).find("a.ui.wpj-big.avatar.image > img").attr('data-src');
    const Data = {
      name: name,
      harga: harga,
      img: img,
      link: link,
      usernamepenjual: usernamepenjual,
      linkpenjual: linkpenjual,
      iconpenjual: iconpenjual
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}

function moddroid(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://moddroid.com/?s=${query}`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.col-12.col-md-6.mb-4").each(function(c, d) {
    link = $(d).find("a.d-flex.position-relative.archive-post").attr('href');
    name = $(d).find("div > h3.h5.font-weight-semibold.text-truncate.text-primary.w-100").text().trim();
    img = $(d).find("div.flex-shrink-0.mr-2 > img").attr('src');
    desc = $(d).find("div.text-truncate.text-muted > span.align-middle").text();
    const Data = {
      img: img,
      name: name,
      desc: desc,
      link: link
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}  

function apkmody(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://apkmody.io/?s=${query}`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.flex-item").each(function(c, d) {
    name = $(d).find("div.card-title > h2.truncate").text();
    desc = $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim();
    img = $(d).find("div.card-image > img").attr('src');
    link = $(d).find("article.card.has-shadow.clickable > a").attr('href');
    const Data = {
      img: img,
      name: name,
      desc: desc,
      link: link
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}

function mcpedl(query) {
    return new Promise((resolve, reject) => {
    axios.get(`https://mcpedl.com/?s=${query}`).then(async tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("div.post").each(function(c, d) {
      
      name = $(d).find("h2.post__title").text().trim();
      date = $(d).find("div.post__date").text().trim();
      desc = $(d).find("p.post__text").text().trim();
      category = $(d).find("div.post__category > a").text().trim();
      link = $(d).find("a").attr('href')
      link2 = `https://mcpedl.com${link}`
      const Data = {
        name: name,
        category: category,
        date: date,
        desc: desc,
        link: link2
      }
      hasil.push(Data)
      
    })
     resolve(hasil)
    }).catch(reject)
    });
    }

function jalantikus(query) {
    return new Promise((resolve, reject) => {
      axios.get(`https://jalantikus.com/search/articles/${query}/`).then( tod => {
      const $ = cheerio.load(tod.data)
      
      hasil = []
      
      $("div.post-block-with-category").each(function(c, d) {
        title = $(d).find("a.post-block-with-category__link").text()
        category = $(d).find("a.post-info__category-link").text()
      date = $(d).find("time").text()
        link = `https://jalantikus.com${$(d).find("a").attr('href')}`
      const Data = {
          title: title,
          category: category,
          date: date,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
    })
    }

function servermc() {
      return new Promise((resolve, reject) => {
        axios.get(`https://minecraftpocket-servers.com/country/indonesia/`).then( tod => {
        const $ = cheerio.load(tod.data)
        
        hasil = []
        
        $("tr").each(function(c, d) {
          ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
          port = '19132'
          versi = $(d).find("a.btn.btn-info.btn-sm").text()
          player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
          const Data = {          
            ip: ip,
            port: port,
            versi: versi,
            player: player
          }
          hasil.push(Data)
        })
        resolve(hasil)
      }).catch(reject)
      })
    }

function linkwa(nama){
	return new Promise((resolve,reject) => {
		axios.get('http://ngarang.com/link-grup-wa/daftar-link-grup-wa.php?search='+ nama +'&searchby=name')
		.then(({ data }) => {
			const $ = cheerio.load(data);
			const result = [];
			const lnk = [];
			const nm = [];
		$('div.wa-chat-title-container').each(function(a,b){
			const limk = $(b).find('a').attr('href');
			lnk.push(limk)
			})
		$('div.wa-chat-title-text').each(function(c,d) {
			const name = $(d).text();
			nm.push(name)
			})
		for( let i = 0; i < lnk.length; i++){
			result.push({
				nama: nm[i].split('. ')[1],
				link: lnk[i].split('?')[0]
			})
		}
		resolve(result)
		})
	.catch(reject)
	})
}

function lirik(query){
	return new Promise(async(resolve, reject) => {
		const data = await axios.get(`https://server-kanza.herokuapp.com/api/liriklagu?musik=${query}&apikey=VeanChan`)
		resolve(data.result)
	})
}

function wattpad(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/search/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('div.story-card-data.hidden-xxs > div.story-info ').each(function(a, b) {
                    $('ul.list-group > li.list-group-item').each(function(c,d) {
                    result = {                   
                    judul: $(b).find('> div.title').text(),
                    dibaca: $(b).find('> ul > li:nth-child(1) > div.icon-container > div > span.stats-value').text(),
                    divote: $(b).find('> ul > li:nth-child(2) > div.icon-container > div > span.stats-value').text(),
                    bab: $(b).find('> ul > li:nth-child(3) > div.icon-container > div > span.stats-value').text(),
                    waktu: $(b).find('> ul > li:nth-child(4) > div.icon-container > div > span.stats-value').text(),
                    url:'https://www.wattpad.com' + $(d).find('a').attr('href'),
                    thumb: $(d).find('img').attr('src'),
                    description: $(b).find('> div.description').text().replace(/\n/g,'')
                }
                hasil.push(result)
                })
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function webtoons(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
                    result = {                  
                    judul: $(b).find('> a > div > p.subj').text(),
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: 'https://www.webtoons.com' + $(b).find('> a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
function drakor(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://drakorasia.blog//?s=${query}&post_type=post`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#post > div ').each(function(a, b) {
                    result = {                    
                    judul: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').text().trim(),
                    years: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.category.text-gray.font-normal.text-white.text-xs.truncate > a').text(),
                    genre: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.genrenya.text-center.text-white.text-opacity-75.text-xs.mt-1').text().trim(),
                    thumbnail: $(b).find('> div.thumbnail > a > img').attr('src'),
                    url: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function playstore(name){
	return new Promise((resolve, reject) => {
		axios.get('https://play.google.com/store/search?q='+ name +'&c=apps')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let ln = [];
			let nm = [];
			let dv = [];
			let lm = [];
			const result = [];
			$('div.wXUyZd > a').each(function(a,b){
				const link =  'https://play.google.com' + $(b).attr('href')
				ln.push(link);
			})
			$('div.b8cIId.ReQCgd.Q9MA7b > a > div').each(function(d,e){
				const name = $(e).text().trim()
				nm.push(name);
			})
			$('div.b8cIId.ReQCgd.KoLSrc > a > div').each(function(f,g){
				const dev = $(g).text().trim();
				dv.push(dev)
			})
			$('div.b8cIId.ReQCgd.KoLSrc > a').each(function(h,i){
				const limk = 'https://play.google.com' + $(i).attr('href');
				lm.push(limk);
			})			
		for (let i = 0; i < ln.length; i++){
			result.push({
				name: nm[i],
				link: ln[i],
				developer: dv[i],
				link_dev: lm[i]
			})
	}
		resolve(result)
		})
	.catch(reject)
	})
}

async function  mangatoons(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://mangatoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div > div ').each(function(a, b) {
                    result = {                  
                    judul: $(b).find('> div.recommend-comics-title > span').text(),
                    genre: $(b).find('> div.comics-type > span').text().trim(),
                    link: 'https://mangatoon.mobi' + $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function scdl2(url) {
	return new Promise(async (resolve, reject) => {
		await axios.request({
			url: "https://www.klickaud.co/download.php",
			method: "POST",
			data: new URLSearchParams(Object.entries({'value': url, 'afae4540b697beca72538dccafd46ea2ce84bec29b359a83751f62fc662d908a' : '2106439ef3318091a603bfb1623e0774a6db38ca6579dae63bcbb57253d2199e'})),
			headers: {
				"content-type": "application/x-www-form-urlencoded",
				"user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.54 Safari/537.36"
			}
		}).then(res => {
			const $ = cheerio.load(res.data)
			const result = {
				link: $('#dlMP3').attr('onclick').split(`downloadFile('`)[1].split(`',`)[0],
				thumb: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(1) > img').attr('src'),
				title: $('#header > div > div > div.col-lg-8 > div > table > tbody > tr > td:nth-child(2)').text()

			}
			resolve(result)
		}).catch(reject)
})
}

function getVideo(url) {
    return new Promise(function (resolve, reject) {                                                                                                                                                               //<https://github.com/ArugaZ/whatsapp-bot>
            axios.get(url, { timeout: 6000 })
                .then(req => {
                    try {
                        const links = []
                        let soup = cheerio.load(req.data)
                        let title = soup("title").text()
                        soup('div.liner').each(function (i, e) {
                            soup(e).find('div.listlink').each(function (j, s) {
                                soup(s).find('a').each(function (p, q) {
                                    links.push(soup(q).attr('href'))
                                })
                            })
                        })
                        const data = {
                            "title": title,
                            "links": links
                        }
                        resolve(data)
                    } catch (err) {
                        reject('Error : ' + err)
                    }
                })
        })
}

function getLatest(type, page = 1) {
	return new Promise((resolve, reject) => {
		const baseURL = 'https://nekopoi.care'
		if (/hentai/i.test(type)) {
			axios.get(`${baseURL}/category/hentai/page/${page}`).then(({ data }) => {
				let $ = cheerio.load(data)
				let result = []
				$('div.top').each(function(i, e) {
					let title = $(e).find('a').text()
					let desc = $(e).find('p:nth-child(2)').text().trim() || $(e).find('h2:nth-child(1)').text().trim()
					let thumb = $(e).find('img').attr('src')
					let link = $(e).find('a').attr('href')
					result.push({ title, desc, thumb, link })
				})
				resolve(result)
			}).catch(reject)
		} else if (/3dhentai/i.test(type)) {
			axios.get(`${baseURL}/category/3d-hentai/page/${page}`).then(({ data }) => {
				let $ = cheerio.load(data)
				let result = []
				$('div.top').each(function(i, e) {
					let title = $(e).find('a').text()
					let thumb = $(e).find('img').attr('src')
					let link = $(e).find('a').attr('href')
					result.push({ title, thumb, link })
				})
				resolve(result)
			}).catch(reject)
		} else if (/jav/i.test(type)) {
			axios.get(`${baseURL}/category/jav/page/${page}`).then(({ data }) => {
				let $ = cheerio.load(data)
				let result = []
				$('div.top').each(function(i, e) {
					let title = $(e).find('a').text()
					let thumb = $(e).find('img').attr('src')
					let link = $(e).find('a').attr('href')
					result.push({ title, thumb, link })
				})
				resolve(result)
			}).catch(reject)
		} else if (/javcosplay/i.test(type)) {
			axios.get(`${baseURL}/category/jav-cosplay/page/${page}`).then(({ data }) => {
				let $ = cheerio.load(data)
				let result = []
				$('div.top').each(function(i, e) {
					let title = $(e).find('a').text()
					let thumb = $(e).find('img').attr('src')
					let link = $(e).find('a').attr('href')
					result.push({ title, thumb, link })
				})
				resolve(result)
			}).catch(reject)
		} else {
			axios.get(`${baseURL}/page/${page}`).then(({ data }) => {
				let $ = cheerio.load(data)
				let result = []
				$('div.eropost').each(function(i, e) {
					let title = $(e).find('h2').text().trim()
					let release_date = $(e).find('span:nth-child(2)').text().trim()
					let thumb = $(e).find('img').attr('src')
					let link = $(e).find('a').attr('href')
					result.push({ title, release_date, thumb, link })
				})
				resolve(result)
			}).catch(reject)
		}
	})
}

function covid(){
	return new Promise(async(resolve, reject) => {
		axios.get('https://covid19.go.id/')
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const hasil = [];
			$('#case > div > div > div > div > div:nth-child(2)').each(function(a,b) {
				const pindo = $(b).find('div:nth-child(3) > strong').text()
				const mindo = $(b).find('div:nth-child(5) > strong').text()
				const sindo = $(b).find('div:nth-child(4) > strong').text()
				const upindo = $(b).find('div.pt-4.text-color-black.text-1').text().trim()
			$('#case > div > div > div > div > div:nth-child(1)').each(function(c,d) {
					const neg = $(d).find('div:nth-child(3) > strong').text() 
					const pglo = $(d).find('div:nth-child(4) > strong').text()
					const nglo = $(d).find('div:nth-child(5) > strong').text()
					const up = $(d).find('div.pt-4.text-color-grey.text-1').text().trim()
				    const result = {
					indo : {
						positif_indo: pindo,
						meninggal_indo: mindo,
						sembuh_indo: sindo,
						update_indo: upindo.split(':')[1]
					},
					global: {
						negara: neg,
						positif: pglo,
						meninggal: nglo,
						update: up.split(':')[1].split('\n')[0]

					}
				}
				hasil.push(result)
				})
			})
			resolve(hasil)
		})
		.catch(reject)
	})
}

function facebook(url){
	  return new Promise(async(resolve, reject) => {
        await axios.get('https://downvideo.net/').then(gdata => {
        const a = cheerio.load(gdata.data)
        const token = a('body > div > center > div.col-md-10 > form > div > input[type=hidden]:nth-child(2)').attr('value')
        const options = {
            method: "POST",
            url: `https://downvideo.net/download.php`,
            headers: {
                "content-type": 'application/x-www-form-urlencoded',
                "cookie": gdata["headers"]["set-cookie"],
                "user-agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
            },
            formData: {
                URL: url,
                token: token,
            },
        };
        request(options, async function(error, response, body) {
            if (error) throw new Error(error)
            const $ = cheerio.load(body)
            const result = {               
                title: $('body').find('div:nth-child(1) > h4').text(),
                sd: $('#sd > a').attr('href'),
                hd: $('body').find('div:nth-child(7) > a').attr('href')
            }
            resolve(result)
        })
    })
})
}

function facebook2(urls) {
    return new Promise(async (resolve, reject) => {
       const data = await axios({
           url: 'https://downvideo.net/',
           method: 'GET',
           headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
           }
       })
       const $ = cheerio.load(data.data)
       const token = $('#token').attr('value')
       const getPost = await axios({
           url: 'https://downvideo.net/download.php',
           method: 'POST',
           headers: {
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
            "cookie": '_gid=GA1.2.1321544464.1633811193; _ga=GA1.2.1392580783.1633811193; __gads=ID=c73de99d7fa5c467-226981f63ecc00f1:T=1633811193:RT=1633811193:S=ALNI_MaC9fW2mqfT2hm7zODcNNffab1XLg'
           },
           data: new URLSearchParams(Object.entries({ 'URL': urls, 'token': token }))
       })
       const c = cheerio.load(getPost.data)
       const hasil = {
            author: c('div.row').find('div.col-md-12:nth-child(1)').text(),
            title: c('div.row').find('div.col-md-12:nth-child(3) > p').text(),
            thumb: c('div.row').find('div.col-md-12:nth-child(2) > img').attr('src'),
            link_high: c('div.row').find('div.col-md-3 > a').eq(0).attr('href') || c('div.row').find('#sd > a').attr('href') || '',
            link_normal: c('div.row').find('div.col-md-3 > a').eq(1).attr('href') || ''
       }
       resolve({ status: getPost.status, hasil: hasil })
    })
}

function pinterestdl2(url) {
    return new Promise((resolve, reject) => {
        axios.request({
            url: 'https://www.expertsphp.com/facebook-video-downloader.php',
            method: "POST",
            data: new URLSearchParams(Object.entries({url: url})),
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36"
            }
        }).then(res => {
            const $ = cheerio.load(res.data)
            const img = $('#showdata > div:nth-child(4) > table > tbody > tr:nth-child(2) > td:nth-child(1) > a').attr('href')
            const vid = $('#showdata > div:nth-child(4) > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').attr('href')
            const result = { img, vid }
                if (typeof vid == 'undefined') return resolve({ result: img })
                resolve({ result: vid })
        })
    })
}

function slineMetadata(id) {
     return new Promise((resolve, reject) => {
          axios.get(`http://dl.stickershop.line.naver.jp/products/0/0/1/${id}/android/productInfo.meta`)
               .then(({ data }) => {
                    const id = data.packageId
                    const title = data.title.en
                    const author = data.author.en
                    const ani = data.hasAnimation
                    let stickers = []
                    data.stickers.forEach((rest) => {
                         stickers.push(rest)
                    })
                    resolve({
                         id: id,
                         title: title,
                         animate: ani,
                         author: author,
                         stickers: stickers
                    })
               }).catch(reject)
     })
}

function linestickerdown(url) {
	return new Promise((resolve, reject) => {
          if (!url.match(/(https:\/\/store.line.me\/stickershop\/product\/)/gi)) return "Enther your url line sticker"
          const id = url.match(/[0-9]/g).join('')
          slineMetadata(id)
               .then(async (a) => {
                    const id = a.id
                    const creator = a.author
                    const title = a.title
                    const stiker = a.stickers
                    let urls = []
                    let url = []
                    for (let x of stiker){
                              urls.push(`https://sdl-stickershop.line.naver.jp/products/0/0/1/${id}/android/animation/${x.id}.png`)
                              url.push(`http://dl.stickershop.line.naver.jp/stickershop/v1/sticker/${x.id}/android/sticker.png`)
                          }
                          const result = {                            
                            result: {                                
                                title: title,
                                animated: a.animate,
                                sticker: url,
                                sticker_animasi: urls
                         }
                    }
                    resolve(result)
               }).catch(reject)
     })
}

function likedl(url) {
	return new Promise(async (resolve, reject) => {
        const { data } = await axios.request("https://likeedownloader.com/results", {
            method: "post",
            data: new URLSearchParams(Object.entries({id: url})),
            headers: {
                "cookie": "_ga=GA1.2.553951407.1656223884; _gid=GA1.2.1157362698.1656223884; __gads=ID=0fc4d44a6b01b1bc-22880a0efed2008c:T=1656223884:RT=1656223884:S=ALNI_MYp2ZXD2vQmWnXc2WprkU_p6ynfug; __gpi=UID=0000069517bf965e:T=1656223884:RT=1656223884:S=ALNI_Map47wQbMbbf7TaZLm3TvZ1eI3hZw; PHPSESSID=e3oenugljjabut9egf1gsji7re; _gat_UA-3524196-10=1",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            },
        });
        const $ = cheerio.load(data)
        result = {            
            title: $('body > div.page-wrapper > div.container > div > div.quote-box > p.quote-text > span').text(),
            thumbnail: $('body > div.page-wrapper > div.container > div > div.quote-box > div > img').attr('src'),
            watermark: $('body > div.page-wrapper > div.container > table > tbody > tr:nth-child(1) > td:nth-child(2) > a').attr('href'),
            no_watermark: $('body > div.page-wrapper > div.container > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').attr('href')
        }
        resolve(result)
    });
};

function cocofun(url) {
	return new Promise((resolve, reject) => {
    axios({url, method: "get",
      headers: {
        "Cookie": "client_id=1a5afdcd-5574-4cfd-b43b-b30ad14c230e",
        "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      }
    }).then(data => {
      $ = cheerio.load(data.data)
      let json
      const res = $('script#appState').get()
      for(let i of res){
        if(i.children && i.children[0] && i.children[0].data){
          ress = i.children[0].data.split('window.APP_INITIAL_STATE=')[1]
          json = JSON.parse(ress)
        }
        const result = {      
          topic: json.share.post.post.content ? json.share.post.post.content : json.share.post.post.topic.topic,
          caption: $("meta[property='og:description']").attr('content'),
          play: json.share.post.post.playCount,
          like: json.share.post.post.likes,
          share: json.share.post.post.share,
          duration: json.share.post.post.videos[json.share.post.post.imgs[0].id].dur,
          thumbnail: json.share.post.post.videos[json.share.post.post.imgs[0].id].coverUrls[0],
          watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].urlwm,
          no_watermark: json.share.post.post.videos[json.share.post.post.imgs[0].id].url
        }
        resolve(result)
      }
    }).catch(reject)
  })
}

function twitter2(url) {
return new Promise(async (resolve, reject) => {
        const { data } = await axios.request("https://twdown.net/download.php", {
            method: "post",
            data: new URLSearchParams(Object.entries({URL: url})),
            headers: {
                "cookie": "_ga=GA1.2.1719370542.1656221221; _gid=GA1.2.1028366575.1656221221; _gat=1; __gads=ID=cd819a6c3b9f7043-22093ec7c4d30051:T=1656221221:RT=1656221221:S=ALNI_Maq2SzDvBkyA7woO7Z6fNoN2u5VcA; __gpi=UID=0000069511f3d3b8:T=1656221221:RT=1656221221:S=ALNI_Mbkzo4K9cEygIF4hr5wwsKcSobikQ",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
            },
        });
        const $ = cheerio.load(data)
        result = {          
            nickname: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(1) > div:nth-child(2) > h4 > strong').text(),
            caption: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(1) > div:nth-child(2) > p').text().trim(),
            thumbnail: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(1) > div:nth-child(1) > img').attr('src'),
            quality_270: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(3) > td:nth-child(4) > a').attr('href'),
            quality_360: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(2) > td:nth-child(4) > a').attr('href'),
            quality_720: $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(1) > td:nth-child(4) > a').attr('href'),
            mp3: 'https://twdown.net/' + $('body > div.jumbotron > div > center > div.row > div > div:nth-child(5) > table > tbody > tr:nth-child(4) > td:nth-child(4) > a').attr('href')
        }
        resolve(result)
    });
};

function soundcloud(url) {
return new Promise((resolve, reject) => {
        axios.get('https://soundcloudmp3.org/id').then((data) => {
            let a = cheerio.load(data.data)
            let token = a('form#conversionForm > input[type=hidden]').attr('value')
            const options = {
                method: 'POST',
                url: `https://soundcloudmp3.org/converter`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded;",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "Cookie": data["headers"]["set-cookie"],
                },
                formData: {
                    _token: token,
                    url: url
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                $get = cheerio.load(body)
                const result = {                    
                    title: $get('#preview > div:nth-child(3) > p:nth-child(2)').text().replace('Title:',''),
                    duration: $get('#preview > div:nth-child(3) > p:nth-child(3)').text().replace(/Length\:|Minutes/g,''),
                    quality: $get('#preview > div:nth-child(3) > p:nth-child(4)').text().replace('Quality:',''),
                    thumbnail: $get('#preview > div:nth-child(3) > img').attr('src'),
                    download: $get('#download-btn').attr('href')
                }
                resolve(result)
            });
        })
    })
}

function imgur(url) {
       return new Promise((resolve, reject) => {
            const options = {
                method: 'POST',
                url: `https://www.expertsphp.com/instagram-reels-downloader.php`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "cookie": "_ga_D1XX1R246W=GS1.1.1656127044.1.0.1656127044.0; __gads=ID=a826d8f71f32cdce-228526c6c4d30038:T=1656127044:RT=1656127044:S=ALNI_Mbc0q65XMPrQjf8pqxKtg_DfBEnNw; __gpi=UID=0000068f7e0217a6:T=1656127044:RT=1656127044:S=ALNI_MYDy-jLWlGuI8I9ZeSAgcTfDaJohQ; _ga=GA1.2.136312705.1656127045; _gid=GA1.2.728659727.1656127045; _gat_gtag_UA_120752274_1=1"
                },
                formData: {
                    url: url
                }
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                const $ = cheerio.load(body)
                const result = {                   
                    video_link: $('#showdata > center > div:nth-child(5) > a').attr('href'),
                    image_link: $('#showdata > center > img').attr('src')
                }
                resolve(result);
            })
        })
}

function imbd(url) {
    return new Promise((resolve, reject) => {
        axios.get('https://freedownloadvideo.net/imdb-video-downloader').then((data) => {
            let a = cheerio.load(data.data)
            let token = a('#token').attr('value')
            const options = {
                method: 'POST',
                url: `https://freedownloadvideo.net/wp-json/aio-dl/video-data/`,
                headers: {
                    "content-type": "application/x-www-form-urlencoded;",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "cookie": "PHPSESSID=jue6d59cnfgu8pmraa971cetm6; _gid=GA1.2.1096581014.1656129824; __gads=ID=855f6257a3b17608-227b1200fed200a7:T=1656129824:RT=1656129824:S=ALNI_MYlQs2q77JAmj399O3YnmMSElqAIA; __gpi=UID=0000068f8a6124cf:T=1656129824:RT=1656129824:S=ALNI_MZhz1dM3pQuLjvXkFxtGqNtiIo4yw; _ga_KN64Y44T94=GS1.1.1656129823.1.1.1656130205.0; _ga=GA1.2.1859454192.1656129824"
                },
                formData: {url: url,token: token}
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                res = JSON.parse(body)
                result = {                  
                    ...res,
                }
                resolve(result);
            })
        }).catch(reject)
    })
}

function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

let formatSize = sizeFormatter({
	std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl(url) {
	let id
	if (!(url && url.match(/drive\.google/i))) throw 'Invalid URL'
	id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}

function wallpaper(title, page = '1') {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('div.grid-item').each(function (a, b) {
                hasil.push({
                    title: $(b).find('div.info > a > h3').text(),
                    type: $(b).find('div.info > a:nth-child(2)').text(),
                    source: 'https://www.besthdwallpaper.com/'+$(b).find('div > a:nth-child(3)').attr('href'),
                    image: [$(b).find('picture > img').attr('data-src') || $(b).find('picture > img').attr('src'), $(b).find('picture > source:nth-child(1)').attr('srcset'), $(b).find('picture > source:nth-child(2)').attr('srcset')]
                })
            })
            resolve(hasil)
        })
    })
}

function wikimedia(title) {
    return new Promise((resolve, reject) => {
        axios.get(`https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let hasil = []
            $('.sdms-search-results__list-wrapper > div > a').each(function (a, b) {
                hasil.push({
                    title: $(b).find('img').attr('alt'),
                    source: $(b).attr('href'),
                    image: $(b).find('img').attr('data-src') || $(b).find('img').attr('src')
                })
            })
            resolve(hasil)
        })
    })
}

async function hoax() {
return new Promise((resolve, reject) => {
axios.get(`https://turnbackhoax.id/`).then( tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("figure.mh-loop-thumb").each(function(a, b) {
$("div.mh-loop-content.mh-clearfix").each(function(c, d) {
link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
desc = $(d).find("div.mh-excerpt > p").text().trim();
date = $(d).find("span.mh-meta-date.updated").text().trim();
const Data = {

title: title,
thumbnail: img,
desc: desc,
date: date,
link: link
}
hasil.push(Data)
})
})
resolve(hasil)
}).catch(reject)
});
}

function umma(url) {
    return new Promise((resolve, reject) => {
        axios.get(url)
        .then((res) => {
            let $ = cheerio.load(res.data)
            let image = []
            $('#article-content > div').find('img').each(function (a, b) {
                image.push($(b).attr('src')) 
            })
            let hasil = {
                title: $('#wrap > div.content-container.font-6-16 > h1').text().trim(),
                author: {
                    name: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw').text().trim(),
                    profilePic: $('#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo').attr('src')
                },
                caption: $('#article-content > div > p').text().trim(),
                media: $('#article-content > div > iframe').attr('src') ? [$('#article-content > div > iframe').attr('src')] : image,
                type: $('#article-content > div > iframe').attr('src') ? 'video' : 'image',
                like: $('#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12').text(),
            }
            resolve(hasil)
        })
    })
}

function ringtone(title) {
    return new Promise((resolve, reject) => {
        axios.get('https://meloboom.com/en/search/'+title)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
                hasil.push({ title: $(b).find('h4').text(), source: 'https://meloboom.com/'+$(b).find('a').attr('href'), audio: $(b).find('audio').attr('src') })
            })
            resolve(hasil)
        })
    })
}

async function layarkita(query){
    return new Promise(async (resolve, reject) => {
        axios
            .get(`http://167.99.71.200/?s=${query}`)
            .then((data) => {
                const $ = cheerio.load(data.data)
                const judul = []
                const genre = []
                const thumb = []
                const link = []
                const format = []
                $('div > div.item-article > header > h2 > a').each(function(a, b) {
                    deta = $(b).text()
                    judul.push(deta)
                })
                $('div > div.item-article > header > div.gmr-movie-on').each(function(a, b) {
                    deta = $(b).text()
                    genre.push(deta)
                })
                $('div > div.content-thumbnail.text-center > a > img').each(function(a, b) {
                    thumb.push($(b).attr('src'))
                })
                $('div > div.item-article > header > div.gmr-watch-movie > a').each(function(a, b) {
                    link.push($(b).attr('href'))
                })
                for (let i = 0; i < judul.length; i++) {
                    format.push({
                        judul: judul[i],
                        genre: genre[i],
                        thumb: thumb[i],
                        link_nonton: link[i],
                    })
                }
                if (format == '') {
                    resolve({
                        status: 'error',
                    })
                } else {
                    resolve(format)
                }
            })
            .catch(reject)
    })
}

async function kbbi (kata){
    return new Promise(async (resolve, reject) => {
        axios
            .get(`https://kbbi.kemdikbud.go.id/entri/` + kata)
            .then((data) => {
                const $ = cheerio.load(data.data)
                const arti = []
                const undef = $('body > div.container.body-content > h4:nth-child(6)').text()
                if (undef == ' Entri tidak ditemukan.')
                    resolve({
                        status: false
                    })
                const lema = $('body > div.container.body-content > h2').text()
                $('body > div.container.body-content > ol > li').each(function(a, b) {
                    deta = $(b).text()
                    if (deta.split('a        ')[1] != undefined) arti.push(deta.split('a        ')[1])
                })
                resolve({                    
                    lema: lema,
                    arti: arti,
                })
            })
            .catch(reject)
    })
}

async function jadwaltv(channel){
  return new Promise((resolve, reject) => {
    const time = Math.floor(new Date() / 1000)
    axios.get('https://www.jadwaltv.net/channel/' + channel).then(({ data }) => {
      const $ = cheerio.load(data)
      const acara = []
      const jam = []
      const result = []
      $('div > div > table > tbody > tr').each(function (a, b) {
        if ($(b).find('td:nth-child(1)').text() != 'Jam') {
          jam.push($(b).find('td:nth-child(1)').text())
        }
        if ($(b).find('td:nth-child(2)').text() != 'Acara') {
          acara.push($(b).find('td:nth-child(2)').text())
        }
      })
      for (let i = 0; i < acara.length; i++) {
        result.push({
          acara: acara[i],
          jam: jam[i],
        })
      }
      format = result.filter((mek) => mek.acara != 'Jadwal TV selengkapnya di JadwalTV.Net')
      console.log(acara)
      resolve({       
        channel: channel,
        result: format,
      })
    })
  })
}

async function jadwalmplid(){
    return new Promise(async (resolve, reject) => {
        axios.get('https://id-mpl.com/schedule').then(({
            data
        }) => {
            const $ = cheerio.load(data)
            const result = []
            week = 1
            data1 = []
            data2 = []
            jam = []
            replay = []
            for (let i = 57; i <= 64; i++) {
                $(`#mc-${i} > div > div > div`).each(function() {
                    tanggal = $(this).find('div.ticket-date.mb10.mt20').text()
                    $(this).find('div > span.teams-wrap > div > div.match-team1.text-center').each(function(a, b) {
                        data1.push({
                            a: $(b).find('div > div > b').text(),
                            score: $(b).find('div.font-title').text().trim()
                        })
                        result.push({
                            tanggal: tanggal,
                            week: week,
                            jam: '',
                            match: '',
                            score: '',
                            replay: ''
                        })
                    })
                    $(this).find('div > span.teams-wrap > div > div.match-team2.text-center').each(function(a, b) {
                        data2.push({
                            a: $(b).find('div > div > b').text(),
                            score: $(b).find('div.font-title').text().trim()
                        })
                    })
                    $(this).find('div > span.teams-wrap > div').each(function(a, b) {
                        jam.push($(b).find('div.match-score.center > div > b').text())
                        replay.push($(b).find('div.match-vs.match-link.replay > a').attr('href'))
                    })
                })
                for (let i = 0; i < data1.length; i++) {
                    result[i].match = `${data1[i].a} Vs ${data2[i].a}`
                    result[i].jam = jam[i],
                        result[i].replay = replay[i] ? replay[i] : 'Coming Soon'
                    result[i].score = data1[i].score ? `${data1[i].score} : ${data2[i].score}` : 'Coming Soon'
                }
                week += 1
            }
            resolve(result)
        })
    })
}


async function noveltoons (query){
    return new Promise((resolve, reject) => {
        axios.get(`https://noveltoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-content > div > div.search-content-left > a').each(function(a, b) {
                    result = {                   
                    judul: $(b).find('> div > div > p.search-item-title').text(),
                    like: $(b).find('> div > div > p.search-item-like > span:nth-child(2)').text().trim(),
                    genre: $(b).find('> div > div > p.search-item-label').text().trim().replace(/\ /g,'').replace(/\n\n/g,', '),
                    thumbnail: $(b).find('> div > img').attr('src'),
                    url: 'https://noveltoon.mobi' + $(b).attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function tiktokStalk(user) {
  let res = await axios.get(`https://urlebird.com/user/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
  obj.name = $('h1.user').text().trim()
  obj.username = $('div.content > h5').text().trim()
  obj.followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
  obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
  obj.description = $('div.content > p').text().trim()
  return obj
}

async function twitterStalk(user) {
  let res = await axios.get(`https://www.twuko.com/${user}/`)
  let $ = cheerio.load(res.data), obj = {}
  obj.pp_user = $('div[class="relative w-full h-full rounded-full cursor-pointer profile-image"] > img').attr('src')
  obj.name = $('div[class="p-3"] > p[class="text-center text-primary"]').text().trim()
  obj.username = $('div[class="p-3"] > div > span[class="font-bold text-center"]').text().trim()
  obj.followers = $('div[class="mb-4 text-4xl font-bold text-center"]').text()
  $('div[class="flex justify-center"] > div[class="px-4"]').each((idx, el) => {
    let text = $(el).find('div[class="text-xs font-bold text-center text-gray-600 uppercase"]').text()
    obj[text.toLowerCase()] = $(el).find('div[class="text-xl font-bold text-center"]').text()
  })
  obj.description = $('div[class="p-3 border-t border-gray-200"] > p').text().trim().replace(/\n/g, '')
  return obj 
}

async function RandomCerpen() {
	try{
	const link = await axios.get(`http://cerpenmu.com/`)
	const c = cheerio.load(link.data)
	let kumpulan = []
	c('#sidebar > div').each(function (real, ra) {
		c(ra).find('ul > li').each(function (i, rayy) {
			let random = c(rayy).find('a').attr('href')
			kumpulan.push(random)
		})
	})
	var acak = kumpulan[Math.floor(Math.random() * (kumpulan.length))]
	let Otw = await axios.get(`${acak}`)
	const C = cheerio.load(Otw.data)
	let otw = []
	C('#content > article > article').each(function (a, b) {
		let random = C(b).find('h2 > a').attr('href')
		otw.push(random)
	})
	var Acak = otw[Math.floor(Math.random() * (otw.length))]
	let Link = await axios.get(`${Acak}`)
	let $ = cheerio.load(Link.data)
	let judul = $('#content').find('article > h1').text().trim()
	let karangan = $('#content').find('article > a:nth-child(2)').text().trim()
	let Isi = []
	$('#content > article > p').each(function (wm, Ra) {
		let isi = $(Ra).text().trim()
		Isi.push(isi)

	})
	let cerita = []
	for (let i of Isi) {
		cerita += i
	}
	const data = {
			Judul: judul,
			Penulis: karangan,
			sumber: Acak,
			cerita: cerita
	}
	return data
} catch (err) {
	const res404 = {
		status: 500,
	}
	return res404
}
}

async function Searchnabi(nabi){
   return new Promise( async (resolve, reject) => {
       const scraper = JSON.parse(fs.readFileSync(__path +`/lib/data/kisahnabi/${nabi}.json`))
       console.log(scraper)
       const result = {
         name: scraper.name,
         kelahiran: scraper.thn_kelahiran +' sebelum massehi',
         wafat_usia: scraper.usia +' tahun',
         singgah: scraper.tmp,
         kisah: scraper.description
       }
       resolve(result)
   }).catch((err) => {resolve(err) })
}

async function surah(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://litequran.net/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > main > article > ol > li').each(function(a, b) {
                    result = {                 
                    arab: $(b).find('> span.ayat').text(),
                    latin: $(b).find('> span.bacaan').text(),
                    translate: $(b).find('> span.arti').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function  tafsirsurah(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://tafsirq.com/topik/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > div:nth-child(4) > div > div.col-md-6 > div ').each(function(a, b) {
                    result = {                 
                    surah: $(b).find('> div.panel-heading.panel-choco > div > div > a').text(),
                    tafsir: $(b).find('> div.panel-body.excerpt').text().trim(),
                    type: $(b).find('> div.panel-heading.panel-choco > div > div > span').text(),
                    source: $(b).find('> div.panel-heading.panel-choco > div > div > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function sholat(query){
    return new Promise((resolve, reject) => {
        axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
                    result = {                   
                    tanggal: $(b).find('> div:nth-child(2)').text(),
                    imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
                    subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
                    dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
                    ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
                    maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
                    isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
                }
                resolve(result)
                })
            })
            .catch(reject)
    })
}

async function listsurah (){
            return new Promise((resolve, reject) => {
                  axios.get('https://litequran.net/')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let listsurah = []
                       $('body > main > section > ol > li > a').each(function(a, b) {
                    listsurah.push($(b).text())
                })
                       result = {                       
                        listsurah: listsurah
                       }
                       resolve(result)
                  }).catch(reject)
             })
        }
        
function sholatt(NO) {
	return new Promise(async(resolve, reject) =>{
		axios.get('https://kalam.sindonews.com/jadwalsholat/' + NO).then(({ data }) => {
			const $ = cheerio.load(data)
			const result = {};
			$('div.imsakiyah-content').each(function(a, b) {
			result.Tanggal = $(b).find('tr:nth-child(1) > td:nth-child(1)').text()
			result.imsak = $(b).find('tr:nth-child(1) > td:nth-child(2)').text()
			result.subuh = $(b).find('tr:nth-child(1) > td:nth-child(3)').text()
			result.zuhur = $(b).find('tr:nth-child(1) > td:nth-child(4)').text()
			result.ashar = $(b).find('tr:nth-child(1) > td:nth-child(5)').text()
			result.maghrib = $(b).find('tr:nth-child(1) > td:nth-child(6)').text()
			result.isya = $(b).find('tr:nth-child(1) > td:nth-child(7)').text()
			})
			resolve(result)
		})
		.catch(reject)
	})
}

function surahh(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}

function distance(kawal, ktujuan){
  return new Promise((resolve, reject) => {
    axios.get(`http://jarakantarkota.com/${kawal}/${ktujuan}/`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const jarak = $('body > div.content > div > div.b-search-route > div > div > div.col-xs-12.col-sm-12.col-md-12.col-lg-8 > div').text().replace('                       ', '')
      resolve({
        kota_asal: jarak.split('  -')[0],
        kota_tujuan: jarak.split('- ')[1].split(' (')[0],
        jarak: jarak.split(' (')[1].split(')')[0]
      })
    })
    .catch(reject)
  })
}

function gempa() {
	        return new Promise(async(resolve,reject) => {
                axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg')
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const drasa = [];
                        $('table > tbody > tr:nth-child(1) > td:nth-child(6) > span').get().map((rest) => {
         					dir = $(rest).text();
         					drasa.push(dir.replace('\t', ' '))
        				})
        				teks = ''
        				for(let i=0; i<drasa.length; i++){
        					teks += drasa[i] + '\n'
        				}
        				const rasa = teks
                        const format = {
                        	imagemap : $('div.modal-body > div > div:nth-child(1) > img').attr('src'),
                        	magnitude : $('table > tbody > tr:nth-child(1) > td:nth-child(4)').text(),
                        	kedalaman: $('table > tbody > tr:nth-child(1) > td:nth-child(5)').text(),
                        	wilayah: $('table > tbody > tr:nth-child(1) > td:nth-child(6) > a').text(),
                        	waktu: $('table > tbody > tr:nth-child(1) > td:nth-child(2)').text(),
                        	lintang_bujur: $('table > tbody > tr:nth-child(1) > td:nth-child(3)').text(),
                        	dirasakan: rasa
                        }
                        const result = {
                        	data: format
                        }
                  resolve(result)
			})
                .catch(reject)
            })
}

function jadwalbola(){
    return new Promise((resolve, reject) => {
        axios.get('https://m.bola.net/jadwal_televisi/')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('body > div.main > div > div:nth-child(3) > div > ul > li').each(function(a, b) {
                    result = {                    
                    jadwal: $(b).find('> div > div > p > a').text().split('Jadwal TV: ')[1],
                    tanggal: $(b).find('> div > div > span').text().split('jadwal televisi ')[1],
                    url: $(b).find('> div > div > p > a').attr('href'),
                    thumb: 'https://cdns.klimg.com/bola.net/library/upload/21/2019/01/100s/bola_e9af938.jpg'
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function corona(negara) {
	try{
	const link = await axios.get(`https://www.worldometers.info/coronavirus/country/${negara}/`)
	const $ = cheerio.load(link.data)
	let kasus = $('#maincounter-wrap').find(' div > span').eq(0).text().trim()
	let mati = $('#maincounter-wrap').find(' div > span').eq(1).text().trim()
	let sembuh = $('#maincounter-wrap').find(' div > span').eq(2).text().trim()
	const data = {
			kasus: kasus,
			meninggal: mati,
			sembuh: sembuh
	}
	return data
} catch (err) {
	var notFond = {
		status: link.status,
	}
	return notFond
}
}

function trendtwit(country){
	return new Promise((resolve, reject) => {
		axios.get(`https://getdaytrends.com/${country}/`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hastag = [];
				const tweet = [];
				const result = [];
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr> td.main > a').each(function(a, b) {
					deta = $(b).text()
					hastag.push(deta)
				})
				$('#trends > table.table.table-hover.text-left.clickable.ranking.trends.wider.mb-0 > tbody > tr > td.main > div > span').each(function(a, b) {
					deta = $(b).text()
					tweet.push(deta)
				})
				num = 1
				for (let i = 0; i < hastag.length; i++) {
					result.push({
						rank: num,
						hastag: hastag[i],
						tweet: tweet[i]
					})
					num += 1
				}
				resolve({
					country: country,
					result: result
				})
			})
			.catch(reject)
	})
}

async function nickml(id, zoneId) {
return new Promise(async (resolve, reject) => {
axios
.post(
'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
new URLSearchParams(
Object.entries({
productId: '1',
itemId: '2',
catalogId: '57',
paymentId: '352',
gameId: id,
zoneId: zoneId,
product_ref: 'REG',
product_ref_denom: 'AE',
})
),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
Referer: 'https://www.duniagames.co.id/',
Accept: 'application/json',
},
}
)
.then((response) => {
resolve(response.data.data.gameDetail)
})
.catch((err) => {
reject(err)
})
})
}

async function ffstalk(userId) {
  let data = {
    "voucherPricePoint.id": 8050,
    "voucherPricePoint.price": "",
    "voucherPricePoint.variablePrice": "",
    "email": "",
    "n": "",
    "userVariablePrice": "",
    "order.data.profile": "",
    "user.userId": userId,
    "voucherTypeName": "FREEFIRE",
    "affiliateTrackingId": "",
    "impactClickId": "",
    "checkoutId": "",
    "tmwAccessToken": "",
    "shopLang": "in_ID",
  }
  let ff = await axios({
    "headers": {
    "Content-Type": "application/json; charset\u003dutf-8"
    },
    "method": "POST",
    "url": "https://order.codashop.com/id/initPayment.action",
    "data": data
  })
  return {
    id: userId,
    nickname: ff.data["confirmationFields"]["roles"][0]["role"]
  }
}

async function Cuaca(kota){
  return new Promise(async (resolve, reject) => {
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${kota}&units=${units}&appid=${APIKey}`;
    let iy = await request(url);
    if (iy.status !== 200)
      return reject({ status: iy.status, data: await iy.text() });
    cuaca = await iy.json();
    result = {
      status: iy.status,
      data: {
        Nama: cuaca.name + "," + cuaca.sys.country,
        Longitude: cuaca.coord.lon,
        Latitude: cuaca.coord.lat,
        Suhu: cuaca.main.temp + " C",
        Angin: cuaca.wind.speed + " m/s",
        Kelembaban: cuaca.main.humidity + "%",
        Cuaca: cuaca.weather[0].main,
        Keterangan: cuaca.weather[0].description,
        Udara: cuaca.main.pressure + " HPa",
      },
    };
    resolve(result);
  });
};

function jadwaltvnow(){
    return new Promise((resolve, reject) => {
        axios.get('http://www.dokitv.com/jadwal-acara-tv')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#tabeljadwaltv > tbody > tr ').each(function(a, b) {
                    result = {               
                    acara: $(b).find('> td:nth-child(2)').text(),
                    channel: $(b).find('> td > a').text(),
                    jam: $(b).find('> td.jfx').text(),
                    source: $(b).find('> td > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

async function bbc() {
	try {
    const hasil = [];
	const link = `https://www.bbc.com/indonesia`;
	const res = await axios.get(link, {
		headers: {
			"User-Agent": "Mozilla/5.0 (Linux; Android 9; Redmi 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Mobile Safari/537.36"
		}
	});
	const $ = cheerio.load(res.data);
	$('li.e57qer20.bbc-lpu9rr.eom0ln51').each(function(a, b) {
		let berita = $(b).find("p").text();
		let berita_diupload = $(b).find("time").text();
		let berita_url = $(b).find("a").attr("href");
		const result = {
			berita,
			berita_diupload,
			berita_url: "https://www.bbc.com" + berita_url,
		};
		hasil.push(result);
	});
	akhir = hasil.filter(v => v.berita !== "" && v.berita_diupload !== "");
	return akhir;
	} catch (eror404) {
		return "=> Error =>" + eror404;
	}
};

function merdekanews () {
	return new Promise((resolve) => {
		axios.get('https://www.merdeka.com/peristiwa/')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const upload = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('#mdk-content-center > div.inner-content > ul > li > div').each(function(a, b) {
					deta = $(b).find('h3 > a').text();
					judul.push(deta)
					link.push('https://www.merdeka.com' + $(b).find('h3 > a').attr('href'))
					upload.push($(b).find('div > span').text())
					thumb.push($(b).find('div > a > img').attr('src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						upload_date: upload[i],
						link: link[i],
						thumb: thumb[i]
					})
				}
				resolve(result)
			})
	})
}

function kompasnews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://news.kompas.com/`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("div.col-bs9-3").each(function(c, d) {
      title = $(d).find("h3.article__title > a.article__link").text()
      desc = $(d).find("div.article__lead").text().trim()
      date = $(d).find("div.article__date").text().trim()
      link = $(d).find("h3.article__title > a.article__link").attr('href')
      const Data = {
        title: title,
        desc: desc,
        date: date,
        link: link
      }
      hasil.push(Data)
    })
    resolve(hasil)
  }).catch(reject)
  })
  }

async function inews() {
return new Promise((resolve, reject) => {
        axios.get(`https://www.inews.id/news`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#news-list > li ').each(function(a, b) {
                    result = {                    
                    berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.title-news-update.padding-0px-top').text().trim(),
                    upload_time: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.date.margin-10px-left').text().trim().split('|')[0],
                    link: $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > div > div.float-left.width-130px.position-absolute > img').attr('data-original'),
                    info_berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > p').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function rexdl(query){
	return new Promise((resolve) => {
		axios.get('https://rexdl.com/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const jenis = [];
				const date = [];
				const desc = [];
				const link = [];
				const thumb = [];
				const result = [];
				$('div > div.post-content').each(function(a, b) {
					judul.push($(b).find('h2.post-title > a').attr('title'))
					jenis.push($(b).find('p.post-category').text())
					date.push($(b).find('p.post-date').text())
					desc.push($(b).find('div.entry.excerpt').text())
					link.push($(b).find('h2.post-title > a').attr('href'))
				})
				$('div > div.post-thumbnail > a > img').each(function(a, b) {
					thumb.push($(b).attr('data-src'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push({
						judul: judul[i],
						kategori: jenis[i],
						upload_date: date[i],
						deskripsi: desc[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				resolve(result)
			})
	})
}


function cariresep(query){
	return new Promise(async (resolve, reject) => {
		axios.get('https://resepkoki.id/?s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const link = [];
				const judul = [];
				const upload_date = [];
				const format = [];
				const thumb = [];
				$('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-media > a').each(function(a, b) {
					link.push($(b).attr('href'))
				})
				$('body > div.all-wrapper.with-animations > div:nth-child(5) > div > div.archive-posts.masonry-grid-w.per-row-2 > div.masonry-grid > div > article > div > div.archive-item-content > header > h3 > a').each(function(c, d) {
					jud = $(d).text();
					judul.push(jud)
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: judul[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function bacaresep(query){
	return new Promise(async (resolve, reject) => {
		axios.get(query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const abahan = [];
				const atakaran = [];
				const atahap = [];
				$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-name').each(function(a, b) {
					bh = $(b).text();
					abahan.push(bh)
				})
				$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-recipe-ingredients-nutritions > div > table > tbody > tr > td:nth-child(2) > span.ingredient-amount').each(function(c, d) {
					uk = $(d).text();
					atakaran.push(uk)
				})
				$('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-content > div.single-steps > table > tbody > tr > td.single-step-description > div > p').each(function(e, f) {
					th = $(f).text();
					atahap.push(th)
				})
				const judul = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-title.title-hide-in-desktop > h1').text();
				const waktu = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-cooking-time > span').text();
				const hasil = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-serves > span').text().split(': ')[1]
				const level = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-main > div.single-meta > ul > li.single-meta-difficulty > span').text().split(': ')[1]
				const thumb = $('body > div.all-wrapper.with-animations > div.single-panel.os-container > div.single-panel-details > div > div.single-main-media > img').attr('src')
				tbahan = 'bahan\n'
				for (let i = 0; i < abahan.length; i++) {
					tbahan += abahan[i] + ' ' + atakaran[i] + '\n'
				}
				ttahap = 'tahap\n'
				for (let i = 0; i < atahap.length; i++) {
					ttahap += atahap[i] + '\n\n'
				}
				const tahap = ttahap
				const bahan = tbahan
				const result = {
						judul: judul,
						waktu_masak: waktu,
						hasil: hasil,
						tingkat_kesulitan: level,
						thumb: thumb,
						bahan: bahan.split('bahan\n')[1],
						langkah_langkah: tahap.split('tahap\n')[1]
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function searchgore(query) {
	return new Promise(async (resolve, reject) => {
		axios.get('https://seegore.com/?s=' + query).then(dataa => {
			const $$$ = cheerio.load(dataa)
			pagina = $$$('#main > div.container.main-container > div > div.bb-col.col-content > div > div > div > div > nav > ul > li:nth-child(4) > a').text();
			rand = Math.floor(Math.random() * pagina) + 1
			if (rand === 1) {
				slink = 'https://seegore.com/?s=' + query
			} else {
				slink = `https://seegore.com/page/${rand}/?s=${query}`
			}
			axios.get(slink)
				.then(({
					data
				}) => {
					const $ = cheerio.load(data)
					const link = [];
					const judul = [];
					const uploader = [];
					const format = [];
					const thumb = [];
					$('#post-items > li > article > div.content > header > h2 > a').each(function(a, b) {
						link.push($(b).attr('href'))
					})
					$('#post-items > li > article > div.content > header > h2 > a').each(function(c, d) {
						jud = $(d).text();
						judul.push(jud)
					})
					$('#post-items > li > article > div.content > header > div > div.bb-cat-links > a').each(function(e, f) {
						upl = $(f).text();
						uploader.push(upl)
					})
					$('#post-items > li > article > div.post-thumbnail > a > div > img').each(function(g, h) {
						thumb.push($(h).attr('src'))
					})
					for (let i = 0; i < link.length; i++) {
						format.push({
							judul: judul[i],
							uploader: uploader[i],
							thumb: thumb[i],
							link: link[i]
						})
					}
					const result = {
						data: format
					}
					resolve(result)
				})
				.catch(reject)
		})
	})
}

function apkmirror(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://www.apkmirror.com/?post_type=app_release&searchtype=apk&s=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const nama = [];
				const developer = [];
				const lupdate = [];
				const size = [];
				const down = [];
				const version = [];
				const link = [];
				const format = [];
				$('#content > div > div > div.appRow > div > div > div > h5 > a').each(function(a, b) {
					nem = $(b).text();
					nama.push(nem)
				})
				$('#content > div > div > div.appRow > div > div > div > a').each(function(c, d) {
					dev = $(d).text();
					developer.push(dev)
				})
				$('#content > div > div > div.appRow > div > div > div > div.downloadIconPositioning > a').each(function(e, f) {
					link.push('https://www.apkmirror.com' + $(f).attr('href'))
				})
				$('#content > div > div > div.infoSlide > p > span.infoslide-value').each(function(g, h) {
					data = $(h).text();
					if (data.match('MB')) {
						size.push(data)
					} else if (data.match('UTC')) {
						lupdate.push(data)
					} else if (!isNaN(data) || data.match(',')) {
						down.push(data)
					} else {
						version.push(data)
					}
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: nama[i],
						dev: developer[i],
						size: size[i],
						version: version[i],
						uploaded_on: lupdate[i],
						download_count: down[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

function android1(query) {
	return new Promise((resolve, reject) => {
		axios.get('https://an1.com/tags/MOD/?story=' + query + '&do=search&subaction=search')
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const nama = [];
				const link = [];
				const rating = [];
				const thumb = [];
				const developer = [];
				const format = [];
				$('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a > span').each(function(a, b) {
					nem = $(b).text();
					nama.push(nem)
				})
				$('div > ul > li.current-rating').each(function(c, d) {
					rat = $(d).text();
					rating.push(rat)
				})
				$('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.developer.xsmf.muted').each(function(e, f) {
					dev = $(f).text();
					developer.push(dev)
				})
				$('body > div.page > div > div > div.app_list > div > div > div.img > img').each(function(g, h) {
					thumb.push($(h).attr('src'))
				})
				$('body > div.page > div > div > div.app_list > div > div > div.cont > div.data > div.name > a').each(function(i, j) {
					link.push($(j).attr('href'))
				})
				for (let i = 0; i < link.length; i++) {
					format.push({
						judul: nama[i],
						dev: developer[i],
						rating: rating[i],
						thumb: thumb[i],
						link: link[i]
					})
				}
				const result = {
					data: format
				}
				resolve(result)
			})
			.catch(reject)
	})
}

async function GSMArena(querry) {
	const link = await axios.get(`https://www.gsmarena.com/res.php3?sSearch=${querry}`)
	const ch = cheerio.load(link.data)
	let Url = ch('#review-body > div > ul').find('li:nth-child(1) > a').attr('href')
	const Link = await axios.get(`https://www.gsmarena.com/${Url}`)
	let $ = cheerio.load(Link.data)
	let barang = $('#body > div > div.review-header > div').find(' div.article-info-line.page-specs.light.border-bottom > h1').text().trim()
	let rilis = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(1) > span').text().trim()
	let thumb = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > div > a > img').attr('src')
	let ukuran = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(3) > span').text().trim()
	let tipe = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(5) > span').text().trim()
	let storage = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.specs-brief.pattern > span:nth-child(7) > span').text().trim()
	let display = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > div').text().trim()
	let inchi = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-display > strong > span').text().trim()
	let camPix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(1)').text().trim()
	let Mp = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > strong > span:nth-child(2)').text().trim()
	let VideoVix = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-camera > div').text().trim()
	let Ram = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(2)').text().trim()
	let chipset = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > div').text().trim()
	let batre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(1)').text().trim()
	let Mah = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > strong > span:nth-child(2)').text().trim()
	let merekBatre = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-battery > div').text().trim()
	let AngkaRam = $('#body > div > div.review-header > div').find('div.center-stage.light.nobg.specs-accent > ul > li.help.accented.help-expansion > strong > span:nth-child(1)').text().trim()
	let detail = []
	$('#specs-list').each(function (anu, RA) {
		let isi = $(RA).text().trim()
		detail.push(isi)
	})
	const result = {
			judul: barang,
			rilis: rilis,
			thumb: thumb,
			ukuran: ukuran,
			type: tipe,
			storage: storage,
			display: display,
			inchi: inchi,
			pixel: camPix + Mp,
			videoPixel: VideoVix,
			ram: AngkaRam + Ram,
			chipset: chipset,
			batrai: batre + Mah,
			merek_batre: merekBatre,
			detail: detail[0]
	}
	return result
}

async function gsmarena (query){
    return new Promise(async (resolve, reject) => {
        try {
            var {
                data
            } = await axios.get('https://www.gsmarena.com/res.php3?sSearch=' + query)
        } catch {
            return ({
                creator: creator,
                status: false
            })
        }
        const $ = cheerio.load(data)
        const result = {}
        link = $('#review-body > div > ul > li > a').attr('href')
        var {
            data
        } = await axios.get('https://www.gsmarena.com/' + link)
        const $$ = cheerio.load(data)
        result['title'] = $$('#body').find('div.article-info-line.page-specs.light.border-bottom > h1').text()
        result['thumbnail'] = $$('#body').find('div > a > img').attr('src')
        $$('#specs-list > table').each(function(a, b) {
            result[$$(b).find('tr > th').text().toLowerCase().replace(/ /g, '')] = $$(b).find('td.nfo').text().trim()
        })
        resolve(result)
    })
}

async function emoji(emoticon) {
	const emojii = encodeURI(`${emoticon}`)
	const link = await axios.get(`https://emojipedia.org/${emojii}/`)
	const $ = cheerio.load(link.data)
	var apple = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(1) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var google = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(2) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var samsung = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(3) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var microsoft = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(4) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var whatsapp = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(5) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var twitter = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(6) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var facebook = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(7) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var jooxpixel = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(8) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var openmoji = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(9) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var emojidex = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(10) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var messager = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(11) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var LG = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(12) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var HTC = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(13) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var mozilla = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(14) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var softbank = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(15) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var docomo = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(16) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	var KDDI = $('body > div.container > div.content').find('article > section.vendor-list > ul > li:nth-child(17) > div.vendor-container.vendor-rollout-target > div.vendor-image > img').attr('src');
	const result = {
		apple: apple.replace('120', '240'),
		google: google.replace('120', '240'),
		samsung: samsung.replace('120', '240'),
		microsoft: microsoft.replace('120', '240'),
		whatsapp: whatsapp.replace('120', '240'),
		twitter: twitter.replace('120', '240'),
		facebook: facebook.replace('120', '240'),
		jooxPixel: jooxpixel.replace('120', '240'),
		openemoji: openmoji.replace('120', '240'),
		emojidex: emojidex.replace('120', '240'),
		messanger: messager.replace('120', '240'),
		LG: LG.replace('120', '240'),
		HTC: HTC.replace('120', '240'),
		mozilla: mozilla.replace('120', '240'),
		softbank: softbank.replace('120', '240'),
		docomo: docomo.replace('120', '240'),
		KDDI: KDDI.replace('120', '240')
	}
	return result
}

function jagokata(input) {
	return new Promise((resolve, reject) => {
		axios.get('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
			.then(res => {
				const $ = cheerio.load(res.data)
				data = []
				$('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
					x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
					y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
					z = $(element).find('q[class="fbquote"]').text().trim()
					data.push({ author: x, bio: y, quote: z })
				})
				data.splice(2, 1)
				if (data.length == 0) return resolve({ status: false })
				resolve({ status: true, result: data })
			}).catch(reject)
	})
}

function chara(query) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/characters/all?name=${query}&sort=likes&order=desc`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const linkp = $('#siteContainer > table > tbody > tr:nth-child(1) > td.tableCharInfo > a').attr('href')
      axios.get('https://www.anime-planet.com' + linkp)
      .then((data) => {
        //console.log(data.data)
        const $$ = cheerio.load(data.data)
      resolve({
        nama: $$('#siteContainer > h1').text(),
        gender: $$('#siteContainer > section.pure-g.entryBar > div:nth-child(1)').text().split('\nGender: ')[1],
        warna_rambut: $$('#siteContainer > section.pure-g.entryBar > div:nth-child(2)').text().split('\nHair Color: ')[1],
        warna_mata: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(1) > div').text().split('\n')[1],
        gol_darah: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(2) > div').text().split('\n')[1],
        birthday: $$('#siteContainer > section:nth-child(11) > div > div > div > div > div:nth-child(3) > div').text().split('\n')[1],
        description: $$('#siteContainer > section:nth-child(11) > div > div > div > div:nth-child(1) > p').text()
      })
    })
    })
    .catch(reject)
  })
}

function anime(query){
  return new Promise((resolve, reject) => {
    axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
    .then((data) => {
      const $ = cheerio.load(data.data)
      const result = [];
      const judul = [];
      const link = [];
      const thumb = [];
      $('#siteContainer > ul.cardDeck.cardGrid > li > a > h3').each(function(a, b) {
        deta = $(b).text();
        judul.push(deta)
      })
      $('#siteContainer > ul.cardDeck.cardGrid > li > a').each(function(a, b) {
        link.push('https://www.anime-planet.com' + $(b).attr('href'))
      })
      $('#siteContainer > ul.cardDeck.cardGrid > li > a > div.crop > img').each(function(a, b) {
        thumb.push('https://www.anime-planet.com' + $(b).attr('src'))
      })
      for(let i=0; i<judul.length; i++){
        result.push({
          judul: judul[i],
          thumb: thumb[i],
          link: link[i]
        })
      }
      resolve(result)
    })
    .catch(reject)
  })
}

function jobstreet(query){
  return new Promise((resolve, reject) => {
    axios.get(`https://www.jobstreet.co.id/id/job-search/${query}-jobs/`)
    .then((data) => {
      //console.log(data.data)
      const $ = cheerio.load(data.data)
      const job = [];
      const perusahaan = [];
      const daerah = [];
      const format = [];
      const link = [];
      const upload = [];
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a > div').each(function(a, b) {
        deta = $(b).text();
        job.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > span').each(function(a, b) {
        deta = $(b).text();
        perusahaan.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > span > span').each(function(a, b) {
        deta = $(b).text();
        daerah.push(deta)
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div > div > div > h1 > a').each(function(a, b) {
        link.push($(b).attr('href'))
      })
      $('#jobList > div > div:nth-child(3) > div > div > div > div > article > div > div > div.sx2jih0.zcydq852.zcydq842.zcydq872.zcydq862.zcydq82a.zcydq832.zcydq8d2.zcydq8cq > div.sx2jih0.zcydq832.zcydq8cq.zcydq8c6.zcydq882 > time > span').each(function(a, b) {
        deta = $(b).text();
        upload.push(deta)
      })
      for(let i=0; i<job.length; i++){
        format.push({
          job: job[i],
          perusahaan: perusahaan[i],
          daerah: daerah[i],
          upload: upload[i],
          link_Detail: 'https://www.jobstreet.co.id' + link[i]
        })
      }
      resolve(format)
    })
    .catch(reject)
  })
}


function anoboys(query){
        return new Promise((resolve,reject) => {
                axios.get('https://anoboy.media/?s=' + query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                        const format = [];
                        const link = [];
						const judul = [];
						const thumb = [];
						const uptime = [];
                        $('body > div.wrap > div.container > div.column-content > a > div > div.amvj > h3').each(function(a,b) {
                                jud = $(b).text();
                                judul.push(jud)
                        })
                        $('body > div.wrap > div.container > div.column-content > a > div > div.jamup').each(function(c,d) {
                        	upt = $(d).text();
                        	uptime.push(upt)
                        })
                        $('body > div.wrap > div.container > div.column-content > a > div > amp-img').each(function(e,f) {
                        	thumb.push($(f).attr('src'))
                        })
                        $('body > div.wrap > div.container > div.column-content > a').each(function(g,h) {
                        	link.push($(h).attr('href'))
                        })
        				for(let i=0; i<link.length; i++){
        					format.push({
        						judul : judul[i],
        						thumb : thumb[i],
        						link : link[i]
        					})
        				}
        				const result = {
        					status: data.status,
        					data: format
        				}
                  resolve(result)
                })
                .catch(reject)
        })
}
function anoboydl (query){
        return new Promise((resolve,reject) => {
                axios.get(query)
                .then(({ data }) => {
                        const $ = cheerio.load(data)
                  resolve({
                  	judul: $('body > div.wrap > div.container > div.pagetitle > h1').text(),
                  	uptime: $('body > div.wrap > div.container > div.pagetitle > div > div > span > time').text(),
                  	mforu: {
                  		SD: $('#colomb > p > span:nth-child(1) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(1) > a:nth-child(5)').attr('href')
                  	},
                  	zippy: {
                  		SD: $('#colomb > p > span:nth-child(3) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(3) > a:nth-child(5)').attr('href')
                  	},
                  	mirror: {
                  		SD: $('#colomb > p > span:nth-child(5) > a:nth-child(3)').attr('href'),
                  		HD: $('#colomb > p > span:nth-child(5) > a:nth-child(5)').attr('href')
                  	}
                  })
                })
                .catch(reject)
        })
}

function zerochan(query){
	return new Promise((resolve, reject) => {
		axios.get('https://www.zerochan.net/search?q=' + query)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const judul = [];
				const result = [];
				const id = [];
				$('#thumbs2 > li > a > img').each(function(a, b) {
					if (!$(b).attr('alt').startsWith('https://static.zerochan.net/')) {
						judul.push($(b).attr('alt'))
					}
				})
				$('#thumbs2 > li > a').each(function(a, b) {
					id.push($(b).attr('href'))
				})
				for (let i = 0; i < judul.length; i++) {
					result.push('https://s1.zerochan.net/' + judul[i].replace(/\ /g, '.') + '.600.' + id[i].split('/')[1] + '.jpg')
				}
				resolve({
					result: result
				})
			})
			.catch(reject)
	})
}

function mcpedl(query) {
return new Promise((resolve, reject) => {
axios.get(`https://mcpedl.com/?s=${query}`).then(async tod => {
const $ = cheerio.load(tod.data)
hasil = []
$("div.post").each(function(c, d) {
name = $(d).find("h2.post__title").text().trim();
date = $(d).find("div.post__date").text().trim();
desc = $(d).find("p.post__text").text().trim();
category = $(d).find("div.post__category > a").text().trim();
link = $(d).find("a").attr('href')
link2 = `https://mcpedl.com${link}`
const Data = {
name: name,
category: category,
date: date,
desc: desc,
link: link2
}
hasil.push(Data)

})
 resolve(hasil)
}).catch(reject)
});
}

async function tiktokder (link){
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: `https://tiktokder.com/get-video`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': fakeUa(),
        cookie: '_ga=GA1.2.1043984244.1635384203; _gid=GA1.2.943898217.1635384203; _gat_gtag_UA_158291813_1=1; __gads=ID=9bf807235d36eb92-22ac48cee7cc00a2:T=1635384203:RT=1635384203:S=ALNI_Ma2esxJSFCulj3UsT-EepKd5QlTWw',
      },
      formData: {
        link: link,
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      //console.log(body)
      const $ = cheerio.load(body)
      resolve({        
        username: $('div > div.result > div:nth-child(2) > div > a.username').text(),
        nickname: $('div > div.result > div:nth-child(2) > div > a.user-nickname').text(),
        user_avatar: $('div > div.result > div:nth-child(2) > div > img').attr('src'),
        caption: $('div > div.result > div:nth-child(2) > p').text(),
        views: $('div > div.result > div:nth-child(2) > ul > li > span').text(),
        link: $('div > div:nth-child(1) > a').attr('href'),
      })
    })
  })
}

async function dddtik (link){
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: `https://dddtik.com/down.php`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'user-agent': fakeUa(),
        cookie: 'sc_is_visitor_unique=rx12545292.1635383422.F7DED83AD2BA4F9517A804FC1A0ED021.1.1.1.1.1.1.1.1.1; __gads=ID=b947ab19f44e72c9-22cb5054e4cc00ef:T=1635383422:RT=1635383422:S=ALNI_MZWS0q0Op8F6EpwhOL1pMlFTGjCvQ',
      },
      formData: {
        url: link,
      },
    }

    request(options, async function (error, response, body) {
      if (error) throw new Error(error)
      const $ = cheerio.load(body)
      resolve({       
        caption: $('div > div.ml-3 > span').text(),
        download: {
          source: $('div > div:nth-child(4)').find('a').attr('href'),
          dddtik: $('div > div:nth-child(5)').find('a').attr('href'),
        },
      })
    })
  })
}

module.exports.ytPlayMp4 = ytPlayMp4
module.exports.ytPlayMp3 =ytPlayMp3
module.exports.ytDonlodMp3 =ytDonlodMp3
module.exports.ytDonlodMp4 = ytDonlodMp4
module.exports.goredl = goredl
module.exports.dddtik = dddtik
module.exports.tiktokder = tiktokder
module.exports.mcpedl = mcpedl
module.exports.zerochan = zerochan
module.exports.anoboydl = anoboydl
module.exports.anoboys = anoboys
module.exports.emoji = emoji
module.exports.jagokata = jagokata
module.exports.chara = chara
module.exports.anime = anime
module.exports.jobstreet = jobstreet
module.exports.gsmarena = gsmarena
module.exports.apkmirror = apkmirror
module.exports.android1 = android1
module.exports.GSMArena = GSMArena
module.exports.searchgore = searchgore
module.exports.bacaresep = bacaresep
module.exports.cariresep = cariresep
module.exports.rexdl = rexdl
module.exports.inews = inews
module.exports.kompasnews = kompasnews
module.exports.merdekanews = merdekanews
module.exports.bbc = bbc
module.exports.jadwaltvnow = jadwaltvnow
module.exports.Cuaca = Cuaca
module.exports.ffstalk = ffstalk
module.exports.nickml = nickml
module.exports.trendtwit = trendtwit
module.exports.corona = corona
module.exports.jadwalbola = jadwalbola
module.exports.gempa = gempa
module.exports.distance = distance
module.exports.sholatt = sholatt
module.exports.surahh = surahh
module.exports.sholat = sholat
module.exports.listsurah = listsurah
module.exports.tafsirsurah = tafsirsurah
module.exports.surah = surah
module.exports.Searchnabi = Searchnabi
module.exports.RandomCerpen = RandomCerpen
module.exports.tiktokStalk = tiktokStalk
module.exports.twitterStalk = twitterStalk
module.exports.noveltoons = noveltoons
module.exports.jadwalmplid = jadwalmplid
module.exports.jadwaltv = jadwaltv
module.exports.kbbi = kbbi
module.exports.layarkita = layarkita
module.exports.ringtone = ringtone
module.exports.hoax = hoax
module.exports.umma = umma
module.exports.wikimedia = wikimedia
module.exports.wallpaper = wallpaper
module.exports.GDriveDl = GDriveDl
module.exports.styletext = styletext
module.exports.quotesAnime = quotesAnime
module.exports.palingmurah = palingmurah
module.exports.getVideo = getVideo
module.exports.linkwa = linkwa
module.exports.film = film
module.exports.lirik = lirik
module.exports.soundcloud = soundcloud
module.exports.twitter2 = twitter2
module.exports.cocofun = cocofun
module.exports.likedl = likedl
module.exports.linestickerdown = linestickerdown
module.exports.imbd = imbd
module.exports.imgur = imgur
module.exports.pinterestdl2 = pinterestdl2
module.exports.facebook = facebook
module.exports.facebook2 = facebook2
module.exports.covid = covid
module.exports.scdl2 = scdl2
module.exports.wattpad = wattpad
module.exports.playstore = playstore
module.exports.drakor = drakor
module.exports.webtoons = webtoons
module.exports.mangatoons = mangatoons
module.exports.moddroid = moddroid
module.exports.apkmody = apkmody
module.exports.mcpedl = mcpedl
module.exports.servermc = servermc
module.exports.jalantikus = jalantikus
module.exports.pinterest = pinterest
module.exports.pinterestdl = pinterestdl
module.exports.mediafireDl = mediafireDl
module.exports.solidfiles = solidfiles
module.exports.igDownload = igDownload
module.exports.igStory = igStory
module.exports.igtv = igtv
module.exports.scdl = scdl
module.exports.anonfiledl = anonfiledl
module.exports.sfiledl = sfiledl
module.exports.sfilesearch = sfilesearch
module.exports.stickerDl = stickerDl
module.exports.pixivDl = pixivDl
module.exports.xnxxDl = xnxxDl
module.exports.musicaldown = musicaldown
module.exports.zippyshare = zippyshare
module.exports.getLatestKomik = getLatestKomik
module.exports.getLatestAnime = getLatestAnime
module.exports.kusoNime = kusoNime
module.exports.doujindesuSearch = doujindesuSearch
module.exports.doujindesuDl = doujindesuDl
module.exports.doujindesuLatest = doujindesuLatest
module.exports.mynimeSearch = mynimeSearch
module.exports.getInfoAnime = getInfoAnime
module.exports.getLatestHanime = getLatestHanime
module.exports.artinama = artinama
module.exports.artimimpi = artimimpi
module.exports.ramalanJodoh = ramalanJodoh
module.exports.konachan = konachan
module.exports.happymodSearch = happymodSearch
module.exports.searchIlust = searchIlust
module.exports.stickerSearch = stickerSearch
module.exports.xnxxSearch = xnxxSearch
module.exports.alphacoders = alphacoders
module.exports.wallpapercave = wallpapercave
module.exports.wallpaperscraft = wallpaperscraft
module.exports.tebakgambar = tebakgambar
module.exports.ghstalk =  ghstalk
module.exports.npmstalk =  npmstalk
module.exports.herodetails = herodetails
module.exports.herolist = herolist
module.exports.akanekoApi = akanekoApi
module.exports.twitterdl = twitterdl
module.exports.KomikDl = KomikDl
module.exports.AnimeDl = AnimeDl
module.exports.telesticker = telesticker
module.exports.WattpadUser = WattpadUser
module.exports.whois = whois
module.exports.domainSearch = domainSearch
module.exports.getLatest = getLatest
module.exports.ttdownloader = ttdownloader