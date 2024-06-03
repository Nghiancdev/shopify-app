var t,
  e = {},
  r = "object" == typeof Reflect ? Reflect : null,
  n =
    r && "function" == typeof r.apply
      ? r.apply
      : function (t, e, r) {
          return Function.prototype.apply.call(t, e, r);
        };
t =
  r && "function" == typeof r.ownKeys
    ? r.ownKeys
    : Object.getOwnPropertySymbols
      ? function (t) {
          return Object.getOwnPropertyNames(t).concat(
            Object.getOwnPropertySymbols(t),
          );
        }
      : function (t) {
          return Object.getOwnPropertyNames(t);
        };
var i =
  Number.isNaN ||
  function (t) {
    return t != t;
  };
function o() {
  o.init.call(this);
}
((e = o).once = function (t, e) {
  return new Promise(function (r, n) {
    function i(r) {
      t.removeListener(e, o), n(r);
    }
    function o() {
      "function" == typeof t.removeListener && t.removeListener("error", i),
        r([].slice.call(arguments));
    }
    w(t, e, o, { once: !0 }),
      "error" !== e &&
        (function (t, e, r) {
          "function" == typeof t.on && w(t, "error", e, r);
        })(t, i, { once: !0 });
  });
}),
  (o.EventEmitter = o),
  (o.prototype._events = void 0),
  (o.prototype._eventsCount = 0),
  (o.prototype._maxListeners = void 0);
var s,
  a,
  u,
  f = 10;
function c(t) {
  if ("function" != typeof t)
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof t,
    );
}
function h(t) {
  return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners;
}
function p(t, e, r, n) {
  var i, o, s, a;
  if (
    (c(r),
    void 0 === (o = t._events)
      ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
      : (void 0 !== o.newListener &&
          (t.emit("newListener", e, r.listener ? r.listener : r),
          (o = t._events)),
        (s = o[e])),
    void 0 === s)
  )
    (s = o[e] = r), ++t._eventsCount;
  else if (
    ("function" == typeof s
      ? (s = o[e] = n ? [r, s] : [s, r])
      : n
        ? s.unshift(r)
        : s.push(r),
    (i = h(t)) > 0 && s.length > i && !s.warned)
  ) {
    s.warned = !0;
    var u = new Error(
      "Possible EventEmitter memory leak detected. " +
        s.length +
        " " +
        String(e) +
        " listeners added. Use emitter.setMaxListeners() to increase limit",
    );
    (u.name = "MaxListenersExceededWarning"),
      (u.emitter = t),
      (u.type = e),
      (u.count = s.length),
      (a = u),
      console && console.warn && console.warn(a);
  }
  return t;
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
function d(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
    i = l.bind(n);
  return (i.listener = r), (n.wrapFn = i), i;
}
function g(t, e, r) {
  var n = t._events;
  if (void 0 === n) return [];
  var i = n[e];
  return void 0 === i
    ? []
    : "function" == typeof i
      ? r
        ? [i.listener || i]
        : [i]
      : r
        ? (function (t) {
            for (var e = new Array(t.length), r = 0; r < e.length; ++r)
              e[r] = t[r].listener || t[r];
            return e;
          })(i)
        : y(i, i.length);
}
function m(t) {
  var e = this._events;
  if (void 0 !== e) {
    var r = e[t];
    if ("function" == typeof r) return 1;
    if (void 0 !== r) return r.length;
  }
  return 0;
}
function y(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
  return r;
}
function w(t, e, r, n) {
  if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
  else {
    if ("function" != typeof t.addEventListener)
      throw new TypeError(
        'The "emitter" argument must be of type EventEmitter. Received type ' +
          typeof t,
      );
    t.addEventListener(e, function i(o) {
      n.once && t.removeEventListener(e, i), r(o);
    });
  }
}
Object.defineProperty(o, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return f;
  },
  set: function (t) {
    if ("number" != typeof t || t < 0 || i(t))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          t +
          ".",
      );
    f = t;
  },
}),
  (o.init = function () {
    (void 0 !== this._events &&
      this._events !== Object.getPrototypeOf(this)._events) ||
      ((this._events = Object.create(null)), (this._eventsCount = 0)),
      (this._maxListeners = this._maxListeners || void 0);
  }),
  (o.prototype.setMaxListeners = function (t) {
    if ("number" != typeof t || t < 0 || i(t))
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' +
          t +
          ".",
      );
    return (this._maxListeners = t), this;
  }),
  (o.prototype.getMaxListeners = function () {
    return h(this);
  }),
  (o.prototype.emit = function (t) {
    for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
    var i = "error" === t,
      o = this._events;
    if (void 0 !== o) i = i && void 0 === o.error;
    else if (!i) return !1;
    if (i) {
      var s;
      if ((e.length > 0 && (s = e[0]), s instanceof Error)) throw s;
      var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
      throw ((a.context = s), a);
    }
    var u = o[t];
    if (void 0 === u) return !1;
    if ("function" == typeof u) n(u, this, e);
    else {
      var f = u.length,
        c = y(u, f);
      for (r = 0; r < f; ++r) n(c[r], this, e);
    }
    return !0;
  }),
  (o.prototype.addListener = function (t, e) {
    return p(this, t, e, !1);
  }),
  (o.prototype.on = o.prototype.addListener),
  (o.prototype.prependListener = function (t, e) {
    return p(this, t, e, !0);
  }),
  (o.prototype.once = function (t, e) {
    return c(e), this.on(t, d(this, t, e)), this;
  }),
  (o.prototype.prependOnceListener = function (t, e) {
    return c(e), this.prependListener(t, d(this, t, e)), this;
  }),
  (o.prototype.removeListener = function (t, e) {
    var r, n, i, o, s;
    if ((c(e), void 0 === (n = this._events))) return this;
    if (void 0 === (r = n[t])) return this;
    if (r === e || r.listener === e)
      0 == --this._eventsCount
        ? (this._events = Object.create(null))
        : (delete n[t],
          n.removeListener && this.emit("removeListener", t, r.listener || e));
    else if ("function" != typeof r) {
      for (i = -1, o = r.length - 1; o >= 0; o--)
        if (r[o] === e || r[o].listener === e) {
          (s = r[o].listener), (i = o);
          break;
        }
      if (i < 0) return this;
      0 === i
        ? r.shift()
        : (function (t, e) {
            for (; e + 1 < t.length; e++) t[e] = t[e + 1];
            t.pop();
          })(r, i),
        1 === r.length && (n[t] = r[0]),
        void 0 !== n.removeListener && this.emit("removeListener", t, s || e);
    }
    return this;
  }),
  (o.prototype.off = o.prototype.removeListener),
  (o.prototype.removeAllListeners = function (t) {
    var e, r, n;
    if (void 0 === (r = this._events)) return this;
    if (void 0 === r.removeListener)
      return (
        0 === arguments.length
          ? ((this._events = Object.create(null)), (this._eventsCount = 0))
          : void 0 !== r[t] &&
            (0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : delete r[t]),
        this
      );
    if (0 === arguments.length) {
      var i,
        o = Object.keys(r);
      for (n = 0; n < o.length; ++n)
        "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
      return (
        this.removeAllListeners("removeListener"),
        (this._events = Object.create(null)),
        (this._eventsCount = 0),
        this
      );
    }
    if ("function" == typeof (e = r[t])) this.removeListener(t, e);
    else if (void 0 !== e)
      for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
    return this;
  }),
  (o.prototype.listeners = function (t) {
    return g(this, t, !0);
  }),
  (o.prototype.rawListeners = function (t) {
    return g(this, t, !1);
  }),
  (o.listenerCount = function (t, e) {
    return "function" == typeof t.listenerCount
      ? t.listenerCount(e)
      : m.call(t, e);
  }),
  (o.prototype.listenerCount = m),
  (o.prototype.eventNames = function () {
    return this._eventsCount > 0 ? t(this._events) : [];
  });
