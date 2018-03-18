#!/usr/bin/env node

const fetch = require('./index');
const fs = require('fs');
const path = require('path');
const dir = path.join(process.cwd(), process.argv[2]);
const ids = process.argv.slice(3);

const run = async () => {
	for (const id of ids) {
		try {
			console.log('Fetching', id);
			const data = await fetch(id);
			const safeTitle = data.title.replace(/["\\\/:*?<>|]/g, '');
			fs.writeFileSync(path.join(dir, `${safeTitle}.m4a`), data.data, { encoding: 'binary' });
			console.log(`Saved as ${safeTitle}.m4a!`);
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
