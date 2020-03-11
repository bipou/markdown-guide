# Markdown数学公式

Markdown中，支持完整的`LaTeX`数学公式语法。

> *注：* 此章节包含`LaTeX`数学公式语法，须通过工具（如 [mdBook](https://mdbook.budshome.com)、gitBook），或者已嵌`LaTeX`公式的编辑器，方可预览或构建（[阅读已构建电子书](https://markdown.budshome.com/formula.html)）。

- [公式样式及注释](#公式样式及注释)
- [上标和下标](#上标和下标)
- [上划线与下划线](#上划线与下划线)
- [分数](#分数)
- [方程组](#方程组)
- [大括号](#大括号)
- [开根号](#开根号)
- [希腊字母](#希腊字母)
- [运算符](#运算符)
- [微积分符号](#微积分符号)
- [逻辑符号](#逻辑符号)
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
上标：$$ x^2 $$
下标：$$ Y_1 $$
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

## 大括号

- 左大括号（`\left`）、右大括号（`\right`）
- 格式：`\left(表达式\right)`

### 1. 实例代码

``` Markdown
$$ \left(\frac{2x+3}{3y-1}\right) $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ \left(\frac{2x+3}{3y-1}\right) $$

</div>

## 开根号

格式：`\sqrt[n]{x}`，其中`n`表示开根次数，`x`表示被开方项。

### 1. 实例代码

``` Markdown
$$ \sqrt[5]{6} $$
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

$$ \sqrt[5]{6} $$

</div>

## 希腊字母

- 大写：首字母大写`\Gamma`转义
- 小写：首字母小写`\gamma`转义

希腊字母 | 表达式 | 希腊字母  | 表达式
------ | ------ | ------ | ------
$$ A $$ | A | $$ \alpha $$ | \alpha
$$ B $$ | B | $$ \beta $$ | \beta
$$ \Gamma $$ | \Gamma | $$ \gamma $$ | \gamma
$$ \Delta $$ | \Delta | $$ \delta $$ | \delta
$$ E $$ | E | $$ \epsilon $$ | \epsilon
$$ Z $$ | Z | $$ \varepsilon $$ | \varepsilon
$$ H $$ | H | $$ \eta $$ | \eta
$$ \Theta $$ | \Theta | $$ \theta $$ | \theta
$$ I $$ | I | $$ \iota $$ | \iota
$$ K $$ | K | $$ \kappa $$ | \kappa
$$ \Lambda $$ | \Lambda | $$ \lambda $$ | \lambda
$$ M $$ | M | $$ \mu $$ | \mu
$$ N $$ | N | $$ \nu $$ | \nu
$$ \Xi $$ | \Xi | $$ \xi $$ | \xi
$$ O $$ | O | $$ \omicron $$ | \omicron
$$ \Pi $$ | \Pi | $$ \pi $$ | \pi
$$ P $$ | P | $$ \rho $$ | \rho
$$ \Sigma $$ | \Sigma | $$ \sigma $$ | \sigma
$$ T $$ | T | $$ \tau $$ | \tau
$$ \Upsilon $$ | \Upsilon | $$ \upsilon $$ | \upsilon
$$ \Phi $$ | \Phi | $$ \phi $$ | \phi
$$ - $$ | - | $$ \varphi $$ | \varphi
$$ X $$ | X | $$ \chi $$ | \chi
$$ \Psi $$ | \Psi | $$ \psi $$ | \psi
$$ \Omega $$ | \Omega | $$ \omega $$ | \omega

## 运算符

运算符 | 表达式（转义） | 运算符  | 表达式（转义）
------ | ------ | ------ | ------
$$ \pm $$ | \pm | $$ \emptyset $$ | \emptyset
$$ \times $$ | \times | $$ \in $$ | \in
$$ \div $$ | \div | $$ \notin $$ | \notin
$$ \mid $$ | \mid | $$ \subset $$ | \subset
$$ \cdot $$ | \cdot | $$ \supset $$ | \supset
$$ \circ $$ | \circ | $$ \subseteq $$ | \subseteq
$$ \ast $$ | \ast | $$ \supseteq $$ | \supseteq
$$ \bigodot $$ | \bigodot | $$ \bigcap $$ | \bigcap
$$ \bigotimes $$ | \bigotimes | $$ \bigcup $$ | \bigcup
$$ \bigoplus $$ | \bigoplus | $$ \bigvee $$ | \bigvee
$$ \leq $$ | \leq | $$ \bigwedge $$ | \bigwedge
$$ \geq $$ | \geq | $$ \neq $$ | \neq
$$ \approx $$ | \approx | $$ \equiv $$ | \equiv

## 微积分符号

运算符 | 表达式（转义） | 运算符  | 表达式（转义）
------ | ------ | ------ | ------
$$ \oint $$ | \oint | $$ \infty $$ | \infty
$$ \nabla $$ | \nabla | $$ - $$ | -

## 逻辑符号

运算符 | 表达式（转义） | 运算符  | 表达式（转义）
------ | ------ | ------ | ------
$$ \because $$ | \because | $$ \therefore $$ | \therefore
$$ \forall $$ | \forall | $$ \exists $$ | \exists

## 特殊符号

含义 | 符号 | 表达式（转义） | 示例
------ | ------ | ------ | ------
求和符号 | $$ \sum $$ | \sum | $$ \sum_{m=0}^\infty $$
积分符号 | $$ \int $$ | \int | $$ \int_0^1 $$
极限符号 | $$ \lim $$ | \lim | $$ \lim_{1 \to 6} \sum_{m=0}^\infty $$
向量符号 | $$ \vec{} $$ | \vec{} | $$ \vec{M} $$

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


