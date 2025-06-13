import {
  O as N,
  Q as W,
  d as E,
  H as R,
  I as j,
  r as q,
  y as z,
  R as D,
  T as F,
  V as G,
  W as L,
  z as Q,
  a as X,
  p as J,
  t as K,
  v as Z,
  D as ee,
  X as I,
  Y as te,
} from "./index-client.hmWN-4Cw.js";
let c = !1;
function x(t) {
  c = t;
}
let u = null;
function M(t) {
  u = t;
}
function w(t) {
  if (t.nodeType !== 8) return t;
  var e = t;
  if ((e == null ? void 0 : e.data) !== N) return t;
  for (var n = [], r = 0; (e = e.nextSibling) !== null; ) {
    if (e.nodeType === 8) {
      var o = e.data;
      if (o === N) r += 1;
      else if (o[0] === W) {
        if (r === 0) return (u = n), e;
        r -= 1;
      }
    }
    n.push(e);
  }
  throw new Error("Expected a closing hydration marker");
}
var _, b, V, k, O, P, H, Y, ne;
function re() {
  _ === void 0 &&
    ((_ = Node.prototype),
    (b = Element.prototype),
    (V = Text.prototype),
    _.appendChild,
    (k = _.cloneNode),
    (ne = document),
    (b.__click = void 0),
    (V.__nodeValue = " "),
    (b.__className = ""),
    (b.__attributes = null),
    (O = E(_, "firstChild").get),
    (P = E(_, "nextSibling").get),
    (H = E(_, "textContent").set),
    (Y = E(b, "className").set));
}
function ae(t, e) {
  return k.call(t, e);
}
function h() {
  return document.createTextNode("");
}
function le(t) {
  const e = O.call(t);
  return c ? (e === null ? t.appendChild(h()) : w(e)) : e;
}
function _e(t, e) {
  if (!c) return O.call(t);
  const n = t[0];
  if (e && (n == null ? void 0 : n.nodeType) !== 3) {
    const r = h();
    return u.unshift(r), n == null || n.before(r), r;
  }
  return w(n);
}
function he(t, e = !1) {
  const n = P.call(t);
  if (!c) return n;
  if (e && (n == null ? void 0 : n.nodeType) !== 3) {
    const r = h();
    if (n) {
      const o = u.indexOf(n);
      u.splice(o, 0, r), n.before(r);
    } else u.push(r);
    return r;
  }
  return w(n);
}
function pe(t, e) {
  Y.call(t, e);
}
function oe(t) {
  H.call(t, "");
}
function ve(t, e, n, r, o) {
  var a = { capture: r, passive: o };
  function f(i) {
    if ((r || S(e, i), !i.cancelBubble)) return n.call(this, i);
  }
  e.addEventListener(t, f, a),
    (e === document.body || e === window || e === document) &&
      q(() => () => {
        e.removeEventListener(t, f, a);
      });
}
function ye(t) {
  for (var e = 0; e < t.length; e++) $.add(t[e]);
  for (var n of C) n(t);
}
function S(t, e) {
  var d;
  var n = t.ownerDocument,
    r = e.type,
    o = ((d = e.composedPath) == null ? void 0 : d.call(e)) || [],
    a = o[0] || e.target;
  e.target !== a && R(e, "target", { configurable: !0, value: a });
  var f = 0,
    i = e.__root;
  if (i) {
    var p = o.indexOf(i);
    if (p !== -1 && (t === document || t === window)) {
      e.__root = t;
      return;
    }
    var T = o.indexOf(t);
    if (T === -1) return;
    p <= T && (f = p + 1);
  }
  for (
    a = o[f] || e.target,
      R(e, "currentTarget", {
        configurable: !0,
        get() {
          return a || n;
        },
      });
    a !== null;

  ) {
    var v = a.parentNode || a.host || null,
      g = "__" + r,
      y = a[g];
    if (y !== void 0 && !a.disabled)
      if (j(y)) {
        var [l, ...m] = y;
        l.apply(a, [e, ...m]);
      } else y.call(a, e);
    if (e.cancelBubble || v === t || a === t) break;
    a = v;
  }
  (e.__root = t), (a = t);
}
let s;
function ie() {
  s = void 0;
}
function ge(t) {
  let e = null,
    n = c;
  var r;
  if (c) {
    for (
      e = u, s === void 0 && (s = document.head.firstChild);
      s.nodeType !== 8 || s.data !== N;

    )
      s = s.nextSibling;
    (s = w(s)), (s = s.nextSibling);
  } else r = document.head.appendChild(h());
  try {
    z(() => t(r));
  } finally {
    n && M(e);
  }
}
const $ = new Set(),
  C = new Set();
