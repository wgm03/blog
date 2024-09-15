<template><div><h1 id="绝对定位和相对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位和相对定位"><span>绝对定位和相对定位</span></a></h1>
<h2 id="相对定位" tabindex="-1"><a class="header-anchor" href="#相对定位"><span>相对定位</span></a></h2>
<p>1.相对定位是指元素相对于其正常位置进行定位。也就是说，当设置了position: relative;后，元素仍然保留其原本的位置，但是可以通过top, right, bottom, left属性来调整其相对于原始位置的偏移量。相对定位的元素<strong>不会影响其他元素的位置</strong>，也不会脱离文档流</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  我向右偏移了50px。</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，文本块会向右偏移50像素，但它原本的空间依然保留。</p>
<h2 id="绝对定位" tabindex="-1"><a class="header-anchor" href="#绝对定位"><span>绝对定位</span></a></h2>
<p>1.绝对定位是指元素相对于其最近的一个已定位祖先元素(设置了position属性为relative, absolute, 或fixed的祖先元素)进行定位。如果没有这样的祖先元素，则相对于初始包含块（通常是html元素）定位。绝对定位的元素会脱离文档流，这意味着它们不会影响页面上的其他元素的位置。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">    我位于父容器内部，并且相对于父容器偏移了20px向下，30px向右。</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用场景示例" tabindex="-1"><a class="header-anchor" href="#使用场景示例"><span>使用场景示例</span></a></h2>
<p>假设我们要创建一个导航栏，其中有一个按钮需要位于导航栏的右下角。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">.navbar</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">.button</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点击我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，.navbar使用了相对定位，而.button使用了绝对定位，并且通过bottom和right属性将其放置在.navbar的右下角。</p>
<h2 id="子元素设置绝对定位-父元素设置相对定位-这样设置有什么道理-可不可以把父元素也设置为绝对定位" tabindex="-1"><a class="header-anchor" href="#子元素设置绝对定位-父元素设置相对定位-这样设置有什么道理-可不可以把父元素也设置为绝对定位"><span>子元素设置绝对定位，父元素设置相对定位 这样设置有什么道理？可不可以把父元素也设置为绝对定位？</span></a></h2>
<p>将子元素设置为position: absolute;，而父元素设置为position: relative;是一种常见的布局技巧，这样做的目的是为了使子元素相对于其最近的已定位祖先元素（即设置了relative, absolute, 或fixed定位的祖先元素）进行定位。</p>
<p><strong>子元素绝对定位 + 父元素相对定位的优点：</strong></p>
<p><strong>精确定位</strong>：可以精确地控制子元素的位置，使其相对于父元素在水平或垂直方向上偏移一定的距离。</p>
<p><strong>不影响其他元素流</strong>：绝对定位的子元素不会影响到其他普通流中的元素位置。</p>
<p><strong>易于调整</strong>：当需要调整子元素的位置时，只需要修改其top, right, bottom, left的值即可。</p>
<p><strong>可不可以把父元素也设置为绝对定位？</strong></p>
<p>当然可以，但是这样做可能会导致不同的结果。如果你把父元素也设置成position: absolute;，则该父元素也会脱离普通文档流，并且会相对于其最近的已定位祖先元素定位。</p>
<p>但是，这通常不是我们想要的，因为通常情况下，我们希望父元素是普通文档流中的元素，这样其他元素才能正常地和它交互。</p>
</div></template>


