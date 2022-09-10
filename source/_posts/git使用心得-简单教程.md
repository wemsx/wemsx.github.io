---
title: git使用心得+简单教程
tags: 开发
author: Wemsx
abbrlink: e02f1cf2
date: 2021-12-19 13:23:35s
---

突然心血来潮想写写我在平时用git的心得

<!--more-->

其他不废话了。本篇立足于MAC 12.0
## 简单教程

### 开始使用

```
git version 2.30.1 (Apple Git-130)
```
苹果自带git，其余系统貌似需要自己安装。不多赘述。
SSH默认你已经配好了。我也实在不想写这个了。
### 上传文件
在github/gitee/bitbucket/gitlab等平台创建仓库后，先在本地切到对应目录
比如我的minecraft文件在/Library/Application Support/minecraft
则在终端运行
```
cd Library
cd "Application Support"
cd minecraft
```
可以看到引号不是必加的。但对于中间有空格的文件夹，不加就会切到错误的文件夹。
然后如果要上传整个文件夹，那么运行
```
git init
```
进行初始化
然后
```
git add .
```
注意add后面有一个空格和一个句号！！！
接着
```
git commit -m "提交的信息"
```
如果对于文件夹是初次提交，那么
```
git remote add origin 仓库地址
```
最后
```
git push origin master
```
其中master是主分支，你当然可以上传到别的分支

### 可能的故障
如果出现fatal: remote origin already exists
```
git remote rm origin
```
再重新git remote add....

如果出现SSL相关问题，个人认为是人品问题，建议重来或挂代理

### 克隆别人的仓库

直接
```
git clone 仓库位置
```
注意是保存在当前切到的文件夹下

### 非官方的应用
#### hexo
使用hexo-deployer-git
```
npm install hexo-deployer-git --save
```
并按照官方文档修改博客（不是主题的）_config.yml
{% link 官方文档::https://hexo.io/zh-cn/docs/one-command-deployment::https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets@master/logo/256/safari.png %}
之后每次部署均可hexo d解决
#### 各种git
怎么说呢，主要就是个人喜好的问题吧。我在用sublime merge和vsc自带的git,再加上终端基本没什么大问题。



## 使用心得
众所周知，github的访问速度令人难受，再加上网页版上传文件限制多，然后我就走上了git的道路。
n久以前，我为了托管项目源代码曾经有过用git的想法。结果不知道因为什么没找到合适教程，然后就放弃了。
对，很草率。
不久前因为hexo的原因又研究了一下，结果就开始用了。
git给我的第一感受就是方便。绑定了SSH后基本上随便搞。而且基本么有限制。
{% image https://cdn.jsdelivr.net/gh/wemsx/imgcdn1/img/gitbuchonggai.png::alt=终端的一个截图 %}
图为我上传整个整合文件夹的盛况。关键一共才不到3分钟
当然缺点还是有的，那就是网络问题。
怎么说呢，还是挺喜欢的。（写不下去了）
{% psw （对，这就是我不更新的理由） %}
