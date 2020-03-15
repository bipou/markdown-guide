# Markdown 和 HTML 融合

Markdown中，可以直接嵌入 `HTML` 内容，包括：`tags`，`css`等。

- [嵌入HTML-tags](#嵌入html-tags)
- [嵌入CSS](#嵌入css)

## 嵌入HTML-tags

### 1. 实例代码

``` HTML
<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

<strong>1.做个耐心的聆听者。</strong>

2.永远不要流露出厌烦的表情。

<del>3.等待，直到他人表明观点，然后附和他们。</del>

4.让他人表明宗教立场，而后发表同样的观点。

<del>5.可以暗示涉及“性”的话题，但若对方没有表示出强烈的兴趣，就不要继续下去。</del>

6.永远不要谈论疾病，除非对方特别关心。

7.永远不要刺探个人隐私，对方最终会告诉你一切。

8.永远不要自吹自擂。

9.拒绝邋遢。

10.永远别喝醉。

<br />

</div>
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

<strong>1.做个耐心的聆听者。</strong>

2.永远不要流露出厌烦的表情。

<del>3.等待，直到他人表明观点，然后附和他们。</del>

4.让他人表明宗教立场，而后发表同样的观点。

<del>5.可以暗示涉及“性”的话题，但若对方没有表示出强烈的兴趣，就不要继续下去。</del>

6.永远不要谈论疾病，除非对方特别关心。

7.永远不要刺探个人隐私，对方最终会告诉你一切。

8.永远不要自吹自擂。

9.拒绝邋遢。

10.永远别喝醉。
<br />

</div>

## 嵌入CSS

### 1. 实例代码

``` HTML
<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

<style type="text/css">
    .indent-background {
        text-indent:2em;
        background: red;
    }
</style>

<div class="indent-background" style="margin:10px">
生活赋予我们的一种巨大的和无限高贵的礼品，这就是青春：充满着力量，充满着期待、志愿，充满着求知和斗争的志向，充满着希望、信心的青春。
</div>

<div align="center" style="padding:10px">
<b><i>保尔·柯察金（Павел Корчагин, 英文：Pavel Korchagin）</i></b></div>

</div>
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

<style type="text/css">
    .indent-background {
        text-indent:2em;
        background: red;
    }
</style>

<div class="indent-background" style="margin:10px">
生活赋予我们的一种巨大的和无限高贵的礼品，这就是青春：充满着力量，充满着期待、志愿，充满着求知和斗争的志向，充满着希望、信心的青春。
</div>

<div align="center" style="padding:10px">
<b><i>保尔·柯察金（Павел Корчагин, 英文：Pavel Korchagin）</i></b></div>

</div>

<br /><br /><br />

------
