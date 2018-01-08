(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Fjs"] = factory();
	else
		root["Fjs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1)['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _index2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _index = __webpack_require__(3);

	var _index2 = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Component = function Component(options) {
		_classCallCheck(this, Component);

		this.$options = options;
		this._data = options.data;
		var el = this._el = document.querySelector(options.el);
		console.log((0, _index.compile)((0, _index2.getOuterHTML)(el)));
	};

	exports.default = Component;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.compile = compile;

	var _htmlParser = __webpack_require__(4);

	var cache = Object.create(null);

	function compile(html) {
		html = html.trim();
		var hit = cache[html];
		return hit || (cache[html] = (0, _htmlParser.parse)(html));
	}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.parse = parse;
	exports.default = HTMLParser;

	/**
	 * 将HTML字符串转化为json数据
	 * @param  {String} html 
	 * @return {Object}      
	 */

	function parse(html) {
		var root = void 0;
		var currentParent = void 0;
		var stack = [];

		HTMLParser(html, {});

		return html;
	}

	/**
	 * [HTMLParser description]
	 * @param {[type]} html    [description]
	 * @param {[type]} handler [description]
	 */

	function makeMap(values) {
		values = values.split(/,/);
		var map = {};
		values.forEach(function (value) {
			map[value] = 1;
		});
		return function (value) {
			return map[value.toLowerCase()] === 1;
		};
	}

	//正则表达式 用于解析html标签和属性
	var singleAttrIdentifier = /([^\s"'<>\/=]+)/,
	    singleAttrAssign = /=/,
	    singleAttrAssigns = [singleAttrAssign],
	    singleAttrValues = [
	// attr value double quotes
	/"([^"]*)"+/.source,
	// attr value, single quotes
	/'([^']*)'+/.source,
	// attr value, no quotes
	/([^\s"'=<>`]+)/.source],
	    qnameCapture = function () {
		// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
		// but for Vue templates we can enforce a simple charset
		var ncname = '[a-zA-Z_][\\w\\-\\.]*';
		return '((?:' + ncname + '\\:)?' + ncname + ')';
	}(),
	    startTagOpen = new RegExp('^<' + qnameCapture),
	    startTagClose = /^\s*(\/?)>/,
	    endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>'),
	    doctype = /^<!DOCTYPE [^>]+>/i;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
		IS_REGEX_CAPTURING_BROKEN = g === '';
	}

	// 特殊标签元素
	);var special = makeMap('script,style');

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var nonPhrasing = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track');

	//行内元素
	var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,noscript,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,svg,textarea,tt,u,var');
	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source');
	// Empty Elements
	var empty = makeMap('area,base,basefont,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr'
	// Attributes that have their values filled in disabled='disabled'
	);var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');

	function attrForHandler(handler) {
		var pattern = singleAttrIdentifier.source + '(?:\\s*(' + joinSingleAttrAssigns(handler) + ')' + '\\s*(?:' + singleAttrValues.join('|') + '))?';

		return new RegExp('^\\s*' + pattern);
	}

	function joinSingleAttrAssigns(handler) {
		return singleAttrAssigns.map(function (assign) {
			return '(?:' + assign.source + ')';
		}).join('|');
	}

	function HTMLParser(html, handler) {
		var stack = [],
		    lastTag = void 0;
		var attribute = attrForHandler(handler);
		console.log(attribute);
		var last, prevTag, nextTag;

		// while(html) {
		// 	last = html;
		// 	//确保不解析script和style标签
		// 	if(!lastTag || !special(lastTag)) {
		// 		var textEnd = html.indexOf('<');
		// 		if(textEnd === 0) {
		// 			//解析注释代码
		// 			if(/^<!--/.test(html)) {
		// 				var commentEnd = html.indexOf('-->');
		// 				if(commentEnd >= 0) {
		// 					handler.comment(html.subString(4, commentEnd))
		// 				}
		// 				html = html.substring(commentEnd + 3)
		// 	            prevTag = ''
		// 	            continue
		// 			}

		//             // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
		// 	        if (/^<!\[/.test(html)) {
		// 	          var conditionalEnd = html.indexOf(']>')

		// 	          if (conditionalEnd >= 0) {
		// 	            if (handler.comment) {
		// 	              handler.comment(html.substring(2, conditionalEnd + 1), true /* non-standard */)
		// 	            }
		// 	            html = html.substring(conditionalEnd + 2)
		// 	            prevTag = ''
		// 	            continue
		// 	          }
		// 	        }

		// 	        //doctype
		// 	        var doctypeMatch = html.match(doctype)
		// 	        if (doctypeMatch) {
		// 	          if (handler.doctype) {
		// 	            handler.doctype(doctypeMatch[0])
		// 	          }
		// 	          html = html.substring(doctypeMatch[0].length)
		// 	          prevTag = ''
		// 	          continue
		// 	        }

		// 	        // End tag:
		// 	        var endTagMatch = html.match(endTag)
		// 	        if (endTagMatch) {
		// 	          html = html.substring(endTagMatch[0].length)
		// 	          endTagMatch[0].replace(endTag, parseEndTag)
		// 	          prevTag = '/' + endTagMatch[1].toLowerCase()
		// 	          continue
		// 	        }

		// 	        // Start tag:
		// 	        var startTagMatch = parseStartTag(html)
		// 	        if (startTagMatch) {
		// 	          html = startTagMatch.rest
		// 	          handleStartTag(startTagMatch)
		// 	          prevTag = startTagMatch.tagName.toLowerCase()
		// 	          continue
		// 	        }
		// 		}
		// 	}

		// }

		var satrtD = parseStartTag(html);
		console.log(satrtD

		//解析开始标签
		);function parseStartTag(input) {
			var start = input.match(startTagOpen);

			if (start) {
				var match = {
					tagName: start[1],
					attrs: []
				};
			}

			input = input.slice(start[0].length);
			var end = void 0,
			    attr = void 0;

			while (!(end = input.match(startTagClose)) && (attr = input.match(attribute))) {
				input = input.slice(attr[0].length);
				match.attrs.push(attr);
			}

			if (end) {
				match.unarySlash = end[1];
				match.rest = input.slice(end[0].length);
				return match;
			}
		}

		console.log(lastTag
		//处理开始标签
		);function handleStartTag(match) {
			var tagName = match.tagName;
			var unarySlash = match.unarySlash;

			if (handler.html5 && lastTag === 'p' && nonPhrasing(tagName)) {
				parseEndTag('', lastTag);
			}

			if (!handler.html5) {
				while (lastTag && inline(lastTag)) {
					parseEndTag('', lastTag);
				}
			}

			if (closeSelf(tagName) && lastTag === tagName) {
				parseEndTag('', tagName);
			}

			var unary = empty(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

			//获取标签里面的属性，并返回{}
			var attrs = match.attrs.map(function (args) {
				// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
				//火狐下面的bug，没有匹配上返回'',而不是undefined，目前已经修复
				if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
					if (args[3] === '') {
						delete args[3];
					}
					if (args[4] === '') {
						delete args[4];
					}
					if (args[5] === '') {
						delete args[5];
					}
				}

				return {
					name: args[1],
					value: args[3] || args[4] || (args[5] && fillAttrs(args[5]) ? name : '')
				};
			});

			//如果不是unary标签
			if (!unary) {
				stack.push({
					tag: tagName,
					attrs: attrs
				});

				lastTag = tagName;
				unarySlash = '';
			}

			if (handler.start) {
				handler.start(tagName, attrs, unary, unarySlash);
			}
		}

		//解析结束标签
		function parseEndTag(tag, tagName) {
			var pos;

			//查找与之最近的开始标签
			if (tagName) {
				var needle = tagName.toLowerCase();
				for (pos = stack.length - 1; pos >= 0; pos--) {
					if (stack[pos].tag.toLowerCase() === needle) {
						break;
					}
				}
			} else {
				//如果没有传出tagName
				pos = 0;
			}

			if (pos >= 0) {}
		}
	}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(6);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getOuterHTML = getOuterHTML;


	/**
	 * 获取outerHTML，注意SVG元素
	 * @param  {Elemnt} el 
	 * @return {String}    
	 */
	function getOuterHTML(el) {
		if (el.outerHTML) {
			return el.outerHTML;
		} else {
			var container = document.createElement('div');
			container.appendChild(el.cloneNode(true));
			return container.innerHTML;
		}
	}

/***/ })
/******/ ])
});
;