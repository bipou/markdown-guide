# Markdown数学公式

Markdown中，支持完整的`LaTeX`数学公式语法。

> *注：* 此章节包含`LaTeX`数学公式语法，须通过工具（如 [mdBook](https://mdbook.budshome.com)、gitBook），或者已嵌`LaTeX`公式的编辑器，方可预览或构建（[阅读已构建电子书](https://markdown.budshome.com/formula.html)）。

- [公式样式及注释](#公式样式及注释)
- [上标和下标](#上标和下标)
- [上划线与下划线](#上划线与下划线)
- [分数](#分数)
- [方程组](#方程组)
- [运算符](#运算符)
- [特殊符号](#特殊符号)
- [使用`HTML`语法表达数学公式](#使用html语法表达数学公式)

## 公式样式及注释

> 数学公式样式的支持程度，取决于你使用的构建工具（如 [mdBook](https://mdbook.budshome.com)、gitBook）或编辑器。

- 换行：`\\`、`\\\\`
- 空格：`\`、`\,`、`\;`、`\quad`、`\qquad`
- 居中：用 `$$` 包裹
- 字体样式：加粗（`\mathbf`）、斜体（`\mathit`）
- 字体大小：`\tiny`、`\scriptsize`、`\small`、`\normalsize`、`\large`、`\Large`、`\huge`、`\Huge`
- 颜色：`\color{颜色值}{数/字/符}`
- 注释：`\text{内容}`

### 1. 实例代码

``` Markdown
$$
a \ b \\
a \quad b \\
a \qquad b \\
\mathit{a} + \mathbf{b} \\
X^{2m}_{3n} \\
\text{注意和下面默认大小对比——} \\
\tiny X^{2m}_{3n} \\
\scriptsize X^{2m}_{3n} \\
\small X^{2m}_{3n} \\
\normalsize X^{2m}_{3n} \text{（默认大小）} \\
\large X^{2m}_{3n}  \\
\Large X^{2m}_{3n}  \\
\huge X^{2m}_{3n}  \\
\Huge X^{2m}_{3n}  \\
$$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ 
a \ b \\\\
a \quad b \\\\
a \qquad b \\\\
\mathit{a} + \mathbf{b} \\\\
X^{2m}_{3n} \\\\
\text{注意和下面默认大小对比——}
$$

$$ \tiny X^{2m}_{3n} $$

$$ \scriptsize X^{2m}_{3n} $$

$$ \small X^{2m}_{3n} $$

$$ \normalsize X^{2m}_{3n} \text{（默认大小）} $$

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

## 上划线与下划线

- 上划线：`\overline{}`
- 下划线：`\underline{}`

### 1. 实例代码

``` Markdown
上划线：$$ \overline{x^2+a+b} $$
下划线：$$ \underline{Y_1-c-d} $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

上划线：$$ \overline{x^2+a+b} $$

下划线：$$ \underline{Y_1-c-d} $$

</div>

## 分数

分数使用 `\frac{partI}{partII}` 转义表达。

### 1. 实例代码

``` Markdown
$$ \frac{2x+3}{3y-1} $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ \frac{2x+3}{3y-1} $$

</div>

## 方程组

- 方式一：`\begin{array}{c} 表达式一\\表达式二... \end{array}`
- 方式二：`\begin{cases}…\end{cases}`

### 1. 实例代码

``` Markdown
$$ \begin{array}{c} 表达式一\\表达式二... \end{array} $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ \begin{array}{c} a+b \\\\ c+d \end{array} $$

</div>

## 运算符

运算符 | 表达式（转义） | 运算符  | 表达式（转义）
------ | ------ | ------ | ------
$$ \pm $$ | \pm | $$ \times $$ | \times
$$ \div $$ | \div | $$ \cdot $$ | \cdot
$$ \leq $$ | \leq | $$ \geq $$ | \geq
$$ \neq $$ | \neq | $$ \approx $$ | \approx
$$ \equiv $$ | \equiv | $$ \in $$ | \in
$$ \notin $$ | \notin | $$ \subset $$ | \subset
$$ \supset $$ | \supset | $$ \bigcap $$ | \bigcap
$$ \bigcup $$ | \bigcup | - | -

## 特殊符号

含义 | 符号 | 表达式（转义） | 示例
------ | ------ | ------ | ------
求和符号 | $$ \sum $$ | \sum | $$ \sum_{m=0}^\infty $$
积分符号 | $$ \int $$ | \int | $$ \int_0^1 $$
极限符号 | $$ \lim $$ | \lim | $$ \lim_{1 \to 6} \sum_{m=0}^\infty $$
向量符号 | $$ \vec{} $$ | \vec{} | $$ \vec{M} $$
开根号 | $$ \sqrt[]{} $$ | \sqrt[]{} | $$ \sqrt[5]{6} $$

## 使用`HTML`语法表达数学公式

使用`HTML`标签表达上标（`<sup>`）、下标（`<sub>`），以及上划线（`<span>`）。

### 1. 实例代码

``` Markdown
上标：<span>x<sup>2</sup></span>
下标：<span>x<sub>2</sub></span>
上划线：<span style="text-decoration: overline">a + b + c</SPAN>
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

上标：<span>x<sup>2</sup></span>

下标：<span>y<sub>3</sub></span>

上划线：<span style="text-decoration: overline">a + b + c</SPAN>

</div>
