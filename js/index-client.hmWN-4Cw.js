var Tn = Array.isArray,
  qn = Array.from,
  Un = Object.isFrozen,
  xn = Object.defineProperty,
  Yn = Object.getOwnPropertyDescriptor,
  yn = Object.getOwnPropertyDescriptors,
  Vn = Object.prototype,
  Bn = Array.prototype,
  Kn = Object.getPrototypeOf;
function zn(n) {
  return typeof n == "function";
}
const b = 2,
  j = 4,
  N = 8,
  J = 16,
  T = 32,
  z = 64,
  w = 128,
  y = 256,
  A = 512,
  k = 1024,
  F = 2048,
  P = 4096,
  nn = 8192,
  An = 16384,
  Q = Symbol("$state");
function tn(n) {
  return n === this.v;
}
function Sn(n, t) {
  return n != n
    ? t == t
    : n !== t || (n !== null && typeof n == "object") || typeof n == "function";
}
function On(n) {
  return !Sn(n, this.v);
}
const Gn = 1,
  Zn = 2,
  $n = 4,
  Qn = 8,
  Wn = 16,
  Xn = 64,
  Jn = 1,
  nt = 2,
  tt = 4,
  et = 8,
  rt = 1,
  st = 2,
  ot = 4,
  ut = 1,
  lt = 2,
  it = "[",
  In = "]",
  ft = `${In}!`,
  mn = Symbol(),
  at = ["touchstart", "touchmove", "touchend"];
function en(n) {
  return { f: 0, reactions: null, equals: tn, v: n, version: 0 };
}
function ct(n) {
  const t = en(n);
  return (t.equals = On), f && (f.d ?? (f.d = [])).push(t), t;
}
function _t(n, t) {
  var e = n.v !== mn;
  if (!I && e && v !== null && B() && v.f & b)
    throw new Error("ERR_SVELTE_UNSAFE_MUTATION");
  return (
    n.equals(t) ||
      ((n.v = t),
      n.version++,
      B() &&
        e &&
        a !== null &&
        a.f & y &&
        !(a.f & T) &&
        (_ !== null && _.includes(n)
          ? (h(a, A), Y(a))
          : O === null
          ? Fn([n])
          : O.push(n)),
      $(n, A, !0)),
    t
  );
}
function pt(n) {
  var t = document.createElement("template");
  return (t.innerHTML = n), t.content;
}
function Rn(n) {
  if (Tn(n))
    for (var t = 0; t < n.length; t++) {
      var e = n[t];
      e.isConnected && e.remove();
    }
  else n.isConnected && n.remove();
}
function Nn(n, t) {
  var e = t.last;
  e === null
    ? (t.last = t.first = n)
    : ((e.next = n), (n.prev = e), (t.last = n));
}
function M(n, t, e) {
  var r = (n & z) !== 0,
    s = {
      ctx: f,
      deps: null,
      dom: null,
      f: n | A,
      first: null,
      fn: t,
      last: null,
      next: null,
      parent: r ? null : a,
      prev: null,
      teardown: null,
      transitions: null,
    };
  if ((v !== null && !r && Nn(s, v), e)) {
    var o = L;
    try {
      W(!0), x(s), (s.f |= An);
    } finally {
      W(o);
    }
  } else Y(s);
  return s;
}
function wn(n) {
  if (a === null) throw new Error("ERR_SVELTE_ORPHAN_EFFECT");
  if (a.f & N && f !== null && !f.m) {
    const e = f;
    (e.e ?? (e.e = [])).push(n);
  } else rn(n);
}
function vt(n) {
  if (a === null) throw new Error("ERR_SVELTE_ORPHAN_EFFECT");
  return Dn(n);
}
function Et(n) {
  const t = M(z, n, !0);
  return () => {
    G(t);
  };
}
function rn(n) {
  return M(j, n, !1);
}
function Dn(n) {
  return M(N, n, !0);
}
function dt(n) {
  return M(N | J, n, !0);
}
function ht(n) {
  return M(N | T, n, !0);
}
function G(n) {
  var o;
  var t = n.dom;
  if ((t !== null && Rn(t), Z(n), U(n, 0), h(n, P), n.transitions))
    for (const u of n.transitions) u.stop();
  (o = n.teardown) == null || o.call(null);
  var e = n.parent;
  if (e !== null && n.f & T && e.first !== null) {
    var r = n.prev,
      s = n.next;
    r !== null
      ? s !== null
        ? ((r.next = s), (s.prev = r))
        : ((r.next = null), (e.last = r))
      : s !== null
      ? ((s.prev = null), (e.first = s))
      : ((e.first = null), (e.last = null));
  }
  n.next =
    n.prev =
    n.teardown =
    n.ctx =
    n.dom =
    n.deps =
    n.parent =
    n.fn =
      null;
}
function Tt(n, t) {
  var e = [];
  sn(n, e, !0),
    Cn(e, () => {
      G(n), t && t();
    });
}
function Cn(n, t) {
  var e = n.length;
  if (e > 0) {
    var r = () => --e || t();
    for (var s of n) s.out(r);
  } else t();
}
function sn(n, t, e) {
  if (!(n.f & F)) {
    if (((n.f ^= F), n.transitions !== null))
      for (const u of n.transitions) (u.is_global || e) && t.push(u);
    for (var r = n.first; r !== null; ) {
      var s = r.next,
        o = (r.f & nn) !== 0 || (r.f & T) !== 0;
      sn(r, t, o ? e : !1), (r = s);
    }
  }
}
function yt(n) {
  on(n, !0);
}
function on(n, t) {
  if (n.f & F) {
    (n.f ^= F), g(n) && x(n);
    for (var e = n.first; e !== null; ) {
      var r = e.next,
        s = (e.f & nn) !== 0 || (e.f & T) !== 0;
      on(e, s ? t : !1), (e = r);
    }
    if (n.transitions !== null)
      for (const o of n.transitions) (o.is_global || t) && o.in();
  }
}
function At(n) {
  let t = b | A;
  a === null && (t |= w);
  const e = {
    deps: null,
    deriveds: null,
    equals: tn,
    f: t,
    first: null,
    fn: n,
    last: null,
    reactions: null,
    v: null,
    version: 0,
  };
  if (v !== null && v.f & b) {
    var r = v;
    r.deriveds === null ? (r.deriveds = [e]) : r.deriveds.push(e);
  }
  return e;
}
function un(n) {
  Z(n);
  var t = n.deriveds;
  if (t !== null) {
    n.deriveds = null;
    for (var e = 0; e < t.length; e += 1) Ln(t[e]);
  }
}
function ln(n, t) {
  un(n);
  var e = an(n),
    r = (C || n.f & w) && n.deps !== null ? k : y;
  h(n, r), n.equals(e) || ((n.v = e), $(n, A, t));
}
function Ln(n) {
  un(n),
    U(n, 0),
    h(n, P),
    (n.first = n.last = n.deps = n.reactions = n.fn = null);
}
const fn = 0,
  kn = 1;
