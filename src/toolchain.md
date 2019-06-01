# Markdown工具链

目前，使用Markdown进行书籍或者文章编写的工具很多，且大多开源，基础功能免费。概括来说，分为命令行工具和编辑器两种，下面介绍一些受众较多的工具链。

## 命令行工具

### mdBook

本指南即采用`mdBook`编写，在此强烈推荐。

> 💥 mdBook的使用教程，可访问[最新版中文用户指南](https://mdbook.budshome.com)；也可以访问官方[用户指南](https://rust-lang-nursery.github.io/mdBook)，内容稍有延迟。

`mdBook`是一个命令行工具，可以使用`Markdown`文件创建书籍。采用[Rust](http://www.rust-lang.org)语言编写，运行速度非常快。

可以输出`HTML``PDF``eBook`等格式的电子书，功能强大，使用方便。

`mdBook`提供更低层次API的封装，除了编写书籍、文档外，还可以由Rustdoc生成API文档。

`mdBook`是免费的开源软件，可以在[GitHub上找到源代码](https://github.com/rust-lang-nursery/mdBook)。开发团队非常活跃，响应和维护都很积极，使用问题和Bug可以发布在[GitHub Issue](https://github.com/rust-lang-nursery/mdBook/issues)跟踪器上。

### gitBook

gitBook是一个基于Node.js的命令行工具，开发周期长，比较成熟。支持Markdown和AsciiDoc两种语法格式，可以输出HTMLPDF、eBook等格式的电子书。

gitBook是开源软件，可以在[GitHub上找到源代码](https://github.com/GitbookIO/gitbook)。

## 编辑器

市面上我们可以找到很多 Markdown 编辑器，比如Typora、MacDown、Bear、MarkdownPad、MarkdownX、JetBrains’s IDE（需要安装插件）、Atom、简书、CSDN以及GitBook自家的GitBook Editor等等。

下表是整理的代表性Markdown编辑器，仅供参考。

名称  | 说明 | 运行平台 | 是否免费
------ | ------ | ------ | ------
typora | 所见即所得的编辑器 | macOS、Windows、Linux | 免费
macDown | macOS上强大的编辑器 | macOS | 免费
markdownX | Android上的轻量编辑器 | Android | 免费
gitBook Editor | 和gitBook无缝集成的编辑器 | macOS、Windows、Linux | 免费 + 收费
markdownPad | Windows上强大的编辑器 | Windows | 免费 + 收费
bear | 功能齐全的编辑器 | iPhone、iPad、macOS | 免费 + 内购

------
