# 一，技术选型和效果图
## 1，技术选型
### 1-1，前端
- 小程序原生框架
- css
- JavaScript
### 1-2，管理后台
- 云开发Cms内容管理系统
- web网页
- 百度开发者控制台
### 1-3，数据后台
- 小程序云开发
- 云函数
- 云数据库
- 云存储
- 百度人工智能图片识别
- 百度人工智能语音识别

## 2，效果图预览
### 2-1，首页
![](https://img-blog.csdnimg.cn/8587ea06e9cd4b09aca35fc296463139.png)
### 2-2，新闻
新闻分类

![](https://img-blog.csdnimg.cn/1c6d733b44d84b56b9c03424005d4c50.png)

新闻详情和收藏

![](https://img-blog.csdnimg.cn/d3f5a90f3c1f4741a15308c99b34f680.png)

### 2-3，图片识别
拍照识别

![](https://img-blog.csdnimg.cn/d4ba6303d0f34a2eb28b9431d622c31e.png)

比如我拍一个评估识别结果

![](https://img-blog.csdnimg.cn/735e0bffa2c84283bd38d0691f097b53.png)

查看识别的图片属于什么垃圾

![](https://img-blog.csdnimg.cn/8dcfe9e68cc545eca2b990cc28eae517.png)

### 2-4，语音识别
长按识别，并查看识别结果

![](https://img-blog.csdnimg.cn/5abdee6bbd0b48f38200099091c89f67.png)

查看识别的文字属于什么垃圾

![](https://img-blog.csdnimg.cn/148891aaca1f41809539ff1ae70e3edb.png)

### 2-5，搜索功能
搜索垃圾

![](https://img-blog.csdnimg.cn/319ee8588b0641d88e73b780692e1373.png)

搜索文章

![](https://img-blog.csdnimg.cn/22c1d8ee5f2049b294b7c6c59a8ee529.png)

### 2-6，垃圾分类列表
四种垃圾分类介绍

![](https://img-blog.csdnimg.cn/b0fb2aecb7ae4fd590a1706b77d803eb.png)

每种分类包含那些垃圾

![](https://img-blog.csdnimg.cn/89f4a183f52f49bd8ded1917dcdd980b.png)

### 2-7，答题竞赛
每日答题

![](https://img-blog.csdnimg.cn/bc71bcb4121e446ea1fe6f1abe2ad3b5.png)

积分排名

![](https://img-blog.csdnimg.cn/f6559081d8d945248acb828fba64daf6.png)

错题集

![](https://img-blog.csdnimg.cn/ae2d403f3ebb44148442d40c3698f629.png)

正确率分析

![](https://img-blog.csdnimg.cn/9d58148852d54403a57b23de5d45c6f6.png)

## 3，cms管理后台
我们这里的可视化网页后台使用的时云开发自带的cms(内容管理)
### 3-1，登录页
![](https://img-blog.csdnimg.cn/20210215151020437.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FpdXNoaV8xOTkw,size_16,color_FFFFFF,t_70)
### 3-2，管理后台
![](https://img-blog.csdnimg.cn/c5e66089c036481c8b90167166362f23.png)

我们可以在这里
- 1，添加新闻，删除新闻，修改新闻
- 2，添加垃圾，删除垃圾，修改垃圾
- 3，添加视频，删除视频，修改视频
- 4，添加题库，删除题库，修改题库
- 5，查看文章评论
- 6，添加回收商，删除回收商，修改回收商

## 4，数据库
数据库我们这里用云开发自带的云数据库，下面的集合就是我们的数据表。
![](https://img-blog.csdnimg.cn/a34c676cbb8f475d951b26be4a644c2d.png)

# 二，图片和语音识别准备工作
## 2-1，注册百度开发者账号
我们这里使用了百度的图片识别技术，所以在使用之前我们要现在注册百度开发者账号，官方地址：[https://ai.baidu.com](https://ai.baidu.com)
注册地址：[https://login.bce.baidu.com](https://login.bce.baidu.com)
我们主要用到的是图片识别和语音识别技术
## 2-2，注册完实名
使用百度图片识别，必须要实名认证。

![](https://img-blog.csdnimg.cn/7f5f3c4dba104cfabe27897e3c67a27a.png)

根据自己的情况选择认证方式

选择个人认证

![](https://img-blog.csdnimg.cn/e1a5b88a94a24306adbc5ab47077dca7.png)

## 2-3，创建图片和语音识别应用
使用图片识别和语音识别功能，要创建一个应用 。
我们可以在图像识别下创建应用，记得勾选图片识别和语音技术就行。
![](https://img-blog.csdnimg.cn/904a7e8300e146e2837352c100009b1e.png)

点击完创建应用后，把图像识别和语音技术全部勾选。

![](https://img-blog.csdnimg.cn/f62c980464eb40168f5f23f0a75ebd27.png)

![](https://img-blog.csdnimg.cn/9511d94f7f7944b685db344036ef4235.png)

选个人即可
![](https://img-blog.csdnimg.cn/279dd7bc95fe4e5dabd0fc7f5de06544.png)

就创建好应用了
![](https://img-blog.csdnimg.cn/e2deb0616b214c4e8788bc2573dfac7e.png)

创建好以后，记住api-key和secret-key
![](https://img-blog.csdnimg.cn/c40435fa6b2543d8bb45fd67504c4a90.png)

## 2-4，领取免费资源
### 2-4-1，图像识别资源
要使用图片识别功能，要领取资源，否则没有额度

![](https://img-blog.csdnimg.cn/263172ab21304ad4b944bd0c98f82f9a.png)

点击免费领取资源
![](https://img-blog.csdnimg.cn/c8cbe48a323d44bb9d923da62430a579.png)

![](https://img-blog.csdnimg.cn/df3de46fab0541f58639cfbb83622a45.png)

领取完图片识别的，语音技术的也要领。
### 2-4-2，语音技术资源
![](https://img-blog.csdnimg.cn/547e2d6c15ee46e4a423e39febaafd05.png)

点击免费领取

![](https://img-blog.csdnimg.cn/44c3d01c72cf44448534de70b21a8f1a.png)

![](https://img-blog.csdnimg.cn/1b6cbbaf8ec14283a85c2f0d18be9cb5.png)

领取完大概30分钟内生效。
![](https://img-blog.csdnimg.cn/fb344b85306943c49fce92ea023da05c.png)

## 2-5，添加百度域名到小程序
要调用百度的接口，需要配置域名到小程序，如果不配置的话，就会报如下错误。

![](https://img-blog.csdnimg.cn/48ce09cf377c417b99a3d0361a88a6ce.png)

![](https://img-blog.csdnimg.cn/6ae77c3d12e747d88c680c176a255c19.png)


所以需要到小程序后台，把https://aip.baidubce.com 和https://vop.baidu.com添加到如下位置。
![](https://img-blog.csdnimg.cn/5c4eaf15d20a4d339ebf5885de817383.png)

![](https://img-blog.csdnimg.cn/b8a07b7123bd41459d4699681907110b.png)

点击上面的服务设置，然后做如下设置。

![](https://img-blog.csdnimg.cn/0f65e268ff69488ab858aacc1f1ddf3f.png)

一般设置后10分钟左右生效。

![](https://img-blog.csdnimg.cn/56c4a8b9a9f646af8a72757eaff0b1d0.png)

## 2-6，技术文档
语音技术文档：https://cloud.baidu.com/doc/SPEECH/index.html
图片识别文档：https://cloud.baidu.com/doc/IMAGERECOGNITION/index.html

语音识别用的是短语音识别极速版。

![](https://img-blog.csdnimg.cn/aa879825ecfe434d97b448b3bb867376.png)
