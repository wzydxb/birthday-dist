'use strict';

window.onload = function () {
	var KEYMAP = {
		'生日快乐': 8,
		'小容': 9,
		'小容仙女': 13,
		'仙女小容': 16,
		'平安喜乐': 17,
		'健康快乐': 18,
		'身体健康': 20,
		'万事如意': 32,
		'小容小容': 33,
		'生日快乐呀': 34,
		'生快': 35,
		'无忧无虑': 36,
		'mrRong': 37,
		'容仙女': 38,
		'容美女': 39,
		'珠联璧合': 40,
		'生日快乐': 45,
		'朝朝暮暮': 46,
		'财运亨通': 48,
		'万事大吉': 49,
		'万事亨通': 50,
		'美女': 51,
		'步步高升': 52,
		'生日': 53,
		'快乐哈哈': 54,
		'华屋生辉': 55,
		'美仑美奂': 56,
		'弘基永固': 57,
		'金玉满堂': 65,
		'创厦维新': 66,
		'宜室宜家': 67,
		'新居鼎定': 68,
		'堂构增辉': 69,
		'瑞霭华堂': 70,
		'莺迁乔木': 71,
		'美': 72,
		'丽': 73,
		'的': 74,
		'小': 75,
		'容': 76,
		'生': 77,
		'日': 78,
		'快乐': 79,
		'平安': 80,
		'喜乐': 81,
		'出类拔萃': 82,
		'前程万里': 83,
		'生日快乐 ': 84,
		'生日快乐  ': 85,
		'生日快乐   ': 86,
		'生日快乐    ': 87,
		'生日快乐     ': 88,
		'生日快乐      ': 89,
		' 生日快乐': 90,
		'  生日快乐': 112,
		'   生日快乐': 113,
		'    生日快乐': 114,
		'     生日快乐': 115,
		'      生日快乐': 116,
		'				生日快乐': 117,
		'					生日快乐': 118,
		'						生日快乐': 119,
		'							生日快乐': 120,
		'								生日快乐': 121,
		'									生日快乐': 122,
		'										生日快乐': 123,
		'生   日快乐': 124,
		'   生 日快乐': 125,
		'  生  日快乐': 126,
		'生  日 快 乐': 186,
		'生 日 快 乐': 187,
		'生  日 快  乐': 188,
		'生  日 快   乐': 189,
		'生  日 快乐': 190,
		'生  日快乐': 191,
		'生  日  快乐': 219,
		'生  日  快 乐': 220,
		'生 日快乐': 221,
		'生日快 乐': 222
	},
	    key_els = {};

	var rand = function rand() {
		var max = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
		var min = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

		var _int = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

		var gen = min + (max - min) * Math.random();
		return _int ? Math.round(gen) : gen;
	};

	(function init() {
		var a3d = document.querySelector('.a3d'),
		    f = document.createDocumentFragment(),
		    lims = [33, 41, 47, 58, 91, 127, 146],
		    len = lims.length,
		    unit = 360 / (len + 1);

		for (var p in KEYMAP) {
			var rot = document.createElement('div'),
			    key = document.createElement('div');

			key.dataset.name = p.replace('NUM_', '');
			key.dataset.code = KEYMAP[p];
			key.classList.add('key');

			for (var i = 0; i < len; i++) {
				if (KEYMAP[p] < lims[i]) {
					var hue = rand((i + .8) * unit, (i + .2) * unit, 1);
					key.style.color = 'hsl(' + hue + ',100%,65%)';
					break;
				}
			}

			rot.classList.add('rot');

			key_els[p] = key;
			rot.appendChild(key);
			f.appendChild(rot);
		}

		a3d.appendChild(f);
	})();

	addEventListener('keydown', function (e) {
		e.preventDefault();

		for (var p in KEYMAP) {
			if (e.keyCode === KEYMAP[p]) {
				if (!key_els[p].classList.contains('vis')) key_els[p].classList.add('vis');
				return;
			}
		}
	}, false);

	addEventListener('keyup', function (e) {
		e.preventDefault();
	}, false);

	addEventListener('animationend', function (e) {
		var t = e.target;
		if (e.animationName === 'hl') t.classList.remove('vis');
	}, false);
};