let A = !0;
function me(t, e) {
  const n = t.__nodeValue,
    r = se(e);
  c && t.nodeValue === r
    ? (t.__nodeValue = r)
    : n !== r && ((t.nodeValue = r), (t.__nodeValue = r));
}
function se(t) {
  return typeof t == "string" ? t : t == null ? "" : t + "";
}
function ue(t, e) {
  const n = e.anchor ?? e.target.appendChild(h());
  return D(() => B(t, { ...e, anchor: n }), !1);
}
function be(t, e) {
  const n = e.target,
    r = u;
  let o = !1;
  try {
    return D(() => {
      x(!0);
      for (var a = n.firstChild; a && (a.nodeType !== 8 || a.data !== N); )
        a = a.nextSibling;
      if (!a) throw new Error("Missing hydration marker");
      const f = w(a),
        i = B(t, { ...e, anchor: f });
      return x(!1), (o = !0), i;
    }, !1);
  } catch (a) {
    if (!o && e.recover !== !1)
      return (
        console.error("ERR_SVELTE_HYDRATION_MISMATCH", a),
        oe(n),
        x(!1),
        ue(t, e)
      );
    throw a;
  } finally {
    x(!!r), M(r), ie();
  }
}
function B(
  t,
  { target: e, anchor: n, props: r = {}, events: o, context: a, intro: f = !1 }
) {
  re();
  const i = new Set(),
    p = S.bind(null, e),
    T = S.bind(null, document),
    v = (l) => {
      for (let m = 0; m < l.length; m++) {
        const d = l[m];
        i.has(d) ||
          (i.add(d),
          e.addEventListener(d, p, L.includes(d) ? { passive: !0 } : void 0),
          document.addEventListener(
            d,
            T,
            L.includes(d) ? { passive: !0 } : void 0
          ));
      }
    };
  v(F($)), C.add(v);
  let g;
  const y = G(
    () => (
      Q(() => {
        if (a) {
          X({});
          var l = K;
          l.c = a;
        }
        o && (r.$$events = o), (A = f), (g = t(n, r) || {}), (A = !0), a && J();
      }),
      () => {
        for (const l of i) e.removeEventListener(l, p);
        C.delete(v);
      }
    )
  );
  return U.set(g, y), g;
}
let U = new WeakMap();
function we(t) {
  const e = U.get(t);
  e == null || e();
}
function ce(t, e) {
  var n = (e & I) !== 0,
    r = (e & te) !== 0,
    o;
  return () =>
    c
      ? n
        ? u
        : u[0]
      : (o || ((o = ee(t)), n || (o = o.firstChild)),
        r ? document.importNode(o, !0) : ae(o, !0));
}
function Te(t) {
  if (!c) return h();
  var e = u[0];
  return e || t.before((e = h())), e;
}
const Ee = ce("<!>", I);
function xe(t, e) {
  var n = e;
  if (!c) {
    var r = e;
    r.nodeType === 11 && (n = [...r.childNodes]), t.before(r);
  }
  Z.dom = n;
}
const fe = "5";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(fe);
export {
  ne as $,
  xe as a,
  he as b,
  le as c,
  ye as d,
  se as e,
  _e as f,
  Ee as g,
  ve as h,
  c as i,
  u as j,
  x as k,
  be as l,
  ue as m,
  Te as n,
  ge as o,
  A as p,
  w as q,
  h as r,
  me as s,
  ce as t,
  we as u,
  pe as v,
};
