const snekfetch = require('snekfetch');

module.exports = async id => {
	const { text } = await snekfetch.get(`https://www.jam-community.com/song/${id}`);
	const [url] = text.match(/https:\/\/mmj-live\.s3-accelerate\.amazonaws\.com\/assets\/music_file\/(.+)\.m4a/);
	const [, title] = text.match(/<title>(.+)<\/title>/);
	const { body } = await snekfetch.get(url);
	return {
		hash: id,
		url,
		title: title.replace(/^(Music Maker JAM - )/i, ''),
		data: body
	};
};
