import {
  E as L,
  S as r,
  F as k,
  G as A,
  H as N,
  b as _,
  I as O,
  s as d,
  d as b,
  m,
  g as y,
  U as u,
  v as T,
  c as S,
  J as j,
  y as v,
  K,
  B as M,
  L as w,
  z as E,
  A as I,
  M as z,
  e as R,
  r as B,
} from "./index-client.hmWN-4Cw.js";
import { i as F, k as g, j as H } from "./disclose-version.DQ6zD9ir.js";
function h(e, t = !0, n) {
  if (typeof e == "object" && e != null && !L(e)) {
    if (r in e) {
      const s = e[r];
      if (s.t === e || s.p === e) return s.p;
    }
    const i = j(e);
    if (i === k || i === A) {
      const s = new Proxy(e, U);
      return (
        N(e, r, {
          value: { s: new Map(), v: _(0), a: O(e), i: t, p: s, t: e },
          writable: !0,
          enumerable: !1,
        }),
        s
      );
    }
  }
  return e;
}
function x(e, t = 1) {
  d(e, e.v + t);
}
const U = {
  defineProperty(e, t, n) {
    if (n.value) {
      const i = e[r],
        s = i.s.get(t);
      s !== void 0 && d(s, h(n.value, i.i, i.o));
    }
    return Reflect.defineProperty(e, t, n);
  },
  deleteProperty(e, t) {
    const n = e[r],
      i = n.s.get(t),
      s = n.a,
      f = delete e[t];
    if (s && f) {
      const a = n.s.get("length"),
        c = e.length - 1;
      a !== void 0 && a.v !== c && d(a, c);
    }
    return i !== void 0 && d(i, u), f && x(n.v), f;
  },
  get(e, t, n) {
    var f;
    if (t === r) return Reflect.get(e, r);
    const i = e[r];
    let s = i.s.get(t);
    if (
      (s === void 0 &&
        (!(t in e) || ((f = b(e, t)) != null && f.writable)) &&
        ((s = (i.i ? _ : m)(h(e[t], i.i, i.o))), i.s.set(t, s)),
      s !== void 0)
    ) {
      const a = y(s);
      return a === u ? void 0 : a;
    }
    return Reflect.get(e, t, n);
  },
  getOwnPropertyDescriptor(e, t) {
    const n = Reflect.getOwnPropertyDescriptor(e, t);
    if (n && "value" in n) {
      const s = e[r].s.get(t);
      s && (n.value = y(s));
    }
    return n;
  },
  has(e, t) {
    var f;
    if (t === r) return !0;
    const n = e[r],
      i = Reflect.has(e, t);
    let s = n.s.get(t);
    return (s !== void 0 ||
      (T !== null && (!i || ((f = b(e, t)) != null && f.writable)))) &&
      (s === void 0 &&
        ((s = (n.i ? _ : m)(i ? h(e[t], n.i, n.o) : u)), n.s.set(t, s)),
      y(s) === u)
      ? !1
      : i;
  },
  set(e, t, n, i) {
    const s = e[r];
    let f = s.s.get(t);
    f === void 0 && (S(() => i[t]), (f = s.s.get(t))),
      f !== void 0 && d(f, h(n, s.i, s.o));
    const a = s.a,
      c = !(t in e);
    if (a && t === "length")
      for (let o = n; o < e.length; o += 1) {
        const l = s.s.get(o + "");
        l !== void 0 && d(l, u);
      }
    if (((e[t] = n), c)) {
      if (a) {
        const o = s.s.get("length"),
          l = e.length;
        o !== void 0 && o.v !== l && d(o, l);
      }
      x(s.v);
    }
    return !0;
  },
  ownKeys(e) {
    const t = e[r];
    return y(t.v), Reflect.ownKeys(e);
  },
};
function G(e, t, n, i = null, s = !1) {
  let f = null,
    a = null,
    c = null;
  const o = v(() => {
    if (c === (c = !!t())) return;
    let l = !1;
    if (F) {
      const D = e.data === K;
      c === D && (M(H), g(!1), (l = !0));
    }
    c
      ? (f ? w(f) : (f = E(() => n(e))),
        a &&
          I(a, () => {
            a = null;
          }))
      : (a ? w(a) : i && (a = E(() => i(e))),
        f &&
          I(f, () => {
            f = null;
          })),
      l && g(!0);
  });
  s && (o.f |= z);
}
function P(e, t) {
  var i;
  var n = e && ((i = e[r]) == null ? void 0 : i.t);
  return e === t || n === t;
}
function J(e, t, n, i) {
  R(() => {
    var s, f;
    return (
      B(() => {
        (s = f),
          (f = (i == null ? void 0 : i()) || []),
          S(() => {
            e !== n(...f) && (t(e, ...f), s && P(n(...s), e) && t(null, ...s));
          });
      }),
      () => {
        R(() => {
          f && P(n(...f), e) && t(null, ...f);
        });
      }
    );
  });
}
export { J as b, G as i, h as p };
