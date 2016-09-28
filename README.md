# PP助手高速下载外部接入方案 #

## 页面接入逻辑 ##
> 通过 `Pdlh` 方案，接入方不用考虑内部实现逻辑，只需要简单的一步就可以轻松接入了

1. 用户点击【高速下载】
2. 调用 `Pdlh.downloadFast` 进行高速下载

## 合作方式 ##
PP为第三方提供了多种合作方式方案，都可通过 `Pdlh` 接口传参实现

### a. 商业模式 ###

商业模式通过接口参数 `bs`控制，具体请查看接口文档

- 非商业模式：为了避免骚扰用户，PP对高速下载流程做了限制，一个用户只会下载一次PP助手，无论是否下载成功是否安装成功
- 商业模式：无限制，PP只要判断到用户没安装PP助手客户端，流程就会走到下载PP客户端的流程

### b. 合作模式 ###

合作模式通过接口参数 `mode`控制，具体请查看接口文档

- 默认模式：使用PP助手资源库下载目标App
- 模式1：使用业务方提供的durl下载目标App

## 接入流程 ##
![](https://github.com/ppfe/pdlh/blob/master/imgs/%E6%8E%A5%E5%85%A5%E6%B5%81%E7%A8%8B.png?raw=true)

## 1. 申请接入 ##
业务方接入，向PP接口人申请分配接入所需要的PP渠道 `channel`、统计来源参数 `ch_src`

### PP助手高速下载接入方案接口人： ###

- 推广：@赵小龙
- 产品：@詹圣锋，@彭斯特
- 技术：@材主，@传人，@僚机

## 2. 开始接入 ##

PP为第三方接入提供了方案相关的JS库，直接引用即可

	<script src="https://cdnjs.cloudflare.com/ajax/libs/zepto/1.2.0/zepto.min.js"></script>
    <script src="http://a.img.pp.cn/upload_files/js/pp-dl-highspeed.js"></script>

> 如果页面已有jQuery或者zepto，则不需要再引用 `zepto.min.js`

## 3. 接口文档 ##
引用本JS后，会自动在window对象挂载接口对象 `Pdlh`

### 一、高速下载接口 `Pdlh.downloadFast` ###

	Pdlh.downloadFast(config, callback)

#### 1.1 `config` 为对象类型，可传字段如下： ####

- channel: [必填]PP渠道号标识，用于指定要安装的PP渠道包，由PP提供
- ch_src: [必填]统计来源，由PP提供
- ch: 统计参数
- packageName: 目标APP包名[mode=0或者不传时，packageName必填]
- durl: 目标APP下载地址，即PP客户端进行高速下载的内容 [mode=1时，durl必填]
- bs: 商业模式选择（0:不重复刷量【默认】，1：商业模式，重复刷）
- mode: 合作模式（0：使用PP助手资源库下载目标App【默认】，1：强制使用业务方提供的durl下载目标App，此时durl必填）
- debug: 开发模式，会输出过程日志

#### 1.2 `callback` 为回调函数，返回参数如下： ####

- error: 错误信息（0：成功，非0：失败），`ret.msg`中有结果描述
- ret: {Object}结果详情，`ret.msg`字段描述方法运行结果

#### 举个栗子 ####

	Pdlh.downloadFast({
		channel: 'pp_2',
		ch_src: 'from_demo',
		ch: 'from_demo_ch',
		packageName: 'com.outfit7.talkingtom2free',
		durl: 'http://ucdl.25pp.com/fs04/2016/01/15/7/2_613b8549eaaec403b3ee64142100a861.apk',
		bs: 1,
		mode: 1,
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
