# Tiny Vue3 Template - ESM Flavor

Fork of [jvns/vue3-tiny-template](https://github.com/jvns/vue3-tiny-template) using modules.

## Demo

You can see a demo of [what this site looks like](https://gwpantazes.github.io/vue3-tiny-template-esm/) on GitHub pages. If it's working correctly, it should say "banana" and "banana!".

## Disclaimer

I make no claims that this is the "best" way to do it. What the [official (and
very good) Vue documenation](https://vuejs.org/guide/quick-start.html#using-vue-from-cdn)
suggests is probably better.

## Get Started

There is no build step in this template. Instead, it uses the CDN version of Vue (with ESM) and a single HTML / JS file.

To run, `npx serve`.

- NOTE: ESmodules don't work over the `file://` protocol, so you have to serve over HTTP or HTTPS.

## CDN vs Self-Host

Usually I'll download the latest version of Vue with `wget https://unpkg.com/vue@3/dist/vue.esm-browser.js` and use a version I host myself
instead of relying on the CDN (in case the CDN stops working one day).
