function mt(f) {
  if (f === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return f;
}
function Ei(f, t) {
  (f.prototype = Object.create(t.prototype)),
    (f.prototype.constructor = f),
    (f.__proto__ = t);
}
/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var rt = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  $t = { duration: 0.5, overwrite: !1, delay: 0 },
  Je,
  W,
  E,
  at = 1e8,
  A = 1 / at,
  Be = Math.PI * 2,
  Rr = Be / 4,
  Er = 0,
  zi = Math.sqrt,
  zr = Math.cos,
  Fr = Math.sin,
  X = function (t) {
    return typeof t == "string";
  },
  L = function (t) {
    return typeof t == "function";
  },
  yt = function (t) {
    return typeof t == "number";
  },
  ti = function (t) {
    return typeof t > "u";
  },
  dt = function (t) {
    return typeof t == "object";
  },
  Q = function (t) {
    return t !== !1;
  },
  ei = function () {
    return typeof window < "u";
  },
  pe = function (t) {
    return L(t) || X(t);
  },
  Fi =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  $ = Array.isArray,
  Ne = /(?:-?\.?\d|\.)+/gi,
  Li = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Yt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Me = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ii = /[+-]=-?[.\d]+/,
  Bi = /[^,'"\[\]\s]+/gi,
  Lr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  z,
  ht,
  Ve,
  ii,
  nt = {},
  xe = {},
  Ni,
  Vi = function (t) {
    return (xe = Bt(t, nt)) && J;
  },
  ri = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  ae = function (t, e) {
    return !e && console.warn(t);
  },
  Ui = function (t, e) {
    return (t && (nt[t] = e) && xe && (xe[t] = e)) || nt;
  },
  oe = function () {
    return 0;
  },
  Ir = { suppressEvents: !0, isStart: !0, kill: !1 },
  me = { suppressEvents: !0, kill: !1 },
  Br = { suppressEvents: !0 },
  ni = {},
  wt = [],
  Ue = {},
  Yi,
  tt = {},
  De = {},
  gi = 30,
  ge = [],
  si = "",
  ai = function (t) {
    var e = t[0],
      i,
      r;
    if ((dt(e) || L(e) || (t = [t]), !(i = (e._gsap || {}).harness))) {
      for (r = ge.length; r-- && !ge[r].targetTest(e); );
      i = ge[r];
    }
    for (r = t.length; r--; )
      (t[r] && (t[r]._gsap || (t[r]._gsap = new lr(t[r], i)))) ||
        t.splice(r, 1);
    return t;
  },
  zt = function (t) {
    return t._gsap || ai(ot(t))[0]._gsap;
  },
  Xi = function (t, e, i) {
    return (i = t[e]) && L(i)
      ? t[e]()
      : (ti(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  H = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  I = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  Y = function (t) {
    return Math.round(t * 1e7) / 1e7 || 0;
  },
  qt = function (t, e) {
    var i = e.charAt(0),
      r = parseFloat(e.substr(2));
    return (
      (t = parseFloat(t)),
      i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
    );
  },
  Nr = function (t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; );
    return r < i;
  },
  ve = function () {
    var t = wt.length,
      e = wt.slice(0),
      i,
      r;
    for (Ue = {}, wt.length = 0, i = 0; i < t; i++)
      (r = e[i]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0);
  },
  qi = function (t, e, i, r) {
    wt.length && !W && ve(),
      t.render(e, i, r || (W && e < 0 && (t._initted || t._startAt))),
      wt.length && !W && ve();
  },
  Gi = function (t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Bi).length < 2
      ? e
      : X(t)
      ? t.trim()
      : t;
  },
  Wi = function (t) {
    return t;
  },
  ut = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  Vr = function (t) {
    return function (e, i) {
      for (var r in i)
        r in e || (r === "duration" && t) || r === "ease" || (e[r] = i[r]);
    };
  },
  Bt = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  yi = function f(t, e) {
    for (var i in e)
      i !== "__proto__" &&
        i !== "constructor" &&
        i !== "prototype" &&
        (t[i] = dt(e[i]) ? f(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t;
  },
  Te = function (t, e) {
    var i = {},
      r;
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  },
  re = function (t) {
    var e = t.parent || z,
      i = t.keyframes ? Vr($(t.keyframes)) : ut;
    if (Q(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  Ur = function (t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; );
    return i < 0;
  },
  $i = function (t, e, i, r, n) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var s = t[r],
      a;
    if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
    return (
      s ? ((e._next = s._next), (s._next = e)) : ((e._next = t[i]), (t[i] = e)),
      e._next ? (e._next._prev = e) : (t[r] = e),
      (e._prev = s),
      (e.parent = e._dp = t),
      e
    );
  },
  Oe = function (t, e, i, r) {
    i === void 0 && (i = "_first"), r === void 0 && (r = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = n) : t[r] === e && (t[r] = n),
      (e._next = e._prev = e.parent = null);
  },
  St = function (t, e) {
    t.parent &&
      (!e || t.parent.autoRemoveChildren) &&
      t.parent.remove &&
      t.parent.remove(t),
      (t._act = 0);
  },
  Ft = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  Yr = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  Ye = function (t, e, i, r) {
    return (
      t._startAt &&
      (W
        ? t._startAt.revert(me)
        : (t.vars.immediateRender && !t.vars.autoRevert) ||
          t._startAt.render(e, !0, r))
    );
  },
  Xr = function f(t) {
    return !t || (t._ts && f(t.parent));
  },
  xi = function (t) {
    return t._repeat ? Kt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Kt = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  be = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  ke = function (t) {
    return (t._end = Y(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || A) || 0)
    ));
  },
  Ce = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = Y(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        ke(t),
        i._dirty || Ft(i, t)),
      t
    );
  },
  Ki = function (t, e) {
    var i;
    if (
      ((e._time ||
        (!e._dur && e._initted) ||
        (e._start < t._time && (e._dur || !e.add))) &&
        ((i = be(t.rawTime(), e)),
        (!e._dur || ce(0, e.totalDuration(), i) - e._tTime > A) &&
          e.render(i, !0)),
      Ft(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -A;
    }
  },
  _t = function (t, e, i, r) {
    return (
      e.parent && St(e),
      (e._start = Y(
        (yt(i) ? i : i || t !== z ? st(t, i, e) : t._time) + e._delay
      )),
      (e._end = Y(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      $i(t, e, "_first", "_last", t._sort ? "_start" : 0),
      Xe(e) || (t._recent = e),
      r || Ki(t, e),
      t._ts < 0 && Ce(t, t._tTime),
      t
    );
  },
  Qi = function (t, e) {
    return (
      (nt.ScrollTrigger || ri("scrollTrigger", e)) &&
      nt.ScrollTrigger.create(e, t)
    );
  },
  Hi = function (t, e, i, r, n) {
    if ((ui(t, e, n), !t._initted)) return 1;
    if (
      !i &&
      t._pt &&
      !W &&
      ((t._dur && t.vars.lazy !== !1) || (!t._dur && t.vars.lazy)) &&
      Yi !== et.frame
    )
      return wt.push(t), (t._lazy = [n, r]), 1;
  },
  qr = function f(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || f(e));
  },
  Xe = function (t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart";
  },
  Gr = function (t, e, i, r) {
    var n = t.ratio,
      s =
        e < 0 ||
        (!e &&
          ((!t._start && qr(t) && !(!t._initted && Xe(t))) ||
            ((t._ts < 0 || t._dp._ts < 0) && !Xe(t))))
          ? 0
          : 1,
      a = t._rDelay,
      o = 0,
      u,
      h,
      l;
    if (
      (a &&
        t._repeat &&
        ((o = ce(0, t._tDur, e)),
        (h = Kt(o, a)),
        t._yoyo && h & 1 && (s = 1 - s),
        h !== Kt(t._tTime, a) &&
          ((n = 1 - s), t.vars.repeatRefresh && t._initted && t.invalidate())),
      s !== n || W || r || t._zTime === A || (!e && t._zTime))
    ) {
      if (!t._initted && Hi(t, e, r, i, o)) return;
      for (
        l = t._zTime,
          t._zTime = e || (i ? A : 0),
          i || (i = e && !l),
          t.ratio = s,
          t._from && (s = 1 - s),
          t._time = 0,
          t._tTime = o,
          u = t._pt;
        u;

      )
        u.r(s, u.d), (u = u._next);
      e < 0 && Ye(t, e, i, !0),
        t._onUpdate && !i && it(t, "onUpdate"),
        o && t._repeat && !i && t.parent && it(t, "onRepeat"),
        (e >= t._tDur || e < 0) &&
          t.ratio === s &&
          (s && St(t, 1),
          !i &&
            !W &&
            (it(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()));
    } else t._zTime || (t._zTime = e);
  },
  Wr = function (t, e, i) {
    var r;
    if (i > e)
      for (r = t._first; r && r._start <= i; ) {
        if (r.data === "isPause" && r._start > e) return r;
        r = r._next;
      }
    else
      for (r = t._last; r && r._start >= i; ) {
        if (r.data === "isPause" && r._start < e) return r;
        r = r._prev;
      }
  },
  Qt = function (t, e, i, r) {
    var n = t._repeat,
      s = Y(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !r && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : Y(s * (n + 1) + t._rDelay * n)) : s),
      a > 0 && !r && Ce(t, (t._tTime = t._tDur * a)),
      t.parent && ke(t),
      i || Ft(t.parent, t),
      t
    );
  },
  vi = function (t) {
    return t instanceof K ? Ft(t) : Qt(t, t._dur);
  },
  $r = { _start: 0, endTime: oe, totalDuration: oe },
  st = function f(t, e, i) {
    var r = t.labels,
      n = t._recent || $r,
      s = t.duration() >= at ? n.endTime(!1) : t._dur,
      a,
      o,
      u;
    return X(e) && (isNaN(e) || e in r)
      ? ((o = e.charAt(0)),
        (u = e.substr(-1) === "%"),
        (a = e.indexOf("=")),
        o === "<" || o === ">"
          ? (a >= 0 && (e = e.replace(/=/, "")),
            (o === "<" ? n._start : n.endTime(n._repeat >= 0)) +
              (parseFloat(e.substr(1)) || 0) *
                (u ? (a < 0 ? n : i).totalDuration() / 100 : 1))
          : a < 0
          ? (e in r || (r[e] = s), r[e])
          : ((o = parseFloat(e.charAt(a - 1) + e.substr(a + 1))),
            u && i && (o = (o / 100) * ($(i) ? i[0] : i).totalDuration()),
            a > 1 ? f(t, e.substr(0, a - 1), i) + o : s + o))
      : e == null
      ? s
      : +e;
  },
  ne = function (t, e, i) {
    var r = yt(e[1]),
      n = (r ? 2 : 1) + (t < 2 ? 0 : 1),
      s = e[n],
      a,
      o;
    if ((r && (s.duration = e[1]), (s.parent = i), t)) {
      for (a = s, o = i; o && !("immediateRender" in a); )
        (a = o.vars.defaults || {}), (o = Q(o.vars.inherit) && o.parent);
      (s.immediateRender = Q(a.immediateRender)),
        t < 2 ? (s.runBackwards = 1) : (s.startAt = e[n - 1]);
    }
    return new N(e[0], s, e[n + 1]);
  },
  kt = function (t, e) {
    return t || t === 0 ? e(t) : e;
  },
  ce = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  G = function (t, e) {
    return !X(t) || !(e = Lr.exec(t)) ? "" : e[1];
  },
  Kr = function (t, e, i) {
    return kt(i, function (r) {
      return ce(t, e, r);
    });
  },
  qe = [].slice,
  Zi = function (t, e) {
    return (
      t &&
      dt(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && dt(t[0]))) &&
      !t.nodeType &&
      t !== ht
    );
  },
  Qr = function (t, e, i) {
    return (
      i === void 0 && (i = []),
      t.forEach(function (r) {
        var n;
        return (X(r) && !e) || Zi(r, 1)
          ? (n = i).push.apply(n, ot(r))
          : i.push(r);
      }) || i
    );
  },
  ot = function (t, e, i) {
    return E && !e && E.selector
      ? E.selector(t)
      : X(t) && !i && (Ve || !Ht())
      ? qe.call((e || ii).querySelectorAll(t), 0)
      : $(t)
      ? Qr(t, i)
      : Zi(t)
      ? qe.call(t, 0)
      : t
      ? [t]
      : [];
  },
  Ge = function (t) {
    return (
      (t = ot(t)[0] || ae("Invalid scope") || {}),
      function (e) {
        var i = t.current || t.nativeElement || t;
        return ot(
          e,
          i.querySelectorAll
            ? i
            : i === t
            ? ae("Invalid scope") || ii.createElement("div")
            : t
        );
      }
    );
  },
  ji = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Ji = function (t) {
    if (L(t)) return t;
    var e = dt(t) ? t : { each: t },
      i = Lt(e.ease),
      r = e.from || 0,
      n = parseFloat(e.base) || 0,
      s = {},
      a = r > 0 && r < 1,
      o = isNaN(r) || a,
      u = e.axis,
      h = r,
      l = r;
    return (
      X(r)
        ? (h = l = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !a && o && ((h = r[0]), (l = r[1])),
      function (c, d, p) {
        var _ = (p || e).length,
          m = s[_],
          y,
          x,
          v,
          T,
          g,
          w,
          P,
          S,
          b;
        if (!m) {
          if (((b = e.grid === "auto" ? 0 : (e.grid || [1, at])[1]), !b)) {
            for (
              P = -at;
              P < (P = p[b++].getBoundingClientRect().left) && b < _;

            );
            b < _ && b--;
          }
          for (
            m = s[_] = [],
              y = o ? Math.min(b, _) * h - 0.5 : r % b,
              x = b === at ? 0 : o ? (_ * l) / b - 0.5 : (r / b) | 0,
              P = 0,
              S = at,
              w = 0;
            w < _;
            w++
          )
            (v = (w % b) - y),
              (T = x - ((w / b) | 0)),
              (m[w] = g = u ? Math.abs(u === "y" ? T : v) : zi(v * v + T * T)),
              g > P && (P = g),
              g < S && (S = g);
          r === "random" && ji(m),
            (m.max = P - S),
            (m.min = S),
            (m.v = _ =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (b > _
                    ? _ - 1
                    : u
                    ? u === "y"
                      ? _ / b
                      : b
                    : Math.max(b, _ / b)) ||
                0) * (r === "edges" ? -1 : 1)),
            (m.b = _ < 0 ? n - _ : n),
            (m.u = G(e.amount || e.each) || 0),
            (i = i && _ < 0 ? fr(i) : i);
        }
        return (
          (_ = (m[c] - m.min) / m.max || 0), Y(m.b + (i ? i(_) : _) * m.v) + m.u
        );
      }
    );
  },
  We = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var r = Y(Math.round(parseFloat(i) / t) * t * e);
      return (r - (r % 1)) / e + (yt(i) ? 0 : G(i));
    };
  },
  tr = function (t, e) {
    var i = $(t),
      r,
      n;
    return (
      !i &&
        dt(t) &&
        ((r = i = t.radius || at),
        t.values
          ? ((t = ot(t.values)), (n = !yt(t[0])) && (r *= r))
          : (t = We(t.increment))),
      kt(
        e,
        i
          ? L(t)
            ? function (s) {
                return (n = t(s)), Math.abs(n - s) <= r ? n : s;
              }
            : function (s) {
                for (
                  var a = parseFloat(n ? s.x : s),
                    o = parseFloat(n ? s.y : 0),
                    u = at,
                    h = 0,
                    l = t.length,
                    c,
                    d;
                  l--;

                )
                  n
                    ? ((c = t[l].x - a), (d = t[l].y - o), (c = c * c + d * d))
                    : (c = Math.abs(t[l] - a)),
                    c < u && ((u = c), (h = l));
                return (
                  (h = !r || u <= r ? t[h] : s),
                  n || h === s || yt(s) ? h : h + G(s)
                );
              }
          : We(t)
      )
    );
  },
  er = function (t, e, i, r) {
    return kt($(t) ? !e : i === !0 ? !!(i = 0) : !r, function () {
      return $(t)
        ? t[~~(Math.random() * t.length)]
        : (i = i || 1e-5) &&
            (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + i * 0.99)) / i) *
                i *
                r
            ) / r;
    });
  },
  Hr = function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return function (r) {
      return e.reduce(function (n, s) {
        return s(n);
      }, r);
    };
  },
  Zr = function (t, e) {
    return function (i) {
      return t(parseFloat(i)) + (e || G(i));
    };
  },
  jr = function (t, e, i) {
    return rr(t, e, 0, 1, i);
  },
  ir = function (t, e, i) {
    return kt(i, function (r) {
      return t[~~e(r)];
    });
  },
  Jr = function f(t, e, i) {
    var r = e - t;
    return $(t)
      ? ir(t, f(0, t.length), e)
      : kt(i, function (n) {
          return ((r + ((n - t) % r)) % r) + t;
        });
  },
  tn = function f(t, e, i) {
    var r = e - t,
      n = r * 2;
    return $(t)
      ? ir(t, f(0, t.length - 1), e)
      : kt(i, function (s) {
          return (s = (n + ((s - t) % n)) % n || 0), t + (s > r ? n - s : s);
        });
  },
  ue = function (t) {
    for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
      (s = t.indexOf(")", r)),
        (a = t.charAt(r + 7) === "["),
        (n = t.substr(r + 7, s - r - 7).match(a ? Bi : Ne)),
        (i +=
          t.substr(e, r - e) + er(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5)),
        (e = s + 1);
    return i + t.substr(e, t.length - e);
  },
  rr = function (t, e, i, r, n) {
    var s = e - t,
      a = r - i;
    return kt(n, function (o) {
      return i + (((o - t) / s) * a || 0);
    });
  },
  en = function f(t, e, i, r) {
    var n = isNaN(t + e)
      ? 0
      : function (d) {
          return (1 - d) * t + d * e;
        };
    if (!n) {
      var s = X(t),
        a = {},
        o,
        u,
        h,
        l,
        c;
      if ((i === !0 && (r = 1) && (i = null), s))
        (t = { p: t }), (e = { p: e });
      else if ($(t) && !$(e)) {
        for (h = [], l = t.length, c = l - 2, u = 1; u < l; u++)
          h.push(f(t[u - 1], t[u]));
        l--,
          (n = function (p) {
            p *= l;
            var _ = Math.min(c, ~~p);
            return h[_](p - _);
          }),
          (i = e);
      } else r || (t = Bt($(t) ? [] : {}, t));
      if (!h) {
        for (o in e) oi.call(a, t, o, "get", e[o]);
        n = function (p) {
          return _i(p, a) || (s ? t.p : t);
        };
      }
    }
    return kt(i, n);
  },
  Ti = function (t, e, i) {
    var r = t.labels,
      n = at,
      s,
      a,
      o;
    for (s in r)
      (a = r[s] - e),
        a < 0 == !!i && a && n > (a = Math.abs(a)) && ((o = s), (n = a));
    return o;
  },
  it = function (t, e, i) {
    var r = t.vars,
      n = r[e],
      s = E,
      a = t._ctx,
      o,
      u,
      h;
    if (n)
      return (
        (o = r[e + "Params"]),
        (u = r.callbackScope || t),
        i && wt.length && ve(),
        a && (E = a),
        (h = o ? n.apply(u, o) : n.call(u)),
        (E = s),
        h
      );
  },
  ee = function (t) {
    return (
      St(t),
      t.scrollTrigger && t.scrollTrigger.kill(!!W),
      t.progress() < 1 && it(t, "onInterrupt"),
      t
    );
  },
  Xt,
  nr = [],
  sr = function (t) {
    if (t)
      if (((t = (!t.name && t.default) || t), ei() || t.headless)) {
        var e = t.name,
          i = L(t),
          r =
            e && !i && t.init
              ? function () {
                  this._props = [];
                }
              : t,
          n = {
            init: oe,
            render: _i,
            add: oi,
            kill: yn,
            modifier: gn,
            rawVars: 0,
          },
          s = {
            targetTest: 0,
            get: 0,
            getSetter: hi,
            aliases: {},
            register: 0,
          };
        if ((Ht(), t !== r)) {
          if (tt[e]) return;
          ut(r, ut(Te(t, n), s)),
            Bt(r.prototype, Bt(n, Te(t, s))),
            (tt[(r.prop = e)] = r),
            t.targetTest && (ge.push(r), (ni[e] = 1)),
            (e =
              (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
              "Plugin");
        }
        Ui(e, r), t.register && t.register(J, r, Z);
      } else nr.push(t);
  },
  C = 255,
  ie = {
    aqua: [0, C, C],
    lime: [0, C, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, C],
    navy: [0, 0, 128],
    white: [C, C, C],
    olive: [128, 128, 0],
    yellow: [C, C, 0],
    orange: [C, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [C, 0, 0],
    pink: [C, 192, 203],
    cyan: [0, C, C],
    transparent: [C, C, C, 0],
  },
  Ae = function (t, e, i) {
    return (
      (t += t < 0 ? 1 : t > 1 ? -1 : 0),
      ((t * 6 < 1
        ? e + (i - e) * t * 6
        : t < 0.5
        ? i
        : t * 3 < 2
        ? e + (i - e) * (2 / 3 - t) * 6
        : e) *
        C +
        0.5) |
        0
    );
  },
  ar = function (t, e, i) {
    var r = t ? (yt(t) ? [t >> 16, (t >> 8) & C, t & C] : 0) : ie.black,
      n,
      s,
      a,
      o,
      u,
      h,
      l,
      c,
      d,
      p;
    if (!r) {
      if ((t.substr(-1) === "," && (t = t.substr(0, t.length - 1)), ie[t]))
        r = ie[t];
      else if (t.charAt(0) === "#") {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (s = t.charAt(2)),
            (a = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              s +
              s +
              a +
              a +
              (t.length === 5 ? t.charAt(4) + t.charAt(4) : ""))),
          t.length === 9)
        )
          return (
            (r = parseInt(t.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & C, r & C, parseInt(t.substr(7), 16) / 255]
          );
        (t = parseInt(t.substr(1), 16)), (r = [t >> 16, (t >> 8) & C, t & C]);
      } else if (t.substr(0, 3) === "hsl") {
        if (((r = p = t.match(Ne)), !e))
          (o = (+r[0] % 360) / 360),
            (u = +r[1] / 100),
            (h = +r[2] / 100),
            (s = h <= 0.5 ? h * (u + 1) : h + u - h * u),
            (n = h * 2 - s),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Ae(o + 1 / 3, n, s)),
            (r[1] = Ae(o, n, s)),
            (r[2] = Ae(o - 1 / 3, n, s));
        else if (~t.indexOf("="))
          return (r = t.match(Li)), i && r.length < 4 && (r[3] = 1), r;
      } else r = t.match(Ne) || ie.transparent;
      r = r.map(Number);
    }
    return (
      e &&
        !p &&
        ((n = r[0] / C),
        (s = r[1] / C),
        (a = r[2] / C),
        (l = Math.max(n, s, a)),
        (c = Math.min(n, s, a)),
        (h = (l + c) / 2),
        l === c
          ? (o = u = 0)
          : ((d = l - c),
            (u = h > 0.5 ? d / (2 - l - c) : d / (l + c)),
            (o =
              l === n
                ? (s - a) / d + (s < a ? 6 : 0)
                : l === s
                ? (a - n) / d + 2
                : (n - s) / d + 4),
            (o *= 60)),
        (r[0] = ~~(o + 0.5)),
        (r[1] = ~~(u * 100 + 0.5)),
        (r[2] = ~~(h * 100 + 0.5))),
      i && r.length < 4 && (r[3] = 1),
      r
    );
  },
  or = function (t) {
    var e = [],
      i = [],
      r = -1;
    return (
      t.split(Pt).forEach(function (n) {
        var s = n.match(Yt) || [];
        e.push.apply(e, s), i.push((r += s.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  bi = function (t, e, i) {
    var r = "",
      n = (t + r).match(Pt),
      s = e ? "hsla(" : "rgba(",
      a = 0,
      o,
      u,
      h,
      l;
    if (!n) return t;
    if (
      ((n = n.map(function (c) {
        return (
          (c = ar(c, e, 1)) &&
          s +
            (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) +
            ")"
        );
      })),
      i && ((h = or(t)), (o = i.c), o.join(r) !== h.c.join(r)))
    )
      for (u = t.replace(Pt, "1").split(Yt), l = u.length - 1; a < l; a++)
        r +=
          u[a] +
          (~o.indexOf(a)
            ? n.shift() || s + "0,0,0,0)"
            : (h.length ? h : n.length ? n : i).shift());
    if (!u)
      for (u = t.split(Pt), l = u.length - 1; a < l; a++) r += u[a] + n[a];
    return r + u[l];
  },
  Pt = (function () {
    var f =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      t;
    for (t in ie) f += "|" + t + "\\b";
    return new RegExp(f + ")", "gi");
  })(),
  rn = /hsl[a]?\(/,
  ur = function (t) {
    var e = t.join(" "),
      i;
    if (((Pt.lastIndex = 0), Pt.test(e)))
      return (
        (i = rn.test(e)),
        (t[1] = bi(t[1], i)),
        (t[0] = bi(t[0], i, or(t[1]))),
        !0
      );
  },
  fe,
  et = (function () {
    var f = Date.now,
      t = 500,
      e = 33,
      i = f(),
      r = i,
      n = 1e3 / 240,
      s = n,
      a = [],
      o,
      u,
      h,
      l,
      c,
      d,
      p = function _(m) {
        var y = f() - r,
          x = m === !0,
          v,
          T,
          g,
          w;
        if (
          ((y > t || y < 0) && (i += y - e),
          (r += y),
          (g = r - i),
          (v = g - s),
          (v > 0 || x) &&
            ((w = ++l.frame),
            (c = g - l.time * 1e3),
            (l.time = g = g / 1e3),
            (s += v + (v >= n ? 4 : n - v)),
            (T = 1)),
          x || (o = u(_)),
          T)
        )
          for (d = 0; d < a.length; d++) a[d](g, c, w, m);
      };
    return (
      (l = {
        time: 0,
        frame: 0,
        tick: function () {
          p(!0);
        },
        deltaRatio: function (m) {
          return c / (1e3 / (m || 60));
        },
        wake: function () {
          Ni &&
            (!Ve &&
              ei() &&
              ((ht = Ve = window),
              (ii = ht.document || {}),
              (nt.gsap = J),
              (ht.gsapVersions || (ht.gsapVersions = [])).push(J.version),
              Vi(xe || ht.GreenSockGlobals || (!ht.gsap && ht) || {}),
              nr.forEach(sr)),
            (h = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            o && l.sleep(),
            (u =
              h ||
              function (m) {
                return setTimeout(m, (s - l.time * 1e3 + 1) | 0);
              }),
            (fe = 1),
            p(2));
        },
        sleep: function () {
          (h ? cancelAnimationFrame : clearTimeout)(o), (fe = 0), (u = oe);
        },
        lagSmoothing: function (m, y) {
          (t = m || 1 / 0), (e = Math.min(y || 33, t));
        },
        fps: function (m) {
          (n = 1e3 / (m || 240)), (s = l.time * 1e3 + n);
        },
        add: function (m, y, x) {
          var v = y
            ? function (T, g, w, P) {
                m(T, g, w, P), l.remove(v);
              }
            : m;
          return l.remove(m), a[x ? "unshift" : "push"](v), Ht(), v;
        },
        remove: function (m, y) {
          ~(y = a.indexOf(m)) && a.splice(y, 1) && d >= y && d--;
        },
        _listeners: a,
      }),
      l
    );
  })(),
  Ht = function () {
    return !fe && et.wake();
  },
  O = {},
  nn = /^[\d.\-M][\d.\-,\s]/,
  sn = /["']/g,
  an = function (t) {
    for (
      var e = {},
        i = t.substr(1, t.length - 3).split(":"),
        r = i[0],
        n = 1,
        s = i.length,
        a,
        o,
        u;
      n < s;
      n++
    )
      (o = i[n]),
        (a = n !== s - 1 ? o.lastIndexOf(",") : o.length),
        (u = o.substr(0, a)),
        (e[r] = isNaN(u) ? u.replace(sn, "").trim() : +u),
        (r = o.substr(a + 1).trim());
    return e;
  },
  on = function (t) {
    var e = t.indexOf("(") + 1,
      i = t.indexOf(")"),
      r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i);
  },
  un = function (t) {
    var e = (t + "").split("("),
      i = O[e[0]];
    return i && e.length > 1 && i.config
      ? i.config.apply(
          null,
          ~t.indexOf("{") ? [an(e[1])] : on(t).split(",").map(Gi)
        )
      : O._CE && nn.test(t)
      ? O._CE("", t)
      : i;
  },
  fr = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  hr = function f(t, e) {
    for (var i = t._first, r; i; )
      i instanceof K
        ? f(i, e)
        : i.vars.yoyoEase &&
          (!i._yoyo || !i._repeat) &&
          i._yoyo !== e &&
          (i.timeline
            ? f(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  },
  Lt = function (t, e) {
    return (t && (L(t) ? t : O[t] || un(t))) || e;
  },
  Vt = function (t, e, i, r) {
    i === void 0 &&
      (i = function (o) {
        return 1 - e(1 - o);
      }),
      r === void 0 &&
        (r = function (o) {
          return o < 0.5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2;
        });
    var n = { easeIn: e, easeOut: i, easeInOut: r },
      s;
    return (
      H(t, function (a) {
        (O[a] = nt[a] = n), (O[(s = a.toLowerCase())] = i);
        for (var o in n)
          O[
            s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")
          ] = O[a + "." + o] = n[o];
      }),
      n
    );
  },
  _r = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - e * 2)) / 2 : 0.5 + t((e - 0.5) * 2) / 2;
    };
  },
  Re = function f(t, e, i) {
    var r = e >= 1 ? e : 1,
      n = (i || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      s = (n / Be) * (Math.asin(1 / r) || 0),
      a = function (h) {
        return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Fr((h - s) * n) + 1;
      },
      o =
        t === "out"
          ? a
          : t === "in"
          ? function (u) {
              return 1 - a(1 - u);
            }
          : _r(a);
    return (
      (n = Be / n),
      (o.config = function (u, h) {
        return f(t, u, h);
      }),
      o
    );
  },
  Ee = function f(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function (s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0;
      },
      r =
        t === "out"
          ? i
          : t === "in"
          ? function (n) {
              return 1 - i(1 - n);
            }
          : _r(i);
    return (
      (r.config = function (n) {
        return f(t, n);
      }),
      r
    );
  };
H("Linear,Quad,Cubic,Quart,Quint,Strong", function (f, t) {
  var e = t < 5 ? t + 1 : t;
  Vt(
    f + ",Power" + (e - 1),
    t
      ? function (i) {
          return Math.pow(i, e);
        }
      : function (i) {
          return i;
        },
    function (i) {
      return 1 - Math.pow(1 - i, e);
    },
    function (i) {
      return i < 0.5
        ? Math.pow(i * 2, e) / 2
        : 1 - Math.pow((1 - i) * 2, e) / 2;
    }
  );
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Vt("Elastic", Re("in"), Re("out"), Re());
(function (f, t) {
  var e = 1 / t,
    i = 2 * e,
    r = 2.5 * e,
    n = function (a) {
      return a < e
        ? f * a * a
        : a < i
        ? f * Math.pow(a - 1.5 / t, 2) + 0.75
        : a < r
        ? f * (a -= 2.25 / t) * a + 0.9375
        : f * Math.pow(a - 2.625 / t, 2) + 0.984375;
    };
  Vt(
    "Bounce",
    function (s) {
      return 1 - n(1 - s);
    },
    n
  );
})(7.5625, 2.75);
Vt("Expo", function (f) {
  return f ? Math.pow(2, 10 * (f - 1)) : 0;
});
Vt("Circ", function (f) {
  return -(zi(1 - f * f) - 1);
});
Vt("Sine", function (f) {
  return f === 1 ? 1 : -zr(f * Rr) + 1;
});
Vt("Back", Ee("in"), Ee("out"), Ee());
O.SteppedEase =
  O.steps =
  nt.SteppedEase =
    {
      config: function (t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t,
          r = t + (e ? 0 : 1),
          n = e ? 1 : 0,
          s = 1 - A;
        return function (a) {
          return (((r * ce(0, s, a)) | 0) + n) * i;
        };
      },
    };
$t.ease = O["quad.out"];
H(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (f) {
    return (si += f + "," + f + "Params,");
  }
);
var lr = function (t, e) {
    (this.id = Er++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Xi),
      (this.set = e ? e.getSetter : hi);
  },
  he = (function () {
    function f(e) {
      (this.vars = e),
        (this._delay = +e.delay || 0),
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) &&
          ((this._rDelay = e.repeatDelay || 0),
          (this._yoyo = !!e.yoyo || !!e.yoyoEase)),
        (this._ts = 1),
        Qt(this, +e.duration, 1, 1),
        (this.data = e.data),
        E && ((this._ctx = E), E.data.push(this)),
        fe || et.wake();
    }
    var t = f.prototype;
    return (
      (t.delay = function (i) {
        return i || i === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + i - this._delay),
            (this._delay = i),
            this)
          : this._delay;
      }),
      (t.duration = function (i) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i
            )
          : this.totalDuration() && this._dur;
      }),
      (t.totalDuration = function (i) {
        return arguments.length
          ? ((this._dirty = 0),
            Qt(
              this,
              this._repeat < 0
                ? i
                : (i - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (t.totalTime = function (i, r) {
        if ((Ht(), !arguments.length)) return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
          for (Ce(this, i), !n._dp || n.parent || Ki(n, this); n && n.parent; )
            n.parent._time !==
              n._start +
                (n._ts >= 0
                  ? n._tTime / n._ts
                  : (n.totalDuration() - n._tTime) / -n._ts) &&
              n.totalTime(n._tTime, !0),
              (n = n.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && i < this._tDur) ||
              (this._ts < 0 && i > 0) ||
              (!this._tDur && !i)) &&
            _t(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== i ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === A) ||
            (!i && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = i), qi(this, i, r)),
          this
        );
      }),
      (t.time = function (i, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), i + xi(this)) %
                (this._dur + this._rDelay) || (i ? this._dur : 0),
              r
            )
          : this._time;
      }),
      (t.totalProgress = function (i, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * i, r)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.progress = function (i, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) +
                xi(this),
              r
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.rawTime() > 0
          ? 1
          : 0;
      }),
      (t.iteration = function (i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (i - 1) * n, r)
          : this._repeat
          ? Kt(this._tTime, n) + 1
          : 1;
      }),
      (t.timeScale = function (i, r) {
        if (!arguments.length) return this._rts === -A ? 0 : this._rts;
        if (this._rts === i) return this;
        var n =
          this.parent && this._ts ? be(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +i || 0),
          (this._ts = this._ps || i === -A ? 0 : this._rts),
          this.totalTime(ce(-Math.abs(this._delay), this._tDur, n), r !== !1),
          ke(this),
          Yr(this)
        );
      }),
      (t.paused = function (i) {
        return arguments.length
          ? (this._ps !== i &&
              ((this._ps = i),
              i
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ht(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== A &&
                      (this._tTime -= A)
                  ))),
            this)
          : this._ps;
      }),
      (t.startTime = function (i) {
        if (arguments.length) {
          this._start = i;
          var r = this.parent || this._dp;
          return (
            r && (r._sort || !this.parent) && _t(r, this, i - this._delay), this
          );
        }
        return this._start;
      }),
      (t.endTime = function (i) {
        return (
          this._start +
          (Q(i) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (t.rawTime = function (i) {
        var r = this.parent || this._dp;
        return r
          ? i &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? be(r.rawTime(i), this)
            : this._tTime
          : this._tTime;
      }),
      (t.revert = function (i) {
        i === void 0 && (i = Br);
        var r = W;
        return (
          (W = i),
          (this._initted || this._startAt) &&
            (this.timeline && this.timeline.revert(i),
            this.totalTime(-0.01, i.suppressEvents)),
          this.data !== "nested" && i.kill !== !1 && this.kill(),
          (W = r),
          this
        );
      }),
      (t.globalTime = function (i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
          (n = r._start + n / (Math.abs(r._ts) || 1)), (r = r._dp);
        return !this.parent && this._sat ? this._sat.globalTime(i) : n;
      }),
      (t.repeat = function (i) {
        return arguments.length
          ? ((this._repeat = i === 1 / 0 ? -2 : i), vi(this))
          : this._repeat === -2
          ? 1 / 0
          : this._repeat;
      }),
      (t.repeatDelay = function (i) {
        if (arguments.length) {
          var r = this._time;
          return (this._rDelay = i), vi(this), r ? this.time(r) : this;
        }
        return this._rDelay;
      }),
      (t.yoyo = function (i) {
        return arguments.length ? ((this._yoyo = i), this) : this._yoyo;
      }),
      (t.seek = function (i, r) {
        return this.totalTime(st(this, i), Q(r));
      }),
      (t.restart = function (i, r) {
        return this.play().totalTime(i ? -this._delay : 0, Q(r));
      }),
      (t.play = function (i, r) {
        return i != null && this.seek(i, r), this.reversed(!1).paused(!1);
      }),
      (t.reverse = function (i, r) {
        return (
          i != null && this.seek(i || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (t.pause = function (i, r) {
        return i != null && this.seek(i, r), this.paused(!0);
      }),
      (t.resume = function () {
        return this.paused(!1);
      }),
      (t.reversed = function (i) {
        return arguments.length
          ? (!!i !== this.reversed() &&
              this.timeScale(-this._rts || (i ? -A : 0)),
            this)
          : this._rts < 0;
      }),
      (t.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -A), this;
      }),
      (t.isActive = function () {
        var i = this.parent || this._dp,
          r = this._start,
          n;
        return !!(
          !i ||
          (this._ts &&
            this._initted &&
            i.isActive() &&
            (n = i.rawTime(!0)) >= r &&
            n < this.endTime(!0) - A)
        );
      }),
      (t.eventCallback = function (i, r, n) {
        var s = this.vars;
        return arguments.length > 1
          ? (r
              ? ((s[i] = r),
                n && (s[i + "Params"] = n),
                i === "onUpdate" && (this._onUpdate = r))
              : delete s[i],
            this)
          : s[i];
      }),
      (t.then = function (i) {
        var r = this;
        return new Promise(function (n) {
          var s = L(i) ? i : Wi,
            a = function () {
              var u = r.then;
              (r.then = null),
                L(s) && (s = s(r)) && (s.then || s === r) && (r.then = u),
                n(s),
                (r.then = u);
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? a()
            : (r._prom = a);
        });
      }),
      (t.kill = function () {
        ee(this);
      }),
      f
    );
  })();
ut(he.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -A,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var K = (function (f) {
  Ei(t, f);
  function t(i, r) {
    var n;
    return (
      i === void 0 && (i = {}),
      (n = f.call(this, i) || this),
      (n.labels = {}),
      (n.smoothChildTiming = !!i.smoothChildTiming),
      (n.autoRemoveChildren = !!i.autoRemoveChildren),
      (n._sort = Q(i.sortChildren)),
      z && _t(i.parent || z, mt(n), r),
      i.reversed && n.reverse(),
      i.paused && n.paused(!0),
      i.scrollTrigger && Qi(mt(n), i.scrollTrigger),
      n
    );
  }
  var e = t.prototype;
  return (
    (e.to = function (r, n, s) {
      return ne(0, arguments, this), this;
    }),
    (e.from = function (r, n, s) {
      return ne(1, arguments, this), this;
    }),
    (e.fromTo = function (r, n, s, a) {
      return ne(2, arguments, this), this;
    }),
    (e.set = function (r, n, s) {
      return (
        (n.duration = 0),
        (n.parent = this),
        re(n).repeatDelay || (n.repeat = 0),
        (n.immediateRender = !!n.immediateRender),
        new N(r, n, st(this, s), 1),
        this
      );
    }),
    (e.call = function (r, n, s) {
      return _t(this, N.delayedCall(0, r, n), s);
    }),
    (e.staggerTo = function (r, n, s, a, o, u, h) {
      return (
        (s.duration = n),
        (s.stagger = s.stagger || a),
        (s.onComplete = u),
        (s.onCompleteParams = h),
        (s.parent = this),
        new N(r, s, st(this, o)),
        this
      );
    }),
    (e.staggerFrom = function (r, n, s, a, o, u, h) {
      return (
        (s.runBackwards = 1),
        (re(s).immediateRender = Q(s.immediateRender)),
        this.staggerTo(r, n, s, a, o, u, h)
      );
    }),
    (e.staggerFromTo = function (r, n, s, a, o, u, h, l) {
      return (
        (a.startAt = s),
        (re(a).immediateRender = Q(a.immediateRender)),
        this.staggerTo(r, n, a, o, u, h, l)
      );
    }),
    (e.render = function (r, n, s) {
      var a = this._time,
        o = this._dirty ? this.totalDuration() : this._tDur,
        u = this._dur,
        h = r <= 0 ? 0 : Y(r),
        l = this._zTime < 0 != r < 0 && (this._initted || !u),
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        T,
        g,
        w,
        P;
      if (
        (this !== z && h > o && r >= 0 && (h = o), h !== this._tTime || s || l)
      ) {
        if (
          (a !== this._time &&
            u &&
            ((h += this._time - a), (r += this._time - a)),
          (c = h),
          (T = this._start),
          (v = this._ts),
          (y = !v),
          l && (u || (a = this._zTime), (r || !n) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((w = this._yoyo),
            (m = u + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(m * 100 + r, n, s);
          if (
            ((c = Y(h % m)),
            h === o
              ? ((_ = this._repeat), (c = u))
              : ((_ = ~~(h / m)),
                _ && _ === h / m && ((c = u), _--),
                c > u && (c = u)),
            (g = Kt(this._tTime, m)),
            !a &&
              this._tTime &&
              g !== _ &&
              this._tTime - g * m - this._dur <= 0 &&
              (g = _),
            w && _ & 1 && ((c = u - c), (P = 1)),
            _ !== g && !this._lock)
          ) {
            var S = w && g & 1,
              b = S === (w && _ & 1);
            if (
              (_ < g && (S = !S),
              (a = S ? 0 : h % u ? u : h),
              (this._lock = 1),
              (this.render(a || (P ? 0 : Y(_ * m)), n, !u)._lock = 0),
              (this._tTime = h),
              !n && this.parent && it(this, "onRepeat"),
              this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
              (a && a !== this._time) ||
                y !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((u = this._dur),
              (o = this._tDur),
              b &&
                ((this._lock = 2),
                (a = S ? u : -1e-4),
                this.render(a, !0),
                this.vars.repeatRefresh && !P && this.invalidate()),
              (this._lock = 0),
              !this._ts && !y)
            )
              return this;
            hr(this, P);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((x = Wr(this, Y(a), Y(c))), x && (h -= c - (c = x._start))),
          (this._tTime = h),
          (this._time = c),
          (this._act = !v),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (a = 0)),
          !a && c && !n && !_ && (it(this, "onStart"), this._tTime !== h))
        )
          return this;
        if (c >= a && r >= 0)
          for (d = this._first; d; ) {
            if (
              ((p = d._next), (d._act || c >= d._start) && d._ts && x !== d)
            ) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (c - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (c - d._start) * d._ts,
                  n,
                  s
                ),
                c !== this._time || (!this._ts && !y))
              ) {
                (x = 0), p && (h += this._zTime = -A);
                break;
              }
            }
            d = p;
          }
        else {
          d = this._last;
          for (var k = r < 0 ? r : c; d; ) {
            if (((p = d._prev), (d._act || k <= d._end) && d._ts && x !== d)) {
              if (d.parent !== this) return this.render(r, n, s);
              if (
                (d.render(
                  d._ts > 0
                    ? (k - d._start) * d._ts
                    : (d._dirty ? d.totalDuration() : d._tDur) +
                        (k - d._start) * d._ts,
                  n,
                  s || (W && (d._initted || d._startAt))
                ),
                c !== this._time || (!this._ts && !y))
              ) {
                (x = 0), p && (h += this._zTime = k ? -A : A);
                break;
              }
            }
            d = p;
          }
        }
        if (
          x &&
          !n &&
          (this.pause(),
          (x.render(c >= a ? 0 : -A)._zTime = c >= a ? 1 : -1),
          this._ts)
        )
          return (this._start = T), ke(this), this.render(r, n, s);
        this._onUpdate && !n && it(this, "onUpdate", !0),
          ((h === o && this._tTime >= this.totalDuration()) || (!h && a)) &&
            (T === this._start || Math.abs(v) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !u) &&
                ((h === o && this._ts > 0) || (!h && this._ts < 0)) &&
                St(this, 1),
              !n &&
                !(r < 0 && !a) &&
                (h || a || !o) &&
                (it(
                  this,
                  h === o && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(h < o && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (e.add = function (r, n) {
      var s = this;
      if ((yt(n) || (n = st(this, n, r)), !(r instanceof he))) {
        if ($(r))
          return (
            r.forEach(function (a) {
              return s.add(a, n);
            }),
            this
          );
        if (X(r)) return this.addLabel(r, n);
        if (L(r)) r = N.delayedCall(0, r);
        else return this;
      }
      return this !== r ? _t(this, r, n) : this;
    }),
    (e.getChildren = function (r, n, s, a) {
      r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -at);
      for (var o = [], u = this._first; u; )
        u._start >= a &&
          (u instanceof N
            ? n && o.push(u)
            : (s && o.push(u), r && o.push.apply(o, u.getChildren(!0, n, s)))),
          (u = u._next);
      return o;
    }),
    (e.getById = function (r) {
      for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
        if (n[s].vars.id === r) return n[s];
    }),
    (e.remove = function (r) {
      return X(r)
        ? this.removeLabel(r)
        : L(r)
        ? this.killTweensOf(r)
        : (Oe(this, r),
          r === this._recent && (this._recent = this._last),
          Ft(this));
    }),
    (e.totalTime = function (r, n) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = Y(
              et.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts)
            )),
          f.prototype.totalTime.call(this, r, n),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (e.addLabel = function (r, n) {
      return (this.labels[r] = st(this, n)), this;
    }),
    (e.removeLabel = function (r) {
      return delete this.labels[r], this;
    }),
    (e.addPause = function (r, n, s) {
      var a = N.delayedCall(0, n || oe, s);
      return (
        (a.data = "isPause"), (this._hasPause = 1), _t(this, a, st(this, r))
      );
    }),
    (e.removePause = function (r) {
      var n = this._first;
      for (r = st(this, r); n; )
        n._start === r && n.data === "isPause" && St(n), (n = n._next);
    }),
    (e.killTweensOf = function (r, n, s) {
      for (var a = this.getTweensOf(r, s), o = a.length; o--; )
        vt !== a[o] && a[o].kill(r, n);
      return this;
    }),
    (e.getTweensOf = function (r, n) {
      for (var s = [], a = ot(r), o = this._first, u = yt(n), h; o; )
        o instanceof N
          ? Nr(o._targets, a) &&
            (u
              ? (!vt || (o._initted && o._ts)) &&
                o.globalTime(0) <= n &&
                o.globalTime(o.totalDuration()) > n
              : !n || o.isActive()) &&
            s.push(o)
          : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h),
          (o = o._next);
      return s;
    }),
    (e.tweenTo = function (r, n) {
      n = n || {};
      var s = this,
        a = st(s, r),
        o = n,
        u = o.startAt,
        h = o.onStart,
        l = o.onStartParams,
        c = o.immediateRender,
        d,
        p = N.to(
          s,
          ut(
            {
              ease: n.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: a,
              overwrite: "auto",
              duration:
                n.duration ||
                Math.abs(
                  (a - (u && "time" in u ? u.time : s._time)) / s.timeScale()
                ) ||
                A,
              onStart: function () {
                if ((s.pause(), !d)) {
                  var m =
                    n.duration ||
                    Math.abs(
                      (a - (u && "time" in u ? u.time : s._time)) /
                        s.timeScale()
                    );
                  p._dur !== m && Qt(p, m, 0, 1).render(p._time, !0, !0),
                    (d = 1);
                }
                h && h.apply(p, l || []);
              },
            },
            n
          )
        );
      return c ? p.render(0) : p;
    }),
    (e.tweenFromTo = function (r, n, s) {
      return this.tweenTo(n, ut({ startAt: { time: st(this, r) } }, s));
    }),
    (e.recent = function () {
      return this._recent;
    }),
    (e.nextLabel = function (r) {
      return r === void 0 && (r = this._time), Ti(this, st(this, r));
    }),
    (e.previousLabel = function (r) {
      return r === void 0 && (r = this._time), Ti(this, st(this, r), 1);
    }),
    (e.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + A);
    }),
    (e.shiftChildren = function (r, n, s) {
      s === void 0 && (s = 0);
      for (var a = this._first, o = this.labels, u; a; )
        a._start >= s && ((a._start += r), (a._end += r)), (a = a._next);
      if (n) for (u in o) o[u] >= s && (o[u] += r);
      return Ft(this);
    }),
    (e.invalidate = function (r) {
      var n = this._first;
      for (this._lock = 0; n; ) n.invalidate(r), (n = n._next);
      return f.prototype.invalidate.call(this, r);
    }),
    (e.clear = function (r) {
      r === void 0 && (r = !0);
      for (var n = this._first, s; n; ) (s = n._next), this.remove(n), (n = s);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Ft(this)
      );
    }),
    (e.totalDuration = function (r) {
      var n = 0,
        s = this,
        a = s._last,
        o = at,
        u,
        h,
        l;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -r : r)
        );
      if (s._dirty) {
        for (l = s.parent; a; )
          (u = a._prev),
            a._dirty && a.totalDuration(),
            (h = a._start),
            h > o && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (_t(s, a, h - a._delay, 1)._lock = 0))
              : (o = h),
            h < 0 &&
              a._ts &&
              ((n -= h),
              ((!l && !s._dp) || (l && l.smoothChildTiming)) &&
                ((s._start += h / s._ts), (s._time -= h), (s._tTime -= h)),
              s.shiftChildren(-h, !1, -1 / 0),
              (o = 0)),
            a._end > n && a._ts && (n = a._end),
            (a = u);
        Qt(s, s === z && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (t.updateRoot = function (r) {
      if ((z._ts && (qi(z, be(r, z)), (Yi = et.frame)), et.frame >= gi)) {
        gi += rt.autoSleep || 120;
        var n = z._first;
        if ((!n || !n._ts) && rt.autoSleep && et._listeners.length < 2) {
          for (; n && !n._ts; ) n = n._next;
          n || et.sleep();
        }
      }
    }),
    t
  );
})(he);
ut(K.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var fn = function (t, e, i, r, n, s, a) {
    var o = new Z(this._pt, t, e, 0, 1, yr, null, n),
      u = 0,
      h = 0,
      l,
      c,
      d,
      p,
      _,
      m,
      y,
      x;
    for (
      o.b = i,
        o.e = r,
        i += "",
        r += "",
        (y = ~r.indexOf("random(")) && (r = ue(r)),
        s && ((x = [i, r]), s(x, t, e), (i = x[0]), (r = x[1])),
        c = i.match(Me) || [];
      (l = Me.exec(r));

    )
      (p = l[0]),
        (_ = r.substring(u, l.index)),
        d ? (d = (d + 1) % 5) : _.substr(-5) === "rgba(" && (d = 1),
        p !== c[h++] &&
          ((m = parseFloat(c[h - 1]) || 0),
          (o._pt = {
            _next: o._pt,
            p: _ || h === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? qt(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0,
          }),
          (u = Me.lastIndex));
    return (
      (o.c = u < r.length ? r.substring(u, r.length) : ""),
      (o.fp = a),
      (Ii.test(r) || y) && (o.e = 0),
      (this._pt = o),
      o
    );
  },
  oi = function (t, e, i, r, n, s, a, o, u, h) {
    L(r) && (r = r(n || 0, t, s));
    var l = t[e],
      c =
        i !== "get"
          ? i
          : L(l)
          ? u
            ? t[
                e.indexOf("set") || !L(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](u)
            : t[e]()
          : l,
      d = L(l) ? (u ? dn : mr) : fi,
      p;
    if (
      (X(r) &&
        (~r.indexOf("random(") && (r = ue(r)),
        r.charAt(1) === "=" &&
          ((p = qt(c, r) + (G(c) || 0)), (p || p === 0) && (r = p))),
      !h || c !== r || $e)
    )
      return !isNaN(c * r) && r !== ""
        ? ((p = new Z(
            this._pt,
            t,
            e,
            +c || 0,
            r - (c || 0),
            typeof l == "boolean" ? mn : gr,
            0,
            d
          )),
          u && (p.fp = u),
          a && p.modifier(a, this, t),
          (this._pt = p))
        : (!l && !(e in t) && ri(e, r),
          fn.call(this, t, e, c, r, d, o || rt.stringFilter, u));
  },
  hn = function (t, e, i, r, n) {
    if (
      (L(t) && (t = se(t, n, e, i, r)),
      !dt(t) || (t.style && t.nodeType) || $(t) || Fi(t))
    )
      return X(t) ? se(t, n, e, i, r) : t;
    var s = {},
      a;
    for (a in t) s[a] = se(t[a], n, e, i, r);
    return s;
  },
  cr = function (t, e, i, r, n, s) {
    var a, o, u, h;
    if (
      tt[t] &&
      (a = new tt[t]()).init(
        n,
        a.rawVars ? e[t] : hn(e[t], r, n, s, i),
        i,
        r,
        s
      ) !== !1 &&
      ((i._pt = o = new Z(i._pt, n, t, 0, 1, a.render, a, 0, a.priority)),
      i !== Xt)
    )
      for (u = i._ptLookup[i._targets.indexOf(n)], h = a._props.length; h--; )
        u[a._props[h]] = o;
    return a;
  },
  vt,
  $e,
  ui = function f(t, e, i) {
    var r = t.vars,
      n = r.ease,
      s = r.startAt,
      a = r.immediateRender,
      o = r.lazy,
      u = r.onUpdate,
      h = r.runBackwards,
      l = r.yoyoEase,
      c = r.keyframes,
      d = r.autoRevert,
      p = t._dur,
      _ = t._startAt,
      m = t._targets,
      y = t.parent,
      x = y && y.data === "nested" ? y.vars.targets : m,
      v = t._overwrite === "auto" && !Je,
      T = t.timeline,
      g,
      w,
      P,
      S,
      b,
      k,
      R,
      M,
      D,
      q,
      V,
      B,
      U;
    if (
      (T && (!c || !n) && (n = "none"),
      (t._ease = Lt(n, $t.ease)),
      (t._yEase = l ? fr(Lt(l === !0 ? n : l, $t.ease)) : 0),
      l &&
        t._yoyo &&
        !t._repeat &&
        ((l = t._yEase), (t._yEase = t._ease), (t._ease = l)),
      (t._from = !T && !!r.runBackwards),
      !T || (c && !r.stagger))
    ) {
      if (
        ((M = m[0] ? zt(m[0]).harness : 0),
        (B = M && r[M.prop]),
        (g = Te(r, ni)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          e < 0 && h && a && !d ? _.render(-1, !0) : _.revert(h && p ? me : Ir),
          (_._lazy = 0)),
        s)
      ) {
        if (
          (St(
            (t._startAt = N.set(
              m,
              ut(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: y,
                  immediateRender: !0,
                  lazy: !_ && Q(o),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    u &&
                    function () {
                      return it(t, "onUpdate");
                    },
                  stagger: 0,
                },
                s
              )
            ))
          ),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (W || (!a && !d)) && t._startAt.revert(me),
          a && p && e <= 0 && i <= 0)
        ) {
          e && (t._zTime = e);
          return;
        }
      } else if (h && p && !_) {
        if (
          (e && (a = !1),
          (P = ut(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: a && !_ && Q(o),
              immediateRender: a,
              stagger: 0,
              parent: y,
            },
            g
          )),
          B && (P[M.prop] = B),
          St((t._startAt = N.set(m, P))),
          (t._startAt._dp = 0),
          (t._startAt._sat = t),
          e < 0 && (W ? t._startAt.revert(me) : t._startAt.render(-1, !0)),
          (t._zTime = e),
          !a)
        )
          f(t._startAt, A, A);
        else if (!e) return;
      }
      for (
        t._pt = t._ptCache = 0, o = (p && Q(o)) || (o && !p), w = 0;
        w < m.length;
        w++
      ) {
        if (
          ((b = m[w]),
          (R = b._gsap || ai(m)[w]._gsap),
          (t._ptLookup[w] = q = {}),
          Ue[R.id] && wt.length && ve(),
          (V = x === m ? w : x.indexOf(b)),
          M &&
            (D = new M()).init(b, B || g, t, V, x) !== !1 &&
            ((t._pt = S =
              new Z(t._pt, b, D.name, 0, 1, D.render, D, 0, D.priority)),
            D._props.forEach(function (ft) {
              q[ft] = S;
            }),
            D.priority && (k = 1)),
          !M || B)
        )
          for (P in g)
            tt[P] && (D = cr(P, g, t, V, b, x))
              ? D.priority && (k = 1)
              : (q[P] = S =
                  oi.call(t, b, P, "get", g[P], V, x, 0, r.stringFilter));
        t._op && t._op[w] && t.kill(b, t._op[w]),
          v &&
            t._pt &&
            ((vt = t),
            z.killTweensOf(b, q, t.globalTime(e)),
            (U = !t.parent),
            (vt = 0)),
          t._pt && o && (Ue[R.id] = 1);
      }
      k && xr(t), t._onInit && t._onInit(t);
    }
    (t._onUpdate = u),
      (t._initted = (!t._op || t._pt) && !U),
      c && e <= 0 && T.render(at, !0, !0);
  },
  _n = function (t, e, i, r, n, s, a, o) {
    var u = ((t._pt && t._ptCache) || (t._ptCache = {}))[e],
      h,
      l,
      c,
      d;
    if (!u)
      for (
        u = t._ptCache[e] = [], c = t._ptLookup, d = t._targets.length;
        d--;

      ) {
        if (((h = c[d][e]), h && h.d && h.d._pt))
          for (h = h.d._pt; h && h.p !== e && h.fp !== e; ) h = h._next;
        if (!h)
          return (
            ($e = 1),
            (t.vars[e] = "+=0"),
            ui(t, a),
            ($e = 0),
            o ? ae(e + " not eligible for reset") : 1
          );
        u.push(h);
      }
    for (d = u.length; d--; )
      (l = u[d]),
        (h = l._pt || l),
        (h.s = (r || r === 0) && !n ? r : h.s + (r || 0) + s * h.c),
        (h.c = i - h.s),
        l.e && (l.e = I(i) + G(l.e)),
        l.b && (l.b = h.s + G(l.b));
  },
  ln = function (t, e) {
    var i = t[0] ? zt(t[0]).harness : 0,
      r = i && i.aliases,
      n,
      s,
      a,
      o;
    if (!r) return e;
    n = Bt({}, e);
    for (s in r)
      if (s in n) for (o = r[s].split(","), a = o.length; a--; ) n[o[a]] = n[s];
    return n;
  },
  cn = function (t, e, i, r) {
    var n = e.ease || r || "power1.inOut",
      s,
      a;
    if ($(e))
      (a = i[t] || (i[t] = [])),
        e.forEach(function (o, u) {
          return a.push({ t: (u / (e.length - 1)) * 100, v: o, e: n });
        });
    else
      for (s in e)
        (a = i[s] || (i[s] = [])),
          s === "ease" || a.push({ t: parseFloat(t), v: e[s], e: n });
  },
  se = function (t, e, i, r, n) {
    return L(t)
      ? t.call(e, i, r, n)
      : X(t) && ~t.indexOf("random(")
      ? ue(t)
      : t;
  },
  dr = si + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  pr = {};
H(dr + ",id,stagger,delay,duration,paused,scrollTrigger", function (f) {
  return (pr[f] = 1);
});
var N = (function (f) {
  Ei(t, f);
  function t(i, r, n, s) {
    var a;
    typeof r == "number" && ((n.duration = r), (r = n), (n = null)),
      (a = f.call(this, s ? r : re(r)) || this);
    var o = a.vars,
      u = o.duration,
      h = o.delay,
      l = o.immediateRender,
      c = o.stagger,
      d = o.overwrite,
      p = o.keyframes,
      _ = o.defaults,
      m = o.scrollTrigger,
      y = o.yoyoEase,
      x = r.parent || z,
      v = ($(i) || Fi(i) ? yt(i[0]) : "length" in r) ? [i] : ot(i),
      T,
      g,
      w,
      P,
      S,
      b,
      k,
      R;
    if (
      ((a._targets = v.length
        ? ai(v)
        : ae(
            "GSAP target " + i + " not found. https://gsap.com",
            !rt.nullTargetWarn
          ) || []),
      (a._ptLookup = []),
      (a._overwrite = d),
      p || c || pe(u) || pe(h))
    ) {
      if (
        ((r = a.vars),
        (T = a.timeline =
          new K({
            data: "nested",
            defaults: _ || {},
            targets: x && x.data === "nested" ? x.vars.targets : v,
          })),
        T.kill(),
        (T.parent = T._dp = mt(a)),
        (T._start = 0),
        c || pe(u) || pe(h))
      ) {
        if (((P = v.length), (k = c && Ji(c)), dt(c)))
          for (S in c) ~dr.indexOf(S) && (R || (R = {}), (R[S] = c[S]));
        for (g = 0; g < P; g++)
          (w = Te(r, pr)),
            (w.stagger = 0),
            y && (w.yoyoEase = y),
            R && Bt(w, R),
            (b = v[g]),
            (w.duration = +se(u, mt(a), g, b, v)),
            (w.delay = (+se(h, mt(a), g, b, v) || 0) - a._delay),
            !c &&
              P === 1 &&
              w.delay &&
              ((a._delay = h = w.delay), (a._start += h), (w.delay = 0)),
            T.to(b, w, k ? k(g, b, v) : 0),
            (T._ease = O.none);
        T.duration() ? (u = h = 0) : (a.timeline = 0);
      } else if (p) {
        re(ut(T.vars.defaults, { ease: "none" })),
          (T._ease = Lt(p.ease || r.ease || "none"));
        var M = 0,
          D,
          q,
          V;
        if ($(p))
          p.forEach(function (B) {
            return T.to(v, B, ">");
          }),
            T.duration();
        else {
          w = {};
          for (S in p)
            S === "ease" || S === "easeEach" || cn(S, p[S], w, p.easeEach);
          for (S in w)
            for (
              D = w[S].sort(function (B, U) {
                return B.t - U.t;
              }),
                M = 0,
                g = 0;
              g < D.length;
              g++
            )
              (q = D[g]),
                (V = {
                  ease: q.e,
                  duration: ((q.t - (g ? D[g - 1].t : 0)) / 100) * u,
                }),
                (V[S] = q.v),
                T.to(v, V, M),
                (M += V.duration);
          T.duration() < u && T.to({}, { duration: u - T.duration() });
        }
      }
      u || a.duration((u = T.duration()));
    } else a.timeline = 0;
    return (
      d === !0 && !Je && ((vt = mt(a)), z.killTweensOf(v), (vt = 0)),
      _t(x, mt(a), n),
      r.reversed && a.reverse(),
      r.paused && a.paused(!0),
      (l ||
        (!u &&
          !p &&
          a._start === Y(x._time) &&
          Q(l) &&
          Xr(mt(a)) &&
          x.data !== "nested")) &&
        ((a._tTime = -A), a.render(Math.max(0, -h) || 0)),
      m && Qi(mt(a), m),
      a
    );
  }
  var e = t.prototype;
  return (
    (e.render = function (r, n, s) {
      var a = this._time,
        o = this._tDur,
        u = this._dur,
        h = r < 0,
        l = r > o - A && !h ? o : r < A ? 0 : r,
        c,
        d,
        p,
        _,
        m,
        y,
        x,
        v,
        T;
      if (!u) Gr(this, r, n, s);
      else if (
        l !== this._tTime ||
        !r ||
        s ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== h)
      ) {
        if (((c = l), (v = this.timeline), this._repeat)) {
          if (((_ = u + this._rDelay), this._repeat < -1 && h))
            return this.totalTime(_ * 100 + r, n, s);
          if (
            ((c = Y(l % _)),
            l === o
              ? ((p = this._repeat), (c = u))
              : ((p = ~~(l / _)),
                p && p === Y(l / _) && ((c = u), p--),
                c > u && (c = u)),
            (y = this._yoyo && p & 1),
            y && ((T = this._yEase), (c = u - c)),
            (m = Kt(this._tTime, _)),
            c === a && !s && this._initted && p === m)
          )
            return (this._tTime = l), this;
          p !== m &&
            (v && this._yEase && hr(v, y),
            this.vars.repeatRefresh &&
              !y &&
              !this._lock &&
              this._time !== _ &&
              this._initted &&
              ((this._lock = s = 1),
              (this.render(Y(_ * p), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Hi(this, h ? r : c, s, n, l)) return (this._tTime = 0), this;
          if (a !== this._time && !(s && this.vars.repeatRefresh && p !== m))
            return this;
          if (u !== this._dur) return this.render(r, n, s);
        }
        if (
          ((this._tTime = l),
          (this._time = c),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = x = (T || this._ease)(c / u)),
          this._from && (this.ratio = x = 1 - x),
          c && !a && !n && !p && (it(this, "onStart"), this._tTime !== l))
        )
          return this;
        for (d = this._pt; d; ) d.r(x, d.d), (d = d._next);
        (v && v.render(r < 0 ? r : v._dur * v._ease(c / this._dur), n, s)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !n &&
            (h && Ye(this, r, n, s), it(this, "onUpdate")),
          this._repeat &&
            p !== m &&
            this.vars.onRepeat &&
            !n &&
            this.parent &&
            it(this, "onRepeat"),
          (l === this._tDur || !l) &&
            this._tTime === l &&
            (h && !this._onUpdate && Ye(this, r, !0, !0),
            (r || !u) &&
              ((l === this._tDur && this._ts > 0) || (!l && this._ts < 0)) &&
              St(this, 1),
            !n &&
              !(h && !a) &&
              (l || a || y) &&
              (it(this, l === o ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(l < o && this.timeScale() > 0) && this._prom()));
      }
      return this;
    }),
    (e.targets = function () {
      return this._targets;
    }),
    (e.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        f.prototype.invalidate.call(this, r)
      );
    }),
    (e.resetTo = function (r, n, s, a, o) {
      fe || et.wake(), this._ts || this.play();
      var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        h;
      return (
        this._initted || ui(this, u),
        (h = this._ease(u / this._dur)),
        _n(this, r, n, s, a, h, u, o)
          ? this.resetTo(r, n, s, a, 1)
          : (Ce(this, 0),
            this.parent ||
              $i(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0
              ),
            this.render(0))
      );
    }),
    (e.kill = function (r, n) {
      if ((n === void 0 && (n = "all"), !r && (!n || n === "all")))
        return (this._lazy = this._pt = 0), this.parent ? ee(this) : this;
      if (this.timeline) {
        var s = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, n, vt && vt.vars.overwrite !== !0)
            ._first || ee(this),
          this.parent &&
            s !== this.timeline.totalDuration() &&
            Qt(this, (this._dur * this.timeline._tDur) / s, 0, 1),
          this
        );
      }
      var a = this._targets,
        o = r ? ot(r) : a,
        u = this._ptLookup,
        h = this._pt,
        l,
        c,
        d,
        p,
        _,
        m,
        y;
      if ((!n || n === "all") && Ur(a, o))
        return n === "all" && (this._pt = 0), ee(this);
      for (
        l = this._op = this._op || [],
          n !== "all" &&
            (X(n) &&
              ((_ = {}),
              H(n, function (x) {
                return (_[x] = 1);
              }),
              (n = _)),
            (n = ln(a, n))),
          y = a.length;
        y--;

      )
        if (~o.indexOf(a[y])) {
          (c = u[y]),
            n === "all"
              ? ((l[y] = n), (p = c), (d = {}))
              : ((d = l[y] = l[y] || {}), (p = n));
          for (_ in p)
            (m = c && c[_]),
              m &&
                ((!("kill" in m.d) || m.d.kill(_) === !0) && Oe(this, m, "_pt"),
                delete c[_]),
              d !== "all" && (d[_] = 1);
        }
      return this._initted && !this._pt && h && ee(this), this;
    }),
    (t.to = function (r, n) {
      return new t(r, n, arguments[2]);
    }),
    (t.from = function (r, n) {
      return ne(1, arguments);
    }),
    (t.delayedCall = function (r, n, s, a) {
      return new t(n, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: n,
        onReverseComplete: n,
        onCompleteParams: s,
        onReverseCompleteParams: s,
        callbackScope: a,
      });
    }),
    (t.fromTo = function (r, n, s) {
      return ne(2, arguments);
    }),
    (t.set = function (r, n) {
      return (n.duration = 0), n.repeatDelay || (n.repeat = 0), new t(r, n);
    }),
    (t.killTweensOf = function (r, n, s) {
      return z.killTweensOf(r, n, s);
    }),
    t
  );
})(he);
ut(N.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
H("staggerTo,staggerFrom,staggerFromTo", function (f) {
  N[f] = function () {
    var t = new K(),
      e = qe.call(arguments, 0);
    return e.splice(f === "staggerFromTo" ? 5 : 4, 0, 0), t[f].apply(t, e);
  };
});
var fi = function (t, e, i) {
    return (t[e] = i);
  },
  mr = function (t, e, i) {
    return t[e](i);
  },
  dn = function (t, e, i, r) {
    return t[e](r.fp, i);
  },
  pn = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  hi = function (t, e) {
    return L(t[e]) ? mr : ti(t[e]) && t.setAttribute ? pn : fi;
  },
  gr = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e);
  },
  mn = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  yr = function (t, e) {
    var i = e._pt,
      r = "";
    if (!t && e.b) r = e.b;
    else if (t === 1 && e.e) r = e.e;
    else {
      for (; i; )
        (r =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) +
          r),
          (i = i._next);
      r += e.c;
    }
    e.set(e.t, e.p, r, e);
  },
  _i = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  gn = function (t, e, i, r) {
    for (var n = this._pt, s; n; )
      (s = n._next), n.p === r && n.modifier(t, e, i), (n = s);
  },
  yn = function (t) {
    for (var e = this._pt, i, r; e; )
      (r = e._next),
        (e.p === t && !e.op) || e.op === t
          ? Oe(this, e, "_pt")
          : e.dep || (i = 1),
        (e = r);
    return !i;
  },
  xn = function (t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r);
  },
  xr = function (t) {
    for (var e = t._pt, i, r, n, s; e; ) {
      for (i = e._next, r = n; r && r.pr > e.pr; ) r = r._next;
      (e._prev = r ? r._prev : s) ? (e._prev._next = e) : (n = e),
        (e._next = r) ? (r._prev = e) : (s = e),
        (e = i);
    }
    t._pt = n;
  },
  Z = (function () {
    function f(e, i, r, n, s, a, o, u, h) {
      (this.t = i),
        (this.s = n),
        (this.c = s),
        (this.p = r),
        (this.r = a || gr),
        (this.d = o || this),
        (this.set = u || fi),
        (this.pr = h || 0),
        (this._next = e),
        e && (e._prev = this);
    }
    var t = f.prototype;
    return (
      (t.modifier = function (i, r, n) {
        (this.mSet = this.mSet || this.set),
          (this.set = xn),
          (this.m = i),
          (this.mt = n),
          (this.tween = r);
      }),
      f
    );
  })();
H(
  si +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (f) {
    return (ni[f] = 1);
  }
);
nt.TweenMax = nt.TweenLite = N;
nt.TimelineLite = nt.TimelineMax = K;
z = new K({
  sortChildren: !1,
  defaults: $t,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
rt.stringFilter = ur;
var It = [],
  ye = {},
  vn = [],
  wi = 0,
  Tn = 0,
  ze = function (t) {
    return (ye[t] || vn).map(function (e) {
      return e();
    });
  },
  Ke = function () {
    var t = Date.now(),
      e = [];
    t - wi > 2 &&
      (ze("matchMediaInit"),
      It.forEach(function (i) {
        var r = i.queries,
          n = i.conditions,
          s,
          a,
          o,
          u;
        for (a in r)
          (s = ht.matchMedia(r[a]).matches),
            s && (o = 1),
            s !== n[a] && ((n[a] = s), (u = 1));
        u && (i.revert(), o && e.push(i));
      }),
      ze("matchMediaRevert"),
      e.forEach(function (i) {
        return i.onMatch(i, function (r) {
          return i.add(null, r);
        });
      }),
      (wi = t),
      ze("matchMedia"));
  },
  vr = (function () {
    function f(e, i) {
      (this.selector = i && Ge(i)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = Tn++),
        e && this.add(e);
    }
    var t = f.prototype;
    return (
      (t.add = function (i, r, n) {
        L(i) && ((n = r), (r = i), (i = L));
        var s = this,
          a = function () {
            var u = E,
              h = s.selector,
              l;
            return (
              u && u !== s && u.data.push(s),
              n && (s.selector = Ge(n)),
              (E = s),
              (l = r.apply(s, arguments)),
              L(l) && s._r.push(l),
              (E = u),
              (s.selector = h),
              (s.isReverted = !1),
              l
            );
          };
        return (
          (s.last = a),
          i === L
            ? a(s, function (o) {
                return s.add(null, o);
              })
            : i
            ? (s[i] = a)
            : a
        );
      }),
      (t.ignore = function (i) {
        var r = E;
        (E = null), i(this), (E = r);
      }),
      (t.getTweens = function () {
        var i = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof f
              ? i.push.apply(i, r.getTweens())
              : r instanceof N &&
                  !(r.parent && r.parent.data === "nested") &&
                  i.push(r);
          }),
          i
        );
      }),
      (t.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (t.kill = function (i, r) {
        var n = this;
        if (
          (i
            ? (function () {
                for (var a = n.getTweens(), o = n.data.length, u; o--; )
                  (u = n.data[o]),
                    u.data === "isFlip" &&
                      (u.revert(),
                      u.getChildren(!0, !0, !1).forEach(function (h) {
                        return a.splice(a.indexOf(h), 1);
                      }));
                for (
                  a
                    .map(function (h) {
                      return {
                        g:
                          h._dur ||
                          h._delay ||
                          (h._sat && !h._sat.vars.immediateRender)
                            ? h.globalTime(0)
                            : -1 / 0,
                        t: h,
                      };
                    })
                    .sort(function (h, l) {
                      return l.g - h.g || -1 / 0;
                    })
                    .forEach(function (h) {
                      return h.t.revert(i);
                    }),
                    o = n.data.length;
                  o--;

                )
                  (u = n.data[o]),
                    u instanceof K
                      ? u.data !== "nested" &&
                        (u.scrollTrigger && u.scrollTrigger.revert(), u.kill())
                      : !(u instanceof N) && u.revert && u.revert(i);
                n._r.forEach(function (h) {
                  return h(i, n);
                }),
                  (n.isReverted = !0);
              })()
            : this.data.forEach(function (a) {
                return a.kill && a.kill();
              }),
          this.clear(),
          r)
        )
          for (var s = It.length; s--; )
            It[s].id === this.id && It.splice(s, 1);
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      f
    );
  })(),
  bn = (function () {
    function f(e) {
      (this.contexts = []), (this.scope = e), E && E.data.push(this);
    }
    var t = f.prototype;
    return (
      (t.add = function (i, r, n) {
        dt(i) || (i = { matches: i });
        var s = new vr(0, n || this.scope),
          a = (s.conditions = {}),
          o,
          u,
          h;
        E && !s.selector && (s.selector = E.selector),
          this.contexts.push(s),
          (r = s.add("onMatch", r)),
          (s.queries = i);
        for (u in i)
          u === "all"
            ? (h = 1)
            : ((o = ht.matchMedia(i[u])),
              o &&
                (It.indexOf(s) < 0 && It.push(s),
                (a[u] = o.matches) && (h = 1),
                o.addListener
                  ? o.addListener(Ke)
                  : o.addEventListener("change", Ke)));
        return (
          h &&
            r(s, function (l) {
              return s.add(null, l);
            }),
          this
        );
      }),
      (t.revert = function (i) {
        this.kill(i || {});
      }),
      (t.kill = function (i) {
        this.contexts.forEach(function (r) {
          return r.kill(i, !0);
        });
      }),
      f
    );
  })(),
  we = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      e.forEach(function (r) {
        return sr(r);
      });
    },
    timeline: function (t) {
      return new K(t);
    },
    getTweensOf: function (t, e) {
      return z.getTweensOf(t, e);
    },
    getProperty: function (t, e, i, r) {
      X(t) && (t = ot(t)[0]);
      var n = zt(t || {}).get,
        s = i ? Wi : Gi;
      return (
        i === "native" && (i = ""),
        t &&
          (e
            ? s(((tt[e] && tt[e].get) || n)(t, e, i, r))
            : function (a, o, u) {
                return s(((tt[a] && tt[a].get) || n)(t, a, o, u));
              })
      );
    },
    quickSetter: function (t, e, i) {
      if (((t = ot(t)), t.length > 1)) {
        var r = t.map(function (h) {
            return J.quickSetter(h, e, i);
          }),
          n = r.length;
        return function (h) {
          for (var l = n; l--; ) r[l](h);
        };
      }
      t = t[0] || {};
      var s = tt[e],
        a = zt(t),
        o = (a.harness && (a.harness.aliases || {})[e]) || e,
        u = s
          ? function (h) {
              var l = new s();
              (Xt._pt = 0),
                l.init(t, i ? h + i : h, Xt, 0, [t]),
                l.render(1, l),
                Xt._pt && _i(1, Xt);
            }
          : a.set(t, o);
      return s
        ? u
        : function (h) {
            return u(t, o, i ? h + i : h, a, 1);
          };
    },
    quickTo: function (t, e, i) {
      var r,
        n = J.to(
          t,
          Bt(((r = {}), (r[e] = "+=0.1"), (r.paused = !0), r), i || {})
        ),
        s = function (o, u, h) {
          return n.resetTo(e, o, u, h);
        };
      return (s.tween = n), s;
    },
    isTweening: function (t) {
      return z.getTweensOf(t, !0).length > 0;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Lt(t.ease, $t.ease)), yi($t, t || {});
    },
    config: function (t) {
      return yi(rt, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        i = t.effect,
        r = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (r || "").split(",").forEach(function (a) {
        return (
          a && !tt[a] && !nt[a] && ae(e + " effect requires " + a + " plugin.")
        );
      }),
        (De[e] = function (a, o, u) {
          return i(ot(a), ut(o || {}, n), u);
        }),
        s &&
          (K.prototype[e] = function (a, o, u) {
            return this.add(De[e](a, dt(o) ? o : (u = o) && {}, this), u);
          });
    },
    registerEase: function (t, e) {
      O[t] = Lt(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Lt(t, e) : O;
    },
    getById: function (t) {
      return z.getById(t);
    },
    exportRoot: function (t, e) {
      t === void 0 && (t = {});
      var i = new K(t),
        r,
        n;
      for (
        i.smoothChildTiming = Q(t.smoothChildTiming),
          z.remove(i),
          i._dp = 0,
          i._time = i._tTime = z._time,
          r = z._first;
        r;

      )
        (n = r._next),
          (e ||
            !(
              !r._dur &&
              r instanceof N &&
              r.vars.onComplete === r._targets[0]
            )) &&
            _t(i, r, r._start - r._delay),
          (r = n);
      return _t(z, i, 0), i;
    },
    context: function (t, e) {
      return t ? new vr(t, e) : E;
    },
    matchMedia: function (t) {
      return new bn(t);
    },
    matchMediaRefresh: function () {
      return (
        It.forEach(function (t) {
          var e = t.conditions,
            i,
            r;
          for (r in e) e[r] && ((e[r] = !1), (i = 1));
          i && t.revert();
        }) || Ke()
      );
    },
    addEventListener: function (t, e) {
      var i = ye[t] || (ye[t] = []);
      ~i.indexOf(e) || i.push(e);
    },
    removeEventListener: function (t, e) {
      var i = ye[t],
        r = i && i.indexOf(e);
      r >= 0 && i.splice(r, 1);
    },
    utils: {
      wrap: Jr,
      wrapYoyo: tn,
      distribute: Ji,
      random: er,
      snap: tr,
      normalize: jr,
      getUnit: G,
      clamp: Kr,
      splitColor: ar,
      toArray: ot,
      selector: Ge,
      mapRange: rr,
      pipe: Hr,
      unitize: Zr,
      interpolate: en,
      shuffle: ji,
    },
    install: Vi,
    effects: De,
    ticker: et,
    updateRoot: K.updateRoot,
    plugins: tt,
    globalTimeline: z,
    core: {
      PropTween: Z,
      globals: Ui,
      Tween: N,
      Timeline: K,
      Animation: he,
      getCache: zt,
      _removeLinkedListItem: Oe,
      reverting: function () {
        return W;
      },
      context: function (t) {
        return t && E && (E.data.push(t), (t._ctx = E)), E;
      },
      suppressOverwrites: function (t) {
        return (Je = t);
      },
    },
  };
H("to,from,fromTo,delayedCall,set,killTweensOf", function (f) {
  return (we[f] = N[f]);
});
et.add(K.updateRoot);
Xt = we.to({}, { duration: 0 });
var wn = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  Pn = function (t, e) {
    var i = t._targets,
      r,
      n,
      s;
    for (r in e)
      for (n = i.length; n--; )
        (s = t._ptLookup[n][r]),
          s &&
            (s = s.d) &&
            (s._pt && (s = wn(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r));
  },
  Fe = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (r, n, s) {
        s._onInit = function (a) {
          var o, u;
          if (
            (X(n) &&
              ((o = {}),
              H(n, function (h) {
                return (o[h] = 1);
              }),
              (n = o)),
            e)
          ) {
            o = {};
            for (u in n) o[u] = e(n[u]);
            n = o;
          }
          Pn(a, n);
        };
      },
    };
  },
  J =
    we.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, r, n) {
          var s, a, o;
          this.tween = i;
          for (s in e)
            (o = t.getAttribute(s) || ""),
              (a = this.add(
                t,
                "setAttribute",
                (o || 0) + "",
                e[s],
                r,
                n,
                0,
                0,
                s
              )),
              (a.op = s),
              (a.b = o),
              this._props.push(s);
        },
        render: function (t, e) {
          for (var i = e._pt; i; )
            W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d), (i = i._next);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1);
        },
      },
      Fe("roundProps", We),
      Fe("modifiers"),
      Fe("snap", tr)
    ) || we;
