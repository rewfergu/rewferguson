---
title: remote controlled web page
template: post.html
date: 2016-02-25
---

Getting an RC transmitter to talk to a servo is pretty easy. That's what it is made for and it pretty much works out of the box. Getting an RC transmitter to talk to node.js isn't really that straightforward.  

<div class="flex-video"><iframe src="https://drive.google.com/file/d/1yJgTYC08b6wN3c14Y-_b0giQ2Z8pHtCKPw/preview" width="640" height="480"></iframe></div>

I started by putting a voltmeter on the pins of the rc receiver and I did get a voltage when I moved the stick, but it was very small.

* 0.26 at center
* 0.35 all the way right
* 0.17 all the way left

If you try using analogRead() with johnny five on those values it doesn't really work. Plug a servo into those pins and it works fine though, so somehow they know what to do with the voltage.  I pulled the case off and started poking around with a voltmeter to see if any of the values could be useful to input into the analog pins of the Arduino. It turns out the voltage on two of the pins of the potentiometer were usable! So basically to use the signal coming off the RC transmitter I just needed to use an extra servo as an interpreter.

{% include figure.html src="https://lh3.googleusercontent.com/146mhjTTG3ZoNv707RkN9lAEfaVrn5kUYeT08YYc1a656wkq0g6fwJckLAXOvUWCsb-eFey1iBp4wgROOSfKIhcOlPJhaBkFx5SDpZGMYkxBcBdRfBOtymUppXV_gIGPko1mw_c8sViAAWXg_le-3SQIZXfQMCNq2ENZ1Cz0O7LFemwt2a5q8r8jI_zqDHISsLqnDS1MyKTjFH2lB2QcdUqOlW0TF7bPHSxEN99GPLq4w4afZ4sIKEsNuFUrofRPZAH7A6UMLz8vn4GhHi20zjAYd3DtaNARYiRAM4YhyqJG3PG2O8palx0c66fc1pRegRfAUB8lPjPKBbVxDygw4Ej2w9PGSSx_cuEFXKgb4xgS4aFxB3OSMUgIr-F9wUVEhyHs9TJXtSHlQFsbWibyjhI0T4ceMdRSzjSfg4O0cQrGSOaw3EwAHUi-U5vuOsD4KXosxP5wyVHwDKfsNwBr2qvgnAoBa4DHH-h5n3uWP-qz9ObZ_lVXP0gDNkyLVpnsoa3_55tLxz6JZLjNG0MaBe--cbf1i7CcIsJihgK9uNoqLX4jxk9tzb5r1-kb7ZAB0qWsxw=w1242-h1656-no" alt="the inside of a servo" caption="If I attach wires to two of the contacts on a potentiometer I can get a voltage that johnny five will read via analogRead()" %}

Using johnny five's analogRead function, I was getting useful values.

* 214 at center
* 307 all the way right
* 120 all the way left

Since I only needed three real states to control the screen, I can group conditional statements to send socket.io messages.