class v {
  sendOffer(t, e, r) {
    return fetch(t, {
      method: "POST",
      headers: { "Content-Type": "application/sdp", Authorization: e },
      body: r,
    });
  }
  getConfiguration(t, e) {
    return fetch(t, { method: "OPTIONS", headers: { Authorization: e } });
  }
  delete(t) {
    return fetch(t, { method: "DELETE" });
  }
  updateIce(t, e, r) {
    return fetch(t, {
      method: "PATCH",
      headers: { "Content-Type": "application/trickle-ice-sdpfrag", ETag: e },
      body: r,
    });
  }
}
var b = function (t) {
    return String(Number(t)) === t ? Number(t) : t;
  },
  E = function (t, e, r) {
    var n = t.name && t.names;
    t.push && !e[t.push]
      ? (e[t.push] = [])
      : n && !e[t.name] && (e[t.name] = {});
    var i = t.push ? {} : n ? e[t.name] : e;
    !(function (t, e, r, n) {
      if (n && !r) e[n] = b(t[1]);
      else
        for (var i = 0; i < r.length; i += 1)
          null != t[i + 1] && (e[r[i]] = b(t[i + 1]));
    })(r.match(t.reg), i, t.names, t.name),
      t.push && e[t.push].push(i);
  },
  I = {},
  S = (I = {
    v: [{ name: "version", reg: /^(\d*)$/ }],
    o: [
      {
        name: "origin",
        reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
        names: [
          "username",
          "sessionId",
          "sessionVersion",
          "netType",
          "ipVer",
          "address",
        ],
        format: "%s %s %d %s IP%d %s",
      },
    ],
    s: [{ name: "name" }],
    i: [{ name: "description" }],
    u: [{ name: "uri" }],
    e: [{ name: "email" }],
    p: [{ name: "phone" }],
    z: [{ name: "timezones" }],
    r: [{ name: "repeats" }],
    t: [
      {
        name: "timing",
        reg: /^(\d*) (\d*)/,
        names: ["start", "stop"],
        format: "%d %d",
      },
    ],
    c: [
      {
        name: "connection",
        reg: /^IN IP(\d) (\S*)/,
        names: ["version", "ip"],
        format: "IN IP%d %s",
      },
    ],
    b: [
      {
        push: "bandwidth",
        reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
        names: ["type", "limit"],
        format: "%s:%s",
      },
    ],
    m: [
      {
        reg: /^(\w*) (\d*) ([\w/]*)(?: (.*))?/,
        names: ["type", "port", "protocol", "payloads"],
        format: "%s %d %s %s",
      },
    ],
    a: [
      {
        push: "rtp",
        reg: /^rtpmap:(\d*) ([\w\-.]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
        names: ["payload", "codec", "rate", "encoding"],
        format: function (t) {
          return t.encoding
            ? "rtpmap:%d %s/%s/%s"
            : t.rate
              ? "rtpmap:%d %s/%s"
              : "rtpmap:%d %s";
        },
      },
      {
        push: "fmtp",
        reg: /^fmtp:(\d*) ([\S| ]*)/,
        names: ["payload", "config"],
        format: "fmtp:%d %s",
      },
      { name: "control", reg: /^control:(.*)/, format: "control:%s" },
      {
        name: "rtcp",
        reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
        names: ["port", "netType", "ipVer", "address"],
        format: function (t) {
          return null != t.address ? "rtcp:%d %s IP%d %s" : "rtcp:%d";
        },
      },
      {
        push: "rtcpFbTrrInt",
        reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
        names: ["payload", "value"],
        format: "rtcp-fb:%s trr-int %d",
      },
      {
        push: "rtcpFb",
        reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
        names: ["payload", "type", "subtype"],
        format: function (t) {
          return null != t.subtype ? "rtcp-fb:%s %s %s" : "rtcp-fb:%s %s";
        },
      },
      {
        push: "ext",
        reg: /^extmap:(\d+)(?:\/(\w+))?(?: (urn:ietf:params:rtp-hdrext:encrypt))? (\S*)(?: (\S*))?/,
        names: ["value", "direction", "encrypt-uri", "uri", "config"],
        format: function (t) {
          return (
            "extmap:%d" +
            (t.direction ? "/%s" : "%v") +
            (t["encrypt-uri"] ? " %s" : "%v") +
            " %s" +
            (t.config ? " %s" : "")
          );
        },
      },
      { name: "extmapAllowMixed", reg: /^(extmap-allow-mixed)/ },
      {
        push: "crypto",
        reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
        names: ["id", "suite", "config", "sessionConfig"],
        format: function (t) {
          return null != t.sessionConfig
            ? "crypto:%d %s %s %s"
            : "crypto:%d %s %s";
        },
      },
      { name: "setup", reg: /^setup:(\w*)/, format: "setup:%s" },
      {
        name: "connectionType",
        reg: /^connection:(new|existing)/,
        format: "connection:%s",
      },
      { name: "mid", reg: /^mid:([^\s]*)/, format: "mid:%s" },
      { name: "msid", reg: /^msid:(.*)/, format: "msid:%s" },
      { name: "ptime", reg: /^ptime:(\d*(?:\.\d*)*)/, format: "ptime:%d" },
      {
        name: "maxptime",
        reg: /^maxptime:(\d*(?:\.\d*)*)/,
        format: "maxptime:%d",
      },
      { name: "direction", reg: /^(sendrecv|recvonly|sendonly|inactive)/ },
      { name: "icelite", reg: /^(ice-lite)/ },
      { name: "iceUfrag", reg: /^ice-ufrag:(\S*)/, format: "ice-ufrag:%s" },
      { name: "icePwd", reg: /^ice-pwd:(\S*)/, format: "ice-pwd:%s" },
      {
        name: "fingerprint",
        reg: /^fingerprint:(\S*) (\S*)/,
        names: ["type", "hash"],
        format: "fingerprint:%s %s",
      },
      {
        push: "candidates",
        reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?(?: network-id (\d*))?(?: network-cost (\d*))?/,
        names: [
          "foundation",
          "component",
          "transport",
          "priority",
          "ip",
          "port",
          "type",
          "raddr",
          "rport",
          "tcptype",
          "generation",
          "network-id",
          "network-cost",
        ],
        format: function (t) {
          var e = "candidate:%s %d %s %d %s %d typ %s";
          return (
            (e += null != t.raddr ? " raddr %s rport %d" : "%v%v"),
            (e += null != t.tcptype ? " tcptype %s" : "%v"),
            null != t.generation && (e += " generation %d"),
            (e += null != t["network-id"] ? " network-id %d" : "%v"),
            (e += null != t["network-cost"] ? " network-cost %d" : "%v")
          );
        },
      },
      { name: "endOfCandidates", reg: /^(end-of-candidates)/ },
      {
        name: "remoteCandidates",
        reg: /^remote-candidates:(.*)/,
        format: "remote-candidates:%s",
      },
      {
        name: "iceOptions",
        reg: /^ice-options:(\S*)/,
        format: "ice-options:%s",
      },
      {
        push: "ssrcs",
        reg: /^ssrc:(\d*) ([\w_-]*)(?::(.*))?/,
        names: ["id", "attribute", "value"],
        format: function (t) {
          var e = "ssrc:%d";
          return (
            null != t.attribute &&
              ((e += " %s"), null != t.value && (e += ":%s")),
            e
          );
        },
      },
      {
        push: "ssrcGroups",
        reg: /^ssrc-group:([\x21\x23\x24\x25\x26\x27\x2A\x2B\x2D\x2E\w]*) (.*)/,
        names: ["semantics", "ssrcs"],
        format: "ssrc-group:%s %s",
      },
      {
        name: "msidSemantic",
        reg: /^msid-semantic:\s?(\w*) (\S*)/,
        names: ["semantic", "token"],
        format: "msid-semantic: %s %s",
      },
      {
        push: "groups",
        reg: /^group:(\w*) (.*)/,
        names: ["type", "mids"],
        format: "group:%s %s",
      },
      { name: "rtcpMux", reg: /^(rtcp-mux)/ },
      { name: "rtcpRsize", reg: /^(rtcp-rsize)/ },
      {
        name: "sctpmap",
        reg: /^sctpmap:([\w_/]*) (\S*)(?: (\S*))?/,
        names: ["sctpmapNumber", "app", "maxMessageSize"],
        format: function (t) {
          return null != t.maxMessageSize
            ? "sctpmap:%s %s %s"
            : "sctpmap:%s %s";
        },
      },
      {
        name: "xGoogleFlag",
        reg: /^x-google-flag:([^\s]*)/,
        format: "x-google-flag:%s",
      },
      {
        push: "rids",
        reg: /^rid:([\d\w]+) (\w+)(?: ([\S| ]*))?/,
        names: ["id", "direction", "params"],
        format: function (t) {
          return t.params ? "rid:%s %s %s" : "rid:%s %s";
        },
      },
      {
        push: "imageattrs",
        reg: new RegExp(
          "^imageattr:(\\d+|\\*)[\\s\\t]+(send|recv)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*)(?:[\\s\\t]+(recv|send)[\\s\\t]+(\\*|\\[\\S+\\](?:[\\s\\t]+\\[\\S+\\])*))?",
        ),
        names: ["pt", "dir1", "attrs1", "dir2", "attrs2"],
        format: function (t) {
          return "imageattr:%s %s %s" + (t.dir2 ? " %s %s" : "");
        },
      },
      {
        name: "simulcast",
        reg: new RegExp(
          "^simulcast:(send|recv) ([a-zA-Z0-9\\-_~;,]+)(?:\\s?(send|recv) ([a-zA-Z0-9\\-_~;,]+))?$",
        ),
        names: ["dir1", "list1", "dir2", "list2"],
        format: function (t) {
          return "simulcast:%s %s" + (t.dir2 ? " %s %s" : "");
        },
      },
      {
        name: "simulcast_03",
        reg: /^simulcast:[\s\t]+([\S+\s\t]+)$/,
        names: ["value"],
        format: "simulcast: %s",
      },
      {
        name: "framerate",
        reg: /^framerate:(\d+(?:$|\.\d+))/,
        format: "framerate:%s",
      },
      {
        name: "sourceFilter",
        reg: /^source-filter: *(excl|incl) (\S*) (IP4|IP6|\*) (\S*) (.*)/,
        names: [
          "filterMode",
          "netType",
          "addressTypes",
          "destAddress",
          "srcList",
        ],
        format: "source-filter: %s %s %s %s %s",
      },
      { name: "bundleOnly", reg: /^(bundle-only)/ },
      { name: "label", reg: /^label:(.+)/, format: "label:%s" },
      { name: "sctpPort", reg: /^sctp-port:(\d+)$/, format: "sctp-port:%s" },
      {
        name: "maxMessageSize",
        reg: /^max-message-size:(\d+)$/,
        format: "max-message-size:%s",
      },
      {
        push: "tsRefClocks",
        reg: /^ts-refclk:([^\s=]*)(?:=(\S*))?/,
        names: ["clksrc", "clksrcExt"],
        format: function (t) {
          return "ts-refclk:%s" + (null != t.clksrcExt ? "=%s" : "");
        },
      },
      {
        name: "mediaClk",
        reg: /^mediaclk:(?:id=(\S*))? *([^\s=]*)(?:=(\S*))?(?: *rate=(\d+)\/(\d+))?/,
        names: [
          "id",
          "mediaClockName",
          "mediaClockValue",
          "rateNumerator",
          "rateDenominator",
        ],
        format: function (t) {
          var e = "mediaclk:";
          return (
            (e += null != t.id ? "id=%s %s" : "%v%s"),
            (e += null != t.mediaClockValue ? "=%s" : ""),
            (e += null != t.rateNumerator ? " rate=%s" : ""),
            (e += null != t.rateDenominator ? "/%s" : "")
          );
        },
      },
      { name: "keywords", reg: /^keywds:(.+)$/, format: "keywds:%s" },
      { name: "content", reg: /^content:(.+)/, format: "content:%s" },
      {
        name: "bfcpFloorCtrl",
        reg: /^floorctrl:(c-only|s-only|c-s)/,
        format: "floorctrl:%s",
      },
      { name: "bfcpConfId", reg: /^confid:(\d+)/, format: "confid:%s" },
      { name: "bfcpUserId", reg: /^userid:(\d+)/, format: "userid:%s" },
      {
        name: "bfcpFloorId",
        reg: /^floorid:(.+) (?:m-stream|mstrm):(.+)/,
        names: ["id", "mStream"],
        format: "floorid:%s mstrm:%s",
      },
      { push: "invalid", names: ["value"] },
    ],
  });
Object.keys(S).forEach(function (t) {
  S[t].forEach(function (t) {
    t.reg || (t.reg = /(.*)/), t.format || (t.format = "%s");
  });
});
var C = RegExp.prototype.test.bind(/^([a-z])=(.*)/),
  B = function (t, e) {
    var r = e.split(/=(.+)/, 2);
    return (
      2 === r.length
        ? (t[r[0]] = b(r[1]))
        : 1 === r.length && e.length > 1 && (t[r[0]] = void 0),
      t
    );
  },
  T = /%[sdv%]/g,
  L = function (t) {
    var e = 1,
      r = arguments,
      n = r.length;
    return t.replace(T, function (t) {
      if (e >= n) return t;
      var i = r[e];
      switch (((e += 1), t)) {
        case "%%":
          return "%";
        case "%s":
          return String(i);
        case "%d":
          return Number(i);
        case "%v":
          return "";
      }
    });
  },
  R = function (t, e, r) {
    var n = [
      t +
        "=" +
        (e.format instanceof Function
          ? e.format(e.push ? r : r[e.name])
          : e.format),
    ];
    if (e.names)
      for (var i = 0; i < e.names.length; i += 1) {
        var o = e.names[i];
        e.name ? n.push(r[e.name][o]) : n.push(r[e.names[i]]);
      }
    else n.push(r[e.name]);
    return L.apply(null, n);
  },
  U = ["v", "o", "s", "i", "u", "e", "p", "c", "b", "t", "r", "z", "a"],
  A = ["i", "c", "b", "a"];
(s = function (t, e) {
  (e = e || {}),
    null == t.version && (t.version = 0),
    null == t.name && (t.name = " "),
    t.media.forEach(function (t) {
      null == t.payloads && (t.payloads = "");
    });
  var r = e.outerOrder || U,
    n = e.innerOrder || A,
    i = [];
  return (
    r.forEach(function (e) {
      I[e].forEach(function (r) {
        r.name in t && null != t[r.name]
          ? i.push(R(e, r, t))
          : r.push in t &&
            null != t[r.push] &&
            t[r.push].forEach(function (t) {
              i.push(R(e, r, t));
            });
      });
    }),
    t.media.forEach(function (t) {
      i.push(R("m", I.m[0], t)),
        n.forEach(function (e) {
          I[e].forEach(function (r) {
            r.name in t && null != t[r.name]
              ? i.push(R(e, r, t))
              : r.push in t &&
                null != t[r.push] &&
                t[r.push].forEach(function (t) {
                  i.push(R(e, r, t));
                });
          });
        });
    }),
    i.join("\r\n") + "\r\n"
  );
}),
  (a = function (t) {
    var e = {},
      r = [],
      n = e;
    return (
      t
        .split(/(\r\n|\r|\n)/)
        .filter(C)
        .forEach(function (t) {
          var e = t[0],
            i = t.slice(2);
          "m" === e && (r.push({ rtp: [], fmtp: [] }), (n = r[r.length - 1]));
          for (var o = 0; o < (I[e] || []).length; o += 1) {
            var s = I[e][o];
            if (s.reg.test(i)) return E(s, n, i);
          }
        }),
      (e.media = r),
      e
    );
  }),
  (u = function (t) {
    return t.split(/;\s?/).reduce(B, {});
  });
class x extends e.EventEmitter {
  eTag = void 0;
  iceCredentials = void 0;
  mediaMids = [];
  waitingForCandidates = !1;
  constructor({
    endpoint: t,
    opts: e,
    whipProtocol: r,
    peerConnectionFactory: n,
  }) {
    super(),
      (this.whipEndpoint = new URL(t)),
      (this.opts = e),
      (this.opts.noTrickleIce = !!e.noTrickleIce),
      (this.whipProtocol = r || new v()),
      (this.peerConnectionFactory = n || ((t) => new RTCPeerConnection(t))),
      this.initPeer();
  }
  initPeer() {
    (this.peer = this.peerConnectionFactory({
      iceServers: this.opts.iceServers || [
        { urls: ["stun:stun.l.google.com:19302"] },
      ],
    })),
      this.peer.addEventListener(
        "iceconnectionstatechange",
        this.onIceConnectionStateChange.bind(this),
      ),
      this.peer.addEventListener(
        "icecandidateerror",
        this.onIceCandidateError.bind(this),
      ),
      this.peer.addEventListener(
        "connectionstatechange",
        this.onConnectionStateChange.bind(this),
      ),
      this.peer.addEventListener(
        "icecandidate",
        this.onIceCandidate.bind(this),
      ),
      this.peer.addEventListener(
        "onicegatheringstatechange",
        this.onIceGatheringStateChange.bind(this),
      );
  }
  log(...t) {
    this.opts.debug && console.log("WHIPClient", ...t);
  }
  error(...t) {
    console.error("WHIPClient", ...t);
  }
  makeSDPTransformCandidate(t) {
    return {
      foundation: t.foundation,
      component: "rtp" === t.component ? 0 : 1,
      transport: t.protocol.toString(),
      priority: t.priority,
      ip: t.address,
      port: t.port,
      type: t.type.toString(),
      raddr: t?.relatedAddress,
      rport: t?.relatedPort,
      tcptype: t?.tcpType?.toString(),
    };
  }
  makeTrickleIceSdpFragment(t) {
    if (!this.iceCredentials || 0 === this.mediaMids.length)
      return void this.error(
        "Missing local SDP meta data, cannot send trickle ICE candidate",
      );
    let e = {
      media: [],
      iceUfrag: this.iceCredentials.ufrag,
      icePwd: this.iceCredentials.pwd,
    };
    for (let r of this.mediaMids) {
      const n = {
        type: "audio",
        port: 9,
        protocol: "RTP/AVP",
        payloads: "0",
        rtp: [],
        fmtp: [],
        mid: r,
        candidates: [this.makeSDPTransformCandidate(t)],
      };
      e.media.push(n);
    }
    return s(e).replace("v=0\r\ns= \r\n", "");
  }
  async onIceCandidate(t) {
    if ("icecandidate" !== t.type) return;
    const e = t.candidate;
    if (e)
      if (this.supportTrickleIce()) {
        const t = this.makeTrickleIceSdpFragment(e),
          r = await this.getResourceUrl();
        (await this.whipProtocol.updateIce(r, this.eTag, t)).ok ||
          (this.log("Trickle ICE not supported by endpoint"),
          (this.opts.noTrickleIce = !0));
      } else this.log(e.candidate);
  }
  async onConnectionStateChange(t) {
    this.log("PeerConnectionState", this.peer.connectionState),
      "failed" === this.peer.connectionState && (await this.destroy());
  }
  onIceConnectionStateChange(t) {
    this.log("IceConnectionState", this.peer.iceConnectionState);
  }
  onIceCandidateError(t) {
    this.log("IceCandidateError", t);
  }
  onIceGatheringStateChange(t) {
    "complete" === this.peer.iceGatheringState &&
      !this.supportTrickleIce() &&
      this.waitingForCandidates &&
      this.onDoneWaitingForCandidates();
  }
  getICEConnectionState() {
    return this.peer.iceConnectionState;
  }
  async startSdpExchange() {
    const t = await this.peer.createOffer({
        offerToReceiveAudio: !1,
        offerToReceiveVideo: !1,
      }),
      e = t.sdp && a(t.sdp);
    if (!e) return Promise.reject();
    e.iceUfrag && e.icePwd
      ? (this.iceCredentials = { pwd: e.icePwd, ufrag: e.iceUfrag })
      : 0 !== e.media.length &&
        e.media[0].iceUfrag &&
        e.media[0].icePwd &&
        (this.iceCredentials = {
          pwd: e.media[0].icePwd,
          ufrag: e.media[0].iceUfrag,
        });
    for (let t of e.media) t.mid && this.mediaMids.push(t.mid);
    await this.peer.setLocalDescription(t),
      this.supportTrickleIce()
        ? await this.sendOffer()
        : ((this.waitingForCandidates = !0),
          (this.iceGatheringTimeout = setTimeout(
            this.onIceGatheringTimeout.bind(this),
            this.opts?.timeout || 2e3,
          )));
  }
  onIceGatheringTimeout() {
    this.log("onIceGatheringTimeout"),
      !this.supportTrickleIce() &&
        this.waitingForCandidates &&
        this.onDoneWaitingForCandidates();
  }
  async onDoneWaitingForCandidates() {
    (this.waitingForCandidates = !1),
      clearTimeout(this.iceGatheringTimeout),
      await this.sendOffer();
  }
  async sendOffer() {
    this.log("Sending offer"), this.log(this.peer.localDescription.sdp);
    const t = await this.whipProtocol.sendOffer(
      this.whipEndpoint.toString(),
      this.opts.authkey,
      this.peer.localDescription.sdp,
    );
    if (t.ok) {
      (this.resource = t.headers.get("Location")),
        this.resource.match(/^http/) ||
          (this.resource = new URL(
            this.resource,
            this.whipEndpoint,
          ).toString()),
        this.log("WHIP Resource", this.resource),
        (this.eTag = t.headers.get("ETag")),
        this.log("eTag", this.eTag);
      const e = t.headers.get("Link");
      (this.extensions = e ? e.split(",").map((t) => t.trimStart()) : []),
        this.log("WHIP Resource Extensions", this.extensions),
        this.resourceResolve &&
          (this.resourceResolve(this.resource), (this.resourceResolve = null));
      const r = await t.text();
      await this.peer.setRemoteDescription({ type: "answer", sdp: r });
    } else
      this.error(
        "IceCandidate",
        "Failed to setup stream connection with endpoint",
        t.status,
        await t.text(),
      );
  }
  async doFetchICEFromEndpoint() {
    let t = [];
    const e = await this.whipProtocol.getConfiguration(
      this.whipEndpoint.toString(),
      this.opts.authkey,
    );
    return (
      e.ok &&
        e.headers.forEach((e, r) => {
          if ("link" == r) {
            const r = (function (t) {
              let e;
              if (t.match(/rel="ice-server"/))
                if (t.match(/^stun:/)) {
                  const [r, n] = t.match(/^(stun:\S+);/);
                  n && (e = { urls: n });
                } else
                  t.match(/^turn:/) &&
                    t.split(";").forEach((t) => {
                      if (t.match(/^turn:/)) {
                        const [r, n] = t.match(/^(turn:\S+)/);
                        e = { urls: n };
                      } else if (t.match(/^\s*username[=:]/)) {
                        const [r, n] = t.match(/^\s*username[=:]\s*"*([^"]+)/);
                        e.username = n;
                      } else if (t.match(/^\s*credential[=:]/)) {
                        const [r, n] = t.match(
                          /^\s*credential[=:]\s*"*([^"]+)/,
                        );
                        e.credential = n;
                      }
                    });
              return e;
            })(e);
            r && t.push(r);
          }
        }),
      t
    );
  }
  supportTrickleIce() {
    return !this.opts.noTrickleIce;
  }
  async setIceServersFromEndpoint() {
    if (this.opts.authkey) {
      this.log("Fetching ICE config from endpoint");
      const t = await this.doFetchICEFromEndpoint();
      this.peer.setConfiguration({ iceServers: t });
    } else
      this.error(
        "No authkey is provided so cannot fetch ICE config from endpoint.",
      );
  }
  async ingest(t) {
    if (
      (this.peer || this.initPeer(),
      t.getTracks().forEach((e) => this.peer.addTrack(e, t)),
      !this.opts.noTrickleIce)
    ) {
      const t = await this.whipProtocol.getConfiguration(
        this.whipEndpoint.toString(),
        this.opts.authkey,
      );
      let e = !1;
      t.headers.get("access-control-allow-methods") &&
        (e = t.headers
          .get("access-control-allow-methods")
          .split(",")
          .map((t) => t.trim())
          .includes("PATCH")),
        e
          ? ((this.opts.noTrickleIce = !1),
            this.log(
              "Endpoint says it supports Trickle ICE as PATCH is an allowed method",
            ))
          : ((this.opts.noTrickleIce = !0),
            this.log("Endpoint does not support Trickle ICE"));
    }
    await this.startSdpExchange();
  }
  async destroy() {
    const t = await this.getResourceUrl();
    await this.whipProtocol.delete(t).catch((t) => this.error("destroy()", t));
    const e = this.peer.getSenders();
    e &&
      e.forEach((t) => {
        t.track.stop();
      }),
      this.peer.close(),
      (this.resource = null),
      (this.peer = null);
  }
  getResourceUrl() {
    return this.resource
      ? Promise.resolve(this.resource)
      : new Promise((t) => {
          this.resourceResolve = t;
        });
  }
  async getResourceExtensions() {
    return await this.getResourceUrl(), this.extensions;
  }
}
function k() {
  let t = [{ urls: "stun:stun.l.google.com:19302" }];
  return (
    console.log("Overriding default list of STUN/TURN servers"),
    (t = []),
    "turn:eyevinn:whip@turn.eyevinn.technology:3478".split(",").forEach((e) => {
      const r = e.match(/^turn:(\S+):(\S+)@(\S+):(\d+)/);
      if (r) {
        const [e, n, i, o, s] = r;
        t.push({ urls: "turn:" + o + ":" + s, username: n, credential: i });
      }
    }),
    t
  );
}
var O, P, _;
(P = function (t) {
  var e,
    r,
    n = q(t),
    i = n[0],
    o = n[1],
    s = new j(
      (function (t, e, r) {
        return (3 * (e + r)) / 4 - r;
      })(0, i, o),
    ),
    a = 0,
    u = o > 0 ? i - 4 : i;
  for (r = 0; r < u; r += 4)
    (e =
      ($[t.charCodeAt(r)] << 18) |
      ($[t.charCodeAt(r + 1)] << 12) |
      ($[t.charCodeAt(r + 2)] << 6) |
      $[t.charCodeAt(r + 3)]),
      (s[a++] = (e >> 16) & 255),
      (s[a++] = (e >> 8) & 255),
      (s[a++] = 255 & e);
  2 === o &&
    ((e = ($[t.charCodeAt(r)] << 2) | ($[t.charCodeAt(r + 1)] >> 4)),
    (s[a++] = 255 & e));
  1 === o &&
    ((e =
      ($[t.charCodeAt(r)] << 10) |
      ($[t.charCodeAt(r + 1)] << 4) |
      ($[t.charCodeAt(r + 2)] >> 2)),
    (s[a++] = (e >> 8) & 255),
    (s[a++] = 255 & e));
  return s;
}),
  (_ = function (t) {
    for (
      var e, r = t.length, n = r % 3, i = [], o = 16383, s = 0, a = r - n;
      s < a;
      s += o
    )
      i.push(V(t, s, s + o > a ? a : s + o));
    1 === n
      ? ((e = t[r - 1]), i.push(N[e >> 2] + N[(e << 4) & 63] + "=="))
      : 2 === n &&
        ((e = (t[r - 2] << 8) + t[r - 1]),
        i.push(N[e >> 10] + N[(e >> 4) & 63] + N[(e << 2) & 63] + "="));
    return i.join("");
  });
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
for (
  var F,
    M,
    N = [],
    $ = [],
    j = "undefined" != typeof Uint8Array ? Uint8Array : Array,
    D = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    z = 0,
    G = D.length;
  z < G;
  ++z
)
  (N[z] = D[z]), ($[D.charCodeAt(z)] = z);
