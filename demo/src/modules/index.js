/**
 * Created by Chenjr on 2016/4/7.
 */

require('./index.less');

$('#btnTest').click(function() {
	var channel = $('#inputChannel').val(),
		ch_src = $('#inputChSrc').val(),
		packageName = $('#inputPackageName').val(),
		durl = $('#inputDurl').val(),
		bs = parseInt($('#inputBs').val()),
		mode = parseInt($('#inputMode').val()),
		debug = !!parseInt($('#debug').val());

	if(!channel) {
		alert('channel不能为空');
		return;
	}
	if(!ch_src) {
		alert('ch_src不能为空');
		return;
	}
	if(!packageName && !durl) {
		alert('packageName 和 durl 必填一个！');
		return;
	}

	// Pdlh由以下JS提供，具体问题可以找PP助手技术同学咨询
	// http://a.img.pp.cn/upload_files/js/pp-dl-highspeed.js
	Pdlh.downloadFast({
		channel: channel,
		ch_src: ch_src,
		ch: 'dl-highspeed-demo-ch',
		packageName: packageName,
		durl: durl,
		bs: bs,
		mode: mode,
		debug: debug
	}, function(error, ret) {
		if (!error) {
			console.warn('Pdlh.downloadFast ok.');
		} else {
			console.warn('Pdlh.downloadFast failed.');
		}

		alert(ret.msg);
	});
});
