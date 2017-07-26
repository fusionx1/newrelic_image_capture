# New Relic Image Capture
This is a prototype in capturing newrelic metric using casperjs and phantomjs

## Requirements
1. Install casperjs. jq is a lightweight and flexible command-line JSON processor. - http://casperjs.org/
2. Install phantomjs. PhantomJS is a headless WebKit scriptable with a JavaScript API. It has fast and native support for various web standards: DOM handling, CSS selector, JSON, Canvas, and SVG. - http://phantomjs.org/download.html
3. Working onelogin account
4. Working Yubi(Tested on gpg2)

## Usage
casperjs --cookies-file=cookie.txt newlic_capture.js