function q(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
}
function V(t, e, r) {
  for (var n, i, o = [], s = e; s < r; s += 3)
    (n =
      ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (255 & t[s + 2])),
      o.push(
        N[((i = n) >> 18) & 63] +
          N[(i >> 12) & 63] +
          N[(i >> 6) & 63] +
          N[63 & i],
      );
  return o.join("");
}
($["-".charCodeAt(0)] = 62),
  ($["_".charCodeAt(0)] = 63),
  (F = function (t, e, r, n, i) {
    var o,
      s,
      a = 8 * i - n - 1,
      u = (1 << a) - 1,
      f = u >> 1,
      c = -7,
      h = r ? i - 1 : 0,
      p = r ? -1 : 1,
      l = t[e + h];
    for (
      h += p, o = l & ((1 << -c) - 1), l >>= -c, c += a;
      c > 0;
      o = 256 * o + t[e + h], h += p, c -= 8
    );
    for (
      s = o & ((1 << -c) - 1), o >>= -c, c += n;
      c > 0;
      s = 256 * s + t[e + h], h += p, c -= 8
    );
    if (0 === o) o = 1 - f;
    else {
      if (o === u) return s ? NaN : (1 / 0) * (l ? -1 : 1);
      (s += Math.pow(2, n)), (o -= f);
    }
    return (l ? -1 : 1) * s * Math.pow(2, o - n);
  }),
  (M = function (t, e, r, n, i, o) {
    var s,
      a,
      u,
      f = 8 * o - i - 1,
      c = (1 << f) - 1,
      h = c >> 1,
      p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      l = n ? 0 : o - 1,
      d = n ? 1 : -1,
      g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
    for (
      e = Math.abs(e),
        isNaN(e) || e === 1 / 0
          ? ((a = isNaN(e) ? 1 : 0), (s = c))
          : ((s = Math.floor(Math.log(e) / Math.LN2)),
            e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
            (e += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 &&
              (s++, (u /= 2)),
            s + h >= c
              ? ((a = 0), (s = c))
              : s + h >= 1
                ? ((a = (e * u - 1) * Math.pow(2, i)), (s += h))
                : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      t[r + l] = 255 & a, l += d, a /= 256, i -= 8
    );
    for (
      s = (s << i) | a, f += i;
      f > 0;
      t[r + l] = 255 & s, l += d, s /= 256, f -= 8
    );
    t[r + l - d] |= 128 * g;
  });
const W =
  "function" == typeof Symbol && "function" == typeof Symbol.for
    ? Symbol.for("nodejs.util.inspect.custom")
    : null;
O = Y;
function H(t) {
  if (t > 2147483647)
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
  const e = new Uint8Array(t);
  return Object.setPrototypeOf(e, Y.prototype), e;
}
function Y(t, e, r) {
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw new TypeError(
        'The "string" argument must be of type string. Received type number',
      );
    return J(t);
  }
  return Z(t, e, r);
}
function Z(t, e, r) {
  if ("string" == typeof t)
    return (function (t, e) {
      ("string" == typeof e && "" !== e) || (e = "utf8");
      if (!Y.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
      const r = 0 | et(t, e);
      let n = H(r);
      const i = n.write(t, e);
      i !== r && (n = n.slice(0, i));
      return n;
    })(t, e);
  if (ArrayBuffer.isView(t))
    return (function (t) {
      if (Pt(t, Uint8Array)) {
        const e = new Uint8Array(t);
        return X(e.buffer, e.byteOffset, e.byteLength);
      }
      return Q(t);
    })(t);
  if (null == t)
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof t,
    );
  if (Pt(t, ArrayBuffer) || (t && Pt(t.buffer, ArrayBuffer))) return X(t, e, r);
  if (
    "undefined" != typeof SharedArrayBuffer &&
    (Pt(t, SharedArrayBuffer) || (t && Pt(t.buffer, SharedArrayBuffer)))
  )
    return X(t, e, r);
  if ("number" == typeof t)
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number',
    );
  const n = t.valueOf && t.valueOf();
  if (null != n && n !== t) return Y.from(n, e, r);
  const i = (function (t) {
    if (Y.isBuffer(t)) {
      const e = 0 | tt(t.length),
        r = H(e);
      return 0 === r.length || t.copy(r, 0, 0, e), r;
    }
    if (void 0 !== t.length)
      return "number" != typeof t.length || _t(t.length) ? H(0) : Q(t);
    if ("Buffer" === t.type && Array.isArray(t.data)) return Q(t.data);
  })(t);
  if (i) return i;
  if (
    "undefined" != typeof Symbol &&
    null != Symbol.toPrimitive &&
    "function" == typeof t[Symbol.toPrimitive]
  )
    return Y.from(t[Symbol.toPrimitive]("string"), e, r);
  throw new TypeError(
    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
      typeof t,
  );
}
function K(t) {
  if ("number" != typeof t)
    throw new TypeError('"size" argument must be of type number');
  if (t < 0)
    throw new RangeError('The value "' + t + '" is invalid for option "size"');
}
function J(t) {
  return K(t), H(t < 0 ? 0 : 0 | tt(t));
}
function Q(t) {
  const e = t.length < 0 ? 0 : 0 | tt(t.length),
    r = H(e);
  for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
  return r;
}
function X(t, e, r) {
  if (e < 0 || t.byteLength < e)
    throw new RangeError('"offset" is outside of buffer bounds');
  if (t.byteLength < e + (r || 0))
    throw new RangeError('"length" is outside of buffer bounds');
  let n;
  return (
    (n =
      void 0 === e && void 0 === r
        ? new Uint8Array(t)
        : void 0 === r
          ? new Uint8Array(t, e)
          : new Uint8Array(t, e, r)),
    Object.setPrototypeOf(n, Y.prototype),
    n
  );
}
function tt(t) {
  if (t >= 2147483647)
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        (2147483647).toString(16) +
        " bytes",
    );
  return 0 | t;
}
function et(t, e) {
  if (Y.isBuffer(t)) return t.length;
  if (ArrayBuffer.isView(t) || Pt(t, ArrayBuffer)) return t.byteLength;
  if ("string" != typeof t)
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
        typeof t,
    );
  const r = t.length,
    n = arguments.length > 2 && !0 === arguments[2];
  if (!n && 0 === r) return 0;
  let i = !1;
  for (;;)
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return r;
      case "utf8":
      case "utf-8":
        return xt(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * r;
      case "hex":
        return r >>> 1;
      case "base64":
        return kt(t).length;
      default:
        if (i) return n ? -1 : xt(t).length;
        (e = ("" + e).toLowerCase()), (i = !0);
    }
}
function rt(t, e, r) {
  let n = !1;
  if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
  if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
    return "";
  if ((r >>>= 0) <= (e >>>= 0)) return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return gt(this, e, r);
      case "utf8":
      case "utf-8":
        return pt(this, e, r);
      case "ascii":
        return lt(this, e, r);
      case "latin1":
      case "binary":
        return dt(this, e, r);
      case "base64":
        return ht(this, e, r);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return mt(this, e, r);
      default:
        if (n) throw new TypeError("Unknown encoding: " + t);
        (t = (t + "").toLowerCase()), (n = !0);
    }
}
function nt(t, e, r) {
  const n = t[e];
  (t[e] = t[r]), (t[r] = n);
}
function it(t, e, r, n, i) {
  if (0 === t.length) return -1;
  if (
    ("string" == typeof r
      ? ((n = r), (r = 0))
      : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
    _t((r = +r)) && (r = i ? 0 : t.length - 1),
    r < 0 && (r = t.length + r),
    r >= t.length)
  ) {
    if (i) return -1;
    r = t.length - 1;
  } else if (r < 0) {
    if (!i) return -1;
    r = 0;
  }
  if (("string" == typeof e && (e = Y.from(e, n)), Y.isBuffer(e)))
    return 0 === e.length ? -1 : ot(t, e, r, n, i);
  if ("number" == typeof e)
    return (
      (e &= 255),
      "function" == typeof Uint8Array.prototype.indexOf
        ? i
          ? Uint8Array.prototype.indexOf.call(t, e, r)
          : Uint8Array.prototype.lastIndexOf.call(t, e, r)
        : ot(t, [e], r, n, i)
    );
  throw new TypeError("val must be string, number or Buffer");
}
function ot(t, e, r, n, i) {
  let o,
    s = 1,
    a = t.length,
    u = e.length;
  if (
    void 0 !== n &&
    ("ucs2" === (n = String(n).toLowerCase()) ||
      "ucs-2" === n ||
      "utf16le" === n ||
      "utf-16le" === n)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    (s = 2), (a /= 2), (u /= 2), (r /= 2);
  }
  function f(t, e) {
    return 1 === s ? t[e] : t.readUInt16BE(e * s);
  }
  if (i) {
    let n = -1;
    for (o = r; o < a; o++)
      if (f(t, o) === f(e, -1 === n ? 0 : o - n)) {
        if ((-1 === n && (n = o), o - n + 1 === u)) return n * s;
      } else -1 !== n && (o -= o - n), (n = -1);
  } else
    for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
      let r = !0;
      for (let n = 0; n < u; n++)
        if (f(t, o + n) !== f(e, n)) {
          r = !1;
          break;
        }
      if (r) return o;
    }
  return -1;
}
function st(t, e, r, n) {
  r = Number(r) || 0;
  const i = t.length - r;
  n ? (n = Number(n)) > i && (n = i) : (n = i);
  const o = e.length;
  let s;
  for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
    const n = parseInt(e.substr(2 * s, 2), 16);
    if (_t(n)) return s;
    t[r + s] = n;
  }
  return s;
}
function at(t, e, r, n) {
  return Ot(xt(e, t.length - r), t, r, n);
}
function ut(t, e, r, n) {
  return Ot(
    (function (t) {
      const e = [];
      for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
      return e;
    })(e),
    t,
    r,
    n,
  );
}
function ft(t, e, r, n) {
  return Ot(kt(e), t, r, n);
}
function ct(t, e, r, n) {
  return Ot(
    (function (t, e) {
      let r, n, i;
      const o = [];
      for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
        (r = t.charCodeAt(s)),
          (n = r >> 8),
          (i = r % 256),
          o.push(i),
          o.push(n);
      return o;
    })(e, t.length - r),
    t,
    r,
    n,
  );
}
function ht(t, e, r) {
  return 0 === e && r === t.length ? _(t) : _(t.slice(e, r));
}
function pt(t, e, r) {
  r = Math.min(t.length, r);
  const n = [];
  let i = e;
  for (; i < r; ) {
    const e = t[i];
    let o = null,
      s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
    if (i + s <= r) {
      let r, n, a, u;
      switch (s) {
        case 1:
          e < 128 && (o = e);
          break;
        case 2:
          (r = t[i + 1]),
            128 == (192 & r) &&
              ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (o = u));
          break;
        case 3:
          (r = t[i + 1]),
            (n = t[i + 2]),
            128 == (192 & r) &&
              128 == (192 & n) &&
              ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
              u > 2047 && (u < 55296 || u > 57343) && (o = u));
          break;
        case 4:
          (r = t[i + 1]),
            (n = t[i + 2]),
            (a = t[i + 3]),
            128 == (192 & r) &&
              128 == (192 & n) &&
              128 == (192 & a) &&
              ((u =
                ((15 & e) << 18) |
                ((63 & r) << 12) |
                ((63 & n) << 6) |
                (63 & a)),
              u > 65535 && u < 1114112 && (o = u));
      }
    }
    null === o
      ? ((o = 65533), (s = 1))
      : o > 65535 &&
        ((o -= 65536),
        n.push(((o >>> 10) & 1023) | 55296),
        (o = 56320 | (1023 & o))),
      n.push(o),
      (i += s);
  }
  return (function (t) {
    const e = t.length;
    if (e <= 4096) return String.fromCharCode.apply(String, t);
    let r = "",
      n = 0;
    for (; n < e; )
      r += String.fromCharCode.apply(String, t.slice(n, (n += 4096)));
    return r;
  })(n);
}
(Y.TYPED_ARRAY_SUPPORT = (function () {
  try {
    const t = new Uint8Array(1),
      e = {
        foo: function () {
          return 42;
        },
      };
    return (
      Object.setPrototypeOf(e, Uint8Array.prototype),
      Object.setPrototypeOf(t, e),
      42 === t.foo()
    );
  } catch (t) {
    return !1;
  }
})()),
  Y.TYPED_ARRAY_SUPPORT ||
    "undefined" == typeof console ||
    "function" != typeof console.error ||
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.",
    ),
  Object.defineProperty(Y.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (Y.isBuffer(this)) return this.buffer;
    },
  }),
  Object.defineProperty(Y.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (Y.isBuffer(this)) return this.byteOffset;
    },
  }),
  (Y.poolSize = 8192),
  (Y.from = function (t, e, r) {
    return Z(t, e, r);
  }),
  Object.setPrototypeOf(Y.prototype, Uint8Array.prototype),
  Object.setPrototypeOf(Y, Uint8Array),
  (Y.alloc = function (t, e, r) {
    return (function (t, e, r) {
      return (
        K(t),
        t <= 0
          ? H(t)
          : void 0 !== e
            ? "string" == typeof r
              ? H(t).fill(e, r)
              : H(t).fill(e)
            : H(t)
      );
    })(t, e, r);
  }),
  (Y.allocUnsafe = function (t) {
    return J(t);
  }),
  (Y.allocUnsafeSlow = function (t) {
    return J(t);
  }),
  (Y.isBuffer = function (t) {
    return null != t && !0 === t._isBuffer && t !== Y.prototype;
  }),
  (Y.compare = function (t, e) {
    if (
      (Pt(t, Uint8Array) && (t = Y.from(t, t.offset, t.byteLength)),
      Pt(e, Uint8Array) && (e = Y.from(e, e.offset, e.byteLength)),
      !Y.isBuffer(t) || !Y.isBuffer(e))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array',
      );
    if (t === e) return 0;
    let r = t.length,
      n = e.length;
    for (let i = 0, o = Math.min(r, n); i < o; ++i)
      if (t[i] !== e[i]) {
        (r = t[i]), (n = e[i]);
        break;
      }
    return r < n ? -1 : n < r ? 1 : 0;
  }),
  (Y.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (Y.concat = function (t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return Y.alloc(0);
    let r;
    if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
    const n = Y.allocUnsafe(e);
    let i = 0;
    for (r = 0; r < t.length; ++r) {
      let e = t[r];
      if (Pt(e, Uint8Array))
        i + e.length > n.length
          ? (Y.isBuffer(e) || (e = Y.from(e)), e.copy(n, i))
          : Uint8Array.prototype.set.call(n, e, i);
      else {
        if (!Y.isBuffer(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        e.copy(n, i);
      }
      i += e.length;
    }
    return n;
  }),
  (Y.byteLength = et),
  (Y.prototype._isBuffer = !0),
  (Y.prototype.swap16 = function () {
    const t = this.length;
    if (t % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) nt(this, e, e + 1);
    return this;
  }),
  (Y.prototype.swap32 = function () {
    const t = this.length;
    if (t % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) nt(this, e, e + 3), nt(this, e + 1, e + 2);
    return this;
  }),
  (Y.prototype.swap64 = function () {
    const t = this.length;
    if (t % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      nt(this, e, e + 7),
        nt(this, e + 1, e + 6),
        nt(this, e + 2, e + 5),
        nt(this, e + 3, e + 4);
    return this;
  }),
  (Y.prototype.toString = function () {
    const t = this.length;
    return 0 === t
      ? ""
      : 0 === arguments.length
        ? pt(this, 0, t)
        : rt.apply(this, arguments);
  }),
  (Y.prototype.toLocaleString = Y.prototype.toString),
  (Y.prototype.equals = function (t) {
    if (!Y.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === Y.compare(this, t);
  }),
  (Y.prototype.inspect = function () {
    let t = "";
    return (
      (t = this.toString("hex", 0, 50)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > 50 && (t += " ... "),
      "<Buffer " + t + ">"
    );
  }),
  W && (Y.prototype[W] = Y.prototype.inspect),
  (Y.prototype.compare = function (t, e, r, n, i) {
    if (
      (Pt(t, Uint8Array) && (t = Y.from(t, t.offset, t.byteLength)),
      !Y.isBuffer(t))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t,
      );
    if (
      (void 0 === e && (e = 0),
      void 0 === r && (r = t ? t.length : 0),
      void 0 === n && (n = 0),
      void 0 === i && (i = this.length),
      e < 0 || r > t.length || n < 0 || i > this.length)
    )
      throw new RangeError("out of range index");
    if (n >= i && e >= r) return 0;
    if (n >= i) return -1;
    if (e >= r) return 1;
    if (this === t) return 0;
    let o = (i >>>= 0) - (n >>>= 0),
      s = (r >>>= 0) - (e >>>= 0);
    const a = Math.min(o, s),
      u = this.slice(n, i),
      f = t.slice(e, r);
    for (let t = 0; t < a; ++t)
      if (u[t] !== f[t]) {
        (o = u[t]), (s = f[t]);
        break;
      }
    return o < s ? -1 : s < o ? 1 : 0;
  }),
  (Y.prototype.includes = function (t, e, r) {
    return -1 !== this.indexOf(t, e, r);
  }),
  (Y.prototype.indexOf = function (t, e, r) {
    return it(this, t, e, r, !0);
  }),
  (Y.prototype.lastIndexOf = function (t, e, r) {
    return it(this, t, e, r, !1);
  }),
  (Y.prototype.write = function (t, e, r, n) {
    if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
    else if (void 0 === r && "string" == typeof e)
      (n = e), (r = this.length), (e = 0);
    else {
      if (!isFinite(e))
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported",
        );
      (e >>>= 0),
        isFinite(r)
          ? ((r >>>= 0), void 0 === n && (n = "utf8"))
          : ((n = r), (r = void 0));
    }
    const i = this.length - e;
    if (
      ((void 0 === r || r > i) && (r = i),
      (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    n || (n = "utf8");
    let o = !1;
    for (;;)
      switch (n) {
        case "hex":
          return st(this, t, e, r);
        case "utf8":
        case "utf-8":
          return at(this, t, e, r);
        case "ascii":
        case "latin1":
        case "binary":
          return ut(this, t, e, r);
        case "base64":
          return ft(this, t, e, r);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ct(this, t, e, r);
        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          (n = ("" + n).toLowerCase()), (o = !0);
      }
  }),
  (Y.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  });
function lt(t, e, r) {
  let n = "";
  r = Math.min(t.length, r);
  for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
  return n;
}
function dt(t, e, r) {
  let n = "";
  r = Math.min(t.length, r);
  for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
  return n;
}
function gt(t, e, r) {
  const n = t.length;
  (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
  let i = "";
  for (let n = e; n < r; ++n) i += Ft[t[n]];
  return i;
}
function mt(t, e, r) {
  const n = t.slice(e, r);
  let i = "";
  for (let t = 0; t < n.length - 1; t += 2)
    i += String.fromCharCode(n[t] + 256 * n[t + 1]);
  return i;
}
function yt(t, e, r) {
  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
}
function wt(t, e, r, n, i, o) {
  if (!Y.isBuffer(t))
    throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
  if (r + n > t.length) throw new RangeError("Index out of range");
}
function vt(t, e, r, n, i) {
  Lt(e, n, i, t, r, 7);
  let o = Number(e & BigInt(4294967295));
  (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o),
    (o >>= 8),
    (t[r++] = o);
  let s = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[r++] = s),
    (s >>= 8),
    (t[r++] = s),
    (s >>= 8),
    (t[r++] = s),
    (s >>= 8),
    (t[r++] = s),
    r
  );
}
function bt(t, e, r, n, i) {
  Lt(e, n, i, t, r, 7);
  let o = Number(e & BigInt(4294967295));
  (t[r + 7] = o),
    (o >>= 8),
    (t[r + 6] = o),
    (o >>= 8),
    (t[r + 5] = o),
    (o >>= 8),
    (t[r + 4] = o);
  let s = Number((e >> BigInt(32)) & BigInt(4294967295));
  return (
    (t[r + 3] = s),
    (s >>= 8),
    (t[r + 2] = s),
    (s >>= 8),
    (t[r + 1] = s),
    (s >>= 8),
    (t[r] = s),
    r + 8
  );
}
function Et(t, e, r, n, i, o) {
  if (r + n > t.length) throw new RangeError("Index out of range");
  if (r < 0) throw new RangeError("Index out of range");
}
function It(t, e, r, n, i) {
  return (e = +e), (r >>>= 0), i || Et(t, 0, r, 4), M(t, e, r, n, 23, 4), r + 4;
}
function St(t, e, r, n, i) {
  return (e = +e), (r >>>= 0), i || Et(t, 0, r, 8), M(t, e, r, n, 52, 8), r + 8;
}
(Y.prototype.slice = function (t, e) {
  const r = this.length;
  (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
    (e = void 0 === e ? r : ~~e) < 0
      ? (e += r) < 0 && (e = 0)
      : e > r && (e = r),
    e < t && (e = t);
  const n = this.subarray(t, e);
  return Object.setPrototypeOf(n, Y.prototype), n;
}),
  (Y.prototype.readUintLE = Y.prototype.readUIntLE =
    function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || yt(t, e, this.length);
      let n = this[t],
        i = 1,
        o = 0;
      for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
      return n;
    }),
  (Y.prototype.readUintBE = Y.prototype.readUIntBE =
    function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || yt(t, e, this.length);
      let n = this[t + --e],
        i = 1;
      for (; e > 0 && (i *= 256); ) n += this[t + --e] * i;
      return n;
    }),
  (Y.prototype.readUint8 = Y.prototype.readUInt8 =
    function (t, e) {
      return (t >>>= 0), e || yt(t, 1, this.length), this[t];
    }),
  (Y.prototype.readUint16LE = Y.prototype.readUInt16LE =
    function (t, e) {
      return (
        (t >>>= 0), e || yt(t, 2, this.length), this[t] | (this[t + 1] << 8)
      );
    }),
  (Y.prototype.readUint16BE = Y.prototype.readUInt16BE =
    function (t, e) {
      return (
        (t >>>= 0), e || yt(t, 2, this.length), (this[t] << 8) | this[t + 1]
      );
    }),
  (Y.prototype.readUint32LE = Y.prototype.readUInt32LE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || yt(t, 4, this.length),
        (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
          16777216 * this[t + 3]
      );
    }),
  (Y.prototype.readUint32BE = Y.prototype.readUInt32BE =
    function (t, e) {
      return (
        (t >>>= 0),
        e || yt(t, 4, this.length),
        16777216 * this[t] +
          ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
      );
    }),
  (Y.prototype.readBigUInt64LE = Mt(function (t) {
    Rt((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || Ut(t, this.length - 8);
    const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
      i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
    return BigInt(n) + (BigInt(i) << BigInt(32));
  })),
  (Y.prototype.readBigUInt64BE = Mt(function (t) {
    Rt((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || Ut(t, this.length - 8);
    const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
      i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
    return (BigInt(n) << BigInt(32)) + BigInt(i);
  })),
  (Y.prototype.readIntLE = function (t, e, r) {
    (t >>>= 0), (e >>>= 0), r || yt(t, e, this.length);
    let n = this[t],
      i = 1,
      o = 0;
    for (; ++o < e && (i *= 256); ) n += this[t + o] * i;
    return (i *= 128), n >= i && (n -= Math.pow(2, 8 * e)), n;
  }),
  (Y.prototype.readIntBE = function (t, e, r) {
    (t >>>= 0), (e >>>= 0), r || yt(t, e, this.length);
    let n = e,
      i = 1,
      o = this[t + --n];
    for (; n > 0 && (i *= 256); ) o += this[t + --n] * i;
    return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
  }),
  (Y.prototype.readInt8 = function (t, e) {
    return (
      (t >>>= 0),
      e || yt(t, 1, this.length),
      128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    );
  }),
  (Y.prototype.readInt16LE = function (t, e) {
    (t >>>= 0), e || yt(t, 2, this.length);
    const r = this[t] | (this[t + 1] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (Y.prototype.readInt16BE = function (t, e) {
    (t >>>= 0), e || yt(t, 2, this.length);
    const r = this[t + 1] | (this[t] << 8);
    return 32768 & r ? 4294901760 | r : r;
  }),
  (Y.prototype.readInt32LE = function (t, e) {
    return (
      (t >>>= 0),
      e || yt(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (Y.prototype.readInt32BE = function (t, e) {
    return (
      (t >>>= 0),
      e || yt(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (Y.prototype.readBigInt64LE = Mt(function (t) {
    Rt((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || Ut(t, this.length - 8);
    const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
    );
  })),
  (Y.prototype.readBigInt64BE = Mt(function (t) {
    Rt((t >>>= 0), "offset");
    const e = this[t],
      r = this[t + 7];
    (void 0 !== e && void 0 !== r) || Ut(t, this.length - 8);
    const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
    return (
      (BigInt(n) << BigInt(32)) +
      BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
    );
  })),
  (Y.prototype.readFloatLE = function (t, e) {
    return (t >>>= 0), e || yt(t, 4, this.length), F(this, t, !0, 23, 4);
  }),
  (Y.prototype.readFloatBE = function (t, e) {
    return (t >>>= 0), e || yt(t, 4, this.length), F(this, t, !1, 23, 4);
  }),
  (Y.prototype.readDoubleLE = function (t, e) {
    return (t >>>= 0), e || yt(t, 8, this.length), F(this, t, !0, 52, 8);
  }),
  (Y.prototype.readDoubleBE = function (t, e) {
    return (t >>>= 0), e || yt(t, 8, this.length), F(this, t, !1, 52, 8);
  }),
  (Y.prototype.writeUintLE = Y.prototype.writeUIntLE =
    function (t, e, r, n) {
      if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
        wt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      }
      let i = 1,
        o = 0;
      for (this[e] = 255 & t; ++o < r && (i *= 256); )
        this[e + o] = (t / i) & 255;
      return e + r;
    }),
  (Y.prototype.writeUintBE = Y.prototype.writeUIntBE =
    function (t, e, r, n) {
      if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
        wt(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      }
      let i = r - 1,
        o = 1;
      for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
        this[e + i] = (t / o) & 255;
      return e + r;
    }),
  (Y.prototype.writeUint8 = Y.prototype.writeUInt8 =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || wt(this, t, e, 1, 255, 0),
        (this[e] = 255 & t),
        e + 1
      );
    }),
  (Y.prototype.writeUint16LE = Y.prototype.writeUInt16LE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || wt(this, t, e, 2, 65535, 0),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        e + 2
      );
    }),
  (Y.prototype.writeUint16BE = Y.prototype.writeUInt16BE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || wt(this, t, e, 2, 65535, 0),
        (this[e] = t >>> 8),
        (this[e + 1] = 255 & t),
        e + 2
      );
    }),
  (Y.prototype.writeUint32LE = Y.prototype.writeUInt32LE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || wt(this, t, e, 4, 4294967295, 0),
        (this[e + 3] = t >>> 24),
        (this[e + 2] = t >>> 16),
        (this[e + 1] = t >>> 8),
        (this[e] = 255 & t),
        e + 4
      );
    }),
  (Y.prototype.writeUint32BE = Y.prototype.writeUInt32BE =
    function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || wt(this, t, e, 4, 4294967295, 0),
        (this[e] = t >>> 24),
        (this[e + 1] = t >>> 16),
        (this[e + 2] = t >>> 8),
        (this[e + 3] = 255 & t),
        e + 4
      );
    }),
  (Y.prototype.writeBigUInt64LE = Mt(function (t, e = 0) {
    return vt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Y.prototype.writeBigUInt64BE = Mt(function (t, e = 0) {
    return bt(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  })),
  (Y.prototype.writeIntLE = function (t, e, r, n) {
    if (((t = +t), (e >>>= 0), !n)) {
      const n = Math.pow(2, 8 * r - 1);
      wt(this, t, e, r, n - 1, -n);
    }
    let i = 0,
      o = 1,
      s = 0;
    for (this[e] = 255 & t; ++i < r && (o *= 256); )
      t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1),
        (this[e + i] = (((t / o) >> 0) - s) & 255);
    return e + r;
  }),
  (Y.prototype.writeIntBE = function (t, e, r, n) {
    if (((t = +t), (e >>>= 0), !n)) {
      const n = Math.pow(2, 8 * r - 1);
      wt(this, t, e, r, n - 1, -n);
    }
    let i = r - 1,
      o = 1,
      s = 0;
    for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
      t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1),
        (this[e + i] = (((t / o) >> 0) - s) & 255);
    return e + r;
  }),
  (Y.prototype.writeInt8 = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || wt(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (Y.prototype.writeInt16LE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || wt(this, t, e, 2, 32767, -32768),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  }),
  (Y.prototype.writeInt16BE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || wt(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = 255 & t),
      e + 2
    );
  }),
  (Y.prototype.writeInt32LE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || wt(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = 255 & t),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  }),
  (Y.prototype.writeInt32BE = function (t, e, r) {
    return (
      (t = +t),
      (e >>>= 0),
      r || wt(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = 255 & t),
      e + 4
    );
  }),
  (Y.prototype.writeBigInt64LE = Mt(function (t, e = 0) {
    return vt(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  })),
  (Y.prototype.writeBigInt64BE = Mt(function (t, e = 0) {
    return bt(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff"),
    );
  })),
  (Y.prototype.writeFloatLE = function (t, e, r) {
    return It(this, t, e, !0, r);
  }),
  (Y.prototype.writeFloatBE = function (t, e, r) {
    return It(this, t, e, !1, r);
  }),
  (Y.prototype.writeDoubleLE = function (t, e, r) {
    return St(this, t, e, !0, r);
  }),
  (Y.prototype.writeDoubleBE = function (t, e, r) {
    return St(this, t, e, !1, r);
  }),
  (Y.prototype.copy = function (t, e, r, n) {
    if (!Y.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (
      (r || (r = 0),
      n || 0 === n || (n = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      n > 0 && n < r && (n = r),
      n === r)
    )
      return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
    if (n < 0) throw new RangeError("sourceEnd out of bounds");
    n > this.length && (n = this.length),
      t.length - e < n - r && (n = t.length - e + r);
    const i = n - r;
    return (
      this === t && "function" == typeof Uint8Array.prototype.copyWithin
        ? this.copyWithin(e, r, n)
        : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
      i
    );
  }),
  (Y.prototype.fill = function (t, e, r, n) {
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((n = e), (e = 0), (r = this.length))
          : "string" == typeof r && ((n = r), (r = this.length)),
        void 0 !== n && "string" != typeof n)
      )
        throw new TypeError("encoding must be a string");
      if ("string" == typeof n && !Y.isEncoding(n))
        throw new TypeError("Unknown encoding: " + n);
      if (1 === t.length) {
        const e = t.charCodeAt(0);
        (("utf8" === n && e < 128) || "latin1" === n) && (t = e);
      }
    } else
      "number" == typeof t
        ? (t &= 255)
        : "boolean" == typeof t && (t = Number(t));
    if (e < 0 || this.length < e || this.length < r)
      throw new RangeError("Out of range index");
    if (r <= e) return this;
    let i;
    if (
      ((e >>>= 0),
      (r = void 0 === r ? this.length : r >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (i = e; i < r; ++i) this[i] = t;
    else {
      const o = Y.isBuffer(t) ? t : Y.from(t, n),
        s = o.length;
      if (0 === s)
        throw new TypeError(
          'The value "' + t + '" is invalid for argument "value"',
        );
      for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
    }
    return this;
  });
const Ct = {};
function Bt(t, e, r) {
  Ct[t] = class extends r {
    constructor() {
      super(),
        Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0,
        }),
        (this.name = `${this.name} [${t}]`),
        this.stack,
        delete this.name;
    }
    get code() {
      return t;
    }
    set code(t) {
      Object.defineProperty(this, "code", {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0,
      });
    }
    toString() {
      return `${this.name} [${t}]: ${this.message}`;
    }
  };
}
function Tt(t) {
  let e = "",
    r = t.length;
  const n = "-" === t[0] ? 1 : 0;
  for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
  return `${t.slice(0, r)}${e}`;
}
function Lt(t, e, r, n, i, o) {
  if (t > r || t < e) {
    const n = "bigint" == typeof e ? "n" : "";
    let i;
    throw (
      ((i =
        o > 3
          ? 0 === e || e === BigInt(0)
            ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}`
            : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}`
          : `>= ${e}${n} and <= ${r}${n}`),
      new Ct.ERR_OUT_OF_RANGE("value", i, t))
    );
  }
  !(function (t, e, r) {
    Rt(e, "offset"),
      (void 0 !== t[e] && void 0 !== t[e + r]) || Ut(e, t.length - (r + 1));
  })(n, i, o);
}
function Rt(t, e) {
  if ("number" != typeof t) throw new Ct.ERR_INVALID_ARG_TYPE(e, "number", t);
}
function Ut(t, e, r) {
  if (Math.floor(t) !== t)
    throw (Rt(t, r), new Ct.ERR_OUT_OF_RANGE(r || "offset", "an integer", t));
  if (e < 0) throw new Ct.ERR_BUFFER_OUT_OF_BOUNDS();
  throw new Ct.ERR_OUT_OF_RANGE(
    r || "offset",
    `>= ${r ? 1 : 0} and <= ${e}`,
    t,
  );
}
Bt(
  "ERR_BUFFER_OUT_OF_BOUNDS",
  function (t) {
    return t
      ? `${t} is outside of buffer bounds`
      : "Attempt to access memory outside buffer bounds";
  },
  RangeError,
),
  Bt(
    "ERR_INVALID_ARG_TYPE",
    function (t, e) {
      return `The "${t}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError,
  ),
  Bt(
    "ERR_OUT_OF_RANGE",
    function (t, e, r) {
      let n = `The value of "${t}" is out of range.`,
        i = r;
      return (
        Number.isInteger(r) && Math.abs(r) > 2 ** 32
          ? (i = Tt(String(r)))
          : "bigint" == typeof r &&
            ((i = String(r)),
            (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
              (i = Tt(i)),
            (i += "n")),
        (n += ` It must be ${e}. Received ${i}`),
        n
      );
    },
    RangeError,
  );
const At = /[^+/0-9A-Za-z-_]/g;
function xt(t, e) {
  let r;
  e = e || 1 / 0;
  const n = t.length;
  let i = null;
  const o = [];
  for (let s = 0; s < n; ++s) {
    if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
      if (!i) {
        if (r > 56319) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        if (s + 1 === n) {
          (e -= 3) > -1 && o.push(239, 191, 189);
          continue;
        }
        i = r;
        continue;
      }
      if (r < 56320) {
        (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
        continue;
      }
      r = 65536 + (((i - 55296) << 10) | (r - 56320));
    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
    if (((i = null), r < 128)) {
      if ((e -= 1) < 0) break;
      o.push(r);
    } else if (r < 2048) {
      if ((e -= 2) < 0) break;
      o.push((r >> 6) | 192, (63 & r) | 128);
    } else if (r < 65536) {
      if ((e -= 3) < 0) break;
      o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
    } else {
      if (!(r < 1114112)) throw new Error("Invalid code point");
      if ((e -= 4) < 0) break;
      o.push(
        (r >> 18) | 240,
        ((r >> 12) & 63) | 128,
        ((r >> 6) & 63) | 128,
        (63 & r) | 128,
      );
    }
  }
  return o;
}
function kt(t) {
  return P(
    (function (t) {
      if ((t = (t = t.split("=")[0]).trim().replace(At, "")).length < 2)
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t),
  );
}
function Ot(t, e, r, n) {
  let i;
  for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i)
    e[i + r] = t[i];
  return i;
}
function Pt(t, e) {
  return (
    t instanceof e ||
    (null != t &&
      null != t.constructor &&
      null != t.constructor.name &&
      t.constructor.name === e.name)
  );
}
function _t(t) {
  return t != t;
}
const Ft = (function () {
  const t = "0123456789abcdef",
    e = new Array(256);
  for (let r = 0; r < 16; ++r) {
    const n = 16 * r;
    for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
  }
  return e;
})();
function Mt(t) {
  return "undefined" == typeof BigInt ? Nt : t;
}
function Nt() {
  throw new Error("BigInt not supported");
}
var $t = O;
async function jt(t, e) {
  const r = document.querySelector("#resources");
  (document.querySelector("video#ingest").srcObject = e),
    await t.ingest(e),
    r.appendChild(
      await (async function (t) {
        const e = document.createElement("details"),
          r = document.createElement("summary"),
          n = document.createElement("ul"),
          i = document.createElement("button");
        return (
          (r.innerText = await t.getResourceUrl()),
          (await t.getResourceExtensions())
            .filter(
              (t) =>
                t.match(/urn:ietf:params:whip:/) ||
                t.match(/urn:mpeg:dash:schema:mpd/),
            )
            .forEach((t) => {
              const e = t.match(/<?([^>]*)>;\s*rel=([^;]*)/);
              if (e) {
                const [t, r, i] = e,
                  o = document.createElement("li"),
                  s = new URL(r);
                if ("urn:ietf:params:whip:whpp" === i) {
                  const t = new URL("https://web.player.eyevinn.technology");
                  t.searchParams.append("manifest", s.href),
                    (o.innerHTML = `<a target="_blank" href="${t.href}">${s.href}</a> (${i})`);
                } else
                  o.innerHTML = `<a target="_blank" href="${s.href}">${s.href}</a> (${i})`;
                n.appendChild(o);
              }
            }),
          (i.innerText = "Delete"),
          (i.onclick = async () => {
            await t.destroy(), e.parentNode?.removeChild(e);
          }),
          e.appendChild(r),
          e.appendChild(n),
          e.appendChild(i),
          e
        );
      })(t),
    );
}
async function Dt(t, e, r) {
  const n = new x({ endpoint: t, opts: r });
  return e && (await n.setIceServersFromEndpoint()), n;
}
function zt() {
  let t;
  const e = document.querySelector("#param-auth");
  return (t = e && e.value ? e.value : "whipit!"), t;
}
window.addEventListener("DOMContentLoaded", async () => {
  const t = document.querySelector("#whip-endpoint"),
    e = document.querySelector("#ingest-camera"),
    r = document.querySelector("#ingest-screen"),
    n = document.querySelector("#param-channel-id"),
    i = document.querySelector("#param-b64json"),
    o = document.querySelector("#param-no-trickleice");
  t.value = "https://whip.dev.eyevinn.technology/api/v1/whip/broadcaster";
  function s() {
    const e = new URL(window.location.href);
    t.value && e.searchParams.set("endpoint", t.value),
      (document.querySelector("#thisurl").value = e.toString());
  }
  const a = new URL(window.location.href);
  if (a.searchParams.has("endpoint")) {
    t.value = a.searchParams.get("endpoint");
    const e = new URL(t.value);
    (n.value = e.searchParams.get("channelId")),
      e.searchParams.has("b64json") &&
        (i.value = $t.from(e.searchParams.get("b64json"), "base64").toString());
  }
  s(),
    e.addEventListener("click", async () => {
      jt(
        await Dt(t.value, false, {
          debug: false,
          iceServers: k(),
          authkey: zt(),
          noTrickleIce: o.checked,
        }),
        await navigator.mediaDevices.getUserMedia({ video: !0, audio: !0 }),
      );
    }),
    r.addEventListener("click", async () => {
      jt(
        await Dt(t.value, false, {
          debug: false,
          iceServers: k(),
          authkey: zt(),
          noTrickleIce: o.checked,
        }),
        await navigator.mediaDevices.getDisplayMedia(),
      );
    }),
    n.addEventListener("change", () => {
      const e = new URL(t.value);
      n.value
        ? e.searchParams.set("channelId", n.value)
        : e.searchParams.delete("channelId"),
        (t.value = e.toString()),
        s();
    }),
    i.addEventListener("change", () => {
      const e = new URL(t.value);
      if (i.value) {
        const t = $t.from(i.value, "utf-8").toString("base64");
        e.searchParams.set("b64json", t);
      } else e.searchParams.delete("b64json");
      (t.value = e.toString()), s();
    }),
    t.addEventListener("change", () => {
      s();
    });
});
//# sourceMappingURL=index.4c2b5d8b.js.map
