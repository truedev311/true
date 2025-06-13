import {
  i as l,
  d as S,
  P as w,
  f as E,
  g as c,
  s as R,
  h as A,
  j as L,
  c as b,
  m as O,
  k as y,
  l as D,
} from "./index-client.hmWN-4Cw.js";
const N = {
  get(n, t) {
    let e = n.props.length;
    for (; e--; ) {
      let r = n.props[e];
      if ((l(r) && (r = r()), typeof r == "object" && r !== null && t in r))
        return r[t];
    }
  },
  getOwnPropertyDescriptor(n, t) {
    let e = n.props.length;
    for (; e--; ) {
      let r = n.props[e];
      if ((l(r) && (r = r()), typeof r == "object" && r !== null && t in r))
        return S(r, t);
    }
  },
  has(n, t) {
    for (let e of n.props) if ((l(e) && (e = e()), t in e)) return !0;
    return !1;
  },
  ownKeys(n) {
    const t = [];
    for (let e of n.props) {
      l(e) && (e = e());
      for (const r in e) t.includes(r) || t.push(r);
    }
    return t;
  },
};
function j(...n) {
  return new Proxy({ props: n }, N);
}
function q(n, t, e, r) {
  var I;
  var m = (e & A) !== 0,
    h = (e & L) !== 0,
    g = (e & D) !== 0,
    i = n[t],
    a = (I = S(n, t)) == null ? void 0 : I.set,
    s = r,
    o = !0,
    P = () => (g && o && ((o = !1), (s = b(r))), s);
  if (i === void 0 && r !== void 0) {
    if (a && h) throw new Error("ERR_SVELTE_BINDING_FALLBACK");
    (i = P()), a && a(i);
  }
  var p = h
    ? () => {
        var u = n[t];
        return u === void 0 ? P() : ((o = !0), u);
      }
    : () => {
        var u = n[t];
        return u !== void 0 && (s = void 0), u === void 0 ? s : u;
      };
  if (!(e & w)) return p;
  if (a)
    return function (u) {
      return arguments.length === 1 ? (a(u), u) : p();
    };
  var _ = !1,
    v = O(i),
    f = y(() => {
      var u = p(),
        d = c(v);
      return _ ? ((_ = !1), d) : (v.v = u);
    });
  return (
    m || (f.equals = E),
    function (u) {
      var d = c(f);
      return arguments.length > 0
        ? (f.equals(u) || ((_ = !0), R(v, u), c(f)), u)
        : d;
    }
  );
}
export { q as p, j as s };
