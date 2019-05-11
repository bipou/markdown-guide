window.search = {"doc_urls":["index.html#ray最佳实践指南","index.html#致谢","index.html#授权","preface.html#作者自序","preface.html#ray是什么","preface.html#背景和必要性","preface.html#作者简介","chapter01/index.html#数据分析和机器学习","chapter01/data-analysis.html#数据分析","chapter01/machine-learning.html#机器学习","chapter02/index.html#ray环境部署","chapter02/ray-intro.html#ray的组件和特性","chapter02/ray-tune.html#ray-tune超参数优化框架","chapter02/ray-rllib.html#ray-rllib可自由扩展的增强学习","chapter02/ray-install.html#ray的安装和优化","chapter02/ray-install-pypi.html#从pypi安装ray","chapter02/ray-install-compile.html#ray的源码编译安装","chapter02/ray-install-docker.html#docker中安装ray","chapter02/ray-install-qa.html#安装问题收集","chapter03/index.html#ray入门","chapter04/index.html#actors-dataflow模型扩展","chapter05/index.html#ray和gpus的整合使用","chapter06/index.html#ray-web-ui","chapter07/index.html#ray-tune超参数优化框架","chapter08/index.html#ray-tune高阶","chapter09/index.html#rllib可自由扩展的增强学习","chapter10/index.html#在ray中使用tensorflow","chapter11/index.html#在ray中使用pytorch","chapter12/index.html#ray之上的pandas高效数据处理","chapter13/index.html#ray实例应用","chapter14/index.html#ray的架构设计","chapter15/index.html#ray的集群使用","chapter16/index.html#附录"],"index":{"documentStore":{"docInfo":{"0":{"body":19,"breadcrumbs":1,"title":1},"1":{"body":1,"breadcrumbs":0,"title":0},"10":{"body":0,"breadcrumbs":1,"title":1},"11":{"body":0,"breadcrumbs":2,"title":1},"12":{"body":0,"breadcrumbs":4,"title":2},"13":{"body":0,"breadcrumbs":4,"title":2},"14":{"body":0,"breadcrumbs":2,"title":1},"15":{"body":0,"breadcrumbs":3,"title":1},"16":{"body":0,"breadcrumbs":3,"title":1},"17":{"body":0,"breadcrumbs":3,"title":1},"18":{"body":0,"breadcrumbs":2,"title":0},"19":{"body":0,"breadcrumbs":1,"title":1},"2":{"body":0,"breadcrumbs":0,"title":0},"20":{"body":0,"breadcrumbs":2,"title":2},"21":{"body":0,"breadcrumbs":1,"title":1},"22":{"body":0,"breadcrumbs":3,"title":3},"23":{"body":0,"breadcrumbs":2,"title":2},"24":{"body":0,"breadcrumbs":2,"title":2},"25":{"body":0,"breadcrumbs":1,"title":1},"26":{"body":0,"breadcrumbs":1,"title":1},"27":{"body":0,"breadcrumbs":1,"title":1},"28":{"body":0,"breadcrumbs":1,"title":1},"29":{"body":0,"breadcrumbs":1,"title":1},"3":{"body":0,"breadcrumbs":0,"title":0},"30":{"body":0,"breadcrumbs":1,"title":1},"31":{"body":0,"breadcrumbs":1,"title":1},"32":{"body":0,"breadcrumbs":0,"title":0},"4":{"body":9,"breadcrumbs":1,"title":1},"5":{"body":6,"breadcrumbs":0,"title":0},"6":{"body":3,"breadcrumbs":0,"title":0},"7":{"body":0,"breadcrumbs":0,"title":0},"8":{"body":0,"breadcrumbs":0,"title":0},"9":{"body":0,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"The Hitchhiker’s Guide to Ray 您好，地球人！欢迎来到《Ray最佳实践指南》。 这份人工编写的指南旨在为Ray初学者和专家提供一个关于Ray安装、配置、和日常使用的最佳实践手册。 按当时德国asdfadfaf llhlhl gsdfgdfg 这份指南是 主观的 ，它与Ray官方文档几乎，但不是完全 不同 。您会发现一份优秀的简明列表，包含有强烈推荐的选项。 使用 Python 3 是 高度 优先于 Python 2。如果您发现自己 仍然 在生产环境中使用 Python 2，请考虑升级您的应用程序和基础设施。如果您正在使用 Python 3，恭喜您 —— 您确实有很好的品味。 ——Kenneth Reitz","breadcrumbs":"Ray最佳实践指南","id":"0","title":"Ray最佳实践指南"},"1":{"body":"感谢Ray项目团队的无私奉献。 感谢妻子的支持，以及可爱的女儿对我心情的调节。","breadcrumbs":"致谢","id":"1","title":"致谢"},"10":{"body":"","breadcrumbs":"Ray环境部署","id":"10","title":"Ray环境部署"},"11":{"body":"","breadcrumbs":"Ray环境部署 » Ray的组件和特性","id":"11","title":"Ray的组件和特性"},"12":{"body":"","breadcrumbs":"Ray环境部署 » Ray的组件和特性 » Ray Tune：超参数优化框架","id":"12","title":"Ray Tune：超参数优化框架"},"13":{"body":"","breadcrumbs":"Ray环境部署 » Ray的组件和特性 » Ray RLlib：可自由扩展的增强学习","id":"13","title":"Ray RLlib：可自由扩展的增强学习"},"14":{"body":"","breadcrumbs":"Ray环境部署 » Ray的安装和优化","id":"14","title":"Ray的安装和优化"},"15":{"body":"","breadcrumbs":"Ray环境部署 » Ray的安装和优化 » 从PyPI安装Ray","id":"15","title":"从PyPI安装Ray"},"16":{"body":"","breadcrumbs":"Ray环境部署 » Ray的安装和优化 » Ray的源码编译安装","id":"16","title":"Ray的源码编译安装"},"17":{"body":"","breadcrumbs":"Ray环境部署 » Ray的安装和优化 » Docker中安装Ray","id":"17","title":"Docker中安装Ray"},"18":{"body":"","breadcrumbs":"Ray环境部署 » Ray的安装和优化 » 安装问题收集","id":"18","title":"安装问题收集"},"19":{"body":"","breadcrumbs":"Ray入门","id":"19","title":"Ray入门"},"2":{"body":"欢迎转载、引用。 转载、引用请注明出处。 作者保留本书和本书相关的所有权利。","breadcrumbs":"授权","id":"2","title":"授权"},"20":{"body":"","breadcrumbs":"Actors-DataFlow模型扩展","id":"20","title":"Actors-DataFlow模型扩展"},"21":{"body":"","breadcrumbs":"Ray和GPUs的整合使用","id":"21","title":"Ray和GPUs的整合使用"},"22":{"body":"","breadcrumbs":"Ray Web UI","id":"22","title":"Ray Web UI"},"23":{"body":"","breadcrumbs":"Ray Tune：超参数优化框架","id":"23","title":"Ray Tune：超参数优化框架"},"24":{"body":"","breadcrumbs":"Ray Tune高阶","id":"24","title":"Ray Tune高阶"},"25":{"body":"","breadcrumbs":"RLlib：可自由扩展的增强学习","id":"25","title":"RLlib：可自由扩展的增强学习"},"26":{"body":"","breadcrumbs":"在Ray中使用TensorFlow","id":"26","title":"在Ray中使用TensorFlow"},"27":{"body":"","breadcrumbs":"在Ray中使用PyTorch","id":"27","title":"在Ray中使用PyTorch"},"28":{"body":"","breadcrumbs":"Ray之上的Pandas—高效数据处理","id":"28","title":"Ray之上的Pandas—高效数据处理"},"29":{"body":"","breadcrumbs":"Ray实例应用","id":"29","title":"Ray实例应用"},"3":{"body":"","breadcrumbs":"作者自序","id":"3","title":"作者自序"},"30":{"body":"","breadcrumbs":"Ray的架构设计","id":"30","title":"Ray的架构设计"},"31":{"body":"","breadcrumbs":"Ray的集群使用","id":"31","title":"Ray的集群使用"},"32":{"body":"","breadcrumbs":"附录","id":"32","title":"附录"},"4":{"body":"Ray是为机器学习、深度学习而开发的高可用、高性能的分布式框架。该框架旨在让基于Python的机器学习和深度学习工作负载能够实时执行，并具有类似消息传递接口(MPI)的性能和细粒度。 Ray与其他分布式系统（如Spark）的相比，在深度学习领域具有很大的优势。因为目前的很多流行分布式系统都不是以构建 AI 应用为目标设计的，缺乏人工智能应用的相应支持与 API。而Ray 与 TensorFlow、PyTorch 和 MXNet 等深度学习框架互相兼容，项目应用中，在 Ray 中可以使用一个或多个深度学习框架。 本书中，基于Ray分布式系统：运用Pandas进行数据分析，运用TensorFlow和PyTorch等框架进行深度学习算法方面的实战。 本书中使用Python、Scala，以及Java进行例程的开发，因此读者需要具备Python、Scala、Java中任意一种语言的基础编程技能。","breadcrumbs":"Ray是什么？","id":"4","title":"Ray是什么？"},"5":{"body":"目前比较流行的分布式计算引擎Spark等都不是以构建 AI 应用为目标设计的，缺乏人工智能应用的相应支持与API。 而Ray不同，Ray以构建AI应用为设计目标。同时Ray 与 TensorFlow、PyTorch 和 MXNet等深度学习框架互相兼容，项目应用中，在Ray中可以使用一个或多个深度学习框架。","breadcrumbs":"背景和必要性","id":"5","title":"背景和必要性"},"6":{"body":"张忠宇，现居成都。电子邮箱：linshi@budshome.com；微信：cd-zzy；QQ：9809920。 17年以上政府、教育、电信、交通等行业大型信息化项目架构分析、开发管理经验。现主要从事大数据项目和机器学习项目的架构分析、开发管理、教学指导，以及技术顾问工作。","breadcrumbs":"作者简介","id":"6","title":"作者简介"},"7":{"body":"","breadcrumbs":"数据分析和机器学习","id":"7","title":"数据分析和机器学习"},"8":{"body":"","breadcrumbs":"数据分析和机器学习 » 数据分析","id":"8","title":"数据分析"},"9":{"body":"","breadcrumbs":"数据分析和机器学习 » 机器学习","id":"9","title":"机器学习"}},"length":33,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"7":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"2":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"20":{"tf":1.0}}}}}},"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}},"。":{"df":0,"docs":{},"而":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"s":{"d":{"df":0,"docs":{},"f":{"a":{"d":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"20":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"中":{"df":0,"docs":{},"安":{"df":0,"docs":{},"装":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"’":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"@":{"b":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"；":{"df":0,"docs":{},"微":{"df":0,"docs":{},"信":{"df":0,"docs":{},"：":{"c":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"x":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"等":{"df":0,"docs":{},"深":{"df":0,"docs":{},"度":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"框":{"df":0,"docs":{},"架":{"df":0,"docs":{},"互":{"df":0,"docs":{},"相":{"df":0,"docs":{},"兼":{"df":0,"docs":{},"容":{"df":0,"docs":{},"，":{"df":0,"docs":{},"项":{"df":0,"docs":{},"目":{"df":0,"docs":{},"应":{"df":0,"docs":{},"用":{"df":0,"docs":{},"中":{"df":0,"docs":{},"，":{"df":0,"docs":{},"在":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"安":{"df":0,"docs":{},"装":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.0}},"、":{"df":0,"docs":{},"s":{"c":{"a":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"，":{"df":0,"docs":{},"以":{"df":0,"docs":{},"及":{"df":0,"docs":{},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"例":{"df":0,"docs":{},"程":{"df":0,"docs":{},"的":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"，":{"df":0,"docs":{},"因":{"df":0,"docs":{},"此":{"df":0,"docs":{},"读":{"df":0,"docs":{},"者":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"具":{"df":0,"docs":{},"备":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"c":{"a":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":16,"docs":{"0":{"tf":2.0},"1":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"16":{"tf":1.0},"19":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0},"29":{"tf":1.0},"30":{"tf":1.0},"31":{"tf":1.0},"4":{"tf":1.4142135623730951}},"不":{"df":0,"docs":{},"同":{"df":0,"docs":{},"，":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"以":{"df":0,"docs":{},"构":{"df":0,"docs":{},"建":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"应":{"df":0,"docs":{},"用":{"df":0,"docs":{},"为":{"df":0,"docs":{},"设":{"df":0,"docs":{},"计":{"df":0,"docs":{},"目":{"df":0,"docs":{},"标":{"df":0,"docs":{},"。":{"df":0,"docs":{},"同":{"df":0,"docs":{},"时":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"与":{"df":0,"docs":{},"其":{"df":0,"docs":{},"他":{"df":0,"docs":{},"分":{"df":0,"docs":{},"布":{"df":0,"docs":{},"式":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"（":{"df":0,"docs":{},"如":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}},"中":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"27":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"26":{"tf":1.0}}}}}}}}}}}}}}},"之":{"df":0,"docs":{},"上":{"df":0,"docs":{},"的":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":1,"docs":{"28":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"分":{"df":0,"docs":{},"布":{"df":0,"docs":{},"式":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"：":{"df":0,"docs":{},"运":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"数":{"df":0,"docs":{},"据":{"df":0,"docs":{},"分":{"df":0,"docs":{},"析":{"df":0,"docs":{},"，":{"df":0,"docs":{},"运":{"df":0,"docs":{},"用":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"和":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"初":{"df":0,"docs":{},"学":{"df":0,"docs":{},"者":{"df":0,"docs":{},"和":{"df":0,"docs":{},"专":{"df":0,"docs":{},"家":{"df":0,"docs":{},"提":{"df":0,"docs":{},"供":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"关":{"df":0,"docs":{},"于":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}},"和":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"21":{"tf":1.0}}}}}},"是":{"df":0,"docs":{},"为":{"df":0,"docs":{},"机":{"df":0,"docs":{},"器":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"、":{"df":0,"docs":{},"深":{"df":0,"docs":{},"度":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"而":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"的":{"df":0,"docs":{},"高":{"df":0,"docs":{},"可":{"df":0,"docs":{},"用":{"df":0,"docs":{},"、":{"df":0,"docs":{},"高":{"df":0,"docs":{},"性":{"df":0,"docs":{},"能":{"df":0,"docs":{},"的":{"df":0,"docs":{},"分":{"df":0,"docs":{},"布":{"df":0,"docs":{},"式":{"df":0,"docs":{},"框":{"df":0,"docs":{},"架":{"df":0,"docs":{},"。":{"df":0,"docs":{},"该":{"df":0,"docs":{},"框":{"df":0,"docs":{},"架":{"df":0,"docs":{},"旨":{"df":0,"docs":{},"在":{"df":0,"docs":{},"让":{"df":0,"docs":{},"基":{"df":0,"docs":{},"于":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"的":{"df":0,"docs":{},"机":{"df":0,"docs":{},"器":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"和":{"df":0,"docs":{},"深":{"df":0,"docs":{},"度":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"工":{"df":0,"docs":{},"作":{"df":0,"docs":{},"负":{"df":0,"docs":{},"载":{"df":0,"docs":{},"能":{"df":0,"docs":{},"够":{"df":0,"docs":{},"实":{"df":0,"docs":{},"时":{"df":0,"docs":{},"执":{"df":0,"docs":{},"行":{"df":0,"docs":{},"，":{"df":0,"docs":{},"并":{"df":0,"docs":{},"具":{"df":0,"docs":{},"有":{"df":0,"docs":{},"类":{"df":0,"docs":{},"似":{"df":0,"docs":{},"消":{"df":0,"docs":{},"息":{"df":0,"docs":{},"传":{"df":0,"docs":{},"递":{"df":0,"docs":{},"接":{"df":0,"docs":{},"口":{"(":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":2,"docs":{"13":{"tf":1.0},"25":{"tf":1.0}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"、":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":3,"docs":{"12":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"i":{"df":1,"docs":{"22":{"tf":1.0}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"22":{"tf":1.0}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"z":{"df":0,"docs":{},"y":{"df":0,"docs":{},"；":{"df":0,"docs":{},"q":{"df":0,"docs":{},"q":{"df":0,"docs":{},"：":{"9":{"8":{"0":{"9":{"9":{"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"breadcrumbs":{"root":{"1":{"7":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"2":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"3":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"20":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"i":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}},"。":{"df":0,"docs":{},"而":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"s":{"d":{"df":0,"docs":{},"f":{"a":{"d":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"f":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"20":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"中":{"df":0,"docs":{},"安":{"df":0,"docs":{},"装":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"17":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"s":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"d":{"df":0,"docs":{},"f":{"df":0,"docs":{},"g":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"i":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"c":{"df":0,"docs":{},"h":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"’":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}},"df":0,"docs":{}}}},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"@":{"b":{"df":0,"docs":{},"u":{"d":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"；":{"df":0,"docs":{},"微":{"df":0,"docs":{},"信":{"df":0,"docs":{},"：":{"c":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":0,"docs":{},"h":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"m":{"df":0,"docs":{},"x":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}},"等":{"df":0,"docs":{},"深":{"df":0,"docs":{},"度":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"框":{"df":0,"docs":{},"架":{"df":0,"docs":{},"互":{"df":0,"docs":{},"相":{"df":0,"docs":{},"兼":{"df":0,"docs":{},"容":{"df":0,"docs":{},"，":{"df":0,"docs":{},"项":{"df":0,"docs":{},"目":{"df":0,"docs":{},"应":{"df":0,"docs":{},"用":{"df":0,"docs":{},"中":{"df":0,"docs":{},"，":{"df":0,"docs":{},"在":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"安":{"df":0,"docs":{},"装":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"15":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":2.0}},"、":{"df":0,"docs":{},"s":{"c":{"a":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"，":{"df":0,"docs":{},"以":{"df":0,"docs":{},"及":{"df":0,"docs":{},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"例":{"df":0,"docs":{},"程":{"df":0,"docs":{},"的":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"，":{"df":0,"docs":{},"因":{"df":0,"docs":{},"此":{"df":0,"docs":{},"读":{"df":0,"docs":{},"者":{"df":0,"docs":{},"需":{"df":0,"docs":{},"要":{"df":0,"docs":{},"具":{"df":0,"docs":{},"备":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"、":{"df":0,"docs":{},"s":{"c":{"a":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"、":{"df":0,"docs":{},"j":{"a":{"df":0,"docs":{},"v":{"a":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":19,"docs":{"0":{"tf":2.23606797749979},"1":{"tf":1.0},"10":{"tf":1.4142135623730951},"11":{"tf":1.7320508075688772},"12":{"tf":2.0},"13":{"tf":2.0},"14":{"tf":1.7320508075688772},"15":{"tf":1.4142135623730951},"16":{"tf":2.0},"17":{"tf":1.4142135623730951},"18":{"tf":1.4142135623730951},"19":{"tf":1.4142135623730951},"22":{"tf":1.4142135623730951},"23":{"tf":1.4142135623730951},"24":{"tf":1.4142135623730951},"29":{"tf":1.4142135623730951},"30":{"tf":1.4142135623730951},"31":{"tf":1.4142135623730951},"4":{"tf":1.7320508075688772}},"不":{"df":0,"docs":{},"同":{"df":0,"docs":{},"，":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"以":{"df":0,"docs":{},"构":{"df":0,"docs":{},"建":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"应":{"df":0,"docs":{},"用":{"df":0,"docs":{},"为":{"df":0,"docs":{},"设":{"df":0,"docs":{},"计":{"df":0,"docs":{},"目":{"df":0,"docs":{},"标":{"df":0,"docs":{},"。":{"df":0,"docs":{},"同":{"df":0,"docs":{},"时":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}},"与":{"df":0,"docs":{},"其":{"df":0,"docs":{},"他":{"df":0,"docs":{},"分":{"df":0,"docs":{},"布":{"df":0,"docs":{},"式":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"（":{"df":0,"docs":{},"如":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}}}}}}},"中":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"27":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"26":{"tf":1.4142135623730951}}}}}}}}}}}}}}},"之":{"df":0,"docs":{},"上":{"df":0,"docs":{},"的":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":1,"docs":{"28":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"分":{"df":0,"docs":{},"布":{"df":0,"docs":{},"式":{"df":0,"docs":{},"系":{"df":0,"docs":{},"统":{"df":0,"docs":{},"：":{"df":0,"docs":{},"运":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"进":{"df":0,"docs":{},"行":{"df":0,"docs":{},"数":{"df":0,"docs":{},"据":{"df":0,"docs":{},"分":{"df":0,"docs":{},"析":{"df":0,"docs":{},"，":{"df":0,"docs":{},"运":{"df":0,"docs":{},"用":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"和":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}}}}}},"初":{"df":0,"docs":{},"学":{"df":0,"docs":{},"者":{"df":0,"docs":{},"和":{"df":0,"docs":{},"专":{"df":0,"docs":{},"家":{"df":0,"docs":{},"提":{"df":0,"docs":{},"供":{"df":0,"docs":{},"一":{"df":0,"docs":{},"个":{"df":0,"docs":{},"关":{"df":0,"docs":{},"于":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}},"和":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"21":{"tf":1.4142135623730951}}}}}},"是":{"df":0,"docs":{},"为":{"df":0,"docs":{},"机":{"df":0,"docs":{},"器":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"、":{"df":0,"docs":{},"深":{"df":0,"docs":{},"度":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"而":{"df":0,"docs":{},"开":{"df":0,"docs":{},"发":{"df":0,"docs":{},"的":{"df":0,"docs":{},"高":{"df":0,"docs":{},"可":{"df":0,"docs":{},"用":{"df":0,"docs":{},"、":{"df":0,"docs":{},"高":{"df":0,"docs":{},"性":{"df":0,"docs":{},"能":{"df":0,"docs":{},"的":{"df":0,"docs":{},"分":{"df":0,"docs":{},"布":{"df":0,"docs":{},"式":{"df":0,"docs":{},"框":{"df":0,"docs":{},"架":{"df":0,"docs":{},"。":{"df":0,"docs":{},"该":{"df":0,"docs":{},"框":{"df":0,"docs":{},"架":{"df":0,"docs":{},"旨":{"df":0,"docs":{},"在":{"df":0,"docs":{},"让":{"df":0,"docs":{},"基":{"df":0,"docs":{},"于":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"的":{"df":0,"docs":{},"机":{"df":0,"docs":{},"器":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"和":{"df":0,"docs":{},"深":{"df":0,"docs":{},"度":{"df":0,"docs":{},"学":{"df":0,"docs":{},"习":{"df":0,"docs":{},"工":{"df":0,"docs":{},"作":{"df":0,"docs":{},"负":{"df":0,"docs":{},"载":{"df":0,"docs":{},"能":{"df":0,"docs":{},"够":{"df":0,"docs":{},"实":{"df":0,"docs":{},"时":{"df":0,"docs":{},"执":{"df":0,"docs":{},"行":{"df":0,"docs":{},"，":{"df":0,"docs":{},"并":{"df":0,"docs":{},"具":{"df":0,"docs":{},"有":{"df":0,"docs":{},"类":{"df":0,"docs":{},"似":{"df":0,"docs":{},"消":{"df":0,"docs":{},"息":{"df":0,"docs":{},"传":{"df":0,"docs":{},"递":{"df":0,"docs":{},"接":{"df":0,"docs":{},"口":{"(":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"df":0,"docs":{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"z":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":2,"docs":{"13":{"tf":1.4142135623730951},"25":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":0,"docs":{},"、":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}}}}}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":3,"docs":{"12":{"tf":1.4142135623730951},"23":{"tf":1.4142135623730951},"24":{"tf":1.4142135623730951}}}}}},"u":{"df":0,"docs":{},"i":{"df":1,"docs":{"22":{"tf":1.4142135623730951}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"22":{"tf":1.4142135623730951}}},"df":0,"docs":{}}},"z":{"df":0,"docs":{},"z":{"df":0,"docs":{},"y":{"df":0,"docs":{},"；":{"df":0,"docs":{},"q":{"df":0,"docs":{},"q":{"df":0,"docs":{},"：":{"9":{"8":{"0":{"9":{"9":{"2":{"0":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}}},"title":{"root":{"a":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"20":{"tf":1.0}}}}}},"df":0,"docs":{}},"d":{"a":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"20":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"o":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"中":{"df":0,"docs":{},"安":{"df":0,"docs":{},"装":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"17":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"安":{"df":0,"docs":{},"装":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"15":{"tf":1.0}}}},"df":0,"docs":{}}}}}}}},"r":{"a":{"df":0,"docs":{},"y":{"df":15,"docs":{"0":{"tf":1.0},"10":{"tf":1.0},"11":{"tf":1.0},"12":{"tf":1.0},"13":{"tf":1.0},"14":{"tf":1.0},"16":{"tf":1.0},"19":{"tf":1.0},"22":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0},"29":{"tf":1.0},"30":{"tf":1.0},"31":{"tf":1.0},"4":{"tf":1.0}},"中":{"df":0,"docs":{},"使":{"df":0,"docs":{},"用":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"27":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"f":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"26":{"tf":1.0}}}}}}}}}}}}}}},"之":{"df":0,"docs":{},"上":{"df":0,"docs":{},"的":{"df":0,"docs":{},"p":{"a":{"df":0,"docs":{},"n":{"d":{"a":{"df":1,"docs":{"28":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"和":{"df":0,"docs":{},"g":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":1,"docs":{"21":{"tf":1.0}}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"b":{"df":2,"docs":{"13":{"tf":1.0},"25":{"tf":1.0}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":3,"docs":{"12":{"tf":1.0},"23":{"tf":1.0},"24":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"i":{"df":1,"docs":{"22":{"tf":1.0}}}},"w":{"df":0,"docs":{},"e":{"b":{"df":1,"docs":{"22":{"tf":1.0}}},"df":0,"docs":{}}}}}},"pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":20,"teaser_word_count":30},"search_options":{"bool":"AND","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":2},"title":{"boost":2}}}};