# Markdown 工具链

目前，使用 Markdown 进行书籍或者文章编写的工具很多，且大多开源，基础功能免费。概括来说，分为命令行工具和编辑器两种，下面介绍一些受众较多的工具链。

## 命令行工具

### mdBook

本指南即采用`mdBook`编写，在此强烈推荐。

> 💥 mdBook的使用教程，可访问**同步最新开发版**的[中文用户指南-https://mdbook-guide.rusthub.org](https://mdbook-guide.rusthub.org)。

`mdBook`是一个命令行工具，可以使用`Markdown`文件创建书籍。采用[Rust](http://www.rust-lang.org)语言编写，运行速度非常快。

可以输出`HTML`、`PDF`、`eBook`等格式的电子书，功能强大，使用方便。

`mdBook`提供更低层次API的封装，除了编写书籍、文档外，还可以由Rustdoc生成API文档。

`mdBook`是免费的开源软件，可以在[GitHub上找到源代码](https://github.com/rust-lang-nursery/mdBook)。开发团队非常活跃，响应和维护都很积极，使用问题和Bug可以发布在[GitHub Issue跟踪器](https://github.com/rust-lang-nursery/mdBook/issues)。

### gitBook

gitBook是一个基于Node.js的命令行工具，开发周期长，比较成熟。支持Markdown和AsciiDoc两种语法格式，可以输出HTML、PDF、eBook等格式的电子书。

gitBook是开源软件，可以在[GitHub上找到源代码](https://github.com/GitbookIO/gitbook)。

## 编辑器

Markdown编辑器众多，简单易用。

1. 通过安装插件支持Markdown开发：vsCode、vim、sublime text、JetBrains IDE和Eclipse IDE等。

下表是笔者推荐的、较受欢迎的、通过插件支持Markdown开发的编辑器，仅供参考。

名称  | 插件 | 运行平台 | 是否免费
------ | ------ | ------ | ------
Visual Studio Code | 插件很多，如：</br>Markdownlint、</br>Markdown All in One、</br>Markdown PDF | macOS、Windows、Linux | 免费
Vim | 插件很多，如：</br>vim-markdown、</br>markdown-preview、</br>vim-instant-markdown | macOS、Windows、Linux | 免费
Sublime Text | 插件很多，如：</br>MarkdownEditing、</br>OmniMarkupPreviewer | macOS、Windows、Linux | 免费+收费
JetBrains IDE、</br>Eclipse IDE | 可从IDE市场搜索插件，</br>官方和开发者均有提供 | macOS、Windows、Linux | 免费+收费

2. 专用于支持Markdown开发：typora、macDown、bear、markdownPad、markdownX、Atom、简书、CSDN以及GitBook自家的GitBook Editor等等。

下表是部分较受欢迎的、专用于支持Markdown开发的编辑器，仅供参考。

名称  | 说明 | 运行平台 | 是否免费
------ | ------ | ------ | ------
gitBook Editor | 和gitBook无缝集成的编辑器 | macOS、Windows、Linux | 免费 + 收费
markdownPad | Windows上强大的编辑器 | Windows | 免费 + 收费
bear | 功能齐全的编辑器 | iPhone、iPad、macOS | 免费 + 内购
typora | 所见即所得的编辑器 | macOS、Windows、Linux | 免费
macDown | macOS上强大的编辑器 | macOS | 免费
markdownX | Android上的轻量编辑器 | Android | 免费

<br /><br /><br />

------