let H = fn,
  q = !1,
  L = !1;
function W(n) {
  L = n;
}
let m = [],
  R = 0,
  v = null,
  a = null,
  _ = null,
  c = 0,
  O = null;
function Fn(n) {
  O = n;
}
let I = !1,
  C = !1,
  f = null;
function B() {
  return f !== null && f.r;
}
function g(n) {
  var i;
  var t = n.f;
  if (t & A) return !0;
  if (t & k) {
    var e = n.deps,
      r = (t & w) !== 0;
    if (e !== null)
      for (var s = e.length, o = 0; o < s; o++) {
        var u = e[o];
        if (g(u) && (ln(u, !0), n.f & A)) return !0;
        var E = u.version;
        if (r) {
          if (E > n.version) return (n.version = E), !0;
          if (
            !C &&
            !((i = u == null ? void 0 : u.reactions) != null && i.includes(n))
          ) {
            var l = u.reactions;
            l === null ? (u.reactions = [n]) : l.push(n);
          }
        }
      }
    r || h(n, y);
  }
  return !1;
}
function an(n) {
  const t = _,
    e = c,
    r = O,
    s = v,
    o = C,
    u = I;
  (_ = null),
    (c = 0),
    (O = null),
    (v = n),
    (C = !L && (n.f & w) !== 0),
    (I = !1);
  try {
    let E = n.fn(),
      l = n.deps;
    if (_ !== null) {
      let i;
      if (l !== null) {
        const p = l.length,
          d = c === 0 ? _ : l.slice(0, c).concat(_),
          D = d.length > 16 && p - c > 1 ? new Set(d) : null;
        for (i = c; i < p; i++) {
          const S = l[i];
          (D !== null ? !D.has(S) : !d.includes(S)) && cn(n, S);
        }
      }
      if (l !== null && c > 0)
        for (l.length = c + _.length, i = 0; i < _.length; i++) l[c + i] = _[i];
      else n.deps = l = _;
      if (!C)
        for (i = c; i < l.length; i++) {
          const p = l[i],
            d = p.reactions;
          d === null ? (p.reactions = [n]) : d[d.length - 1] !== n && d.push(n);
        }
    } else l !== null && c < l.length && (U(n, c), (l.length = c));
    return E;
  } finally {
    (_ = t), (c = e), (O = r), (v = s), (C = o), (I = u);
  }
}
function cn(n, t) {
  const e = t.reactions;
  let r = 0;
  if (e !== null) {
    r = e.length - 1;
    const s = e.indexOf(n);
    s !== -1 && (r === 0 ? (t.reactions = null) : ((e[s] = e[r]), e.pop()));
  }
  r === 0 && t.f & w && (h(t, A), U(t, 0));
}
function U(n, t) {
  const e = n.deps;
  if (e !== null) {
    const r = t === 0 ? null : e.slice(0, t);
    let s;
    for (s = t; s < e.length; s++) {
      const o = e[s];
      (r === null || !r.includes(o)) && cn(n, o);
    }
  }
}
function Z(n) {
  let t = n.first;
  (n.first = null), (n.last = null);
  for (var e; t !== null; ) (e = t.next), G(t), (t = e);
}
function x(n) {
  var u;
  var t = n.f;
  if (!(t & P)) {
    h(n, y);
    var e = n.ctx,
      r = a,
      s = f;
    (a = n), (f = e);
    try {
      t & J || Z(n), (u = n.teardown) == null || u.call(null);
      var o = an(n);
      n.teardown = typeof o == "function" ? o : null;
    } finally {
      (a = r), (f = s);
    }
  }
}
function _n() {
  if (R > 1e3) throw ((R = 0), new Error("ERR_SVELTE_TOO_MANY_UPDATES"));
  R++;
}
function pn(n) {
  for (var t = 0; t < n.length; t++) {
    var e = n[t];
    En(e, N | j);
  }
}
function X(n) {
  var t = n.length;
  if (t !== 0) {
    _n();
    for (var e = 0; e < t; e++) {
      var r = n[e];
      !(r.f & (P | F)) && g(r) && x(r);
    }
  }
}
function Pn() {
  if (((q = !1), R > 101)) return;
  const n = m;
  (m = []), pn(n), q || (R = 0);
}
function Y(n) {
  H === fn && (q || ((q = !0), queueMicrotask(Pn)));
  for (var t = n; t.parent !== null; ) {
    t = t.parent;
    var e = t.f;
    if (e & T) {
      if (!(e & y)) return;
      h(t, k);
    }
  }
  m.push(t);
}
function vn(n, t, e, r) {
  var s = n.first,
    o = [];
  n: for (; s !== null; ) {
    var u = s.f,
      E = (u & (P | F)) === 0,
      l = u & T,
      i = (u & y) !== 0,
      p = s.first;
    if (E && (!l || !i)) {
      if ((l && h(s, y), u & N)) {
        if (l) {
          if (!e && p !== null) {
            s = p;
            continue;
          }
        } else if ((g(s) && (x(s), (p = s.first)), !e && p !== null)) {
          s = p;
          continue;
        }
      } else if (u & j)
        if (l || i) {
          if (!e && p !== null) {
            s = p;
            continue;
          }
        } else o.push(s);
    }
    var d = s.next;
    if (d === null) {
      let S = s.parent;
      for (; S !== null; ) {
        if (n === S) break n;
        var V = S.next;
        if (V !== null) {
          s = V;
          continue n;
        }
        S = S.parent;
      }
    }
    s = d;
  }
  if (o.length > 0 && (t & j && r.push(...o), !e))
    for (var D = 0; D < o.length; D++) vn(o[D], t, !1, r);
}
function En(n, t, e = !1) {
  var r = [],
    s = L;
  L = !0;
  try {
    n.first === null && !(n.f & T) ? X([n]) : (vn(n, t, e, r), X(r));
  } finally {
    L = s;
  }
}
function St(n) {
  (R = 0), En(n, N, !0);
}
function dn(n, t = !0) {
  var e = H,
    r = m;
  try {
    _n();
    const o = [];
    (H = kn), (m = o), t && pn(r);
    var s = n == null ? void 0 : n();
    return (m.length > 0 || o.length > 0) && dn(), (R = 0), s;
  } finally {
    (H = e), (m = r);
  }
}
async function Ot() {
  await Promise.resolve(), dn();
}
function bn(n) {
  const t = n.f;
  if (t & P) return n.v;
  if (v !== null && !(v.f & (T | z)) && !I) {
    const e = (v.f & w) !== 0,
      r = v.deps;
    _ === null && r !== null && r[c] === n && !(e && a !== null)
      ? c++
      : (r === null || c === 0 || r[c - 1] !== n) &&
        (_ === null ? (_ = [n]) : _.push(n)),
      O !== null &&
        a !== null &&
        a.f & y &&
        !(a.f & T) &&
        O.includes(n) &&
        (h(a, A), Y(a));
  }
  return t & b && g(n) && ln(n, !1), n.v;
}
function $(n, t, e) {
  var r = n.reactions;
  if (r !== null)
    for (var s = B(), o = r.length, u = 0; u < o; u++) {
      var E = r[u];
      if (!((!e || !s) && E === a)) {
        var l = E.f;
        h(E, t);
        var i = (l & k) !== 0,
          p = (l & w) !== 0;
        (l & y || (i && p)) && (E.f & b ? $(E, k, e) : Y(E));
      }
    }
}
function hn(n) {
  const t = I;
  try {
    return (I = !0), n();
  } finally {
    I = t;
  }
}
const Mn = ~(A | k | y);
function h(n, t) {
  n.f = (n.f & Mn) | t;
}
function gn(n) {
  return typeof n == "object" && n !== null && typeof n.f == "number";
}
function It(n, t = !1, e) {
  f = {
    x: null,
    c: null,
    e: null,
    m: !1,
    p: f,
    d: null,
    s: n,
    r: t,
    l1: [],
    l2: en(!1),
    u: null,
  };
}
function mt(n) {
  const t = f;
  if (t !== null) {
    n !== void 0 && (t.x = n);
    const e = t.e;
    if (e !== null) {
      t.e = null;
      for (let r = 0; r < e.length; r++) rn(e[r]);
    }
    (f = t.p), (t.m = !0);
  }
  return n || {};
}
function Rt(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (Q in n) K(n);
    else if (!Array.isArray(n))
      for (let t in n) {
        const e = n[t];
        typeof e == "object" && e && Q in e && K(e);
      }
  }
}
function K(n, t = new Set()) {
  if (
    typeof n == "object" &&
    n !== null &&
    !(n instanceof EventTarget) &&
    !t.has(n)
  ) {
    t.add(n);
    for (let r in n)
      try {
        K(n[r], t);
      } catch {}
    const e = Object.getPrototypeOf(n);
    if (
      e !== Object.prototype &&
      e !== Array.prototype &&
      e !== Map.prototype &&
      e !== Set.prototype &&
      e !== Date.prototype
    ) {
      const r = yn(e);
      for (let s in r) {
        const o = r[s].get;
        if (o)
          try {
            o.call(n);
          } catch {}
      }
    }
  }
}
function Nt(n) {
  return gn(n) ? bn(n) : n;
}
function Hn(n) {
  if (f === null)
    throw new Error(
      "onMount can only be used during component initialisation."
    );
  f.r
    ? wn(() => {
        const t = hn(n);
        if (typeof t == "function") return t;
      })
    : jn(f).m.push(n);
}
function wt(n) {
  if (f === null)
    throw new Error(
      "onDestroy can only be used during component initialisation."
    );
  Hn(() => () => hn(n));
}
function jn(n) {
  return n.u ?? (n.u = { a: [], b: [], m: [] });
}
export {
  An as $,
  Tt as A,
  Rn as B,
  y as C,
  pt as D,
  Un as E,
  Vn as F,
  Bn as G,
  xn as H,
  Tn as I,
  Kn as J,
  ft as K,
  yt as L,
  nn as M,
  Ot as N,
  it as O,
  tt as P,
  In as Q,
  dn as R,
  Q as S,
  qn as T,
  mn as U,
  Et as V,
  at as W,
  ut as X,
  lt as Y,
  wt as Z,
  Sn as _,
  It as a,
  rt as a0,
  ot as a1,
  st as a2,
  Gn as a3,
  Zn as a4,
  Xn as a5,
  sn as a6,
  Cn as a7,
  G as a8,
  Qn as a9,
  Wn as aa,
  $n as ab,
  en as b,
  hn as c,
  Yn as d,
  rn as e,
  On as f,
  bn as g,
  Jn as h,
  zn as i,
  nt as j,
  At as k,
  et as l,
  ct as m,
  vt as n,
  Hn as o,
  mt as p,
  wn as q,
  Dn as r,
  _t as s,
  f as t,
  Nt as u,
  a as v,
  St as w,
  Rt as x,
  dt as y,
  ht as z,
};
