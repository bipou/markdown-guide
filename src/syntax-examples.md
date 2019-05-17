# Markdown语法和实例

## 一、标题

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

## 二、字体

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

## 三、列表

列表分为`无序列表`和`有序列表`。

### 无序列表

无序列表中，**下级列表相对于上级 `缩进空格 >= 2`**

#### 1. 实例代码

``` Markdown
* 第一节
* 第二节
  * 第一条（缩进空格2个）
  * 第二条
```

#### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

* 第一节
* 第二节
  * 第一条（缩进空格2个）
  * 第二条

</div>

### 有序列表

有序列表中，**下级列表相对于上级 `缩进空格 > 2`**

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

## 四、图像

格式：`Format: ![Alt Text](url)`

### 1. 实例代码

``` Markdown
![Demo Image](./theme/demo-image.png)
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

![Demo Image](./theme/demo-image.png)

</div>

## 四、链接

Markdown中可对url链接自动识别，但有些Markdown工具不支持（GitHub支持自动识别）。

若需指定url链接文本，格式：`[文本](url)`。

### 1. 实例代码

``` Markdown
[精通Markdown](https://markdown.budshome.com)

https://markdown.budshome.com

markdown.budshome.com
```

### 2. 呈现效果

<div style="border:1px solid;margin:0px;padding:0px 0px 0px 15px">

[精通Markdown](https://markdown.budshome.com)

[https://markdown.budshome.com](https://markdown.budshome.com)

[markdown.budshome.com](https://markdown.budshome.com)

</div>