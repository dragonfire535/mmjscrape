# mmjscrape
[![Downloads](https://img.shields.io/npm/dt/mmjscrape.svg?maxAge=3600)](https://www.npmjs.com/package/mmjscrape)
[![Version](https://img.shields.io/npm/v/mmjscrape.svg?maxAge=3600)](https://www.npmjs.com/package/mmjscrape)
[![Travis](https://api.travis-ci.org/dragonfire535/mmjscrape.svg?branch=master)](https://travis-ci.org/dragonfire535/mmjscrape)

mmjscrape is a simple cli app for downloading Music Maker JAM songs based on
their hash URLs you obtain when sharing via email. It was written for my dad so
I could easily download the songs he made and burn them to CDs, but I got tired
of keeping it on my hard drive collecting dust.

## Usage
`mmjscrape <path> <...hashes>` or `mmj <path> <...hashes>`. You will find the
tracks as m4a files in the `path`. If one cannot be downloaded, it will be
skipped.
