# Markdown语法和实例

本章节包括Markdown基础语法，以及GitHub风格Markdown（GitHub Flavored Markdown，简称为`GFM`）。

GitHub风格Markdown（GitHub Flavored Markdown，简称为`GFM`）是GitHub官方为了在GitHub.com上更容易地进行文本内容格式化展示，而提供的一组Markdown语法扩展及特性支持。

> 💥 目前，GitHub风格Markdown（GitHub Flavored Markdown，简称`GFM`）已经成为Markdown的通用标准，兼容于各种Markdown工具链和各类Markdown展示支持网站。

GFM对于Markdown的语法和特性有些为语法扩展，有些为新增特性。已经成为通用标准，各类Markdown工具链和网站兼容支持很完善，因此合并介绍。

- [标题（Headers）](#标题headers)
- [字体（Emphasis）](#字体emphasis)
- [列表（Lists）](#列表lists)
- [图像（Images）](#图像images)
- [链接（Links）](#链接links)
- [锚点（Anchors）](#锚点anchors)
- [引用（Blockquotes）](#引用blockquotes)
- [代码（Code）](#代码code)

------

## 标题（Headers）

Markdown中共有6级标题，从 `#`、`##`、依次类推到 `######`。

### 1. 实例代码

``` Markdown
# 一级标题
## 二级级标题
### 三级标题
#### 四级级标题
##### 五级标题
###### 六级标题
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

# 一级标题

## 二级级标题

### 三级标题

#### 四级级标题

##### 五级标题

###### 六级标题

</div>

## 字体（Emphasis）

用 `*` 或者 `_` 包裹文本进行 _斜体_ 格式化，用 `**` 或者 `__` 包裹文本进行 **粗体** 格式化。

`**` 或者 `__` 可以和  `*` 或者 `_` **_组合使用_**。

### 1. 实例代码

``` Markdown
*这行文本是斜体*

_这行文本是斜体_

**这行文本是粗体**

__这行文本是粗体__

_这行文本是 **粗体** + 斜体_
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

*这行文本是斜体*

_这行文本是斜体_

**这行文本是粗体**

__这行文本是粗体__

_这行文本是 **粗体** + 斜体_

</div>

## 列表（Lists）

列表分为`无序列表`和`有序列表`。

### 无序列表

无序列表用`-`定义，**下级列表相对于上级 `缩进空格 >= 2`**

#### 1. 实例代码

``` Markdown
- 第一节
- 第二节
  - 第一条（缩进空格2个）
  - 第二条
```

#### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

- 第一节
- 第二节
  - 第一条（缩进空格2个）
  - 第二条

</div>

### 有序列表

有序列表`数字.`定义，**下级列表相对于上级 `缩进空格 > 2`**

#### 1. 实例代码

``` Markdown
1. 第一节
1. 第二节
1. 第三节
   1. 第一条（缩进空格3个）
   1. 第二条
```

#### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

1. 第一节
1. 第二节
1. 第三节
   1. 第一条（缩进空格3个）
   1. 第二条

</div>

## 图像（Images）

格式：`Format: ![Alt Text](url)`

### 1. 实例代码

``` Markdown
![Demo Image](./theme/demo-image.png)
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

![Demo Image](./theme/demo-image.png)

</div>

## 链接（Links）

Markdown中可对url链接自动识别，但有些Markdown工具不支持（GitHub支持自动识别）。

若需指定url链接文本，格式：`[文本](url)`。

### 1. 实例代码

``` Markdown
[Markdown指南](https://markdown.budshome.com)

https://markdown.budshome.com

markdown.budshome.com
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

[Markdown指南](https://markdown.budshome.com)

[https://markdown.budshome.com](https://markdown.budshome.com)

[markdown.budshome.com](https://markdown.budshome.com)

</div>

## 锚点（Anchors）

格式：`[锚点文本](#锚点链接)`。需要注意如下几点：

- 欲定位的锚点链接必须是标题，即`#`、`###`等定义的6级标题；
- 不管标题大小写，锚点均为小写；
- 可以使用中文做锚点，中文锚点需要省略`（`、`、`等中文标点符号。

### 1. 实例代码

``` Markdown
标题：## 锚点（Anchors）
锚点：[锚点（Anchors）](#锚点anchors)
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

[锚点（Anchors）](#锚点anchors)

</div>

## 引用（Blockquotes）

Markdown中通过`>`实现引用。引用可以多级嵌套：`>>`,`>>>`；也可以和其它Markdown语法嵌套，比如无序列表。

### 1. 实例代码

``` Markdown
> 一级文本引用
>> 二级文本引用

引用中嵌套无序列表

>> * 这是第一项
>> * 这是第二项
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

不同工具和输出呈现效果有差别，如下两种——

**Markdown预览呈现**

![blockquotes](./theme/blockquotes.png)

**输出HTML呈现**

> 一级文本引用
>> 二级文本引用

引用中嵌套无序列表

>> - 这是第一项
>> - 这是第二项

</div>

## 代码（Code）

Markdown中代码格式化可以通过三种方式：

- 行内式：通过一对 ` 包裹单行代码实现；
- 代码块：通过一对 ``` 包裹实现，可以指定编程语言，支持语法高亮；
- 缩进式：通过缩进 `>=` 4空格实现，部分支持语法高亮。

### 1. 实例代码

``` Markdown
行内式代码：`import os, sys`

代码块（无需缩进）：
    ``` Python
    import os, sys

    sys.path

    print(os)
    ```

缩进式：
    if (isAwesome){
      return true
    }
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

行内式代码：`import os, sys`

代码块（无需缩进）：

``` Python
import os, sys

sys.path

print(os)
```

缩进式：

    if (isAwesome){
        return true
    }

</div>

------