N.version = K.version = J.version = "3.12.5";
Ni = 1;
ei() && Ht();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var Pi,
  Tt,
  Gt,
  li,
  Et,
  Si,
  ci,
  Sn = function () {
    return typeof window < "u";
  },
  xt = {},
  Rt = 180 / Math.PI,
  Wt = Math.PI / 180,
  Ut = Math.atan2,
  Oi = 1e8,
  di = /([A-Z])/g,
  On = /(left|right|width|margin|padding|x)/i,
  kn = /[\s,\(]\S/,
  lt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Qe = function (t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e);
  },
  Cn = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u,
      e
    );
  },
  Mn = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b,
      e
    );
  },
  Dn = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Tr = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  br = function (t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e);
  },
  An = function (t, e, i) {
    return (t.style[e] = i);
  },
  Rn = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  En = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  zn = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Fn = function (t, e, i, r, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(n, s);
  },
  Ln = function (t, e, i, r, n) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(n, s);
  },
  F = "transform",
  j = F + "Origin",
  In = function f(t, e) {
    var i = this,
      r = this.target,
      n = r.style,
      s = r._gsap;
    if (t in xt && n) {
      if (((this.tfm = this.tfm || {}), t !== "transform"))
        (t = lt[t] || t),
          ~t.indexOf(",")
            ? t.split(",").forEach(function (a) {
                return (i.tfm[a] = gt(r, a));
              })
            : (this.tfm[t] = s.x ? s[t] : gt(r, t)),
          t === j && (this.tfm.zOrigin = s.zOrigin);
      else
        return lt.transform.split(",").forEach(function (a) {
          return f.call(i, a, e);
        });
      if (this.props.indexOf(F) >= 0) return;
      s.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(j, e, "")),
        (t = F);
    }
    (n || e) && this.props.push(t, e, n[t]);
  },
  wr = function (t) {
    t.translate &&
      (t.removeProperty("translate"),
      t.removeProperty("scale"),
      t.removeProperty("rotate"));
  },
  Bn = function () {
    var t = this.props,
      e = this.target,
      i = e.style,
      r = e._gsap,
      n,
      s;
    for (n = 0; n < t.length; n += 3)
      t[n + 1]
        ? (e[t[n]] = t[n + 2])
        : t[n + 2]
        ? (i[t[n]] = t[n + 2])
        : i.removeProperty(
            t[n].substr(0, 2) === "--"
              ? t[n]
              : t[n].replace(di, "-$1").toLowerCase()
          );
    if (this.tfm) {
      for (s in this.tfm) r[s] = this.tfm[s];
      r.svg &&
        (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        (n = ci()),
        (!n || !n.isStart) &&
          !i[F] &&
          (wr(i),
          r.zOrigin &&
            i[j] &&
            ((i[j] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1));
    }
  },
  Pr = function (t, e) {
    var i = { target: t, props: [], revert: Bn, save: In };
    return (
      t._gsap || J.core.getCache(t),
      e &&
        e.split(",").forEach(function (r) {
          return i.save(r);
        }),
      i
    );
  },
  Sr,
  He = function (t, e) {
    var i = Tt.createElementNS
      ? Tt.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Tt.createElement(t);
    return i && i.style ? i : Tt.createElement(t);
  },
  ct = function f(t, e, i) {
    var r = getComputedStyle(t);
    return (
      r[e] ||
      r.getPropertyValue(e.replace(di, "-$1").toLowerCase()) ||
      r.getPropertyValue(e) ||
      (!i && f(t, Zt(e) || e, 1)) ||
      ""
    );
  },
  ki = "O,Moz,ms,Ms,Webkit".split(","),
  Zt = function (t, e, i) {
    var r = e || Et,
      n = r.style,
      s = 5;
    if (t in n && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      s-- && !(ki[s] + t in n);

    );
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? ki[s] : "") + t;
  },
  Ze = function () {
    Sn() &&
      window.document &&
      ((Pi = window),
      (Tt = Pi.document),
      (Gt = Tt.documentElement),
      (Et = He("div") || { style: {} }),
      He("div"),
      (F = Zt(F)),
      (j = F + "Origin"),
      (Et.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Sr = !!Zt("perspective")),
      (ci = J.core.reverting),
      (li = 1));
  },
  Le = function f(t) {
    var e = He(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      r = this.nextSibling,
      n = this.style.cssText,
      s;
    if (
      (Gt.appendChild(e),
      e.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (s = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = f);
      } catch {}
    else this._gsapBBox && (s = this._gsapBBox());
    return (
      i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
      Gt.removeChild(e),
      (this.style.cssText = n),
      s
    );
  },
  Ci = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  Or = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch {
      e = Le.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Le || (e = Le.call(t, !0)),
      e && !e.width && !e.x && !e.y
        ? {
            x: +Ci(t, ["x", "cx", "x1"]) || 0,
            y: +Ci(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : e
    );
  },
  kr = function (t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Or(t));
  },
  Nt = function (t, e) {
    if (e) {
      var i = t.style,
        r;
      e in xt && e !== j && (e = F),
        i.removeProperty
          ? ((r = e.substr(0, 2)),
            (r === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
            i.removeProperty(
              r === "--" ? e : e.replace(di, "-$1").toLowerCase()
            ))
          : i.removeAttribute(e);
    }
  },
  bt = function (t, e, i, r, n, s) {
    var a = new Z(t._pt, e, i, 0, 1, s ? br : Tr);
    return (t._pt = a), (a.b = r), (a.e = n), t._props.push(i), a;
  },
  Mi = { deg: 1, rad: 1, turn: 1 },
  Nn = { grid: 1, flex: 1 },
  Ot = function f(t, e, i, r) {
    var n = parseFloat(i) || 0,
      s = (i + "").trim().substr((n + "").length) || "px",
      a = Et.style,
      o = On.test(e),
      u = t.tagName.toLowerCase() === "svg",
      h = (u ? "client" : "offset") + (o ? "Width" : "Height"),
      l = 100,
      c = r === "px",
      d = r === "%",
      p,
      _,
      m,
      y;
    if (r === s || !n || Mi[r] || Mi[s]) return n;
    if (
      (s !== "px" && !c && (n = f(t, e, i, "px")),
      (y = t.getCTM && kr(t)),
      (d || s === "%") && (xt[e] || ~e.indexOf("adius")))
    )
      return (
        (p = y ? t.getBBox()[o ? "width" : "height"] : t[h]),
        I(d ? (n / p) * l : (n / 100) * p)
      );
    if (
      ((a[o ? "width" : "height"] = l + (c ? s : r)),
      (_ =
        ~e.indexOf("adius") || (r === "em" && t.appendChild && !u)
          ? t
          : t.parentNode),
      y && (_ = (t.ownerSVGElement || {}).parentNode),
      (!_ || _ === Tt || !_.appendChild) && (_ = Tt.body),
      (m = _._gsap),
      m && d && m.width && o && m.time === et.time && !m.uncache)
    )
      return I((n / m.width) * l);
    if (d && (e === "height" || e === "width")) {
      var x = t.style[e];
      (t.style[e] = l + r), (p = t[h]), x ? (t.style[e] = x) : Nt(t, e);
    } else
      (d || s === "%") &&
        !Nn[ct(_, "display")] &&
        (a.position = ct(t, "position")),
        _ === t && (a.position = "static"),
        _.appendChild(Et),
        (p = Et[h]),
        _.removeChild(Et),
        (a.position = "absolute");
    return (
      o && d && ((m = zt(_)), (m.time = et.time), (m.width = _[h])),
      I(c ? (p * n) / l : p && n ? (l / p) * n : 0)
    );
  },
  gt = function (t, e, i, r) {
    var n;
    return (
      li || Ze(),
      e in lt &&
        e !== "transform" &&
        ((e = lt[e]), ~e.indexOf(",") && (e = e.split(",")[0])),
      xt[e] && e !== "transform"
        ? ((n = le(t, r)),
          (n =
            e !== "transformOrigin"
              ? n[e]
              : n.svg
              ? n.origin
              : Se(ct(t, j)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]),
          (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) &&
            (n =
              (Pe[e] && Pe[e](t, e, i)) ||
              ct(t, e) ||
              Xi(t, e) ||
              (e === "opacity" ? 1 : 0))),
      i && !~(n + "").trim().indexOf(" ") ? Ot(t, e, n, i) + i : n
    );
  },
  Vn = function (t, e, i, r) {
    if (!i || i === "none") {
      var n = Zt(e, t, 1),
        s = n && ct(t, n, 1);
      s && s !== i
        ? ((e = n), (i = s))
        : e === "borderColor" && (i = ct(t, "borderTopColor"));
    }
    var a = new Z(this._pt, t.style, e, 0, 1, yr),
      o = 0,
      u = 0,
      h,
      l,
      c,
      d,
      p,
      _,
      m,
      y,
      x,
      v,
      T,
      g;
    if (
      ((a.b = i),
      (a.e = r),
      (i += ""),
      (r += ""),
      r === "auto" &&
        ((_ = t.style[e]),
        (t.style[e] = r),
        (r = ct(t, e) || r),
        _ ? (t.style[e] = _) : Nt(t, e)),
      (h = [i, r]),
      ur(h),
      (i = h[0]),
      (r = h[1]),
      (c = i.match(Yt) || []),
      (g = r.match(Yt) || []),
      g.length)
    ) {
      for (; (l = Yt.exec(r)); )
        (m = l[0]),
          (x = r.substring(o, l.index)),
          p
            ? (p = (p + 1) % 5)
            : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1),
          m !== (_ = c[u++] || "") &&
            ((d = parseFloat(_) || 0),
            (T = _.substr((d + "").length)),
            m.charAt(1) === "=" && (m = qt(d, m) + T),
            (y = parseFloat(m)),
            (v = m.substr((y + "").length)),
            (o = Yt.lastIndex - v.length),
            v ||
              ((v = v || rt.units[e] || T),
              o === r.length && ((r += v), (a.e += v))),
            T !== v && (d = Ot(t, e, _, v) || 0),
            (a._pt = {
              _next: a._pt,
              p: x || u === 1 ? x : ",",
              s: d,
              c: y - d,
              m: (p && p < 4) || e === "zIndex" ? Math.round : 0,
            }));
      a.c = o < r.length ? r.substring(o, r.length) : "";
    } else a.r = e === "display" && r === "none" ? br : Tr;
    return Ii.test(r) && (a.e = 0), (this._pt = a), a;
  },
  Di = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  Un = function (t) {
    var e = t.split(" "),
      i = e[0],
      r = e[1] || "50%";
    return (
      (i === "top" || i === "bottom" || r === "left" || r === "right") &&
        ((t = i), (i = r), (r = t)),
      (e[0] = Di[i] || i),
      (e[1] = Di[r] || r),
      e.join(" ")
    );
  },
  Yn = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i = e.t,
        r = i.style,
        n = e.u,
        s = i._gsap,
        a,
        o,
        u;
      if (n === "all" || n === !0) (r.cssText = ""), (o = 1);
      else
        for (n = n.split(","), u = n.length; --u > -1; )
          (a = n[u]),
            xt[a] && ((o = 1), (a = a === "transformOrigin" ? j : F)),
            Nt(i, a);
      o &&
        (Nt(i, F),
        s &&
          (s.svg && i.removeAttribute("transform"),
          le(i, 1),
          (s.uncache = 1),
          wr(r)));
    }
  },
  Pe = {
    clearProps: function (t, e, i, r, n) {
      if (n.data !== "isFromStart") {
        var s = (t._pt = new Z(t._pt, e, i, 0, 0, Yn));
        return (s.u = r), (s.pr = -10), (s.tween = n), t._props.push(i), 1;
      }
    },
  },
  _e = [1, 0, 0, 1, 0, 0],
  Cr = {},
  Mr = function (t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t;
  },
  Ai = function (t) {
    var e = ct(t, F);
    return Mr(e) ? _e : e.substr(7).match(Li).map(I);
  },
  pi = function (t, e) {
    var i = t._gsap || zt(t),
      r = t.style,
      n = Ai(t),
      s,
      a,
      o,
      u;
    return i.svg && t.getAttribute("transform")
      ? ((o = t.transform.baseVal.consolidate().matrix),
        (n = [o.a, o.b, o.c, o.d, o.e, o.f]),
        n.join(",") === "1,0,0,1,0,0" ? _e : n)
      : (n === _e &&
          !t.offsetParent &&
          t !== Gt &&
          !i.svg &&
          ((o = r.display),
          (r.display = "block"),
          (s = t.parentNode),
          (!s || !t.offsetParent) &&
            ((u = 1), (a = t.nextElementSibling), Gt.appendChild(t)),
          (n = Ai(t)),
          o ? (r.display = o) : Nt(t, "display"),
          u &&
            (a
              ? s.insertBefore(t, a)
              : s
              ? s.appendChild(t)
              : Gt.removeChild(t))),
        e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
  },
  je = function (t, e, i, r, n, s) {
    var a = t._gsap,
      o = n || pi(t, !0),
      u = a.xOrigin || 0,
      h = a.yOrigin || 0,
      l = a.xOffset || 0,
      c = a.yOffset || 0,
      d = o[0],
      p = o[1],
      _ = o[2],
      m = o[3],
      y = o[4],
      x = o[5],
      v = e.split(" "),
      T = parseFloat(v[0]) || 0,
      g = parseFloat(v[1]) || 0,
      w,
      P,
      S,
      b;
    i
      ? o !== _e &&
        (P = d * m - p * _) &&
        ((S = T * (m / P) + g * (-_ / P) + (_ * x - m * y) / P),
        (b = T * (-p / P) + g * (d / P) - (d * x - p * y) / P),
        (T = S),
        (g = b))
      : ((w = Or(t)),
        (T = w.x + (~v[0].indexOf("%") ? (T / 100) * w.width : T)),
        (g = w.y + (~(v[1] || v[0]).indexOf("%") ? (g / 100) * w.height : g))),
      r || (r !== !1 && a.smooth)
        ? ((y = T - u),
          (x = g - h),
          (a.xOffset = l + (y * d + x * _) - y),
          (a.yOffset = c + (y * p + x * m) - x))
        : (a.xOffset = a.yOffset = 0),
      (a.xOrigin = T),
      (a.yOrigin = g),
      (a.smooth = !!r),
      (a.origin = e),
      (a.originIsAbsolute = !!i),
      (t.style[j] = "0px 0px"),
      s &&
        (bt(s, a, "xOrigin", u, T),
        bt(s, a, "yOrigin", h, g),
        bt(s, a, "xOffset", l, a.xOffset),
        bt(s, a, "yOffset", c, a.yOffset)),
      t.setAttribute("data-svg-origin", T + " " + g);
  },
  le = function (t, e) {
    var i = t._gsap || new lr(t);
    if ("x" in i && !e && !i.uncache) return i;
    var r = t.style,
      n = i.scaleX < 0,
      s = "px",
      a = "deg",
      o = getComputedStyle(t),
      u = ct(t, j) || "0",
      h,
      l,
      c,
      d,
      p,
      _,
      m,
      y,
      x,
      v,
      T,
      g,
      w,
      P,
      S,
      b,
      k,
      R,
      M,
      D,
      q,
      V,
      B,
      U,
      ft,
      de,
      jt,
      Jt,
      Ct,
      mi,
      pt,
      Mt;
    return (
      (h = l = c = _ = m = y = x = v = T = 0),
      (d = p = 1),
      (i.svg = !!(t.getCTM && kr(t))),
      o.translate &&
        ((o.translate !== "none" ||
          o.scale !== "none" ||
          o.rotate !== "none") &&
          (r[F] =
            (o.translate !== "none"
              ? "translate3d(" +
                (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") +
            (o.scale !== "none"
              ? "scale(" + o.scale.split(" ").join(",") + ") "
              : "") +
            (o[F] !== "none" ? o[F] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (P = pi(t, i.svg)),
      i.svg &&
        (i.uncache
          ? ((ft = t.getBBox()),
            (u = i.xOrigin - ft.x + "px " + (i.yOrigin - ft.y) + "px"),
            (U = ""))
          : (U = !e && t.getAttribute("data-svg-origin")),
        je(t, U || u, !!U || i.originIsAbsolute, i.smooth !== !1, P)),
      (g = i.xOrigin || 0),
      (w = i.yOrigin || 0),
      P !== _e &&
        ((R = P[0]),
        (M = P[1]),
        (D = P[2]),
        (q = P[3]),
        (h = V = P[4]),
        (l = B = P[5]),
        P.length === 6
          ? ((d = Math.sqrt(R * R + M * M)),
            (p = Math.sqrt(q * q + D * D)),
            (_ = R || M ? Ut(M, R) * Rt : 0),
            (x = D || q ? Ut(D, q) * Rt + _ : 0),
            x && (p *= Math.abs(Math.cos(x * Wt))),
            i.svg && ((h -= g - (g * R + w * D)), (l -= w - (g * M + w * q))))
          : ((Mt = P[6]),
            (mi = P[7]),
            (jt = P[8]),
            (Jt = P[9]),
            (Ct = P[10]),
            (pt = P[11]),
            (h = P[12]),
            (l = P[13]),
            (c = P[14]),
            (S = Ut(Mt, Ct)),
            (m = S * Rt),
            S &&
              ((b = Math.cos(-S)),
              (k = Math.sin(-S)),
              (U = V * b + jt * k),
              (ft = B * b + Jt * k),
              (de = Mt * b + Ct * k),
              (jt = V * -k + jt * b),
              (Jt = B * -k + Jt * b),
              (Ct = Mt * -k + Ct * b),
              (pt = mi * -k + pt * b),
              (V = U),
              (B = ft),
              (Mt = de)),
            (S = Ut(-D, Ct)),
            (y = S * Rt),
            S &&
              ((b = Math.cos(-S)),
              (k = Math.sin(-S)),
              (U = R * b - jt * k),
              (ft = M * b - Jt * k),
              (de = D * b - Ct * k),
              (pt = q * k + pt * b),
              (R = U),
              (M = ft),
              (D = de)),
            (S = Ut(M, R)),
            (_ = S * Rt),
            S &&
              ((b = Math.cos(S)),
              (k = Math.sin(S)),
              (U = R * b + M * k),
              (ft = V * b + B * k),
              (M = M * b - R * k),
              (B = B * b - V * k),
              (R = U),
              (V = ft)),
            m &&
              Math.abs(m) + Math.abs(_) > 359.9 &&
              ((m = _ = 0), (y = 180 - y)),
            (d = I(Math.sqrt(R * R + M * M + D * D))),
            (p = I(Math.sqrt(B * B + Mt * Mt))),
            (S = Ut(V, B)),
            (x = Math.abs(S) > 2e-4 ? S * Rt : 0),
            (T = pt ? 1 / (pt < 0 ? -pt : pt) : 0)),
        i.svg &&
          ((U = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !Mr(ct(t, F))),
          U && t.setAttribute("transform", U))),
      Math.abs(x) > 90 &&
        Math.abs(x) < 270 &&
        (n
          ? ((d *= -1), (x += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((p *= -1), (x += x <= 0 ? 180 : -180))),
      (e = e || i.uncache),
      (i.x =
        h -
        ((i.xPercent =
          h &&
          ((!e && i.xPercent) ||
            (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        s),
      (i.y =
        l -
        ((i.yPercent =
          l &&
          ((!e && i.yPercent) ||
            (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        s),
      (i.z = c + s),
      (i.scaleX = I(d)),
      (i.scaleY = I(p)),
      (i.rotation = I(_) + a),
      (i.rotationX = I(m) + a),
      (i.rotationY = I(y) + a),
      (i.skewX = x + a),
      (i.skewY = v + a),
      (i.transformPerspective = T + s),
      (i.zOrigin = parseFloat(u.split(" ")[2]) || (!e && i.zOrigin) || 0) &&
        (r[j] = Se(u)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = rt.force3D),
      (i.renderTransform = i.svg ? qn : Sr ? Dr : Xn),
      (i.uncache = 0),
      i
    );
  },
  Se = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Ie = function (t, e, i) {
    var r = G(e);
    return I(parseFloat(e) + parseFloat(Ot(t, "x", i + "px", r))) + r;
  },
  Xn = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Dr(t, e);
  },
  Dt = "0deg",
  te = "0px",
  At = ") ",
  Dr = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.z,
      u = i.rotation,
      h = i.rotationY,
      l = i.rotationX,
      c = i.skewX,
      d = i.skewY,
      p = i.scaleX,
      _ = i.scaleY,
      m = i.transformPerspective,
      y = i.force3D,
      x = i.target,
      v = i.zOrigin,
      T = "",
      g = (y === "auto" && t && t !== 1) || y === !0;
    if (v && (l !== Dt || h !== Dt)) {
      var w = parseFloat(h) * Wt,
        P = Math.sin(w),
        S = Math.cos(w),
        b;
      (w = parseFloat(l) * Wt),
        (b = Math.cos(w)),
        (s = Ie(x, s, P * b * -v)),
        (a = Ie(x, a, -Math.sin(w) * -v)),
        (o = Ie(x, o, S * b * -v + v));
    }
    m !== te && (T += "perspective(" + m + At),
      (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
      (g || s !== te || a !== te || o !== te) &&
        (T +=
          o !== te || g
            ? "translate3d(" + s + ", " + a + ", " + o + ") "
            : "translate(" + s + ", " + a + At),
      u !== Dt && (T += "rotate(" + u + At),
      h !== Dt && (T += "rotateY(" + h + At),
      l !== Dt && (T += "rotateX(" + l + At),
      (c !== Dt || d !== Dt) && (T += "skew(" + c + ", " + d + At),
      (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + At),
      (x.style[F] = T || "translate(0, 0)");
  },
  qn = function (t, e) {
    var i = e || this,
      r = i.xPercent,
      n = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.rotation,
      u = i.skewX,
      h = i.skewY,
      l = i.scaleX,
      c = i.scaleY,
      d = i.target,
      p = i.xOrigin,
      _ = i.yOrigin,
      m = i.xOffset,
      y = i.yOffset,
      x = i.forceCSS,
      v = parseFloat(s),
      T = parseFloat(a),
      g,
      w,
      P,
      S,
      b;
    (o = parseFloat(o)),
      (u = parseFloat(u)),
      (h = parseFloat(h)),
      h && ((h = parseFloat(h)), (u += h), (o += h)),
      o || u
        ? ((o *= Wt),
          (u *= Wt),
          (g = Math.cos(o) * l),
          (w = Math.sin(o) * l),
          (P = Math.sin(o - u) * -c),
          (S = Math.cos(o - u) * c),
          u &&
            ((h *= Wt),
            (b = Math.tan(u - h)),
            (b = Math.sqrt(1 + b * b)),
            (P *= b),
            (S *= b),
            h &&
              ((b = Math.tan(h)),
              (b = Math.sqrt(1 + b * b)),
              (g *= b),
              (w *= b))),
          (g = I(g)),
          (w = I(w)),
          (P = I(P)),
          (S = I(S)))
        : ((g = l), (S = c), (w = P = 0)),
      ((v && !~(s + "").indexOf("px")) || (T && !~(a + "").indexOf("px"))) &&
        ((v = Ot(d, "x", s, "px")), (T = Ot(d, "y", a, "px"))),
      (p || _ || m || y) &&
        ((v = I(v + p - (p * g + _ * P) + m)),
        (T = I(T + _ - (p * w + _ * S) + y))),
      (r || n) &&
        ((b = d.getBBox()),
        (v = I(v + (r / 100) * b.width)),
        (T = I(T + (n / 100) * b.height))),
      (b =
        "matrix(" + g + "," + w + "," + P + "," + S + "," + v + "," + T + ")"),
      d.setAttribute("transform", b),
      x && (d.style[F] = b);
  },
  Gn = function (t, e, i, r, n) {
    var s = 360,
      a = X(n),
      o = parseFloat(n) * (a && ~n.indexOf("rad") ? Rt : 1),
      u = o - r,
      h = r + u + "deg",
      l,
      c;
    return (
      a &&
        ((l = n.split("_")[1]),
        l === "short" && ((u %= s), u !== u % (s / 2) && (u += u < 0 ? s : -s)),
        l === "cw" && u < 0
          ? (u = ((u + s * Oi) % s) - ~~(u / s) * s)
          : l === "ccw" && u > 0 && (u = ((u - s * Oi) % s) - ~~(u / s) * s)),
      (t._pt = c = new Z(t._pt, e, i, r, u, Cn)),
      (c.e = h),
      (c.u = "deg"),
      t._props.push(i),
      c
    );
  },
  Ri = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Wn = function (t, e, i) {
    var r = Ri({}, i._gsap),
      n = "perspective,force3D,transformOrigin,svgOrigin",
      s = i.style,
      a,
      o,
      u,
      h,
      l,
      c,
      d,
      p;
    r.svg
      ? ((u = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (s[F] = e),
        (a = le(i, 1)),
        Nt(i, F),
        i.setAttribute("transform", u))
      : ((u = getComputedStyle(i)[F]), (s[F] = e), (a = le(i, 1)), (s[F] = u));
    for (o in xt)
      (u = r[o]),
        (h = a[o]),
        u !== h &&
          n.indexOf(o) < 0 &&
          ((d = G(u)),
          (p = G(h)),
          (l = d !== p ? Ot(i, o, u, p) : parseFloat(u)),
          (c = parseFloat(h)),
          (t._pt = new Z(t._pt, a, o, l, c - l, Qe)),
          (t._pt.u = p || 0),
          t._props.push(o));
    Ri(a, r);
  };
H("padding,margin,Width,Radius", function (f, t) {
  var e = "Top",
    i = "Right",
    r = "Bottom",
    n = "Left",
    s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function (a) {
      return t < 2 ? f + a : "border" + a + f;
    });
  Pe[t > 1 ? "border" + f : f] = function (a, o, u, h, l) {
    var c, d;
    if (arguments.length < 4)
      return (
        (c = s.map(function (p) {
          return gt(a, p, u);
        })),
        (d = c.join(" ")),
        d.split(c[0]).length === 5 ? c[0] : d
      );
    (c = (h + "").split(" ")),
      (d = {}),
      s.forEach(function (p, _) {
        return (d[p] = c[_] = c[_] || c[((_ - 1) / 2) | 0]);
      }),
      a.init(o, d, l);
  };
});
var Ar = {
  name: "css",
  register: Ze,
  targetTest: function (t) {
    return t.style && t.nodeType;
  },
  init: function (t, e, i, r, n) {
    var s = this._props,
      a = t.style,
      o = i.vars.startAt,
      u,
      h,
      l,
      c,
      d,
      p,
      _,
      m,
      y,
      x,
      v,
      T,
      g,
      w,
      P,
      S;
    li || Ze(),
      (this.styles = this.styles || Pr(t)),
      (S = this.styles.props),
      (this.tween = i);
    for (_ in e)
      if (_ !== "autoRound" && ((h = e[_]), !(tt[_] && cr(_, e, i, r, t, n)))) {
        if (
          ((d = typeof h),
          (p = Pe[_]),
          d === "function" && ((h = h.call(i, r, t, n)), (d = typeof h)),
          d === "string" && ~h.indexOf("random(") && (h = ue(h)),
          p)
        )
          p(this, t, _, h, i) && (P = 1);
        else if (_.substr(0, 2) === "--")
          (u = (getComputedStyle(t).getPropertyValue(_) + "").trim()),
            (h += ""),
            (Pt.lastIndex = 0),
            Pt.test(u) || ((m = G(u)), (y = G(h))),
            y ? m !== y && (u = Ot(t, _, u, y) + y) : m && (h += m),
            this.add(a, "setProperty", u, h, r, n, 0, 0, _),
            s.push(_),
            S.push(_, 0, a[_]);
        else if (d !== "undefined") {
          if (
            (o && _ in o
              ? ((u = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_]),
                X(u) && ~u.indexOf("random(") && (u = ue(u)),
                G(u + "") ||
                  u === "auto" ||
                  (u += rt.units[_] || G(gt(t, _)) || ""),
                (u + "").charAt(1) === "=" && (u = gt(t, _)))
              : (u = gt(t, _)),
            (c = parseFloat(u)),
            (x = d === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
            x && (h = h.substr(2)),
            (l = parseFloat(h)),
            _ in lt &&
              (_ === "autoAlpha" &&
                (c === 1 && gt(t, "visibility") === "hidden" && l && (c = 0),
                S.push("visibility", 0, a.visibility),
                bt(
                  this,
                  a,
                  "visibility",
                  c ? "inherit" : "hidden",
                  l ? "inherit" : "hidden",
                  !l
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = lt[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (v = _ in xt),
            v)
          ) {
            if (
              (this.styles.save(_),
              T ||
                ((g = t._gsap),
                (g.renderTransform && !e.parseTransform) ||
                  le(t, e.parseTransform),
                (w = e.smoothOrigin !== !1 && g.smooth),
                (T = this._pt =
                  new Z(this._pt, a, F, 0, 1, g.renderTransform, g, 0, -1)),
                (T.dep = 1)),
              _ === "scale")
            )
              (this._pt = new Z(
                this._pt,
                g,
                "scaleY",
                g.scaleY,
                (x ? qt(g.scaleY, x + l) : l) - g.scaleY || 0,
                Qe
              )),
                (this._pt.u = 0),
                s.push("scaleY", _),
                (_ += "X");
            else if (_ === "transformOrigin") {
              S.push(j, 0, a[j]),
                (h = Un(h)),
                g.svg
                  ? je(t, h, 0, w, 0, this)
                  : ((y = parseFloat(h.split(" ")[2]) || 0),
                    y !== g.zOrigin && bt(this, g, "zOrigin", g.zOrigin, y),
                    bt(this, a, _, Se(u), Se(h)));
              continue;
            } else if (_ === "svgOrigin") {
              je(t, h, 1, w, 0, this);
              continue;
            } else if (_ in Cr) {
              Gn(this, g, _, c, x ? qt(c, x + h) : h);
              continue;
            } else if (_ === "smoothOrigin") {
              bt(this, g, "smooth", g.smooth, h);
              continue;
            } else if (_ === "force3D") {
              g[_] = h;
              continue;
            } else if (_ === "transform") {
              Wn(this, h, t);
              continue;
            }
          } else _ in a || (_ = Zt(_) || _);
          if (v || ((l || l === 0) && (c || c === 0) && !kn.test(h) && _ in a))
            (m = (u + "").substr((c + "").length)),
              l || (l = 0),
              (y = G(h) || (_ in rt.units ? rt.units[_] : m)),
              m !== y && (c = Ot(t, _, u, y)),
              (this._pt = new Z(
                this._pt,
                v ? g : a,
                _,
                c,
                (x ? qt(c, x + l) : l) - c,
                !v && (y === "px" || _ === "zIndex") && e.autoRound !== !1
                  ? Dn
                  : Qe
              )),
              (this._pt.u = y || 0),
              m !== y && y !== "%" && ((this._pt.b = u), (this._pt.r = Mn));
          else if (_ in a) Vn.call(this, t, _, u, x ? x + h : h);
          else if (_ in t) this.add(t, _, u || t[_], x ? x + h : h, r, n);
          else if (_ !== "parseTransform") {
            ri(_, h);
            continue;
          }
          v || (_ in a ? S.push(_, 0, a[_]) : S.push(_, 1, u || t[_])),
            s.push(_);
        }
      }
    P && xr(this);
  },
  render: function (t, e) {
    if (e.tween._time || !ci())
      for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
    else e.styles.revert();
  },
  get: gt,
  aliases: lt,
  getSetter: function (t, e, i) {
    var r = lt[e];
    return (
      r && r.indexOf(",") < 0 && (e = r),
      e in xt && e !== j && (t._gsap.x || gt(t, "x"))
        ? i && Si === i
          ? e === "scale"
            ? zn
            : En
          : (Si = i || {}) && (e === "scale" ? Fn : Ln)
        : t.style && !ti(t.style[e])
        ? An
        : ~e.indexOf("-")
        ? Rn
        : hi(t, e)
    );
  },
  core: { _removeProperty: Nt, _getMatrix: pi },
};
J.utils.checkPrefix = Zt;
J.core.getStyleSaver = Pr;
(function (f, t, e, i) {
  var r = H(f + "," + t + "," + e, function (n) {
    xt[n] = 1;
  });
  H(t, function (n) {
    (rt.units[n] = "deg"), (Cr[n] = 1);
  }),
    (lt[r[13]] = f + "," + t),
    H(i, function (n) {
      var s = n.split(":");
      lt[s[1]] = r[s[0]];
    });
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"
);
H(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (f) {
    rt.units[f] = "px";
  }
);
J.registerPlugin(Ar);
var $n = J.registerPlugin(Ar) || J;
$n.core.Tween;
export { $n as g };
