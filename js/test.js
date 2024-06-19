(function (l, r) {
  if (l.getElementById("livereloadscript")) return;
  r = l.createElement("script");
  r.async = 1;
  r.src =
    "//" +
    (window.location.host || "localhost").split(":")[0] +
    ":35729/livereload.js?snipver=1";
  r.id = "livereloadscript";
  l.getElementsByTagName("head")[0].appendChild(r);
})(window.document);
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(exports)
    : typeof define === "function" && define.amd
    ? define(["exports"], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory((global.LuckyCanvas = {})));
})(this, function (exports) {
  "use strict";

  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function (d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d, b) {
          d.__proto__ = b;
        }) ||
      function (d, b) {
        for (var p in b)
          if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  }

  var __assign = function () {
    __assign =
      Object.assign ||
      function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  }

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  }

  /**
   * �ж��Ƿ�������������
   * @param { any } param ��Ҫ�жϵı���
   * @param { ...string } types ����������
   * @return { boolean } ���������Ƿ���ȷ
   */
  var isExpectType = function (param) {
    var types = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      types[_i - 1] = arguments[_i];
    }
    return types.some(function (type) {
      return (
        Object.prototype.toString.call(param).slice(8, -1).toLowerCase() ===
        type
      );
    });
  };
  /**
   * �Ƴ�\n
   * @param { string } str ��Ҫ�������ַ���
   * @return { string } �����µ��ַ���
   */
  var removeEnter = function (str) {
    return [].filter
      .call(str, function (s) {
        return s !== "\n";
      })
      .join("");
  };
  /**
   * ����У����
   * @param data ��ҪУ��Ĳ���
   * @param params У�����
   * @param msg ������Ϣ
   * @return { boolean } У��ɹ�����true, ��֮false
   */
  // export const paramsValidator = (data: any, params = {}, msg = '') => {
  //   if (isExpectType(data, 'object')) data = [data]
  //   return data.every((item, index) => {
  //     for (let key in params) {
  //       if (params[key] === 1 && !item.hasOwnProperty(key)) {
  //         return !!console.error(`���� ${msg}[${index}] ȱ�� ${key} ����`)
  //       }
  //       else if (isExpectType(params[key], 'object') && item[key]) {
  //         if (!paramsValidator(
  //           item[key], params[key], msg ? `${msg}[${index}].${key}` : key
  //         )) return false
  //       }
  //     }
  //     return true
  //   })
  // }
  /**
   * ͨ��padding����
   * @return { object } block �߿���Ϣ
   */
  var computePadding = function (block) {
    var padding = block.padding
        .replace(/px/g, "")
        .split(" ")
        .map(function (n) {
          return ~~n;
        }) || [0],
      paddingTop = 0,
      paddingBottom = 0,
      paddingLeft = 0,
      paddingRight = 0;
    switch (padding.length) {
      case 1:
        paddingTop = paddingBottom = paddingLeft = paddingRight = padding[0];
        break;
      case 2:
        paddingTop = paddingBottom = padding[0];
        paddingLeft = paddingRight = padding[1];
        break;
      case 3:
        paddingTop = padding[0];
        paddingLeft = paddingRight = padding[1];
        paddingBottom = padding[2];
        break;
      default:
        paddingTop = padding[0];
        paddingBottom = padding[1];
        paddingLeft = padding[2];
        paddingRight = padding[3];
    }
    // ����Ƿ񵥶�����ֵ, ���Ҳ���0
    var res = {
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      paddingRight: paddingRight,
    };
    for (var key in res) {
      // �Ƿ����������, ���������ֻ��ַ���
      res[key] =
        block.hasOwnProperty(key) &&
        isExpectType(block[key], "string", "number")
          ? ~~String(block[key]).replace(/px/g, "")
          : res[key];
    }
    return [paddingTop, paddingBottom, paddingLeft, paddingRight];
  };

  var name = "lucky-canvas";
  var version = "1.2.2";

  var Lucky = /** @class */ (function () {
    /**
     * ����������
     * @param config
     */
    function Lucky(config) {
      this.global = {};
      this.htmlFontSize = 16;
      this.subs = {};
      this.rAF = function () {};
      this.setTimeout = function () {};
      this.setInterval = function () {};
      this.clearInterval = function () {};
      // �ȳ�ʼ�� fontSize �Է�������� rem
      this.setHTMLFontSize();
      // ���ݴ��뿪ʼ: Ϊ�˴��� v1.0.6 �汾�����ﴫ����һ�� dom
      if (typeof config === "string") config = { el: config };
      else if (config.nodeType === 1) config = { el: "", divElement: config };
      config = config;
      // ���ݴ������
      if (!config.flag) config.flag = "WEB";
      if (config.flag.indexOf("UNI-") === 0) {
        this.global = uni;
      } else if (config.flag === "MINI-WX") {
        this.global = wx;
      }
      if (config.el) config.divElement = document.querySelector(config.el);
      var boxWidth = 0,
        boxHeight = 0;
      if (config.divElement) {
        boxWidth = config.divElement.offsetWidth;
        boxHeight = config.divElement.offsetHeight;
        config.canvasElement = document.createElement("canvas");
        config.divElement.appendChild(config.canvasElement);
      }
      // �������ȴ�config��ȡ, ��δ�style����ȡ
      config.width = this.getLength(config.width) || boxWidth;
      config.height = this.getLength(config.height) || boxHeight;
      // ���°ѿ��߸�������
      if (config.divElement) {
        config.divElement.style.width = config.width + "px";
        config.divElement.style.height = config.height + "px";
      }
      if (config.canvasElement) {
        // ���Ӱ汾��Ϣ����ǩ��, ���㶨λ�汾����
        config.canvasElement.setAttribute("package", name + "@" + version);
        config.ctx = config.canvasElement.getContext("2d");
      }
      this.ctx = config.ctx;
      this.config = config;
      // ������ò��� canvas �������Ǿ��޷����л���
      if (!config.ctx || !config.width || !config.height) {
        console.error("�޷���ȡ�� CanvasContext2D �����");
        return;
      }
      // ���ȴ� config ������ dpr
      this.setDpr();
      // ��д����ԭ�ͷ���
      this.resetArrayProto();
      // ��ʼ�� window ����
      this.initWindowFunction();
    }
    /**
     * �豸���ر�
     * window �������Զ���ȡ, ���໷���ֶ�����
     */
    Lucky.prototype.setDpr = function () {
      var config = this.config;
      if (config.dpr);
      else if (window) {
        window.dpr = config.dpr = window.devicePixelRatio || 1;
      } else if (!config.dpr) {
        console.error(config, "δ���� dpr ���ܻᵼ�»����쳣");
      }
    };
    /**
     * ����ǩ�������С
     */
    Lucky.prototype.setHTMLFontSize = function () {
      if (!window) return;
      this.htmlFontSize = +window
        .getComputedStyle(document.documentElement)
        .fontSize.slice(0, -2);
    };
    /**
     * �� window �����ϻ�ȡһЩ����
     */
    Lucky.prototype.initWindowFunction = function () {
      if (window) {
        this.rAF = window.requestAnimationFrame;
        this.setInterval = window.setInterval;
        this.clearInterval = window.clearInterval;
        return;
      }
      if (this.config.rAF) {
        // ����ʹ��֡����
        this.rAF = this.config.rAF;
      } else if (this.config.setTimeout) {
        // ���ʹ�ö�ʱ��
        var timeout_1 = this.config.setTimeout;
        this.rAF = function (callback) {
          return timeout_1(callback, 16);
        };
      } else {
        // ���config����û���ṩ, �Ǿͼ���ȫ�ַ�������setTimeout
        this.rAF = function (callback) {
          return setTimeout(callback, 16);
        };
      }
    };
    /**
     * ���� dpr ���� canvas ������λ��
     */
    Lucky.prototype.zoomCanvas = function () {
      var _a = this,
        config = _a.config,
        ctx = _a.ctx;
      var canvasElement = config.canvasElement,
        dpr = config.dpr;
      var compute = function (len) {
        return ((len * dpr - len) / (len * dpr)) * (dpr / 2) * 100;
      };
      if (!canvasElement) return;
      canvasElement.width = config.width * dpr;
      canvasElement.height = config.height * dpr;
      canvasElement.style.width = canvasElement.width + "px";
      canvasElement.style.height = canvasElement.height + "px";
      canvasElement.style.transform =
        "scale(" +
        1 / dpr +
        ") translate(\n      " +
        -compute(canvasElement.width) +
        "%, " +
        -compute(canvasElement.height) +
        "%\n    )";
      ctx.scale(dpr, dpr);
    };
    /**
     * �첽����ͼƬ������ͼƬ�ļ�����Ϣ
     * @param src ͼƬ·��
     * @param info ͼƬ��Ϣ
     */
    Lucky.prototype.loadImg = function (src, info) {
      var _this_1 = this;
      return new Promise(function (resolve) {
        if (_this_1.config.flag === "WEB") {
          var imgObj_1 = new Image();
          imgObj_1.src = src;
          imgObj_1.onload = function () {
            return resolve(imgObj_1);
          };
        } else if (
          ["MINI-WX", "UNI-H5", "UNI-MINI-WX"].includes(_this_1.config.flag)
        ) {
          // �޸� uni.getImageInfo �޷����� base64 ��ʽ��ͼƬ������
          if (/^data:image\/([a-z]+);base64,/.test(src)) {
            info.$resolve = resolve;
            return;
          }
          _this_1.global.getImageInfo({
            src: src,
            success: function (imgObj) {
              return resolve(imgObj);
            },
            fail: function () {
              return console.error("API `getImageInfo` ����ͼƬʧ��", src);
            },
          });
        }
      });
    };
    /**
     * ��ȡ����
     * @param length ��Ҫת���ĳ���
     * @return ���س���
     */
    Lucky.prototype.getLength = function (length) {
      if (isExpectType(length, "number")) return length;
      if (isExpectType(length, "string")) return this.changeUnits(length);
      return 0;
    };
    /**
     * ת����λ
     * @param { string } value ��Ҫת����ֵ
     * @param { number } denominator ����
     * @return { number } �����µ��ַ���
     */
    Lucky.prototype.changeUnits = function (value, denominator) {
      var _this_1 = this;
      if (denominator === void 0) {
        denominator = 1;
      }
      return Number(
        value.replace(/^(\-*[0-9.]*)([a-z%]*)$/, function (value, num, unit) {
          var unitFunc = {
            "%": function (n) {
              return n * (denominator / 100);
            },
            px: function (n) {
              return n * 1;
            },
            rem: function (n) {
              return n * _this_1.htmlFontSize;
            },
          }[unit];
          if (unitFunc) return unitFunc(num);
          // ����Ҳ���Ĭ�ϵ�λ, �ͽ������洦��
          var otherUnitFunc = _this_1.config.unitFunc;
          return otherUnitFunc ? otherUnitFunc(num, unit) : num;
        })
      );
    };
    /**
     * �������ݲ����»��� canvas ����
     */
    Lucky.prototype.draw = function () {};
    /**
     * ���ݽٳ�
     * @param obj ��Ҫ����������
     */
    Lucky.prototype.observer = function (data) {
      var _this_1 = this;
      if (!data || typeof data !== "object") return;
      Object.keys(data).forEach(function (key) {
        _this_1.defineReactive(data, key, data[key]);
      });
    };
    /**
     * ��д setter �� getter
     * @param obj ����
     * @param key ����
     * @param val ֵ
     */
    Lucky.prototype.defineReactive = function (data, key, value) {
      var _this_1 = this;
      this.observer(value);
      Object.defineProperty(data, key, {
        get: function () {
          return value;
        },
        set: function (newVal) {
          var oldVal = value;
          if (newVal === value) return;
          value = newVal;
          _this_1.observer(value);
          if (_this_1.subs[key]) _this_1.subs[key].call(_this_1, value, oldVal);
          _this_1.draw();
        },
      });
    };
    /**
     * ����һ���µ���Ӧʽ����
     * @param data ����
     * @param key ����
     * @param value ��ֵ
     */
    Lucky.prototype.$set = function (data, key, value) {
      if (!data || typeof data !== "object") return;
      this.defineReactive(data, key, value);
    };
    /**
     * ����һ�����Լ���
     * @param data Դ����
     * @param key ������
     * @param callback �ص�����
     */
    Lucky.prototype.$computed = function (data, key, callback) {
      var _this_1 = this;
      Object.defineProperty(data, key, {
        get: function () {
          return callback.call(_this_1);
        },
      });
    };
    /**
     * ����һ���۲���
     * @param key ������
     * @param callback �ص�����
     */
    Lucky.prototype.$watch = function (key, callback) {
      this.subs[key] = callback;
    };
    /**
     * ��д�����ԭ�ͷ���
     */
    Lucky.prototype.resetArrayProto = function () {
      var _this = this;
      var oldArrayProto = Array.prototype;
      var newArrayProto = Object.create(oldArrayProto);
      var methods = [
        "push",
        "pop",
        "shift",
        "unshift",
        "sort",
        "splice",
        "reverse",
      ];
      methods.forEach(function (name) {
        newArrayProto[name] = function () {
          var _a;
          _this.draw();
          (_a = oldArrayProto[name]).call.apply(
            _a,
            __spreadArrays([this], Array.from(arguments))
          );
        };
      });
    };
    return Lucky;
  })();

  /**
   * ת��Ϊ����Ƕ�
   * @param { number } deg ��ѧ�Ƕ�
   * @return { number } ����Ƕ�
   */
  var getAngle = function (deg) {
    return (Math.PI / 180) * deg;
  };
  /**
   * ���ݽǶȼ���Բ�ϵĵ�
   * @param { number } deg ����Ƕ�
   * @param { number } r �뾶
   * @return { Array<number> } ����[x, y]
   */
  var getArcPointerByDeg = function (deg, r) {
    return [+(Math.cos(deg) * r).toFixed(8), +(Math.sin(deg) * r).toFixed(8)];
  };
  /**
   * ���ݵ�������߷���
   * @param { number } x ������
   * @param { number } y ������
   * @return { Array<number> } [б��, ����]
   */
  var getTangentByPointer = function (x, y) {
    var k = -x / y;
    var b = -k * x + y;
    return [k, b];
  };
  // �������㻭Բ��
  var drawRadian = function (ctx, r, start, end, direction) {
    var _a;
    if (direction === void 0) {
      direction = true;
    }
    if (Math.abs(end - start).toFixed(8) >= getAngle(180).toFixed(8)) {
      var middle = (end + start) / 2;
      if (direction) {
        drawRadian(ctx, r, start, middle, direction);
        drawRadian(ctx, r, middle, end, direction);
      } else {
        drawRadian(ctx, r, middle, end, direction);
        drawRadian(ctx, r, start, middle, direction);
      }
      return false;
    }
    if (!direction) (_a = [end, start]), (start = _a[0]), (end = _a[1]);
    var _b = getArcPointerByDeg(start, r),
      x1 = _b[0],
      y1 = _b[1];
    var _c = getArcPointerByDeg(end, r),
      x2 = _c[0],
      y2 = _c[1];
    var _d = getTangentByPointer(x1, y1),
      k1 = _d[0],
      b1 = _d[1];
    var _e = getTangentByPointer(x2, y2),
      k2 = _e[0],
      b2 = _e[1];
    var x0 = (b2 - b1) / (k1 - k2);
    var y0 = (k2 * b1 - k1 * b2) / (k2 - k1);
    if (isNaN(x0)) {
      Math.abs(x1) === +r.toFixed(8) && (x0 = x1);
      Math.abs(x2) === +r.toFixed(8) && (x0 = x2);
    }
    if (k1 === Infinity || k1 === -Infinity) {
      y0 = k2 * x0 + b2;
    } else if (k2 === Infinity || k2 === -Infinity) {
      y0 = k1 * x0 + b1;
    }
    ctx.lineTo(x1, y1);
    // ctx.arcTo(x0, y0, x2, y2, r)
    ctx.quadraticCurveTo(x0, y0, x2, y2);
  };
  // ��������
  var drawSector = function (
    ctx,
    minRadius,
    maxRadius,
    start,
    end,
    gutter,
    background
  ) {
    if (!gutter) {
      ctx.beginPath();
      ctx.fillStyle = background;
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, maxRadius, start, end, false);
      ctx.closePath();
      ctx.fill();
    } else
      drawSectorByArcTo(
        ctx,
        minRadius,
        maxRadius,
        start,
        end,
        gutter,
        background
      );
  };
  // ����arcTo��������
  var drawSectorByArcTo = function (
    ctx,
    minRadius,
    maxRadius,
    start,
    end,
    gutter,
    background
  ) {
    if (!minRadius) minRadius = gutter;
    var maxGutter = getAngle((90 / Math.PI / maxRadius) * gutter);
    var minGutter = getAngle((90 / Math.PI / minRadius) * gutter);
    var maxStart = start + maxGutter;
    var maxEnd = end - maxGutter;
    var minStart = start + minGutter;
    var minEnd = end - minGutter;
    ctx.beginPath();
    ctx.fillStyle = background;
    ctx.moveTo.apply(ctx, getArcPointerByDeg(maxStart, maxRadius));
    drawRadian(ctx, maxRadius, maxStart, maxEnd, true);
    // ��� getter �Ȱ�ť�̾ͻ���Բ��, ��֮�����µ������
    if (minEnd > minStart) drawRadian(ctx, minRadius, minStart, minEnd, false);
    else
      ctx.lineTo.apply(
        ctx,
        getArcPointerByDeg(
          (start + end) / 2,
          gutter / 2 / Math.abs(Math.sin((start - end) / 2))
        )
      );
    ctx.closePath();
    ctx.fill();
  };
  // ����Բ�Ǿ���
  var drawRoundRect = function (ctx, x, y, w, h, r, color) {
    var min = Math.min(w, h);
    if (r > min / 2) r = min / 2;
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    // ctx.arcTo(x + w, y, x + w, y + r, r)
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    // ctx.arcTo(x + w, y + h, x + w - r, y + h, r)
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    // ctx.arcTo(x, y + h, x, y + h - r, r)
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    // ctx.arcTo(x, y, x + r, y, r)
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
  };
  /**
   * �������Խ���ɫ
   */
  var getLinearGradient = function (ctx, x, y, w, h, background) {
    var context = /linear-gradient\((.+)\)/
      .exec(background)[1]
      .split(",") // ���ݶ��ŷָ�
      .map(function (text) {
        return text.trim();
      }); // ȥ�����߿ո�
    var deg = context.shift(),
      direction = [0, 0, 0, 0];
    // ͨ����ʼ��ͽǶȼ��㽥���յ�������, �����л�������������ʹ�ù��ɶ���....
    if (deg.includes("deg")) {
      deg = deg.slice(0, -3) % 360;
      // ����4�����޶����������, ����45�Ȼ���8����������յ�����
      var getLenOfTanDeg = function (deg) {
        return Math.tan((deg / 180) * Math.PI);
      };
      if (deg >= 0 && deg < 45)
        direction = [x, y + h, x + w, y + h - w * getLenOfTanDeg(deg - 0)];
      else if (deg >= 45 && deg < 90)
        direction = [x, y + h, x + w - h * getLenOfTanDeg(deg - 45), y];
      else if (deg >= 90 && deg < 135)
        direction = [x + w, y + h, x + w - h * getLenOfTanDeg(deg - 90), y];
      else if (deg >= 135 && deg < 180)
        direction = [x + w, y + h, x, y + w * getLenOfTanDeg(deg - 135)];
      else if (deg >= 180 && deg < 225)
        direction = [x + w, y, x, y + w * getLenOfTanDeg(deg - 180)];
      else if (deg >= 225 && deg < 270)
        direction = [x + w, y, x + h * getLenOfTanDeg(deg - 225), y + h];
      else if (deg >= 270 && deg < 315)
        direction = [x, y, x + h * getLenOfTanDeg(deg - 270), y + h];
      else if (deg >= 315 && deg < 360)
        direction = [x, y, x + w, y + h - w * getLenOfTanDeg(deg - 315)];
    }
    // �����ĸ��򵥵ķ�������
    else if (deg.includes("top")) direction = [x, y + h, x, y];
    else if (deg.includes("bottom")) direction = [x, y, x, y + h];
    else if (deg.includes("left")) direction = [x + w, y, x, y];
    else if (deg.includes("right")) direction = [x, y, x + w, y];
    // �������Խ������ʹ����������
    var gradient = ctx.createLinearGradient.apply(
      ctx,
      direction.map(function (n) {
        return n >> 0;
      })
    );
    // ��������ع�, ����any����
    return context.reduce(function (gradient, item, index) {
      var info = item.split(" ");
      if (info.length === 1) gradient.addColorStop(index, info[0]);
      else if (info.length === 2) gradient.addColorStop.apply(gradient, info);
      return gradient;
    }, gradient);
  };

  /**
   * ��������
   * t: current time����ǰʱ�䣩
   * b: beginning value����ʼֵ��
   * c: change in value���仯����
   * d: duration������ʱ�䣩
   *
   * ��л��������� https://github.com/zhangxinxu/Tween
   */
  // ���η��Ļ���
  var quad = {
    easeIn: function (t, b, c, d) {
      if (t >= d) t = d;
      return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {
      if (t >= d) t = d;
      return -c * (t /= d) * (t - 2) + b;
    },
  };

  var LuckyWheel = /** @class */ (function (_super) {
    __extends(LuckyWheel, _super);
    /**
     * ��ת�̹�����
     * @param config Ԫ�ر�ʶ
     * @param data �齱������
     */
    function LuckyWheel(config, data) {
      if (data === void 0) {
        data = {};
      }
      var _this = _super.call(this, config) || this;
      _this.blocks = [];
      _this.prizes = [];
      _this.buttons = [];
      _this.defaultConfig = {};
      _this._defaultConfig = {
        gutter: "0px",
        offsetDegree: 0,
        speed: 20,
        accelerationTime: 2500,
        decelerationTime: 2500,
      };
      _this.defaultStyle = {};
      _this._defaultStyle = {
        fontSize: "18px",
        fontColor: "#000",
        fontStyle: "microsoft yahei ui,microsoft yahei,simsun,sans-serif",
        fontWeight: "400",
        lineHeight: "",
        background: "#fff",
        wordWrap: true,
        lengthLimit: "90%",
      };
      _this.Radius = 0; // ��ת�̰뾶
      _this.prizeRadius = 0; // ��Ʒ����뾶
      _this.prizeDeg = 0; // ��Ʒ��ѧ�Ƕ�
      _this.prizeRadian = 0; // ��Ʒ����Ƕ�
      _this.rotateDeg = 0; // ת����ת�Ƕ�
      _this.maxBtnRadius = 0; // ���ť�뾶
      _this.startTime = 0; // ��ʼʱ���
      _this.endTime = 0; // ֹͣʱ���
      _this.stopDeg = 0; // ������
      _this.endDeg = 0; // ֹͣ�Ƕ�
      _this.animationId = 0; // ֡����id
      _this.FPS = 16.6; // ��Ļˢ����
      _this.prizeImgs = [[]];
      _this.btnImgs = [[]];
      _this.initData(data);
      _this.initComputed();
      _this.initWatch();
      // �ռ��״���Ⱦ��ͼƬ
      var willUpdate = [[]];
      _this.prizes &&
        (willUpdate = _this.prizes.map(function (prize) {
          return prize.imgs;
        }));
      _this.buttons &&
        willUpdate.push.apply(
          willUpdate,
          _this.buttons.map(function (btn) {
            return btn.imgs;
          })
        );
      _this.init(willUpdate);
      return _this;
    }
    /**
     * ��ʼ������
     * @param data
     */
    LuckyWheel.prototype.initData = function (data) {
      this.$set(this, "blocks", data.blocks || []);
      this.$set(this, "prizes", data.prizes || []);
      this.$set(this, "buttons", data.buttons || []);
      this.$set(this, "defaultConfig", data.defaultConfig || {});
      this.$set(this, "defaultStyle", data.defaultStyle || {});
      this.$set(this, "startCallback", data.start);
      this.$set(this, "endCallback", data.end);
    };
    /**
     * ��ʼ�����Լ���
     */
    LuckyWheel.prototype.initComputed = function () {
      var _this = this;
      // Ĭ������
      this.$computed(this, "_defaultConfig", function () {
        var config = __assign(
          {
            gutter: "0px",
            offsetDegree: 0,
            speed: 20,
            accelerationTime: 2500,
            decelerationTime: 2500,
          },
          _this.defaultConfig
        );
        return config;
      });
      // Ĭ����ʽ
      this.$computed(this, "_defaultStyle", function () {
        var style = __assign(
          {
            fontSize: "18px",
            fontColor: "#000",
            fontStyle: "microsoft yahei ui,microsoft yahei,simsun,sans-serif",
            fontWeight: "400",
            background: "#fff",
            wordWrap: true,
            lengthLimit: "90%",
          },
          _this.defaultStyle
        );
        return style;
      });
    };
    /**
     * ��ʼ���۲���
     */
    LuckyWheel.prototype.initWatch = function () {
      var _this = this;
      // �۲콱Ʒ���ݵı仯
      this.$watch("prizes", function (newData, oldData) {
        var willUpdate = [];
        // �״���ȾʱoldDataΪundefined
        if (!oldData)
          willUpdate = newData.map(function (prize) {
            return prize.imgs;
          });
        // ��ʱ��ֵһ������
        else if (newData)
          newData.forEach(function (newPrize, prizeIndex) {
            var prizeImgs = [];
            var oldPrize = oldData[prizeIndex];
            // ����ɽ�Ʒ������
            if (!oldPrize) prizeImgs = newPrize.imgs || [];
            // �½�Ʒ��ͼƬ���ܽ��жԱ�
            else if (newPrize.imgs)
              newPrize.imgs.forEach(function (newImg, imgIndex) {
                if (!oldPrize.imgs) return (prizeImgs[imgIndex] = newImg);
                var oldImg = oldPrize.imgs[imgIndex];
                // �����ֵ������
                if (!oldImg) prizeImgs[imgIndex] = newImg;
                // ���������û�н�Ʒ��ͼƬ
                else if (
                  !_this.prizeImgs[prizeIndex] ||
                  !_this.prizeImgs[prizeIndex][imgIndex]
                ) {
                  prizeImgs[imgIndex] = newImg;
                }
                // �����ֵ�;�ֵ��src�����
                else if (newImg.src !== oldImg.src)
                  prizeImgs[imgIndex] = newImg;
              });
            willUpdate[prizeIndex] = prizeImgs;
          });
        return _this.init(willUpdate);
      });
      // �۲찴ť���ݵı仯
      this.$watch("buttons", function (newData, oldData) {
        var willUpdate = [];
        // �״���ȾʱoldDataΪundefined
        if (!oldData)
          willUpdate = newData.map(function (btn) {
            return btn.imgs;
          });
        // ��ʱ��ֵһ������
        else if (newData)
          newData.forEach(function (newBtn, btnIndex) {
            var btnImgs = [];
            var oldBtn = oldData[btnIndex];
            // ����ɽ�Ʒ�����ڻ�ɽ�Ʒ��ͼƬ������
            if (!oldBtn || !oldBtn.imgs) btnImgs = newBtn.imgs || [];
            // �½�Ʒ��ͼƬ���ܽ��жԱ�
            else if (newBtn.imgs)
              newBtn.imgs.forEach(function (newImg, imgIndex) {
                if (!oldBtn.imgs) return (btnImgs[imgIndex] = newImg);
                var oldImg = oldBtn.imgs[imgIndex];
                // �����ֵ������
                if (!oldImg) btnImgs[imgIndex] = newImg;
                // ���������û�а�ť��ͼƬ
                else if (
                  !_this.btnImgs[btnIndex] ||
                  !_this.btnImgs[btnIndex][imgIndex]
                ) {
                  btnImgs[imgIndex] = newImg;
                }
                // �����ֵ�;�ֵ��src�����
                else if (newImg.src !== oldImg.src) btnImgs[imgIndex] = newImg;
              });
            willUpdate[btnIndex] = btnImgs;
          });
        return _this.init(
          __spreadArrays(
            new Array(_this.prizes.length).fill(undefined),
            willUpdate
          )
        );
      });
    };
    /**
     * ��ʼ�� canvas �齱
     * @param { Array<ImgType[]> } willUpdateImgs ��Ҫ���µ�ͼƬ
     */
    LuckyWheel.prototype.init = function (willUpdateImgs) {
      var _this = this;
      var _a = this,
        config = _a.config,
        ctx = _a.ctx;
      this.setDpr();
      this.setHTMLFontSize();
      this.zoomCanvas();
      this.Radius = Math.min(config.width, config.height) / 2;
      if (config.flag === "WEB") ctx.translate(this.Radius, this.Radius);
      var endCallBack = function () {
        // ���� uni-app �������Ⱦ bug, ������Ҫ������������Բ��
        _this.draw();
        _this.draw();
        // ��ֹ��ΰ󶨵���¼�
        if (config.canvasElement)
          config.canvasElement.onclick = function (e) {
            var _a;
            ctx.beginPath();
            ctx.arc(0, 0, _this.maxBtnRadius, 0, Math.PI * 2, false);
            if (!ctx.isPointInPath(e.offsetX, e.offsetY)) return;
            if (_this.startTime) return;
            (_a = _this.startCallback) === null || _a === void 0
              ? void 0
              : _a.call(_this, e);
          };
      };
      // ͬ������ͼƬ
      var num = 0,
        sum = 0;
      if (isExpectType(willUpdateImgs, "array")) {
        this.draw(); // �Ȼ�һ�η�ֹ��˸, ��Ϊ����ͼƬ���첽��
        willUpdateImgs.forEach(function (imgs, cellIndex) {
          if (!imgs) return false;
          imgs.forEach(function (imgInfo, imgIndex) {
            sum++;
            _this.loadAndCacheImg(cellIndex, imgIndex, function () {
              num++;
              if (sum === num) endCallBack.call(_this);
            });
          });
        });
      }
      if (!sum) endCallBack.call(this);
    };
    /**
     * ��������ĳһ��ͼƬ��������ʵ����Ⱦ����
     * @param { number } cellIndex ��Ʒ����
     * @param { number } imgIndex ��ƷͼƬ����
     * @param { Function } callBack ͼƬ������ϻص�
     */
    LuckyWheel.prototype.loadAndCacheImg = function (
      cellIndex,
      imgIndex,
      callBack
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var isPrize, cellName, imgName, cell, imgInfo, _a, _b;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              isPrize = cellIndex < this.prizes.length;
              cellName = isPrize ? "prizes" : "buttons";
              imgName = isPrize ? "prizeImgs" : "btnImgs";
              cellIndex = isPrize ? cellIndex : cellIndex - this.prizes.length;
              cell = this[cellName][cellIndex];
              if (!cell || !cell.imgs) return [2 /*return*/];
              imgInfo = cell.imgs[imgIndex];
              if (!imgInfo) return [2 /*return*/];
              // ͬ������ͼƬ
              if (!this[imgName][cellIndex]) this[imgName][cellIndex] = [];
              _a = this[imgName][cellIndex];
              _b = imgIndex;
              return [4 /*yield*/, this.loadImg(imgInfo.src, imgInfo)];
            case 1:
              _a[_b] = _c.sent();
              callBack.call(this);
              return [2 /*return*/];
          }
        });
      });
    };
    /**
     * ����ͼƬ����Ⱦ����
     * @param imgObj ͼƬ��ǩԪ��
     * @param imgInfo ͼƬ��Ϣ
     * @param computedWidth ���Ȱٷֱ�
     * @param computedHeight �߶Ȱٷֱ�
     * @return [��Ⱦ����, ��Ⱦ�߶�]
     */
    LuckyWheel.prototype.computedWidthAndHeight = function (
      imgObj,
      imgInfo,
      computedWidth,
      computedHeight
    ) {
      // �������õ���ʽ����ͼƬ����ʵ����
      if (!imgInfo.width && !imgInfo.height) {
        // ���û�����ÿ���, ��ʹ��ͼƬ�����Ŀ���
        return [imgObj.width, imgObj.height];
      } else if (imgInfo.width && !imgInfo.height) {
        // ���ֻ��д�˿���, û��д�߶�
        var trueWidth = this.getWidth(imgInfo.width, computedWidth);
        // �Ǹ߶Ⱦ����ſ��Ƚ��еȱ�����
        return [trueWidth, imgObj.height * (trueWidth / imgObj.width)];
      } else if (!imgInfo.width && imgInfo.height) {
        // ���ֻ��д�˿���, û��д�߶�
        var trueHeight = this.getHeight(imgInfo.height, computedHeight);
        // �ǿ��Ⱦ����Ÿ߶Ƚ��еȱ�����
        return [imgObj.width * (trueHeight / imgObj.height), trueHeight];
      }
      // ������Ⱥ͸߶ȶ���д��, ����ʵ����
      return [
        this.getWidth(imgInfo.width, computedWidth),
        this.getHeight(imgInfo.height, computedHeight),
      ];
    };
    /**
     * ��ʼ����
     */
    LuckyWheel.prototype.draw = function () {
      var _this = this;
      var _a, _b;
      var _c = this,
        config = _c.config,
        ctx = _c.ctx,
        _defaultConfig = _c._defaultConfig,
        _defaultStyle = _c._defaultStyle;
      // ��������ǰ�ص�
      (_a = config.beforeDraw) === null || _a === void 0
        ? void 0
        : _a.call(this, ctx);
      // ��ջ���
      ctx.clearRect(
        -this.Radius,
        -this.Radius,
        this.Radius * 2,
        this.Radius * 2
      );
      // ����blocks�߿�
      this.prizeRadius = this.blocks.reduce(function (radius, block) {
        ctx.beginPath();
        ctx.fillStyle = block.background;
        ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
        ctx.fill();
        return radius - _this.getLength(block.padding.split(" ")[0]);
      }, this.Radius);
      // ������ʼ����
      this.prizeDeg = 360 / this.prizes.length;
      this.prizeRadian = getAngle(this.prizeDeg);
      var start = getAngle(-90 + this.rotateDeg + _defaultConfig.offsetDegree);
      // �������ֺ�����
      var getFontX = function (line) {
        return _this.getOffsetX(ctx.measureText(line).width);
      };
      // ��������������
      var getFontY = function (font, height, lineIndex) {
        // ����ʹ�������и�, Ҫôʹ��Ĭ���и�, ���ʹ�������С, ����ʹ��Ĭ�������С
        var lineHeight =
          font.lineHeight ||
          _defaultStyle.lineHeight ||
          font.fontSize ||
          _defaultStyle.fontSize;
        return (
          _this.getHeight(font.top, height) +
          (lineIndex + 1) * _this.getLength(lineHeight)
        );
      };
      ctx.save();
      // ����prizes��Ʒ����
      this.prizes.forEach(function (prize, prizeIndex) {
        // ���㵱ǰ��Ʒ�����м������
        var currMiddleDeg = start + prizeIndex * _this.prizeRadian;
        // ��Ʒ����ɼ��߶�
        var prizeHeight = _this.prizeRadius - _this.maxBtnRadius;
        // ���Ʊ���
        drawSector(
          ctx,
          _this.maxBtnRadius,
          _this.prizeRadius,
          currMiddleDeg - _this.prizeRadian / 2,
          currMiddleDeg + _this.prizeRadian / 2,
          _this.getLength(_defaultConfig.gutter),
          prize.background || _defaultStyle.background
        );
        // ������ʱ���겢��ת����
        var x = Math.cos(currMiddleDeg) * _this.prizeRadius;
        var y = Math.sin(currMiddleDeg) * _this.prizeRadius;
        ctx.translate(x, y);
        ctx.rotate(currMiddleDeg + getAngle(90));
        // ����ͼƬ
        prize.imgs &&
          prize.imgs.forEach(function (imgInfo, imgIndex) {
            if (!_this.prizeImgs[prizeIndex]) return;
            var prizeImg = _this.prizeImgs[prizeIndex][imgIndex];
            if (!prizeImg) return;
            var _a = _this.computedWidthAndHeight(
                prizeImg,
                imgInfo,
                _this.prizeRadian * _this.prizeRadius,
                prizeHeight
              ),
              trueWidth = _a[0],
              trueHeight = _a[1];
            var _b = [
                _this.getOffsetX(trueWidth),
                _this.getHeight(imgInfo.top, prizeHeight),
              ],
              imgX = _b[0],
              imgY = _b[1];
            var drawImg;
            // ���ݴ���
            if (_this.config.flag === "WEB") drawImg = prizeImg;
            else if (
              ["MINI-WX", "UNI-H5", "UNI-MINI-WX"].includes(_this.config.flag)
            )
              drawImg = prizeImg.path;
            // ����ͼƬ
            ctx.drawImage(drawImg, imgX, imgY, trueWidth, trueHeight);
          });
        // ���л�������
        prize.fonts &&
          prize.fonts.forEach(function (font) {
            var fontColor = font.fontColor || _defaultStyle.fontColor;
            var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
            var fontSize = _this.getLength(
              font.fontSize || _defaultStyle.fontSize
            );
            var fontStyle = font.fontStyle || _defaultStyle.fontStyle;
            ctx.fillStyle = fontColor;
            ctx.font = fontWeight + " " + fontSize + "px " + fontStyle;
            var lines = [],
              text = String(font.text);
            if (
              font.hasOwnProperty("wordWrap")
                ? font.wordWrap
                : _defaultStyle.wordWrap
            ) {
              text = removeEnter(text);
              var str = "";
              for (var i = 0; i < text.length; i++) {
                str += text[i];
                var currWidth = ctx.measureText(str).width;
                var maxWidth =
                  (_this.prizeRadius -
                    getFontY(font, prizeHeight, lines.length)) *
                    Math.tan(_this.prizeRadian / 2) *
                    2 -
                  _this.getLength(_defaultConfig.gutter);
                if (
                  currWidth >
                  _this.getWidth(
                    font.lengthLimit || _defaultStyle.lengthLimit,
                    maxWidth
                  )
                ) {
                  lines.push(str.slice(0, -1));
                  str = text[i];
                }
              }
              if (str) lines.push(str);
              if (!lines.length) lines.push(text);
            } else {
              lines = text.split("\n");
            }
            lines
              .filter(function (line) {
                return !!line;
              })
              .forEach(function (line, lineIndex) {
                ctx.fillText(
                  line,
                  getFontX(line),
                  getFontY(font, prizeHeight, lineIndex)
                );
              });
          });
        // ������ת�ǶȺ�ԭ������
        ctx.rotate(getAngle(360) - currMiddleDeg - getAngle(90));
        ctx.translate(-x, -y);
      });
      ctx.restore();
      // ���ư�ť
      this.buttons.forEach(function (btn, btnIndex) {
        var radius = _this.getHeight(btn.radius);
        // ���Ʊ�����ɫ
        _this.maxBtnRadius = Math.max(_this.maxBtnRadius, radius);
        ctx.beginPath();
        ctx.fillStyle = btn.background || "#fff";
        ctx.arc(0, 0, radius, 0, Math.PI * 2, false);
        ctx.fill();
        // ����ָ��
        if (btn.pointer) {
          ctx.beginPath();
          ctx.fillStyle = btn.background || "#fff";
          ctx.moveTo(-radius, 0);
          ctx.lineTo(radius, 0);
          ctx.lineTo(0, -radius * 2);
          ctx.closePath();
          ctx.fill();
        }
        // ���ư�ťͼƬ
        btn.imgs &&
          btn.imgs.forEach(function (imgInfo, imgIndex) {
            if (!_this.btnImgs[btnIndex]) return;
            var btnImg = _this.btnImgs[btnIndex][imgIndex];
            if (!btnImg) return;
            // ����ͼƬ��ʵ����
            var _a = _this.computedWidthAndHeight(
                btnImg,
                imgInfo,
                _this.getHeight(btn.radius) * 2,
                _this.getHeight(btn.radius) * 2
              ),
              trueWidth = _a[0],
              trueHeight = _a[1];
            var _b = [
                _this.getOffsetX(trueWidth),
                _this.getHeight(imgInfo.top, radius),
              ],
              imgX = _b[0],
              imgY = _b[1];
            // ���ݴ���
            var drawImg;
            if (_this.config.flag === "WEB") drawImg = btnImg;
            else if (
              ["MINI-WX", "UNI-H5", "UNI-MINI-WX"].includes(_this.config.flag)
            )
              drawImg = btnImg.path;
            // ����ͼƬ
            ctx.drawImage(drawImg, imgX, imgY, trueWidth, trueHeight);
          });
        // ���ư�ť����
        btn.fonts &&
          btn.fonts.forEach(function (font) {
            var fontColor = font.fontColor || _defaultStyle.fontColor;
            var fontWeight = font.fontWeight || _defaultStyle.fontWeight;
            var fontSize = _this.getLength(
              font.fontSize || _defaultStyle.fontSize
            );
            var fontStyle = font.fontStyle || _defaultStyle.fontStyle;
            ctx.fillStyle = fontColor;
            ctx.font = fontWeight + " " + fontSize + "px " + fontStyle;
            String(font.text)
              .split("\n")
              .forEach(function (line, lineIndex) {
                ctx.fillText(
                  line,
                  getFontX(line),
                  getFontY(font, radius, lineIndex)
                );
              });
          });
      });
      // �������ƺ�ص�
      (_b = config.afterDraw) === null || _b === void 0
        ? void 0
        : _b.call(this, ctx);
    };
    /**
     * ���Ⱪ¶: ��ʼ�齱����
     */
    LuckyWheel.prototype.play = function () {
      console.log('play2')
      // �ٴ�����, ��Ϊplay�ǿ����첽���õ�
      if (this.startTime) return;
      this.startTime = Date.now();
      this.prizeFlag = undefined;
      this.run();
    };
    /**
     * ���Ⱪ¶: ����ֹͣ����
     * @param index �н�����
     */
    LuckyWheel.prototype.stop = function (index) {
      this.prizeFlag = Number(index) % this.prizes.length;
    };
    /**
     * ʵ�ʿ�ʼִ�з���
     * @param num ��¼֡����ִ�ж��ٴ�
     */
    LuckyWheel.prototype.run = function (num) {
      if (num === void 0) {
        num = 0;
      }
      var _a = this,
        rAF = _a.rAF,
        prizeFlag = _a.prizeFlag,
        prizeDeg = _a.prizeDeg,
        rotateDeg = _a.rotateDeg,
        _defaultConfig = _a._defaultConfig;
      var interval = Date.now() - this.startTime;
      // ����ȫ��ת, ��ֹͣ
      if (
        interval >= _defaultConfig.accelerationTime &&
        prizeFlag !== undefined
      ) {
        // ��¼֡��
        this.FPS = interval / num;
        console.log(interval / num, 'interval / num')
        // ��¼��ʼֹͣ��ʱ���
        this.endTime = Date.now();
        // ��¼��ʼֹͣ��λ��
        this.stopDeg = rotateDeg;
        // ��������ֹͣ�ĽǶ�
        var i = 0;
        while (++i) {
          var endDeg =
            360 * i -
            prizeFlag * prizeDeg -
            rotateDeg -
            _defaultConfig.offsetDegree;
          var currSpeed =
            quad.easeOut(
              this.FPS,
              this.stopDeg,
              endDeg,
              _defaultConfig.decelerationTime
            ) - this.stopDeg;
          if (currSpeed > _defaultConfig.speed) {
            this.endDeg = endDeg;
            break;
          }
        }
        return this.slowDown();
      }
      this.rotateDeg =
        (rotateDeg +
          quad.easeIn(
            interval,
            0,
            _defaultConfig.speed,
            _defaultConfig.accelerationTime
          )) %
        360;
      this.draw();
      rAF(this.run.bind(this, num + 1));
    };
    /**
     * ����ֹͣ�ķ���
     */
    LuckyWheel.prototype.slowDown = function () {
      var _a;
      var _b = this,
        rAF = _b.rAF,
        prizes = _b.prizes,
        prizeFlag = _b.prizeFlag,
        stopDeg = _b.stopDeg,
        endDeg = _b.endDeg,
        _defaultConfig = _b._defaultConfig;
      var interval = Date.now() - this.endTime;
      if (interval >= _defaultConfig.decelerationTime) {
        this.startTime = 0;
        (_a = this.endCallback) === null || _a === void 0
          ? void 0
          : _a.call(
              this,
              __assign(
                {},
                prizes.find(function (prize, index) {
                  return index === prizeFlag;
                })
              )
            );
        return;
      }
      this.rotateDeg =
        quad.easeOut(
          interval,
          stopDeg,
          endDeg,
          _defaultConfig.decelerationTime
        ) % 360;
      this.draw();
      rAF(this.slowDown.bind(this));
    };
    /**
     * ��ȡ��Կ���
     * @param length ��Ҫת���Ŀ���
     * @param width ���ȼ���ٷֱ�
     * @return ������Կ���
     */
    LuckyWheel.prototype.getWidth = function (length, width) {
      if (width === void 0) {
        width = this.prizeRadian * this.prizeRadius;
      }
      if (isExpectType(length, "number")) return length;
      if (isExpectType(length, "string"))
        return this.changeUnits(length, width);
      return 0;
    };
    /**
     * ��ȡ��Ը߶�
     * @param length ��Ҫת���ĸ߶�
     * @param height �߶ȼ���ٷֱ�
     * @return ������Ը߶�
     */
    LuckyWheel.prototype.getHeight = function (length, height) {
      if (height === void 0) {
        height = this.prizeRadius;
      }
      if (isExpectType(length, "number")) return length;
      if (isExpectType(length, "string"))
        return this.changeUnits(length, height);
      return 0;
    };
    /**
     * ��ȡ���(����)X����
     * @param width
     * @return ����x����
     */
    LuckyWheel.prototype.getOffsetX = function (width) {
      return -width / 2;
    };
    return LuckyWheel;
  })(Lucky);

  var LuckyGrid = /** @class */ (function (_super) {
    __extends(LuckyGrid, _super);
    /**
     * �Ź�������
     * @param config Ԫ�ر�ʶ
     * @param data �齱������
     */
    function LuckyGrid(config, data) {
      if (data === void 0) {
        data = {};
      }
      var _this = _super.call(this, config) || this;
      _this.rows = 3;
      _this.cols = 3;
      _this.blocks = [];
      _this.prizes = [];
      _this.defaultConfig = {};
      _this._defaultConfig = {
        gutter: 5,
        speed: 20,
        accelerationTime: 2500,
        decelerationTime: 2500,
      };
      _this.defaultStyle = {};
      _this._defaultStyle = {
        borderRadius: 20,
        fontColor: "#000",
        fontSize: "18px",
        fontStyle: "microsoft yahei ui,microsoft yahei,simsun,sans-serif",
        fontWeight: "400",
        lineHeight: "",
        background: "#fff",
        shadow: "",
        wordWrap: true,
        lengthLimit: "90%",
      };
      _this.activeStyle = {};
      _this._activeStyle = {
        background: "#ffce98",
        shadow: "",
        fontStyle: "",
        fontWeight: "",
        fontSize: "",
        lineHeight: "",
        fontColor: "",
      };
      _this.cellWidth = 0; // ���ӿ���
      _this.cellHeight = 0; // ���Ӹ߶�
      _this.startTime = 0; // ��ʼʱ���
      _this.endTime = 0; // ����ʱ���
      _this.currIndex = 0; // ��ǰindex�ۼ�
      _this.stopIndex = 0; // ������
      _this.endIndex = 0; // ֹͣ����
      _this.demo = false; // �Ƿ��Զ�����
      _this.timer = 0; // ���߶�ʱ��
      _this.animationId = 0; // ֡����id
      _this.FPS = 16.6; // ��Ļˢ����
      // ���и���
      _this.cells = [];
      // ͼƬ����
      _this.cellImgs = [];
      _this.initData(data);
      _this.initComputed();
      _this.initWatch();
      // �ռ��״���Ⱦ��ͼƬ
      var willUpdate = [[]];
      _this.prizes &&
        (willUpdate = _this.prizes.map(function (prize) {
          return prize.imgs;
        }));
      _this.button &&
        (willUpdate[_this.cols * _this.rows - 1] = _this.button.imgs);
      _this.init(willUpdate);
      return _this;
    }
    /**
     * ��ʼ������
     * @param data
     */
    LuckyGrid.prototype.initData = function (data) {
      this.$set(this, "rows", Number(data.rows) || 3);
      this.$set(this, "cols", Number(data.cols) || 3);
      this.$set(this, "blocks", data.blocks || []);
      this.$set(this, "prizes", data.prizes || []);
      this.$set(this, "button", data.button);
      this.$set(this, "defaultConfig", data.defaultConfig || {});
      this.$set(this, "defaultStyle", data.defaultStyle || {});
      this.$set(this, "activeStyle", data.activeStyle || {});
      this.$set(this, "startCallback", data.start);
      this.$set(this, "endCallback", data.end);
    };
    /**
     * ��ʼ�����Լ���
     */
    LuckyGrid.prototype.initComputed = function () {
      var _this = this;
      // Ĭ������
      this.$computed(this, "_defaultConfig", function () {
        var config = __assign(
          {
            gutter: 5,
            speed: 20,
            accelerationTime: 2500,
            decelerationTime: 2500,
          },
          _this.defaultConfig
        );
        config.gutter = _this.getLength(config.gutter);
        config.speed = config.speed / 40;
        return config;
      });
      // Ĭ����ʽ
      this.$computed(this, "_defaultStyle", function () {
        return __assign(
          {
            borderRadius: 20,
            fontColor: "#000",
            fontSize: "18px",
            fontStyle: "microsoft yahei ui,microsoft yahei,simsun,sans-serif",
            fontWeight: "400",
            background: "#fff",
            shadow: "",
            wordWrap: true,
            lengthLimit: "90%",
          },
          _this.defaultStyle
        );
      });
      // �н���ʽ
      this.$computed(this, "_activeStyle", function () {
        return __assign(
          { background: "#ffce98", shadow: "" },
          _this.activeStyle
        );
      });
    };
    /**
     * ��ʼ���۲���
     */
    LuckyGrid.prototype.initWatch = function () {
      var _this = this;
      // ������Ʒ���ݵı仯
      this.$watch("prizes", function (newData, oldData) {
        var willUpdate = [];
        // �״���ȾʱoldDataΪundefined
        if (!oldData)
          willUpdate = newData.map(function (prize) {
            return prize.imgs;
          });
        // ��ʱ��ֵһ������
        else if (newData)
          newData.forEach(function (newPrize, prizeIndex) {
            var prizeImgs = [];
            var oldPrize = oldData[prizeIndex];
            // ����ɽ�Ʒ������
            if (!oldPrize) prizeImgs = newPrize.imgs || [];
            // �½�Ʒ��ͼƬ���ܽ��жԱ�
            else if (newPrize.imgs)
              newPrize.imgs.forEach(function (newImg, imgIndex) {
                if (!oldPrize.imgs) return (prizeImgs[imgIndex] = newImg);
                var oldImg = oldPrize.imgs[imgIndex];
                // �����ֵ������
                if (!oldImg) prizeImgs[imgIndex] = newImg;
                // ���������û��ͼƬ
                else if (!_this.cellImgs[prizeIndex][imgIndex])
                  prizeImgs[imgIndex] = newImg;
                // �����ֵ�;�ֵ��src�����
                else if (newImg.src !== oldImg.src)
                  prizeImgs[imgIndex] = newImg;
              });
            willUpdate[prizeIndex] = prizeImgs;
          });
        return _this.init(willUpdate);
      });
      // ������ť���ݵı仯
      this.$watch("button", function (newData, oldData) {
        var willUpdate = [],
          btnIndex = _this.cols * _this.rows - 1;
        // �״���Ⱦʱ, oldData������
        if (!oldData || !oldData.imgs) willUpdate[btnIndex] = newData.imgs;
        // �����ֵ����img, ���ܽ��жԱ�
        else if (newData.imgs) {
          var btnImg_1 = [];
          newData.imgs.forEach(function (newImg, imgIndex) {
            if (!oldData.imgs) return (btnImg_1[imgIndex] = newImg);
            var oldImg = oldData.imgs[imgIndex];
            // �����ֵ������
            if (!oldImg) btnImg_1[imgIndex] = newImg;
            // ���������û��ͼƬ
            else if (!_this.cellImgs[btnIndex][imgIndex])
              btnImg_1[imgIndex] = newImg;
            // �����ֵ�;�ֵ��src�����
            else if (newImg.src !== oldImg.src) btnImg_1[imgIndex] = newImg;
          });
          willUpdate[btnIndex] = btnImg_1;
        }
        return _this.init(willUpdate);
      });
    };
    /**
     * ��ʼ�� canvas �齱
     * @param willUpdateImgs ��Ҫ���µ�ͼƬ
     */
    LuckyGrid.prototype.init = function (willUpdateImgs) {
      var _this = this;
      var _a = this,
        config = _a.config,
        ctx = _a.ctx,
        button = _a.button;
      this.setHTMLFontSize();
      this.setDpr();
      this.zoomCanvas();
      var endCallBack = function () {
        // ��ʼ�״���Ⱦ
        _this.draw();
        // �н���ʶ��ʼ����
        _this.demo && _this.walk();
        // �����ť��ʼ, ���ﲻ��ʹ�� addEventListener
        if (button && config.canvasElement)
          config.canvasElement.onclick = function (e) {
            var _a;
            var _b = _this.getGeometricProperty([
                button.x,
                button.y,
                button.col || 1,
                button.row || 1,
              ]),
              x = _b[0],
              y = _b[1],
              width = _b[2],
              height = _b[3];
            ctx.beginPath();
            ctx.rect(x, y, width, height);
            if (!ctx.isPointInPath(e.offsetX, e.offsetY)) return;
            if (_this.startTime) return;
            (_a = _this.startCallback) === null || _a === void 0
              ? void 0
              : _a.call(_this, e);
          };
      };
      // ͬ������ͼƬ
      var num = 0,
        sum = 0;
      if (isExpectType(willUpdateImgs, "array")) {
        this.draw(); // �Ȼ�һ�η�ֹ��˸, ��Ϊ����ͼƬ���첽��
        willUpdateImgs.forEach(function (imgs, cellIndex) {
          if (!imgs) return false;
          imgs.forEach(function (imgInfo, imgIndex) {
            sum++;
            _this.loadAndCacheImg(cellIndex, imgIndex, function () {
              num++;
              if (sum === num) endCallBack.call(_this);
            });
          });
        });
      }
      if (!sum) endCallBack.call(this);
    };
    /**
     * ��������ĳһ��ͼƬ��������ʵ����Ⱦ����
     * @param { number } prizeIndex ��Ʒ����
     * @param { number } imgIndex ��ƷͼƬ����
     * @param { Function } callBack ͼƬ������ϻص�
     */
    LuckyGrid.prototype.loadAndCacheImg = function (
      prizeIndex,
      imgIndex,
      callBack
    ) {
      return __awaiter(this, void 0, void 0, function () {
        var prize, imgInfo, _a, _b, activeImg;
        var _c;
        return __generator(this, function (_d) {
          switch (_d.label) {
            case 0:
              prize = this.cells[prizeIndex];
              if (!prize || !prize.imgs) return [2 /*return*/];
              imgInfo = prize.imgs[imgIndex];
              if (!this.cellImgs[prizeIndex]) this.cellImgs[prizeIndex] = [];
              // ���� defaultImg Ĭ��ͼƬ
              _a = this.cellImgs[prizeIndex];
              _b = imgIndex;
              _c = {};
              return [4 /*yield*/, this.loadImg(imgInfo.src, imgInfo)];
            case 1:
              // ���� defaultImg Ĭ��ͼƬ
              _a[_b] = ((_c.defaultImg = _d.sent()), _c);
              if (!imgInfo.hasOwnProperty("activeSrc")) return [3 /*break*/, 3];
              return [4 /*yield*/, this.loadImg(imgInfo.activeSrc, imgInfo)];
            case 2:
              activeImg = _d.sent();
              this.cellImgs[prizeIndex][imgIndex].activeImg = activeImg;
              _d.label = 3;
            case 3:
              callBack.call(this);
              return [2 /*return*/];
          }
        });
      });
    };
    /**
     * ����ͼƬ����Ⱦ����
     * @param imgObj ͼƬ��ǩԪ��
     * @param imgInfo ͼƬ��Ϣ
     * @param cell ������Ϣ
     * @return [��Ⱦ����, ��Ⱦ�߶�]
     */
    LuckyGrid.prototype.computedWidthAndHeight = function (
      imgObj,
      imgInfo,
      cell
    ) {
      // �������õ���ʽ����ͼƬ����ʵ����
      if (!imgInfo.width && !imgInfo.height) {
        // ���û�����ÿ���, ��ʹ��ͼƬ�����Ŀ���
        return [imgObj.width, imgObj.height];
      } else if (imgInfo.width && !imgInfo.height) {
        // ���ֻ��д�˿���, û��д�߶�
        var trueWidth = this.getWidth(imgInfo.width, cell.col);
        // �Ǹ߶Ⱦ����ſ��Ƚ��еȱ�����
        return [trueWidth, imgObj.height * (trueWidth / imgObj.width)];
      } else if (!imgInfo.width && imgInfo.height) {
        // ���ֻ��д�˿���, û��д�߶�
        var trueHeight = this.getHeight(imgInfo.height, cell.row);
        // �ǿ��Ⱦ����Ÿ߶Ƚ��еȱ�����
        return [imgObj.width * (trueHeight / imgObj.height), trueHeight];
      }
      // ������Ⱥ͸߶ȶ���д��, �ͷֱ����
      return [
        this.getWidth(imgInfo.width, cell.col),
        this.getHeight(imgInfo.height, cell.row),
      ];
    };
    /**
     * ���ƾŹ���齱
     */
    LuckyGrid.prototype.draw = function () {
      var _this = this;
      var _a, _b;
      var _c = this,
        config = _c.config,
        ctx = _c.ctx,
        _defaultConfig = _c._defaultConfig,
        _defaultStyle = _c._defaultStyle,
        _activeStyle = _c._activeStyle;
      // ��������ǰ�ص�
      (_a = config.beforeDraw) === null || _a === void 0
        ? void 0
        : _a.call(this, ctx);
      // ��ջ���
      ctx.clearRect(0, 0, config.width, config.height);
      // �ϲ���Ʒ�Ͱ�ť
      this.cells = __spreadArrays(this.prizes);
      if (this.button) this.cells[this.cols * this.rows - 1] = this.button;
      this.cells.forEach(function (cell) {
        cell.col = cell.col || 1;
        cell.row = cell.row || 1;
      });
      // �����ȡ��Ʒ����ļ�����Ϣ
      this.prizeArea = this.blocks.reduce(
        function (_a, block) {
          var x = _a.x,
            y = _a.y,
            w = _a.w,
            h = _a.h;
          var _b = computePadding(block).map(function (n) {
              return ~~n;
            }),
            paddingTop = _b[0],
            paddingBottom = _b[1],
            paddingLeft = _b[2],
            paddingRight = _b[3];
          var r = block.borderRadius ? _this.getLength(block.borderRadius) : 0;
          // ���Ʊ߿�
          drawRoundRect(
            ctx,
            x,
            y,
            w,
            h,
            r,
            _this.handleBackground(x, y, w, h, block.background)
          );
          return {
            x: x + paddingLeft,
            y: y + paddingTop,
            w: w - paddingLeft - paddingRight,
            h: h - paddingTop - paddingBottom,
          };
        },
        { x: 0, y: 0, w: config.width, h: config.height }
      );
      // ���㵥һ��Ʒ���ӵĿ��Ⱥ͸߶�
      this.cellWidth =
        (this.prizeArea.w - _defaultConfig.gutter * (this.cols - 1)) /
        this.cols;
      this.cellHeight =
        (this.prizeArea.h - _defaultConfig.gutter * (this.rows - 1)) /
        this.rows;
      // �������и���
      this.cells.forEach(function (prize, cellIndex) {
        var _a = _this.getGeometricProperty([
            prize.x,
            prize.y,
            prize.col,
            prize.row,
          ]),
          x = _a[0],
          y = _a[1],
          width = _a[2],
          height = _a[3];
        var isActive = cellIndex === _this.currIndex % _this.prizes.length >> 0;
        // ������Ӱ (��ʱ����any, �������Ҫ�Ż�)
        var shadow = (
          isActive ? _activeStyle.shadow : prize.shadow || _defaultStyle.shadow
        )
          .replace(/px/g, "") // ���px�ַ���
          .split(",")[0]
          .split(" ") // ��ֹ�������������Ӱ, ��ȡ��һ����Ӱ
          .map(function (n, i) {
            return i < 3 ? Number(n) : n;
          }); // �������ǰ����ֵ*���ر�
        // ������Ӱ
        if (shadow.length === 4) {
          ctx.shadowColor = shadow[3];
          ctx.shadowOffsetX = shadow[0] * config.dpr;
          ctx.shadowOffsetY = shadow[1] * config.dpr;
          ctx.shadowBlur = shadow[2];
          // ����(����+��Ӱ)��λ��, ����ʹ�ö��������
          shadow[0] > 0
            ? (width -= shadow[0])
            : ((width += shadow[0]), (x -= shadow[0]));
          shadow[1] > 0
            ? (height -= shadow[1])
            : ((height += shadow[1]), (y -= shadow[1]));
        }
        drawRoundRect(
          ctx,
          x,
          y,
          width,
          height,
          _this.getLength(
            prize.borderRadius ? prize.borderRadius : _defaultStyle.borderRadius
          ),
          _this.handleBackground(
            x,
            y,
            width,
            height,
            prize.background,
            isActive
          )
        );
        // �����Ӱ
        ctx.shadowColor = "rgba(0, 0, 0, 0)";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        // ����ͼƬ
        prize.imgs &&
          prize.imgs.forEach(function (imgInfo, imgIndex) {
            if (!_this.cellImgs[cellIndex]) return false;
            var cellImg = _this.cellImgs[cellIndex][imgIndex];
            if (!cellImg) return false;
            var renderImg =
              (isActive && cellImg.activeImg) || cellImg.defaultImg;
            var _a = _this.computedWidthAndHeight(renderImg, imgInfo, prize),
              trueWidth = _a[0],
              trueHeight = _a[1];
            var _b = [
                x + _this.getOffsetX(trueWidth, prize.col),
                y + _this.getHeight(imgInfo.top, prize.row),
              ],
              imgX = _b[0],
              imgY = _b[1];
            var drawImg;
            if (_this.config.flag === "WEB") {
              // �������ֱ�ӻ��Ʊ�ǩ����
              drawImg = renderImg;
            } else if (
              ["MINI-WX", "UNI-H5", "UNI-MINI-WX"].includes(_this.config.flag)
            ) {
              // С������ֱ�ӻ���һ��·��
              drawImg = renderImg.path;
            }
            ctx.drawImage(drawImg, imgX, imgY, trueWidth, trueHeight);
          });
        // ��������
        prize.fonts &&
          prize.fonts.forEach(function (font) {
            // ������ʽ
            var style =
              isActive && _activeStyle.fontStyle
                ? _activeStyle.fontStyle
                : font.fontStyle || _defaultStyle.fontStyle;
            // ����Ӵ�
            var fontWeight =
              isActive && _activeStyle.fontWeight
                ? _activeStyle.fontWeight
                : font.fontWeight || _defaultStyle.fontWeight;
            // �����С
            var size =
              isActive && _activeStyle.fontSize
                ? _this.getLength(_activeStyle.fontSize)
                : _this.getLength(font.fontSize || _defaultStyle.fontSize);
            // �����и�
            var lineHeight =
              isActive && _activeStyle.lineHeight
                ? _activeStyle.lineHeight
                : font.lineHeight ||
                  _defaultStyle.lineHeight ||
                  font.fontSize ||
                  _defaultStyle.fontSize;
            ctx.font = fontWeight + " " + size + "px " + style;
            ctx.fillStyle =
              isActive && _activeStyle.fontColor
                ? _activeStyle.fontColor
                : font.fontColor || _defaultStyle.fontColor;
            var lines = [],
              text = String(font.text);
            // �������ֻ���
            if (
              font.hasOwnProperty("wordWrap")
                ? font.wordWrap
                : _defaultStyle.wordWrap
            ) {
              text = removeEnter(text);
              var str = "";
              for (var i = 0; i < text.length; i++) {
                str += text[i];
                var currWidth = ctx.measureText(str).width;
                var maxWidth = _this.getWidth(
                  font.lengthLimit || _defaultStyle.lengthLimit,
                  prize.col
                );
                if (currWidth > maxWidth) {
                  lines.push(str.slice(0, -1));
                  str = text[i];
                }
              }
              if (str) lines.push(str);
              if (!lines.length) lines.push(text);
            } else {
              lines = text.split("\n");
            }
            lines.forEach(function (line, lineIndex) {
              ctx.fillText(
                line,
                x + _this.getOffsetX(ctx.measureText(line).width, prize.col),
                y +
                  _this.getHeight(font.top, prize.row) +
                  (lineIndex + 1) * _this.getLength(lineHeight)
              );
            });
          });
      });
      // �������ƺ�ص�
      (_b = config.afterDraw) === null || _b === void 0
        ? void 0
        : _b.call(this, ctx);
    };
    /**
     * ��������ɫ
     * @param x
     * @param y
     * @param width
     * @param height
     * @param background
     * @param isActive
     */
    LuckyGrid.prototype.handleBackground = function (
      x,
      y,
      width,
      height,
      background,
      isActive
    ) {
      if (isActive === void 0) {
        isActive = false;
      }
      var _a = this,
        ctx = _a.ctx,
        _defaultStyle = _a._defaultStyle,
        _activeStyle = _a._activeStyle;
      background = isActive
        ? _activeStyle.background
        : background || _defaultStyle.background;
      // �������Խ���
      if (background.includes("linear-gradient")) {
        background = getLinearGradient(ctx, x, y, width, height, background);
      }
      return background;
    };
    /**
     * ���Ⱪ¶: ��ʼ�齱����
     */
    LuckyGrid.prototype.play = function () {
      console.log('play1')
      var clearInterval = this.clearInterval;
      if (this.startTime) return;
      clearInterval(this.timer);
      this.startTime = Date.now();
      this.prizeFlag = undefined;
      this.run();
    };
    /**
     * ���Ⱪ¶: ����ֹͣ����
     * @param index �н�����
     */
    LuckyGrid.prototype.stop = function (index) {
      this.prizeFlag = index % this.prizes.length;
    };
    /**
     * ʵ�ʿ�ʼִ�з���
     * @param num ��¼֡����ִ�ж��ٴ�
     */
    LuckyGrid.prototype.run = function (num) {
      if (num === void 0) {
        num = 0;
      }
      var _a = this,
        rAF = _a.rAF,
        currIndex = _a.currIndex,
        prizes = _a.prizes,
        prizeFlag = _a.prizeFlag,
        startTime = _a.startTime,
        _defaultConfig = _a._defaultConfig;
      var interval = Date.now() - startTime;
      // ����ȫ��ת, ��ֹͣ
      if (
        interval >= _defaultConfig.accelerationTime &&
        prizeFlag !== undefined
      ) {
        // ��¼֡��
        this.FPS = interval / num;
        // ��¼��ʼֹͣ��ʱ���
        this.endTime = Date.now();
        // ��¼��ʼֹͣ������
        this.stopIndex = currIndex;
        // ��������ֹͣ������
        var i = 0;
        while (++i) {
          var endIndex = prizes.length * i + prizeFlag - (currIndex >> 0);
          var currSpeed =
            quad.easeOut(
              this.FPS,
              this.stopIndex,
              endIndex,
              _defaultConfig.decelerationTime
            ) - this.stopIndex;
          if (currSpeed > _defaultConfig.speed) {
            this.endIndex = endIndex;
            break;
          }
        }
        return this.slowDown();
      }
      this.currIndex =
        (currIndex +
          quad.easeIn(
            interval,
            0.1,
            _defaultConfig.speed,
            _defaultConfig.accelerationTime
          )) %
        prizes.length;
      this.draw();
      rAF(this.run.bind(this, num + 1));
    };
    /**
     * ����ֹͣ�ķ���
     */
    LuckyGrid.prototype.slowDown = function () {
      var _a;
      var _b = this,
        rAF = _b.rAF,
        prizes = _b.prizes,
        prizeFlag = _b.prizeFlag,
        stopIndex = _b.stopIndex,
        endIndex = _b.endIndex,
        _defaultConfig = _b._defaultConfig;
      var interval = Date.now() - this.endTime;
      if (interval > _defaultConfig.decelerationTime) {
        this.startTime = 0;
        (_a = this.endCallback) === null || _a === void 0
          ? void 0
          : _a.call(
              this,
              __assign(
                {},
                prizes.find(function (prize, index) {
                  return index === prizeFlag;
                })
              )
            );
        return;
      }
      this.currIndex =
        quad.easeOut(
          interval,
          stopIndex,
          endIndex,
          _defaultConfig.decelerationTime
        ) % prizes.length;
      this.draw();
      rAF(this.slowDown.bind(this));
    };
    /**
     * �����н���ʶ�Զ�����
     */
    LuckyGrid.prototype.walk = function () {
      var _this = this;
      var _a = this,
        setInterval = _a.setInterval,
        clearInterval = _a.clearInterval;
      clearInterval(this.timer);
      this.timer = setInterval(function () {
        _this.currIndex += 1;
        _this.draw();
      }, 1300);
    };
    /**
     * ���㽱Ʒ���ӵļ�������
     * @param { array } [...��������, col, row]
     * @return { array } [...��ʵ����, width, height]
     */
    LuckyGrid.prototype.getGeometricProperty = function (_a) {
      var x = _a[0],
        y = _a[1],
        col = _a[2],
        row = _a[3];
      var _b = this,
        cellWidth = _b.cellWidth,
        cellHeight = _b.cellHeight;
      var gutter = this._defaultConfig.gutter;
      var res = [
        this.prizeArea.x + (cellWidth + gutter) * x,
        this.prizeArea.y + (cellHeight + gutter) * y,
      ];
      col &&
        row &&
        res.push(
          cellWidth * col + gutter * (col - 1),
          cellHeight * row + gutter * (row - 1)
        );
      return res;
    };
    /**
     * ת������ȡ����
     * @param width ��Ҫת���Ŀ���
     * @param col ����ϲ��ĸ���
     * @return ������Կ���
     */
    LuckyGrid.prototype.getWidth = function (width, col) {
      if (col === void 0) {
        col = 1;
      }
      if (isExpectType(width, "number")) return width;
      if (isExpectType(width, "string"))
        return this.changeUnits(
          width,
          this.cellWidth * col + this._defaultConfig.gutter * (col - 1)
        );
      return 0;
    };
    /**
     * ת������ȡ�߶�
     * @param height ��Ҫת���ĸ߶�
     * @param row ����ϲ��ĸ���
     * @return ������Ը߶�
     */
    LuckyGrid.prototype.getHeight = function (height, row) {
      if (row === void 0) {
        row = 1;
      }
      if (isExpectType(height, "number")) return height;
      if (isExpectType(height, "string"))
        return this.changeUnits(
          height,
          this.cellHeight * row + this._defaultConfig.gutter * (row - 1)
        );
      return 0;
    };
    /**
     * ��ȡ���(����)X����
     * @param width
     * @param col
     */
    LuckyGrid.prototype.getOffsetX = function (width, col) {
      if (col === void 0) {
        col = 1;
      }
      return (
        (this.cellWidth * col +
          this._defaultConfig.gutter * (col - 1) -
          width) /
        2
      );
    };
    return LuckyGrid;
  })(Lucky);

  exports.LuckyGrid = LuckyGrid;
  exports.LuckyWheel = LuckyWheel;

  Object.defineProperty(exports, "__esModule", { value: true });
});
