---
title: react animation test
template: post.html
date: 2016-02-21
---

I added a react animation test to CodePen. I wanted to test out the possibility of adding GreenSock TweenMax animations to react components. So far it seems pretty easy. I added animations during:

* componentDidMount
* componentDidUpdate
* custom function calls

I referenced the elements using the *ref* attribute and passing in a custom *position* prop. I incremented the position prop at render and was able to use it to delay the animation trigger.

<pre>
<code class="language-jsx">
render() {
  var _this = this;
  return (
    &lt;div className="wrapper"&gt;
      &lt;Hello /&gt;
      &lt;button onClick={this.toggleList} ref="listBtn"&gt;Close&lt;/button&gt;
      &lt;ul ref="list"&gt;
      {this.props.fish.map(function(item, i) {
        return &lt;ListItem itemText={item} position={i} visible={_this.state.listExpanded} /&gt;;
      })}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}
</code>
</pre>

<p data-height="600" data-theme-id="21445" data-slug-hash="PZyLMj" data-default-tab="result" data-user="rewfergu" class='codepen'>See the Pen <a href='http://codepen.io/rewfergu/pen/PZyLMj/'>React with GSAP</a> by rewfergu (<a href='http://codepen.io/rewfergu'>@rewfergu</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
