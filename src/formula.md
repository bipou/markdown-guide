# Markdown数学公式

Markdown中，支持完整的`LaTeX`数学公式语法。

- [公式样式](#公式样式)
- [上标和下标](#上标和下标)
- [分数](#分数)

## 公式样式

- 换行：`\\`、`\\\\`
- 空格：`\`
- 居中：用 `$$` 包裹
- 字体样式：加粗（`mathbf`）、斜体（`mathit`）
- 字体大小：`tiny`、`scriptsize`、`small`、`normalsize`、`large`、`Large`、`huge`、`Huge`
- 颜色：`color{颜色值}{数/字/符}`

*注：* 数学公式样式的支持程度，取决于使用的工具（如 [mdBook](https://mdbook.budshome.com)、gitBook 等）或编辑器。

### 1. 实例代码

``` Markdown
$$
x^2 \ y_3 \ z^3_2 \\
\mathit{M_1} + \mathbf{N^3} \\
X^{2m}_{3n} \\
注意和下面默认大小对比—— \\
\tiny X^{2m}_{3n} \\
\scriptsize X^{2m}_{3n} \\
\small X^{2m}_{3n} \\
\normalsize X^{2m}_{3n} （默认大小）  \\
\large X^{2m}_{3n}  \\
\Large X^{2m}_{3n}  \\
\huge X^{2m}_{3n}  \\
\Huge X^{2m}_{3n}  \\
$$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ 
x^2 \ y_3 \ z^3_2 \\\\
\mathit{M_1} + \mathbf{N^3} \\\\
X^{2m}_{3n} \\\\
注意和下面默认大小对比——
$$

$$ \tiny X^{2m}_{3n} $$

$$ \scriptsize X^{2m}_{3n} $$

$$ \small X^{2m}_{3n} $$

$$ \normalsize X^{2m}_{3n} （默认大小） $$

$$ \large X^{2m}_{3n} $$

$$ \Large X^{2m}_{3n} $$

$$ \huge X^{2m}_{3n} $$

$$ \Huge X^{2m}_{3n} $$

</div>

## 上标和下标

- 上标：使用 **`^`** 连接数/字/符和其上标值；
- 下标：使用 **`-`** 连接数/字/符和其下标值；
- 较为复杂的表达式用 `{}` 包含。

### 1. 实例代码

``` Markdown
上标： $$ x^2 $$
下标： $$ Y_1 $$
综合：$$ X^{2m}_{3n} $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$
上标：x^2 \\\\
下标：Y_1 \\\\
综合：X^{2m}_{3n} a^g_h
$$

</div>

## 分数

分数使用 `frac{partI}{partII}` 转义表达。

### 1. 实例代码

``` Markdown
$$ \frac{2x+3}{3y-1} $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ \frac{2x+3}{3y-1} $$

</div>
