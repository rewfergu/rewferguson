---
title: react animation test
layout: post
date: 2016-02-21
---

I added a react animation test to CodePen. I wanted to test out the possibility of adding GreenSock TweenMax animations to react components. So far it seems pretty easy. I added animations during:

* componentDidMount
* componentDidUpdate
* custom function calls

I referenced the elements using the ref attribute and passing in a custom position prop. I incremented the position prop at render and was able to use it to delay the animation trigger.


<p data-height="493" data-theme-id="21445" data-slug-hash="PZyLMj" data-default-tab="result" data-user="rewfergu" class='codepen'>See the Pen <a href='http://codepen.io/rewfergu/pen/PZyLMj/'>React with GSAP</a> by rewfergu (<a href='http://codepen.io/rewfergu'>@rewfergu</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
