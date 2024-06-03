!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
        ? (exports.mpegts = t())
        : (e.mpegts = t());
})(window, function () {
  return (function (e) {
    var t = {};
    function i(n) {
      if (t[n]) return t[n].exports;
      var r = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
    }
    return (
      (i.m = e),
      (i.c = t),
      (i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (i.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (i.t = function (e, t) {
        if ((1 & t && (e = i(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (i.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            i.d(
              n,
              r,
              function (t) {
                return e[t];
              }.bind(null, r),
            );
        return n;
      }),
      (i.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return i.d(t, "a", t), t;
      }),
      (i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (i.p = ""),
      i((i.s = 14))
    );
  })([
    function (e, t, i) {
      "use strict";
      var n = i(6),
        r = i.n(n),
        a = (function () {
          function e() {}
          return (
            (e.e = function (t, i) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var n = "[" + t + "] > " + i;
              e.ENABLE_CALLBACK && e.emitter.emit("log", "error", n),
                e.ENABLE_ERROR &&
                  (console.error
                    ? console.error(n)
                    : console.warn
                      ? console.warn(n)
                      : console.log(n));
            }),
            (e.i = function (t, i) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var n = "[" + t + "] > " + i;
              e.ENABLE_CALLBACK && e.emitter.emit("log", "info", n),
                e.ENABLE_INFO &&
                  (console.info ? console.info(n) : console.log(n));
            }),
            (e.w = function (t, i) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var n = "[" + t + "] > " + i;
              e.ENABLE_CALLBACK && e.emitter.emit("log", "warn", n),
                e.ENABLE_WARN &&
                  (console.warn ? console.warn(n) : console.log(n));
            }),
            (e.d = function (t, i) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var n = "[" + t + "] > " + i;
              e.ENABLE_CALLBACK && e.emitter.emit("log", "debug", n),
                e.ENABLE_DEBUG &&
                  (console.debug ? console.debug(n) : console.log(n));
            }),
            (e.v = function (t, i) {
              (t && !e.FORCE_GLOBAL_TAG) || (t = e.GLOBAL_TAG);
              var n = "[" + t + "] > " + i;
              e.ENABLE_CALLBACK && e.emitter.emit("log", "verbose", n),
                e.ENABLE_VERBOSE && console.log(n);
            }),
            e
          );
        })();
      (a.GLOBAL_TAG = "mpegts.js"),
        (a.FORCE_GLOBAL_TAG = !1),
        (a.ENABLE_ERROR = !0),
        (a.ENABLE_INFO = !0),
        (a.ENABLE_WARN = !0),
        (a.ENABLE_DEBUG = !0),
        (a.ENABLE_VERBOSE = !0),
        (a.ENABLE_CALLBACK = !1),
        (a.emitter = new r.a()),
        (t.a = a);
    },
    function (e, t, i) {
      "use strict";
      t.a = {
        IO_ERROR: "io_error",
        DEMUX_ERROR: "demux_error",
        INIT_SEGMENT: "init_segment",
        MEDIA_SEGMENT: "media_segment",
        LOADING_COMPLETE: "loading_complete",
        RECOVERED_EARLY_EOF: "recovered_early_eof",
        MEDIA_INFO: "media_info",
        METADATA_ARRIVED: "metadata_arrived",
        SCRIPTDATA_ARRIVED: "scriptdata_arrived",
        TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived",
        SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived",
        SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived",
        PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor",
        PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived",
        STATISTICS_INFO: "statistics_info",
        RECOMMEND_SEEKPOINT: "recommend_seekpoint",
      };
    },
    function (e, t, i) {
      "use strict";
      i.d(t, "c", function () {
        return r;
      }),
        i.d(t, "b", function () {
          return a;
        }),
        i.d(t, "a", function () {
          return s;
        });
      var n = i(3),
        r = {
          kIdle: 0,
          kConnecting: 1,
          kBuffering: 2,
          kError: 3,
          kComplete: 4,
        },
        a = {
          OK: "OK",
          EXCEPTION: "Exception",
          HTTP_STATUS_CODE_INVALID: "HttpStatusCodeInvalid",
          CONNECTING_TIMEOUT: "ConnectingTimeout",
          EARLY_EOF: "EarlyEof",
          UNRECOVERABLE_EARLY_EOF: "UnrecoverableEarlyEof",
        },
        s = (function () {
          function e(e) {
            (this._type = e || "undefined"),
              (this._status = r.kIdle),
              (this._needStash = !1),
              (this._onContentLengthKnown = null),
              (this._onURLRedirect = null),
              (this._onDataArrival = null),
              (this._onError = null),
              (this._onComplete = null);
          }
          return (
            (e.prototype.destroy = function () {
              (this._status = r.kIdle),
                (this._onContentLengthKnown = null),
                (this._onURLRedirect = null),
                (this._onDataArrival = null),
                (this._onError = null),
                (this._onComplete = null);
            }),
            (e.prototype.isWorking = function () {
              return (
                this._status === r.kConnecting || this._status === r.kBuffering
              );
            }),
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "status", {
              get: function () {
                return this._status;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "needStashBuffer", {
              get: function () {
                return this._needStash;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onContentLengthKnown", {
              get: function () {
                return this._onContentLengthKnown;
              },
              set: function (e) {
                this._onContentLengthKnown = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onURLRedirect", {
              get: function () {
                return this._onURLRedirect;
              },
              set: function (e) {
                this._onURLRedirect = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onDataArrival", {
              get: function () {
                return this._onDataArrival;
              },
              set: function (e) {
                this._onDataArrival = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onError", {
              get: function () {
                return this._onError;
              },
              set: function (e) {
                this._onError = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onComplete", {
              get: function () {
                return this._onComplete;
              },
              set: function (e) {
                this._onComplete = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.open = function (e, t) {
              throw new n.c("Unimplemented abstract function!");
            }),
            (e.prototype.abort = function () {
              throw new n.c("Unimplemented abstract function!");
            }),
            e
          );
        })();
    },
    function (e, t, i) {
      "use strict";
      i.d(t, "d", function () {
        return a;
      }),
        i.d(t, "a", function () {
          return s;
        }),
        i.d(t, "b", function () {
          return o;
        }),
        i.d(t, "c", function () {
          return d;
        });
      var n,
        r =
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            function i() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        a = (function () {
          function e(e) {
            this._message = e;
          }
          return (
            Object.defineProperty(e.prototype, "name", {
              get: function () {
                return "RuntimeException";
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "message", {
              get: function () {
                return this._message;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.toString = function () {
              return this.name + ": " + this.message;
            }),
            e
          );
        })(),
        s = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            r(t, e),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return "IllegalStateException";
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(a),
        o = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            r(t, e),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return "InvalidArgumentException";
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(a),
        d = (function (e) {
          function t(t) {
            return e.call(this, t) || this;
          }
          return (
            r(t, e),
            Object.defineProperty(t.prototype, "name", {
              get: function () {
                return "NotImplementedException";
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(a);
    },
    function (e, t, i) {
      "use strict";
      var n = {};
      !(function () {
        var e = self.navigator.userAgent.toLowerCase(),
          t =
            /(edge)\/([\w.]+)/.exec(e) ||
            /(opr)[\/]([\w.]+)/.exec(e) ||
            /(chrome)[ \/]([\w.]+)/.exec(e) ||
            /(iemobile)[\/]([\w.]+)/.exec(e) ||
            /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(
              e,
            ) ||
            /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(
              e,
            ) ||
            /(webkit)[ \/]([\w.]+)/.exec(e) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) ||
            /(msie) ([\w.]+)/.exec(e) ||
            (e.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(e)) ||
            (e.indexOf("compatible") < 0 && /(firefox)[ \/]([\w.]+)/.exec(e)) ||
            [],
          i =
            /(ipad)/.exec(e) ||
            /(ipod)/.exec(e) ||
            /(windows phone)/.exec(e) ||
            /(iphone)/.exec(e) ||
            /(kindle)/.exec(e) ||
            /(android)/.exec(e) ||
            /(windows)/.exec(e) ||
            /(mac)/.exec(e) ||
            /(linux)/.exec(e) ||
            /(cros)/.exec(e) ||
            [],
          r = {
            browser: t[5] || t[3] || t[1] || "",
            version: t[2] || t[4] || "0",
            majorVersion: t[4] || t[2] || "0",
            platform: i[0] || "",
          },
          a = {};
        if (r.browser) {
          a[r.browser] = !0;
          var s = r.majorVersion.split(".");
          (a.version = {
            major: parseInt(r.majorVersion, 10),
            string: r.version,
          }),
            s.length > 1 && (a.version.minor = parseInt(s[1], 10)),
            s.length > 2 && (a.version.build = parseInt(s[2], 10));
        }
        if (
          (r.platform && (a[r.platform] = !0),
          (a.chrome || a.opr || a.safari) && (a.webkit = !0),
          a.rv || a.iemobile)
        ) {
          a.rv && delete a.rv;
          (r.browser = "msie"), (a.msie = !0);
        }
        if (a.edge) {
          delete a.edge;
          (r.browser = "msedge"), (a.msedge = !0);
        }
        if (a.opr) {
          (r.browser = "opera"), (a.opera = !0);
        }
        if (a.safari && a.android) {
          (r.browser = "android"), (a.android = !0);
        }
        for (var o in ((a.name = r.browser), (a.platform = r.platform), n))
          n.hasOwnProperty(o) && delete n[o];
        Object.assign(n, a);
      })(),
        (t.a = n);
    },
    function (e, t, i) {
      "use strict";
      t.a = {
        OK: "OK",
        FORMAT_ERROR: "FormatError",
        FORMAT_UNSUPPORTED: "FormatUnsupported",
        CODEC_UNSUPPORTED: "CodecUnsupported",
      };
    },
    function (e, t, i) {
      "use strict";
      var n,
        r = "object" == typeof Reflect ? Reflect : null,
        a =
          r && "function" == typeof r.apply
            ? r.apply
            : function (e, t, i) {
                return Function.prototype.apply.call(e, t, i);
              };
      n =
        r && "function" == typeof r.ownKeys
          ? r.ownKeys
          : Object.getOwnPropertySymbols
            ? function (e) {
                return Object.getOwnPropertyNames(e).concat(
                  Object.getOwnPropertySymbols(e),
                );
              }
            : function (e) {
                return Object.getOwnPropertyNames(e);
              };
      var s =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function o() {
        o.init.call(this);
      }
      (e.exports = o),
        (e.exports.once = function (e, t) {
          return new Promise(function (i, n) {
            function r(i) {
              e.removeListener(t, a), n(i);
            }
            function a() {
              "function" == typeof e.removeListener &&
                e.removeListener("error", r),
                i([].slice.call(arguments));
            }
            g(e, t, a, { once: !0 }),
              "error" !== t &&
                (function (e, t, i) {
                  "function" == typeof e.on && g(e, "error", t, i);
                })(e, r, { once: !0 });
          });
        }),
        (o.EventEmitter = o),
        (o.prototype._events = void 0),
        (o.prototype._eventsCount = 0),
        (o.prototype._maxListeners = void 0);
      var d = 10;
      function h(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e,
          );
      }
      function _(e) {
        return void 0 === e._maxListeners
          ? o.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, i, n) {
        var r, a, s, o;
        if (
          (h(i),
          void 0 === (a = e._events)
            ? ((a = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== a.newListener &&
                (e.emit("newListener", t, i.listener ? i.listener : i),
                (a = e._events)),
              (s = a[t])),
          void 0 === s)
        )
          (s = a[t] = i), ++e._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = a[t] = n ? [i, s] : [s, i])
            : n
              ? s.unshift(i)
              : s.push(i),
          (r = _(e)) > 0 && s.length > r && !s.warned)
        ) {
          s.warned = !0;
          var d = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit",
          );
          (d.name = "MaxListenersExceededWarning"),
            (d.emitter = e),
            (d.type = t),
            (d.count = s.length),
            (o = d),
            console && console.warn && console.warn(o);
        }
        return e;
      }
      function l() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function c(e, t, i) {
        var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i },
          r = l.bind(n);
        return (r.listener = i), (n.wrapFn = r), r;
      }
      function f(e, t, i) {
        var n = e._events;
        if (void 0 === n) return [];
        var r = n[t];
        return void 0 === r
          ? []
          : "function" == typeof r
            ? i
              ? [r.listener || r]
              : [r]
            : i
              ? (function (e) {
                  for (var t = new Array(e.length), i = 0; i < t.length; ++i)
                    t[i] = e[i].listener || e[i];
                  return t;
                })(r)
              : m(r, r.length);
      }
      function p(e) {
        var t = this._events;
        if (void 0 !== t) {
          var i = t[e];
          if ("function" == typeof i) return 1;
          if (void 0 !== i) return i.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var i = new Array(t), n = 0; n < t; ++n) i[n] = e[n];
        return i;
      }
      function g(e, t, i, n) {
        if ("function" == typeof e.on) n.once ? e.once(t, i) : e.on(t, i);
        else {
          if ("function" != typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e,
            );
          e.addEventListener(t, function r(a) {
            n.once && e.removeEventListener(t, r), i(a);
          });
        }
      }
      Object.defineProperty(o, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return d;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          d = e;
        },
      }),
        (o.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (o.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || s(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                ".",
            );
          return (this._maxListeners = e), this;
        }),
        (o.prototype.getMaxListeners = function () {
          return _(this);
        }),
        (o.prototype.emit = function (e) {
          for (var t = [], i = 1; i < arguments.length; i++)
            t.push(arguments[i]);
          var n = "error" === e,
            r = this._events;
          if (void 0 !== r) n = n && void 0 === r.error;
          else if (!n) return !1;
          if (n) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var o = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : ""),
            );
            throw ((o.context = s), o);
          }
          var d = r[e];
          if (void 0 === d) return !1;
          if ("function" == typeof d) a(d, this, t);
          else {
            var h = d.length,
              _ = m(d, h);
            for (i = 0; i < h; ++i) a(_[i], this, t);
          }
          return !0;
        }),
        (o.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (o.prototype.on = o.prototype.addListener),
        (o.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (o.prototype.once = function (e, t) {
          return h(t), this.on(e, c(this, e, t)), this;
        }),
        (o.prototype.prependOnceListener = function (e, t) {
          return h(t), this.prependListener(e, c(this, e, t)), this;
        }),
        (o.prototype.removeListener = function (e, t) {
          var i, n, r, a, s;
          if ((h(t), void 0 === (n = this._events))) return this;
          if (void 0 === (i = n[e])) return this;
          if (i === t || i.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[e],
                n.removeListener &&
                  this.emit("removeListener", e, i.listener || t));
          else if ("function" != typeof i) {
            for (r = -1, a = i.length - 1; a >= 0; a--)
              if (i[a] === t || i[a].listener === t) {
                (s = i[a].listener), (r = a);
                break;
              }
            if (r < 0) return this;
            0 === r
              ? i.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(i, r),
              1 === i.length && (n[e] = i[0]),
              void 0 !== n.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (o.prototype.off = o.prototype.removeListener),
        (o.prototype.removeAllListeners = function (e) {
          var t, i, n;
          if (void 0 === (i = this._events)) return this;
          if (void 0 === i.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== i[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete i[e]),
              this
            );
          if (0 === arguments.length) {
            var r,
              a = Object.keys(i);
            for (n = 0; n < a.length; ++n)
              "removeListener" !== (r = a[n]) && this.removeAllListeners(r);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = i[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n]);
          return this;
        }),
        (o.prototype.listeners = function (e) {
          return f(this, e, !0);
        }),
        (o.prototype.rawListeners = function (e) {
          return f(this, e, !1);
        }),
        (o.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : p.call(e, t);
        }),
        (o.prototype.listenerCount = p),
        (o.prototype.eventNames = function () {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    },
    function (e, t, i) {
      "use strict";
      i.d(t, "d", function () {
        return n;
      }),
        i.d(t, "b", function () {
          return r;
        }),
        i.d(t, "a", function () {
          return a;
        }),
        i.d(t, "c", function () {
          return s;
        });
      var n = function (e, t, i, n, r) {
          (this.dts = e),
            (this.pts = t),
            (this.duration = i),
            (this.originalDts = n),
            (this.isSyncPoint = r),
            (this.fileposition = null);
        },
        r = (function () {
          function e() {
            (this.beginDts = 0),
              (this.endDts = 0),
              (this.beginPts = 0),
              (this.endPts = 0),
              (this.originalBeginDts = 0),
              (this.originalEndDts = 0),
              (this.syncPoints = []),
              (this.firstSample = null),
              (this.lastSample = null);
          }
          return (
            (e.prototype.appendSyncPoint = function (e) {
              (e.isSyncPoint = !0), this.syncPoints.push(e);
            }),
            e
          );
        })(),
        a = (function () {
          function e() {
            this._list = [];
          }
          return (
            (e.prototype.clear = function () {
              this._list = [];
            }),
            (e.prototype.appendArray = function (e) {
              var t = this._list;
              0 !== e.length &&
                (t.length > 0 &&
                  e[0].originalDts < t[t.length - 1].originalDts &&
                  this.clear(),
                Array.prototype.push.apply(t, e));
            }),
            (e.prototype.getLastSyncPointBeforeDts = function (e) {
              if (0 == this._list.length) return null;
              var t = this._list,
                i = 0,
                n = t.length - 1,
                r = 0,
                a = 0,
                s = n;
              for (e < t[0].dts && ((i = 0), (a = s + 1)); a <= s; ) {
                if (
                  (r = a + Math.floor((s - a) / 2)) === n ||
                  (e >= t[r].dts && e < t[r + 1].dts)
                ) {
                  i = r;
                  break;
                }
                t[r].dts < e ? (a = r + 1) : (s = r - 1);
              }
              return this._list[i];
            }),
            e
          );
        })(),
        s = (function () {
          function e(e) {
            (this._type = e),
              (this._list = []),
              (this._lastAppendLocation = -1);
          }
          return (
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "length", {
              get: function () {
                return this._list.length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.isEmpty = function () {
              return 0 === this._list.length;
            }),
            (e.prototype.clear = function () {
              (this._list = []), (this._lastAppendLocation = -1);
            }),
            (e.prototype._searchNearestSegmentBefore = function (e) {
              var t = this._list;
              if (0 === t.length) return -2;
              var i = t.length - 1,
                n = 0,
                r = 0,
                a = i,
                s = 0;
              if (e < t[0].originalBeginDts) return (s = -1);
              for (; r <= a; ) {
                if (
                  (n = r + Math.floor((a - r) / 2)) === i ||
                  (e > t[n].lastSample.originalDts &&
                    e < t[n + 1].originalBeginDts)
                ) {
                  s = n;
                  break;
                }
                t[n].originalBeginDts < e ? (r = n + 1) : (a = n - 1);
              }
              return s;
            }),
            (e.prototype._searchNearestSegmentAfter = function (e) {
              return this._searchNearestSegmentBefore(e) + 1;
            }),
            (e.prototype.append = function (e) {
              var t = this._list,
                i = e,
                n = this._lastAppendLocation,
                r = 0;
              -1 !== n &&
              n < t.length &&
              i.originalBeginDts >= t[n].lastSample.originalDts &&
              (n === t.length - 1 ||
                (n < t.length - 1 &&
                  i.originalBeginDts < t[n + 1].originalBeginDts))
                ? (r = n + 1)
                : t.length > 0 &&
                  (r =
                    this._searchNearestSegmentBefore(i.originalBeginDts) + 1),
                (this._lastAppendLocation = r),
                this._list.splice(r, 0, i);
            }),
            (e.prototype.getLastSegmentBefore = function (e) {
              var t = this._searchNearestSegmentBefore(e);
              return t >= 0 ? this._list[t] : null;
            }),
            (e.prototype.getLastSampleBefore = function (e) {
              var t = this.getLastSegmentBefore(e);
              return null != t ? t.lastSample : null;
            }),
            (e.prototype.getLastSyncPointBefore = function (e) {
              for (
                var t = this._searchNearestSegmentBefore(e),
                  i = this._list[t].syncPoints;
                0 === i.length && t > 0;

              )
                t--, (i = this._list[t].syncPoints);
              return i.length > 0 ? i[i.length - 1] : null;
            }),
            e
          );
        })();
    },
    function (e, t, i) {
      "use strict";
      var n = (function () {
        function e() {
          (this.mimeType = null),
            (this.duration = null),
            (this.hasAudio = null),
            (this.hasVideo = null),
            (this.audioCodec = null),
            (this.videoCodec = null),
            (this.audioDataRate = null),
            (this.videoDataRate = null),
            (this.audioSampleRate = null),
            (this.audioChannelCount = null),
            (this.width = null),
            (this.height = null),
            (this.fps = null),
            (this.profile = null),
            (this.level = null),
            (this.refFrames = null),
            (this.chromaFormat = null),
            (this.sarNum = null),
            (this.sarDen = null),
            (this.metadata = null),
            (this.segments = null),
            (this.segmentCount = null),
            (this.hasKeyframesIndex = null),
            (this.keyframesIndex = null);
        }
        return (
          (e.prototype.isComplete = function () {
            var e =
                !1 === this.hasAudio ||
                (!0 === this.hasAudio &&
                  null != this.audioCodec &&
                  null != this.audioSampleRate &&
                  null != this.audioChannelCount),
              t =
                !1 === this.hasVideo ||
                (!0 === this.hasVideo &&
                  null != this.videoCodec &&
                  null != this.width &&
                  null != this.height &&
                  null != this.fps &&
                  null != this.profile &&
                  null != this.level &&
                  null != this.refFrames &&
                  null != this.chromaFormat &&
                  null != this.sarNum &&
                  null != this.sarDen);
            return null != this.mimeType && e && t;
          }),
          (e.prototype.isSeekable = function () {
            return !0 === this.hasKeyframesIndex;
          }),
          (e.prototype.getNearestKeyframe = function (e) {
            if (null == this.keyframesIndex) return null;
            var t = this.keyframesIndex,
              i = this._search(t.times, e);
            return {
              index: i,
              milliseconds: t.times[i],
              fileposition: t.filepositions[i],
            };
          }),
          (e.prototype._search = function (e, t) {
            var i = 0,
              n = e.length - 1,
              r = 0,
              a = 0,
              s = n;
            for (t < e[0] && ((i = 0), (a = s + 1)); a <= s; ) {
              if (
                (r = a + Math.floor((s - a) / 2)) === n ||
                (t >= e[r] && t < e[r + 1])
              ) {
                i = r;
                break;
              }
              e[r] < t ? (a = r + 1) : (s = r - 1);
            }
            return i;
          }),
          e
        );
      })();
      t.a = n;
    },
    function (e, t, i) {
      "use strict";
      var n = i(6),
        r = i.n(n),
        a = i(0),
        s = (function () {
          function e() {}
          return (
            Object.defineProperty(e, "forceGlobalTag", {
              get: function () {
                return a.a.FORCE_GLOBAL_TAG;
              },
              set: function (t) {
                (a.a.FORCE_GLOBAL_TAG = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "globalTag", {
              get: function () {
                return a.a.GLOBAL_TAG;
              },
              set: function (t) {
                (a.a.GLOBAL_TAG = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "enableAll", {
              get: function () {
                return (
                  a.a.ENABLE_VERBOSE &&
                  a.a.ENABLE_DEBUG &&
                  a.a.ENABLE_INFO &&
                  a.a.ENABLE_WARN &&
                  a.a.ENABLE_ERROR
                );
              },
              set: function (t) {
                (a.a.ENABLE_VERBOSE = t),
                  (a.a.ENABLE_DEBUG = t),
                  (a.a.ENABLE_INFO = t),
                  (a.a.ENABLE_WARN = t),
                  (a.a.ENABLE_ERROR = t),
                  e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "enableDebug", {
              get: function () {
                return a.a.ENABLE_DEBUG;
              },
              set: function (t) {
                (a.a.ENABLE_DEBUG = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "enableVerbose", {
              get: function () {
                return a.a.ENABLE_VERBOSE;
              },
              set: function (t) {
                (a.a.ENABLE_VERBOSE = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "enableInfo", {
              get: function () {
                return a.a.ENABLE_INFO;
              },
              set: function (t) {
                (a.a.ENABLE_INFO = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "enableWarn", {
              get: function () {
                return a.a.ENABLE_WARN;
              },
              set: function (t) {
                (a.a.ENABLE_WARN = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e, "enableError", {
              get: function () {
                return a.a.ENABLE_ERROR;
              },
              set: function (t) {
                (a.a.ENABLE_ERROR = t), e._notifyChange();
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.getConfig = function () {
              return {
                globalTag: a.a.GLOBAL_TAG,
                forceGlobalTag: a.a.FORCE_GLOBAL_TAG,
                enableVerbose: a.a.ENABLE_VERBOSE,
                enableDebug: a.a.ENABLE_DEBUG,
                enableInfo: a.a.ENABLE_INFO,
                enableWarn: a.a.ENABLE_WARN,
                enableError: a.a.ENABLE_ERROR,
                enableCallback: a.a.ENABLE_CALLBACK,
              };
            }),
            (e.applyConfig = function (e) {
              (a.a.GLOBAL_TAG = e.globalTag),
                (a.a.FORCE_GLOBAL_TAG = e.forceGlobalTag),
                (a.a.ENABLE_VERBOSE = e.enableVerbose),
                (a.a.ENABLE_DEBUG = e.enableDebug),
                (a.a.ENABLE_INFO = e.enableInfo),
                (a.a.ENABLE_WARN = e.enableWarn),
                (a.a.ENABLE_ERROR = e.enableError),
                (a.a.ENABLE_CALLBACK = e.enableCallback);
            }),
            (e._notifyChange = function () {
              var t = e.emitter;
              if (t.listenerCount("change") > 0) {
                var i = e.getConfig();
                t.emit("change", i);
              }
            }),
            (e.registerListener = function (t) {
              e.emitter.addListener("change", t);
            }),
            (e.removeListener = function (t) {
              e.emitter.removeListener("change", t);
            }),
            (e.addLogListener = function (t) {
              a.a.emitter.addListener("log", t),
                a.a.emitter.listenerCount("log") > 0 &&
                  ((a.a.ENABLE_CALLBACK = !0), e._notifyChange());
            }),
            (e.removeLogListener = function (t) {
              a.a.emitter.removeListener("log", t),
                0 === a.a.emitter.listenerCount("log") &&
                  ((a.a.ENABLE_CALLBACK = !1), e._notifyChange());
            }),
            e
          );
        })();
      (s.emitter = new r.a()), (t.a = s);
    },
    function (e, t, i) {
      "use strict";
      var n = i(6),
        r = i.n(n),
        a = i(0),
        s = i(4),
        o = i(8);
      function d(e, t, i) {
        var n = e;
        if (t + i < n.length) {
          for (; i--; ) if (128 != (192 & n[++t])) return !1;
          return !0;
        }
        return !1;
      }
      var h,
        _ = function (e) {
          for (var t = [], i = e, n = 0, r = e.length; n < r; )
            if (i[n] < 128) t.push(String.fromCharCode(i[n])), ++n;
            else {
              if (i[n] < 192);
              else if (i[n] < 224) {
                if (d(i, n, 1))
                  if ((a = ((31 & i[n]) << 6) | (63 & i[n + 1])) >= 128) {
                    t.push(String.fromCharCode(65535 & a)), (n += 2);
                    continue;
                  }
              } else if (i[n] < 240) {
                if (d(i, n, 2))
                  if (
                    (a =
                      ((15 & i[n]) << 12) |
                      ((63 & i[n + 1]) << 6) |
                      (63 & i[n + 2])) >= 2048 &&
                    55296 != (63488 & a)
                  ) {
                    t.push(String.fromCharCode(65535 & a)), (n += 3);
                    continue;
                  }
              } else if (i[n] < 248) {
                var a;
                if (d(i, n, 3))
                  if (
                    (a =
                      ((7 & i[n]) << 18) |
                      ((63 & i[n + 1]) << 12) |
                      ((63 & i[n + 2]) << 6) |
                      (63 & i[n + 3])) > 65536 &&
                    a < 1114112
                  ) {
                    (a -= 65536),
                      t.push(String.fromCharCode((a >>> 10) | 55296)),
                      t.push(String.fromCharCode((1023 & a) | 56320)),
                      (n += 4);
                    continue;
                  }
              }
              t.push(String.fromCharCode(65533)), ++n;
            }
          return t.join("");
        },
        u = i(3),
        l =
          ((h = new ArrayBuffer(2)),
          new DataView(h).setInt16(0, 256, !0),
          256 === new Int16Array(h)[0]),
        c = (function () {
          function e() {}
          return (
            (e.parseScriptData = function (t, i, n) {
              var r = {};
              try {
                var s = e.parseValue(t, i, n),
                  o = e.parseValue(t, i + s.size, n - s.size);
                r[s.data] = o.data;
              } catch (e) {
                a.a.e("AMF", e.toString());
              }
              return r;
            }),
            (e.parseObject = function (t, i, n) {
              if (n < 3)
                throw new u.a("Data not enough when parse ScriptDataObject");
              var r = e.parseString(t, i, n),
                a = e.parseValue(t, i + r.size, n - r.size),
                s = a.objectEnd;
              return {
                data: { name: r.data, value: a.data },
                size: r.size + a.size,
                objectEnd: s,
              };
            }),
            (e.parseVariable = function (t, i, n) {
              return e.parseObject(t, i, n);
            }),
            (e.parseString = function (e, t, i) {
              if (i < 2) throw new u.a("Data not enough when parse String");
              var n = new DataView(e, t, i).getUint16(0, !l);
              return {
                data: n > 0 ? _(new Uint8Array(e, t + 2, n)) : "",
                size: 2 + n,
              };
            }),
            (e.parseLongString = function (e, t, i) {
              if (i < 4) throw new u.a("Data not enough when parse LongString");
              var n = new DataView(e, t, i).getUint32(0, !l);
              return {
                data: n > 0 ? _(new Uint8Array(e, t + 4, n)) : "",
                size: 4 + n,
              };
            }),
            (e.parseDate = function (e, t, i) {
              if (i < 10) throw new u.a("Data size invalid when parse Date");
              var n = new DataView(e, t, i),
                r = n.getFloat64(0, !l),
                a = n.getInt16(8, !l);
              return { data: new Date((r += 60 * a * 1e3)), size: 10 };
            }),
            (e.parseValue = function (t, i, n) {
              if (n < 1) throw new u.a("Data not enough when parse Value");
              var r,
                s = new DataView(t, i, n),
                o = 1,
                d = s.getUint8(0),
                h = !1;
              try {
                switch (d) {
                  case 0:
                    (r = s.getFloat64(1, !l)), (o += 8);
                    break;
                  case 1:
                    (r = !!s.getUint8(1)), (o += 1);
                    break;
                  case 2:
                    var _ = e.parseString(t, i + 1, n - 1);
                    (r = _.data), (o += _.size);
                    break;
                  case 3:
                    r = {};
                    var c = 0;
                    for (
                      9 == (16777215 & s.getUint32(n - 4, !l)) && (c = 3);
                      o < n - 4;

                    ) {
                      var f = e.parseObject(t, i + o, n - o - c);
                      if (f.objectEnd) break;
                      (r[f.data.name] = f.data.value), (o += f.size);
                    }
                    if (o <= n - 3)
                      9 === (16777215 & s.getUint32(o - 1, !l)) && (o += 3);
                    break;
                  case 8:
                    (r = {}), (o += 4);
                    c = 0;
                    for (
                      9 == (16777215 & s.getUint32(n - 4, !l)) && (c = 3);
                      o < n - 8;

                    ) {
                      var p = e.parseVariable(t, i + o, n - o - c);
                      if (p.objectEnd) break;
                      (r[p.data.name] = p.data.value), (o += p.size);
                    }
                    if (o <= n - 3)
                      9 === (16777215 & s.getUint32(o - 1, !l)) && (o += 3);
                    break;
                  case 9:
                    (r = void 0), (o = 1), (h = !0);
                    break;
                  case 10:
                    r = [];
                    var m = s.getUint32(1, !l);
                    o += 4;
                    for (var g = 0; g < m; g++) {
                      var v = e.parseValue(t, i + o, n - o);
                      r.push(v.data), (o += v.size);
                    }
                    break;
                  case 11:
                    var y = e.parseDate(t, i + 1, n - 1);
                    (r = y.data), (o += y.size);
                    break;
                  case 12:
                    var E = e.parseString(t, i + 1, n - 1);
                    (r = E.data), (o += E.size);
                    break;
                  default:
                    (o = n), a.a.w("AMF", "Unsupported AMF value type " + d);
                }
              } catch (e) {
                a.a.e("AMF", e.toString());
              }
              return { data: r, size: o, objectEnd: h };
            }),
            e
          );
        })(),
        f = (function () {
          function e(e) {
            (this.TAG = "ExpGolomb"),
              (this._buffer = e),
              (this._buffer_index = 0),
              (this._total_bytes = e.byteLength),
              (this._total_bits = 8 * e.byteLength),
              (this._current_word = 0),
              (this._current_word_bits_left = 0);
          }
          return (
            (e.prototype.destroy = function () {
              this._buffer = null;
            }),
            (e.prototype._fillCurrentWord = function () {
              var e = this._total_bytes - this._buffer_index;
              if (e <= 0)
                throw new u.a(
                  "ExpGolomb: _fillCurrentWord() but no bytes available",
                );
              var t = Math.min(4, e),
                i = new Uint8Array(4);
              i.set(
                this._buffer.subarray(
                  this._buffer_index,
                  this._buffer_index + t,
                ),
              ),
                (this._current_word = new DataView(i.buffer).getUint32(0, !1)),
                (this._buffer_index += t),
                (this._current_word_bits_left = 8 * t);
            }),
            (e.prototype.readBits = function (e) {
              if (e > 32)
                throw new u.b(
                  "ExpGolomb: readBits() bits exceeded max 32bits!",
                );
              if (e <= this._current_word_bits_left) {
                var t = this._current_word >>> (32 - e);
                return (
                  (this._current_word <<= e),
                  (this._current_word_bits_left -= e),
                  t
                );
              }
              var i = this._current_word_bits_left ? this._current_word : 0;
              i >>>= 32 - this._current_word_bits_left;
              var n = e - this._current_word_bits_left;
              this._fillCurrentWord();
              var r = Math.min(n, this._current_word_bits_left),
                a = this._current_word >>> (32 - r);
              return (
                (this._current_word <<= r),
                (this._current_word_bits_left -= r),
                (i = (i << r) | a)
              );
            }),
            (e.prototype.readBool = function () {
              return 1 === this.readBits(1);
            }),
            (e.prototype.readByte = function () {
              return this.readBits(8);
            }),
            (e.prototype._skipLeadingZero = function () {
              var e;
              for (e = 0; e < this._current_word_bits_left; e++)
                if (0 != (this._current_word & (2147483648 >>> e)))
                  return (
                    (this._current_word <<= e),
                    (this._current_word_bits_left -= e),
                    e
                  );
              return this._fillCurrentWord(), e + this._skipLeadingZero();
            }),
            (e.prototype.readUEG = function () {
              var e = this._skipLeadingZero();
              return this.readBits(e + 1) - 1;
            }),
            (e.prototype.readSEG = function () {
              var e = this.readUEG();
              return 1 & e ? (e + 1) >>> 1 : -1 * (e >>> 1);
            }),
            e
          );
        })(),
        p = (function () {
          function e() {}
          return (
            (e._ebsp2rbsp = function (e) {
              for (
                var t = e,
                  i = t.byteLength,
                  n = new Uint8Array(i),
                  r = 0,
                  a = 0;
                a < i;
                a++
              )
                (a >= 2 && 3 === t[a] && 0 === t[a - 1] && 0 === t[a - 2]) ||
                  ((n[r] = t[a]), r++);
              return new Uint8Array(n.buffer, 0, r);
            }),
            (e.parseSPS = function (t) {
              for (var i = t.subarray(1, 4), n = "avc1.", r = 0; r < 3; r++) {
                var a = i[r].toString(16);
                a.length < 2 && (a = "0" + a), (n += a);
              }
              var s = e._ebsp2rbsp(t),
                o = new f(s);
              o.readByte();
              var d = o.readByte();
              o.readByte();
              var h = o.readByte();
              o.readUEG();
              var _ = e.getProfileString(d),
                u = e.getLevelString(h),
                l = 1,
                c = 420,
                p = 8,
                m = 8;
              if (
                (100 === d ||
                  110 === d ||
                  122 === d ||
                  244 === d ||
                  44 === d ||
                  83 === d ||
                  86 === d ||
                  118 === d ||
                  128 === d ||
                  138 === d ||
                  144 === d) &&
                (3 === (l = o.readUEG()) && o.readBits(1),
                l <= 3 && (c = [0, 420, 422, 444][l]),
                (p = o.readUEG() + 8),
                (m = o.readUEG() + 8),
                o.readBits(1),
                o.readBool())
              )
                for (var g = 3 !== l ? 8 : 12, v = 0; v < g; v++)
                  o.readBool() &&
                    (v < 6
                      ? e._skipScalingList(o, 16)
                      : e._skipScalingList(o, 64));
              o.readUEG();
              var y = o.readUEG();
              if (0 === y) o.readUEG();
              else if (1 === y) {
                o.readBits(1), o.readSEG(), o.readSEG();
                var E = o.readUEG();
                for (v = 0; v < E; v++) o.readSEG();
              }
              var S = o.readUEG();
              o.readBits(1);
              var b = o.readUEG(),
                A = o.readUEG(),
                R = o.readBits(1);
              0 === R && o.readBits(1), o.readBits(1);
              var T = 0,
                L = 0,
                w = 0,
                D = 0;
              o.readBool() &&
                ((T = o.readUEG()),
                (L = o.readUEG()),
                (w = o.readUEG()),
                (D = o.readUEG()));
              var k = 1,
                C = 1,
                B = 0,
                I = !0,
                P = 0,
                O = 0;
              if (o.readBool()) {
                if (o.readBool()) {
                  var M = o.readByte();
                  M > 0 && M < 16
                    ? ((k = [
                        1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4,
                        3, 2,
                      ][M - 1]),
                      (C = [
                        1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2,
                        1,
                      ][M - 1]))
                    : 255 === M &&
                      ((k = (o.readByte() << 8) | o.readByte()),
                      (C = (o.readByte() << 8) | o.readByte()));
                }
                if (
                  (o.readBool() && o.readBool(),
                  o.readBool() &&
                    (o.readBits(4), o.readBool() && o.readBits(24)),
                  o.readBool() && (o.readUEG(), o.readUEG()),
                  o.readBool())
                ) {
                  var x = o.readBits(32),
                    U = o.readBits(32);
                  (I = o.readBool()), (B = (P = U) / (O = 2 * x));
                }
              }
              var N = 1;
              (1 === k && 1 === C) || (N = k / C);
              var G = 0,
                V = 0;
              0 === l
                ? ((G = 1), (V = 2 - R))
                : ((G = 3 === l ? 1 : 2), (V = (1 === l ? 2 : 1) * (2 - R)));
              var F = 16 * (b + 1),
                j = 16 * (A + 1) * (2 - R);
              (F -= (T + L) * G), (j -= (w + D) * V);
              var z = Math.ceil(F * N);
              return (
                o.destroy(),
                (o = null),
                {
                  codec_mimetype: n,
                  profile_idc: d,
                  level_idc: h,
                  profile_string: _,
                  level_string: u,
                  chroma_format_idc: l,
                  bit_depth: p,
                  bit_depth_luma: p,
                  bit_depth_chroma: m,
                  ref_frames: S,
                  chroma_format: c,
                  chroma_format_string: e.getChromaFormatString(c),
                  frame_rate: { fixed: I, fps: B, fps_den: O, fps_num: P },
                  sar_ratio: { width: k, height: C },
                  codec_size: { width: F, height: j },
                  present_size: { width: z, height: j },
                }
              );
            }),
            (e._skipScalingList = function (e, t) {
              for (var i = 8, n = 8, r = 0; r < t; r++)
                0 !== n && (n = (i + e.readSEG() + 256) % 256),
                  (i = 0 === n ? i : n);
            }),
            (e.getProfileString = function (e) {
              switch (e) {
                case 66:
                  return "Baseline";
                case 77:
                  return "Main";
                case 88:
                  return "Extended";
                case 100:
                  return "High";
                case 110:
                  return "High10";
                case 122:
                  return "High422";
                case 244:
                  return "High444";
                default:
                  return "Unknown";
              }
            }),
            (e.getLevelString = function (e) {
              return (e / 10).toFixed(1);
            }),
            (e.getChromaFormatString = function (e) {
              switch (e) {
                case 420:
                  return "4:2:0";
                case 422:
                  return "4:2:2";
                case 444:
                  return "4:4:4";
                default:
                  return "Unknown";
              }
            }),
            e
          );
        })(),
        m = i(5),
        g = (function () {
          function e() {}
          return (
            (e._ebsp2rbsp = function (e) {
              for (
                var t = e,
                  i = t.byteLength,
                  n = new Uint8Array(i),
                  r = 0,
                  a = 0;
                a < i;
                a++
              )
                (a >= 2 && 3 === t[a] && 0 === t[a - 1] && 0 === t[a - 2]) ||
                  ((n[r] = t[a]), r++);
              return new Uint8Array(n.buffer, 0, r);
            }),
            (e.parseVPS = function (t) {
              var i = e._ebsp2rbsp(t),
                n = new f(i);
              n.readByte(), n.readByte();
              n.readBits(4);
              n.readBits(2);
              n.readBits(6);
              return {
                num_temporal_layers: n.readBits(3) + 1,
                temporal_id_nested: n.readBool(),
              };
            }),
            (e.parseSPS = function (t) {
              var i = e._ebsp2rbsp(t),
                n = new f(i);
              n.readByte(), n.readByte();
              n.readBits(4);
              for (
                var r = n.readBits(3),
                  a = (n.readBool(), n.readBits(2)),
                  s = n.readBool(),
                  o = n.readBits(5),
                  d = n.readByte(),
                  h = n.readByte(),
                  _ = n.readByte(),
                  u = n.readByte(),
                  l = n.readByte(),
                  c = n.readByte(),
                  p = n.readByte(),
                  m = n.readByte(),
                  g = n.readByte(),
                  v = n.readByte(),
                  y = n.readByte(),
                  E = [],
                  S = [],
                  b = 0;
                b < r;
                b++
              )
                E.push(n.readBool()), S.push(n.readBool());
              if (r > 0) for (b = r; b < 8; b++) n.readBits(2);
              for (b = 0; b < r; b++)
                E[b] &&
                  (n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte(),
                  n.readByte()),
                  S[b] && n.readByte();
              n.readUEG();
              var A = n.readUEG();
              3 == A && n.readBits(1);
              var R = n.readUEG(),
                T = n.readUEG();
              n.readBool() &&
                (n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG());
              var L = n.readUEG(),
                w = n.readUEG(),
                D = n.readUEG();
              for (b = n.readBool() ? 0 : r; b <= r; b++)
                n.readUEG(), n.readUEG(), n.readUEG();
              n.readUEG(),
                n.readUEG(),
                n.readUEG(),
                n.readUEG(),
                n.readUEG(),
                n.readUEG();
              if (n.readBool() && n.readBool())
                for (var k = 0; k < 4; k++)
                  for (var C = 0; C < (3 === k ? 2 : 6); C++) {
                    if (n.readBool()) {
                      var B = Math.min(64, 1 << (4 + (k << 1)));
                      k > 1 && n.readSEG();
                      for (b = 0; b < B; b++) n.readSEG();
                    } else n.readUEG();
                  }
              n.readBool(), n.readBool();
              n.readBool() &&
                (n.readByte(), n.readUEG(), n.readUEG(), n.readBool());
              var I = n.readUEG(),
                P = 0;
              for (b = 0; b < I; b++) {
                var O = !1;
                if ((0 !== b && (O = n.readBool()), O)) {
                  b === I && n.readUEG(), n.readBool(), n.readUEG();
                  for (var M = 0, x = 0; x <= P; x++) {
                    var U = n.readBool(),
                      N = !1;
                    U || (N = n.readBool()), (U || N) && M++;
                  }
                  P = M;
                } else {
                  var G = n.readUEG(),
                    V = n.readUEG();
                  P = G + V;
                  for (x = 0; x < G; x++) n.readUEG(), n.readBool();
                  for (x = 0; x < V; x++) n.readUEG(), n.readBool();
                }
              }
              if (n.readBool()) {
                var F = n.readUEG();
                for (b = 0; b < F; b++) {
                  for (x = 0; x < D + 4; x++) n.readBits(1);
                  n.readBits(1);
                }
              }
              var j = 0,
                z = 1,
                H = 1,
                q = !1,
                K = 1,
                W = 1;
              n.readBool(), n.readBool();
              if (n.readBool()) {
                if (n.readBool()) {
                  var X = n.readByte();
                  X > 0 && X < 16
                    ? ((z = [
                        1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4,
                        3, 2,
                      ][X - 1]),
                      (H = [
                        1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2,
                        1,
                      ][X - 1]))
                    : 255 === X && ((z = n.readBits(16)), (H = n.readBits(16)));
                }
                if ((n.readBool() && n.readBool(), n.readBool()))
                  n.readBits(3),
                    n.readBool(),
                    n.readBool() && (n.readByte(), n.readByte(), n.readByte());
                n.readBool() && (n.readUEG(), n.readUEG());
                n.readBool(), n.readBool(), n.readBool();
                if (
                  (n.readBool() &&
                    (n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG()),
                  n.readBool())
                )
                  if (
                    ((K = n.readBits(32)), (W = n.readBits(32)), n.readBool())
                  )
                    if ((n.readUEG(), n.readBool())) {
                      var Y = !1,
                        Z = !1,
                        J = !1;
                      if (((Y = n.readBool()), (Z = n.readBool()), Y || Z)) {
                        (J = n.readBool()) &&
                          (n.readByte(),
                          n.readBits(5),
                          n.readBool(),
                          n.readBits(5));
                        n.readBits(4), n.readBits(4);
                        J && n.readBits(4),
                          n.readBits(5),
                          n.readBits(5),
                          n.readBits(5);
                      }
                      for (b = 0; b <= r; b++) {
                        var Q = n.readBool();
                        q = Q;
                        var $ = !1,
                          ee = 1;
                        Q || ($ = n.readBool());
                        var te = !1;
                        if (
                          ($ ? n.readSEG() : (te = n.readBool()),
                          te || (ee = n.readUEG() + 1),
                          Y)
                        )
                          for (x = 0; x < ee; x++)
                            n.readUEG(),
                              n.readUEG(),
                              J && (n.readUEG(), n.readUEG());
                        if (Z)
                          for (x = 0; x < ee; x++)
                            n.readUEG(),
                              n.readUEG(),
                              J && (n.readUEG(), n.readUEG());
                      }
                    }
                if (n.readBool()) {
                  n.readBool(), n.readBool(), n.readBool();
                  j = n.readUEG();
                  n.readUEG(), n.readUEG(), n.readUEG(), n.readUEG();
                }
              }
              n.readBool();
              var ie = "hvc1." + o + ".1.L" + y + ".B0",
                ne = R,
                re = T,
                ae = 1;
              return (
                1 !== z && 1 !== H && (ae = z / H),
                n.destroy(),
                (n = null),
                {
                  codec_mimetype: ie,
                  level_string: e.getLevelString(y),
                  profile_idc: o,
                  bit_depth: L + 8,
                  ref_frames: 1,
                  chroma_format: A,
                  chroma_format_string: e.getChromaFormatString(A),
                  general_level_idc: y,
                  general_profile_space: a,
                  general_tier_flag: s,
                  general_profile_idc: o,
                  general_profile_compatibility_flags_1: d,
                  general_profile_compatibility_flags_2: h,
                  general_profile_compatibility_flags_3: _,
                  general_profile_compatibility_flags_4: u,
                  general_constraint_indicator_flags_1: l,
                  general_constraint_indicator_flags_2: c,
                  general_constraint_indicator_flags_3: p,
                  general_constraint_indicator_flags_4: m,
                  general_constraint_indicator_flags_5: g,
                  general_constraint_indicator_flags_6: v,
                  min_spatial_segmentation_idc: j,
                  constant_frame_rate: 0,
                  chroma_format_idc: A,
                  bit_depth_luma_minus8: L,
                  bit_depth_chroma_minus8: w,
                  frame_rate: { fixed: q, fps: W / K, fps_den: K, fps_num: W },
                  sar_ratio: { width: z, height: H },
                  codec_size: { width: ne, height: re },
                  present_size: { width: ne * ae, height: re },
                }
              );
            }),
            (e.parsePPS = function (t) {
              var i = e._ebsp2rbsp(t),
                n = new f(i);
              n.readByte(), n.readByte();
              n.readUEG(),
                n.readUEG(),
                n.readBool(),
                n.readBool(),
                n.readBits(3),
                n.readBool(),
                n.readBool(),
                n.readUEG(),
                n.readUEG(),
                n.readSEG(),
                n.readBool(),
                n.readBool();
              if (n.readBool()) n.readUEG();
              n.readSEG(),
                n.readSEG(),
                n.readBool(),
                n.readBool(),
                n.readBool(),
                n.readBool();
              var r = n.readBool(),
                a = n.readBool(),
                s = 1;
              return (
                a && r ? (s = 0) : a ? (s = 3) : r && (s = 2),
                { parallelismType: s }
              );
            }),
            (e.getChromaFormatString = function (e) {
              switch (e) {
                case 0:
                  return "4:0:0";
                case 1:
                  return "4:2:0";
                case 2:
                  return "4:2:2";
                case 3:
                  return "4:4:4";
                default:
                  return "Unknown";
              }
            }),
            (e.getProfileString = function (e) {
              switch (e) {
                case 1:
                  return "Main";
                case 2:
                  return "Main10";
                case 3:
                  return "MainSP";
                case 4:
                  return "Rext";
                case 9:
                  return "SCC";
                default:
                  return "Unknown";
              }
            }),
            (e.getLevelString = function (e) {
              return (e / 30).toFixed(1);
            }),
            e
          );
        })();
      function v(e) {
        return e.byteOffset % 2 == 0 && e.byteLength % 2 == 0;
      }
      function y(e) {
        return e.byteOffset % 4 == 0 && e.byteLength % 4 == 0;
      }
      function E(e, t) {
        for (var i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var S = function (e, t) {
        return (
          e.byteLength === t.byteLength &&
          (y(e) && y(t)
            ? (function (e, t) {
                return E(
                  new Uint32Array(e.buffer, e.byteOffset, e.byteLength / 4),
                  new Uint32Array(t.buffer, t.byteOffset, t.byteLength / 4),
                );
              })(e, t)
            : v(e) && v(t)
              ? (function (e, t) {
                  return E(
                    new Uint16Array(e.buffer, e.byteOffset, e.byteLength / 2),
                    new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2),
                  );
                })(e, t)
              : (function (e, t) {
                  return E(e, t);
                })(e, t))
        );
      };
      var b,
        A = (function () {
          function e(e, t) {
            (this.TAG = "FLVDemuxer"),
              (this._config = t),
              (this._onError = null),
              (this._onMediaInfo = null),
              (this._onMetaDataArrived = null),
              (this._onScriptDataArrived = null),
              (this._onTrackMetadata = null),
              (this._onDataAvailable = null),
              (this._dataOffset = e.dataOffset),
              (this._firstParse = !0),
              (this._dispatch = !1),
              (this._hasAudio = e.hasAudioTrack),
              (this._hasVideo = e.hasVideoTrack),
              (this._hasAudioFlagOverrided = !1),
              (this._hasVideoFlagOverrided = !1),
              (this._audioInitialMetadataDispatched = !1),
              (this._videoInitialMetadataDispatched = !1),
              (this._mediaInfo = new o.a()),
              (this._mediaInfo.hasAudio = this._hasAudio),
              (this._mediaInfo.hasVideo = this._hasVideo),
              (this._metadata = null),
              (this._audioMetadata = null),
              (this._videoMetadata = null),
              (this._naluLengthSize = 4),
              (this._timestampBase = 0),
              (this._timescale = 1e3),
              (this._duration = 0),
              (this._durationOverrided = !1),
              (this._referenceFrameRate = {
                fixed: !0,
                fps: 23.976,
                fps_num: 23976,
                fps_den: 1e3,
              }),
              (this._flvSoundRateTable = [5500, 11025, 22050, 44100, 48e3]),
              (this._mpegSamplingRates = [
                96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3,
                11025, 8e3, 7350,
              ]),
              (this._mpegAudioV10SampleRateTable = [44100, 48e3, 32e3, 0]),
              (this._mpegAudioV20SampleRateTable = [22050, 24e3, 16e3, 0]),
              (this._mpegAudioV25SampleRateTable = [11025, 12e3, 8e3, 0]),
              (this._mpegAudioL1BitRateTable = [
                0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416,
                448, -1,
              ]),
              (this._mpegAudioL2BitRateTable = [
                0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320,
                384, -1,
              ]),
              (this._mpegAudioL3BitRateTable = [
                0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256,
                320, -1,
              ]),
              (this._videoTrack = {
                type: "video",
                id: 1,
                sequenceNumber: 0,
                samples: [],
                length: 0,
              }),
              (this._audioTrack = {
                type: "audio",
                id: 2,
                sequenceNumber: 0,
                samples: [],
                length: 0,
              }),
              (this._littleEndian = (function () {
                var e = new ArrayBuffer(2);
                return (
                  new DataView(e).setInt16(0, 256, !0),
                  256 === new Int16Array(e)[0]
                );
              })());
          }
          return (
            (e.prototype.destroy = function () {
              (this._mediaInfo = null),
                (this._metadata = null),
                (this._audioMetadata = null),
                (this._videoMetadata = null),
                (this._videoTrack = null),
                (this._audioTrack = null),
                (this._onError = null),
                (this._onMediaInfo = null),
                (this._onMetaDataArrived = null),
                (this._onScriptDataArrived = null),
                (this._onTrackMetadata = null),
                (this._onDataAvailable = null);
            }),
            (e.probe = function (e) {
              var t = new Uint8Array(e);
              if (t.byteLength < 9) return { needMoreData: !0 };
              var i = { match: !1 };
              if (70 !== t[0] || 76 !== t[1] || 86 !== t[2] || 1 !== t[3])
                return i;
              var n,
                r,
                a = (4 & t[4]) >>> 2 != 0,
                s = 0 != (1 & t[4]),
                o =
                  ((n = t)[(r = 5)] << 24) |
                  (n[r + 1] << 16) |
                  (n[r + 2] << 8) |
                  n[r + 3];
              return o < 9
                ? i
                : {
                    match: !0,
                    consumed: o,
                    dataOffset: o,
                    hasAudioTrack: a,
                    hasVideoTrack: s,
                  };
            }),
            (e.prototype.bindDataSource = function (e) {
              return (e.onDataArrival = this.parseChunks.bind(this)), this;
            }),
            Object.defineProperty(e.prototype, "onTrackMetadata", {
              get: function () {
                return this._onTrackMetadata;
              },
              set: function (e) {
                this._onTrackMetadata = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onMediaInfo", {
              get: function () {
                return this._onMediaInfo;
              },
              set: function (e) {
                this._onMediaInfo = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onMetaDataArrived", {
              get: function () {
                return this._onMetaDataArrived;
              },
              set: function (e) {
                this._onMetaDataArrived = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onScriptDataArrived", {
              get: function () {
                return this._onScriptDataArrived;
              },
              set: function (e) {
                this._onScriptDataArrived = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onError", {
              get: function () {
                return this._onError;
              },
              set: function (e) {
                this._onError = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onDataAvailable", {
              get: function () {
                return this._onDataAvailable;
              },
              set: function (e) {
                this._onDataAvailable = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "timestampBase", {
              get: function () {
                return this._timestampBase;
              },
              set: function (e) {
                this._timestampBase = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "overridedDuration", {
              get: function () {
                return this._duration;
              },
              set: function (e) {
                (this._durationOverrided = !0),
                  (this._duration = e),
                  (this._mediaInfo.duration = e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "overridedHasAudio", {
              set: function (e) {
                (this._hasAudioFlagOverrided = !0),
                  (this._hasAudio = e),
                  (this._mediaInfo.hasAudio = e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "overridedHasVideo", {
              set: function (e) {
                (this._hasVideoFlagOverrided = !0),
                  (this._hasVideo = e),
                  (this._mediaInfo.hasVideo = e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.resetMediaInfo = function () {
              this._mediaInfo = new o.a();
            }),
            (e.prototype._isInitialMetadataDispatched = function () {
              return this._hasAudio && this._hasVideo
                ? this._audioInitialMetadataDispatched &&
                    this._videoInitialMetadataDispatched
                : this._hasAudio && !this._hasVideo
                  ? this._audioInitialMetadataDispatched
                  : !(this._hasAudio || !this._hasVideo) &&
                    this._videoInitialMetadataDispatched;
            }),
            (e.prototype.parseChunks = function (t, i) {
              if (
                !(
                  this._onError &&
                  this._onMediaInfo &&
                  this._onTrackMetadata &&
                  this._onDataAvailable
                )
              )
                throw new u.a(
                  "Flv: onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified",
                );
              var n = 0,
                r = this._littleEndian;
              if (0 === i) {
                if (!(t.byteLength > 13)) return 0;
                n = e.probe(t).dataOffset;
              }
              this._firstParse &&
                ((this._firstParse = !1),
                i + n !== this._dataOffset &&
                  a.a.w(
                    this.TAG,
                    "First time parsing but chunk byteStart invalid!",
                  ),
                0 !== (s = new DataView(t, n)).getUint32(0, !r) &&
                  a.a.w(this.TAG, "PrevTagSize0 !== 0 !!!"),
                (n += 4));
              for (; n < t.byteLength; ) {
                this._dispatch = !0;
                var s = new DataView(t, n);
                if (n + 11 + 4 > t.byteLength) break;
                var o = s.getUint8(0),
                  d = 16777215 & s.getUint32(0, !r);
                if (n + 11 + d + 4 > t.byteLength) break;
                if (8 === o || 9 === o || 18 === o) {
                  var h = s.getUint8(4),
                    _ = s.getUint8(5),
                    l =
                      s.getUint8(6) |
                      (_ << 8) |
                      (h << 16) |
                      (s.getUint8(7) << 24);
                  0 !== (16777215 & s.getUint32(7, !r)) &&
                    a.a.w(this.TAG, "Meet tag which has StreamID != 0!");
                  var c = n + 11;
                  switch (o) {
                    case 8:
                      this._parseAudioData(t, c, d, l);
                      break;
                    case 9:
                      this._parseVideoData(t, c, d, l, i + n);
                      break;
                    case 18:
                      this._parseScriptData(t, c, d);
                  }
                  var f = s.getUint32(11 + d, !r);
                  f !== 11 + d && a.a.w(this.TAG, "Invalid PrevTagSize " + f),
                    (n += 11 + d + 4);
                } else
                  a.a.w(this.TAG, "Unsupported tag type " + o + ", skipped"),
                    (n += 11 + d + 4);
              }
              return (
                this._isInitialMetadataDispatched() &&
                  this._dispatch &&
                  (this._audioTrack.length || this._videoTrack.length) &&
                  this._onDataAvailable(this._audioTrack, this._videoTrack),
                n
              );
            }),
            (e.prototype._parseScriptData = function (e, t, i) {
              var n = c.parseScriptData(e, t, i);
              if (n.hasOwnProperty("onMetaData")) {
                if (null == n.onMetaData || "object" != typeof n.onMetaData)
                  return void a.a.w(this.TAG, "Invalid onMetaData structure!");
                this._metadata &&
                  a.a.w(this.TAG, "Found another onMetaData tag!"),
                  (this._metadata = n);
                var r = this._metadata.onMetaData;
                if (
                  (this._onMetaDataArrived &&
                    this._onMetaDataArrived(Object.assign({}, r)),
                  "boolean" == typeof r.hasAudio &&
                    !1 === this._hasAudioFlagOverrided &&
                    ((this._hasAudio = r.hasAudio),
                    (this._mediaInfo.hasAudio = this._hasAudio)),
                  "boolean" == typeof r.hasVideo &&
                    !1 === this._hasVideoFlagOverrided &&
                    ((this._hasVideo = r.hasVideo),
                    (this._mediaInfo.hasVideo = this._hasVideo)),
                  "number" == typeof r.audiodatarate &&
                    (this._mediaInfo.audioDataRate = r.audiodatarate),
                  "number" == typeof r.videodatarate &&
                    (this._mediaInfo.videoDataRate = r.videodatarate),
                  "number" == typeof r.width &&
                    (this._mediaInfo.width = r.width),
                  "number" == typeof r.height &&
                    (this._mediaInfo.height = r.height),
                  "number" == typeof r.duration)
                ) {
                  if (!this._durationOverrided) {
                    var s = Math.floor(r.duration * this._timescale);
                    (this._duration = s), (this._mediaInfo.duration = s);
                  }
                } else this._mediaInfo.duration = 0;
                if ("number" == typeof r.framerate) {
                  var o = Math.floor(1e3 * r.framerate);
                  if (o > 0) {
                    var d = o / 1e3;
                    (this._referenceFrameRate.fixed = !0),
                      (this._referenceFrameRate.fps = d),
                      (this._referenceFrameRate.fps_num = o),
                      (this._referenceFrameRate.fps_den = 1e3),
                      (this._mediaInfo.fps = d);
                  }
                }
                if ("object" == typeof r.keyframes) {
                  this._mediaInfo.hasKeyframesIndex = !0;
                  var h = r.keyframes;
                  (this._mediaInfo.keyframesIndex =
                    this._parseKeyframesIndex(h)),
                    (r.keyframes = null);
                } else this._mediaInfo.hasKeyframesIndex = !1;
                (this._dispatch = !1),
                  (this._mediaInfo.metadata = r),
                  a.a.v(this.TAG, "Parsed onMetaData"),
                  this._mediaInfo.isComplete() &&
                    this._onMediaInfo(this._mediaInfo);
              }
              Object.keys(n).length > 0 &&
                this._onScriptDataArrived &&
                this._onScriptDataArrived(Object.assign({}, n));
            }),
            (e.prototype._parseKeyframesIndex = function (e) {
              for (var t = [], i = [], n = 1; n < e.times.length; n++) {
                var r = this._timestampBase + Math.floor(1e3 * e.times[n]);
                t.push(r), i.push(e.filepositions[n]);
              }
              return { times: t, filepositions: i };
            }),
            (e.prototype._parseAudioData = function (e, t, i, n) {
              if (i <= 1)
                a.a.w(
                  this.TAG,
                  "Flv: Invalid audio packet, missing SoundData payload!",
                );
              else if (
                !0 !== this._hasAudioFlagOverrided ||
                !1 !== this._hasAudio
              ) {
                this._littleEndian;
                var r = new DataView(e, t, i).getUint8(0),
                  s = r >>> 4;
                if (2 === s || 10 === s) {
                  var o = 0,
                    d = (12 & r) >>> 2;
                  if (d >= 0 && d <= 4) {
                    o = this._flvSoundRateTable[d];
                    var h = 1 & r,
                      _ = this._audioMetadata,
                      u = this._audioTrack;
                    if (
                      (_ ||
                        (!1 === this._hasAudio &&
                          !1 === this._hasAudioFlagOverrided &&
                          ((this._hasAudio = !0),
                          (this._mediaInfo.hasAudio = !0)),
                        ((_ = this._audioMetadata = {}).type = "audio"),
                        (_.id = u.id),
                        (_.timescale = this._timescale),
                        (_.duration = this._duration),
                        (_.audioSampleRate = o),
                        (_.channelCount = 0 === h ? 1 : 2)),
                      10 === s)
                    ) {
                      var l = this._parseAACAudioData(e, t + 1, i - 1);
                      if (null == l) return;
                      if (0 === l.packetType) {
                        if (_.config) {
                          if (S(l.data.config, _.config)) return;
                          a.a.w(
                            this.TAG,
                            "AudioSpecificConfig has been changed, re-generate initialization segment",
                          );
                        }
                        var c = l.data;
                        (_.audioSampleRate = c.samplingRate),
                          (_.channelCount = c.channelCount),
                          (_.codec = c.codec),
                          (_.originalCodec = c.originalCodec),
                          (_.config = c.config),
                          (_.refSampleDuration =
                            (1024 / _.audioSampleRate) * _.timescale),
                          a.a.v(this.TAG, "Parsed AudioSpecificConfig"),
                          this._isInitialMetadataDispatched()
                            ? this._dispatch &&
                              (this._audioTrack.length ||
                                this._videoTrack.length) &&
                              this._onDataAvailable(
                                this._audioTrack,
                                this._videoTrack,
                              )
                            : (this._audioInitialMetadataDispatched = !0),
                          (this._dispatch = !1),
                          this._onTrackMetadata("audio", _),
                          ((g = this._mediaInfo).audioCodec = _.originalCodec),
                          (g.audioSampleRate = _.audioSampleRate),
                          (g.audioChannelCount = _.channelCount),
                          g.hasVideo
                            ? null != g.videoCodec &&
                              (g.mimeType =
                                'video/x-flv; codecs="' +
                                g.videoCodec +
                                "," +
                                g.audioCodec +
                                '"')
                            : (g.mimeType =
                                'video/x-flv; codecs="' + g.audioCodec + '"'),
                          g.isComplete() && this._onMediaInfo(g);
                      } else if (1 === l.packetType) {
                        var f = this._timestampBase + n,
                          p = {
                            unit: l.data,
                            length: l.data.byteLength,
                            dts: f,
                            pts: f,
                          };
                        u.samples.push(p), (u.length += l.data.length);
                      } else
                        a.a.e(
                          this.TAG,
                          "Flv: Unsupported AAC data type " + l.packetType,
                        );
                    } else if (2 === s) {
                      if (!_.codec) {
                        var g;
                        if (
                          null ==
                          (c = this._parseMP3AudioData(e, t + 1, i - 1, !0))
                        )
                          return;
                        (_.audioSampleRate = c.samplingRate),
                          (_.channelCount = c.channelCount),
                          (_.codec = c.codec),
                          (_.originalCodec = c.originalCodec),
                          (_.refSampleDuration =
                            (1152 / _.audioSampleRate) * _.timescale),
                          a.a.v(this.TAG, "Parsed MPEG Audio Frame Header"),
                          (this._audioInitialMetadataDispatched = !0),
                          this._onTrackMetadata("audio", _),
                          ((g = this._mediaInfo).audioCodec = _.codec),
                          (g.audioSampleRate = _.audioSampleRate),
                          (g.audioChannelCount = _.channelCount),
                          (g.audioDataRate = c.bitRate),
                          g.hasVideo
                            ? null != g.videoCodec &&
                              (g.mimeType =
                                'video/x-flv; codecs="' +
                                g.videoCodec +
                                "," +
                                g.audioCodec +
                                '"')
                            : (g.mimeType =
                                'video/x-flv; codecs="' + g.audioCodec + '"'),
                          g.isComplete() && this._onMediaInfo(g);
                      }
                      var v = this._parseMP3AudioData(e, t + 1, i - 1, !1);
                      if (null == v) return;
                      f = this._timestampBase + n;
                      var y = { unit: v, length: v.byteLength, dts: f, pts: f };
                      u.samples.push(y), (u.length += v.length);
                    }
                  } else
                    this._onError(
                      m.a.FORMAT_ERROR,
                      "Flv: Invalid audio sample rate idx: " + d,
                    );
                } else
                  this._onError(
                    m.a.CODEC_UNSUPPORTED,
                    "Flv: Unsupported audio codec idx: " + s,
                  );
              }
            }),
            (e.prototype._parseAACAudioData = function (e, t, i) {
              if (!(i <= 1)) {
                var n = {},
                  r = new Uint8Array(e, t, i);
                return (
                  (n.packetType = r[0]),
                  0 === r[0]
                    ? (n.data = this._parseAACAudioSpecificConfig(
                        e,
                        t + 1,
                        i - 1,
                      ))
                    : (n.data = r.subarray(1)),
                  n
                );
              }
              a.a.w(
                this.TAG,
                "Flv: Invalid AAC packet, missing AACPacketType or/and Data!",
              );
            }),
            (e.prototype._parseAACAudioSpecificConfig = function (e, t, i) {
              var n,
                r,
                a = new Uint8Array(e, t, i),
                s = null,
                o = 0,
                d = null;
              if (
                ((o = n = a[0] >>> 3),
                (r = ((7 & a[0]) << 1) | (a[1] >>> 7)) < 0 ||
                  r >= this._mpegSamplingRates.length)
              )
                this._onError(
                  m.a.FORMAT_ERROR,
                  "Flv: AAC invalid sampling frequency index!",
                );
              else {
                var h = this._mpegSamplingRates[r],
                  _ = (120 & a[1]) >>> 3;
                if (!(_ < 0 || _ >= 8)) {
                  5 === o &&
                    ((d = ((7 & a[1]) << 1) | (a[2] >>> 7)),
                    (124 & a[2]) >>> 2);
                  var u = self.navigator.userAgent.toLowerCase();
                  return (
                    -1 !== u.indexOf("firefox")
                      ? r >= 6
                        ? ((o = 5), (s = new Array(4)), (d = r - 3))
                        : ((o = 2), (s = new Array(2)), (d = r))
                      : -1 !== u.indexOf("android")
                        ? ((o = 2), (s = new Array(2)), (d = r))
                        : ((o = 5),
                          (d = r),
                          (s = new Array(4)),
                          r >= 6
                            ? (d = r - 3)
                            : 1 === _ &&
                              ((o = 2), (s = new Array(2)), (d = r))),
                    (s[0] = o << 3),
                    (s[0] |= (15 & r) >>> 1),
                    (s[1] = (15 & r) << 7),
                    (s[1] |= (15 & _) << 3),
                    5 === o &&
                      ((s[1] |= (15 & d) >>> 1),
                      (s[2] = (1 & d) << 7),
                      (s[2] |= 8),
                      (s[3] = 0)),
                    {
                      config: s,
                      samplingRate: h,
                      channelCount: _,
                      codec: "mp4a.40." + o,
                      originalCodec: "mp4a.40." + n,
                    }
                  );
                }
                this._onError(
                  m.a.FORMAT_ERROR,
                  "Flv: AAC invalid channel configuration",
                );
              }
            }),
            (e.prototype._parseMP3AudioData = function (e, t, i, n) {
              if (!(i < 4)) {
                this._littleEndian;
                var r = new Uint8Array(e, t, i),
                  s = null;
                if (n) {
                  if (255 !== r[0]) return;
                  var o = (r[1] >>> 3) & 3,
                    d = (6 & r[1]) >> 1,
                    h = (240 & r[2]) >>> 4,
                    _ = (12 & r[2]) >>> 2,
                    u = 3 !== ((r[3] >>> 6) & 3) ? 2 : 1,
                    l = 0,
                    c = 0;
                  switch (o) {
                    case 0:
                      l = this._mpegAudioV25SampleRateTable[_];
                      break;
                    case 2:
                      l = this._mpegAudioV20SampleRateTable[_];
                      break;
                    case 3:
                      l = this._mpegAudioV10SampleRateTable[_];
                  }
                  switch (d) {
                    case 1:
                      34,
                        h < this._mpegAudioL3BitRateTable.length &&
                          (c = this._mpegAudioL3BitRateTable[h]);
                      break;
                    case 2:
                      33,
                        h < this._mpegAudioL2BitRateTable.length &&
                          (c = this._mpegAudioL2BitRateTable[h]);
                      break;
                    case 3:
                      32,
                        h < this._mpegAudioL1BitRateTable.length &&
                          (c = this._mpegAudioL1BitRateTable[h]);
                  }
                  s = {
                    bitRate: c,
                    samplingRate: l,
                    channelCount: u,
                    codec: "mp3",
                    originalCodec: "mp3",
                  };
                } else s = r;
                return s;
              }
              a.a.w(this.TAG, "Flv: Invalid MP3 packet, header missing!");
            }),
            (e.prototype._parseVideoData = function (e, t, i, n, r) {
              if (i <= 1)
                a.a.w(
                  this.TAG,
                  "Flv: Invalid video packet, missing VideoData payload!",
                );
              else if (
                !0 !== this._hasVideoFlagOverrided ||
                !1 !== this._hasVideo
              ) {
                var s = new Uint8Array(e, t, i)[0],
                  o = (240 & s) >>> 4,
                  d = 15 & s;
                if (7 === d)
                  this._parseAVCVideoPacket(e, t + 1, i - 1, n, r, o);
                else {
                  if (12 !== d)
                    return void this._onError(
                      m.a.CODEC_UNSUPPORTED,
                      "Flv: Unsupported codec in video frame: " + d,
                    );
                  this._parseHEVCVideoPacket(e, t + 1, i - 1, n, r, o);
                }
              }
            }),
            (e.prototype._parseAVCVideoPacket = function (e, t, i, n, r, s) {
              if (i < 4)
                a.a.w(
                  this.TAG,
                  "Flv: Invalid AVC packet, missing AVCPacketType or/and CompositionTime",
                );
              else {
                var o = this._littleEndian,
                  d = new DataView(e, t, i),
                  h = d.getUint8(0),
                  _ = ((16777215 & d.getUint32(0, !o)) << 8) >> 8;
                if (0 === h)
                  this._parseAVCDecoderConfigurationRecord(e, t + 4, i - 4);
                else if (1 === h)
                  this._parseAVCVideoData(e, t + 4, i - 4, n, r, s, _);
                else if (2 !== h)
                  return void this._onError(
                    m.a.FORMAT_ERROR,
                    "Flv: Invalid video packet type " + h,
                  );
              }
            }),
            (e.prototype._parseHEVCVideoPacket = function (e, t, i, n, r, s) {
              if (i < 4)
                a.a.w(
                  this.TAG,
                  "Flv: Invalid HEVC packet, missing HEVCPacketType or/and CompositionTime",
                );
              else {
                var o = this._littleEndian,
                  d = new DataView(e, t, i),
                  h = d.getUint8(0),
                  _ = ((16777215 & d.getUint32(0, !o)) << 8) >> 8;
                if (0 === h)
                  this._parseHEVCDecoderConfigurationRecord(e, t + 4, i - 4);
                else if (1 === h)
                  this._parseHEVCVideoData(e, t + 4, i - 4, n, r, s, _);
                else if (2 !== h)
                  return void this._onError(
                    m.a.FORMAT_ERROR,
                    "Flv: Invalid video packet type " + h,
                  );
              }
            }),
            (e.prototype._parseAVCDecoderConfigurationRecord = function (
              e,
              t,
              i,
            ) {
              if (i < 7)
                a.a.w(
                  this.TAG,
                  "Flv: Invalid AVCDecoderConfigurationRecord, lack of data!",
                );
              else {
                var n = this._videoMetadata,
                  r = this._videoTrack,
                  s = this._littleEndian,
                  o = new DataView(e, t, i);
                if (n) {
                  if (void 0 !== n.avcc) {
                    var d = new Uint8Array(e, t, i);
                    if (S(d, n.avcc)) return;
                    a.a.w(
                      this.TAG,
                      "AVCDecoderConfigurationRecord has been changed, re-generate initialization segment",
                    );
                  }
                } else
                  !1 === this._hasVideo &&
                    !1 === this._hasVideoFlagOverrided &&
                    ((this._hasVideo = !0), (this._mediaInfo.hasVideo = !0)),
                    ((n = this._videoMetadata = {}).type = "video"),
                    (n.id = r.id),
                    (n.timescale = this._timescale),
                    (n.duration = this._duration);
                var h = o.getUint8(0),
                  _ = o.getUint8(1);
                o.getUint8(2), o.getUint8(3);
                if (1 === h && 0 !== _)
                  if (
                    ((this._naluLengthSize = 1 + (3 & o.getUint8(4))),
                    3 === this._naluLengthSize || 4 === this._naluLengthSize)
                  ) {
                    var u = 31 & o.getUint8(5);
                    if (0 !== u) {
                      u > 1 &&
                        a.a.w(
                          this.TAG,
                          "Flv: Strange AVCDecoderConfigurationRecord: SPS Count = " +
                            u,
                        );
                      for (var l = 6, c = 0; c < u; c++) {
                        var f = o.getUint16(l, !s);
                        if (((l += 2), 0 !== f)) {
                          var g = new Uint8Array(e, t + l, f);
                          l += f;
                          var v = p.parseSPS(g);
                          if (0 === c) {
                            (n.codecWidth = v.codec_size.width),
                              (n.codecHeight = v.codec_size.height),
                              (n.presentWidth = v.present_size.width),
                              (n.presentHeight = v.present_size.height),
                              (n.profile = v.profile_string),
                              (n.level = v.level_string),
                              (n.bitDepth = v.bit_depth),
                              (n.chromaFormat = v.chroma_format),
                              (n.sarRatio = v.sar_ratio),
                              (n.frameRate = v.frame_rate),
                              (!1 !== v.frame_rate.fixed &&
                                0 !== v.frame_rate.fps_num &&
                                0 !== v.frame_rate.fps_den) ||
                                (n.frameRate = this._referenceFrameRate);
                            var y = n.frameRate.fps_den,
                              E = n.frameRate.fps_num;
                            n.refSampleDuration = n.timescale * (y / E);
                            for (
                              var b = g.subarray(1, 4), A = "avc1.", R = 0;
                              R < 3;
                              R++
                            ) {
                              var T = b[R].toString(16);
                              T.length < 2 && (T = "0" + T), (A += T);
                            }
                            n.codec = A;
                            var L = this._mediaInfo;
                            (L.width = n.codecWidth),
                              (L.height = n.codecHeight),
                              (L.fps = n.frameRate.fps),
                              (L.profile = n.profile),
                              (L.level = n.level),
                              (L.refFrames = v.ref_frames),
                              (L.chromaFormat = v.chroma_format_string),
                              (L.sarNum = n.sarRatio.width),
                              (L.sarDen = n.sarRatio.height),
                              (L.videoCodec = A),
                              L.hasAudio
                                ? null != L.audioCodec &&
                                  (L.mimeType =
                                    'video/x-flv; codecs="' +
                                    L.videoCodec +
                                    "," +
                                    L.audioCodec +
                                    '"')
                                : (L.mimeType =
                                    'video/x-flv; codecs="' +
                                    L.videoCodec +
                                    '"'),
                              L.isComplete() && this._onMediaInfo(L);
                          }
                        }
                      }
                      var w = o.getUint8(l);
                      if (0 !== w) {
                        w > 1 &&
                          a.a.w(
                            this.TAG,
                            "Flv: Strange AVCDecoderConfigurationRecord: PPS Count = " +
                              w,
                          ),
                          l++;
                        for (c = 0; c < w; c++) {
                          f = o.getUint16(l, !s);
                          (l += 2), 0 !== f && (l += f);
                        }
                        (n.avcc = new Uint8Array(i)),
                          n.avcc.set(new Uint8Array(e, t, i), 0),
                          a.a.v(
                            this.TAG,
                            "Parsed AVCDecoderConfigurationRecord",
                          ),
                          this._isInitialMetadataDispatched()
                            ? this._dispatch &&
                              (this._audioTrack.length ||
                                this._videoTrack.length) &&
                              this._onDataAvailable(
                                this._audioTrack,
                                this._videoTrack,
                              )
                            : (this._videoInitialMetadataDispatched = !0),
                          (this._dispatch = !1),
                          this._onTrackMetadata("video", n);
                      } else
                        this._onError(
                          m.a.FORMAT_ERROR,
                          "Flv: Invalid AVCDecoderConfigurationRecord: No PPS",
                        );
                    } else
                      this._onError(
                        m.a.FORMAT_ERROR,
                        "Flv: Invalid AVCDecoderConfigurationRecord: No SPS",
                      );
                  } else
                    this._onError(
                      m.a.FORMAT_ERROR,
                      "Flv: Strange NaluLengthSizeMinusOne: " +
                        (this._naluLengthSize - 1),
                    );
                else
                  this._onError(
                    m.a.FORMAT_ERROR,
                    "Flv: Invalid AVCDecoderConfigurationRecord",
                  );
              }
            }),
            (e.prototype._parseHEVCDecoderConfigurationRecord = function (
              e,
              t,
              i,
            ) {
              if (i < 22)
                a.a.w(
                  this.TAG,
                  "Flv: Invalid HEVCDecoderConfigurationRecord, lack of data!",
                );
              else {
                var n = this._videoMetadata,
                  r = this._videoTrack,
                  s = this._littleEndian,
                  o = new DataView(e, t, i);
                if (n) {
                  if (void 0 !== n.hvcc) {
                    var d = new Uint8Array(e, t, i);
                    if (S(d, n.hvcc)) return;
                    a.a.w(
                      this.TAG,
                      "HEVCDecoderConfigurationRecord has been changed, re-generate initialization segment",
                    );
                  }
                } else
                  !1 === this._hasVideo &&
                    !1 === this._hasVideoFlagOverrided &&
                    ((this._hasVideo = !0), (this._mediaInfo.hasVideo = !0)),
                    ((n = this._videoMetadata = {}).type = "video"),
                    (n.id = r.id),
                    (n.timescale = this._timescale),
                    (n.duration = this._duration);
                var h = o.getUint8(0),
                  _ = 31 & o.getUint8(1);
                if (1 === h && 0 !== _)
                  if (
                    ((this._naluLengthSize = 1 + (3 & o.getUint8(21))),
                    3 === this._naluLengthSize || 4 === this._naluLengthSize)
                  ) {
                    for (var u = o.getUint8(22), l = 0, c = 23; l < u; l++) {
                      var f = 63 & o.getUint8(c + 0),
                        p = o.getUint16(c + 1, !s);
                      c += 3;
                      for (var v = 0; v < p; v++) {
                        var y = o.getUint16(c + 0, !s);
                        if (0 === v)
                          if (33 === f) {
                            c += 2;
                            var E = new Uint8Array(e, t + c, y),
                              b = g.parseSPS(E);
                            (n.codecWidth = b.codec_size.width),
                              (n.codecHeight = b.codec_size.height),
                              (n.presentWidth = b.present_size.width),
                              (n.presentHeight = b.present_size.height),
                              (n.profile = b.profile_string),
                              (n.level = b.level_string),
                              (n.bitDepth = b.bit_depth),
                              (n.chromaFormat = b.chroma_format),
                              (n.sarRatio = b.sar_ratio),
                              (n.frameRate = b.frame_rate),
                              (!1 !== b.frame_rate.fixed &&
                                0 !== b.frame_rate.fps_num &&
                                0 !== b.frame_rate.fps_den) ||
                                (n.frameRate = this._referenceFrameRate);
                            var A = n.frameRate.fps_den,
                              R = n.frameRate.fps_num;
                            (n.refSampleDuration = n.timescale * (A / R)),
                              (n.codec = b.codec_mimetype);
                            var T = this._mediaInfo;
                            (T.width = n.codecWidth),
                              (T.height = n.codecHeight),
                              (T.fps = n.frameRate.fps),
                              (T.profile = n.profile),
                              (T.level = n.level),
                              (T.refFrames = b.ref_frames),
                              (T.chromaFormat = b.chroma_format_string),
                              (T.sarNum = n.sarRatio.width),
                              (T.sarDen = n.sarRatio.height),
                              (T.videoCodec = b.codec_mimetype),
                              T.hasAudio
                                ? null != T.audioCodec &&
                                  (T.mimeType =
                                    'video/x-flv; codecs="' +
                                    T.videoCodec +
                                    "," +
                                    T.audioCodec +
                                    '"')
                                : (T.mimeType =
                                    'video/x-flv; codecs="' +
                                    T.videoCodec +
                                    '"'),
                              T.isComplete() && this._onMediaInfo(T),
                              (c += y);
                          } else c += 2 + y;
                        else c += 2 + y;
                      }
                    }
                    (n.hvcc = new Uint8Array(i)),
                      n.hvcc.set(new Uint8Array(e, t, i), 0),
                      a.a.v(this.TAG, "Parsed HEVCDecoderConfigurationRecord"),
                      this._isInitialMetadataDispatched()
                        ? this._dispatch &&
                          (this._audioTrack.length ||
                            this._videoTrack.length) &&
                          this._onDataAvailable(
                            this._audioTrack,
                            this._videoTrack,
                          )
                        : (this._videoInitialMetadataDispatched = !0),
                      (this._dispatch = !1),
                      this._onTrackMetadata("video", n);
                  } else
                    this._onError(
                      m.a.FORMAT_ERROR,
                      "Flv: Strange NaluLengthSizeMinusOne: " +
                        (this._naluLengthSize - 1),
                    );
                else
                  this._onError(
                    m.a.FORMAT_ERROR,
                    "Flv: Invalid HEVCDecoderConfigurationRecord",
                  );
              }
            }),
            (e.prototype._parseAVCVideoData = function (e, t, i, n, r, s, o) {
              for (
                var d = this._littleEndian,
                  h = new DataView(e, t, i),
                  _ = [],
                  u = 0,
                  l = 0,
                  c = this._naluLengthSize,
                  f = this._timestampBase + n,
                  p = 1 === s;
                l < i;

              ) {
                if (l + 4 >= i) {
                  a.a.w(
                    this.TAG,
                    "Malformed Nalu near timestamp " +
                      f +
                      ", offset = " +
                      l +
                      ", dataSize = " +
                      i,
                  );
                  break;
                }
                var m = h.getUint32(l, !d);
                if ((3 === c && (m >>>= 8), m > i - c))
                  return void a.a.w(
                    this.TAG,
                    "Malformed Nalus near timestamp " +
                      f +
                      ", NaluSize > DataSize!",
                  );
                var g = 31 & h.getUint8(l + c);
                5 === g && (p = !0);
                var v = new Uint8Array(e, t + l, c + m),
                  y = { type: g, data: v };
                _.push(y), (u += v.byteLength), (l += c + m);
              }
              if (_.length) {
                var E = this._videoTrack,
                  S = {
                    units: _,
                    length: u,
                    isKeyframe: p,
                    dts: f,
                    cts: o,
                    pts: f + o,
                  };
                p && (S.fileposition = r), E.samples.push(S), (E.length += u);
              }
            }),
            (e.prototype._parseHEVCVideoData = function (e, t, i, n, r, s, o) {
              for (
                var d = this._littleEndian,
                  h = new DataView(e, t, i),
                  _ = [],
                  u = 0,
                  l = 0,
                  c = this._naluLengthSize,
                  f = this._timestampBase + n,
                  p = 1 === s;
                l < i;

              ) {
                if (l + 4 >= i) {
                  a.a.w(
                    this.TAG,
                    "Malformed Nalu near timestamp " +
                      f +
                      ", offset = " +
                      l +
                      ", dataSize = " +
                      i,
                  );
                  break;
                }
                var m = h.getUint32(l, !d);
                if ((3 === c && (m >>>= 8), m > i - c))
                  return void a.a.w(
                    this.TAG,
                    "Malformed Nalus near timestamp " +
                      f +
                      ", NaluSize > DataSize!",
                  );
                var g = 31 & h.getUint8(l + c);
                (19 !== g && 20 !== g) || (p = !0);
                var v = new Uint8Array(e, t + l, c + m),
                  y = { type: g, data: v };
                _.push(y), (u += v.byteLength), (l += c + m);
              }
              if (_.length) {
                var E = this._videoTrack,
                  S = {
                    units: _,
                    length: u,
                    isKeyframe: p,
                    dts: f,
                    cts: o,
                    pts: f + o,
                  };
                p && (S.fileposition = r), E.samples.push(S), (E.length += u);
              }
            }),
            e
          );
        })(),
        R = (function () {
          function e() {}
          return (
            (e.prototype.destroy = function () {
              (this.onError = null),
                (this.onMediaInfo = null),
                (this.onMetaDataArrived = null),
                (this.onTrackMetadata = null),
                (this.onDataAvailable = null),
                (this.onTimedID3Metadata = null),
                (this.onSMPTE2038Metadata = null),
                (this.onSCTE35Metadata = null),
                (this.onPESPrivateData = null),
                (this.onPESPrivateDataDescriptor = null);
            }),
            e
          );
        })(),
        T = function () {
          this.program_pmt_pid = {};
        };
      !(function (e) {
        (e[(e.kMPEG1Audio = 3)] = "kMPEG1Audio"),
          (e[(e.kMPEG2Audio = 4)] = "kMPEG2Audio"),
          (e[(e.kPESPrivateData = 6)] = "kPESPrivateData"),
          (e[(e.kADTSAAC = 15)] = "kADTSAAC"),
          (e[(e.kID3 = 21)] = "kID3"),
          (e[(e.kSCTE35 = 134)] = "kSCTE35"),
          (e[(e.kH264 = 27)] = "kH264"),
          (e[(e.kH265 = 36)] = "kH265");
      })(b || (b = {}));
      var L,
        w = function () {
          (this.pid_stream_type = {}),
            (this.common_pids = {
              h264: void 0,
              h265: void 0,
              adts_aac: void 0,
              mp3: void 0,
            }),
            (this.pes_private_data_pids = {}),
            (this.timed_id3_pids = {}),
            (this.scte_35_pids = {}),
            (this.smpte2038_pids = {});
        },
        D = function () {},
        k = function () {},
        C = function () {
          (this.slices = []),
            (this.total_length = 0),
            (this.expected_length = 0),
            (this.file_position = 0);
        };
      !(function (e) {
        (e[(e.kUnspecified = 0)] = "kUnspecified"),
          (e[(e.kSliceNonIDR = 1)] = "kSliceNonIDR"),
          (e[(e.kSliceDPA = 2)] = "kSliceDPA"),
          (e[(e.kSliceDPB = 3)] = "kSliceDPB"),
          (e[(e.kSliceDPC = 4)] = "kSliceDPC"),
          (e[(e.kSliceIDR = 5)] = "kSliceIDR"),
          (e[(e.kSliceSEI = 6)] = "kSliceSEI"),
          (e[(e.kSliceSPS = 7)] = "kSliceSPS"),
          (e[(e.kSlicePPS = 8)] = "kSlicePPS"),
          (e[(e.kSliceAUD = 9)] = "kSliceAUD"),
          (e[(e.kEndOfSequence = 10)] = "kEndOfSequence"),
          (e[(e.kEndOfStream = 11)] = "kEndOfStream"),
          (e[(e.kFiller = 12)] = "kFiller"),
          (e[(e.kSPSExt = 13)] = "kSPSExt"),
          (e[(e.kReserved0 = 14)] = "kReserved0");
      })(L || (L = {}));
      var B,
        I,
        P = function () {},
        O = function (e) {
          var t = e.data.byteLength;
          (this.type = e.type),
            (this.data = new Uint8Array(4 + t)),
            new DataView(this.data.buffer).setUint32(0, t),
            this.data.set(e.data, 4);
        },
        M = (function () {
          function e(e) {
            (this.TAG = "H264AnnexBParser"),
              (this.current_startcode_offset_ = 0),
              (this.eof_flag_ = !1),
              (this.data_ = e),
              (this.current_startcode_offset_ =
                this.findNextStartCodeOffset(0)),
              this.eof_flag_ &&
                a.a.e(
                  this.TAG,
                  "Could not find H264 startcode until payload end!",
                );
          }
          return (
            (e.prototype.findNextStartCodeOffset = function (e) {
              for (var t = e, i = this.data_; ; ) {
                if (t + 3 >= i.byteLength)
                  return (this.eof_flag_ = !0), i.byteLength;
                var n =
                    (i[t + 0] << 24) |
                    (i[t + 1] << 16) |
                    (i[t + 2] << 8) |
                    i[t + 3],
                  r = (i[t + 0] << 16) | (i[t + 1] << 8) | i[t + 2];
                if (1 === n || 1 === r) return t;
                t++;
              }
            }),
            (e.prototype.readNextNaluPayload = function () {
              for (
                var e = this.data_, t = null;
                null == t && !this.eof_flag_;

              ) {
                var i = this.current_startcode_offset_,
                  n =
                    31 &
                    e[
                      (i +=
                        1 ===
                        ((e[i] << 24) |
                          (e[i + 1] << 16) |
                          (e[i + 2] << 8) |
                          e[i + 3])
                          ? 4
                          : 3)
                    ],
                  r = (128 & e[i]) >>> 7,
                  a = this.findNextStartCodeOffset(i);
                if (
                  ((this.current_startcode_offset_ = a),
                  !(n >= L.kReserved0) && 0 === r)
                ) {
                  var s = e.subarray(i, a);
                  ((t = new P()).type = n), (t.data = s);
                }
              }
              return t;
            }),
            e
          );
        })(),
        x = (function () {
          function e(e, t, i) {
            var n = 8 + e.byteLength + 1 + 2 + t.byteLength,
              r = !1;
            66 !== e[3] && 77 !== e[3] && 88 !== e[3] && ((r = !0), (n += 4));
            var a = (this.data = new Uint8Array(n));
            (a[0] = 1),
              (a[1] = e[1]),
              (a[2] = e[2]),
              (a[3] = e[3]),
              (a[4] = 255),
              (a[5] = 225);
            var s = e.byteLength;
            (a[6] = s >>> 8), (a[7] = 255 & s);
            var o = 8;
            a.set(e, 8), (a[(o += s)] = 1);
            var d = t.byteLength;
            (a[o + 1] = d >>> 8),
              (a[o + 2] = 255 & d),
              a.set(t, o + 3),
              (o += 3 + d),
              r &&
                ((a[o] = 252 | i.chroma_format_idc),
                (a[o + 1] = 248 | (i.bit_depth_luma - 8)),
                (a[o + 2] = 248 | (i.bit_depth_chroma - 8)),
                (a[o + 3] = 0),
                (o += 4));
          }
          return (
            (e.prototype.getData = function () {
              return this.data;
            }),
            e
          );
        })();
      !(function (e) {
        (e[(e.kNull = 0)] = "kNull"),
          (e[(e.kAACMain = 1)] = "kAACMain"),
          (e[(e.kAAC_LC = 2)] = "kAAC_LC"),
          (e[(e.kAAC_SSR = 3)] = "kAAC_SSR"),
          (e[(e.kAAC_LTP = 4)] = "kAAC_LTP"),
          (e[(e.kAAC_SBR = 5)] = "kAAC_SBR"),
          (e[(e.kAAC_Scalable = 6)] = "kAAC_Scalable"),
          (e[(e.kLayer1 = 32)] = "kLayer1"),
          (e[(e.kLayer2 = 33)] = "kLayer2"),
          (e[(e.kLayer3 = 34)] = "kLayer3");
      })(B || (B = {})),
        (function (e) {
          (e[(e.k96000Hz = 0)] = "k96000Hz"),
            (e[(e.k88200Hz = 1)] = "k88200Hz"),
            (e[(e.k64000Hz = 2)] = "k64000Hz"),
            (e[(e.k48000Hz = 3)] = "k48000Hz"),
            (e[(e.k44100Hz = 4)] = "k44100Hz"),
            (e[(e.k32000Hz = 5)] = "k32000Hz"),
            (e[(e.k24000Hz = 6)] = "k24000Hz"),
            (e[(e.k22050Hz = 7)] = "k22050Hz"),
            (e[(e.k16000Hz = 8)] = "k16000Hz"),
            (e[(e.k12000Hz = 9)] = "k12000Hz"),
            (e[(e.k11025Hz = 10)] = "k11025Hz"),
            (e[(e.k8000Hz = 11)] = "k8000Hz"),
            (e[(e.k7350Hz = 12)] = "k7350Hz");
        })(I || (I = {}));
      var U,
        N = [
          96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025,
          8e3, 7350,
        ],
        G = function () {},
        V = (function () {
          function e(e) {
            (this.TAG = "AACADTSParser"),
              (this.data_ = e),
              (this.current_syncword_offset_ = this.findNextSyncwordOffset(0)),
              this.eof_flag_ &&
                a.a.e(
                  this.TAG,
                  "Could not found ADTS syncword until payload end",
                );
          }
          return (
            (e.prototype.findNextSyncwordOffset = function (e) {
              for (var t = e, i = this.data_; ; ) {
                if (t + 7 >= i.byteLength)
                  return (this.eof_flag_ = !0), i.byteLength;
                if (4095 === ((i[t + 0] << 8) | i[t + 1]) >>> 4) return t;
                t++;
              }
            }),
            (e.prototype.readNextAACFrame = function () {
              for (
                var e = this.data_, t = null;
                null == t && !this.eof_flag_;

              ) {
                var i = this.current_syncword_offset_,
                  n = (8 & e[i + 1]) >>> 3,
                  r = (6 & e[i + 1]) >>> 1,
                  a = 1 & e[i + 1],
                  s = (192 & e[i + 2]) >>> 6,
                  o = (60 & e[i + 2]) >>> 2,
                  d = ((1 & e[i + 2]) << 2) | ((192 & e[i + 3]) >>> 6),
                  h =
                    ((3 & e[i + 3]) << 11) |
                    (e[i + 4] << 3) |
                    ((224 & e[i + 5]) >>> 5);
                e[i + 6];
                if (i + h > this.data_.byteLength) {
                  (this.eof_flag_ = !0), (this.has_last_incomplete_data = !0);
                  break;
                }
                var _ = 1 === a ? 7 : 9,
                  u = h - _;
                i += _;
                var l = this.findNextSyncwordOffset(i + u);
                if (
                  ((this.current_syncword_offset_ = l),
                  (0 === n || 1 === n) && 0 === r)
                ) {
                  var c = e.subarray(i, i + u);
                  ((t = new G()).audio_object_type = s + 1),
                    (t.sampling_freq_index = o),
                    (t.sampling_frequency = N[o]),
                    (t.channel_config = d),
                    (t.data = c);
                }
              }
              return t;
            }),
            (e.prototype.hasIncompleteData = function () {
              return this.has_last_incomplete_data;
            }),
            (e.prototype.getIncompleteData = function () {
              return this.has_last_incomplete_data
                ? this.data_.subarray(this.current_syncword_offset_)
                : null;
            }),
            e
          );
        })(),
        F = function (e) {
          var t = null,
            i = e.audio_object_type,
            n = e.audio_object_type,
            r = e.sampling_freq_index,
            a = e.channel_config,
            s = 0,
            o = navigator.userAgent.toLowerCase();
          -1 !== o.indexOf("firefox")
            ? r >= 6
              ? ((n = 5), (t = new Array(4)), (s = r - 3))
              : ((n = 2), (t = new Array(2)), (s = r))
            : -1 !== o.indexOf("android")
              ? ((n = 2), (t = new Array(2)), (s = r))
              : ((n = 5),
                (s = r),
                (t = new Array(4)),
                r >= 6
                  ? (s = r - 3)
                  : 1 === a && ((n = 2), (t = new Array(2)), (s = r))),
            (t[0] = n << 3),
            (t[0] |= (15 & r) >>> 1),
            (t[1] = (15 & r) << 7),
            (t[1] |= (15 & a) << 3),
            5 === n &&
              ((t[1] |= (15 & s) >>> 1),
              (t[2] = (1 & s) << 7),
              (t[2] |= 8),
              (t[3] = 0)),
            (this.config = t),
            (this.sampling_rate = N[r]),
            (this.channel_count = a),
            (this.codec_mimetype = "mp4a.40." + n),
            (this.original_codec_mimetype = "mp4a.40." + i);
        },
        j = function () {},
        z = function () {};
      !(function (e) {
        (e[(e.kSpliceNull = 0)] = "kSpliceNull"),
          (e[(e.kSpliceSchedule = 4)] = "kSpliceSchedule"),
          (e[(e.kSpliceInsert = 5)] = "kSpliceInsert"),
          (e[(e.kTimeSignal = 6)] = "kTimeSignal"),
          (e[(e.kBandwidthReservation = 7)] = "kBandwidthReservation"),
          (e[(e.kPrivateCommand = 255)] = "kPrivateCommand");
      })(U || (U = {}));
      var H,
        q = function (e) {
          var t = e.readBool();
          return t
            ? (e.readBits(6),
              {
                time_specified_flag: t,
                pts_time: 4 * e.readBits(31) + e.readBits(2),
              })
            : (e.readBits(7), { time_specified_flag: t });
        },
        K = function (e) {
          var t = e.readBool();
          return (
            e.readBits(6),
            { auto_return: t, duration: 4 * e.readBits(31) + e.readBits(2) }
          );
        },
        W = function (e, t) {
          var i = t.readBits(8);
          return e
            ? { component_tag: i }
            : { component_tag: i, splice_time: q(t) };
        },
        X = function (e) {
          return {
            component_tag: e.readBits(8),
            utc_splice_time: e.readBits(32),
          };
        },
        Y = function (e) {
          var t = e.readBits(32),
            i = e.readBool();
          e.readBits(7);
          var n = { splice_event_id: t, splice_event_cancel_indicator: i };
          if (i) return n;
          if (
            ((n.out_of_network_indicator = e.readBool()),
            (n.program_splice_flag = e.readBool()),
            (n.duration_flag = e.readBool()),
            e.readBits(5),
            n.program_splice_flag)
          )
            n.utc_splice_time = e.readBits(32);
          else {
            (n.component_count = e.readBits(8)), (n.components = []);
            for (var r = 0; r < n.component_count; r++) n.components.push(X(e));
          }
          return (
            n.duration_flag && (n.break_duration = K(e)),
            (n.unique_program_id = e.readBits(16)),
            (n.avail_num = e.readBits(8)),
            (n.avails_expected = e.readBits(8)),
            n
          );
        },
        Z = function (e, t, i, n) {
          return {
            descriptor_tag: e,
            descriptor_length: t,
            identifier: i,
            provider_avail_id: n.readBits(32),
          };
        },
        J = function (e, t, i, n) {
          var r = n.readBits(8),
            a = n.readBits(3);
          n.readBits(5);
          for (var s = "", o = 0; o < a; o++)
            s += String.fromCharCode(n.readBits(8));
          return {
            descriptor_tag: e,
            descriptor_length: t,
            identifier: i,
            preroll: r,
            dtmf_count: a,
            DTMF_char: s,
          };
        },
        Q = function (e) {
          var t = e.readBits(8);
          return (
            e.readBits(7),
            { component_tag: t, pts_offset: 4 * e.readBits(31) + e.readBits(2) }
          );
        },
        $ = function (e, t, i, n) {
          var r = n.readBits(32),
            a = n.readBool();
          n.readBits(7);
          var s = {
            descriptor_tag: e,
            descriptor_length: t,
            identifier: i,
            segmentation_event_id: r,
            segmentation_event_cancel_indicator: a,
          };
          if (a) return s;
          if (
            ((s.program_segmentation_flag = n.readBool()),
            (s.segmentation_duration_flag = n.readBool()),
            (s.delivery_not_restricted_flag = n.readBool()),
            s.delivery_not_restricted_flag
              ? n.readBits(5)
              : ((s.web_delivery_allowed_flag = n.readBool()),
                (s.no_regional_blackout_flag = n.readBool()),
                (s.archive_allowed_flag = n.readBool()),
                (s.device_restrictions = n.readBits(2))),
            !s.program_segmentation_flag)
          ) {
            (s.component_count = n.readBits(8)), (s.components = []);
            for (var o = 0; o < s.component_count; o++) s.components.push(Q(n));
          }
          s.segmentation_duration_flag &&
            (s.segmentation_duration = n.readBits(40)),
            (s.segmentation_upid_type = n.readBits(8)),
            (s.segmentation_upid_length = n.readBits(8));
          var d = new Uint8Array(s.segmentation_upid_length);
          for (o = 0; o < s.segmentation_upid_length; o++) d[o] = n.readBits(8);
          return (
            (s.segmentation_upid = d.buffer),
            (s.segmentation_type_id = n.readBits(8)),
            (s.segment_num = n.readBits(8)),
            (s.segments_expected = n.readBits(8)),
            (52 !== s.segmentation_type_id &&
              54 !== s.segmentation_type_id &&
              56 !== s.segmentation_type_id &&
              58 !== s.segmentation_type_id) ||
              ((s.sub_segment_num = n.readBits(8)),
              (s.sub_segments_expected = n.readBits(8))),
            s
          );
        },
        ee = function (e, t, i, n) {
          return {
            descriptor_tag: e,
            descriptor_length: t,
            identifier: i,
            TAI_seconds: n.readBits(48),
            TAI_ns: n.readBits(32),
            UTC_offset: n.readBits(16),
          };
        },
        te = function (e) {
          return {
            component_tag: e.readBits(8),
            ISO_code: String.fromCharCode(
              e.readBits(8),
              e.readBits(8),
              e.readBits(8),
            ),
            Bit_Stream_Mode: e.readBits(3),
            Num_Channels: e.readBits(4),
            Full_Srvc_Audio: e.readBool(),
          };
        },
        ie = function (e, t, i, n) {
          for (var r = n.readBits(4), a = [], s = 0; s < r; s++) a.push(te(n));
          return {
            descriptor_tag: e,
            descriptor_length: t,
            identifier: i,
            audio_count: r,
            components: a,
          };
        },
        ne = function (e) {
          var t = new f(e),
            i = t.readBits(8),
            n = t.readBool(),
            r = t.readBool();
          t.readBits(2);
          var a = t.readBits(12),
            s = t.readBits(8),
            o = t.readBool(),
            d = t.readBits(6),
            h = 4 * t.readBits(31) + t.readBits(2),
            _ = t.readBits(8),
            u = t.readBits(12),
            l = t.readBits(12),
            c = t.readBits(8),
            p = null;
          c === U.kSpliceNull
            ? (p = {})
            : c === U.kSpliceSchedule
              ? (p = (function (e) {
                  for (var t = e.readBits(8), i = [], n = 0; n < t; n++)
                    i.push(Y(e));
                  return { splice_count: t, events: i };
                })(t))
              : c === U.kSpliceInsert
                ? (p = (function (e) {
                    var t = e.readBits(32),
                      i = e.readBool();
                    e.readBits(7);
                    var n = {
                      splice_event_id: t,
                      splice_event_cancel_indicator: i,
                    };
                    if (i) return n;
                    if (
                      ((n.out_of_network_indicator = e.readBool()),
                      (n.program_splice_flag = e.readBool()),
                      (n.duration_flag = e.readBool()),
                      (n.splice_immediate_flag = e.readBool()),
                      e.readBits(4),
                      n.program_splice_flag &&
                        !n.splice_immediate_flag &&
                        (n.splice_time = q(e)),
                      !n.program_splice_flag)
                    ) {
                      (n.component_count = e.readBits(8)), (n.components = []);
                      for (var r = 0; r < n.component_count; r++)
                        n.components.push(W(n.splice_immediate_flag, e));
                    }
                    return (
                      n.duration_flag && (n.break_duration = K(e)),
                      (n.unique_program_id = e.readBits(16)),
                      (n.avail_num = e.readBits(8)),
                      (n.avails_expected = e.readBits(8)),
                      n
                    );
                  })(t))
                : c === U.kTimeSignal
                  ? (p = (function (e) {
                      return { splice_time: q(e) };
                    })(t))
                  : c === U.kBandwidthReservation
                    ? (p = {})
                    : c === U.kPrivateCommand
                      ? (p = (function (e, t) {
                          for (
                            var i = String.fromCharCode(
                                t.readBits(8),
                                t.readBits(8),
                                t.readBits(8),
                                t.readBits(8),
                              ),
                              n = new Uint8Array(e - 4),
                              r = 0;
                            r < e - 4;
                            r++
                          )
                            n[r] = t.readBits(8);
                          return { identifier: i, private_data: n.buffer };
                        })(l, t))
                      : t.readBits(8 * l);
          for (var m = [], g = t.readBits(16), v = 0; v < g; ) {
            var y = t.readBits(8),
              E = t.readBits(8),
              S = String.fromCharCode(
                t.readBits(8),
                t.readBits(8),
                t.readBits(8),
                t.readBits(8),
              );
            0 === y
              ? m.push(Z(y, E, S, t))
              : 1 === y
                ? m.push(J(y, E, S, t))
                : 2 === y
                  ? m.push($(y, E, S, t))
                  : 3 === y
                    ? m.push(ee(y, E, S, t))
                    : 4 === y
                      ? m.push(ie(y, E, S, t))
                      : t.readBits(8 * (E - 4)),
              (v += 2 + E);
          }
          var b = {
            table_id: i,
            section_syntax_indicator: n,
            private_indicator: r,
            section_length: a,
            protocol_version: s,
            encrypted_packet: o,
            encryption_algorithm: d,
            pts_adjustment: h,
            cw_index: _,
            tier: u,
            splice_command_length: l,
            splice_command_type: c,
            splice_command: p,
            descriptor_loop_length: g,
            splice_descriptors: m,
            E_CRC32: o ? t.readBits(32) : void 0,
            CRC32: t.readBits(32),
          };
          if (c === U.kSpliceInsert) {
            var A = p;
            if (A.splice_event_cancel_indicator)
              return { splice_command_type: c, detail: b, data: e };
            if (A.program_splice_flag && !A.splice_immediate_flag) {
              var R = A.duration_flag ? A.break_duration.auto_return : void 0,
                T = A.duration_flag ? A.break_duration.duration / 90 : void 0;
              return A.splice_time.time_specified_flag
                ? {
                    splice_command_type: c,
                    pts: (h + A.splice_time.pts_time) % Math.pow(2, 33),
                    auto_return: R,
                    duraiton: T,
                    detail: b,
                    data: e,
                  }
                : {
                    splice_command_type: c,
                    auto_return: R,
                    duraiton: T,
                    detail: b,
                    data: e,
                  };
            }
            return {
              splice_command_type: c,
              auto_return: (R = A.duration_flag
                ? A.break_duration.auto_return
                : void 0),
              duraiton: (T = A.duration_flag
                ? A.break_duration.duration / 90
                : void 0),
              detail: b,
              data: e,
            };
          }
          if (c === U.kTimeSignal) {
            var L = p;
            return L.splice_time.time_specified_flag
              ? {
                  splice_command_type: c,
                  pts: (h + L.splice_time.pts_time) % Math.pow(2, 33),
                  detail: b,
                  data: e,
                }
              : { splice_command_type: c, detail: b, data: e };
          }
          return { splice_command_type: c, detail: b, data: e };
        };
      !(function (e) {
        (e[(e.kSliceIDR_W_RADL = 19)] = "kSliceIDR_W_RADL"),
          (e[(e.kSliceIDR_N_LP = 20)] = "kSliceIDR_N_LP"),
          (e[(e.kSliceCRA_NUT = 21)] = "kSliceCRA_NUT"),
          (e[(e.kSliceVPS = 32)] = "kSliceVPS"),
          (e[(e.kSliceSPS = 33)] = "kSliceSPS"),
          (e[(e.kSlicePPS = 34)] = "kSlicePPS"),
          (e[(e.kSliceAUD = 35)] = "kSliceAUD");
      })(H || (H = {}));
      var re,
        ae = function () {},
        se = function (e) {
          var t = e.data.byteLength;
          (this.type = e.type),
            (this.data = new Uint8Array(4 + t)),
            new DataView(this.data.buffer).setUint32(0, t),
            this.data.set(e.data, 4);
        },
        oe = (function () {
          function e(e) {
            (this.TAG = "H265AnnexBParser"),
              (this.current_startcode_offset_ = 0),
              (this.eof_flag_ = !1),
              (this.data_ = e),
              (this.current_startcode_offset_ =
                this.findNextStartCodeOffset(0)),
              this.eof_flag_ &&
                a.a.e(
                  this.TAG,
                  "Could not find H265 startcode until payload end!",
                );
          }
          return (
            (e.prototype.findNextStartCodeOffset = function (e) {
              for (var t = e, i = this.data_; ; ) {
                if (t + 3 >= i.byteLength)
                  return (this.eof_flag_ = !0), i.byteLength;
                var n =
                    (i[t + 0] << 24) |
                    (i[t + 1] << 16) |
                    (i[t + 2] << 8) |
                    i[t + 3],
                  r = (i[t + 0] << 16) | (i[t + 1] << 8) | i[t + 2];
                if (1 === n || 1 === r) return t;
                t++;
              }
            }),
            (e.prototype.readNextNaluPayload = function () {
              for (
                var e = this.data_, t = null;
                null == t && !this.eof_flag_;

              ) {
                var i = this.current_startcode_offset_,
                  n =
                    (e[
                      (i +=
                        1 ===
                        ((e[i] << 24) |
                          (e[i + 1] << 16) |
                          (e[i + 2] << 8) |
                          e[i + 3])
                          ? 4
                          : 3)
                    ] >>
                      1) &
                    63,
                  r = (128 & e[i]) >>> 7,
                  a = this.findNextStartCodeOffset(i);
                if (((this.current_startcode_offset_ = a), 0 === r)) {
                  var s = e.subarray(i, a);
                  ((t = new ae()).type = n), (t.data = s);
                }
              }
              return t;
            }),
            e
          );
        })(),
        de = (function () {
          function e(e, t, i, n) {
            var r =
                23 +
                (5 + e.byteLength) +
                (5 + t.byteLength) +
                (5 + i.byteLength),
              a = (this.data = new Uint8Array(r));
            (a[0] = 1),
              (a[1] =
                ((3 & n.general_profile_space) << 6) |
                ((n.general_tier_flag ? 1 : 0) << 5) |
                (31 & n.general_profile_idc)),
              (a[2] = n.general_profile_compatibility_flags_1),
              (a[3] = n.general_profile_compatibility_flags_2),
              (a[4] = n.general_profile_compatibility_flags_3),
              (a[5] = n.general_profile_compatibility_flags_4),
              (a[6] = n.general_constraint_indicator_flags_1),
              (a[7] = n.general_constraint_indicator_flags_2),
              (a[8] = n.general_constraint_indicator_flags_3),
              (a[9] = n.general_constraint_indicator_flags_4),
              (a[10] = n.general_constraint_indicator_flags_5),
              (a[11] = n.general_constraint_indicator_flags_6),
              (a[12] = 60),
              (a[13] = 240 | ((3840 & n.min_spatial_segmentation_idc) >> 8)),
              (a[14] = 255 & n.min_spatial_segmentation_idc),
              (a[15] = 252 | (3 & n.parallelismType)),
              (a[16] = 252 | (3 & n.chroma_format_idc)),
              (a[17] = 248 | (7 & n.bit_depth_luma_minus8)),
              (a[18] = 248 | (7 & n.bit_depth_chroma_minus8)),
              (a[19] = 0),
              (a[20] = 0),
              (a[21] =
                ((3 & n.constant_frame_rate) << 6) |
                ((7 & n.num_temporal_layers) << 3) |
                ((n.temporal_id_nested ? 1 : 0) << 2) |
                3),
              (a[22] = 3),
              (a[23] = 128 | H.kSliceVPS),
              (a[24] = 0),
              (a[25] = 1),
              (a[26] = (65280 & e.byteLength) >> 8),
              (a[27] = (255 & e.byteLength) >> 0),
              a.set(e, 28),
              (a[23 + (5 + e.byteLength) + 0] = 128 | H.kSliceSPS),
              (a[23 + (5 + e.byteLength) + 1] = 0),
              (a[23 + (5 + e.byteLength) + 2] = 1),
              (a[23 + (5 + e.byteLength) + 3] = (65280 & t.byteLength) >> 8),
              (a[23 + (5 + e.byteLength) + 4] = (255 & t.byteLength) >> 0),
              a.set(t, 23 + (5 + e.byteLength) + 5),
              (a[23 + (5 + e.byteLength + 5 + t.byteLength) + 0] =
                128 | H.kSlicePPS),
              (a[23 + (5 + e.byteLength + 5 + t.byteLength) + 1] = 0),
              (a[23 + (5 + e.byteLength + 5 + t.byteLength) + 2] = 1),
              (a[23 + (5 + e.byteLength + 5 + t.byteLength) + 3] =
                (65280 & i.byteLength) >> 8),
              (a[23 + (5 + e.byteLength + 5 + t.byteLength) + 4] =
                (255 & i.byteLength) >> 0),
              a.set(i, 23 + (5 + e.byteLength + 5 + t.byteLength) + 5);
          }
          return (
            (e.prototype.getData = function () {
              return this.data;
            }),
            e
          );
        })(),
        he = function () {},
        _e = function () {},
        ue =
          ((re = function (e, t) {
            return (re =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            function i() {
              this.constructor = e;
            }
            re(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        le = function () {
          return (le =
            Object.assign ||
            function (e) {
              for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var r in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        },
        ce = (function (e) {
          function t(t, i) {
            var n = e.call(this) || this;
            return (
              (n.TAG = "TSDemuxer"),
              (n.first_parse_ = !0),
              (n.media_info_ = new o.a()),
              (n.timescale_ = 90),
              (n.duration_ = 0),
              (n.current_pmt_pid_ = -1),
              (n.program_pmt_map_ = {}),
              (n.pes_slice_queues_ = {}),
              (n.section_slice_queues_ = {}),
              (n.video_metadata_ = {
                vps: void 0,
                sps: void 0,
                pps: void 0,
                details: void 0,
              }),
              (n.audio_metadata_ = {
                codec: void 0,
                audio_object_type: void 0,
                sampling_freq_index: void 0,
                sampling_frequency: void 0,
                channel_config: void 0,
              }),
              (n.aac_last_sample_pts_ = void 0),
              (n.aac_last_incomplete_data_ = null),
              (n.has_video_ = !1),
              (n.has_audio_ = !1),
              (n.video_init_segment_dispatched_ = !1),
              (n.audio_init_segment_dispatched_ = !1),
              (n.video_metadata_changed_ = !1),
              (n.audio_metadata_changed_ = !1),
              (n.video_track_ = {
                type: "video",
                id: 1,
                sequenceNumber: 0,
                samples: [],
                length: 0,
              }),
              (n.audio_track_ = {
                type: "audio",
                id: 2,
                sequenceNumber: 0,
                samples: [],
                length: 0,
              }),
              (n.ts_packet_size_ = t.ts_packet_size),
              (n.sync_offset_ = t.sync_offset),
              (n.config_ = i),
              n
            );
          }
          return (
            ue(t, e),
            (t.prototype.destroy = function () {
              (this.media_info_ = null),
                (this.pes_slice_queues_ = null),
                (this.section_slice_queues_ = null),
                (this.video_metadata_ = null),
                (this.audio_metadata_ = null),
                (this.aac_last_incomplete_data_ = null),
                (this.video_track_ = null),
                (this.audio_track_ = null),
                e.prototype.destroy.call(this);
            }),
            (t.probe = function (e) {
              var t = new Uint8Array(e),
                i = -1,
                n = 188;
              if (t.byteLength <= 3 * n) return { needMoreData: !0 };
              for (; -1 === i; ) {
                for (
                  var r = Math.min(1e3, t.byteLength - 3 * n), s = 0;
                  s < r;

                ) {
                  if (71 === t[s] && 71 === t[s + n] && 71 === t[s + 2 * n]) {
                    i = s;
                    break;
                  }
                  s++;
                }
                if (-1 === i)
                  if (188 === n) n = 192;
                  else {
                    if (192 !== n) break;
                    n = 204;
                  }
              }
              return -1 === i
                ? { match: !1 }
                : (192 === n && i >= 4
                    ? (a.a.v("TSDemuxer", "ts_packet_size = 192, m2ts mode"),
                      (i -= 4))
                    : 204 === n &&
                      a.a.v(
                        "TSDemuxer",
                        "ts_packet_size = 204, RS encoded MPEG2-TS stream",
                      ),
                  {
                    match: !0,
                    consumed: 0,
                    ts_packet_size: n,
                    sync_offset: i,
                  });
            }),
            (t.prototype.bindDataSource = function (e) {
              return (e.onDataArrival = this.parseChunks.bind(this)), this;
            }),
            (t.prototype.resetMediaInfo = function () {
              this.media_info_ = new o.a();
            }),
            (t.prototype.parseChunks = function (e, t) {
              if (
                !(
                  this.onError &&
                  this.onMediaInfo &&
                  this.onTrackMetadata &&
                  this.onDataAvailable
                )
              )
                throw new u.a(
                  "onError & onMediaInfo & onTrackMetadata & onDataAvailable callback must be specified",
                );
              var i = 0;
              for (
                this.first_parse_ &&
                ((this.first_parse_ = !1), (i = this.sync_offset_));
                i + this.ts_packet_size_ <= e.byteLength;

              ) {
                var n = t + i;
                192 === this.ts_packet_size_ && (i += 4);
                var r = new Uint8Array(e, i, 188),
                  s = r[0];
                if (71 !== s) {
                  a.a.e(this.TAG, "sync_byte = " + s + ", not 0x47");
                  break;
                }
                var o = (64 & r[1]) >>> 6,
                  d = (r[1], ((31 & r[1]) << 8) | r[2]),
                  h = (48 & r[3]) >>> 4,
                  _ = 15 & r[3],
                  l = {},
                  c = 4;
                if (2 == h || 3 == h) {
                  var f = r[4];
                  if (5 + f === 188) {
                    (i += 188), 204 === this.ts_packet_size_ && (i += 16);
                    continue;
                  }
                  f > 0 && (l = this.parseAdaptationField(e, i + 4, 1 + f)),
                    (c = 5 + f);
                }
                if (1 == h || 3 == h)
                  if (
                    0 === d ||
                    d === this.current_pmt_pid_ ||
                    (null != this.pmt_ &&
                      this.pmt_.pid_stream_type[d] === b.kSCTE35)
                  ) {
                    var p = 188 - c;
                    this.handleSectionSlice(e, i + c, p, {
                      pid: d,
                      file_position: n,
                      payload_unit_start_indicator: o,
                      continuity_conunter: _,
                      random_access_indicator: l.random_access_indicator,
                    });
                  } else if (
                    null != this.pmt_ &&
                    null != this.pmt_.pid_stream_type[d]
                  ) {
                    p = 188 - c;
                    var m = this.pmt_.pid_stream_type[d];
                    (d !== this.pmt_.common_pids.h264 &&
                      d !== this.pmt_.common_pids.h265 &&
                      d !== this.pmt_.common_pids.adts_aac &&
                      d !== this.pmt_.common_pids.mp3 &&
                      !0 !== this.pmt_.pes_private_data_pids[d] &&
                      !0 !== this.pmt_.timed_id3_pids[d]) ||
                      this.handlePESSlice(e, i + c, p, {
                        pid: d,
                        stream_type: m,
                        file_position: n,
                        payload_unit_start_indicator: o,
                        continuity_conunter: _,
                        random_access_indicator: l.random_access_indicator,
                      });
                  }
                (i += 188), 204 === this.ts_packet_size_ && (i += 16);
              }
              return this.dispatchAudioVideoMediaSegment(), i;
            }),
            (t.prototype.parseAdaptationField = function (e, t, i) {
              var n = new Uint8Array(e, t, i),
                r = n[0];
              return r > 0
                ? r > 183
                  ? (a.a.w(this.TAG, "Illegal adaptation_field_length: " + r),
                    {})
                  : {
                      discontinuity_indicator: (128 & n[1]) >>> 7,
                      random_access_indicator: (64 & n[1]) >>> 6,
                      elementary_stream_priority_indicator: (32 & n[1]) >>> 5,
                    }
                : {};
            }),
            (t.prototype.handleSectionSlice = function (e, t, i, n) {
              var r = new Uint8Array(e, t, i),
                a = this.section_slice_queues_[n.pid];
              if (n.payload_unit_start_indicator) {
                var s = r[0];
                if (null != a && 0 !== a.total_length) {
                  var o = new Uint8Array(e, t + 1, Math.min(i, s));
                  a.slices.push(o),
                    (a.total_length += o.byteLength),
                    a.total_length === a.expected_length
                      ? this.emitSectionSlices(a, n)
                      : this.clearSlices(a, n);
                }
                for (var d = 1 + s; d < r.byteLength; ) {
                  if (255 === r[d + 0]) break;
                  var h = ((15 & r[d + 1]) << 8) | r[d + 2];
                  (this.section_slice_queues_[n.pid] = new C()),
                    ((a = this.section_slice_queues_[n.pid]).expected_length =
                      h + 3),
                    (a.file_position = n.file_position),
                    (a.random_access_indicator = n.random_access_indicator);
                  o = new Uint8Array(
                    e,
                    t + d,
                    Math.min(i - d, a.expected_length - a.total_length),
                  );
                  a.slices.push(o),
                    (a.total_length += o.byteLength),
                    a.total_length === a.expected_length
                      ? this.emitSectionSlices(a, n)
                      : a.total_length >= a.expected_length &&
                        this.clearSlices(a, n),
                    (d += o.byteLength);
                }
              } else if (null != a && 0 !== a.total_length) {
                o = new Uint8Array(
                  e,
                  t,
                  Math.min(i, a.expected_length - a.total_length),
                );
                a.slices.push(o),
                  (a.total_length += o.byteLength),
                  a.total_length === a.expected_length
                    ? this.emitSectionSlices(a, n)
                    : a.total_length >= a.expected_length &&
                      this.clearSlices(a, n);
              }
            }),
            (t.prototype.handlePESSlice = function (e, t, i, n) {
              var r = new Uint8Array(e, t, i),
                s = (r[0] << 16) | (r[1] << 8) | r[2],
                o = (r[3], (r[4] << 8) | r[5]);
              if (n.payload_unit_start_indicator) {
                if (1 !== s)
                  return void a.a.e(
                    this.TAG,
                    "handlePESSlice: packet_start_code_prefix should be 1 but with value " +
                      s,
                  );
                var d = this.pes_slice_queues_[n.pid];
                d &&
                  (0 === d.expected_length ||
                  d.expected_length === d.total_length
                    ? this.emitPESSlices(d, n)
                    : this.clearSlices(d, n)),
                  (this.pes_slice_queues_[n.pid] = new C()),
                  (this.pes_slice_queues_[n.pid].file_position =
                    n.file_position),
                  (this.pes_slice_queues_[n.pid].random_access_indicator =
                    n.random_access_indicator);
              }
              if (null != this.pes_slice_queues_[n.pid]) {
                var h = this.pes_slice_queues_[n.pid];
                h.slices.push(r),
                  n.payload_unit_start_indicator &&
                    (h.expected_length = 0 === o ? 0 : o + 6),
                  (h.total_length += r.byteLength),
                  h.expected_length > 0 && h.expected_length === h.total_length
                    ? this.emitPESSlices(h, n)
                    : h.expected_length > 0 &&
                      h.expected_length < h.total_length &&
                      this.clearSlices(h, n);
              }
            }),
            (t.prototype.emitSectionSlices = function (e, t) {
              for (
                var i = new Uint8Array(e.total_length), n = 0, r = 0;
                n < e.slices.length;
                n++
              ) {
                var a = e.slices[n];
                i.set(a, r), (r += a.byteLength);
              }
              (e.slices = []), (e.expected_length = -1), (e.total_length = 0);
              var s = new k();
              (s.pid = t.pid),
                (s.data = i),
                (s.file_position = e.file_position),
                (s.random_access_indicator = e.random_access_indicator),
                this.parseSection(s);
            }),
            (t.prototype.emitPESSlices = function (e, t) {
              for (
                var i = new Uint8Array(e.total_length), n = 0, r = 0;
                n < e.slices.length;
                n++
              ) {
                var a = e.slices[n];
                i.set(a, r), (r += a.byteLength);
              }
              (e.slices = []), (e.expected_length = -1), (e.total_length = 0);
              var s = new D();
              (s.pid = t.pid),
                (s.data = i),
                (s.stream_type = t.stream_type),
                (s.file_position = e.file_position),
                (s.random_access_indicator = e.random_access_indicator),
                this.parsePES(s);
            }),
            (t.prototype.clearSlices = function (e, t) {
              (e.slices = []), (e.expected_length = -1), (e.total_length = 0);
            }),
            (t.prototype.parseSection = function (e) {
              var t = e.data,
                i = e.pid;
              0 === i
                ? this.parsePAT(t)
                : i === this.current_pmt_pid_
                  ? this.parsePMT(t)
                  : null != this.pmt_ &&
                    this.pmt_.scte_35_pids[i] &&
                    this.parseSCTE35(t);
            }),
            (t.prototype.parsePES = function (e) {
              var t = e.data,
                i = (t[0] << 16) | (t[1] << 8) | t[2],
                n = t[3],
                r = (t[4] << 8) | t[5];
              if (1 === i) {
                if (
                  188 !== n &&
                  190 !== n &&
                  191 !== n &&
                  240 !== n &&
                  241 !== n &&
                  255 !== n &&
                  242 !== n &&
                  248 !== n
                ) {
                  t[6];
                  var s = (192 & t[7]) >>> 6,
                    o = t[8],
                    d = void 0,
                    h = void 0;
                  (2 !== s && 3 !== s) ||
                    ((d =
                      536870912 * (14 & t[9]) +
                      4194304 * (255 & t[10]) +
                      16384 * (254 & t[11]) +
                      128 * (255 & t[12]) +
                      (254 & t[13]) / 2),
                    (h =
                      3 === s
                        ? 536870912 * (14 & t[14]) +
                          4194304 * (255 & t[15]) +
                          16384 * (254 & t[16]) +
                          128 * (255 & t[17]) +
                          (254 & t[18]) / 2
                        : d));
                  var _ = 9 + o,
                    u = void 0;
                  if (0 !== r) {
                    if (r < 3 + o)
                      return void a.a.v(
                        this.TAG,
                        "Malformed PES: PES_packet_length < 3 + PES_header_data_length",
                      );
                    u = r - 3 - o;
                  } else u = t.byteLength - _;
                  var l = t.subarray(_, _ + u);
                  switch (e.stream_type) {
                    case b.kMPEG1Audio:
                    case b.kMPEG2Audio:
                      this.parseMP3Payload(l, d);
                      break;
                    case b.kPESPrivateData:
                      this.pmt_.smpte2038_pids[e.pid]
                        ? this.parseSMPTE2038MetadataPayload(l, d, h, e.pid, n)
                        : this.parsePESPrivateDataPayload(l, d, h, e.pid, n);
                      break;
                    case b.kADTSAAC:
                      this.parseAACPayload(l, d);
                      break;
                    case b.kID3:
                      this.parseTimedID3MetadataPayload(l, d, h, e.pid, n);
                      break;
                    case b.kH264:
                      this.parseH264Payload(
                        l,
                        d,
                        h,
                        e.file_position,
                        e.random_access_indicator,
                      );
                      break;
                    case b.kH265:
                      this.parseH265Payload(
                        l,
                        d,
                        h,
                        e.file_position,
                        e.random_access_indicator,
                      );
                  }
                } else if (
                  (188 === n ||
                    191 === n ||
                    240 === n ||
                    241 === n ||
                    255 === n ||
                    242 === n ||
                    248 === n) &&
                  e.stream_type === b.kPESPrivateData
                ) {
                  (_ = 6), (u = void 0);
                  u = 0 !== r ? r : t.byteLength - _;
                  l = t.subarray(_, _ + u);
                  this.parsePESPrivateDataPayload(l, void 0, void 0, e.pid, n);
                }
              } else
                a.a.e(
                  this.TAG,
                  "parsePES: packet_start_code_prefix should be 1 but with value " +
                    i,
                );
            }),
            (t.prototype.parsePAT = function (e) {
              var t = e[0];
              if (0 === t) {
                var i = ((15 & e[1]) << 8) | e[2],
                  n = (e[3], e[4], (62 & e[5]) >>> 1),
                  r = 1 & e[5],
                  s = e[6],
                  o = (e[7], null);
                if (1 === r && 0 === s) (o = new T()).version_number = n;
                else if (null == (o = this.pat_)) return;
                for (
                  var d = i - 5 - 4, h = -1, _ = -1, u = 8;
                  u < 8 + d;
                  u += 4
                ) {
                  var l = (e[u] << 8) | e[u + 1],
                    c = ((31 & e[u + 2]) << 8) | e[u + 3];
                  0 === l
                    ? (o.network_pid = c)
                    : ((o.program_pmt_pid[l] = c),
                      -1 === h && (h = l),
                      -1 === _ && (_ = c));
                }
                1 === r &&
                  0 === s &&
                  (null == this.pat_ &&
                    a.a.v(this.TAG, "Parsed first PAT: " + JSON.stringify(o)),
                  (this.pat_ = o),
                  (this.current_program_ = h),
                  (this.current_pmt_pid_ = _));
              } else
                a.a.e(
                  this.TAG,
                  "parsePAT: table_id " + t + " is not corresponded to PAT!",
                );
            }),
            (t.prototype.parsePMT = function (e) {
              var t = e[0];
              if (2 === t) {
                var i = ((15 & e[1]) << 8) | e[2],
                  n = (e[3] << 8) | e[4],
                  r = (62 & e[5]) >>> 1,
                  s = 1 & e[5],
                  o = e[6],
                  d = (e[7], null);
                if (1 === s && 0 === o)
                  ((d = new w()).program_number = n),
                    (d.version_number = r),
                    (this.program_pmt_map_[n] = d);
                else if (null == (d = this.program_pmt_map_[n])) return;
                e[8], e[9];
                for (
                  var h = ((15 & e[10]) << 8) | e[11],
                    _ = 12 + h,
                    u = i - 9 - h - 4,
                    l = _;
                  l < _ + u;

                ) {
                  var c = e[l],
                    f = ((31 & e[l + 1]) << 8) | e[l + 2],
                    p = ((15 & e[l + 3]) << 8) | e[l + 4];
                  if (
                    ((d.pid_stream_type[f] = c),
                    c !== b.kH264 || d.common_pids.h264 || d.common_pids.h265)
                  )
                    if (
                      c !== b.kH265 ||
                      d.common_pids.h264 ||
                      d.common_pids.h265
                    )
                      if (c !== b.kADTSAAC || d.common_pids.adts_aac)
                        if (
                          (c !== b.kMPEG1Audio && c !== b.kMPEG2Audio) ||
                          d.common_pids.mp3
                        )
                          if (c === b.kPESPrivateData) {
                            if (((d.pes_private_data_pids[f] = !0), p > 0)) {
                              for (var m = l + 5; m < l + 5 + p; ) {
                                var g = e[m + 0],
                                  v = e[m + 1];
                                if (5 === g)
                                  "VANC" ===
                                    String.fromCharCode.apply(
                                      String,
                                      Array.from(e.subarray(m + 2, m + 2 + v)),
                                    ) && (d.smpte2038_pids[f] = !0);
                                m += 2 + v;
                              }
                              var y = e.subarray(l + 5, l + 5 + p);
                              this.dispatchPESPrivateDataDescriptor(f, c, y);
                            }
                          } else
                            c === b.kID3
                              ? (d.timed_id3_pids[f] = !0)
                              : c === b.kSCTE35 && (d.scte_35_pids[f] = !0);
                        else d.common_pids.mp3 = f;
                      else d.common_pids.adts_aac = f;
                    else d.common_pids.h265 = f;
                  else d.common_pids.h264 = f;
                  l += 5 + p;
                }
                n === this.current_program_ &&
                  (null == this.pmt_ &&
                    a.a.v(this.TAG, "Parsed first PMT: " + JSON.stringify(d)),
                  (this.pmt_ = d),
                  (d.common_pids.h264 || d.common_pids.h265) &&
                    (this.has_video_ = !0),
                  (d.common_pids.adts_aac || d.common_pids.mp3) &&
                    (this.has_audio_ = !0));
              } else
                a.a.e(
                  this.TAG,
                  "parsePMT: table_id " + t + " is not corresponded to PMT!",
                );
            }),
            (t.prototype.parseSCTE35 = function (e) {
              var t = ne(e);
              if (null != t.pts) {
                var i = Math.floor(t.pts / this.timescale_);
                t.pts = i;
              } else t.nearest_pts = this.aac_last_sample_pts_;
              this.onSCTE35Metadata && this.onSCTE35Metadata(t);
            }),
            (t.prototype.parseH264Payload = function (e, t, i, n, r) {
              for (
                var s = new M(e), o = null, d = [], h = 0, _ = !1;
                null != (o = s.readNextNaluPayload());

              ) {
                var u = new O(o);
                if (u.type === L.kSliceSPS) {
                  var l = p.parseSPS(o.data);
                  this.video_init_segment_dispatched_
                    ? !0 === this.detectVideoMetadataChange(u, l) &&
                      (a.a.v(
                        this.TAG,
                        "H264: Critical h264 metadata has been changed, attempt to re-generate InitSegment",
                      ),
                      (this.video_metadata_changed_ = !0),
                      (this.video_metadata_ = {
                        vps: void 0,
                        sps: u,
                        pps: void 0,
                        details: l,
                      }))
                    : ((this.video_metadata_.sps = u),
                      (this.video_metadata_.details = l));
                } else
                  u.type === L.kSlicePPS
                    ? (this.video_init_segment_dispatched_ &&
                        !this.video_metadata_changed_) ||
                      ((this.video_metadata_.pps = u),
                      this.video_metadata_.sps &&
                        this.video_metadata_.pps &&
                        (this.video_metadata_changed_ &&
                          this.dispatchVideoMediaSegment(),
                        this.dispatchVideoInitSegment()))
                    : (u.type === L.kSliceIDR ||
                        (u.type === L.kSliceNonIDR && 1 === r)) &&
                      (_ = !0);
                this.video_init_segment_dispatched_ &&
                  (d.push(u), (h += u.data.byteLength));
              }
              var c = Math.floor(t / this.timescale_),
                f = Math.floor(i / this.timescale_);
              if (d.length) {
                var m = this.video_track_,
                  g = {
                    units: d,
                    length: h,
                    isKeyframe: _,
                    dts: f,
                    pts: c,
                    cts: c - f,
                    file_position: n,
                  };
                m.samples.push(g), (m.length += h);
              }
            }),
            (t.prototype.parseH265Payload = function (e, t, i, n, r) {
              for (
                var s = new oe(e), o = null, d = [], h = 0, _ = !1;
                null != (o = s.readNextNaluPayload());

              ) {
                var u = new se(o);
                if (u.type === H.kSliceVPS) {
                  if (!this.video_init_segment_dispatched_) {
                    var l = g.parseVPS(o.data);
                    (this.video_metadata_.vps = u),
                      (this.video_metadata_.details = le(
                        le({}, this.video_metadata_.details),
                        l,
                      ));
                  }
                } else if (u.type === H.kSliceSPS) {
                  l = g.parseSPS(o.data);
                  this.video_init_segment_dispatched_
                    ? !0 === this.detectVideoMetadataChange(u, l) &&
                      (a.a.v(
                        this.TAG,
                        "H265: Critical h265 metadata has been changed, attempt to re-generate InitSegment",
                      ),
                      (this.video_metadata_changed_ = !0),
                      (this.video_metadata_ = {
                        vps: void 0,
                        sps: u,
                        pps: void 0,
                        details: l,
                      }))
                    : ((this.video_metadata_.sps = u),
                      (this.video_metadata_.details = le(
                        le({}, this.video_metadata_.details),
                        l,
                      )));
                } else if (u.type === H.kSlicePPS) {
                  if (
                    !this.video_init_segment_dispatched_ ||
                    this.video_metadata_changed_
                  ) {
                    l = g.parsePPS(o.data);
                    (this.video_metadata_.pps = u),
                      (this.video_metadata_.details = le(
                        le({}, this.video_metadata_.details),
                        l,
                      )),
                      this.video_metadata_.vps &&
                        this.video_metadata_.sps &&
                        this.video_metadata_.pps &&
                        (this.video_metadata_changed_ &&
                          this.dispatchVideoMediaSegment(),
                        this.dispatchVideoInitSegment());
                  }
                } else
                  (u.type !== H.kSliceIDR_W_RADL &&
                    u.type !== H.kSliceIDR_N_LP &&
                    u.type !== H.kSliceCRA_NUT) ||
                    (_ = !0);
                this.video_init_segment_dispatched_ &&
                  (d.push(u), (h += u.data.byteLength));
              }
              var c = Math.floor(t / this.timescale_),
                f = Math.floor(i / this.timescale_);
              if (d.length) {
                var p = this.video_track_,
                  m = {
                    units: d,
                    length: h,
                    isKeyframe: _,
                    dts: f,
                    pts: c,
                    cts: c - f,
                    file_position: n,
                  };
                p.samples.push(m), (p.length += h);
              }
            }),
            (t.prototype.detectVideoMetadataChange = function (e, t) {
              if (
                t.codec_mimetype !== this.video_metadata_.details.codec_mimetype
              )
                return (
                  a.a.v(
                    this.TAG,
                    "Video: Codec mimeType changed from " +
                      this.video_metadata_.details.codec_mimetype +
                      " to " +
                      t.codec_mimetype,
                  ),
                  !0
                );
              if (
                t.codec_size.width !==
                  this.video_metadata_.details.codec_size.width ||
                t.codec_size.height !==
                  this.video_metadata_.details.codec_size.height
              ) {
                var i = this.video_metadata_.details.codec_size,
                  n = t.codec_size;
                return (
                  a.a.v(
                    this.TAG,
                    "Video: Coded Resolution changed from " +
                      i.width +
                      "x" +
                      i.height +
                      " to " +
                      n.width +
                      "x" +
                      n.height,
                  ),
                  !0
                );
              }
              return (
                t.present_size.width !==
                  this.video_metadata_.details.present_size.width &&
                (a.a.v(
                  this.TAG,
                  "Video: Present resolution width changed from " +
                    this.video_metadata_.details.present_size.width +
                    " to " +
                    t.present_size.width,
                ),
                !0)
              );
            }),
            (t.prototype.isInitSegmentDispatched = function () {
              return this.has_video_ && this.has_audio_
                ? this.video_init_segment_dispatched_ &&
                    this.audio_init_segment_dispatched_
                : this.has_video_ && !this.has_audio_
                  ? this.video_init_segment_dispatched_
                  : !(this.has_video_ || !this.has_audio_) &&
                    this.audio_init_segment_dispatched_;
            }),
            (t.prototype.dispatchVideoInitSegment = function () {
              var e = this.video_metadata_.details,
                t = { type: "video" };
              (t.id = this.video_track_.id),
                (t.timescale = 1e3),
                (t.duration = this.duration_),
                (t.codecWidth = e.codec_size.width),
                (t.codecHeight = e.codec_size.height),
                (t.presentWidth = e.present_size.width),
                (t.presentHeight = e.present_size.height),
                (t.profile = e.profile_string),
                (t.level = e.level_string),
                (t.bitDepth = e.bit_depth),
                (t.chromaFormat = e.chroma_format),
                (t.sarRatio = e.sar_ratio),
                (t.frameRate = e.frame_rate);
              var i = t.frameRate.fps_den,
                n = t.frameRate.fps_num;
              if (
                ((t.refSampleDuration = (i / n) * 1e3),
                (t.codec = e.codec_mimetype),
                this.video_metadata_.vps)
              ) {
                var r = this.video_metadata_.vps.data.subarray(4),
                  s = this.video_metadata_.sps.data.subarray(4),
                  o = this.video_metadata_.pps.data.subarray(4),
                  d = new de(r, s, o, e);
                (t.hvcc = d.getData()),
                  0 == this.video_init_segment_dispatched_ &&
                    a.a.v(
                      this.TAG,
                      "Generated first HEVCDecoderConfigurationRecord for mimeType: " +
                        t.codec,
                    );
              } else {
                (s = this.video_metadata_.sps.data.subarray(4)),
                  (o = this.video_metadata_.pps.data.subarray(4));
                var h = new x(s, o, e);
                (t.avcc = h.getData()),
                  0 == this.video_init_segment_dispatched_ &&
                    a.a.v(
                      this.TAG,
                      "Generated first AVCDecoderConfigurationRecord for mimeType: " +
                        t.codec,
                    );
              }
              this.onTrackMetadata("video", t),
                (this.video_init_segment_dispatched_ = !0),
                (this.video_metadata_changed_ = !1);
              var _ = this.media_info_;
              (_.hasVideo = !0),
                (_.width = t.codecWidth),
                (_.height = t.codecHeight),
                (_.fps = t.frameRate.fps),
                (_.profile = t.profile),
                (_.level = t.level),
                (_.refFrames = e.ref_frames),
                (_.chromaFormat = e.chroma_format_string),
                (_.sarNum = t.sarRatio.width),
                (_.sarDen = t.sarRatio.height),
                (_.videoCodec = t.codec),
                _.hasAudio && _.audioCodec
                  ? (_.mimeType =
                      'video/mp2t; codecs="' +
                      _.videoCodec +
                      "," +
                      _.audioCodec +
                      '"')
                  : (_.mimeType = 'video/mp2t; codecs="' + _.videoCodec + '"'),
                _.isComplete() && this.onMediaInfo(_);
            }),
            (t.prototype.dispatchVideoMediaSegment = function () {
              this.isInitSegmentDispatched() &&
                this.video_track_.length &&
                this.onDataAvailable(null, this.video_track_);
            }),
            (t.prototype.dispatchAudioMediaSegment = function () {
              this.isInitSegmentDispatched() &&
                this.audio_track_.length &&
                this.onDataAvailable(this.audio_track_, null);
            }),
            (t.prototype.dispatchAudioVideoMediaSegment = function () {
              this.isInitSegmentDispatched() &&
                (this.audio_track_.length || this.video_track_.length) &&
                this.onDataAvailable(this.audio_track_, this.video_track_);
            }),
            (t.prototype.parseAACPayload = function (e, t) {
              if (!this.has_video_ || this.video_init_segment_dispatched_) {
                if (this.aac_last_incomplete_data_) {
                  var i = new Uint8Array(
                    e.byteLength + this.aac_last_incomplete_data_.byteLength,
                  );
                  i.set(this.aac_last_incomplete_data_, 0),
                    i.set(e, this.aac_last_incomplete_data_.byteLength),
                    (e = i);
                }
                var n, r;
                if (
                  (null != t && (r = t / this.timescale_),
                  "aac" === this.audio_metadata_.codec)
                ) {
                  if (null == t && null != this.aac_last_sample_pts_)
                    (n =
                      (1024 / this.audio_metadata_.sampling_frequency) * 1e3),
                      (r = this.aac_last_sample_pts_ + n);
                  else if (null == t)
                    return void a.a.w(this.TAG, "AAC: Unknown pts");
                  if (
                    this.aac_last_incomplete_data_ &&
                    this.aac_last_sample_pts_
                  ) {
                    n = (1024 / this.audio_metadata_.sampling_frequency) * 1e3;
                    var s = this.aac_last_sample_pts_ + n;
                    Math.abs(s - r) > 1 &&
                      (a.a.w(
                        this.TAG,
                        "AAC: Detected pts overlapped, expected: " +
                          s +
                          "ms, PES pts: " +
                          r +
                          "ms",
                      ),
                      (r = s));
                  }
                }
                for (
                  var o, d = new V(e), h = null, _ = r;
                  null != (h = d.readNextAACFrame());

                ) {
                  n = (1024 / h.sampling_frequency) * 1e3;
                  var u = { codec: "aac", data: h };
                  0 == this.audio_init_segment_dispatched_
                    ? ((this.audio_metadata_ = {
                        codec: "aac",
                        audio_object_type: h.audio_object_type,
                        sampling_freq_index: h.sampling_freq_index,
                        sampling_frequency: h.sampling_frequency,
                        channel_config: h.channel_config,
                      }),
                      this.dispatchAudioInitSegment(u))
                    : this.detectAudioMetadataChange(u) &&
                      (this.dispatchAudioMediaSegment(),
                      this.dispatchAudioInitSegment(u)),
                    (o = _);
                  var l = Math.floor(_),
                    c = {
                      unit: h.data,
                      length: h.data.byteLength,
                      pts: l,
                      dts: l,
                    };
                  this.audio_track_.samples.push(c),
                    (this.audio_track_.length += h.data.byteLength),
                    (_ += n);
                }
                d.hasIncompleteData() &&
                  (this.aac_last_incomplete_data_ = d.getIncompleteData()),
                  o && (this.aac_last_sample_pts_ = o);
              }
            }),
            (t.prototype.parseMP3Payload = function (e, t) {
              if (!this.has_video_ || this.video_init_segment_dispatched_) {
                var i = [
                    0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384,
                    416, 448, -1,
                  ],
                  n = [
                    0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256,
                    320, 384, -1,
                  ],
                  r = [
                    0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256,
                    320, -1,
                  ],
                  a = (e[1] >>> 3) & 3,
                  s = (6 & e[1]) >> 1,
                  o = (240 & e[2]) >>> 4,
                  d = (12 & e[2]) >>> 2,
                  h = 3 !== ((e[3] >>> 6) & 3) ? 2 : 1,
                  _ = 0,
                  u = 34;
                switch (a) {
                  case 0:
                    _ = [11025, 12e3, 8e3, 0][d];
                    break;
                  case 2:
                    _ = [22050, 24e3, 16e3, 0][d];
                    break;
                  case 3:
                    _ = [44100, 48e3, 32e3, 0][d];
                }
                switch (s) {
                  case 1:
                    (u = 34), o < r.length && r[o];
                    break;
                  case 2:
                    (u = 33), o < n.length && n[o];
                    break;
                  case 3:
                    (u = 32), o < i.length && i[o];
                }
                var l = new _e();
                (l.object_type = u),
                  (l.sample_rate = _),
                  (l.channel_count = h),
                  (l.data = e);
                var c = { codec: "mp3", data: l };
                0 == this.audio_init_segment_dispatched_
                  ? ((this.audio_metadata_ = {
                      codec: "mp3",
                      object_type: u,
                      sample_rate: _,
                      channel_count: h,
                    }),
                    this.dispatchAudioInitSegment(c))
                  : this.detectAudioMetadataChange(c) &&
                    (this.dispatchAudioMediaSegment(),
                    this.dispatchAudioInitSegment(c));
                var f = {
                  unit: e,
                  length: e.byteLength,
                  pts: t / this.timescale_,
                  dts: t / this.timescale_,
                };
                this.audio_track_.samples.push(f),
                  (this.audio_track_.length += e.byteLength);
              }
            }),
            (t.prototype.detectAudioMetadataChange = function (e) {
              if (e.codec !== this.audio_metadata_.codec)
                return (
                  a.a.v(
                    this.TAG,
                    "Audio: Audio Codecs changed from " +
                      this.audio_metadata_.codec +
                      " to " +
                      e.codec,
                  ),
                  !0
                );
              if ("aac" === e.codec && "aac" === this.audio_metadata_.codec) {
                var t = e.data;
                if (
                  t.audio_object_type !== this.audio_metadata_.audio_object_type
                )
                  return (
                    a.a.v(
                      this.TAG,
                      "AAC: AudioObjectType changed from " +
                        this.audio_metadata_.audio_object_type +
                        " to " +
                        t.audio_object_type,
                    ),
                    !0
                  );
                if (
                  t.sampling_freq_index !==
                  this.audio_metadata_.sampling_freq_index
                )
                  return (
                    a.a.v(
                      this.TAG,
                      "AAC: SamplingFrequencyIndex changed from " +
                        this.audio_metadata_.sampling_freq_index +
                        " to " +
                        t.sampling_freq_index,
                    ),
                    !0
                  );
                if (t.channel_config !== this.audio_metadata_.channel_config)
                  return (
                    a.a.v(
                      this.TAG,
                      "AAC: Channel configuration changed from " +
                        this.audio_metadata_.channel_config +
                        " to " +
                        t.channel_config,
                    ),
                    !0
                  );
              } else if (
                "mp3" === e.codec &&
                "mp3" === this.audio_metadata_.codec
              ) {
                var i = e.data;
                if (i.object_type !== this.audio_metadata_.object_type)
                  return (
                    a.a.v(
                      this.TAG,
                      "MP3: AudioObjectType changed from " +
                        this.audio_metadata_.object_type +
                        " to " +
                        i.object_type,
                    ),
                    !0
                  );
                if (i.sample_rate !== this.audio_metadata_.sample_rate)
                  return (
                    a.a.v(
                      this.TAG,
                      "MP3: SamplingFrequencyIndex changed from " +
                        this.audio_metadata_.sample_rate +
                        " to " +
                        i.sample_rate,
                    ),
                    !0
                  );
                if (i.channel_count !== this.audio_metadata_.channel_count)
                  return (
                    a.a.v(
                      this.TAG,
                      "MP3: Channel count changed from " +
                        this.audio_metadata_.channel_count +
                        " to " +
                        i.channel_count,
                    ),
                    !0
                  );
              }
              return !1;
            }),
            (t.prototype.dispatchAudioInitSegment = function (e) {
              var t = { type: "audio" };
              if (
                ((t.id = this.audio_track_.id),
                (t.timescale = 1e3),
                (t.duration = this.duration_),
                "aac" === this.audio_metadata_.codec)
              ) {
                var i = e.data,
                  n = new F(i);
                (t.audioSampleRate = n.sampling_rate),
                  (t.channelCount = n.channel_count),
                  (t.codec = n.codec_mimetype),
                  (t.originalCodec = n.original_codec_mimetype),
                  (t.config = n.config);
              } else
                "mp3" === this.audio_metadata_.codec &&
                  ((t.audioSampleRate = this.audio_metadata_.sample_rate),
                  (t.channelCount = this.audio_metadata_.channel_count),
                  (t.codec = "mp3"),
                  (t.originalCodec = "mp3"),
                  (t.config = void 0));
              (t.refSampleDuration = (1024 / t.audioSampleRate) * t.timescale),
                0 == this.audio_init_segment_dispatched_ &&
                  a.a.v(
                    this.TAG,
                    "Generated first AudioSpecificConfig for mimeType: " +
                      t.codec,
                  ),
                this.onTrackMetadata("audio", t),
                (this.audio_init_segment_dispatched_ = !0),
                (this.video_metadata_changed_ = !1);
              var r = this.media_info_;
              (r.hasAudio = !0),
                (r.audioCodec = t.originalCodec),
                (r.audioSampleRate = t.audioSampleRate),
                (r.audioChannelCount = t.channelCount),
                r.hasVideo && r.videoCodec
                  ? (r.mimeType =
                      'video/mp2t; codecs="' +
                      r.videoCodec +
                      "," +
                      r.audioCodec +
                      '"')
                  : (r.mimeType = 'video/mp2t; codecs="' + r.audioCodec + '"'),
                r.isComplete() && this.onMediaInfo(r);
            }),
            (t.prototype.dispatchPESPrivateDataDescriptor = function (e, t, i) {
              var n = new z();
              (n.pid = e),
                (n.stream_type = t),
                (n.descriptor = i),
                this.onPESPrivateDataDescriptor &&
                  this.onPESPrivateDataDescriptor(n);
            }),
            (t.prototype.parsePESPrivateDataPayload = function (e, t, i, n, r) {
              var a = new j();
              if (
                ((a.pid = n),
                (a.stream_id = r),
                (a.len = e.byteLength),
                (a.data = e),
                null != t)
              ) {
                var s = Math.floor(t / this.timescale_);
                a.pts = s;
              } else a.nearest_pts = this.aac_last_sample_pts_;
              if (null != i) {
                var o = Math.floor(i / this.timescale_);
                a.dts = o;
              }
              this.onPESPrivateData && this.onPESPrivateData(a);
            }),
            (t.prototype.parseTimedID3MetadataPayload = function (
              e,
              t,
              i,
              n,
              r,
            ) {
              var a = new j();
              if (
                ((a.pid = n),
                (a.stream_id = r),
                (a.len = e.byteLength),
                (a.data = e),
                null != t)
              ) {
                var s = Math.floor(t / this.timescale_);
                a.pts = s;
              }
              if (null != i) {
                var o = Math.floor(i / this.timescale_);
                a.dts = o;
              }
              this.onTimedID3Metadata && this.onTimedID3Metadata(a);
            }),
            (t.prototype.parseSMPTE2038MetadataPayload = function (
              e,
              t,
              i,
              n,
              r,
            ) {
              var a = new he();
              if (
                ((a.pid = n),
                (a.stream_id = r),
                (a.len = e.byteLength),
                (a.data = e),
                null != t)
              ) {
                var s = Math.floor(t / this.timescale_);
                a.pts = s;
              }
              if (((a.nearest_pts = this.aac_last_sample_pts_), null != i)) {
                var o = Math.floor(i / this.timescale_);
                a.dts = o;
              }
              (a.ancillaries = (function (e) {
                for (var t = new f(e), i = 0, n = []; ; ) {
                  if (((i += 6), 0 !== t.readBits(6))) break;
                  var r = t.readBool();
                  i += 1;
                  var a = t.readBits(11);
                  i += 11;
                  var s = t.readBits(12);
                  i += 12;
                  var o = 255 & t.readBits(10);
                  i += 10;
                  var d = 255 & t.readBits(10);
                  i += 10;
                  var h = 255 & t.readBits(10);
                  i += 10;
                  for (var _ = new Uint8Array(h), u = 0; u < h; u++) {
                    var l = 255 & t.readBits(10);
                    (i += 10), (_[u] = l);
                  }
                  t.readBits(10);
                  i += 10;
                  var c = "User Defined";
                  65 === o
                    ? 7 === d && (c = "SCTE-104")
                    : 95 === o
                      ? 220 === d
                        ? (c = "ARIB STD-B37 (1SEG)")
                        : 221 === d
                          ? (c = "ARIB STD-B37 (ANALOG)")
                          : 222 === d
                            ? (c = "ARIB STD-B37 (SD)")
                            : 223 === d && (c = "ARIB STD-B37 (HD)")
                      : 97 === o &&
                        (1 === d
                          ? (c = "EIA-708")
                          : 2 === d && (c = "EIA-608")),
                    n.push({
                      yc_indicator: r,
                      line_number: a,
                      horizontal_offset: s,
                      did: o,
                      sdid: d,
                      user_data: _,
                      description: c,
                      information: {},
                    }),
                    t.readBits(8 - ((i - Math.floor(i / 8)) % 8)),
                    (i += (8 - (i - Math.floor(i / 8))) % 8);
                }
                return t.destroy(), (t = null), n;
              })(e)),
                this.onSMPTE2038Metadata && this.onSMPTE2038Metadata(a);
            }),
            t
          );
        })(R),
        fe = (function () {
          function e() {}
          return (
            (e.init = function () {
              for (var t in ((e.types = {
                avc1: [],
                avcC: [],
                btrt: [],
                dinf: [],
                dref: [],
                esds: [],
                ftyp: [],
                hdlr: [],
                hvc1: [],
                hvcC: [],
                mdat: [],
                mdhd: [],
                mdia: [],
                mfhd: [],
                minf: [],
                moof: [],
                moov: [],
                mp4a: [],
                mvex: [],
                mvhd: [],
                sdtp: [],
                stbl: [],
                stco: [],
                stsc: [],
                stsd: [],
                stsz: [],
                stts: [],
                tfdt: [],
                tfhd: [],
                traf: [],
                trak: [],
                trun: [],
                trex: [],
                tkhd: [],
                vmhd: [],
                smhd: [],
                ".mp3": [],
              }),
              e.types))
                e.types.hasOwnProperty(t) &&
                  (e.types[t] = [
                    t.charCodeAt(0),
                    t.charCodeAt(1),
                    t.charCodeAt(2),
                    t.charCodeAt(3),
                  ]);
              var i = (e.constants = {});
              (i.FTYP = new Uint8Array([
                105, 115, 111, 109, 0, 0, 0, 1, 105, 115, 111, 109, 97, 118, 99,
                49,
              ])),
                (i.STSD_PREFIX = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1])),
                (i.STTS = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                (i.STSC = i.STCO = i.STTS),
                (i.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])),
                (i.HDLR_VIDEO = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100,
                  108, 101, 114, 0,
                ])),
                (i.HDLR_AUDIO = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0,
                  0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100,
                  108, 101, 114, 0,
                ])),
                (i.DREF = new Uint8Array([
                  0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0,
                  0, 1,
                ])),
                (i.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0])),
                (i.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]));
            }),
            (e.box = function (e) {
              for (
                var t = 8,
                  i = null,
                  n = Array.prototype.slice.call(arguments, 1),
                  r = n.length,
                  a = 0;
                a < r;
                a++
              )
                t += n[a].byteLength;
              ((i = new Uint8Array(t))[0] = (t >>> 24) & 255),
                (i[1] = (t >>> 16) & 255),
                (i[2] = (t >>> 8) & 255),
                (i[3] = 255 & t),
                i.set(e, 4);
              var s = 8;
              for (a = 0; a < r; a++) i.set(n[a], s), (s += n[a].byteLength);
              return i;
            }),
            (e.generateInitSegment = function (t) {
              var i = e.box(e.types.ftyp, e.constants.FTYP),
                n = e.moov(t),
                r = new Uint8Array(i.byteLength + n.byteLength);
              return r.set(i, 0), r.set(n, i.byteLength), r;
            }),
            (e.moov = function (t) {
              var i = e.mvhd(t.timescale, t.duration),
                n = e.trak(t),
                r = e.mvex(t);
              return e.box(e.types.moov, i, n, r);
            }),
            (e.mvhd = function (t, i) {
              return e.box(
                e.types.mvhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (t >>> 24) & 255,
                  (t >>> 16) & 255,
                  (t >>> 8) & 255,
                  255 & t,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  0,
                  1,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  64,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  255,
                  255,
                  255,
                  255,
                ]),
              );
            }),
            (e.trak = function (t) {
              return e.box(e.types.trak, e.tkhd(t), e.mdia(t));
            }),
            (e.tkhd = function (t) {
              var i = t.id,
                n = t.duration,
                r = t.presentWidth,
                a = t.presentHeight;
              return e.box(
                e.types.tkhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  7,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  64,
                  0,
                  0,
                  0,
                  (r >>> 8) & 255,
                  255 & r,
                  0,
                  0,
                  (a >>> 8) & 255,
                  255 & a,
                  0,
                  0,
                ]),
              );
            }),
            (e.mdia = function (t) {
              return e.box(e.types.mdia, e.mdhd(t), e.hdlr(t), e.minf(t));
            }),
            (e.mdhd = function (t) {
              var i = t.timescale,
                n = t.duration;
              return e.box(
                e.types.mdhd,
                new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  (n >>> 24) & 255,
                  (n >>> 16) & 255,
                  (n >>> 8) & 255,
                  255 & n,
                  85,
                  196,
                  0,
                  0,
                ]),
              );
            }),
            (e.hdlr = function (t) {
              var i = null;
              return (
                (i =
                  "audio" === t.type
                    ? e.constants.HDLR_AUDIO
                    : e.constants.HDLR_VIDEO),
                e.box(e.types.hdlr, i)
              );
            }),
            (e.minf = function (t) {
              var i = null;
              return (
                (i =
                  "audio" === t.type
                    ? e.box(e.types.smhd, e.constants.SMHD)
                    : e.box(e.types.vmhd, e.constants.VMHD)),
                e.box(e.types.minf, i, e.dinf(), e.stbl(t))
              );
            }),
            (e.dinf = function () {
              return e.box(e.types.dinf, e.box(e.types.dref, e.constants.DREF));
            }),
            (e.stbl = function (t) {
              return e.box(
                e.types.stbl,
                e.stsd(t),
                e.box(e.types.stts, e.constants.STTS),
                e.box(e.types.stsc, e.constants.STSC),
                e.box(e.types.stsz, e.constants.STSZ),
                e.box(e.types.stco, e.constants.STCO),
              );
            }),
            (e.stsd = function (t) {
              return "audio" === t.type
                ? "mp3" === t.codec
                  ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp3(t))
                  : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.mp4a(t))
                : "video" === t.type && t.codec.startsWith("hvc1")
                  ? e.box(e.types.stsd, e.constants.STSD_PREFIX, e.hvc1(t))
                  : e.box(e.types.stsd, e.constants.STSD_PREFIX, e.avc1(t));
            }),
            (e.mp3 = function (t) {
              var i = t.channelCount,
                n = t.audioSampleRate,
                r = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  i,
                  0,
                  16,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 8) & 255,
                  255 & n,
                  0,
                  0,
                ]);
              return e.box(e.types[".mp3"], r);
            }),
            (e.mp4a = function (t) {
              var i = t.channelCount,
                n = t.audioSampleRate,
                r = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  i,
                  0,
                  16,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 8) & 255,
                  255 & n,
                  0,
                  0,
                ]);
              return e.box(e.types.mp4a, r, e.esds(t));
            }),
            (e.esds = function (t) {
              var i = t.config || [],
                n = i.length,
                r = new Uint8Array(
                  [
                    0,
                    0,
                    0,
                    0,
                    3,
                    23 + n,
                    0,
                    1,
                    0,
                    4,
                    15 + n,
                    64,
                    21,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    5,
                  ]
                    .concat([n])
                    .concat(i)
                    .concat([6, 1, 2]),
                );
              return e.box(e.types.esds, r);
            }),
            (e.avc1 = function (t) {
              var i = t.avcc,
                n = t.codecWidth,
                r = t.codecHeight,
                a = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 8) & 255,
                  255 & n,
                  (r >>> 8) & 255,
                  255 & r,
                  0,
                  72,
                  0,
                  0,
                  0,
                  72,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  10,
                  120,
                  113,
                  113,
                  47,
                  102,
                  108,
                  118,
                  46,
                  106,
                  115,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  24,
                  255,
                  255,
                ]);
              return e.box(e.types.avc1, a, e.box(e.types.avcC, i));
            }),
            (e.hvc1 = function (t) {
              var i = t.hvcc,
                n = t.codecWidth,
                r = t.codecHeight,
                a = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  (n >>> 8) & 255,
                  255 & n,
                  (r >>> 8) & 255,
                  255 & r,
                  0,
                  72,
                  0,
                  0,
                  0,
                  72,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  10,
                  120,
                  113,
                  113,
                  47,
                  102,
                  108,
                  118,
                  46,
                  106,
                  115,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  24,
                  255,
                  255,
                ]);
              return e.box(e.types.hvc1, a, e.box(e.types.hvcC, i));
            }),
            (e.mvex = function (t) {
              return e.box(e.types.mvex, e.trex(t));
            }),
            (e.trex = function (t) {
              var i = t.id,
                n = new Uint8Array([
                  0,
                  0,
                  0,
                  0,
                  (i >>> 24) & 255,
                  (i >>> 16) & 255,
                  (i >>> 8) & 255,
                  255 & i,
                  0,
                  0,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  1,
                  0,
                  1,
                ]);
              return e.box(e.types.trex, n);
            }),
            (e.moof = function (t, i) {
              return e.box(
                e.types.moof,
                e.mfhd(t.sequenceNumber),
                e.traf(t, i),
              );
            }),
            (e.mfhd = function (t) {
              var i = new Uint8Array([
                0,
                0,
                0,
                0,
                (t >>> 24) & 255,
                (t >>> 16) & 255,
                (t >>> 8) & 255,
                255 & t,
              ]);
              return e.box(e.types.mfhd, i);
            }),
            (e.traf = function (t, i) {
              var n = t.id,
                r = e.box(
                  e.types.tfhd,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    (n >>> 24) & 255,
                    (n >>> 16) & 255,
                    (n >>> 8) & 255,
                    255 & n,
                  ]),
                ),
                a = e.box(
                  e.types.tfdt,
                  new Uint8Array([
                    0,
                    0,
                    0,
                    0,
                    (i >>> 24) & 255,
                    (i >>> 16) & 255,
                    (i >>> 8) & 255,
                    255 & i,
                  ]),
                ),
                s = e.sdtp(t),
                o = e.trun(t, s.byteLength + 16 + 16 + 8 + 16 + 8 + 8);
              return e.box(e.types.traf, r, a, o, s);
            }),
            (e.sdtp = function (t) {
              for (
                var i = t.samples || [],
                  n = i.length,
                  r = new Uint8Array(4 + n),
                  a = 0;
                a < n;
                a++
              ) {
                var s = i[a].flags;
                r[a + 4] =
                  (s.isLeading << 6) |
                  (s.dependsOn << 4) |
                  (s.isDependedOn << 2) |
                  s.hasRedundancy;
              }
              return e.box(e.types.sdtp, r);
            }),
            (e.trun = function (t, i) {
              var n = t.samples || [],
                r = n.length,
                a = 12 + 16 * r,
                s = new Uint8Array(a);
              (i += 8 + a),
                s.set(
                  [
                    0,
                    0,
                    15,
                    1,
                    (r >>> 24) & 255,
                    (r >>> 16) & 255,
                    (r >>> 8) & 255,
                    255 & r,
                    (i >>> 24) & 255,
                    (i >>> 16) & 255,
                    (i >>> 8) & 255,
                    255 & i,
                  ],
                  0,
                );
              for (var o = 0; o < r; o++) {
                var d = n[o].duration,
                  h = n[o].size,
                  _ = n[o].flags,
                  u = n[o].cts;
                s.set(
                  [
                    (d >>> 24) & 255,
                    (d >>> 16) & 255,
                    (d >>> 8) & 255,
                    255 & d,
                    (h >>> 24) & 255,
                    (h >>> 16) & 255,
                    (h >>> 8) & 255,
                    255 & h,
                    (_.isLeading << 2) | _.dependsOn,
                    (_.isDependedOn << 6) |
                      (_.hasRedundancy << 4) |
                      _.isNonSync,
                    0,
                    0,
                    (u >>> 24) & 255,
                    (u >>> 16) & 255,
                    (u >>> 8) & 255,
                    255 & u,
                  ],
                  12 + 16 * o,
                );
              }
              return e.box(e.types.trun, s);
            }),
            (e.mdat = function (t) {
              return e.box(e.types.mdat, t);
            }),
            e
          );
        })();
      fe.init();
      var pe = fe,
        me = (function () {
          function e() {}
          return (
            (e.getSilentFrame = function (e, t) {
              if ("mp4a.40.2" === e) {
                if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
                if (2 === t)
                  return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                if (3 === t)
                  return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142,
                  ]);
                if (4 === t)
                  return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128,
                    8, 2, 56,
                  ]);
                if (5 === t)
                  return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4,
                    153, 0, 33, 144, 2, 56,
                  ]);
                if (6 === t)
                  return new Uint8Array([
                    0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4,
                    153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224,
                  ]);
              } else {
                if (1 === t)
                  return new Uint8Array([
                    1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6,
                    241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                  ]);
                if (2 === t)
                  return new Uint8Array([
                    1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149,
                    0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                  ]);
                if (3 === t)
                  return new Uint8Array([
                    1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149,
                    0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90,
                    90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94,
                  ]);
              }
              return null;
            }),
            e
          );
        })(),
        ge = i(7),
        ve = (function () {
          function e(e) {
            (this.TAG = "MP4Remuxer"),
              (this._config = e),
              (this._isLive = !0 === e.isLive),
              (this._dtsBase = -1),
              (this._dtsBaseInited = !1),
              (this._audioDtsBase = 1 / 0),
              (this._videoDtsBase = 1 / 0),
              (this._audioNextDts = void 0),
              (this._videoNextDts = void 0),
              (this._audioStashedLastSample = null),
              (this._videoStashedLastSample = null),
              (this._audioMeta = null),
              (this._videoMeta = null),
              (this._audioSegmentInfoList = new ge.c("audio")),
              (this._videoSegmentInfoList = new ge.c("video")),
              (this._onInitSegment = null),
              (this._onMediaSegment = null),
              (this._forceFirstIDR = !(
                !s.a.chrome ||
                !(
                  s.a.version.major < 50 ||
                  (50 === s.a.version.major && s.a.version.build < 2661)
                )
              )),
              (this._fillSilentAfterSeek = s.a.msedge || s.a.msie),
              (this._mp3UseMpegAudio = !s.a.firefox),
              (this._fillAudioTimestampGap = this._config.fixAudioTimestampGap);
          }
          return (
            (e.prototype.destroy = function () {
              (this._dtsBase = -1),
                (this._dtsBaseInited = !1),
                (this._audioMeta = null),
                (this._videoMeta = null),
                this._audioSegmentInfoList.clear(),
                (this._audioSegmentInfoList = null),
                this._videoSegmentInfoList.clear(),
                (this._videoSegmentInfoList = null),
                (this._onInitSegment = null),
                (this._onMediaSegment = null);
            }),
            (e.prototype.bindDataSource = function (e) {
              return (
                (e.onDataAvailable = this.remux.bind(this)),
                (e.onTrackMetadata = this._onTrackMetadataReceived.bind(this)),
                this
              );
            }),
            Object.defineProperty(e.prototype, "onInitSegment", {
              get: function () {
                return this._onInitSegment;
              },
              set: function (e) {
                this._onInitSegment = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onMediaSegment", {
              get: function () {
                return this._onMediaSegment;
              },
              set: function (e) {
                this._onMediaSegment = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.insertDiscontinuity = function () {
              this._audioNextDts = this._videoNextDts = void 0;
            }),
            (e.prototype.seek = function (e) {
              (this._audioStashedLastSample = null),
                (this._videoStashedLastSample = null),
                this._videoSegmentInfoList.clear(),
                this._audioSegmentInfoList.clear();
            }),
            (e.prototype.remux = function (e, t) {
              if (!this._onMediaSegment)
                throw new u.a(
                  "MP4Remuxer: onMediaSegment callback must be specificed!",
                );
              this._dtsBaseInited || this._calculateDtsBase(e, t),
                t && this._remuxVideo(t),
                e && this._remuxAudio(e);
            }),
            (e.prototype._onTrackMetadataReceived = function (e, t) {
              var i = null,
                n = "mp4",
                r = t.codec;
              if ("audio" === e)
                (this._audioMeta = t),
                  "mp3" === t.codec && this._mp3UseMpegAudio
                    ? ((n = "mpeg"), (r = ""), (i = new Uint8Array()))
                    : (i = pe.generateInitSegment(t));
              else {
                if ("video" !== e) return;
                (this._videoMeta = t), (i = pe.generateInitSegment(t));
              }
              if (!this._onInitSegment)
                throw new u.a(
                  "MP4Remuxer: onInitSegment callback must be specified!",
                );
              this._onInitSegment(e, {
                type: e,
                data: i.buffer,
                codec: r,
                container: e + "/" + n,
                mediaDuration: t.duration,
              });
            }),
            (e.prototype._calculateDtsBase = function (e, t) {
              this._dtsBaseInited ||
                (e &&
                  e.samples &&
                  e.samples.length &&
                  (this._audioDtsBase = e.samples[0].dts),
                t &&
                  t.samples &&
                  t.samples.length &&
                  (this._videoDtsBase = t.samples[0].dts),
                (this._dtsBase = Math.min(
                  this._audioDtsBase,
                  this._videoDtsBase,
                )),
                (this._dtsBaseInited = !0));
            }),
            (e.prototype.getTimestampBase = function () {
              if (this._dtsBaseInited) return this._dtsBase;
            }),
            (e.prototype.flushStashedSamples = function () {
              var e = this._videoStashedLastSample,
                t = this._audioStashedLastSample,
                i = {
                  type: "video",
                  id: 1,
                  sequenceNumber: 0,
                  samples: [],
                  length: 0,
                };
              null != e && (i.samples.push(e), (i.length = e.length));
              var n = {
                type: "audio",
                id: 2,
                sequenceNumber: 0,
                samples: [],
                length: 0,
              };
              null != t && (n.samples.push(t), (n.length = t.length)),
                (this._videoStashedLastSample = null),
                (this._audioStashedLastSample = null),
                this._remuxVideo(i, !0),
                this._remuxAudio(n, !0);
            }),
            (e.prototype._remuxAudio = function (e, t) {
              if (null != this._audioMeta) {
                var i,
                  n = e,
                  r = n.samples,
                  o = void 0,
                  d = -1,
                  h = this._audioMeta.refSampleDuration,
                  _ = "mp3" === this._audioMeta.codec && this._mp3UseMpegAudio,
                  u = this._dtsBaseInited && void 0 === this._audioNextDts,
                  l = !1;
                if (r && 0 !== r.length && (1 !== r.length || t)) {
                  var c = 0,
                    f = null,
                    p = 0;
                  _ ? ((c = 0), (p = n.length)) : ((c = 8), (p = 8 + n.length));
                  var m = null;
                  if (
                    (r.length > 1 && (p -= (m = r.pop()).length),
                    null != this._audioStashedLastSample)
                  ) {
                    var g = this._audioStashedLastSample;
                    (this._audioStashedLastSample = null),
                      r.unshift(g),
                      (p += g.length);
                  }
                  null != m && (this._audioStashedLastSample = m);
                  var v = r[0].dts - this._dtsBase;
                  if (this._audioNextDts) o = v - this._audioNextDts;
                  else if (this._audioSegmentInfoList.isEmpty())
                    (o = 0),
                      this._fillSilentAfterSeek &&
                        !this._videoSegmentInfoList.isEmpty() &&
                        "mp3" !== this._audioMeta.originalCodec &&
                        (l = !0);
                  else {
                    var y = this._audioSegmentInfoList.getLastSampleBefore(v);
                    if (null != y) {
                      var E = v - (y.originalDts + y.duration);
                      E <= 3 && (E = 0), (o = v - (y.dts + y.duration + E));
                    } else o = 0;
                  }
                  if (l) {
                    var S = v - o,
                      b = this._videoSegmentInfoList.getLastSegmentBefore(v);
                    if (null != b && b.beginDts < S) {
                      if (
                        (P = me.getSilentFrame(
                          this._audioMeta.originalCodec,
                          this._audioMeta.channelCount,
                        ))
                      ) {
                        var A = b.beginDts,
                          R = S - b.beginDts;
                        a.a.v(
                          this.TAG,
                          "InsertPrefixSilentAudio: dts: " +
                            A +
                            ", duration: " +
                            R,
                        ),
                          r.unshift({ unit: P, dts: A, pts: A }),
                          (p += P.byteLength);
                      }
                    } else l = !1;
                  }
                  for (var T = [], L = 0; L < r.length; L++) {
                    var w = (g = r[L]).unit,
                      D = g.dts - this._dtsBase,
                      k = ((A = D), !1),
                      C = null,
                      B = 0;
                    if (!(D < -0.001)) {
                      if ("mp3" !== this._audioMeta.codec) {
                        var I = D;
                        if (
                          (this._audioNextDts && (I = this._audioNextDts),
                          (o = D - I) <= -3 * h)
                        ) {
                          a.a.w(
                            this.TAG,
                            "Dropping 1 audio frame (originalDts: " +
                              D +
                              " ms ,curRefDts: " +
                              I +
                              " ms)  due to dtsCorrection: " +
                              o +
                              " ms overlap.",
                          );
                          continue;
                        }
                        if (
                          o >= 3 * h &&
                          this._fillAudioTimestampGap &&
                          !s.a.safari
                        ) {
                          k = !0;
                          var P,
                            O = Math.floor(o / h);
                          a.a.w(
                            this.TAG,
                            "Large audio timestamp gap detected, may cause AV sync to drift. Silent frames will be generated to avoid unsync.\noriginalDts: " +
                              D +
                              " ms, curRefDts: " +
                              I +
                              " ms, dtsCorrection: " +
                              Math.round(o) +
                              " ms, generate: " +
                              O +
                              " frames",
                          ),
                            (A = Math.floor(I)),
                            (B = Math.floor(I + h) - A),
                            null ==
                              (P = me.getSilentFrame(
                                this._audioMeta.originalCodec,
                                this._audioMeta.channelCount,
                              )) &&
                              (a.a.w(
                                this.TAG,
                                "Unable to generate silent frame for " +
                                  this._audioMeta.originalCodec +
                                  " with " +
                                  this._audioMeta.channelCount +
                                  " channels, repeat last frame",
                              ),
                              (P = w)),
                            (C = []);
                          for (var M = 0; M < O; M++) {
                            I += h;
                            var x = Math.floor(I),
                              U = Math.floor(I + h) - x,
                              N = {
                                dts: x,
                                pts: x,
                                cts: 0,
                                unit: P,
                                size: P.byteLength,
                                duration: U,
                                originalDts: D,
                                flags: {
                                  isLeading: 0,
                                  dependsOn: 1,
                                  isDependedOn: 0,
                                  hasRedundancy: 0,
                                },
                              };
                            C.push(N), (p += N.size);
                          }
                          this._audioNextDts = I + h;
                        } else
                          (A = Math.floor(I)),
                            (B = Math.floor(I + h) - A),
                            (this._audioNextDts = I + h);
                      } else {
                        if (((A = D - o), L !== r.length - 1))
                          B = r[L + 1].dts - this._dtsBase - o - A;
                        else if (null != m) B = m.dts - this._dtsBase - o - A;
                        else
                          B =
                            T.length >= 1
                              ? T[T.length - 1].duration
                              : Math.floor(h);
                        this._audioNextDts = A + B;
                      }
                      -1 === d && (d = A),
                        T.push({
                          dts: A,
                          pts: A,
                          cts: 0,
                          unit: g.unit,
                          size: g.unit.byteLength,
                          duration: B,
                          originalDts: D,
                          flags: {
                            isLeading: 0,
                            dependsOn: 1,
                            isDependedOn: 0,
                            hasRedundancy: 0,
                          },
                        }),
                        k && T.push.apply(T, C);
                    }
                  }
                  if (0 === T.length)
                    return (n.samples = []), void (n.length = 0);
                  _
                    ? (f = new Uint8Array(p))
                    : (((f = new Uint8Array(p))[0] = (p >>> 24) & 255),
                      (f[1] = (p >>> 16) & 255),
                      (f[2] = (p >>> 8) & 255),
                      (f[3] = 255 & p),
                      f.set(pe.types.mdat, 4));
                  for (L = 0; L < T.length; L++) {
                    w = T[L].unit;
                    f.set(w, c), (c += w.byteLength);
                  }
                  var G = T[T.length - 1];
                  i = G.dts + G.duration;
                  var V = new ge.b();
                  (V.beginDts = d),
                    (V.endDts = i),
                    (V.beginPts = d),
                    (V.endPts = i),
                    (V.originalBeginDts = T[0].originalDts),
                    (V.originalEndDts = G.originalDts + G.duration),
                    (V.firstSample = new ge.d(
                      T[0].dts,
                      T[0].pts,
                      T[0].duration,
                      T[0].originalDts,
                      !1,
                    )),
                    (V.lastSample = new ge.d(
                      G.dts,
                      G.pts,
                      G.duration,
                      G.originalDts,
                      !1,
                    )),
                    this._isLive || this._audioSegmentInfoList.append(V),
                    (n.samples = T),
                    n.sequenceNumber++;
                  var F = null;
                  (F = _ ? new Uint8Array() : pe.moof(n, d)),
                    (n.samples = []),
                    (n.length = 0);
                  var j = {
                    type: "audio",
                    data: this._mergeBoxes(F, f).buffer,
                    sampleCount: T.length,
                    info: V,
                  };
                  _ && u && (j.timestampOffset = d),
                    this._onMediaSegment("audio", j);
                }
              }
            }),
            (e.prototype._remuxVideo = function (e, t) {
              if (null != this._videoMeta) {
                var i,
                  n,
                  r = e,
                  a = r.samples,
                  s = void 0,
                  o = -1,
                  d = -1;
                if (a && 0 !== a.length && (1 !== a.length || t)) {
                  var h = 8,
                    _ = null,
                    u = 8 + e.length,
                    l = null;
                  if (
                    (a.length > 1 && (u -= (l = a.pop()).length),
                    null != this._videoStashedLastSample)
                  ) {
                    var c = this._videoStashedLastSample;
                    (this._videoStashedLastSample = null),
                      a.unshift(c),
                      (u += c.length);
                  }
                  null != l && (this._videoStashedLastSample = l);
                  var f = a[0].dts - this._dtsBase;
                  if (this._videoNextDts) s = f - this._videoNextDts;
                  else if (this._videoSegmentInfoList.isEmpty()) s = 0;
                  else {
                    var p = this._videoSegmentInfoList.getLastSampleBefore(f);
                    if (null != p) {
                      var m = f - (p.originalDts + p.duration);
                      m <= 3 && (m = 0), (s = f - (p.dts + p.duration + m));
                    } else s = 0;
                  }
                  for (var g = new ge.b(), v = [], y = 0; y < a.length; y++) {
                    var E = (c = a[y]).dts - this._dtsBase,
                      S = c.isKeyframe,
                      b = E - s,
                      A = c.cts,
                      R = b + A;
                    -1 === o && ((o = b), (d = R));
                    var T = 0;
                    if (y !== a.length - 1)
                      T = a[y + 1].dts - this._dtsBase - s - b;
                    else if (null != l) T = l.dts - this._dtsBase - s - b;
                    else
                      T =
                        v.length >= 1
                          ? v[v.length - 1].duration
                          : Math.floor(this._videoMeta.refSampleDuration);
                    if (S) {
                      var L = new ge.d(b, R, T, c.dts, !0);
                      (L.fileposition = c.fileposition), g.appendSyncPoint(L);
                    }
                    v.push({
                      dts: b,
                      pts: R,
                      cts: A,
                      units: c.units,
                      size: c.length,
                      isKeyframe: S,
                      duration: T,
                      originalDts: E,
                      flags: {
                        isLeading: 0,
                        dependsOn: S ? 2 : 1,
                        isDependedOn: S ? 1 : 0,
                        hasRedundancy: 0,
                        isNonSync: S ? 0 : 1,
                      },
                    });
                  }
                  ((_ = new Uint8Array(u))[0] = (u >>> 24) & 255),
                    (_[1] = (u >>> 16) & 255),
                    (_[2] = (u >>> 8) & 255),
                    (_[3] = 255 & u),
                    _.set(pe.types.mdat, 4);
                  for (y = 0; y < v.length; y++)
                    for (var w = v[y].units; w.length; ) {
                      var D = w.shift().data;
                      _.set(D, h), (h += D.byteLength);
                    }
                  var k = v[v.length - 1];
                  if (
                    ((i = k.dts + k.duration),
                    (n = k.pts + k.duration),
                    (this._videoNextDts = i),
                    (g.beginDts = o),
                    (g.endDts = i),
                    (g.beginPts = d),
                    (g.endPts = n),
                    (g.originalBeginDts = v[0].originalDts),
                    (g.originalEndDts = k.originalDts + k.duration),
                    (g.firstSample = new ge.d(
                      v[0].dts,
                      v[0].pts,
                      v[0].duration,
                      v[0].originalDts,
                      v[0].isKeyframe,
                    )),
                    (g.lastSample = new ge.d(
                      k.dts,
                      k.pts,
                      k.duration,
                      k.originalDts,
                      k.isKeyframe,
                    )),
                    this._isLive || this._videoSegmentInfoList.append(g),
                    (r.samples = v),
                    r.sequenceNumber++,
                    this._forceFirstIDR)
                  ) {
                    var C = v[0].flags;
                    (C.dependsOn = 2), (C.isNonSync = 0);
                  }
                  var B = pe.moof(r, o);
                  (r.samples = []),
                    (r.length = 0),
                    this._onMediaSegment("video", {
                      type: "video",
                      data: this._mergeBoxes(B, _).buffer,
                      sampleCount: v.length,
                      info: g,
                    });
                }
              }
            }),
            (e.prototype._mergeBoxes = function (e, t) {
              var i = new Uint8Array(e.byteLength + t.byteLength);
              return i.set(e, 0), i.set(t, e.byteLength), i;
            }),
            e
          );
        })(),
        ye = i(11),
        Ee = i(1),
        Se = (function () {
          function e(e, t) {
            (this.TAG = "TransmuxingController"),
              (this._emitter = new r.a()),
              (this._config = t),
              e.segments ||
                (e.segments = [
                  { duration: e.duration, filesize: e.filesize, url: e.url },
                ]),
              "boolean" != typeof e.cors && (e.cors = !0),
              "boolean" != typeof e.withCredentials && (e.withCredentials = !1),
              (this._mediaDataSource = e),
              (this._currentSegmentIndex = 0);
            var i = 0;
            this._mediaDataSource.segments.forEach(function (n) {
              (n.timestampBase = i),
                (i += n.duration),
                (n.cors = e.cors),
                (n.withCredentials = e.withCredentials),
                t.referrerPolicy && (n.referrerPolicy = t.referrerPolicy);
            }),
              isNaN(i) ||
                this._mediaDataSource.duration === i ||
                (this._mediaDataSource.duration = i),
              (this._mediaInfo = null),
              (this._demuxer = null),
              (this._remuxer = null),
              (this._ioctl = null),
              (this._pendingSeekTime = null),
              (this._pendingResolveSeekPoint = null),
              (this._statisticsReporter = null);
          }
          return (
            (e.prototype.destroy = function () {
              (this._mediaInfo = null),
                (this._mediaDataSource = null),
                this._statisticsReporter && this._disableStatisticsReporter(),
                this._ioctl && (this._ioctl.destroy(), (this._ioctl = null)),
                this._demuxer &&
                  (this._demuxer.destroy(), (this._demuxer = null)),
                this._remuxer &&
                  (this._remuxer.destroy(), (this._remuxer = null)),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            }),
            (e.prototype.on = function (e, t) {
              this._emitter.addListener(e, t);
            }),
            (e.prototype.off = function (e, t) {
              this._emitter.removeListener(e, t);
            }),
            (e.prototype.start = function () {
              this._loadSegment(0), this._enableStatisticsReporter();
            }),
            (e.prototype._loadSegment = function (e, t) {
              this._currentSegmentIndex = e;
              var i = this._mediaDataSource.segments[e],
                n = (this._ioctl = new ye.a(i, this._config, e));
              (n.onError = this._onIOException.bind(this)),
                (n.onSeeked = this._onIOSeeked.bind(this)),
                (n.onComplete = this._onIOComplete.bind(this)),
                (n.onRedirect = this._onIORedirect.bind(this)),
                (n.onRecoveredEarlyEof =
                  this._onIORecoveredEarlyEof.bind(this)),
                t
                  ? this._demuxer.bindDataSource(this._ioctl)
                  : (n.onDataArrival = this._onInitChunkArrival.bind(this)),
                n.open(t);
            }),
            (e.prototype.stop = function () {
              this._internalAbort(), this._disableStatisticsReporter();
            }),
            (e.prototype._internalAbort = function () {
              this._ioctl && (this._ioctl.destroy(), (this._ioctl = null));
            }),
            (e.prototype.pause = function () {
              this._ioctl &&
                this._ioctl.isWorking() &&
                (this._ioctl.pause(), this._disableStatisticsReporter());
            }),
            (e.prototype.resume = function () {
              this._ioctl &&
                this._ioctl.isPaused() &&
                (this._ioctl.resume(), this._enableStatisticsReporter());
            }),
            (e.prototype.seek = function (e) {
              if (null != this._mediaInfo && this._mediaInfo.isSeekable()) {
                var t = this._searchSegmentIndexContains(e);
                if (t === this._currentSegmentIndex) {
                  var i = this._mediaInfo.segments[t];
                  if (null == i) this._pendingSeekTime = e;
                  else {
                    var n = i.getNearestKeyframe(e);
                    this._remuxer.seek(n.milliseconds),
                      this._ioctl.seek(n.fileposition),
                      (this._pendingResolveSeekPoint = n.milliseconds);
                  }
                } else {
                  var r = this._mediaInfo.segments[t];
                  if (null == r)
                    (this._pendingSeekTime = e),
                      this._internalAbort(),
                      this._remuxer.seek(),
                      this._remuxer.insertDiscontinuity(),
                      this._loadSegment(t);
                  else {
                    n = r.getNearestKeyframe(e);
                    this._internalAbort(),
                      this._remuxer.seek(e),
                      this._remuxer.insertDiscontinuity(),
                      this._demuxer.resetMediaInfo(),
                      (this._demuxer.timestampBase =
                        this._mediaDataSource.segments[t].timestampBase),
                      this._loadSegment(t, n.fileposition),
                      (this._pendingResolveSeekPoint = n.milliseconds),
                      this._reportSegmentMediaInfo(t);
                  }
                }
                this._enableStatisticsReporter();
              }
            }),
            (e.prototype._searchSegmentIndexContains = function (e) {
              for (
                var t = this._mediaDataSource.segments, i = t.length - 1, n = 0;
                n < t.length;
                n++
              )
                if (e < t[n].timestampBase) {
                  i = n - 1;
                  break;
                }
              return i;
            }),
            (e.prototype._onInitChunkArrival = function (e, t) {
              var i = this,
                n = 0;
              if (t > 0)
                this._demuxer.bindDataSource(this._ioctl),
                  (this._demuxer.timestampBase =
                    this._mediaDataSource.segments[
                      this._currentSegmentIndex
                    ].timestampBase),
                  (n = this._demuxer.parseChunks(e, t));
              else {
                var r = null;
                (r = A.probe(e)).match &&
                  (this._setupFLVDemuxerRemuxer(r),
                  (n = this._demuxer.parseChunks(e, t))),
                  r.match ||
                    r.needMoreData ||
                    ((r = ce.probe(e)).match &&
                      (this._setupTSDemuxerRemuxer(r),
                      (n = this._demuxer.parseChunks(e, t)))),
                  r.match ||
                    r.needMoreData ||
                    ((r = null),
                    a.a.e(this.TAG, "Non MPEG-TS/FLV, Unsupported media type!"),
                    Promise.resolve().then(function () {
                      i._internalAbort();
                    }),
                    this._emitter.emit(
                      Ee.a.DEMUX_ERROR,
                      m.a.FORMAT_UNSUPPORTED,
                      "Non MPEG-TS/FLV, Unsupported media type!",
                    ));
              }
              return n;
            }),
            (e.prototype._setupFLVDemuxerRemuxer = function (e) {
              (this._demuxer = new A(e, this._config)),
                this._remuxer || (this._remuxer = new ve(this._config));
              var t = this._mediaDataSource;
              null == t.duration ||
                isNaN(t.duration) ||
                (this._demuxer.overridedDuration = t.duration),
                "boolean" == typeof t.hasAudio &&
                  (this._demuxer.overridedHasAudio = t.hasAudio),
                "boolean" == typeof t.hasVideo &&
                  (this._demuxer.overridedHasVideo = t.hasVideo),
                (this._demuxer.timestampBase =
                  t.segments[this._currentSegmentIndex].timestampBase),
                (this._demuxer.onError = this._onDemuxException.bind(this)),
                (this._demuxer.onMediaInfo = this._onMediaInfo.bind(this)),
                (this._demuxer.onMetaDataArrived =
                  this._onMetaDataArrived.bind(this)),
                (this._demuxer.onScriptDataArrived =
                  this._onScriptDataArrived.bind(this)),
                this._remuxer.bindDataSource(
                  this._demuxer.bindDataSource(this._ioctl),
                ),
                (this._remuxer.onInitSegment =
                  this._onRemuxerInitSegmentArrival.bind(this)),
                (this._remuxer.onMediaSegment =
                  this._onRemuxerMediaSegmentArrival.bind(this));
            }),
            (e.prototype._setupTSDemuxerRemuxer = function (e) {
              var t = (this._demuxer = new ce(e, this._config));
              this._remuxer || (this._remuxer = new ve(this._config)),
                (t.onError = this._onDemuxException.bind(this)),
                (t.onMediaInfo = this._onMediaInfo.bind(this)),
                (t.onMetaDataArrived = this._onMetaDataArrived.bind(this)),
                (t.onTimedID3Metadata = this._onTimedID3Metadata.bind(this)),
                (t.onSMPTE2038Metadata = this._onSMPTE2038Metadata.bind(this)),
                (t.onSCTE35Metadata = this._onSCTE35Metadata.bind(this)),
                (t.onPESPrivateDataDescriptor =
                  this._onPESPrivateDataDescriptor.bind(this)),
                (t.onPESPrivateData = this._onPESPrivateData.bind(this)),
                this._remuxer.bindDataSource(this._demuxer),
                this._demuxer.bindDataSource(this._ioctl),
                (this._remuxer.onInitSegment =
                  this._onRemuxerInitSegmentArrival.bind(this)),
                (this._remuxer.onMediaSegment =
                  this._onRemuxerMediaSegmentArrival.bind(this));
            }),
            (e.prototype._onMediaInfo = function (e) {
              var t = this;
              null == this._mediaInfo &&
                ((this._mediaInfo = Object.assign({}, e)),
                (this._mediaInfo.keyframesIndex = null),
                (this._mediaInfo.segments = []),
                (this._mediaInfo.segmentCount =
                  this._mediaDataSource.segments.length),
                Object.setPrototypeOf(this._mediaInfo, o.a.prototype));
              var i = Object.assign({}, e);
              Object.setPrototypeOf(i, o.a.prototype),
                (this._mediaInfo.segments[this._currentSegmentIndex] = i),
                this._reportSegmentMediaInfo(this._currentSegmentIndex),
                null != this._pendingSeekTime &&
                  Promise.resolve().then(function () {
                    var e = t._pendingSeekTime;
                    (t._pendingSeekTime = null), t.seek(e);
                  });
            }),
            (e.prototype._onMetaDataArrived = function (e) {
              this._emitter.emit(Ee.a.METADATA_ARRIVED, e);
            }),
            (e.prototype._onScriptDataArrived = function (e) {
              this._emitter.emit(Ee.a.SCRIPTDATA_ARRIVED, e);
            }),
            (e.prototype._onTimedID3Metadata = function (e) {
              var t = this._remuxer.getTimestampBase();
              null != t &&
                (null != e.pts && (e.pts -= t),
                null != e.dts && (e.dts -= t),
                this._emitter.emit(Ee.a.TIMED_ID3_METADATA_ARRIVED, e));
            }),
            (e.prototype._onSMPTE2038Metadata = function (e) {
              var t = this._remuxer.getTimestampBase();
              null != t &&
                (null != e.pts && (e.pts -= t),
                null != e.dts && (e.dts -= t),
                null != e.nearest_pts && (e.nearest_pts -= t),
                this._emitter.emit(Ee.a.SMPTE2038_METADATA_ARRIVED, e));
            }),
            (e.prototype._onSCTE35Metadata = function (e) {
              var t = this._remuxer.getTimestampBase();
              null != t &&
                (null != e.pts && (e.pts -= t),
                null != e.nearest_pts && (e.nearest_pts -= t),
                this._emitter.emit(Ee.a.SCTE35_METADATA_ARRIVED, e));
            }),
            (e.prototype._onPESPrivateDataDescriptor = function (e) {
              this._emitter.emit(Ee.a.PES_PRIVATE_DATA_DESCRIPTOR, e);
            }),
            (e.prototype._onPESPrivateData = function (e) {
              var t = this._remuxer.getTimestampBase();
              null != t &&
                (null != e.pts && (e.pts -= t),
                null != e.nearest_pts && (e.nearest_pts -= t),
                null != e.dts && (e.dts -= t),
                this._emitter.emit(Ee.a.PES_PRIVATE_DATA_ARRIVED, e));
            }),
            (e.prototype._onIOSeeked = function () {
              this._remuxer.insertDiscontinuity();
            }),
            (e.prototype._onIOComplete = function (e) {
              var t = e + 1;
              t < this._mediaDataSource.segments.length
                ? (this._internalAbort(),
                  this._remuxer && this._remuxer.flushStashedSamples(),
                  this._loadSegment(t))
                : (this._remuxer && this._remuxer.flushStashedSamples(),
                  this._emitter.emit(Ee.a.LOADING_COMPLETE),
                  this._disableStatisticsReporter());
            }),
            (e.prototype._onIORedirect = function (e) {
              var t = this._ioctl.extraData;
              this._mediaDataSource.segments[t].redirectedURL = e;
            }),
            (e.prototype._onIORecoveredEarlyEof = function () {
              this._emitter.emit(Ee.a.RECOVERED_EARLY_EOF);
            }),
            (e.prototype._onIOException = function (e, t) {
              a.a.e(
                this.TAG,
                "IOException: type = " +
                  e +
                  ", code = " +
                  t.code +
                  ", msg = " +
                  t.msg,
              ),
                this._emitter.emit(Ee.a.IO_ERROR, e, t),
                this._disableStatisticsReporter();
            }),
            (e.prototype._onDemuxException = function (e, t) {
              a.a.e(this.TAG, "DemuxException: type = " + e + ", info = " + t),
                this._emitter.emit(Ee.a.DEMUX_ERROR, e, t);
            }),
            (e.prototype._onRemuxerInitSegmentArrival = function (e, t) {
              this._emitter.emit(Ee.a.INIT_SEGMENT, e, t);
            }),
            (e.prototype._onRemuxerMediaSegmentArrival = function (e, t) {
              if (
                null == this._pendingSeekTime &&
                (this._emitter.emit(Ee.a.MEDIA_SEGMENT, e, t),
                null != this._pendingResolveSeekPoint && "video" === e)
              ) {
                var i = t.info.syncPoints,
                  n = this._pendingResolveSeekPoint;
                (this._pendingResolveSeekPoint = null),
                  s.a.safari &&
                    i.length > 0 &&
                    i[0].originalDts === n &&
                    (n = i[0].pts),
                  this._emitter.emit(Ee.a.RECOMMEND_SEEKPOINT, n);
              }
            }),
            (e.prototype._enableStatisticsReporter = function () {
              null == this._statisticsReporter &&
                (this._statisticsReporter = self.setInterval(
                  this._reportStatisticsInfo.bind(this),
                  this._config.statisticsInfoReportInterval,
                ));
            }),
            (e.prototype._disableStatisticsReporter = function () {
              this._statisticsReporter &&
                (self.clearInterval(this._statisticsReporter),
                (this._statisticsReporter = null));
            }),
            (e.prototype._reportSegmentMediaInfo = function (e) {
              var t = this._mediaInfo.segments[e],
                i = Object.assign({}, t);
              (i.duration = this._mediaInfo.duration),
                (i.segmentCount = this._mediaInfo.segmentCount),
                delete i.segments,
                delete i.keyframesIndex,
                this._emitter.emit(Ee.a.MEDIA_INFO, i);
            }),
            (e.prototype._reportStatisticsInfo = function () {
              var e = {};
              (e.url = this._ioctl.currentURL),
                (e.hasRedirect = this._ioctl.hasRedirect),
                e.hasRedirect &&
                  (e.redirectedURL = this._ioctl.currentRedirectedURL),
                (e.speed = this._ioctl.currentSpeed),
                (e.loaderType = this._ioctl.loaderType),
                (e.currentSegmentIndex = this._currentSegmentIndex),
                (e.totalSegmentCount = this._mediaDataSource.segments.length),
                this._emitter.emit(Ee.a.STATISTICS_INFO, e);
            }),
            e
          );
        })();
      t.a = Se;
    },
    function (e, t, i) {
      "use strict";
      var n,
        r = i(0),
        a = (function () {
          function e() {
            (this._firstCheckpoint = 0),
              (this._lastCheckpoint = 0),
              (this._intervalBytes = 0),
              (this._totalBytes = 0),
              (this._lastSecondBytes = 0),
              self.performance && self.performance.now
                ? (this._now = self.performance.now.bind(self.performance))
                : (this._now = Date.now);
          }
          return (
            (e.prototype.reset = function () {
              (this._firstCheckpoint = this._lastCheckpoint = 0),
                (this._totalBytes = this._intervalBytes = 0),
                (this._lastSecondBytes = 0);
            }),
            (e.prototype.addBytes = function (e) {
              0 === this._firstCheckpoint
                ? ((this._firstCheckpoint = this._now()),
                  (this._lastCheckpoint = this._firstCheckpoint),
                  (this._intervalBytes += e),
                  (this._totalBytes += e))
                : this._now() - this._lastCheckpoint < 1e3
                  ? ((this._intervalBytes += e), (this._totalBytes += e))
                  : ((this._lastSecondBytes = this._intervalBytes),
                    (this._intervalBytes = e),
                    (this._totalBytes += e),
                    (this._lastCheckpoint = this._now()));
            }),
            Object.defineProperty(e.prototype, "currentKBps", {
              get: function () {
                this.addBytes(0);
                var e = (this._now() - this._lastCheckpoint) / 1e3;
                return 0 == e && (e = 1), this._intervalBytes / e / 1024;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "lastSecondKBps", {
              get: function () {
                return (
                  this.addBytes(0),
                  0 !== this._lastSecondBytes
                    ? this._lastSecondBytes / 1024
                    : this._now() - this._lastCheckpoint >= 500
                      ? this.currentKBps
                      : 0
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "averageKBps", {
              get: function () {
                var e = (this._now() - this._firstCheckpoint) / 1e3;
                return this._totalBytes / e / 1024;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        s = i(2),
        o = i(4),
        d = i(3),
        h =
          ((n = function (e, t) {
            return (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(e, t);
          }),
          function (e, t) {
            function i() {
              this.constructor = e;
            }
            n(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((i.prototype = t.prototype), new i()));
          }),
        _ = (function (e) {
          function t(t, i) {
            var n = e.call(this, "fetch-stream-loader") || this;
            return (
              (n.TAG = "FetchStreamLoader"),
              (n._seekHandler = t),
              (n._config = i),
              (n._needStash = !0),
              (n._requestAbort = !1),
              (n._abortController = null),
              (n._contentLength = null),
              (n._receivedLength = 0),
              n
            );
          }
          return (
            h(t, e),
            (t.isSupported = function () {
              try {
                var e = o.a.msedge && o.a.version.minor >= 15048,
                  t = !o.a.msedge || e;
                return self.fetch && self.ReadableStream && t;
              } catch (e) {
                return !1;
              }
            }),
            (t.prototype.destroy = function () {
              this.isWorking() && this.abort(), e.prototype.destroy.call(this);
            }),
            (t.prototype.open = function (e, t) {
              var i = this;
              (this._dataSource = e), (this._range = t);
              var n = e.url;
              this._config.reuseRedirectedURL &&
                null != e.redirectedURL &&
                (n = e.redirectedURL);
              var r = this._seekHandler.getConfig(n, t),
                a = new self.Headers();
              if ("object" == typeof r.headers) {
                var o = r.headers;
                for (var h in o) o.hasOwnProperty(h) && a.append(h, o[h]);
              }
              var _ = {
                method: "GET",
                headers: a,
                mode: "cors",
                cache: "default",
                referrerPolicy: "no-referrer-when-downgrade",
              };
              if ("object" == typeof this._config.headers)
                for (var h in this._config.headers)
                  a.append(h, this._config.headers[h]);
              !1 === e.cors && (_.mode = "same-origin"),
                e.withCredentials && (_.credentials = "include"),
                e.referrerPolicy && (_.referrerPolicy = e.referrerPolicy),
                self.AbortController &&
                  ((this._abortController = new self.AbortController()),
                  (_.signal = this._abortController.signal)),
                (this._status = s.c.kConnecting),
                self
                  .fetch(r.url, _)
                  .then(function (e) {
                    if (i._requestAbort)
                      return (i._status = s.c.kIdle), void e.body.cancel();
                    if (e.ok && e.status >= 200 && e.status <= 299) {
                      if (e.url !== r.url && i._onURLRedirect) {
                        var t = i._seekHandler.removeURLParameters(e.url);
                        i._onURLRedirect(t);
                      }
                      var n = e.headers.get("Content-Length");
                      return (
                        null != n &&
                          ((i._contentLength = parseInt(n)),
                          0 !== i._contentLength &&
                            i._onContentLengthKnown &&
                            i._onContentLengthKnown(i._contentLength)),
                        i._pump.call(i, e.body.getReader())
                      );
                    }
                    if (((i._status = s.c.kError), !i._onError))
                      throw new d.d(
                        "FetchStreamLoader: Http code invalid, " +
                          e.status +
                          " " +
                          e.statusText,
                      );
                    i._onError(s.b.HTTP_STATUS_CODE_INVALID, {
                      code: e.status,
                      msg: e.statusText,
                    });
                  })
                  .catch(function (e) {
                    if (
                      !i._abortController ||
                      !i._abortController.signal.aborted
                    ) {
                      if (((i._status = s.c.kError), !i._onError)) throw e;
                      i._onError(s.b.EXCEPTION, { code: -1, msg: e.message });
                    }
                  });
            }),
            (t.prototype.abort = function () {
              if (
                ((this._requestAbort = !0),
                (this._status !== s.c.kBuffering || !o.a.chrome) &&
                  this._abortController)
              )
                try {
                  this._abortController.abort();
                } catch (e) {}
            }),
            (t.prototype._pump = function (e) {
              var t = this;
              return e
                .read()
                .then(function (i) {
                  if (i.done)
                    if (
                      null !== t._contentLength &&
                      t._receivedLength < t._contentLength
                    ) {
                      t._status = s.c.kError;
                      var n = s.b.EARLY_EOF,
                        r = { code: -1, msg: "Fetch stream meet Early-EOF" };
                      if (!t._onError) throw new d.d(r.msg);
                      t._onError(n, r);
                    } else
                      (t._status = s.c.kComplete),
                        t._onComplete &&
                          t._onComplete(
                            t._range.from,
                            t._range.from + t._receivedLength - 1,
                          );
                  else {
                    if (t._abortController && t._abortController.signal.aborted)
                      return void (t._status = s.c.kComplete);
                    if (!0 === t._requestAbort)
                      return (t._status = s.c.kComplete), e.cancel();
                    t._status = s.c.kBuffering;
                    var a = i.value.buffer,
                      o = t._range.from + t._receivedLength;
                    (t._receivedLength += a.byteLength),
                      t._onDataArrival &&
                        t._onDataArrival(a, o, t._receivedLength),
                      t._pump(e);
                  }
                })
                .catch(function (e) {
                  if (t._abortController && t._abortController.signal.aborted)
                    t._status = s.c.kComplete;
                  else if (11 !== e.code || !o.a.msedge) {
                    t._status = s.c.kError;
                    var i = 0,
                      n = null;
                    if (
                      ((19 !== e.code && "network error" !== e.message) ||
                      !(
                        null === t._contentLength ||
                        (null !== t._contentLength &&
                          t._receivedLength < t._contentLength)
                      )
                        ? ((i = s.b.EXCEPTION),
                          (n = { code: e.code, msg: e.message }))
                        : ((i = s.b.EARLY_EOF),
                          (n = {
                            code: e.code,
                            msg: "Fetch stream meet Early-EOF",
                          })),
                      !t._onError)
                    )
                      throw new d.d(n.msg);
                    t._onError(i, n);
                  }
                });
            }),
            t
          );
        })(s.a),
        u = (function () {
          var e = function (t, i) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(t, i);
          };
          return function (t, i) {
            function n() {
              this.constructor = t;
            }
            e(t, i),
              (t.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
        l = (function (e) {
          function t(t, i) {
            var n = e.call(this, "xhr-moz-chunked-loader") || this;
            return (
              (n.TAG = "MozChunkedLoader"),
              (n._seekHandler = t),
              (n._config = i),
              (n._needStash = !0),
              (n._xhr = null),
              (n._requestAbort = !1),
              (n._contentLength = null),
              (n._receivedLength = 0),
              n
            );
          }
          return (
            u(t, e),
            (t.isSupported = function () {
              try {
                var e = new XMLHttpRequest();
                return (
                  e.open("GET", "https://example.com", !0),
                  (e.responseType = "moz-chunked-arraybuffer"),
                  "moz-chunked-arraybuffer" === e.responseType
                );
              } catch (e) {
                return r.a.w("MozChunkedLoader", e.message), !1;
              }
            }),
            (t.prototype.destroy = function () {
              this.isWorking() && this.abort(),
                this._xhr &&
                  ((this._xhr.onreadystatechange = null),
                  (this._xhr.onprogress = null),
                  (this._xhr.onloadend = null),
                  (this._xhr.onerror = null),
                  (this._xhr = null)),
                e.prototype.destroy.call(this);
            }),
            (t.prototype.open = function (e, t) {
              (this._dataSource = e), (this._range = t);
              var i = e.url;
              this._config.reuseRedirectedURL &&
                null != e.redirectedURL &&
                (i = e.redirectedURL);
              var n = this._seekHandler.getConfig(i, t);
              this._requestURL = n.url;
              var r = (this._xhr = new XMLHttpRequest());
              if (
                (r.open("GET", n.url, !0),
                (r.responseType = "moz-chunked-arraybuffer"),
                (r.onreadystatechange = this._onReadyStateChange.bind(this)),
                (r.onprogress = this._onProgress.bind(this)),
                (r.onloadend = this._onLoadEnd.bind(this)),
                (r.onerror = this._onXhrError.bind(this)),
                e.withCredentials && (r.withCredentials = !0),
                "object" == typeof n.headers)
              ) {
                var a = n.headers;
                for (var o in a)
                  a.hasOwnProperty(o) && r.setRequestHeader(o, a[o]);
              }
              if ("object" == typeof this._config.headers) {
                a = this._config.headers;
                for (var o in a)
                  a.hasOwnProperty(o) && r.setRequestHeader(o, a[o]);
              }
              (this._status = s.c.kConnecting), r.send();
            }),
            (t.prototype.abort = function () {
              (this._requestAbort = !0),
                this._xhr && this._xhr.abort(),
                (this._status = s.c.kComplete);
            }),
            (t.prototype._onReadyStateChange = function (e) {
              var t = e.target;
              if (2 === t.readyState) {
                if (
                  null != t.responseURL &&
                  t.responseURL !== this._requestURL &&
                  this._onURLRedirect
                ) {
                  var i = this._seekHandler.removeURLParameters(t.responseURL);
                  this._onURLRedirect(i);
                }
                if (0 !== t.status && (t.status < 200 || t.status > 299)) {
                  if (((this._status = s.c.kError), !this._onError))
                    throw new d.d(
                      "MozChunkedLoader: Http code invalid, " +
                        t.status +
                        " " +
                        t.statusText,
                    );
                  this._onError(s.b.HTTP_STATUS_CODE_INVALID, {
                    code: t.status,
                    msg: t.statusText,
                  });
                } else this._status = s.c.kBuffering;
              }
            }),
            (t.prototype._onProgress = function (e) {
              if (this._status !== s.c.kError) {
                null === this._contentLength &&
                  null !== e.total &&
                  0 !== e.total &&
                  ((this._contentLength = e.total),
                  this._onContentLengthKnown &&
                    this._onContentLengthKnown(this._contentLength));
                var t = e.target.response,
                  i = this._range.from + this._receivedLength;
                (this._receivedLength += t.byteLength),
                  this._onDataArrival &&
                    this._onDataArrival(t, i, this._receivedLength);
              }
            }),
            (t.prototype._onLoadEnd = function (e) {
              !0 !== this._requestAbort
                ? this._status !== s.c.kError &&
                  ((this._status = s.c.kComplete),
                  this._onComplete &&
                    this._onComplete(
                      this._range.from,
                      this._range.from + this._receivedLength - 1,
                    ))
                : (this._requestAbort = !1);
            }),
            (t.prototype._onXhrError = function (e) {
              this._status = s.c.kError;
              var t = 0,
                i = null;
              if (
                (this._contentLength && e.loaded < this._contentLength
                  ? ((t = s.b.EARLY_EOF),
                    (i = {
                      code: -1,
                      msg: "Moz-Chunked stream meet Early-Eof",
                    }))
                  : ((t = s.b.EXCEPTION),
                    (i = { code: -1, msg: e.constructor.name + " " + e.type })),
                !this._onError)
              )
                throw new d.d(i.msg);
              this._onError(t, i);
            }),
            t
          );
        })(s.a),
        c = (function () {
          var e = function (t, i) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(t, i);
          };
          return function (t, i) {
            function n() {
              this.constructor = t;
            }
            e(t, i),
              (t.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
        f = (function (e) {
          function t(t, i) {
            var n = e.call(this, "xhr-range-loader") || this;
            return (
              (n.TAG = "RangeLoader"),
              (n._seekHandler = t),
              (n._config = i),
              (n._needStash = !1),
              (n._chunkSizeKBList = [
                128, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 5120,
                6144, 7168, 8192,
              ]),
              (n._currentChunkSizeKB = 384),
              (n._currentSpeedNormalized = 0),
              (n._zeroSpeedChunkCount = 0),
              (n._xhr = null),
              (n._speedSampler = new a()),
              (n._requestAbort = !1),
              (n._waitForTotalLength = !1),
              (n._totalLengthReceived = !1),
              (n._currentRequestURL = null),
              (n._currentRedirectedURL = null),
              (n._currentRequestRange = null),
              (n._totalLength = null),
              (n._contentLength = null),
              (n._receivedLength = 0),
              (n._lastTimeLoaded = 0),
              n
            );
          }
          return (
            c(t, e),
            (t.isSupported = function () {
              try {
                var e = new XMLHttpRequest();
                return (
                  e.open("GET", "https://example.com", !0),
                  (e.responseType = "arraybuffer"),
                  "arraybuffer" === e.responseType
                );
              } catch (e) {
                return r.a.w("RangeLoader", e.message), !1;
              }
            }),
            (t.prototype.destroy = function () {
              this.isWorking() && this.abort(),
                this._xhr &&
                  ((this._xhr.onreadystatechange = null),
                  (this._xhr.onprogress = null),
                  (this._xhr.onload = null),
                  (this._xhr.onerror = null),
                  (this._xhr = null)),
                e.prototype.destroy.call(this);
            }),
            Object.defineProperty(t.prototype, "currentSpeed", {
              get: function () {
                return this._speedSampler.lastSecondKBps;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.open = function (e, t) {
              (this._dataSource = e),
                (this._range = t),
                (this._status = s.c.kConnecting);
              var i = !1;
              null != this._dataSource.filesize &&
                0 !== this._dataSource.filesize &&
                ((i = !0), (this._totalLength = this._dataSource.filesize)),
                this._totalLengthReceived || i
                  ? this._openSubRange()
                  : ((this._waitForTotalLength = !0),
                    this._internalOpen(this._dataSource, { from: 0, to: -1 }));
            }),
            (t.prototype._openSubRange = function () {
              var e = 1024 * this._currentChunkSizeKB,
                t = this._range.from + this._receivedLength,
                i = t + e;
              null != this._contentLength &&
                i - this._range.from >= this._contentLength &&
                (i = this._range.from + this._contentLength - 1),
                (this._currentRequestRange = { from: t, to: i }),
                this._internalOpen(this._dataSource, this._currentRequestRange);
            }),
            (t.prototype._internalOpen = function (e, t) {
              this._lastTimeLoaded = 0;
              var i = e.url;
              this._config.reuseRedirectedURL &&
                (null != this._currentRedirectedURL
                  ? (i = this._currentRedirectedURL)
                  : null != e.redirectedURL && (i = e.redirectedURL));
              var n = this._seekHandler.getConfig(i, t);
              this._currentRequestURL = n.url;
              var r = (this._xhr = new XMLHttpRequest());
              if (
                (r.open("GET", n.url, !0),
                (r.responseType = "arraybuffer"),
                (r.onreadystatechange = this._onReadyStateChange.bind(this)),
                (r.onprogress = this._onProgress.bind(this)),
                (r.onload = this._onLoad.bind(this)),
                (r.onerror = this._onXhrError.bind(this)),
                e.withCredentials && (r.withCredentials = !0),
                "object" == typeof n.headers)
              ) {
                var a = n.headers;
                for (var s in a)
                  a.hasOwnProperty(s) && r.setRequestHeader(s, a[s]);
              }
              if ("object" == typeof this._config.headers) {
                a = this._config.headers;
                for (var s in a)
                  a.hasOwnProperty(s) && r.setRequestHeader(s, a[s]);
              }
              r.send();
            }),
            (t.prototype.abort = function () {
              (this._requestAbort = !0),
                this._internalAbort(),
                (this._status = s.c.kComplete);
            }),
            (t.prototype._internalAbort = function () {
              this._xhr &&
                ((this._xhr.onreadystatechange = null),
                (this._xhr.onprogress = null),
                (this._xhr.onload = null),
                (this._xhr.onerror = null),
                this._xhr.abort(),
                (this._xhr = null));
            }),
            (t.prototype._onReadyStateChange = function (e) {
              var t = e.target;
              if (2 === t.readyState) {
                if (null != t.responseURL) {
                  var i = this._seekHandler.removeURLParameters(t.responseURL);
                  t.responseURL !== this._currentRequestURL &&
                    i !== this._currentRedirectedURL &&
                    ((this._currentRedirectedURL = i),
                    this._onURLRedirect && this._onURLRedirect(i));
                }
                if (t.status >= 200 && t.status <= 299) {
                  if (this._waitForTotalLength) return;
                  this._status = s.c.kBuffering;
                } else {
                  if (((this._status = s.c.kError), !this._onError))
                    throw new d.d(
                      "RangeLoader: Http code invalid, " +
                        t.status +
                        " " +
                        t.statusText,
                    );
                  this._onError(s.b.HTTP_STATUS_CODE_INVALID, {
                    code: t.status,
                    msg: t.statusText,
                  });
                }
              }
            }),
            (t.prototype._onProgress = function (e) {
              if (this._status !== s.c.kError) {
                if (null === this._contentLength) {
                  var t = !1;
                  if (this._waitForTotalLength) {
                    (this._waitForTotalLength = !1),
                      (this._totalLengthReceived = !0),
                      (t = !0);
                    var i = e.total;
                    this._internalAbort(),
                      (null != i) & (0 !== i) && (this._totalLength = i);
                  }
                  if (
                    (-1 === this._range.to
                      ? (this._contentLength =
                          this._totalLength - this._range.from)
                      : (this._contentLength =
                          this._range.to - this._range.from + 1),
                    t)
                  )
                    return void this._openSubRange();
                  this._onContentLengthKnown &&
                    this._onContentLengthKnown(this._contentLength);
                }
                var n = e.loaded - this._lastTimeLoaded;
                (this._lastTimeLoaded = e.loaded),
                  this._speedSampler.addBytes(n);
              }
            }),
            (t.prototype._normalizeSpeed = function (e) {
              var t = this._chunkSizeKBList,
                i = t.length - 1,
                n = 0,
                r = 0,
                a = i;
              if (e < t[0]) return t[0];
              for (; r <= a; ) {
                if (
                  (n = r + Math.floor((a - r) / 2)) === i ||
                  (e >= t[n] && e < t[n + 1])
                )
                  return t[n];
                t[n] < e ? (r = n + 1) : (a = n - 1);
              }
            }),
            (t.prototype._onLoad = function (e) {
              if (this._status !== s.c.kError)
                if (this._waitForTotalLength) this._waitForTotalLength = !1;
                else {
                  this._lastTimeLoaded = 0;
                  var t = this._speedSampler.lastSecondKBps;
                  if (
                    (0 === t &&
                      (this._zeroSpeedChunkCount++,
                      this._zeroSpeedChunkCount >= 3 &&
                        (t = this._speedSampler.currentKBps)),
                    0 !== t)
                  ) {
                    var i = this._normalizeSpeed(t);
                    this._currentSpeedNormalized !== i &&
                      ((this._currentSpeedNormalized = i),
                      (this._currentChunkSizeKB = i));
                  }
                  var n = e.target.response,
                    r = this._range.from + this._receivedLength;
                  this._receivedLength += n.byteLength;
                  var a = !1;
                  null != this._contentLength &&
                  this._receivedLength < this._contentLength
                    ? this._openSubRange()
                    : (a = !0),
                    this._onDataArrival &&
                      this._onDataArrival(n, r, this._receivedLength),
                    a &&
                      ((this._status = s.c.kComplete),
                      this._onComplete &&
                        this._onComplete(
                          this._range.from,
                          this._range.from + this._receivedLength - 1,
                        ));
                }
            }),
            (t.prototype._onXhrError = function (e) {
              this._status = s.c.kError;
              var t = 0,
                i = null;
              if (
                (this._contentLength &&
                this._receivedLength > 0 &&
                this._receivedLength < this._contentLength
                  ? ((t = s.b.EARLY_EOF),
                    (i = { code: -1, msg: "RangeLoader meet Early-Eof" }))
                  : ((t = s.b.EXCEPTION),
                    (i = { code: -1, msg: e.constructor.name + " " + e.type })),
                !this._onError)
              )
                throw new d.d(i.msg);
              this._onError(t, i);
            }),
            t
          );
        })(s.a),
        p = (function () {
          var e = function (t, i) {
            return (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              })(t, i);
          };
          return function (t, i) {
            function n() {
              this.constructor = t;
            }
            e(t, i),
              (t.prototype =
                null === i
                  ? Object.create(i)
                  : ((n.prototype = i.prototype), new n()));
          };
        })(),
        m = (function (e) {
          function t() {
            var t = e.call(this, "websocket-loader") || this;
            return (
              (t.TAG = "WebSocketLoader"),
              (t._needStash = !0),
              (t._ws = null),
              (t._requestAbort = !1),
              (t._receivedLength = 0),
              t
            );
          }
          return (
            p(t, e),
            (t.isSupported = function () {
              try {
                return void 0 !== self.WebSocket;
              } catch (e) {
                return !1;
              }
            }),
            (t.prototype.destroy = function () {
              this._ws && this.abort(), e.prototype.destroy.call(this);
            }),
            (t.prototype.open = function (e) {
              try {
                var t = (this._ws = new self.WebSocket(e.url));
                (t.binaryType = "arraybuffer"),
                  (t.onopen = this._onWebSocketOpen.bind(this)),
                  (t.onclose = this._onWebSocketClose.bind(this)),
                  (t.onmessage = this._onWebSocketMessage.bind(this)),
                  (t.onerror = this._onWebSocketError.bind(this)),
                  (this._status = s.c.kConnecting);
              } catch (e) {
                this._status = s.c.kError;
                var i = { code: e.code, msg: e.message };
                if (!this._onError) throw new d.d(i.msg);
                this._onError(s.b.EXCEPTION, i);
              }
            }),
            (t.prototype.abort = function () {
              var e = this._ws;
              !e ||
                (0 !== e.readyState && 1 !== e.readyState) ||
                ((this._requestAbort = !0), e.close()),
                (this._ws = null),
                (this._status = s.c.kComplete);
            }),
            (t.prototype._onWebSocketOpen = function (e) {
              this._status = s.c.kBuffering;
            }),
            (t.prototype._onWebSocketClose = function (e) {
              !0 !== this._requestAbort
                ? ((this._status = s.c.kComplete),
                  this._onComplete &&
                    this._onComplete(0, this._receivedLength - 1))
                : (this._requestAbort = !1);
            }),
            (t.prototype._onWebSocketMessage = function (e) {
              var t = this;
              if (e.data instanceof ArrayBuffer)
                this._dispatchArrayBuffer(e.data);
              else if (e.data instanceof Blob) {
                var i = new FileReader();
                (i.onload = function () {
                  t._dispatchArrayBuffer(i.result);
                }),
                  i.readAsArrayBuffer(e.data);
              } else {
                this._status = s.c.kError;
                var n = {
                  code: -1,
                  msg:
                    "Unsupported WebSocket message type: " +
                    e.data.constructor.name,
                };
                if (!this._onError) throw new d.d(n.msg);
                this._onError(s.b.EXCEPTION, n);
              }
            }),
            (t.prototype._dispatchArrayBuffer = function (e) {
              var t = e,
                i = this._receivedLength;
              (this._receivedLength += t.byteLength),
                this._onDataArrival &&
                  this._onDataArrival(t, i, this._receivedLength);
            }),
            (t.prototype._onWebSocketError = function (e) {
              this._status = s.c.kError;
              var t = { code: e.code, msg: e.message };
              if (!this._onError) throw new d.d(t.msg);
              this._onError(s.b.EXCEPTION, t);
            }),
            t
          );
        })(s.a),
        g = (function () {
          function e(e) {
            this._zeroStart = e || !1;
          }
          return (
            (e.prototype.getConfig = function (e, t) {
              var i = {};
              if (0 !== t.from || -1 !== t.to) {
                var n = void 0;
                (n =
                  -1 !== t.to
                    ? "bytes=" + t.from.toString() + "-" + t.to.toString()
                    : "bytes=" + t.from.toString() + "-"),
                  (i.Range = n);
              } else this._zeroStart && (i.Range = "bytes=0-");
              return { url: e, headers: i };
            }),
            (e.prototype.removeURLParameters = function (e) {
              return e;
            }),
            e
          );
        })(),
        v = (function () {
          function e(e, t) {
            (this._startName = e), (this._endName = t);
          }
          return (
            (e.prototype.getConfig = function (e, t) {
              var i = e;
              if (0 !== t.from || -1 !== t.to) {
                var n = !0;
                -1 === i.indexOf("?") && ((i += "?"), (n = !1)),
                  n && (i += "&"),
                  (i += this._startName + "=" + t.from.toString()),
                  -1 !== t.to &&
                    (i += "&" + this._endName + "=" + t.to.toString());
              }
              return { url: i, headers: {} };
            }),
            (e.prototype.removeURLParameters = function (e) {
              var t = e.split("?")[0],
                i = void 0,
                n = e.indexOf("?");
              -1 !== n && (i = e.substring(n + 1));
              var r = "";
              if (null != i && i.length > 0)
                for (var a = i.split("&"), s = 0; s < a.length; s++) {
                  var o = a[s].split("="),
                    d = s > 0;
                  o[0] !== this._startName &&
                    o[0] !== this._endName &&
                    (d && (r += "&"), (r += a[s]));
                }
              return 0 === r.length ? t : t + "?" + r;
            }),
            e
          );
        })(),
        y = (function () {
          function e(e, t, i) {
            (this.TAG = "IOController"),
              (this._config = t),
              (this._extraData = i),
              (this._stashInitialSize = 65536),
              null != t.stashInitialSize &&
                t.stashInitialSize > 0 &&
                (this._stashInitialSize = t.stashInitialSize),
              (this._stashUsed = 0),
              (this._stashSize = this._stashInitialSize),
              (this._bufferSize = 3145728),
              (this._stashBuffer = new ArrayBuffer(this._bufferSize)),
              (this._stashByteStart = 0),
              (this._enableStash = !0),
              !1 === t.enableStashBuffer && (this._enableStash = !1),
              (this._loader = null),
              (this._loaderClass = null),
              (this._seekHandler = null),
              (this._dataSource = e),
              (this._isWebSocketURL = /wss?:\/\/(.+?)/.test(e.url)),
              (this._refTotalLength = e.filesize ? e.filesize : null),
              (this._totalLength = this._refTotalLength),
              (this._fullRequestFlag = !1),
              (this._currentRange = null),
              (this._redirectedURL = null),
              (this._speedNormalized = 0),
              (this._speedSampler = new a()),
              (this._speedNormalizeList = [
                32, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048,
                3072, 4096,
              ]),
              (this._isEarlyEofReconnecting = !1),
              (this._paused = !1),
              (this._resumeFrom = 0),
              (this._onDataArrival = null),
              (this._onSeeked = null),
              (this._onError = null),
              (this._onComplete = null),
              (this._onRedirect = null),
              (this._onRecoveredEarlyEof = null),
              this._selectSeekHandler(),
              this._selectLoader(),
              this._createLoader();
          }
          return (
            (e.prototype.destroy = function () {
              this._loader.isWorking() && this._loader.abort(),
                this._loader.destroy(),
                (this._loader = null),
                (this._loaderClass = null),
                (this._dataSource = null),
                (this._stashBuffer = null),
                (this._stashUsed =
                  this._stashSize =
                  this._bufferSize =
                  this._stashByteStart =
                    0),
                (this._currentRange = null),
                (this._speedSampler = null),
                (this._isEarlyEofReconnecting = !1),
                (this._onDataArrival = null),
                (this._onSeeked = null),
                (this._onError = null),
                (this._onComplete = null),
                (this._onRedirect = null),
                (this._onRecoveredEarlyEof = null),
                (this._extraData = null);
            }),
            (e.prototype.isWorking = function () {
              return this._loader && this._loader.isWorking() && !this._paused;
            }),
            (e.prototype.isPaused = function () {
              return this._paused;
            }),
            Object.defineProperty(e.prototype, "status", {
              get: function () {
                return this._loader.status;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "extraData", {
              get: function () {
                return this._extraData;
              },
              set: function (e) {
                this._extraData = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onDataArrival", {
              get: function () {
                return this._onDataArrival;
              },
              set: function (e) {
                this._onDataArrival = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onSeeked", {
              get: function () {
                return this._onSeeked;
              },
              set: function (e) {
                this._onSeeked = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onError", {
              get: function () {
                return this._onError;
              },
              set: function (e) {
                this._onError = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onComplete", {
              get: function () {
                return this._onComplete;
              },
              set: function (e) {
                this._onComplete = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onRedirect", {
              get: function () {
                return this._onRedirect;
              },
              set: function (e) {
                this._onRedirect = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "onRecoveredEarlyEof", {
              get: function () {
                return this._onRecoveredEarlyEof;
              },
              set: function (e) {
                this._onRecoveredEarlyEof = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "currentURL", {
              get: function () {
                return this._dataSource.url;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "hasRedirect", {
              get: function () {
                return (
                  null != this._redirectedURL ||
                  null != this._dataSource.redirectedURL
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "currentRedirectedURL", {
              get: function () {
                return this._redirectedURL || this._dataSource.redirectedURL;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "currentSpeed", {
              get: function () {
                return this._loaderClass === f
                  ? this._loader.currentSpeed
                  : this._speedSampler.lastSecondKBps;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "loaderType", {
              get: function () {
                return this._loader.type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._selectSeekHandler = function () {
              var e = this._config;
              if ("range" === e.seekType)
                this._seekHandler = new g(this._config.rangeLoadZeroStart);
              else if ("param" === e.seekType) {
                var t = e.seekParamStart || "bstart",
                  i = e.seekParamEnd || "bend";
                this._seekHandler = new v(t, i);
              } else {
                if ("custom" !== e.seekType)
                  throw new d.b("Invalid seekType in config: " + e.seekType);
                if ("function" != typeof e.customSeekHandler)
                  throw new d.b(
                    "Custom seekType specified in config but invalid customSeekHandler!",
                  );
                this._seekHandler = new e.customSeekHandler();
              }
            }),
            (e.prototype._selectLoader = function () {
              if (null != this._config.customLoader)
                this._loaderClass = this._config.customLoader;
              else if (this._isWebSocketURL) this._loaderClass = m;
              else if (_.isSupported()) this._loaderClass = _;
              else if (l.isSupported()) this._loaderClass = l;
              else {
                if (!f.isSupported())
                  throw new d.d(
                    "Your browser doesn't support xhr with arraybuffer responseType!",
                  );
                this._loaderClass = f;
              }
            }),
            (e.prototype._createLoader = function () {
              (this._loader = new this._loaderClass(
                this._seekHandler,
                this._config,
              )),
                !1 === this._loader.needStashBuffer && (this._enableStash = !1),
                (this._loader.onContentLengthKnown =
                  this._onContentLengthKnown.bind(this)),
                (this._loader.onURLRedirect = this._onURLRedirect.bind(this)),
                (this._loader.onDataArrival =
                  this._onLoaderChunkArrival.bind(this)),
                (this._loader.onComplete = this._onLoaderComplete.bind(this)),
                (this._loader.onError = this._onLoaderError.bind(this));
            }),
            (e.prototype.open = function (e) {
              (this._currentRange = { from: 0, to: -1 }),
                e && (this._currentRange.from = e),
                this._speedSampler.reset(),
                e || (this._fullRequestFlag = !0),
                this._loader.open(
                  this._dataSource,
                  Object.assign({}, this._currentRange),
                );
            }),
            (e.prototype.abort = function () {
              this._loader.abort(),
                this._paused && ((this._paused = !1), (this._resumeFrom = 0));
            }),
            (e.prototype.pause = function () {
              this.isWorking() &&
                (this._loader.abort(),
                0 !== this._stashUsed
                  ? ((this._resumeFrom = this._stashByteStart),
                    (this._currentRange.to = this._stashByteStart - 1))
                  : (this._resumeFrom = this._currentRange.to + 1),
                (this._stashUsed = 0),
                (this._stashByteStart = 0),
                (this._paused = !0));
            }),
            (e.prototype.resume = function () {
              if (this._paused) {
                this._paused = !1;
                var e = this._resumeFrom;
                (this._resumeFrom = 0), this._internalSeek(e, !0);
              }
            }),
            (e.prototype.seek = function (e) {
              (this._paused = !1),
                (this._stashUsed = 0),
                (this._stashByteStart = 0),
                this._internalSeek(e, !0);
            }),
            (e.prototype._internalSeek = function (e, t) {
              this._loader.isWorking() && this._loader.abort(),
                this._flushStashBuffer(t),
                this._loader.destroy(),
                (this._loader = null);
              var i = { from: e, to: -1 };
              (this._currentRange = { from: i.from, to: -1 }),
                this._speedSampler.reset(),
                (this._stashSize = this._stashInitialSize),
                this._createLoader(),
                this._loader.open(this._dataSource, i),
                this._onSeeked && this._onSeeked();
            }),
            (e.prototype.updateUrl = function (e) {
              if (!e || "string" != typeof e || 0 === e.length)
                throw new d.b("Url must be a non-empty string!");
              this._dataSource.url = e;
            }),
            (e.prototype._expandBuffer = function (e) {
              for (var t = this._stashSize; t + 1048576 < e; ) t *= 2;
              if ((t += 1048576) !== this._bufferSize) {
                var i = new ArrayBuffer(t);
                if (this._stashUsed > 0) {
                  var n = new Uint8Array(this._stashBuffer, 0, this._stashUsed);
                  new Uint8Array(i, 0, t).set(n, 0);
                }
                (this._stashBuffer = i), (this._bufferSize = t);
              }
            }),
            (e.prototype._normalizeSpeed = function (e) {
              var t = this._speedNormalizeList,
                i = t.length - 1,
                n = 0,
                r = 0,
                a = i;
              if (e < t[0]) return t[0];
              for (; r <= a; ) {
                if (
                  (n = r + Math.floor((a - r) / 2)) === i ||
                  (e >= t[n] && e < t[n + 1])
                )
                  return t[n];
                t[n] < e ? (r = n + 1) : (a = n - 1);
              }
            }),
            (e.prototype._adjustStashSize = function (e) {
              var t = 0;
              (t = this._config.isLive
                ? e / 8
                : e < 512
                  ? e
                  : e >= 512 && e <= 1024
                    ? Math.floor(1.5 * e)
                    : 2 * e) > 8192 && (t = 8192);
              var i = 1024 * t + 1048576;
              this._bufferSize < i && this._expandBuffer(i),
                (this._stashSize = 1024 * t);
            }),
            (e.prototype._dispatchChunks = function (e, t) {
              return (
                (this._currentRange.to = t + e.byteLength - 1),
                this._onDataArrival(e, t)
              );
            }),
            (e.prototype._onURLRedirect = function (e) {
              (this._redirectedURL = e),
                this._onRedirect && this._onRedirect(e);
            }),
            (e.prototype._onContentLengthKnown = function (e) {
              e &&
                this._fullRequestFlag &&
                ((this._totalLength = e), (this._fullRequestFlag = !1));
            }),
            (e.prototype._onLoaderChunkArrival = function (e, t, i) {
              if (!this._onDataArrival)
                throw new d.a(
                  "IOController: No existing consumer (onDataArrival) callback!",
                );
              if (!this._paused) {
                this._isEarlyEofReconnecting &&
                  ((this._isEarlyEofReconnecting = !1),
                  this._onRecoveredEarlyEof && this._onRecoveredEarlyEof()),
                  this._speedSampler.addBytes(e.byteLength);
                var n = this._speedSampler.lastSecondKBps;
                if (0 !== n) {
                  var r = this._normalizeSpeed(n);
                  this._speedNormalized !== r &&
                    ((this._speedNormalized = r), this._adjustStashSize(r));
                }
                if (this._enableStash)
                  if (
                    (0 === this._stashUsed &&
                      0 === this._stashByteStart &&
                      (this._stashByteStart = t),
                    this._stashUsed + e.byteLength <= this._stashSize)
                  ) {
                    (o = new Uint8Array(
                      this._stashBuffer,
                      0,
                      this._stashSize,
                    )).set(new Uint8Array(e), this._stashUsed),
                      (this._stashUsed += e.byteLength);
                  } else {
                    o = new Uint8Array(this._stashBuffer, 0, this._bufferSize);
                    if (this._stashUsed > 0) {
                      var a = this._stashBuffer.slice(0, this._stashUsed);
                      if (
                        (h = this._dispatchChunks(a, this._stashByteStart)) <
                        a.byteLength
                      ) {
                        if (h > 0) {
                          _ = new Uint8Array(a, h);
                          o.set(_, 0),
                            (this._stashUsed = _.byteLength),
                            (this._stashByteStart += h);
                        }
                      } else (this._stashUsed = 0), (this._stashByteStart += h);
                      this._stashUsed + e.byteLength > this._bufferSize &&
                        (this._expandBuffer(this._stashUsed + e.byteLength),
                        (o = new Uint8Array(
                          this._stashBuffer,
                          0,
                          this._bufferSize,
                        ))),
                        o.set(new Uint8Array(e), this._stashUsed),
                        (this._stashUsed += e.byteLength);
                    } else {
                      if ((h = this._dispatchChunks(e, t)) < e.byteLength)
                        (s = e.byteLength - h) > this._bufferSize &&
                          (this._expandBuffer(s),
                          (o = new Uint8Array(
                            this._stashBuffer,
                            0,
                            this._bufferSize,
                          ))),
                          o.set(new Uint8Array(e, h), 0),
                          (this._stashUsed += s),
                          (this._stashByteStart = t + h);
                    }
                  }
                else if (0 === this._stashUsed) {
                  var s;
                  if ((h = this._dispatchChunks(e, t)) < e.byteLength)
                    (s = e.byteLength - h) > this._bufferSize &&
                      this._expandBuffer(s),
                      (o = new Uint8Array(
                        this._stashBuffer,
                        0,
                        this._bufferSize,
                      )).set(new Uint8Array(e, h), 0),
                      (this._stashUsed += s),
                      (this._stashByteStart = t + h);
                } else {
                  var o, h;
                  if (
                    (this._stashUsed + e.byteLength > this._bufferSize &&
                      this._expandBuffer(this._stashUsed + e.byteLength),
                    (o = new Uint8Array(
                      this._stashBuffer,
                      0,
                      this._bufferSize,
                    )).set(new Uint8Array(e), this._stashUsed),
                    (this._stashUsed += e.byteLength),
                    (h = this._dispatchChunks(
                      this._stashBuffer.slice(0, this._stashUsed),
                      this._stashByteStart,
                    )) < this._stashUsed && h > 0)
                  ) {
                    var _ = new Uint8Array(this._stashBuffer, h);
                    o.set(_, 0);
                  }
                  (this._stashUsed -= h), (this._stashByteStart += h);
                }
              }
            }),
            (e.prototype._flushStashBuffer = function (e) {
              if (this._stashUsed > 0) {
                var t = this._stashBuffer.slice(0, this._stashUsed),
                  i = this._dispatchChunks(t, this._stashByteStart),
                  n = t.byteLength - i;
                if (i < t.byteLength) {
                  if (!e) {
                    if (i > 0) {
                      var a = new Uint8Array(
                          this._stashBuffer,
                          0,
                          this._bufferSize,
                        ),
                        s = new Uint8Array(t, i);
                      a.set(s, 0),
                        (this._stashUsed = s.byteLength),
                        (this._stashByteStart += i);
                    }
                    return 0;
                  }
                  r.a.w(
                    this.TAG,
                    n +
                      " bytes unconsumed data remain when flush buffer, dropped",
                  );
                }
                return (this._stashUsed = 0), (this._stashByteStart = 0), n;
              }
              return 0;
            }),
            (e.prototype._onLoaderComplete = function (e, t) {
              this._flushStashBuffer(!0),
                this._onComplete && this._onComplete(this._extraData);
            }),
            (e.prototype._onLoaderError = function (e, t) {
              switch (
                (r.a.e(
                  this.TAG,
                  "Loader error, code = " + t.code + ", msg = " + t.msg,
                ),
                this._flushStashBuffer(!1),
                this._isEarlyEofReconnecting &&
                  ((this._isEarlyEofReconnecting = !1),
                  (e = s.b.UNRECOVERABLE_EARLY_EOF)),
                e)
              ) {
                case s.b.EARLY_EOF:
                  if (!this._config.isLive && this._totalLength) {
                    var i = this._currentRange.to + 1;
                    return void (
                      i < this._totalLength &&
                      (r.a.w(this.TAG, "Connection lost, trying reconnect..."),
                      (this._isEarlyEofReconnecting = !0),
                      this._internalSeek(i, !1))
                    );
                  }
                  e = s.b.UNRECOVERABLE_EARLY_EOF;
                  break;
                case s.b.UNRECOVERABLE_EARLY_EOF:
                case s.b.CONNECTING_TIMEOUT:
                case s.b.HTTP_STATUS_CODE_INVALID:
                case s.b.EXCEPTION:
              }
              if (!this._onError) throw new d.d("IOException: " + t.msg);
              this._onError(e, t);
            }),
            e
          );
        })();
      t.a = y;
    },
    function (e, t, i) {
      "use strict";
      var n = (function () {
        function e() {}
        return (
          (e.install = function () {
            (Object.setPrototypeOf =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
              (Object.assign =
                Object.assign ||
                function (e) {
                  if (null == e)
                    throw new TypeError(
                      "Cannot convert undefined or null to object",
                    );
                  for (var t = Object(e), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (null != n)
                      for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r]);
                  }
                  return t;
                }),
              "function" != typeof self.Promise && i(15).polyfill();
          }),
          e
        );
      })();
      n.install(), (t.a = n);
    },
    function (e, t, i) {
      function n(e) {
        var t = {};
        function i(n) {
          if (t[n]) return t[n].exports;
          var r = (t[n] = { i: n, l: !1, exports: {} });
          return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
        }
        (i.m = e),
          (i.c = t),
          (i.i = function (e) {
            return e;
          }),
          (i.d = function (e, t, n) {
            i.o(e, t) ||
              Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n,
              });
          }),
          (i.r = function (e) {
            Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (i.n = function (e) {
            var t =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return i.d(t, "a", t), t;
          }),
          (i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (i.p = "/"),
          (i.oe = function (e) {
            throw (console.error(e), e);
          });
        var n = i((i.s = ENTRY_MODULE));
        return n.default || n;
      }
      function r(e) {
        return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      function a(e, t, n) {
        var a = {};
        a[n] = [];
        var s = t.toString(),
          o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
        if (!o) return a;
        for (
          var d,
            h = o[1],
            _ = new RegExp(
              "(\\\\n|\\W)" +
                r(h) +
                "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)",
              "g",
            );
          (d = _.exec(s));

        )
          "dll-reference" !== d[3] && a[n].push(d[3]);
        for (
          _ = new RegExp(
            "\\(" +
              r(h) +
              '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)',
            "g",
          );
          (d = _.exec(s));

        )
          e[d[2]] || (a[n].push(d[1]), (e[d[2]] = i(d[1]).m)),
            (a[d[2]] = a[d[2]] || []),
            a[d[2]].push(d[4]);
        for (var u, l = Object.keys(a), c = 0; c < l.length; c++)
          for (var f = 0; f < a[l[c]].length; f++)
            (u = a[l[c]][f]), isNaN(1 * u) || (a[l[c]][f] = 1 * a[l[c]][f]);
        return a;
      }
      function s(e) {
        return Object.keys(e).reduce(function (t, i) {
          return t || e[i].length > 0;
        }, !1);
      }
      e.exports = function (e, t) {
        t = t || {};
        var r = { main: i.m },
          o = t.all
            ? { main: Object.keys(r.main) }
            : (function (e, t) {
                for (
                  var i = { main: [t] }, n = { main: [] }, r = { main: {} };
                  s(i);

                )
                  for (var o = Object.keys(i), d = 0; d < o.length; d++) {
                    var h = o[d],
                      _ = i[h].pop();
                    if (((r[h] = r[h] || {}), !r[h][_] && e[h][_])) {
                      (r[h][_] = !0), (n[h] = n[h] || []), n[h].push(_);
                      for (
                        var u = a(e, e[h][_], h), l = Object.keys(u), c = 0;
                        c < l.length;
                        c++
                      )
                        (i[l[c]] = i[l[c]] || []),
                          (i[l[c]] = i[l[c]].concat(u[l[c]]));
                    }
                  }
                return n;
              })(r, e),
          d = "";
        Object.keys(o)
          .filter(function (e) {
            return "main" !== e;
          })
          .forEach(function (e) {
            for (var t = 0; o[e][t]; ) t++;
            o[e].push(t),
              (r[e][t] =
                "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })"),
              (d =
                d +
                "var " +
                e +
                " = (" +
                n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) +
                ")({" +
                o[e]
                  .map(function (t) {
                    return JSON.stringify(t) + ": " + r[e][t].toString();
                  })
                  .join(",") +
                "});\n");
          }),
          (d =
            d +
            "new ((" +
            n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) +
            ")({" +
            o.main
              .map(function (e) {
                return JSON.stringify(e) + ": " + r.main[e].toString();
              })
              .join(",") +
            "}))(self);");
        var h = new window.Blob([d], { type: "text/javascript" });
        if (t.bare) return h;
        var _ = (
            window.URL ||
            window.webkitURL ||
            window.mozURL ||
            window.msURL
          ).createObjectURL(h),
          u = new window.Worker(_);
        return (u.objectURL = _), u;
      };
    },
    function (e, t, i) {
      e.exports = i(19).default;
    },
    function (e, t, i) {
      (function (t, i) {
        /*!
         * @overview es6-promise - a tiny implementation of Promises/A+.
         * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
         * @license   Licensed under MIT license
         *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
         * @version   v4.2.8+1e68dce6
         */ var n;
        (n = function () {
          "use strict";
          function e(e) {
            return "function" == typeof e;
          }
          var n = Array.isArray
              ? Array.isArray
              : function (e) {
                  return "[object Array]" === Object.prototype.toString.call(e);
                },
            r = 0,
            a = void 0,
            s = void 0,
            o = function (e, t) {
              (f[r] = e), (f[r + 1] = t), 2 === (r += 2) && (s ? s(p) : E());
            },
            d = "undefined" != typeof window ? window : void 0,
            h = d || {},
            _ = h.MutationObserver || h.WebKitMutationObserver,
            u =
              "undefined" == typeof self &&
              void 0 !== t &&
              "[object process]" === {}.toString.call(t),
            l =
              "undefined" != typeof Uint8ClampedArray &&
              "undefined" != typeof importScripts &&
              "undefined" != typeof MessageChannel;
          function c() {
            var e = setTimeout;
            return function () {
              return e(p, 1);
            };
          }
          var f = new Array(1e3);
          function p() {
            for (var e = 0; e < r; e += 2)
              (0, f[e])(f[e + 1]), (f[e] = void 0), (f[e + 1] = void 0);
            r = 0;
          }
          var m,
            g,
            v,
            y,
            E = void 0;
          function S(e, t) {
            var i = this,
              n = new this.constructor(R);
            void 0 === n[A] && O(n);
            var r = i._state;
            if (r) {
              var a = arguments[r - 1];
              o(function () {
                return I(r, n, a, i._result);
              });
            } else C(i, n, e, t);
            return n;
          }
          function b(e) {
            if (e && "object" == typeof e && e.constructor === this) return e;
            var t = new this(R);
            return L(t, e), t;
          }
          u
            ? (E = function () {
                return t.nextTick(p);
              })
            : _
              ? ((g = 0),
                (v = new _(p)),
                (y = document.createTextNode("")),
                v.observe(y, { characterData: !0 }),
                (E = function () {
                  y.data = g = ++g % 2;
                }))
              : l
                ? (((m = new MessageChannel()).port1.onmessage = p),
                  (E = function () {
                    return m.port2.postMessage(0);
                  }))
                : (E =
                    void 0 === d
                      ? (function () {
                          try {
                            var e = Function("return this")().require("vertx");
                            return void 0 !==
                              (a = e.runOnLoop || e.runOnContext)
                              ? function () {
                                  a(p);
                                }
                              : c();
                          } catch (e) {
                            return c();
                          }
                        })()
                      : c());
          var A = Math.random().toString(36).substring(2);
          function R() {}
          function T(t, i, n) {
            i.constructor === t.constructor &&
            n === S &&
            i.constructor.resolve === b
              ? (function (e, t) {
                  1 === t._state
                    ? D(e, t._result)
                    : 2 === t._state
                      ? k(e, t._result)
                      : C(
                          t,
                          void 0,
                          function (t) {
                            return L(e, t);
                          },
                          function (t) {
                            return k(e, t);
                          },
                        );
                })(t, i)
              : void 0 === n
                ? D(t, i)
                : e(n)
                  ? (function (e, t, i) {
                      o(function (e) {
                        var n = !1,
                          r = (function (e, t, i, n) {
                            try {
                              e.call(t, i, n);
                            } catch (e) {
                              return e;
                            }
                          })(
                            i,
                            t,
                            function (i) {
                              n || ((n = !0), t !== i ? L(e, i) : D(e, i));
                            },
                            function (t) {
                              n || ((n = !0), k(e, t));
                            },
                            e._label,
                          );
                        !n && r && ((n = !0), k(e, r));
                      }, e);
                    })(t, i, n)
                  : D(t, i);
          }
          function L(e, t) {
            if (e === t)
              k(e, new TypeError("You cannot resolve a promise with itself"));
            else if (
              ((r = typeof (n = t)),
              null === n || ("object" !== r && "function" !== r))
            )
              D(e, t);
            else {
              var i = void 0;
              try {
                i = t.then;
              } catch (t) {
                return void k(e, t);
              }
              T(e, t, i);
            }
            var n, r;
          }
          function w(e) {
            e._onerror && e._onerror(e._result), B(e);
          }
          function D(e, t) {
            void 0 === e._state &&
              ((e._result = t),
              (e._state = 1),
              0 !== e._subscribers.length && o(B, e));
          }
          function k(e, t) {
            void 0 === e._state && ((e._state = 2), (e._result = t), o(w, e));
          }
          function C(e, t, i, n) {
            var r = e._subscribers,
              a = r.length;
            (e._onerror = null),
              (r[a] = t),
              (r[a + 1] = i),
              (r[a + 2] = n),
              0 === a && e._state && o(B, e);
          }
          function B(e) {
            var t = e._subscribers,
              i = e._state;
            if (0 !== t.length) {
              for (
                var n = void 0, r = void 0, a = e._result, s = 0;
                s < t.length;
                s += 3
              )
                (n = t[s]), (r = t[s + i]), n ? I(i, n, r, a) : r(a);
              e._subscribers.length = 0;
            }
          }
          function I(t, i, n, r) {
            var a = e(n),
              s = void 0,
              o = void 0,
              d = !0;
            if (a) {
              try {
                s = n(r);
              } catch (e) {
                (d = !1), (o = e);
              }
              if (i === s)
                return void k(
                  i,
                  new TypeError(
                    "A promises callback cannot return that same promise.",
                  ),
                );
            } else s = r;
            void 0 !== i._state ||
              (a && d
                ? L(i, s)
                : !1 === d
                  ? k(i, o)
                  : 1 === t
                    ? D(i, s)
                    : 2 === t && k(i, s));
          }
          var P = 0;
          function O(e) {
            (e[A] = P++),
              (e._state = void 0),
              (e._result = void 0),
              (e._subscribers = []);
          }
          var M = (function () {
              function e(e, t) {
                (this._instanceConstructor = e),
                  (this.promise = new e(R)),
                  this.promise[A] || O(this.promise),
                  n(t)
                    ? ((this.length = t.length),
                      (this._remaining = t.length),
                      (this._result = new Array(this.length)),
                      0 === this.length
                        ? D(this.promise, this._result)
                        : ((this.length = this.length || 0),
                          this._enumerate(t),
                          0 === this._remaining &&
                            D(this.promise, this._result)))
                    : k(
                        this.promise,
                        new Error("Array Methods must be provided an Array"),
                      );
              }
              return (
                (e.prototype._enumerate = function (e) {
                  for (var t = 0; void 0 === this._state && t < e.length; t++)
                    this._eachEntry(e[t], t);
                }),
                (e.prototype._eachEntry = function (e, t) {
                  var i = this._instanceConstructor,
                    n = i.resolve;
                  if (n === b) {
                    var r = void 0,
                      a = void 0,
                      s = !1;
                    try {
                      r = e.then;
                    } catch (e) {
                      (s = !0), (a = e);
                    }
                    if (r === S && void 0 !== e._state)
                      this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof r)
                      this._remaining--, (this._result[t] = e);
                    else if (i === x) {
                      var o = new i(R);
                      s ? k(o, a) : T(o, e, r), this._willSettleAt(o, t);
                    } else
                      this._willSettleAt(
                        new i(function (t) {
                          return t(e);
                        }),
                        t,
                      );
                  } else this._willSettleAt(n(e), t);
                }),
                (e.prototype._settledAt = function (e, t, i) {
                  var n = this.promise;
                  void 0 === n._state &&
                    (this._remaining--,
                    2 === e ? k(n, i) : (this._result[t] = i)),
                    0 === this._remaining && D(n, this._result);
                }),
                (e.prototype._willSettleAt = function (e, t) {
                  var i = this;
                  C(
                    e,
                    void 0,
                    function (e) {
                      return i._settledAt(1, t, e);
                    },
                    function (e) {
                      return i._settledAt(2, t, e);
                    },
                  );
                }),
                e
              );
            })(),
            x = (function () {
              function t(e) {
                (this[A] = P++),
                  (this._result = this._state = void 0),
                  (this._subscribers = []),
                  R !== e &&
                    ("function" != typeof e &&
                      (function () {
                        throw new TypeError(
                          "You must pass a resolver function as the first argument to the promise constructor",
                        );
                      })(),
                    this instanceof t
                      ? (function (e, t) {
                          try {
                            t(
                              function (t) {
                                L(e, t);
                              },
                              function (t) {
                                k(e, t);
                              },
                            );
                          } catch (t) {
                            k(e, t);
                          }
                        })(this, e)
                      : (function () {
                          throw new TypeError(
                            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.",
                          );
                        })());
              }
              return (
                (t.prototype.catch = function (e) {
                  return this.then(null, e);
                }),
                (t.prototype.finally = function (t) {
                  var i = this.constructor;
                  return e(t)
                    ? this.then(
                        function (e) {
                          return i.resolve(t()).then(function () {
                            return e;
                          });
                        },
                        function (e) {
                          return i.resolve(t()).then(function () {
                            throw e;
                          });
                        },
                      )
                    : this.then(t, t);
                }),
                t
              );
            })();
          return (
            (x.prototype.then = S),
            (x.all = function (e) {
              return new M(this, e).promise;
            }),
            (x.race = function (e) {
              var t = this;
              return n(e)
                ? new t(function (i, n) {
                    for (var r = e.length, a = 0; a < r; a++)
                      t.resolve(e[a]).then(i, n);
                  })
                : new t(function (e, t) {
                    return t(new TypeError("You must pass an array to race."));
                  });
            }),
            (x.resolve = b),
            (x.reject = function (e) {
              var t = new this(R);
              return k(t, e), t;
            }),
            (x._setScheduler = function (e) {
              s = e;
            }),
            (x._setAsap = function (e) {
              o = e;
            }),
            (x._asap = o),
            (x.polyfill = function () {
              var e = void 0;
              if (void 0 !== i) e = i;
              else if ("undefined" != typeof self) e = self;
              else
                try {
                  e = Function("return this")();
                } catch (e) {
                  throw new Error(
                    "polyfill failed because global object is unavailable in this environment",
                  );
                }
              var t = e.Promise;
              if (t) {
                var n = null;
                try {
                  n = Object.prototype.toString.call(t.resolve());
                } catch (e) {}
                if ("[object Promise]" === n && !t.cast) return;
              }
              e.Promise = x;
            }),
            (x.Promise = x),
            x
          );
        }),
          (e.exports = n());
      }).call(this, i(16), i(17));
    },
    function (e, t) {
      var i,
        n,
        r = (e.exports = {});
      function a() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e) {
        if (i === setTimeout) return setTimeout(e, 0);
        if ((i === a || !i) && setTimeout)
          return (i = setTimeout), setTimeout(e, 0);
        try {
          return i(e, 0);
        } catch (t) {
          try {
            return i.call(null, e, 0);
          } catch (t) {
            return i.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          i = "function" == typeof setTimeout ? setTimeout : a;
        } catch (e) {
          i = a;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
      })();
      var d,
        h = [],
        _ = !1,
        u = -1;
      function l() {
        _ &&
          d &&
          ((_ = !1), d.length ? (h = d.concat(h)) : (u = -1), h.length && c());
      }
      function c() {
        if (!_) {
          var e = o(l);
          _ = !0;
          for (var t = h.length; t; ) {
            for (d = h, h = []; ++u < t; ) d && d[u].run();
            (u = -1), (t = h.length);
          }
          (d = null),
            (_ = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === s || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function f(e, t) {
        (this.fun = e), (this.array = t);
      }
      function p() {}
      (r.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        h.push(new f(e, t)), 1 !== h.length || _ || o(c);
      }),
        (f.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = p),
        (r.addListener = p),
        (r.once = p),
        (r.off = p),
        (r.removeListener = p),
        (r.removeAllListeners = p),
        (r.emit = p),
        (r.prependListener = p),
        (r.prependOnceListener = p),
        (r.listeners = function (e) {
          return [];
        }),
        (r.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    function (e, t) {
      var i;
      i = (function () {
        return this;
      })();
      try {
        i = i || new Function("return this")();
      } catch (e) {
        "object" == typeof window && (i = window);
      }
      e.exports = i;
    },
    function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(9),
        r = i(12),
        a = i(10),
        s = i(1);
      t.default = function (e) {
        var t = null,
          i = function (t, i) {
            e.postMessage({
              msg: "logcat_callback",
              data: { type: t, logcat: i },
            });
          }.bind(this);
        function o(t, i) {
          var n = { msg: s.a.INIT_SEGMENT, data: { type: t, data: i } };
          e.postMessage(n, [i.data]);
        }
        function d(t, i) {
          var n = { msg: s.a.MEDIA_SEGMENT, data: { type: t, data: i } };
          e.postMessage(n, [i.data]);
        }
        function h() {
          var t = { msg: s.a.LOADING_COMPLETE };
          e.postMessage(t);
        }
        function _() {
          var t = { msg: s.a.RECOVERED_EARLY_EOF };
          e.postMessage(t);
        }
        function u(t) {
          var i = { msg: s.a.MEDIA_INFO, data: t };
          e.postMessage(i);
        }
        function l(t) {
          var i = { msg: s.a.METADATA_ARRIVED, data: t };
          e.postMessage(i);
        }
        function c(t) {
          var i = { msg: s.a.SCRIPTDATA_ARRIVED, data: t };
          e.postMessage(i);
        }
        function f(t) {
          var i = { msg: s.a.TIMED_ID3_METADATA_ARRIVED, data: t };
          e.postMessage(i);
        }
        function p(t) {
          var i = { msg: s.a.SMPTE2038_METADATA_ARRIVED, data: t };
          e.postMessage(i);
        }
        function m(t) {
          var i = { msg: s.a.SCTE35_METADATA_ARRIVED, data: t };
          e.postMessage(i);
        }
        function g(t) {
          var i = { msg: s.a.PES_PRIVATE_DATA_DESCRIPTOR, data: t };
          e.postMessage(i);
        }
        function v(t) {
          var i = { msg: s.a.PES_PRIVATE_DATA_ARRIVED, data: t };
          e.postMessage(i);
        }
        function y(t) {
          var i = { msg: s.a.STATISTICS_INFO, data: t };
          e.postMessage(i);
        }
        function E(t, i) {
          e.postMessage({ msg: s.a.IO_ERROR, data: { type: t, info: i } });
        }
        function S(t, i) {
          e.postMessage({ msg: s.a.DEMUX_ERROR, data: { type: t, info: i } });
        }
        function b(t) {
          e.postMessage({ msg: s.a.RECOMMEND_SEEKPOINT, data: t });
        }
        r.a.install(),
          e.addEventListener("message", function (r) {
            switch (r.data.cmd) {
              case "init":
                (t = new a.a(r.data.param[0], r.data.param[1])).on(
                  s.a.IO_ERROR,
                  E.bind(this),
                ),
                  t.on(s.a.DEMUX_ERROR, S.bind(this)),
                  t.on(s.a.INIT_SEGMENT, o.bind(this)),
                  t.on(s.a.MEDIA_SEGMENT, d.bind(this)),
                  t.on(s.a.LOADING_COMPLETE, h.bind(this)),
                  t.on(s.a.RECOVERED_EARLY_EOF, _.bind(this)),
                  t.on(s.a.MEDIA_INFO, u.bind(this)),
                  t.on(s.a.METADATA_ARRIVED, l.bind(this)),
                  t.on(s.a.SCRIPTDATA_ARRIVED, c.bind(this)),
                  t.on(s.a.TIMED_ID3_METADATA_ARRIVED, f.bind(this)),
                  t.on(s.a.SMPTE2038_METADATA_ARRIVED, p.bind(this)),
                  t.on(s.a.SCTE35_METADATA_ARRIVED, m.bind(this)),
                  t.on(s.a.PES_PRIVATE_DATA_DESCRIPTOR, g.bind(this)),
                  t.on(s.a.PES_PRIVATE_DATA_ARRIVED, v.bind(this)),
                  t.on(s.a.STATISTICS_INFO, y.bind(this)),
                  t.on(s.a.RECOMMEND_SEEKPOINT, b.bind(this));
                break;
              case "destroy":
                t && (t.destroy(), (t = null)),
                  e.postMessage({ msg: "destroyed" });
                break;
              case "start":
                t.start();
                break;
              case "stop":
                t.stop();
                break;
              case "seek":
                t.seek(r.data.param);
                break;
              case "pause":
                t.pause();
                break;
              case "resume":
                t.resume();
                break;
              case "logging_config":
                var A = r.data.param;
                n.a.applyConfig(A),
                  !0 === A.enableCallback
                    ? n.a.addLogListener(i)
                    : n.a.removeLogListener(i);
            }
          });
      };
    },
    function (e, t, i) {
      "use strict";
      i.r(t);
      var n = i(12),
        r = i(11),
        a = {
          enableWorker: !1,
          enableStashBuffer: !0,
          stashInitialSize: void 0,
          isLive: !1,
          liveBufferLatencyChasing: !1,
          liveBufferLatencyMaxLatency: 1.5,
          liveBufferLatencyMinRemain: 0.5,
          lazyLoad: !0,
          lazyLoadMaxDuration: 180,
          lazyLoadRecoverDuration: 30,
          deferLoadAfterSourceOpen: !0,
          autoCleanupMaxBackwardDuration: 180,
          autoCleanupMinBackwardDuration: 120,
          statisticsInfoReportInterval: 600,
          fixAudioTimestampGap: !0,
          accurateSeek: !1,
          seekType: "range",
          seekParamStart: "bstart",
          seekParamEnd: "bend",
          rangeLoadZeroStart: !1,
          customSeekHandler: void 0,
          reuseRedirectedURL: !1,
          headers: void 0,
          customLoader: void 0,
        };
      function s() {
        return Object.assign({}, a);
      }
      var o = (function () {
          function e() {}
          return (
            (e.supportMSEH264Playback = function () {
              return (
                window.MediaSource &&
                window.MediaSource.isTypeSupported(
                  'video/mp4; codecs="avc1.42E01E,mp4a.40.2"',
                )
              );
            }),
            (e.supportMSEH265Playback = function () {
              return (
                window.MediaSource &&
                window.MediaSource.isTypeSupported(
                  'video/mp4; codecs="hvc1.1.6.L93.B0"',
                )
              );
            }),
            (e.supportNetworkStreamIO = function () {
              var e = new r.a({}, s()),
                t = e.loaderType;
              return (
                e.destroy(),
                "fetch-stream-loader" == t || "xhr-moz-chunked-loader" == t
              );
            }),
            (e.getNetworkLoaderTypeName = function () {
              var e = new r.a({}, s()),
                t = e.loaderType;
              return e.destroy(), t;
            }),
            (e.supportNativeMediaPlayback = function (t) {
              null == e.videoElement &&
                (e.videoElement = window.document.createElement("video"));
              var i = e.videoElement.canPlayType(t);
              return "probably" === i || "maybe" == i;
            }),
            (e.getFeatureList = function () {
              var t = {
                msePlayback: !1,
                mseLivePlayback: !1,
                mseH265Playback: !1,
                networkStreamIO: !1,
                networkLoaderName: "",
                nativeMP4H264Playback: !1,
                nativeMP4H265Playback: !1,
                nativeWebmVP8Playback: !1,
                nativeWebmVP9Playback: !1,
              };
              return (
                (t.msePlayback = e.supportMSEH264Playback()),
                (t.networkStreamIO = e.supportNetworkStreamIO()),
                (t.networkLoaderName = e.getNetworkLoaderTypeName()),
                (t.mseLivePlayback = t.msePlayback && t.networkStreamIO),
                (t.mseH265Playback = e.supportMSEH265Playback()),
                (t.nativeMP4H264Playback = e.supportNativeMediaPlayback(
                  'video/mp4; codecs="avc1.42001E, mp4a.40.2"',
                )),
                (t.nativeMP4H265Playback = e.supportNativeMediaPlayback(
                  'video/mp4; codecs="hvc1.1.6.L93.B0"',
                )),
                (t.nativeWebmVP8Playback = e.supportNativeMediaPlayback(
                  'video/webm; codecs="vp8.0, vorbis"',
                )),
                (t.nativeWebmVP9Playback = e.supportNativeMediaPlayback(
                  'video/webm; codecs="vp9"',
                )),
                t
              );
            }),
            e
          );
        })(),
        d = i(2),
        h = i(6),
        _ = i.n(h),
        u = i(0),
        l = i(4),
        c = {
          ERROR: "error",
          LOADING_COMPLETE: "loading_complete",
          RECOVERED_EARLY_EOF: "recovered_early_eof",
          MEDIA_INFO: "media_info",
          METADATA_ARRIVED: "metadata_arrived",
          SCRIPTDATA_ARRIVED: "scriptdata_arrived",
          TIMED_ID3_METADATA_ARRIVED: "timed_id3_metadata_arrived",
          SMPTE2038_METADATA_ARRIVED: "smpte2038_metadata_arrived",
          SCTE35_METADATA_ARRIVED: "scte35_metadata_arrived",
          PES_PRIVATE_DATA_DESCRIPTOR: "pes_private_data_descriptor",
          PES_PRIVATE_DATA_ARRIVED: "pes_private_data_arrived",
          STATISTICS_INFO: "statistics_info",
        },
        f = i(13),
        p = i.n(f),
        m = i(9),
        g = i(10),
        v = i(1),
        y = i(8),
        E = (function () {
          function e(e, t) {
            if (
              ((this.TAG = "Transmuxer"),
              (this._emitter = new _.a()),
              t.enableWorker && "undefined" != typeof Worker)
            )
              try {
                (this._worker = p()(18)),
                  (this._workerDestroying = !1),
                  this._worker.addEventListener(
                    "message",
                    this._onWorkerMessage.bind(this),
                  ),
                  this._worker.postMessage({ cmd: "init", param: [e, t] }),
                  (this.e = {
                    onLoggingConfigChanged:
                      this._onLoggingConfigChanged.bind(this),
                  }),
                  m.a.registerListener(this.e.onLoggingConfigChanged),
                  this._worker.postMessage({
                    cmd: "logging_config",
                    param: m.a.getConfig(),
                  });
              } catch (i) {
                u.a.e(
                  this.TAG,
                  "Error while initialize transmuxing worker, fallback to inline transmuxing",
                ),
                  (this._worker = null),
                  (this._controller = new g.a(e, t));
              }
            else this._controller = new g.a(e, t);
            if (this._controller) {
              var i = this._controller;
              i.on(v.a.IO_ERROR, this._onIOError.bind(this)),
                i.on(v.a.DEMUX_ERROR, this._onDemuxError.bind(this)),
                i.on(v.a.INIT_SEGMENT, this._onInitSegment.bind(this)),
                i.on(v.a.MEDIA_SEGMENT, this._onMediaSegment.bind(this)),
                i.on(v.a.LOADING_COMPLETE, this._onLoadingComplete.bind(this)),
                i.on(
                  v.a.RECOVERED_EARLY_EOF,
                  this._onRecoveredEarlyEof.bind(this),
                ),
                i.on(v.a.MEDIA_INFO, this._onMediaInfo.bind(this)),
                i.on(v.a.METADATA_ARRIVED, this._onMetaDataArrived.bind(this)),
                i.on(
                  v.a.SCRIPTDATA_ARRIVED,
                  this._onScriptDataArrived.bind(this),
                ),
                i.on(
                  v.a.TIMED_ID3_METADATA_ARRIVED,
                  this._onTimedID3MetadataArrived.bind(this),
                ),
                i.on(
                  v.a.SMPTE2038_METADATA_ARRIVED,
                  this._onSMPTE2038MetadataArrived.bind(this),
                ),
                i.on(
                  v.a.SCTE35_METADATA_ARRIVED,
                  this._onSCTE35MetadataArrived.bind(this),
                ),
                i.on(
                  v.a.PES_PRIVATE_DATA_DESCRIPTOR,
                  this._onPESPrivateDataDescriptor.bind(this),
                ),
                i.on(
                  v.a.PES_PRIVATE_DATA_ARRIVED,
                  this._onPESPrivateDataArrived.bind(this),
                ),
                i.on(v.a.STATISTICS_INFO, this._onStatisticsInfo.bind(this)),
                i.on(
                  v.a.RECOMMEND_SEEKPOINT,
                  this._onRecommendSeekpoint.bind(this),
                );
            }
          }
          return (
            (e.prototype.destroy = function () {
              this._worker
                ? this._workerDestroying ||
                  ((this._workerDestroying = !0),
                  this._worker.postMessage({ cmd: "destroy" }),
                  m.a.removeListener(this.e.onLoggingConfigChanged),
                  (this.e = null))
                : (this._controller.destroy(), (this._controller = null)),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            }),
            (e.prototype.on = function (e, t) {
              this._emitter.addListener(e, t);
            }),
            (e.prototype.off = function (e, t) {
              this._emitter.removeListener(e, t);
            }),
            (e.prototype.hasWorker = function () {
              return null != this._worker;
            }),
            (e.prototype.open = function () {
              this._worker
                ? this._worker.postMessage({ cmd: "start" })
                : this._controller.start();
            }),
            (e.prototype.close = function () {
              this._worker
                ? this._worker.postMessage({ cmd: "stop" })
                : this._controller.stop();
            }),
            (e.prototype.seek = function (e) {
              this._worker
                ? this._worker.postMessage({ cmd: "seek", param: e })
                : this._controller.seek(e);
            }),
            (e.prototype.pause = function () {
              this._worker
                ? this._worker.postMessage({ cmd: "pause" })
                : this._controller.pause();
            }),
            (e.prototype.resume = function () {
              this._worker
                ? this._worker.postMessage({ cmd: "resume" })
                : this._controller.resume();
            }),
            (e.prototype._onInitSegment = function (e, t) {
              var i = this;
              Promise.resolve().then(function () {
                i._emitter.emit(v.a.INIT_SEGMENT, e, t);
              });
            }),
            (e.prototype._onMediaSegment = function (e, t) {
              var i = this;
              Promise.resolve().then(function () {
                i._emitter.emit(v.a.MEDIA_SEGMENT, e, t);
              });
            }),
            (e.prototype._onLoadingComplete = function () {
              var e = this;
              Promise.resolve().then(function () {
                e._emitter.emit(v.a.LOADING_COMPLETE);
              });
            }),
            (e.prototype._onRecoveredEarlyEof = function () {
              var e = this;
              Promise.resolve().then(function () {
                e._emitter.emit(v.a.RECOVERED_EARLY_EOF);
              });
            }),
            (e.prototype._onMediaInfo = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.MEDIA_INFO, e);
              });
            }),
            (e.prototype._onMetaDataArrived = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.METADATA_ARRIVED, e);
              });
            }),
            (e.prototype._onScriptDataArrived = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.SCRIPTDATA_ARRIVED, e);
              });
            }),
            (e.prototype._onTimedID3MetadataArrived = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.TIMED_ID3_METADATA_ARRIVED, e);
              });
            }),
            (e.prototype._onSMPTE2038MetadataArrived = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.SMPTE2038_METADATA_ARRIVED, e);
              });
            }),
            (e.prototype._onSCTE35MetadataArrived = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.SCTE35_METADATA_ARRIVED, e);
              });
            }),
            (e.prototype._onPESPrivateDataDescriptor = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.PES_PRIVATE_DATA_DESCRIPTOR, e);
              });
            }),
            (e.prototype._onPESPrivateDataArrived = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.PES_PRIVATE_DATA_ARRIVED, e);
              });
            }),
            (e.prototype._onStatisticsInfo = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.STATISTICS_INFO, e);
              });
            }),
            (e.prototype._onIOError = function (e, t) {
              var i = this;
              Promise.resolve().then(function () {
                i._emitter.emit(v.a.IO_ERROR, e, t);
              });
            }),
            (e.prototype._onDemuxError = function (e, t) {
              var i = this;
              Promise.resolve().then(function () {
                i._emitter.emit(v.a.DEMUX_ERROR, e, t);
              });
            }),
            (e.prototype._onRecommendSeekpoint = function (e) {
              var t = this;
              Promise.resolve().then(function () {
                t._emitter.emit(v.a.RECOMMEND_SEEKPOINT, e);
              });
            }),
            (e.prototype._onLoggingConfigChanged = function (e) {
              this._worker &&
                this._worker.postMessage({ cmd: "logging_config", param: e });
            }),
            (e.prototype._onWorkerMessage = function (e) {
              var t = e.data,
                i = t.data;
              if ("destroyed" === t.msg || this._workerDestroying)
                return (
                  (this._workerDestroying = !1),
                  this._worker.terminate(),
                  void (this._worker = null)
                );
              switch (t.msg) {
                case v.a.INIT_SEGMENT:
                case v.a.MEDIA_SEGMENT:
                  this._emitter.emit(t.msg, i.type, i.data);
                  break;
                case v.a.LOADING_COMPLETE:
                case v.a.RECOVERED_EARLY_EOF:
                  this._emitter.emit(t.msg);
                  break;
                case v.a.MEDIA_INFO:
                  Object.setPrototypeOf(i, y.a.prototype),
                    this._emitter.emit(t.msg, i);
                  break;
                case v.a.METADATA_ARRIVED:
                case v.a.SCRIPTDATA_ARRIVED:
                case v.a.TIMED_ID3_METADATA_ARRIVED:
                case v.a.SMPTE2038_METADATA_ARRIVED:
                case v.a.SCTE35_METADATA_ARRIVED:
                case v.a.PES_PRIVATE_DATA_DESCRIPTOR:
                case v.a.PES_PRIVATE_DATA_ARRIVED:
                case v.a.STATISTICS_INFO:
                  this._emitter.emit(t.msg, i);
                  break;
                case v.a.IO_ERROR:
                case v.a.DEMUX_ERROR:
                  this._emitter.emit(t.msg, i.type, i.info);
                  break;
                case v.a.RECOMMEND_SEEKPOINT:
                  this._emitter.emit(t.msg, i);
                  break;
                case "logcat_callback":
                  u.a.emitter.emit("log", i.type, i.logcat);
              }
            }),
            e
          );
        })(),
        S = {
          ERROR: "error",
          SOURCE_OPEN: "source_open",
          UPDATE_END: "update_end",
          BUFFER_FULL: "buffer_full",
        },
        b = i(7),
        A = i(3),
        R = (function () {
          function e(e) {
            (this.TAG = "MSEController"),
              (this._config = e),
              (this._emitter = new _.a()),
              this._config.isLive &&
                null == this._config.autoCleanupSourceBuffer &&
                (this._config.autoCleanupSourceBuffer = !0),
              (this.e = {
                onSourceOpen: this._onSourceOpen.bind(this),
                onSourceEnded: this._onSourceEnded.bind(this),
                onSourceClose: this._onSourceClose.bind(this),
                onSourceBufferError: this._onSourceBufferError.bind(this),
                onSourceBufferUpdateEnd:
                  this._onSourceBufferUpdateEnd.bind(this),
              }),
              (this._mediaSource = null),
              (this._mediaSourceObjectURL = null),
              (this._mediaElement = null),
              (this._isBufferFull = !1),
              (this._hasPendingEos = !1),
              (this._requireSetMediaDuration = !1),
              (this._pendingMediaDuration = 0),
              (this._pendingSourceBufferInit = []),
              (this._mimeTypes = { video: null, audio: null }),
              (this._sourceBuffers = { video: null, audio: null }),
              (this._lastInitSegments = { video: null, audio: null }),
              (this._pendingSegments = { video: [], audio: [] }),
              (this._pendingRemoveRanges = { video: [], audio: [] }),
              (this._idrList = new b.a());
          }
          return (
            (e.prototype.destroy = function () {
              (this._mediaElement || this._mediaSource) &&
                this.detachMediaElement(),
                (this.e = null),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            }),
            (e.prototype.on = function (e, t) {
              this._emitter.addListener(e, t);
            }),
            (e.prototype.off = function (e, t) {
              this._emitter.removeListener(e, t);
            }),
            (e.prototype.attachMediaElement = function (e) {
              if (this._mediaSource)
                throw new A.a(
                  "MediaSource has been attached to an HTMLMediaElement!",
                );
              var t = (this._mediaSource = new window.MediaSource());
              t.addEventListener("sourceopen", this.e.onSourceOpen),
                t.addEventListener("sourceended", this.e.onSourceEnded),
                t.addEventListener("sourceclose", this.e.onSourceClose),
                (this._mediaElement = e),
                (this._mediaSourceObjectURL = window.URL.createObjectURL(
                  this._mediaSource,
                )),
                (e.src = this._mediaSourceObjectURL);
            }),
            (e.prototype.detachMediaElement = function () {
              if (this._mediaSource) {
                var e = this._mediaSource;
                for (var t in this._sourceBuffers) {
                  var i = this._pendingSegments[t];
                  i.splice(0, i.length),
                    (this._pendingSegments[t] = null),
                    (this._pendingRemoveRanges[t] = null),
                    (this._lastInitSegments[t] = null);
                  var n = this._sourceBuffers[t];
                  if (n) {
                    if ("closed" !== e.readyState) {
                      try {
                        e.removeSourceBuffer(n);
                      } catch (e) {
                        u.a.e(this.TAG, e.message);
                      }
                      n.removeEventListener(
                        "error",
                        this.e.onSourceBufferError,
                      ),
                        n.removeEventListener(
                          "updateend",
                          this.e.onSourceBufferUpdateEnd,
                        );
                    }
                    (this._mimeTypes[t] = null),
                      (this._sourceBuffers[t] = null);
                  }
                }
                if ("open" === e.readyState)
                  try {
                    e.endOfStream();
                  } catch (e) {
                    u.a.e(this.TAG, e.message);
                  }
                e.removeEventListener("sourceopen", this.e.onSourceOpen),
                  e.removeEventListener("sourceended", this.e.onSourceEnded),
                  e.removeEventListener("sourceclose", this.e.onSourceClose),
                  (this._pendingSourceBufferInit = []),
                  (this._isBufferFull = !1),
                  this._idrList.clear(),
                  (this._mediaSource = null);
              }
              this._mediaElement &&
                ((this._mediaElement.src = ""),
                this._mediaElement.removeAttribute("src"),
                (this._mediaElement = null)),
                this._mediaSourceObjectURL &&
                  (window.URL.revokeObjectURL(this._mediaSourceObjectURL),
                  (this._mediaSourceObjectURL = null));
            }),
            (e.prototype.appendInitSegment = function (e, t) {
              if (!this._mediaSource || "open" !== this._mediaSource.readyState)
                return (
                  this._pendingSourceBufferInit.push(e),
                  void this._pendingSegments[e.type].push(e)
                );
              var i = e,
                n = "" + i.container;
              i.codec && i.codec.length > 0 && (n += ";codecs=" + i.codec);
              var r = !1;
              if (
                (u.a.v(
                  this.TAG,
                  "Received Initialization Segment, mimeType: " + n,
                ),
                (this._lastInitSegments[i.type] = i),
                n !== this._mimeTypes[i.type])
              ) {
                if (this._mimeTypes[i.type])
                  u.a.v(
                    this.TAG,
                    "Notice: " +
                      i.type +
                      " mimeType changed, origin: " +
                      this._mimeTypes[i.type] +
                      ", target: " +
                      n,
                  );
                else {
                  r = !0;
                  try {
                    var a = (this._sourceBuffers[i.type] =
                      this._mediaSource.addSourceBuffer(n));
                    a.addEventListener("error", this.e.onSourceBufferError),
                      a.addEventListener(
                        "updateend",
                        this.e.onSourceBufferUpdateEnd,
                      );
                  } catch (e) {
                    return (
                      u.a.e(this.TAG, e.message),
                      void this._emitter.emit(S.ERROR, {
                        code: e.code,
                        msg: e.message,
                      })
                    );
                  }
                }
                this._mimeTypes[i.type] = n;
              }
              t || this._pendingSegments[i.type].push(i),
                r ||
                  (this._sourceBuffers[i.type] &&
                    !this._sourceBuffers[i.type].updating &&
                    this._doAppendSegments()),
                l.a.safari &&
                  "audio/mpeg" === i.container &&
                  i.mediaDuration > 0 &&
                  ((this._requireSetMediaDuration = !0),
                  (this._pendingMediaDuration = i.mediaDuration / 1e3),
                  this._updateMediaSourceDuration());
            }),
            (e.prototype.appendMediaSegment = function (e) {
              var t = e;
              this._pendingSegments[t.type].push(t),
                this._config.autoCleanupSourceBuffer &&
                  this._needCleanupSourceBuffer() &&
                  this._doCleanupSourceBuffer();
              var i = this._sourceBuffers[t.type];
              !i ||
                i.updating ||
                this._hasPendingRemoveRanges() ||
                this._doAppendSegments();
            }),
            (e.prototype.seek = function (e) {
              for (var t in this._sourceBuffers)
                if (this._sourceBuffers[t]) {
                  var i = this._sourceBuffers[t];
                  if ("open" === this._mediaSource.readyState)
                    try {
                      i.abort();
                    } catch (e) {
                      u.a.e(this.TAG, e.message);
                    }
                  this._idrList.clear();
                  var n = this._pendingSegments[t];
                  if (
                    (n.splice(0, n.length),
                    "closed" !== this._mediaSource.readyState)
                  ) {
                    for (var r = 0; r < i.buffered.length; r++) {
                      var a = i.buffered.start(r),
                        s = i.buffered.end(r);
                      this._pendingRemoveRanges[t].push({ start: a, end: s });
                    }
                    if ((i.updating || this._doRemoveRanges(), l.a.safari)) {
                      var o = this._lastInitSegments[t];
                      o &&
                        (this._pendingSegments[t].push(o),
                        i.updating || this._doAppendSegments());
                    }
                  }
                }
            }),
            (e.prototype.endOfStream = function () {
              var e = this._mediaSource,
                t = this._sourceBuffers;
              e && "open" === e.readyState
                ? (t.video && t.video.updating) || (t.audio && t.audio.updating)
                  ? (this._hasPendingEos = !0)
                  : ((this._hasPendingEos = !1), e.endOfStream())
                : e &&
                  "closed" === e.readyState &&
                  this._hasPendingSegments() &&
                  (this._hasPendingEos = !0);
            }),
            (e.prototype.getNearestKeyframe = function (e) {
              return this._idrList.getLastSyncPointBeforeDts(e);
            }),
            (e.prototype._needCleanupSourceBuffer = function () {
              if (!this._config.autoCleanupSourceBuffer) return !1;
              var e = this._mediaElement.currentTime;
              for (var t in this._sourceBuffers) {
                var i = this._sourceBuffers[t];
                if (i) {
                  var n = i.buffered;
                  if (
                    n.length >= 1 &&
                    e - n.start(0) >=
                      this._config.autoCleanupMaxBackwardDuration
                  )
                    return !0;
                }
              }
              return !1;
            }),
            (e.prototype._doCleanupSourceBuffer = function () {
              var e = this._mediaElement.currentTime;
              for (var t in this._sourceBuffers) {
                var i = this._sourceBuffers[t];
                if (i) {
                  for (var n = i.buffered, r = !1, a = 0; a < n.length; a++) {
                    var s = n.start(a),
                      o = n.end(a);
                    if (s <= e && e < o + 3) {
                      if (
                        e - s >=
                        this._config.autoCleanupMaxBackwardDuration
                      ) {
                        r = !0;
                        var d = e - this._config.autoCleanupMinBackwardDuration;
                        this._pendingRemoveRanges[t].push({ start: s, end: d });
                      }
                    } else
                      o < e &&
                        ((r = !0),
                        this._pendingRemoveRanges[t].push({
                          start: s,
                          end: o,
                        }));
                  }
                  r && !i.updating && this._doRemoveRanges();
                }
              }
            }),
            (e.prototype._updateMediaSourceDuration = function () {
              var e = this._sourceBuffers;
              if (
                0 !== this._mediaElement.readyState &&
                "open" === this._mediaSource.readyState &&
                !(
                  (e.video && e.video.updating) ||
                  (e.audio && e.audio.updating)
                )
              ) {
                var t = this._mediaSource.duration,
                  i = this._pendingMediaDuration;
                i > 0 &&
                  (isNaN(t) || i > t) &&
                  (u.a.v(
                    this.TAG,
                    "Update MediaSource duration from " + t + " to " + i,
                  ),
                  (this._mediaSource.duration = i)),
                  (this._requireSetMediaDuration = !1),
                  (this._pendingMediaDuration = 0);
              }
            }),
            (e.prototype._doRemoveRanges = function () {
              for (var e in this._pendingRemoveRanges)
                if (this._sourceBuffers[e] && !this._sourceBuffers[e].updating)
                  for (
                    var t = this._sourceBuffers[e],
                      i = this._pendingRemoveRanges[e];
                    i.length && !t.updating;

                  ) {
                    var n = i.shift();
                    t.remove(n.start, n.end);
                  }
            }),
            (e.prototype._doAppendSegments = function () {
              var e = this._pendingSegments;
              for (var t in e)
                if (
                  this._sourceBuffers[t] &&
                  !this._sourceBuffers[t].updating &&
                  e[t].length > 0
                ) {
                  var i = e[t].shift();
                  if (i.timestampOffset) {
                    var n = this._sourceBuffers[t].timestampOffset,
                      r = i.timestampOffset / 1e3;
                    Math.abs(n - r) > 0.1 &&
                      (u.a.v(
                        this.TAG,
                        "Update MPEG audio timestampOffset from " +
                          n +
                          " to " +
                          r,
                      ),
                      (this._sourceBuffers[t].timestampOffset = r)),
                      delete i.timestampOffset;
                  }
                  if (!i.data || 0 === i.data.byteLength) continue;
                  try {
                    this._sourceBuffers[t].appendBuffer(i.data),
                      (this._isBufferFull = !1),
                      "video" === t &&
                        i.hasOwnProperty("info") &&
                        this._idrList.appendArray(i.info.syncPoints);
                  } catch (e) {
                    this._pendingSegments[t].unshift(i),
                      22 === e.code
                        ? (this._isBufferFull ||
                            this._emitter.emit(S.BUFFER_FULL),
                          (this._isBufferFull = !0))
                        : (u.a.e(this.TAG, e.message),
                          this._emitter.emit(S.ERROR, {
                            code: e.code,
                            msg: e.message,
                          }));
                  }
                }
            }),
            (e.prototype._onSourceOpen = function () {
              if (
                (u.a.v(this.TAG, "MediaSource onSourceOpen"),
                this._mediaSource.removeEventListener(
                  "sourceopen",
                  this.e.onSourceOpen,
                ),
                this._pendingSourceBufferInit.length > 0)
              )
                for (var e = this._pendingSourceBufferInit; e.length; ) {
                  var t = e.shift();
                  this.appendInitSegment(t, !0);
                }
              this._hasPendingSegments() && this._doAppendSegments(),
                this._emitter.emit(S.SOURCE_OPEN);
            }),
            (e.prototype._onSourceEnded = function () {
              u.a.v(this.TAG, "MediaSource onSourceEnded");
            }),
            (e.prototype._onSourceClose = function () {
              u.a.v(this.TAG, "MediaSource onSourceClose"),
                this._mediaSource &&
                  null != this.e &&
                  (this._mediaSource.removeEventListener(
                    "sourceopen",
                    this.e.onSourceOpen,
                  ),
                  this._mediaSource.removeEventListener(
                    "sourceended",
                    this.e.onSourceEnded,
                  ),
                  this._mediaSource.removeEventListener(
                    "sourceclose",
                    this.e.onSourceClose,
                  ));
            }),
            (e.prototype._hasPendingSegments = function () {
              var e = this._pendingSegments;
              return e.video.length > 0 || e.audio.length > 0;
            }),
            (e.prototype._hasPendingRemoveRanges = function () {
              var e = this._pendingRemoveRanges;
              return e.video.length > 0 || e.audio.length > 0;
            }),
            (e.prototype._onSourceBufferUpdateEnd = function () {
              this._requireSetMediaDuration
                ? this._updateMediaSourceDuration()
                : this._hasPendingRemoveRanges()
                  ? this._doRemoveRanges()
                  : this._hasPendingSegments()
                    ? this._doAppendSegments()
                    : this._hasPendingEos && this.endOfStream(),
                this._emitter.emit(S.UPDATE_END);
            }),
            (e.prototype._onSourceBufferError = function (e) {
              u.a.e(this.TAG, "SourceBuffer Error: " + e);
            }),
            e
          );
        })(),
        T = i(5),
        L = {
          NETWORK_ERROR: "NetworkError",
          MEDIA_ERROR: "MediaError",
          OTHER_ERROR: "OtherError",
        },
        w = {
          NETWORK_EXCEPTION: d.b.EXCEPTION,
          NETWORK_STATUS_CODE_INVALID: d.b.HTTP_STATUS_CODE_INVALID,
          NETWORK_TIMEOUT: d.b.CONNECTING_TIMEOUT,
          NETWORK_UNRECOVERABLE_EARLY_EOF: d.b.UNRECOVERABLE_EARLY_EOF,
          MEDIA_MSE_ERROR: "MediaMSEError",
          MEDIA_FORMAT_ERROR: T.a.FORMAT_ERROR,
          MEDIA_FORMAT_UNSUPPORTED: T.a.FORMAT_UNSUPPORTED,
          MEDIA_CODEC_UNSUPPORTED: T.a.CODEC_UNSUPPORTED,
        },
        D = (function () {
          function e(e, t) {
            (this.TAG = "MSEPlayer"),
              (this._type = "MSEPlayer"),
              (this._emitter = new _.a()),
              (this._config = s()),
              "object" == typeof t && Object.assign(this._config, t);
            var i = e.type.toLowerCase();
            if ("mse" !== i && "mpegts" !== i && "m2ts" !== i && "flv" !== i)
              throw new A.b(
                "MSEPlayer requires an mpegts/m2ts/flv MediaDataSource input!",
              );
            !0 === e.isLive && (this._config.isLive = !0),
              (this.e = {
                onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
                onvSeeking: this._onvSeeking.bind(this),
                onvCanPlay: this._onvCanPlay.bind(this),
                onvStalled: this._onvStalled.bind(this),
                onvProgress: this._onvProgress.bind(this),
              }),
              self.performance && self.performance.now
                ? (this._now = self.performance.now.bind(self.performance))
                : (this._now = Date.now),
              (this._pendingSeekTime = null),
              (this._requestSetTime = !1),
              (this._seekpointRecord = null),
              (this._progressChecker = null),
              (this._mediaDataSource = e),
              (this._mediaElement = null),
              (this._msectl = null),
              (this._transmuxer = null),
              (this._mseSourceOpened = !1),
              (this._hasPendingLoad = !1),
              (this._receivedCanPlay = !1),
              (this._mediaInfo = null),
              (this._statisticsInfo = null);
            var n =
              l.a.chrome &&
              (l.a.version.major < 50 ||
                (50 === l.a.version.major && l.a.version.build < 2661));
            (this._alwaysSeekKeyframe = !!(n || l.a.msedge || l.a.msie)),
              this._alwaysSeekKeyframe && (this._config.accurateSeek = !1);
          }
          return (
            (e.prototype.destroy = function () {
              null != this._progressChecker &&
                (window.clearInterval(this._progressChecker),
                (this._progressChecker = null)),
                this._transmuxer && this.unload(),
                this._mediaElement && this.detachMediaElement(),
                (this.e = null),
                (this._mediaDataSource = null),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            }),
            (e.prototype.on = function (e, t) {
              var i = this;
              e === c.MEDIA_INFO
                ? null != this._mediaInfo &&
                  Promise.resolve().then(function () {
                    i._emitter.emit(c.MEDIA_INFO, i.mediaInfo);
                  })
                : e === c.STATISTICS_INFO &&
                  null != this._statisticsInfo &&
                  Promise.resolve().then(function () {
                    i._emitter.emit(c.STATISTICS_INFO, i.statisticsInfo);
                  }),
                this._emitter.addListener(e, t);
            }),
            (e.prototype.off = function (e, t) {
              this._emitter.removeListener(e, t);
            }),
            (e.prototype.attachMediaElement = function (e) {
              var t = this;
              if (
                ((this._mediaElement = e),
                e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata),
                e.addEventListener("seeking", this.e.onvSeeking),
                e.addEventListener("canplay", this.e.onvCanPlay),
                e.addEventListener("stalled", this.e.onvStalled),
                e.addEventListener("progress", this.e.onvProgress),
                (this._msectl = new R(this._config)),
                this._msectl.on(S.UPDATE_END, this._onmseUpdateEnd.bind(this)),
                this._msectl.on(
                  S.BUFFER_FULL,
                  this._onmseBufferFull.bind(this),
                ),
                this._msectl.on(S.SOURCE_OPEN, function () {
                  (t._mseSourceOpened = !0),
                    t._hasPendingLoad && ((t._hasPendingLoad = !1), t.load());
                }),
                this._msectl.on(S.ERROR, function (e) {
                  t._emitter.emit(c.ERROR, L.MEDIA_ERROR, w.MEDIA_MSE_ERROR, e);
                }),
                this._msectl.attachMediaElement(e),
                null != this._pendingSeekTime)
              )
                try {
                  (e.currentTime = this._pendingSeekTime),
                    (this._pendingSeekTime = null);
                } catch (e) {}
            }),
            (e.prototype.detachMediaElement = function () {
              this._mediaElement &&
                (this._msectl.detachMediaElement(),
                this._mediaElement.removeEventListener(
                  "loadedmetadata",
                  this.e.onvLoadedMetadata,
                ),
                this._mediaElement.removeEventListener(
                  "seeking",
                  this.e.onvSeeking,
                ),
                this._mediaElement.removeEventListener(
                  "canplay",
                  this.e.onvCanPlay,
                ),
                this._mediaElement.removeEventListener(
                  "stalled",
                  this.e.onvStalled,
                ),
                this._mediaElement.removeEventListener(
                  "progress",
                  this.e.onvProgress,
                ),
                (this._mediaElement = null)),
                this._msectl && (this._msectl.destroy(), (this._msectl = null));
            }),
            (e.prototype.load = function () {
              var e = this;
              if (!this._mediaElement)
                throw new A.a(
                  "HTMLMediaElement must be attached before load()!",
                );
              if (this._transmuxer)
                throw new A.a(
                  "MSEPlayer.load() has been called, please call unload() first!",
                );
              this._hasPendingLoad ||
                (this._config.deferLoadAfterSourceOpen &&
                !1 === this._mseSourceOpened
                  ? (this._hasPendingLoad = !0)
                  : (this._mediaElement.readyState > 0 &&
                      ((this._requestSetTime = !0),
                      (this._mediaElement.currentTime = 0)),
                    (this._transmuxer = new E(
                      this._mediaDataSource,
                      this._config,
                    )),
                    this._transmuxer.on(v.a.INIT_SEGMENT, function (t, i) {
                      e._msectl.appendInitSegment(i);
                    }),
                    this._transmuxer.on(v.a.MEDIA_SEGMENT, function (t, i) {
                      if (
                        (e._msectl.appendMediaSegment(i),
                        e._config.lazyLoad && !e._config.isLive)
                      ) {
                        var n = e._mediaElement.currentTime;
                        i.info.endDts >=
                          1e3 * (n + e._config.lazyLoadMaxDuration) &&
                          null == e._progressChecker &&
                          (u.a.v(
                            e.TAG,
                            "Maximum buffering duration exceeded, suspend transmuxing task",
                          ),
                          e._suspendTransmuxer());
                      }
                    }),
                    this._transmuxer.on(v.a.LOADING_COMPLETE, function () {
                      e._msectl.endOfStream(),
                        e._emitter.emit(c.LOADING_COMPLETE);
                    }),
                    this._transmuxer.on(v.a.RECOVERED_EARLY_EOF, function () {
                      e._emitter.emit(c.RECOVERED_EARLY_EOF);
                    }),
                    this._transmuxer.on(v.a.IO_ERROR, function (t, i) {
                      e._emitter.emit(c.ERROR, L.NETWORK_ERROR, t, i);
                    }),
                    this._transmuxer.on(v.a.DEMUX_ERROR, function (t, i) {
                      e._emitter.emit(c.ERROR, L.MEDIA_ERROR, t, {
                        code: -1,
                        msg: i,
                      });
                    }),
                    this._transmuxer.on(v.a.MEDIA_INFO, function (t) {
                      (e._mediaInfo = t),
                        e._emitter.emit(c.MEDIA_INFO, Object.assign({}, t));
                    }),
                    this._transmuxer.on(v.a.METADATA_ARRIVED, function (t) {
                      e._emitter.emit(c.METADATA_ARRIVED, t);
                    }),
                    this._transmuxer.on(v.a.SCRIPTDATA_ARRIVED, function (t) {
                      e._emitter.emit(c.SCRIPTDATA_ARRIVED, t);
                    }),
                    this._transmuxer.on(
                      v.a.TIMED_ID3_METADATA_ARRIVED,
                      function (t) {
                        e._emitter.emit(c.TIMED_ID3_METADATA_ARRIVED, t);
                      },
                    ),
                    this._transmuxer.on(
                      v.a.SMPTE2038_METADATA_ARRIVED,
                      function (t) {
                        e._emitter.emit(c.SMPTE2038_METADATA_ARRIVED, t);
                      },
                    ),
                    this._transmuxer.on(
                      v.a.SCTE35_METADATA_ARRIVED,
                      function (t) {
                        e._emitter.emit(c.SCTE35_METADATA_ARRIVED, t);
                      },
                    ),
                    this._transmuxer.on(
                      v.a.PES_PRIVATE_DATA_DESCRIPTOR,
                      function (t) {
                        e._emitter.emit(c.PES_PRIVATE_DATA_DESCRIPTOR, t);
                      },
                    ),
                    this._transmuxer.on(
                      v.a.PES_PRIVATE_DATA_ARRIVED,
                      function (t) {
                        e._emitter.emit(c.PES_PRIVATE_DATA_ARRIVED, t);
                      },
                    ),
                    this._transmuxer.on(v.a.STATISTICS_INFO, function (t) {
                      (e._statisticsInfo = e._fillStatisticsInfo(t)),
                        e._emitter.emit(
                          c.STATISTICS_INFO,
                          Object.assign({}, e._statisticsInfo),
                        );
                    }),
                    this._transmuxer.on(v.a.RECOMMEND_SEEKPOINT, function (t) {
                      e._mediaElement &&
                        !e._config.accurateSeek &&
                        ((e._requestSetTime = !0),
                        (e._mediaElement.currentTime = t / 1e3));
                    }),
                    this._transmuxer.open()));
            }),
            (e.prototype.unload = function () {
              this._mediaElement && this._mediaElement.pause(),
                this._msectl && this._msectl.seek(0),
                this._transmuxer &&
                  (this._transmuxer.close(),
                  this._transmuxer.destroy(),
                  (this._transmuxer = null));
            }),
            (e.prototype.play = function () {
              return this._mediaElement.play();
            }),
            (e.prototype.pause = function () {
              this._mediaElement.pause();
            }),
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "buffered", {
              get: function () {
                return this._mediaElement.buffered;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "duration", {
              get: function () {
                return this._mediaElement.duration;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "volume", {
              get: function () {
                return this._mediaElement.volume;
              },
              set: function (e) {
                this._mediaElement.volume = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "muted", {
              get: function () {
                return this._mediaElement.muted;
              },
              set: function (e) {
                this._mediaElement.muted = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "currentTime", {
              get: function () {
                return this._mediaElement ? this._mediaElement.currentTime : 0;
              },
              set: function (e) {
                this._mediaElement
                  ? this._internalSeek(e)
                  : (this._pendingSeekTime = e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mediaInfo", {
              get: function () {
                return Object.assign({}, this._mediaInfo);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "statisticsInfo", {
              get: function () {
                return (
                  null == this._statisticsInfo && (this._statisticsInfo = {}),
                  (this._statisticsInfo = this._fillStatisticsInfo(
                    this._statisticsInfo,
                  )),
                  Object.assign({}, this._statisticsInfo)
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._fillStatisticsInfo = function (e) {
              if (
                ((e.playerType = this._type),
                !(this._mediaElement instanceof HTMLVideoElement))
              )
                return e;
              var t = !0,
                i = 0,
                n = 0;
              if (this._mediaElement.getVideoPlaybackQuality) {
                var r = this._mediaElement.getVideoPlaybackQuality();
                (i = r.totalVideoFrames), (n = r.droppedVideoFrames);
              } else
                null != this._mediaElement.webkitDecodedFrameCount
                  ? ((i = this._mediaElement.webkitDecodedFrameCount),
                    (n = this._mediaElement.webkitDroppedFrameCount))
                  : (t = !1);
              return t && ((e.decodedFrames = i), (e.droppedFrames = n)), e;
            }),
            (e.prototype._onmseUpdateEnd = function () {
              var e = this._mediaElement.buffered,
                t = this._mediaElement.currentTime;
              if (
                this._config.isLive &&
                this._config.liveBufferLatencyChasing &&
                e.length > 0 &&
                !this._mediaElement.paused
              ) {
                var i = e.end(e.length - 1);
                if (
                  i > this._config.liveBufferLatencyMaxLatency &&
                  i - t > this._config.liveBufferLatencyMaxLatency
                ) {
                  var n = i - this._config.liveBufferLatencyMinRemain;
                  this.currentTime = n;
                }
              }
              if (this._config.lazyLoad && !this._config.isLive) {
                for (var r = 0, a = 0; a < e.length; a++) {
                  var s = e.start(a),
                    o = e.end(a);
                  if (s <= t && t < o) {
                    s, (r = o);
                    break;
                  }
                }
                r >= t + this._config.lazyLoadMaxDuration &&
                  null == this._progressChecker &&
                  (u.a.v(
                    this.TAG,
                    "Maximum buffering duration exceeded, suspend transmuxing task",
                  ),
                  this._suspendTransmuxer());
              }
            }),
            (e.prototype._onmseBufferFull = function () {
              u.a.v(
                this.TAG,
                "MSE SourceBuffer is full, suspend transmuxing task",
              ),
                null == this._progressChecker && this._suspendTransmuxer();
            }),
            (e.prototype._suspendTransmuxer = function () {
              this._transmuxer &&
                (this._transmuxer.pause(),
                null == this._progressChecker &&
                  (this._progressChecker = window.setInterval(
                    this._checkProgressAndResume.bind(this),
                    1e3,
                  )));
            }),
            (e.prototype._checkProgressAndResume = function () {
              for (
                var e = this._mediaElement.currentTime,
                  t = this._mediaElement.buffered,
                  i = !1,
                  n = 0;
                n < t.length;
                n++
              ) {
                var r = t.start(n),
                  a = t.end(n);
                if (e >= r && e < a) {
                  e >= a - this._config.lazyLoadRecoverDuration && (i = !0);
                  break;
                }
              }
              i &&
                (window.clearInterval(this._progressChecker),
                (this._progressChecker = null),
                i &&
                  (u.a.v(this.TAG, "Continue loading from paused position"),
                  this._transmuxer.resume()));
            }),
            (e.prototype._isTimepointBuffered = function (e) {
              for (
                var t = this._mediaElement.buffered, i = 0;
                i < t.length;
                i++
              ) {
                var n = t.start(i),
                  r = t.end(i);
                if (e >= n && e < r) return !0;
              }
              return !1;
            }),
            (e.prototype._internalSeek = function (e) {
              var t = this._isTimepointBuffered(e),
                i = !1,
                n = 0;
              if (e < 1 && this._mediaElement.buffered.length > 0) {
                var r = this._mediaElement.buffered.start(0);
                ((r < 1 && e < r) || l.a.safari) &&
                  ((i = !0), (n = l.a.safari ? 0.1 : r));
              }
              if (i)
                (this._requestSetTime = !0),
                  (this._mediaElement.currentTime = n);
              else if (t) {
                if (this._alwaysSeekKeyframe) {
                  var a = this._msectl.getNearestKeyframe(Math.floor(1e3 * e));
                  (this._requestSetTime = !0),
                    (this._mediaElement.currentTime =
                      null != a ? a.dts / 1e3 : e);
                } else
                  (this._requestSetTime = !0),
                    (this._mediaElement.currentTime = e);
                null != this._progressChecker && this._checkProgressAndResume();
              } else
                null != this._progressChecker &&
                  (window.clearInterval(this._progressChecker),
                  (this._progressChecker = null)),
                  this._msectl.seek(e),
                  this._transmuxer.seek(Math.floor(1e3 * e)),
                  this._config.accurateSeek &&
                    ((this._requestSetTime = !0),
                    (this._mediaElement.currentTime = e));
            }),
            (e.prototype._checkAndApplyUnbufferedSeekpoint = function () {
              if (this._seekpointRecord)
                if (this._seekpointRecord.recordTime <= this._now() - 100) {
                  var e = this._mediaElement.currentTime;
                  (this._seekpointRecord = null),
                    this._isTimepointBuffered(e) ||
                      (null != this._progressChecker &&
                        (window.clearTimeout(this._progressChecker),
                        (this._progressChecker = null)),
                      this._msectl.seek(e),
                      this._transmuxer.seek(Math.floor(1e3 * e)),
                      this._config.accurateSeek &&
                        ((this._requestSetTime = !0),
                        (this._mediaElement.currentTime = e)));
                } else
                  window.setTimeout(
                    this._checkAndApplyUnbufferedSeekpoint.bind(this),
                    50,
                  );
            }),
            (e.prototype._checkAndResumeStuckPlayback = function (e) {
              var t = this._mediaElement;
              if (e || !this._receivedCanPlay || t.readyState < 2) {
                var i = t.buffered;
                i.length > 0 &&
                  t.currentTime < i.start(0) &&
                  (u.a.w(
                    this.TAG,
                    "Playback seems stuck at " +
                      t.currentTime +
                      ", seek to " +
                      i.start(0),
                  ),
                  (this._requestSetTime = !0),
                  (this._mediaElement.currentTime = i.start(0)),
                  this._mediaElement.removeEventListener(
                    "progress",
                    this.e.onvProgress,
                  ));
              } else
                this._mediaElement.removeEventListener(
                  "progress",
                  this.e.onvProgress,
                );
            }),
            (e.prototype._onvLoadedMetadata = function (e) {
              null != this._pendingSeekTime &&
                ((this._mediaElement.currentTime = this._pendingSeekTime),
                (this._pendingSeekTime = null));
            }),
            (e.prototype._onvSeeking = function (e) {
              var t = this._mediaElement.currentTime,
                i = this._mediaElement.buffered;
              if (this._requestSetTime) this._requestSetTime = !1;
              else {
                if (t < 1 && i.length > 0) {
                  var n = i.start(0);
                  if ((n < 1 && t < n) || l.a.safari)
                    return (
                      (this._requestSetTime = !0),
                      void (this._mediaElement.currentTime = l.a.safari
                        ? 0.1
                        : n)
                    );
                }
                if (this._isTimepointBuffered(t)) {
                  if (this._alwaysSeekKeyframe) {
                    var r = this._msectl.getNearestKeyframe(
                      Math.floor(1e3 * t),
                    );
                    null != r &&
                      ((this._requestSetTime = !0),
                      (this._mediaElement.currentTime = r.dts / 1e3));
                  }
                  null != this._progressChecker &&
                    this._checkProgressAndResume();
                } else
                  (this._seekpointRecord = {
                    seekPoint: t,
                    recordTime: this._now(),
                  }),
                    window.setTimeout(
                      this._checkAndApplyUnbufferedSeekpoint.bind(this),
                      50,
                    );
              }
            }),
            (e.prototype._onvCanPlay = function (e) {
              (this._receivedCanPlay = !0),
                this._mediaElement.removeEventListener(
                  "canplay",
                  this.e.onvCanPlay,
                );
            }),
            (e.prototype._onvStalled = function (e) {
              this._checkAndResumeStuckPlayback(!0);
            }),
            (e.prototype._onvProgress = function (e) {
              this._checkAndResumeStuckPlayback();
            }),
            e
          );
        })(),
        k = (function () {
          function e(e, t) {
            (this.TAG = "NativePlayer"),
              (this._type = "NativePlayer"),
              (this._emitter = new _.a()),
              (this._config = s()),
              "object" == typeof t && Object.assign(this._config, t);
            var i = e.type.toLowerCase();
            if ("mse" === i || "mpegts" === i || "m2ts" === i || "flv" === i)
              throw new A.b(
                "NativePlayer does't support mse/mpegts/m2ts/flv MediaDataSource input!",
              );
            if (e.hasOwnProperty("segments"))
              throw new A.b(
                "NativePlayer(" +
                  e.type +
                  ") doesn't support multipart playback!",
              );
            (this.e = {
              onvLoadedMetadata: this._onvLoadedMetadata.bind(this),
            }),
              (this._pendingSeekTime = null),
              (this._statisticsReporter = null),
              (this._mediaDataSource = e),
              (this._mediaElement = null);
          }
          return (
            (e.prototype.destroy = function () {
              this._mediaElement && (this.unload(), this.detachMediaElement()),
                (this.e = null),
                (this._mediaDataSource = null),
                this._emitter.removeAllListeners(),
                (this._emitter = null);
            }),
            (e.prototype.on = function (e, t) {
              var i = this;
              e === c.MEDIA_INFO
                ? null != this._mediaElement &&
                  0 !== this._mediaElement.readyState &&
                  Promise.resolve().then(function () {
                    i._emitter.emit(c.MEDIA_INFO, i.mediaInfo);
                  })
                : e === c.STATISTICS_INFO &&
                  null != this._mediaElement &&
                  0 !== this._mediaElement.readyState &&
                  Promise.resolve().then(function () {
                    i._emitter.emit(c.STATISTICS_INFO, i.statisticsInfo);
                  }),
                this._emitter.addListener(e, t);
            }),
            (e.prototype.off = function (e, t) {
              this._emitter.removeListener(e, t);
            }),
            (e.prototype.attachMediaElement = function (e) {
              if (
                ((this._mediaElement = e),
                e.addEventListener("loadedmetadata", this.e.onvLoadedMetadata),
                null != this._pendingSeekTime)
              )
                try {
                  (e.currentTime = this._pendingSeekTime),
                    (this._pendingSeekTime = null);
                } catch (e) {}
            }),
            (e.prototype.detachMediaElement = function () {
              this._mediaElement &&
                ((this._mediaElement.src = ""),
                this._mediaElement.removeAttribute("src"),
                this._mediaElement.removeEventListener(
                  "loadedmetadata",
                  this.e.onvLoadedMetadata,
                ),
                (this._mediaElement = null)),
                null != this._statisticsReporter &&
                  (window.clearInterval(this._statisticsReporter),
                  (this._statisticsReporter = null));
            }),
            (e.prototype.load = function () {
              if (!this._mediaElement)
                throw new A.a(
                  "HTMLMediaElement must be attached before load()!",
                );
              (this._mediaElement.src = this._mediaDataSource.url),
                this._mediaElement.readyState > 0 &&
                  (this._mediaElement.currentTime = 0),
                (this._mediaElement.preload = "auto"),
                this._mediaElement.load(),
                (this._statisticsReporter = window.setInterval(
                  this._reportStatisticsInfo.bind(this),
                  this._config.statisticsInfoReportInterval,
                ));
            }),
            (e.prototype.unload = function () {
              this._mediaElement &&
                ((this._mediaElement.src = ""),
                this._mediaElement.removeAttribute("src")),
                null != this._statisticsReporter &&
                  (window.clearInterval(this._statisticsReporter),
                  (this._statisticsReporter = null));
            }),
            (e.prototype.play = function () {
              return this._mediaElement.play();
            }),
            (e.prototype.pause = function () {
              this._mediaElement.pause();
            }),
            Object.defineProperty(e.prototype, "type", {
              get: function () {
                return this._type;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "buffered", {
              get: function () {
                return this._mediaElement.buffered;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "duration", {
              get: function () {
                return this._mediaElement.duration;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "volume", {
              get: function () {
                return this._mediaElement.volume;
              },
              set: function (e) {
                this._mediaElement.volume = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "muted", {
              get: function () {
                return this._mediaElement.muted;
              },
              set: function (e) {
                this._mediaElement.muted = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "currentTime", {
              get: function () {
                return this._mediaElement ? this._mediaElement.currentTime : 0;
              },
              set: function (e) {
                this._mediaElement
                  ? (this._mediaElement.currentTime = e)
                  : (this._pendingSeekTime = e);
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "mediaInfo", {
              get: function () {
                var e = {
                  mimeType:
                    (this._mediaElement instanceof HTMLAudioElement
                      ? "audio/"
                      : "video/") + this._mediaDataSource.type,
                };
                return (
                  this._mediaElement &&
                    ((e.duration = Math.floor(
                      1e3 * this._mediaElement.duration,
                    )),
                    this._mediaElement instanceof HTMLVideoElement &&
                      ((e.width = this._mediaElement.videoWidth),
                      (e.height = this._mediaElement.videoHeight))),
                  e
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "statisticsInfo", {
              get: function () {
                var e = {
                  playerType: this._type,
                  url: this._mediaDataSource.url,
                };
                if (!(this._mediaElement instanceof HTMLVideoElement)) return e;
                var t = !0,
                  i = 0,
                  n = 0;
                if (this._mediaElement.getVideoPlaybackQuality) {
                  var r = this._mediaElement.getVideoPlaybackQuality();
                  (i = r.totalVideoFrames), (n = r.droppedVideoFrames);
                } else
                  null != this._mediaElement.webkitDecodedFrameCount
                    ? ((i = this._mediaElement.webkitDecodedFrameCount),
                      (n = this._mediaElement.webkitDroppedFrameCount))
                    : (t = !1);
                return t && ((e.decodedFrames = i), (e.droppedFrames = n)), e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype._onvLoadedMetadata = function (e) {
              null != this._pendingSeekTime &&
                ((this._mediaElement.currentTime = this._pendingSeekTime),
                (this._pendingSeekTime = null)),
                this._emitter.emit(c.MEDIA_INFO, this.mediaInfo);
            }),
            (e.prototype._reportStatisticsInfo = function () {
              this._emitter.emit(c.STATISTICS_INFO, this.statisticsInfo);
            }),
            e
          );
        })();
      n.a.install();
      var C = {
        createPlayer: function (e, t) {
          var i = e;
          if (null == i || "object" != typeof i)
            throw new A.b("MediaDataSource must be an javascript object!");
          if (!i.hasOwnProperty("type"))
            throw new A.b(
              "MediaDataSource must has type field to indicate video file type!",
            );
          switch (i.type) {
            case "mse":
            case "mpegts":
            case "m2ts":
            case "flv":
              return new D(i, t);
            default:
              return new k(i, t);
          }
        },
        isSupported: function () {
          return o.supportMSEH264Playback();
        },
        getFeatureList: function () {
          return o.getFeatureList();
        },
      };
      (C.BaseLoader = d.a),
        (C.LoaderStatus = d.c),
        (C.LoaderErrors = d.b),
        (C.Events = c),
        (C.ErrorTypes = L),
        (C.ErrorDetails = w),
        (C.MSEPlayer = D),
        (C.NativePlayer = k),
        (C.LoggingControl = m.a),
        Object.defineProperty(C, "version", {
          enumerable: !0,
          get: function () {
            return "1.7.2";
          },
        });
      t.default = C;
    },
  ]);
});
//# sourceMappingURL=mpegts.js.map
