# PP助手高速下载外部接入方案 #

## [豌豆荚高速下载方案点这里](https://github.com/ppfe/pdlh/blob/master/%E8%B1%8C%E8%B1%86%E8%8D%9A%E6%96%B9%E6%A1%88%E5%AF%B9%E5%A4%96%E6%96%87%E6%A1%A3.md) ##

## 页面接入逻辑 ##
> 通过 `Pdlh` Js方案，接入方不用考虑PP内部高速下载的实现逻辑，只需要简单的一步就可以轻松完成接入

1. 用户点击【高速下载】
2. 页面js调用 `Pdlh.downloadFast` 触发高速下载逻辑

- 已安装PP助手时，唤起PP助手进行高速下载和安装
- 未安装PP助手，进行PP助手下载，安装并启动PP即可完成对目标应用的高速下载和安装

## 合作方式定义 ##
PP为第三方提供了以下合作方式定制，均可通过 `Pdlh` 接口的参数配置来启用

### a. 商业模式 ###

商业模式通过接口参数 `bs`控制，具体请查看接口文档

- 非商业（bs=0）：为了避免骚扰用户，PP对高速下载流程做了限制，一个用户只会首次访问时下载一次PP助手，无论是否下载成功是否安装成功都不再触发下载PP助手
- 商业（bs=1）：无限制，检测逻辑只要判断到用户没安装PP助手客户端（包括未激活），都将触发下载PP助手

### b. 合作模式 ###

合作模式通过接口参数 `mode`控制，具体请查看接口文档

- 内部合作（mode=0或空）：从PP助手资源库下载目标App
- 外部合作（mode=1）：使用业务方提供的durl下载目标App

## 接入流程 ##
![](https://github.com/ppfe/pdlh/blob/master/imgs/%E6%8E%A5%E5%85%A5%E6%B5%81%E7%A8%8B.png?raw=true)

## 1. 申请接入 ##
业务方接入，向PP接口人申请分配接入所需要的PP渠道 `channel`、统计来源参数 `ch_src`

## 2. 开始接入 ##

PP为第三方接入提供了方案相关的JS库，直接引用即可

	<script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"></script>
	<script src="http://a.img.pp.cn/upload_files/js/pp-dl-highspeed.js"></script>

> 如果页面已有jQuery或者zepto(^1.2.0)，则不需要再引用 `zepto.min.js`，注意zepto要1.2.0以上，不然会不支持android 2.3.x以下版本

## 3. 接口文档 ##
引用本JS后，会自动在window对象挂载接口对象 `Pdlh`

### 一、高速下载接口 `Pdlh.downloadFast` ###

	Pdlh.downloadFast(config, callback)

#### 1.1 `config` 为对象类型，可传字段如下： ####

- channel: [必填]渠道号标识，用于指定要安装的PP渠道包，由PP提供
- ch_src: [必填]来源统计标识，由PP提供
- ch: 区块统计标识，可由接入方指定，默认为default
- packageName: 目标APP包名，通过对目标应用解包得到 [mode=0或者不传时，packageName或者appId必填一个（packageName优先）]
- appId: 目标APP ID，应用在PP的惟一标识，[mode=0或者不传时，packageName或者appId必填一个]
- durl: 目标APP地址，即PP客户端进行高速下载的内容 [mode=1时，durl必填]
- bs: 商业模式（详见‘合作方式定义’）
- mode: 合作模式（详见‘合作方式定义’）
- debug: 调试模式，会输出过程日志

#### 1.2 `callback` 为回调函数，返回参数如下： ####

- error: 错误信息（0：成功，非0：失败），`ret.msg`中有结果描述
- ret: {Object}结果详情，`ret.msg`字段描述方法运行结果

#### 举个栗子 ####

	Pdlh.downloadFast({
		channel: 'pp_2', // PP渠道包标识
		ch_src: 'from_demo', // 来源统计标识
		ch: 'from_demo_ch', // 区块统计标识
		packageName: 'com.outfit7.talkingtom2free', // 目标App包名
		durl: 'http://ucdl.25pp.com/fs04/2016/01/15/7/2_613b8549eaaec403b3ee64142100a861.apk', // 目标App地址
		bs: 1, // 商业模式
		mode: 1, // 合作模式
		debug: false
	}, function(error, ret) {
		if (!error) {
			console.warn('Pdlh.downloadFast ok.');
		} else {
			console.warn('Pdlh.downloadFast failed.');
		}
		console.log(ret.msg);
	});


## 完整例子 ##
DEMO请移步：【[DEMO完整例子](https://github.com/ppfe/pdlh/tree/master/demo)】

## 附：方案内部实现逻辑 ##
![](https://github.com/ppfe/pdlh/blob/master/imgs/%E6%96%B9%E6%A1%88%E5%86%85%E9%83%A8%E9%80%BB%E8%BE%91.png?raw=true)

## FAQ ##

### 1、为什么手机明明安装了PP助手，还是调不起PP助手进行高速下载？ ###
PP助手调起协议需要PP助手进程在活动状态下才可以进行，所以调起不成功，代表的是PP助手没安装 或者 PP助手已安装但没启动。
