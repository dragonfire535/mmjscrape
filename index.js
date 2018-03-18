#!/usr/bin/env node

const snekfetch = require('snekfetch');
const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), process.argv[2]);
const ids = process.argv.slice(3);
const urlRegex = /https:\/\/mmj-live\.s3-accelerate\.amazonaws\.com\/assets\/music_file\/(.+)\.m4a/;

const run = async () => {
	for (const id of ids) {
		try {
			console.log('Fetching', id);
			const { text } = await snekfetch.get(`https://www.jam-community.com/song/${id}`);
			const [url] = text.match(urlRegex);
			const [,title] = text.match(/<title>(.+)<\/title>/);
			console.log('Downloading', title);
			const { body } = await snekfetch.get(url);
			fs.writeFileSync(path.join(dir, `${title}.m4a`), body, { encoding: 'binary' });
			console.log(`Saved as ${title}.m4a!`);
		} catch (err) {
			console.error(`Failed to download ${id}\n`, err);
		}
	}
};

run().then(() => {
	console.log('Done!');
	process.exit(0);
}).catch(err => {
	console.error('Oh no, there was an error!\n', err);
	process.exit(1);
});
