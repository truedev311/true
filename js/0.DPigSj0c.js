var Qo = Object.defineProperty;
var el = (i, e, t) =>
  e in i
    ? Qo(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (i[e] = t);
var Pr = (i, e, t) => (el(i, typeof e != "symbol" ? e + "" : e, t), t),
  tl = (i, e, t) => {
    if (!e.has(i)) throw TypeError("Cannot " + t);
  };
var Lr = (i, e, t) => (
    tl(i, e, "read from private field"), t ? t.call(i) : e.get(i)
  ),
  Bs = (i, e, t) => {
    if (e.has(i))
      throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(i) : e.set(i, t);
  };
import {
  p as nl,
  a as xt,
  t as Ft,
  c as ye,
  d as lo,
  e as wn,
  s as il,
  f as di,
  b as Me,
  g as fs,
  h as rl,
} from "./disclose-version.DQ6zD9ir.js";
import {
  y as sl,
  _ as al,
  A as ol,
  z as ll,
  U as cl,
  $ as ul,
  e as co,
  c as uo,
  a0 as dl,
  a1 as hl,
  v as fl,
  i as pl,
  a2 as ml,
  a as kn,
  o as Wn,
  g as Re,
  p as Xn,
  b as mt,
  s as ct,
  Z as _l,
  q as ho,
  r as Vn,
  k as Ur,
} from "./index-client.hmWN-4Cw.js";
import { b as kt, p as Et, i as Li } from "./this.BnIkoQJo.js";
import {
  P as Ts,
  j as vt,
  s as it,
  a as Ct,
  w as hi,
  l as Ht,
  n as gl,
  o as vl,
  b as Rn,
  t as Pi,
  d as gt,
  h as xl,
  H as Ml,
  c as ps,
  p as Sl,
  L as yl,
  k as El,
  q as Tl,
  u as Al,
  f as bl,
} from "./isHover.C_Gi8ajW.js";
import {
  n as dr,
  c as wl,
  e as Rl,
  f as Cl,
  p as Pl,
} from "./entry.B8zhSzpe.js";
import { u as As, s as bs } from "./store.XiFg35UT.js";
import { g as Dr } from "./index.ZORhgBxb.js";
import {
  b as Ll,
  s as Ul,
  e as Hs,
  S as Vs,
  l as Dl,
  a as Il,
  p as Nl,
  r as Fl,
} from "../chunks/index.CUyvS_rG.js";
import { p as fr } from "../chunks/stores.DDfPBFEx.js";
function Ol(i, e, t) {
  let n = cl,
    r;
  sl(() => {
    al(n, (n = e())) && (r && ol(r), (r = ll(() => t(i))));
  });
}
const fo = typeof window < "u",
  zl = fo ? requestAnimationFrame : dr,
  Bl = fo ? () => performance.now() : () => Date.now(),
  ln = { tick: (i) => zl(i), now: () => Bl(), tasks: new Set() };
function po(i) {
  ln.tasks.forEach((e) => {
    e.c(i) || (ln.tasks.delete(e), e.f());
  }),
    ln.tasks.size !== 0 && ln.tick(po);
}
function Hl(i) {
  let e;
  return (
    ln.tasks.size === 0 && ln.tick(po),
    {
      promise: new Promise((t) => {
        ln.tasks.add((e = { c: i, f: t }));
      }),
      abort() {
        ln.tasks.delete(e);
      },
    }
  );
}
function Vl(i, e, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(i, t, n, e), r;
}
function Vi(i, e) {
  i.dispatchEvent(Vl(e));
}
function Gl(i) {
  const e = i.split("-");
  return e.length === 1
    ? e[0]
    : e[0] +
        e
          .slice(1)
          .map((t) => t[0].toUpperCase() + t.slice(1))
          .join("");
}
function kl(i) {
  const e = {},
    t = i.split(";");
  for (const n of t) {
    const [r, s] = n.split(":");
    if (!r || s === void 0) break;
    const a = Gl(r.trim());
    e[a] = s.trim();
  }
  return e;
}
const Wl = (i) => i;
function Gs(i, e, t, n) {
  var r = (i & dl) !== 0,
    s = (i & ml) !== 0,
    a = (i & hl) !== 0,
    o = r && s ? "both" : r ? "in" : "out",
    l,
    c = e.inert,
    d,
    f,
    p;
  function m() {
    return l ?? (l = t()(e, n == null ? void 0 : n(), { direction: o }));
  }
  var x = {
      is_global: a,
      in() {
        (e.inert = c),
          r
            ? (Vi(e, "introstart"),
              (d = ms(e, m(), f, 1, () => {
                Vi(e, "introend"), (d = l = void 0);
              })))
            : (f == null || f.abort(), p == null || p());
      },
      out(u) {
        s
          ? ((e.inert = !0),
            Vi(e, "outrostart"),
            (f = ms(e, m(), d, 0, () => {
              Vi(e, "outroend"), (f = l = void 0), u == null || u();
            })),
            (p = f.reset))
          : u == null || u();
      },
      stop: () => {
        d == null || d.abort(), f == null || f.abort();
      },
    },
    v = fl;
  if (((v.transitions ?? (v.transitions = [])).push(x), r && nl)) {
    var h = v.parent;
    (a || h.f & ul) &&
      co(() => {
        uo(() => x.in());
      });
  }
}
function ms(i, e, t, n, r) {
  if (pl(e)) {
    var s;
    return (
      co(() => {
        var w = uo(() => e({ direction: n === 1 ? "in" : "out" }));
        s = ms(i, w, t, n, r);
      }),
      {
        abort: () => s.abort(),
        deactivate: () => s.deactivate(),
        reset: () => s.reset(),
        t: (w) => s.t(w),
      }
    );
  }
  if ((t == null || t.deactivate(), !(e != null && e.duration)))
    return (
      r == null || r(), { abort: dr, deactivate: dr, reset: dr, t: () => n }
    );
  var { delay: a = 0, duration: o, css: l, tick: c, easing: d = Wl } = e,
    f = ln.now() + a,
    p = (t == null ? void 0 : t.t(f)) ?? 1 - n,
    m = n - p;
  o *= Math.abs(m);
  var x = f + o,
    v,
    h;
  if (l) {
    for (var u = [], A = o / 16.666666666666668, M = 0; M <= A; M += 1) {
      var b = p + m * d(M / A),
        D = l(b, 1 - b);
      u.push(kl(D));
    }
    (v = i.animate(u, {
      delay: a,
      duration: o,
      easing: "linear",
      fill: "forwards",
    })),
      v.finished
        .then(() => {
          r == null || r();
        })
        .catch((w) => {
          if (v.startTime !== null && v.currentTime !== null) throw w;
        });
  } else
    p === 0 && (c == null || c(0, 1)),
      (h = Hl((w) => {
        if (w >= x) return c == null || c(n, 1 - n), r == null || r(), !1;
        if (w >= f) {
          var R = p + m * d((w - f) / o);
          c == null || c(R, 1 - R);
        }
        return !0;
      }));
  return {
    abort: () => {
      v == null || v.cancel(), h == null || h.abort();
    },
    deactivate: () => {
      r = void 0;
    },
    reset: () => {
      n === 0 && (c == null || c(1, 0));
    },
    t: (w) => {
      var R = p + m * d((w - f) / o);
      return Math.min(1, Math.max(0, R));
    },
  };
}
const Xl = !0,
  ql = "always",
  Yl = ({ url: i }) => {
    const { pathname: e } = i;
    return { pathname: e };
  },
  o_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, load: Yl, prerender: Xl, trailingSlash: ql },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
function Kl(i) {
  return Ll(i), { duration: Ts };
}
function jl(i) {
  return {
    duration: document.body.classList.contains("is-page-transitioning")
      ? Ts
      : 0,
  };
}
var Zl = Ft(
  '<div class="pointer-events-none fixed inset-x-0 top-0 z-50 h-lvh origin-top translate-y-full"><div class="absolute inset-0 origin-top bg-[#303e49]"></div></div>'
);
function $l(i, e) {
  kn(e, !0);
  let t = mt(void 0),
    n = mt(void 0);
  Wn(() => {
    vt.setEl("pageTransitionLayer", Re(t)),
      vt.setEl("pageTransitionInnerLayer", Re(n));
  });
  var r = Zl();
  kt(
    r,
    (a) => ct(t, Et(a)),
    () => Re(t)
  );
  var s = ye(r);
  kt(
    s,
    (a) => ct(n, Et(a)),
    () => Re(n)
  ),
    xt(i, r),
    Xn();
}
var Jl = Ft(
  '<div class="sr-only pointer-events-none"><div id="screen-size" class="fixed inset-x-0 top-0 h-lvh"></div></div>'
);
function Ql(i, e) {
  kn(e, !0);
  let t = mt(void 0),
    n;
  Wn(() => {
    (it.size = { width: Re(t).clientWidth, height: Re(t).clientHeight }),
      (n = new ResizeObserver((a) => {
        for (let o of a) {
          const { width: l, height: c } = o.contentRect;
          it.size = { width: l, height: c };
        }
      })),
      n.observe(Re(t));
  }),
    _l(() => {
      n == null || n.disconnect();
    });
  var r = Jl(),
    s = ye(r);
  kt(
    s,
    (a) => ct(t, Et(a)),
    () => Re(t)
  ),
    xt(i, r),
    Xn();
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const ws = "163",
  ec = 0,
  ks = 1,
  tc = 2,
  mo = 1,
  nc = 2,
  an = 3,
  En = 0,
  Tt = 1,
  on = 2,
  Mn = 0,
  fi = 1,
  Ws = 2,
  Xs = 3,
  qs = 4,
  ic = 5,
  On = 100,
  rc = 101,
  sc = 102,
  ac = 103,
  oc = 104,
  lc = 200,
  cc = 201,
  uc = 202,
  dc = 203,
  _s = 204,
  gs = 205,
  hc = 206,
  fc = 207,
  pc = 208,
  mc = 209,
  _c = 210,
  gc = 211,
  vc = 212,
  xc = 213,
  Mc = 214,
  Sc = 0,
  yc = 1,
  Ec = 2,
  pr = 3,
  Tc = 4,
  Ac = 5,
  bc = 6,
  wc = 7,
  _o = 0,
  Rc = 1,
  Cc = 2,
  Sn = 0,
  Pc = 1,
  Lc = 2,
  Uc = 3,
  Dc = 4,
  Ic = 5,
  Nc = 6,
  Fc = 7,
  go = 300,
  _i = 301,
  gi = 302,
  vs = 303,
  xs = 304,
  Sr = 306,
  Ms = 1e3,
  Bn = 1001,
  Ss = 1002,
  It = 1003,
  Oc = 1004,
  Gi = 1005,
  Vt = 1006,
  Ir = 1007,
  Hn = 1008,
  yn = 1009,
  zc = 1010,
  Bc = 1011,
  vo = 1012,
  xo = 1013,
  vi = 1014,
  Zt = 1015,
  mr = 1016,
  Mo = 1017,
  So = 1018,
  Ii = 1020,
  Hc = 35902,
  Vc = 1021,
  Gc = 1022,
  Nt = 1023,
  kc = 1024,
  Wc = 1025,
  pi = 1026,
  Ui = 1027,
  Xc = 1028,
  yo = 1029,
  qc = 1030,
  Eo = 1031,
  To = 1033,
  Nr = 33776,
  Fr = 33777,
  Or = 33778,
  zr = 33779,
  Ys = 35840,
  Ks = 35841,
  js = 35842,
  Zs = 35843,
  Ao = 36196,
  $s = 37492,
  Js = 37496,
  Qs = 37808,
  ea = 37809,
  ta = 37810,
  na = 37811,
  ia = 37812,
  ra = 37813,
  sa = 37814,
  aa = 37815,
  oa = 37816,
  la = 37817,
  ca = 37818,
  ua = 37819,
  da = 37820,
  ha = 37821,
  Br = 36492,
  fa = 36494,
  pa = 36495,
  Yc = 36283,
  ma = 36284,
  _a = 36285,
  ga = 36286,
  Kc = 3200,
  jc = 3201,
  Zc = 0,
  $c = 1,
  xn = "",
  Yt = "srgb",
  Tn = "srgb-linear",
  Rs = "display-p3",
  yr = "display-p3-linear",
  _r = "linear",
  je = "srgb",
  gr = "rec709",
  vr = "p3",
  Yn = 7680,
  va = 519,
  Jc = 512,
  Qc = 513,
  eu = 514,
  bo = 515,
  tu = 516,
  nu = 517,
  iu = 518,
  ru = 519,
  xa = 35044,
  Ma = "300 es",
  cn = 2e3,
  xr = 2001;
class Mi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const ft = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  Hr = Math.PI / 180,
  ys = 180 / Math.PI;
function Ni() {
  const i = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    ft[i & 255] +
    ft[(i >> 8) & 255] +
    ft[(i >> 16) & 255] +
    ft[(i >> 24) & 255] +
    "-" +
    ft[e & 255] +
    ft[(e >> 8) & 255] +
    "-" +
    ft[((e >> 16) & 15) | 64] +
    ft[(e >> 24) & 255] +
    "-" +
    ft[(t & 63) | 128] +
    ft[(t >> 8) & 255] +
    "-" +
    ft[(t >> 16) & 255] +
    ft[(t >> 24) & 255] +
    ft[n & 255] +
    ft[(n >> 8) & 255] +
    ft[(n >> 16) & 255] +
    ft[(n >> 24) & 255]
  ).toLowerCase();
}
function yt(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function su(i, e) {
  return ((i % e) + e) % e;
}
function Vr(i, e, t) {
  return (1 - t) * i + t * e;
}
function Ti(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Mt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ve {
  constructor(e = 0, t = 0) {
    (Ve.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6]),
      (this.y = r[1] * t + r[4] * n + r[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * n - a * r + e.x), (this.y = s * r + a * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ie {
  constructor(e, t, n, r, s, a, o, l, c) {
    (Ie.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[1] = r),
      (d[2] = o),
      (d[3] = t),
      (d[4] = s),
      (d[5] = l),
      (d[6] = n),
      (d[7] = a),
      (d[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      d = n[4],
      f = n[7],
      p = n[2],
      m = n[5],
      x = n[8],
      v = r[0],
      h = r[3],
      u = r[6],
      A = r[1],
      M = r[4],
      b = r[7],
      D = r[2],
      w = r[5],
      R = r[8];
    return (
      (s[0] = a * v + o * A + l * D),
      (s[3] = a * h + o * M + l * w),
      (s[6] = a * u + o * b + l * R),
      (s[1] = c * v + d * A + f * D),
      (s[4] = c * h + d * M + f * w),
      (s[7] = c * u + d * b + f * R),
      (s[2] = p * v + m * A + x * D),
      (s[5] = p * h + m * M + x * w),
      (s[8] = p * u + m * b + x * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      d = e[8];
    return (
      t * a * d - t * o * c - n * s * d + n * o * l + r * s * c - r * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      d = e[8],
      f = d * a - o * c,
      p = o * l - d * s,
      m = c * s - a * l,
      x = t * f + n * p + r * m;
    if (x === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const v = 1 / x;
    return (
      (e[0] = f * v),
      (e[1] = (r * c - d * n) * v),
      (e[2] = (o * n - r * a) * v),
      (e[3] = p * v),
      (e[4] = (d * t - r * l) * v),
      (e[5] = (r * s - o * t) * v),
      (e[6] = m * v),
      (e[7] = (n * l - c * t) * v),
      (e[8] = (a * t - n * s) * v),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -r * c,
        r * l,
        -r * (-c * a + l * o) + o + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(Gr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Gr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Gr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Gr = new Ie();
function wo(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return !0;
  return !1;
}
function Mr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function au() {
  const i = Mr("canvas");
  return (i.style.display = "block"), i;
}
const Sa = {};
function ou(i) {
  i in Sa || ((Sa[i] = !0), console.warn(i));
}
const ya = new Ie().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199
  ),
  Ea = new Ie().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735
  ),
  ki = {
    [Tn]: {
      transfer: _r,
      primaries: gr,
      toReference: (i) => i,
      fromReference: (i) => i,
    },
    [Yt]: {
      transfer: je,
      primaries: gr,
      toReference: (i) => i.convertSRGBToLinear(),
      fromReference: (i) => i.convertLinearToSRGB(),
    },
    [yr]: {
      transfer: _r,
      primaries: vr,
      toReference: (i) => i.applyMatrix3(Ea),
      fromReference: (i) => i.applyMatrix3(ya),
    },
    [Rs]: {
      transfer: je,
      primaries: vr,
      toReference: (i) => i.convertSRGBToLinear().applyMatrix3(Ea),
      fromReference: (i) => i.applyMatrix3(ya).convertLinearToSRGB(),
    },
  },
  lu = new Set([Tn, yr]),
  We = {
    enabled: !0,
    _workingColorSpace: Tn,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(i) {
      if (!lu.has(i))
        throw new Error(`Unsupported working color space, "${i}".`);
      this._workingColorSpace = i;
    },
    convert: function (i, e, t) {
      if (this.enabled === !1 || e === t || !e || !t) return i;
      const n = ki[e].toReference,
        r = ki[t].fromReference;
      return r(n(i));
    },
    fromWorkingColorSpace: function (i, e) {
      return this.convert(i, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (i, e) {
      return this.convert(i, e, this._workingColorSpace);
    },
    getPrimaries: function (i) {
      return ki[i].primaries;
    },
    getTransfer: function (i) {
      return i === xn ? _r : ki[i].transfer;
    },
  };
function mi(i) {
  return i < 0.04045
    ? i * 0.0773993808
    : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function kr(i) {
  return i < 0.0031308 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Kn;
class cu {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Kn === void 0 && (Kn = Mr("canvas")),
        (Kn.width = e.width),
        (Kn.height = e.height);
      const n = Kn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Kn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Mr("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = mi(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(mi(t[n] / 255) * 255))
          : (t[n] = mi(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
let uu = 0;
class Ro {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, "id", { value: uu++ }),
      (this.uuid = Ni()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Wr(r[a].image)) : s.push(Wr(r[a]));
      } else s = Wr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Wr(i) {
  return (typeof HTMLImageElement < "u" && i instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && i instanceof ImageBitmap)
    ? cu.getDataURL(i)
    : i.data
    ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let du = 0;
class At extends Mi {
  constructor(
    e = At.DEFAULT_IMAGE,
    t = At.DEFAULT_MAPPING,
    n = Bn,
    r = Bn,
    s = Vt,
    a = Hn,
    o = Nt,
    l = yn,
    c = At.DEFAULT_ANISOTROPY,
    d = xn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: du++ }),
      (this.uuid = Ni()),
      (this.name = ""),
      (this.source = new Ro(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Ve(0, 0)),
      (this.repeat = new Ve(1, 1)),
      (this.center = new Ve(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ie()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = d),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.pmremVersion = 0);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== go) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Ms:
          e.x = e.x - Math.floor(e.x);
          break;
        case Bn:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Ms:
          e.y = e.y - Math.floor(e.y);
          break;
        case Bn:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Ss:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
At.DEFAULT_IMAGE = null;
At.DEFAULT_MAPPING = go;
At.DEFAULT_ANISOTROPY = 1;
class ut {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (ut.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s),
      (this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s),
      (this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s),
      (this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements,
      c = l[0],
      d = l[4],
      f = l[8],
      p = l[1],
      m = l[5],
      x = l[9],
      v = l[2],
      h = l[6],
      u = l[10];
    if (
      Math.abs(d - p) < 0.01 &&
      Math.abs(f - v) < 0.01 &&
      Math.abs(x - h) < 0.01
    ) {
      if (
        Math.abs(d + p) < 0.1 &&
        Math.abs(f + v) < 0.1 &&
        Math.abs(x + h) < 0.1 &&
        Math.abs(c + m + u - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const M = (c + 1) / 2,
        b = (m + 1) / 2,
        D = (u + 1) / 2,
        w = (d + p) / 4,
        R = (f + v) / 4,
        H = (x + h) / 4;
      return (
        M > b && M > D
          ? M < 0.01
            ? ((n = 0), (r = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(M)), (r = w / n), (s = R / n))
          : b > D
          ? b < 0.01
            ? ((n = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(b)), (n = w / r), (s = H / r))
          : D < 0.01
          ? ((n = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(D)), (n = R / s), (r = H / s)),
        this.set(n, r, s, t),
        this
      );
    }
    let A = Math.sqrt(
      (h - x) * (h - x) + (f - v) * (f - v) + (p - d) * (p - d)
    );
    return (
      Math.abs(A) < 0.001 && (A = 1),
      (this.x = (h - x) / A),
      (this.y = (f - v) / A),
      (this.z = (p - d) / A),
      (this.w = Math.acos((c + m + u - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class hu extends Mi {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new ut(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new ut(0, 0, e, t));
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: Vt,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      n
    );
    const s = new At(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace
    );
    (s.flipY = !1),
      (s.generateMipmaps = n.generateMipmaps),
      (s.internalFormat = n.internalFormat),
      (this.textures = []);
    const a = n.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = s.clone()),
        (this.textures[o].isRenderTargetTexture = !0);
    (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      (this.width = e), (this.height = t), (this.depth = n);
      for (let r = 0, s = this.textures.length; r < s; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = t),
          (this.textures[r].image.depth = n);
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let n = 0, r = e.textures.length; n < r; n++)
      (this.textures[n] = e.textures[n].clone()),
        (this.textures[n].isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new Ro(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class un extends hu {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), (this.isWebGLRenderTarget = !0);
  }
}
class Co extends At {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = It),
      (this.minFilter = It),
      (this.wrapR = Bn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class fu extends At {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: r }),
      (this.magFilter = It),
      (this.minFilter = It),
      (this.wrapR = Bn),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Fi {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r);
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0],
      c = n[r + 1],
      d = n[r + 2],
      f = n[r + 3];
    const p = s[a + 0],
      m = s[a + 1],
      x = s[a + 2],
      v = s[a + 3];
    if (o === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = d), (e[t + 3] = f);
      return;
    }
    if (o === 1) {
      (e[t + 0] = p), (e[t + 1] = m), (e[t + 2] = x), (e[t + 3] = v);
      return;
    }
    if (f !== v || l !== p || c !== m || d !== x) {
      let h = 1 - o;
      const u = l * p + c * m + d * x + f * v,
        A = u >= 0 ? 1 : -1,
        M = 1 - u * u;
      if (M > Number.EPSILON) {
        const D = Math.sqrt(M),
          w = Math.atan2(D, u * A);
        (h = Math.sin(h * w) / D), (o = Math.sin(o * w) / D);
      }
      const b = o * A;
      if (
        ((l = l * h + p * b),
        (c = c * h + m * b),
        (d = d * h + x * b),
        (f = f * h + v * b),
        h === 1 - o)
      ) {
        const D = 1 / Math.sqrt(l * l + c * c + d * d + f * f);
        (l *= D), (c *= D), (d *= D), (f *= D);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = d), (e[t + 3] = f);
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r],
      l = n[r + 1],
      c = n[r + 2],
      d = n[r + 3],
      f = s[a],
      p = s[a + 1],
      m = s[a + 2],
      x = s[a + 3];
    return (
      (e[t] = o * x + d * f + l * m - c * p),
      (e[t + 1] = l * x + d * p + c * f - o * m),
      (e[t + 2] = c * x + d * m + o * p - l * f),
      (e[t + 3] = d * x - o * f - l * p - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, r) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      d = o(r / 2),
      f = o(s / 2),
      p = l(n / 2),
      m = l(r / 2),
      x = l(s / 2);
    switch (a) {
      case "XYZ":
        (this._x = p * d * f + c * m * x),
          (this._y = c * m * f - p * d * x),
          (this._z = c * d * x + p * m * f),
          (this._w = c * d * f - p * m * x);
        break;
      case "YXZ":
        (this._x = p * d * f + c * m * x),
          (this._y = c * m * f - p * d * x),
          (this._z = c * d * x - p * m * f),
          (this._w = c * d * f + p * m * x);
        break;
      case "ZXY":
        (this._x = p * d * f - c * m * x),
          (this._y = c * m * f + p * d * x),
          (this._z = c * d * x + p * m * f),
          (this._w = c * d * f - p * m * x);
        break;
      case "ZYX":
        (this._x = p * d * f - c * m * x),
          (this._y = c * m * f + p * d * x),
          (this._z = c * d * x - p * m * f),
          (this._w = c * d * f + p * m * x);
        break;
      case "YZX":
        (this._x = p * d * f + c * m * x),
          (this._y = c * m * f + p * d * x),
          (this._z = c * d * x - p * m * f),
          (this._w = c * d * f - p * m * x);
        break;
      case "XZY":
        (this._x = p * d * f - c * m * x),
          (this._y = c * m * f - p * d * x),
          (this._z = c * d * x + p * m * f),
          (this._w = c * d * f + p * m * x);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a
        );
    }
    return t === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      r = Math.sin(n);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      r = t[4],
      s = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      d = t[6],
      f = t[10],
      p = n + o + f;
    if (p > 0) {
      const m = 0.5 / Math.sqrt(p + 1);
      (this._w = 0.25 / m),
        (this._x = (d - l) * m),
        (this._y = (s - c) * m),
        (this._z = (a - r) * m);
    } else if (n > o && n > f) {
      const m = 2 * Math.sqrt(1 + n - o - f);
      (this._w = (d - l) / m),
        (this._x = 0.25 * m),
        (this._y = (r + a) / m),
        (this._z = (s + c) / m);
    } else if (o > f) {
      const m = 2 * Math.sqrt(1 + o - n - f);
      (this._w = (s - c) / m),
        (this._x = (r + a) / m),
        (this._y = 0.25 * m),
        (this._z = (l + d) / m);
    } else {
      const m = 2 * Math.sqrt(1 + f - n - o);
      (this._w = (a - r) / m),
        (this._x = (s + c) / m),
        (this._y = (l + d) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(yt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      d = t._w;
    return (
      (this._x = n * d + a * o + r * c - s * l),
      (this._y = r * d + a * l + s * o - n * c),
      (this._z = s * d + a * c + n * l - r * o),
      (this._w = a * d - n * o - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      r = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = n), (this._y = r), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * a + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * r + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      d = Math.atan2(c, o),
      f = Math.sin((1 - t) * d) / c,
      p = Math.sin(t * d) / c;
    return (
      (this._w = a * f + this._w * p),
      (this._x = n * f + this._x * p),
      (this._y = r * f + this._y * p),
      (this._z = s * f + this._z * p),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      r = Math.sqrt(1 - n),
      s = Math.sqrt(n);
    return this.set(
      r * Math.sin(e),
      r * Math.cos(e),
      s * Math.sin(t),
      s * Math.cos(t)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  constructor(e = 0, t = 0, n = 0) {
    (F.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Ta.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ta.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * r),
      (this.y = s[1] * t + s[4] * n + s[7] * r),
      (this.z = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements,
      a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a),
      (this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a),
      (this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * r - o * n),
      d = 2 * (o * t - s * r),
      f = 2 * (s * n - a * t);
    return (
      (this.x = t + l * c + a * f - o * d),
      (this.y = n + l * d + o * c - s * f),
      (this.z = r + l * f + s * d - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * r),
      (this.y = s[1] * t + s[5] * n + s[9] * r),
      (this.z = s[2] * t + s[6] * n + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      r = e.y,
      s = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = r * l - s * o),
      (this.y = s * a - n * l),
      (this.z = n * o - r * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Xr.copy(this).projectOnVector(e), this.sub(Xr);
  }
  reflect(e) {
    return this.sub(Xr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(yt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return (
      (this.x = r * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = r * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = r), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)), (this.y = t), (this.z = n * Math.sin(e)), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Xr = new F(),
  Ta = new Fi();
class Oi {
  constructor(
    e = new F(1 / 0, 1 / 0, 1 / 0),
    t = new F(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Ot.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Ot.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ot.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0
            ? e.getVertexPosition(a, Ot)
            : Ot.fromBufferAttribute(s, a),
            Ot.applyMatrix4(e.matrixWorld),
            this.expandByPoint(Ot);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Wi.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Wi.copy(n.boundingBox)),
          Wi.applyMatrix4(e.matrixWorld),
          this.union(Wi);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, Ot),
      Ot.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Ai),
      Xi.subVectors(this.max, Ai),
      jn.subVectors(e.a, Ai),
      Zn.subVectors(e.b, Ai),
      $n.subVectors(e.c, Ai),
      fn.subVectors(Zn, jn),
      pn.subVectors($n, Zn),
      Cn.subVectors(jn, $n);
    let t = [
      0,
      -fn.z,
      fn.y,
      0,
      -pn.z,
      pn.y,
      0,
      -Cn.z,
      Cn.y,
      fn.z,
      0,
      -fn.x,
      pn.z,
      0,
      -pn.x,
      Cn.z,
      0,
      -Cn.x,
      -fn.y,
      fn.x,
      0,
      -pn.y,
      pn.x,
      0,
      -Cn.y,
      Cn.x,
      0,
    ];
    return !qr(t, jn, Zn, $n, Xi) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !qr(t, jn, Zn, $n, Xi))
      ? !1
      : (qi.crossVectors(fn, pn),
        (t = [qi.x, qi.y, qi.z]),
        qr(t, jn, Zn, $n, Xi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ot).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(Ot).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (en[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        en[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        en[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        en[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        en[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        en[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        en[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        en[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(en),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const en = [
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
    new F(),
  ],
  Ot = new F(),
  Wi = new Oi(),
  jn = new F(),
  Zn = new F(),
  $n = new F(),
  fn = new F(),
  pn = new F(),
  Cn = new F(),
  Ai = new F(),
  Xi = new F(),
  qi = new F(),
  Pn = new F();
function qr(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Pn.fromArray(i, s);
    const o =
        r.x * Math.abs(Pn.x) + r.y * Math.abs(Pn.y) + r.z * Math.abs(Pn.z),
      l = e.dot(Pn),
      c = t.dot(Pn),
      d = n.dot(Pn);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o) return !1;
  }
  return !0;
}
const pu = new Oi(),
  bi = new F(),
  Yr = new F();
class Cs {
  constructor(e = new F(), t = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : pu.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    bi.subVectors(e, this.center);
    const t = bi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        r = (n - this.radius) * 0.5;
      this.center.addScaledVector(bi, r / n), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Yr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(bi.copy(e.center).add(Yr)),
            this.expandByPoint(bi.copy(e.center).sub(Yr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tn = new F(),
  Kr = new F(),
  Yi = new F(),
  mn = new F(),
  jr = new F(),
  Ki = new F(),
  Zr = new F();
class mu {
  constructor(e = new F(), t = new F(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, tn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = tn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (tn.copy(this.origin).addScaledVector(this.direction, t),
        tn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Kr.copy(e).add(t).multiplyScalar(0.5),
      Yi.copy(t).sub(e).normalize(),
      mn.copy(this.origin).sub(Kr);
    const s = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(Yi),
      o = mn.dot(this.direction),
      l = -mn.dot(Yi),
      c = mn.lengthSq(),
      d = Math.abs(1 - a * a);
    let f, p, m, x;
    if (d > 0)
      if (((f = a * l - o), (p = a * o - l), (x = s * d), f >= 0))
        if (p >= -x)
          if (p <= x) {
            const v = 1 / d;
            (f *= v),
              (p *= v),
              (m = f * (f + a * p + 2 * o) + p * (a * f + p + 2 * l) + c);
          } else
            (p = s),
              (f = Math.max(0, -(a * p + o))),
              (m = -f * f + p * (p + 2 * l) + c);
        else
          (p = -s),
            (f = Math.max(0, -(a * p + o))),
            (m = -f * f + p * (p + 2 * l) + c);
      else
        p <= -x
          ? ((f = Math.max(0, -(-a * s + o))),
            (p = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -f * f + p * (p + 2 * l) + c))
          : p <= x
          ? ((f = 0),
            (p = Math.min(Math.max(-s, -l), s)),
            (m = p * (p + 2 * l) + c))
          : ((f = Math.max(0, -(a * s + o))),
            (p = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -f * f + p * (p + 2 * l) + c));
    else
      (p = a > 0 ? -s : s),
        (f = Math.max(0, -(a * p + o))),
        (m = -f * f + p * (p + 2 * l) + c);
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(Kr).addScaledVector(Yi, p),
      m
    );
  }
  intersectSphere(e, t) {
    tn.subVectors(e.center, this.origin);
    const n = tn.dot(this.direction),
      r = tn.dot(tn) - n * n,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x,
      d = 1 / this.direction.y,
      f = 1 / this.direction.z,
      p = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - p.x) * c), (r = (e.max.x - p.x) * c))
        : ((n = (e.max.x - p.x) * c), (r = (e.min.x - p.x) * c)),
      d >= 0
        ? ((s = (e.min.y - p.y) * d), (a = (e.max.y - p.y) * d))
        : ((s = (e.max.y - p.y) * d), (a = (e.min.y - p.y) * d)),
      n > a ||
      s > r ||
      ((s > n || isNaN(n)) && (n = s),
      (a < r || isNaN(r)) && (r = a),
      f >= 0
        ? ((o = (e.min.z - p.z) * f), (l = (e.max.z - p.z) * f))
        : ((o = (e.max.z - p.z) * f), (l = (e.min.z - p.z) * f)),
      n > l || o > r) ||
      ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(n >= 0 ? n : r, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, tn) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    jr.subVectors(t, e), Ki.subVectors(n, e), Zr.crossVectors(jr, Ki);
    let a = this.direction.dot(Zr),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    mn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ki.crossVectors(mn, Ki));
    if (l < 0) return null;
    const c = o * this.direction.dot(jr.cross(mn));
    if (c < 0 || l + c > a) return null;
    const d = -o * mn.dot(Zr);
    return d < 0 ? null : this.at(d / a, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class rt {
  constructor(e, t, n, r, s, a, o, l, c, d, f, p, m, x, v, h) {
    (rt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, d, f, p, m, x, v, h);
  }
  set(e, t, n, r, s, a, o, l, c, d, f, p, m, x, v, h) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[4] = t),
      (u[8] = n),
      (u[12] = r),
      (u[1] = s),
      (u[5] = a),
      (u[9] = o),
      (u[13] = l),
      (u[2] = c),
      (u[6] = d),
      (u[10] = f),
      (u[14] = p),
      (u[3] = m),
      (u[7] = x),
      (u[11] = v),
      (u[15] = h),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new rt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      r = 1 / Jn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Jn.setFromMatrixColumn(e, 1).length(),
      a = 1 / Jn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * r),
      (t[1] = n[1] * r),
      (t[2] = n[2] * r),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(r),
      c = Math.sin(r),
      d = Math.cos(s),
      f = Math.sin(s);
    if (e.order === "XYZ") {
      const p = a * d,
        m = a * f,
        x = o * d,
        v = o * f;
      (t[0] = l * d),
        (t[4] = -l * f),
        (t[8] = c),
        (t[1] = m + x * c),
        (t[5] = p - v * c),
        (t[9] = -o * l),
        (t[2] = v - p * c),
        (t[6] = x + m * c),
        (t[10] = a * l);
    } else if (e.order === "YXZ") {
      const p = l * d,
        m = l * f,
        x = c * d,
        v = c * f;
      (t[0] = p + v * o),
        (t[4] = x * o - m),
        (t[8] = a * c),
        (t[1] = a * f),
        (t[5] = a * d),
        (t[9] = -o),
        (t[2] = m * o - x),
        (t[6] = v + p * o),
        (t[10] = a * l);
    } else if (e.order === "ZXY") {
      const p = l * d,
        m = l * f,
        x = c * d,
        v = c * f;
      (t[0] = p - v * o),
        (t[4] = -a * f),
        (t[8] = x + m * o),
        (t[1] = m + x * o),
        (t[5] = a * d),
        (t[9] = v - p * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l);
    } else if (e.order === "ZYX") {
      const p = a * d,
        m = a * f,
        x = o * d,
        v = o * f;
      (t[0] = l * d),
        (t[4] = x * c - m),
        (t[8] = p * c + v),
        (t[1] = l * f),
        (t[5] = v * c + p),
        (t[9] = m * c - x),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l);
    } else if (e.order === "YZX") {
      const p = a * l,
        m = a * c,
        x = o * l,
        v = o * c;
      (t[0] = l * d),
        (t[4] = v - p * f),
        (t[8] = x * f + m),
        (t[1] = f),
        (t[5] = a * d),
        (t[9] = -o * d),
        (t[2] = -c * d),
        (t[6] = m * f + x),
        (t[10] = p - v * f);
    } else if (e.order === "XZY") {
      const p = a * l,
        m = a * c,
        x = o * l,
        v = o * c;
      (t[0] = l * d),
        (t[4] = -f),
        (t[8] = c * d),
        (t[1] = p * f + v),
        (t[5] = a * d),
        (t[9] = m * f - x),
        (t[2] = x * f - m),
        (t[6] = o * d),
        (t[10] = v * f + p);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_u, e, gu);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return (
      wt.subVectors(e, t),
      wt.lengthSq() === 0 && (wt.z = 1),
      wt.normalize(),
      _n.crossVectors(n, wt),
      _n.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (wt.x += 1e-4) : (wt.z += 1e-4),
        wt.normalize(),
        _n.crossVectors(n, wt)),
      _n.normalize(),
      ji.crossVectors(wt, _n),
      (r[0] = _n.x),
      (r[4] = ji.x),
      (r[8] = wt.x),
      (r[1] = _n.y),
      (r[5] = ji.y),
      (r[9] = wt.y),
      (r[2] = _n.z),
      (r[6] = ji.z),
      (r[10] = wt.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      r = t.elements,
      s = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      d = n[1],
      f = n[5],
      p = n[9],
      m = n[13],
      x = n[2],
      v = n[6],
      h = n[10],
      u = n[14],
      A = n[3],
      M = n[7],
      b = n[11],
      D = n[15],
      w = r[0],
      R = r[4],
      H = r[8],
      y = r[12],
      g = r[1],
      I = r[5],
      k = r[9],
      C = r[13],
      G = r[2],
      X = r[6],
      Z = r[10],
      re = r[14],
      B = r[3],
      Q = r[7],
      J = r[11],
      de = r[15];
    return (
      (s[0] = a * w + o * g + l * G + c * B),
      (s[4] = a * R + o * I + l * X + c * Q),
      (s[8] = a * H + o * k + l * Z + c * J),
      (s[12] = a * y + o * C + l * re + c * de),
      (s[1] = d * w + f * g + p * G + m * B),
      (s[5] = d * R + f * I + p * X + m * Q),
      (s[9] = d * H + f * k + p * Z + m * J),
      (s[13] = d * y + f * C + p * re + m * de),
      (s[2] = x * w + v * g + h * G + u * B),
      (s[6] = x * R + v * I + h * X + u * Q),
      (s[10] = x * H + v * k + h * Z + u * J),
      (s[14] = x * y + v * C + h * re + u * de),
      (s[3] = A * w + M * g + b * G + D * B),
      (s[7] = A * R + M * I + b * X + D * Q),
      (s[11] = A * H + M * k + b * Z + D * J),
      (s[15] = A * y + M * C + b * re + D * de),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      r = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      d = e[2],
      f = e[6],
      p = e[10],
      m = e[14],
      x = e[3],
      v = e[7],
      h = e[11],
      u = e[15];
    return (
      x *
        (+s * l * f -
          r * c * f -
          s * o * p +
          n * c * p +
          r * o * m -
          n * l * m) +
      v *
        (+t * l * m -
          t * c * p +
          s * a * p -
          r * a * m +
          r * c * d -
          s * l * d) +
      h *
        (+t * c * f -
          t * o * m -
          s * a * f +
          n * a * m +
          s * o * d -
          n * c * d) +
      u *
        (-r * o * d - t * l * f + t * o * p + r * a * f - n * a * p + n * l * d)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = t), (r[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      d = e[8],
      f = e[9],
      p = e[10],
      m = e[11],
      x = e[12],
      v = e[13],
      h = e[14],
      u = e[15],
      A = f * h * c - v * p * c + v * l * m - o * h * m - f * l * u + o * p * u,
      M = x * p * c - d * h * c - x * l * m + a * h * m + d * l * u - a * p * u,
      b = d * v * c - x * f * c + x * o * m - a * v * m - d * o * u + a * f * u,
      D = x * f * l - d * v * l - x * o * p + a * v * p + d * o * h - a * f * h,
      w = t * A + n * M + r * b + s * D;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / w;
    return (
      (e[0] = A * R),
      (e[1] =
        (v * p * s -
          f * h * s -
          v * r * m +
          n * h * m +
          f * r * u -
          n * p * u) *
        R),
      (e[2] =
        (o * h * s -
          v * l * s +
          v * r * c -
          n * h * c -
          o * r * u +
          n * l * u) *
        R),
      (e[3] =
        (f * l * s -
          o * p * s -
          f * r * c +
          n * p * c +
          o * r * m -
          n * l * m) *
        R),
      (e[4] = M * R),
      (e[5] =
        (d * h * s -
          x * p * s +
          x * r * m -
          t * h * m -
          d * r * u +
          t * p * u) *
        R),
      (e[6] =
        (x * l * s -
          a * h * s -
          x * r * c +
          t * h * c +
          a * r * u -
          t * l * u) *
        R),
      (e[7] =
        (a * p * s -
          d * l * s +
          d * r * c -
          t * p * c -
          a * r * m +
          t * l * m) *
        R),
      (e[8] = b * R),
      (e[9] =
        (x * f * s -
          d * v * s -
          x * n * m +
          t * v * m +
          d * n * u -
          t * f * u) *
        R),
      (e[10] =
        (a * v * s -
          x * o * s +
          x * n * c -
          t * v * c -
          a * n * u +
          t * o * u) *
        R),
      (e[11] =
        (d * o * s -
          a * f * s -
          d * n * c +
          t * f * c +
          a * n * m -
          t * o * m) *
        R),
      (e[12] = D * R),
      (e[13] =
        (d * v * r -
          x * f * r +
          x * n * p -
          t * v * p -
          d * n * h +
          t * f * h) *
        R),
      (e[14] =
        (x * o * r -
          a * v * r -
          x * n * l +
          t * v * l +
          a * n * h -
          t * o * h) *
        R),
      (e[15] =
        (a * f * r -
          d * o * r +
          d * n * l -
          t * f * l -
          a * n * p +
          t * o * p) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      r = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= r),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= r),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= r),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= r),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      r = Math.sin(t),
      s = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      d = s * o;
    return (
      this.set(
        c * a + n,
        c * o - r * l,
        c * l + r * o,
        0,
        c * o + r * l,
        d * o + n,
        d * l - r * a,
        0,
        c * l - r * o,
        d * l + r * a,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements,
      s = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = s + s,
      d = a + a,
      f = o + o,
      p = s * c,
      m = s * d,
      x = s * f,
      v = a * d,
      h = a * f,
      u = o * f,
      A = l * c,
      M = l * d,
      b = l * f,
      D = n.x,
      w = n.y,
      R = n.z;
    return (
      (r[0] = (1 - (v + u)) * D),
      (r[1] = (m + b) * D),
      (r[2] = (x - M) * D),
      (r[3] = 0),
      (r[4] = (m - b) * w),
      (r[5] = (1 - (p + u)) * w),
      (r[6] = (h + A) * w),
      (r[7] = 0),
      (r[8] = (x + M) * R),
      (r[9] = (h - A) * R),
      (r[10] = (1 - (p + v)) * R),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Jn.set(r[0], r[1], r[2]).length();
    const a = Jn.set(r[4], r[5], r[6]).length(),
      o = Jn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = r[12]),
      (e.y = r[13]),
      (e.z = r[14]),
      zt.copy(this);
    const c = 1 / s,
      d = 1 / a,
      f = 1 / o;
    return (
      (zt.elements[0] *= c),
      (zt.elements[1] *= c),
      (zt.elements[2] *= c),
      (zt.elements[4] *= d),
      (zt.elements[5] *= d),
      (zt.elements[6] *= d),
      (zt.elements[8] *= f),
      (zt.elements[9] *= f),
      (zt.elements[10] *= f),
      t.setFromRotationMatrix(zt),
      (n.x = s),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, r, s, a, o = cn) {
    const l = this.elements,
      c = (2 * s) / (t - e),
      d = (2 * s) / (n - r),
      f = (t + e) / (t - e),
      p = (n + r) / (n - r);
    let m, x;
    if (o === cn) (m = -(a + s) / (a - s)), (x = (-2 * a * s) / (a - s));
    else if (o === xr) (m = -a / (a - s)), (x = (-a * s) / (a - s));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = p),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = m),
      (l[14] = x),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, r, s, a, o = cn) {
    const l = this.elements,
      c = 1 / (t - e),
      d = 1 / (n - r),
      f = 1 / (a - s),
      p = (t + e) * c,
      m = (n + r) * d;
    let x, v;
    if (o === cn) (x = (a + s) * f), (v = -2 * f);
    else if (o === xr) (x = s * f), (v = -1 * f);
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o
      );
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -p),
      (l[1] = 0),
      (l[5] = 2 * d),
      (l[9] = 0),
      (l[13] = -m),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = v),
      (l[14] = -x),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Jn = new F(),
  zt = new rt(),
  _u = new F(0, 0, 0),
  gu = new F(1, 1, 1),
  _n = new F(),
  ji = new F(),
  wt = new F(),
  Aa = new rt(),
  ba = new Fi();
class dn {
  constructor(e = 0, t = 0, n = 0, r = dn.DEFAULT_ORDER) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = r),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const r = e.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      l = r[1],
      c = r[5],
      d = r[9],
      f = r[2],
      p = r[6],
      m = r[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(yt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-d, m)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(p, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-yt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(o, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(yt(p, -1, 1))),
          Math.abs(p) < 0.9999999
            ? ((this._y = Math.atan2(-f, m)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-yt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(p, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case "YZX":
        (this._z = Math.asin(yt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-d, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-yt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(p, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-d, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Aa.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Aa, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ba.setFromEuler(this), this.setFromQuaternion(ba, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
dn.DEFAULT_ORDER = "XYZ";
class Po {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let vu = 0;
const wa = new F(),
  Qn = new Fi(),
  nn = new rt(),
  Zi = new F(),
  wi = new F(),
  xu = new F(),
  Mu = new Fi(),
  Ra = new F(1, 0, 0),
  Ca = new F(0, 1, 0),
  Pa = new F(0, 0, 1),
  La = { type: "added" },
  Su = { type: "removed" },
  ei = { type: "childadded", child: null },
  $r = { type: "childremoved", child: null };
class Pt extends Mi {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: vu++ }),
      (this.uuid = Ni()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = Pt.DEFAULT_UP.clone());
    const e = new F(),
      t = new dn(),
      n = new Fi(),
      r = new F(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new rt() },
        normalMatrix: { value: new Ie() },
      }),
      (this.matrix = new rt()),
      (this.matrixWorld = new rt()),
      (this.matrixAutoUpdate = Pt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Po()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Qn.setFromAxisAngle(e, t), this.quaternion.multiply(Qn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Qn.setFromAxisAngle(e, t), this.quaternion.premultiply(Qn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Ra, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ca, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Pa, e);
  }
  translateOnAxis(e, t) {
    return (
      wa.copy(e).applyQuaternion(this.quaternion),
      this.position.add(wa.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Ra, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ca, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Pa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(nn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Zi.copy(e) : Zi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      wi.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? nn.lookAt(wi, Zi, this.up)
        : nn.lookAt(Zi, wi, this.up),
      this.quaternion.setFromRotationMatrix(nn),
      r &&
        (nn.extractRotation(r.matrixWorld),
        Qn.setFromRotationMatrix(nn),
        this.quaternion.premultiply(Qn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(La),
            (ei.child = e),
            this.dispatchEvent(ei),
            (ei.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(Su),
        ($r.child = e),
        this.dispatchEvent($r),
        ($r.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      nn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), nn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(nn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(La),
      (ei.child = e),
      this.dispatchEvent(ei),
      (ei.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++)
      r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wi, e, xu), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(wi, Mu, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) {
        const o = r[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.6,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== "" && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = "InstancedMesh"),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = "BatchedMesh"),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (r.maxGeometryCount = this._maxGeometryCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = {
            min: r.boundingBox.min.toArray(),
            max: r.boundingBox.max.toArray(),
          }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture &&
            (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        d = a(e.images),
        f = a(e.shapes),
        p = a(e.skeletons),
        m = a(e.animations),
        x = a(e.nodes);
      o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        d.length > 0 && (n.images = d),
        f.length > 0 && (n.shapes = f),
        p.length > 0 && (n.skeletons = p),
        m.length > 0 && (n.animations = m),
        x.length > 0 && (n.nodes = x);
    }
    return (n.object = r), n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const d = o[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
Pt.DEFAULT_UP = new F(0, 1, 0);
Pt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Bt = new F(),
  rn = new F(),
  Jr = new F(),
  sn = new F(),
  ti = new F(),
  ni = new F(),
  Ua = new F(),
  Qr = new F(),
  es = new F(),
  ts = new F();
class jt {
  constructor(e = new F(), t = new F(), n = new F()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Bt.subVectors(e, t), r.cross(Bt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Bt.subVectors(r, t), rn.subVectors(n, t), Jr.subVectors(e, t);
    const a = Bt.dot(Bt),
      o = Bt.dot(rn),
      l = Bt.dot(Jr),
      c = rn.dot(rn),
      d = rn.dot(Jr),
      f = a * c - o * o;
    if (f === 0) return s.set(0, 0, 0), null;
    const p = 1 / f,
      m = (c * l - o * d) * p,
      x = (a * d - o * l) * p;
    return s.set(1 - m - x, x, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, sn) === null
      ? !1
      : sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, sn) === null
      ? ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(s, sn.x),
        l.addScaledVector(a, sn.y),
        l.addScaledVector(o, sn.z),
        l);
  }
  static isFrontFacing(e, t, n, r) {
    return Bt.subVectors(n, t), rn.subVectors(e, t), Bt.cross(rn).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Bt.subVectors(this.c, this.b),
      rn.subVectors(this.a, this.b),
      Bt.cross(rn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return jt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return jt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return jt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return jt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return jt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    ti.subVectors(r, n), ni.subVectors(s, n), Qr.subVectors(e, n);
    const l = ti.dot(Qr),
      c = ni.dot(Qr);
    if (l <= 0 && c <= 0) return t.copy(n);
    es.subVectors(e, r);
    const d = ti.dot(es),
      f = ni.dot(es);
    if (d >= 0 && f <= d) return t.copy(r);
    const p = l * f - d * c;
    if (p <= 0 && l >= 0 && d <= 0)
      return (a = l / (l - d)), t.copy(n).addScaledVector(ti, a);
    ts.subVectors(e, s);
    const m = ti.dot(ts),
      x = ni.dot(ts);
    if (x >= 0 && m <= x) return t.copy(s);
    const v = m * c - l * x;
    if (v <= 0 && c >= 0 && x <= 0)
      return (o = c / (c - x)), t.copy(n).addScaledVector(ni, o);
    const h = d * x - m * f;
    if (h <= 0 && f - d >= 0 && m - x >= 0)
      return (
        Ua.subVectors(s, r),
        (o = (f - d) / (f - d + (m - x))),
        t.copy(r).addScaledVector(Ua, o)
      );
    const u = 1 / (h + v + p);
    return (
      (a = v * u),
      (o = p * u),
      t.copy(n).addScaledVector(ti, a).addScaledVector(ni, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Lo = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  gn = { h: 0, s: 0, l: 0 },
  $i = { h: 0, s: 0, l: 0 };
function ns(i, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? i + (e - i) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? i + (e - i) * 6 * (2 / 3 - t)
      : i
  );
}
class Xe {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == "number"
        ? this.setHex(r)
        : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Yt) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      We.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, r = We.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      We.toWorkingColorSpace(this, r),
      this
    );
  }
  setHSL(e, t, n, r = We.workingColorSpace) {
    if (((e = su(e, 1)), (t = yt(t, 0, 1)), (n = yt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - s;
      (this.r = ns(a, s, e + 1 / 3)),
        (this.g = ns(a, s, e)),
        (this.b = ns(a, s, e - 1 / 3));
    }
    return We.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Yt) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                t
              )
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                t
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o
              ))
          )
            return (
              n(s[4]),
              this.setHSL(
                parseFloat(s[1]) / 360,
                parseFloat(s[2]) / 100,
                parseFloat(s[3]) / 100,
                t
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Yt) {
    const n = Lo[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = mi(e.r)), (this.g = mi(e.g)), (this.b = mi(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = kr(e.r)), (this.g = kr(e.g)), (this.b = kr(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Yt) {
    return (
      We.fromWorkingColorSpace(pt.copy(this), e),
      Math.round(yt(pt.r * 255, 0, 255)) * 65536 +
        Math.round(yt(pt.g * 255, 0, 255)) * 256 +
        Math.round(yt(pt.b * 255, 0, 255))
    );
  }
  getHexString(e = Yt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.fromWorkingColorSpace(pt.copy(this), t);
    const n = pt.r,
      r = pt.g,
      s = pt.b,
      a = Math.max(n, r, s),
      o = Math.min(n, r, s);
    let l, c;
    const d = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const f = a - o;
      switch (((c = d <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = d), e;
  }
  getRGB(e, t = We.workingColorSpace) {
    return (
      We.fromWorkingColorSpace(pt.copy(this), t),
      (e.r = pt.r),
      (e.g = pt.g),
      (e.b = pt.b),
      e
    );
  }
  getStyle(e = Yt) {
    We.fromWorkingColorSpace(pt.copy(this), e);
    const t = pt.r,
      n = pt.g,
      r = pt.b;
    return e !== Yt
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(
          r * 255
        )})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(gn), this.setHSL(gn.h + e, gn.s + t, gn.l + n);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(gn), e.getHSL($i);
    const n = Vr(gn.h, $i.h, t),
      r = Vr(gn.s, $i.s, t),
      s = Vr(gn.l, $i.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * t + s[3] * n + s[6] * r),
      (this.g = s[1] * t + s[4] * n + s[7] * r),
      (this.b = s[2] * t + s[5] * n + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const pt = new Xe();
Xe.NAMES = Lo;
let yu = 0;
class Er extends Mi {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: yu++ }),
      (this.uuid = Ni()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = fi),
      (this.side = En),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = _s),
      (this.blendDst = gs),
      (this.blendEquation = On),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Xe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = pr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = va),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Yn),
      (this.stencilZFail = Yn),
      (this.stencilZPass = Yn),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`
          );
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`
          );
          continue;
        }
        r && r.isColor
          ? r.set(n)
          : r && r.isVector3 && n && n.isVector3
          ? r.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.6,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== fi && (n.blending = this.blending),
      this.side !== En && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== _s && (n.blendSrc = this.blendSrc),
      this.blendDst !== gs && (n.blendDst = this.blendDst),
      this.blendEquation !== On && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== pr && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== va && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Yn && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== Yn && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Yn && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures),
        a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Tr extends Er {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Xe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new dn()),
      (this.combine = _o),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const nt = new F(),
  Ji = new Ve();
class $t {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = xa),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = Zt),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      ou(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ji.fromBufferAttribute(this, t),
          Ji.applyMatrix3(e),
          this.setXY(t, Ji.x, Ji.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        nt.fromBufferAttribute(this, t),
          nt.applyMatrix3(e),
          this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      nt.fromBufferAttribute(this, t),
        nt.applyMatrix4(e),
        this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      nt.fromBufferAttribute(this, t),
        nt.applyNormalMatrix(e),
        this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      nt.fromBufferAttribute(this, t),
        nt.transformDirection(e),
        this.setXYZ(t, nt.x, nt.y, nt.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Ti(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = Mt(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ti(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = Mt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = Mt(t, this.array)), (n = Mt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Mt(t, this.array)),
        (n = Mt(n, this.array)),
        (r = Mt(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, t, n, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = Mt(t, this.array)),
        (n = Mt(n, this.array)),
        (r = Mt(r, this.array)),
        (s = Mt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== xa && (e.usage = this.usage),
      e
    );
  }
}
class Uo extends $t {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Do extends $t {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Gn extends $t {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Eu = 0;
const Ut = new rt(),
  is = new Pt(),
  ii = new F(),
  Rt = new Oi(),
  Ri = new Oi(),
  lt = new F();
class qn extends Mi {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Eu++ }),
      (this.uuid = Ni()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (wo(e) ? Do : Uo)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ie().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  lookAt(e) {
    return is.lookAt(e), is.updateMatrix(), this.applyMatrix4(is.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(ii).negate(),
      this.translate(ii.x, ii.y, ii.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Gn(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Oi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this
      ),
        this.boundingBox.set(
          new F(-1 / 0, -1 / 0, -1 / 0),
          new F(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          Rt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (lt.addVectors(this.boundingBox.min, Rt.min),
                this.boundingBox.expandByPoint(lt),
                lt.addVectors(this.boundingBox.max, Rt.max),
                this.boundingBox.expandByPoint(lt))
              : (this.boundingBox.expandByPoint(Rt.min),
                this.boundingBox.expandByPoint(Rt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Cs());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this
      ),
        this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((Rt.setFromBufferAttribute(e), t))
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s];
          Ri.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (lt.addVectors(Rt.min, Ri.min),
                Rt.expandByPoint(lt),
                lt.addVectors(Rt.max, Ri.max),
                Rt.expandByPoint(lt))
              : (Rt.expandByPoint(Ri.min), Rt.expandByPoint(Ri.max));
        }
      Rt.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        lt.fromBufferAttribute(e, s),
          (r = Math.max(r, n.distanceToSquared(lt)));
      if (t)
        for (let s = 0, a = t.length; s < a; s++) {
          const o = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, d = o.count; c < d; c++)
            lt.fromBufferAttribute(o, c),
              l && (ii.fromBufferAttribute(e, c), lt.add(ii)),
              (r = Math.max(r, n.distanceToSquared(lt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = t.position,
      r = t.normal,
      s = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new $t(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      l = [];
    for (let H = 0; H < n.count; H++) (o[H] = new F()), (l[H] = new F());
    const c = new F(),
      d = new F(),
      f = new F(),
      p = new Ve(),
      m = new Ve(),
      x = new Ve(),
      v = new F(),
      h = new F();
    function u(H, y, g) {
      c.fromBufferAttribute(n, H),
        d.fromBufferAttribute(n, y),
        f.fromBufferAttribute(n, g),
        p.fromBufferAttribute(s, H),
        m.fromBufferAttribute(s, y),
        x.fromBufferAttribute(s, g),
        d.sub(c),
        f.sub(c),
        m.sub(p),
        x.sub(p);
      const I = 1 / (m.x * x.y - x.x * m.y);
      isFinite(I) &&
        (v
          .copy(d)
          .multiplyScalar(x.y)
          .addScaledVector(f, -m.y)
          .multiplyScalar(I),
        h
          .copy(f)
          .multiplyScalar(m.x)
          .addScaledVector(d, -x.x)
          .multiplyScalar(I),
        o[H].add(v),
        o[y].add(v),
        o[g].add(v),
        l[H].add(h),
        l[y].add(h),
        l[g].add(h));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let H = 0, y = A.length; H < y; ++H) {
      const g = A[H],
        I = g.start,
        k = g.count;
      for (let C = I, G = I + k; C < G; C += 3)
        u(e.getX(C + 0), e.getX(C + 1), e.getX(C + 2));
    }
    const M = new F(),
      b = new F(),
      D = new F(),
      w = new F();
    function R(H) {
      D.fromBufferAttribute(r, H), w.copy(D);
      const y = o[H];
      M.copy(y),
        M.sub(D.multiplyScalar(D.dot(y))).normalize(),
        b.crossVectors(w, y);
      const I = b.dot(l[H]) < 0 ? -1 : 1;
      a.setXYZW(H, M.x, M.y, M.z, I);
    }
    for (let H = 0, y = A.length; H < y; ++H) {
      const g = A[H],
        I = g.start,
        k = g.count;
      for (let C = I, G = I + k; C < G; C += 3)
        R(e.getX(C + 0)), R(e.getX(C + 1)), R(e.getX(C + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new $t(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let p = 0, m = n.count; p < m; p++) n.setXYZ(p, 0, 0, 0);
      const r = new F(),
        s = new F(),
        a = new F(),
        o = new F(),
        l = new F(),
        c = new F(),
        d = new F(),
        f = new F();
      if (e)
        for (let p = 0, m = e.count; p < m; p += 3) {
          const x = e.getX(p + 0),
            v = e.getX(p + 1),
            h = e.getX(p + 2);
          r.fromBufferAttribute(t, x),
            s.fromBufferAttribute(t, v),
            a.fromBufferAttribute(t, h),
            d.subVectors(a, s),
            f.subVectors(r, s),
            d.cross(f),
            o.fromBufferAttribute(n, x),
            l.fromBufferAttribute(n, v),
            c.fromBufferAttribute(n, h),
            o.add(d),
            l.add(d),
            c.add(d),
            n.setXYZ(x, o.x, o.y, o.z),
            n.setXYZ(v, l.x, l.y, l.z),
            n.setXYZ(h, c.x, c.y, c.z);
        }
      else
        for (let p = 0, m = t.count; p < m; p += 3)
          r.fromBufferAttribute(t, p + 0),
            s.fromBufferAttribute(t, p + 1),
            a.fromBufferAttribute(t, p + 2),
            d.subVectors(a, s),
            f.subVectors(r, s),
            d.cross(f),
            n.setXYZ(p + 0, d.x, d.y, d.z),
            n.setXYZ(p + 1, d.x, d.y, d.z),
            n.setXYZ(p + 2, d.x, d.y, d.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      lt.fromBufferAttribute(e, t),
        lt.normalize(),
        e.setXYZ(t, lt.x, lt.y, lt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        d = o.itemSize,
        f = o.normalized,
        p = new c.constructor(l.length * d);
      let m = 0,
        x = 0;
      for (let v = 0, h = l.length; v < h; v++) {
        o.isInterleavedBufferAttribute
          ? (m = l[v] * o.data.stride + o.offset)
          : (m = l[v] * d);
        for (let u = 0; u < d; u++) p[x++] = c[m++];
      }
      return new $t(p, d, f);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new qn(),
      n = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const l = r[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let d = 0, f = c.length; d < f; d++) {
        const p = c[d],
          m = e(p, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.6,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        d = [];
      for (let f = 0, p = c.length; f < p; f++) {
        const m = c[f];
        d.push(m.toJSON(e.data));
      }
      d.length > 0 && ((r[l] = d), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = r),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null &&
        (e.data.boundingSphere = {
          center: o.center.toArray(),
          radius: o.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const d = r[c];
      this.setAttribute(c, d.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const d = [],
        f = s[c];
      for (let p = 0, m = f.length; p < m; p++) d.push(f[p].clone(t));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, d = a.length; c < d; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Da = new rt(),
  Ln = new mu(),
  Qi = new Cs(),
  Ia = new F(),
  ri = new F(),
  si = new F(),
  ai = new F(),
  rs = new F(),
  er = new F(),
  tr = new Ve(),
  nr = new Ve(),
  ir = new Ve(),
  Na = new F(),
  Fa = new F(),
  Oa = new F(),
  rr = new F(),
  sr = new F();
class Gt extends Pt {
  constructor(e = new qn(), t = new Tr()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      r = n.attributes.position,
      s = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      er.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = o[l],
          f = s[l];
        d !== 0 &&
          (rs.fromBufferAttribute(f, e),
          a ? er.addScaledVector(rs, d) : er.addScaledVector(rs.sub(t), d));
      }
      t.add(er);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Qi.copy(n.boundingSphere),
      Qi.applyMatrix4(s),
      Ln.copy(e.ray).recast(e.near),
      !(
        Qi.containsPoint(Ln.origin) === !1 &&
        (Ln.intersectSphere(Qi, Ia) === null ||
          Ln.origin.distanceToSquared(Ia) > (e.far - e.near) ** 2)
      ) &&
        (Da.copy(s).invert(),
        Ln.copy(e.ray).applyMatrix4(Da),
        !(n.boundingBox !== null && Ln.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, Ln)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      d = s.attributes.uv1,
      f = s.attributes.normal,
      p = s.groups,
      m = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let x = 0, v = p.length; x < v; x++) {
          const h = p[x],
            u = a[h.materialIndex],
            A = Math.max(h.start, m.start),
            M = Math.min(
              o.count,
              Math.min(h.start + h.count, m.start + m.count)
            );
          for (let b = A, D = M; b < D; b += 3) {
            const w = o.getX(b),
              R = o.getX(b + 1),
              H = o.getX(b + 2);
            (r = ar(this, u, e, n, c, d, f, w, R, H)),
              r &&
                ((r.faceIndex = Math.floor(b / 3)),
                (r.face.materialIndex = h.materialIndex),
                t.push(r));
          }
        }
      else {
        const x = Math.max(0, m.start),
          v = Math.min(o.count, m.start + m.count);
        for (let h = x, u = v; h < u; h += 3) {
          const A = o.getX(h),
            M = o.getX(h + 1),
            b = o.getX(h + 2);
          (r = ar(this, a, e, n, c, d, f, A, M, b)),
            r && ((r.faceIndex = Math.floor(h / 3)), t.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let x = 0, v = p.length; x < v; x++) {
          const h = p[x],
            u = a[h.materialIndex],
            A = Math.max(h.start, m.start),
            M = Math.min(
              l.count,
              Math.min(h.start + h.count, m.start + m.count)
            );
          for (let b = A, D = M; b < D; b += 3) {
            const w = b,
              R = b + 1,
              H = b + 2;
            (r = ar(this, u, e, n, c, d, f, w, R, H)),
              r &&
                ((r.faceIndex = Math.floor(b / 3)),
                (r.face.materialIndex = h.materialIndex),
                t.push(r));
          }
        }
      else {
        const x = Math.max(0, m.start),
          v = Math.min(l.count, m.start + m.count);
        for (let h = x, u = v; h < u; h += 3) {
          const A = h,
            M = h + 1,
            b = h + 2;
          (r = ar(this, a, e, n, c, d, f, A, M, b)),
            r && ((r.faceIndex = Math.floor(h / 3)), t.push(r));
        }
      }
  }
}
function Tu(i, e, t, n, r, s, a, o) {
  let l;
  if (
    (e.side === Tt
      ? (l = n.intersectTriangle(a, s, r, !0, o))
      : (l = n.intersectTriangle(r, s, a, e.side === En, o)),
    l === null)
  )
    return null;
  sr.copy(o), sr.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(sr);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: sr.clone(), object: i };
}
function ar(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, ri),
    i.getVertexPosition(l, si),
    i.getVertexPosition(c, ai);
  const d = Tu(i, e, t, n, ri, si, ai, rr);
  if (d) {
    r &&
      (tr.fromBufferAttribute(r, o),
      nr.fromBufferAttribute(r, l),
      ir.fromBufferAttribute(r, c),
      (d.uv = jt.getInterpolation(rr, ri, si, ai, tr, nr, ir, new Ve()))),
      s &&
        (tr.fromBufferAttribute(s, o),
        nr.fromBufferAttribute(s, l),
        ir.fromBufferAttribute(s, c),
        (d.uv1 = jt.getInterpolation(rr, ri, si, ai, tr, nr, ir, new Ve()))),
      a &&
        (Na.fromBufferAttribute(a, o),
        Fa.fromBufferAttribute(a, l),
        Oa.fromBufferAttribute(a, c),
        (d.normal = jt.getInterpolation(rr, ri, si, ai, Na, Fa, Oa, new F())),
        d.normal.dot(n.direction) > 0 && d.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new F(), materialIndex: 0 };
    jt.getNormal(ri, si, ai, f.normal), (d.face = f);
  }
  return d;
}
class zi extends qn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      d = [],
      f = [];
    let p = 0,
      m = 0;
    x("z", "y", "x", -1, -1, n, t, e, a, s, 0),
      x("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
      x("x", "z", "y", 1, 1, e, n, t, r, a, 2),
      x("x", "z", "y", 1, -1, e, n, -t, r, a, 3),
      x("x", "y", "z", 1, -1, e, t, n, r, s, 4),
      x("x", "y", "z", -1, -1, e, t, -n, r, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Gn(c, 3)),
      this.setAttribute("normal", new Gn(d, 3)),
      this.setAttribute("uv", new Gn(f, 2));
    function x(v, h, u, A, M, b, D, w, R, H, y) {
      const g = b / R,
        I = D / H,
        k = b / 2,
        C = D / 2,
        G = w / 2,
        X = R + 1,
        Z = H + 1;
      let re = 0,
        B = 0;
      const Q = new F();
      for (let J = 0; J < Z; J++) {
        const de = J * I - C;
        for (let Fe = 0; Fe < X; Fe++) {
          const Ge = Fe * g - k;
          (Q[v] = Ge * A),
            (Q[h] = de * M),
            (Q[u] = G),
            c.push(Q.x, Q.y, Q.z),
            (Q[v] = 0),
            (Q[h] = 0),
            (Q[u] = w > 0 ? 1 : -1),
            d.push(Q.x, Q.y, Q.z),
            f.push(Fe / R),
            f.push(1 - J / H),
            (re += 1);
        }
      }
      for (let J = 0; J < H; J++)
        for (let de = 0; de < R; de++) {
          const Fe = p + de + X * J,
            Ge = p + de + X * (J + 1),
            V = p + (de + 1) + X * (J + 1),
            ee = p + (de + 1) + X * J;
          l.push(Fe, Ge, ee), l.push(Ge, V, ee), (B += 6);
        }
      o.addGroup(m, B, y), (m += B), (p += re);
    }
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new zi(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function xi(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
            ),
            (e[t][n] = null))
          : (e[t][n] = r.clone())
        : Array.isArray(r)
        ? (e[t][n] = r.slice())
        : (e[t][n] = r);
    }
  }
  return e;
}
function _t(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = xi(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Au(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function Io(i) {
  const e = i.getRenderTarget();
  return e === null
    ? i.outputColorSpace
    : e.isXRRenderTarget === !0
    ? e.texture.colorSpace
    : We.workingColorSpace;
}
const bu = { clone: xi, merge: _t };
var wu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Ru = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Jt extends Er {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = wu),
      (this.fragmentShader = Ru),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = xi(e.uniforms)),
      (this.uniformsGroups = Au(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (t.uniforms[r] = { type: "c", value: a.getHex() })
        : a && a.isVector2
        ? (t.uniforms[r] = { type: "v2", value: a.toArray() })
        : a && a.isVector3
        ? (t.uniforms[r] = { type: "v3", value: a.toArray() })
        : a && a.isVector4
        ? (t.uniforms[r] = { type: "v4", value: a.toArray() })
        : a && a.isMatrix3
        ? (t.uniforms[r] = { type: "m3", value: a.toArray() })
        : a && a.isMatrix4
        ? (t.uniforms[r] = { type: "m4", value: a.toArray() })
        : (t.uniforms[r] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping);
    const n = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class No extends Pt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new rt()),
      (this.projectionMatrix = new rt()),
      (this.projectionMatrixInverse = new rt()),
      (this.coordinateSystem = cn);
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const vn = new F(),
  za = new Ve(),
  Ba = new Ve();
class Dt extends No {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = ys * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Hr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return ys * 2 * Math.atan(Math.tan(Hr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    vn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(vn.x, vn.y).multiplyScalar(-e / vn.z),
      vn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(vn.x, vn.y).multiplyScalar(-e / vn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, za, Ba), t.subVectors(Ba, za);
  }
  setViewOffset(e, t, n, r, s, a) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(Hr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      r = this.aspect * n,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * r) / l),
        (t -= (a.offsetY * n) / c),
        (r *= a.width / l),
        (n *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        s,
        s + r,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const oi = -90,
  li = 1;
class Cu extends Pt {
  constructor(e, t, n) {
    super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new Dt(oi, li, e, t);
    (r.layers = this.layers), this.add(r);
    const s = new Dt(oi, li, e, t);
    (s.layers = this.layers), this.add(s);
    const a = new Dt(oi, li, e, t);
    (a.layers = this.layers), this.add(a);
    const o = new Dt(oi, li, e, t);
    (o.layers = this.layers), this.add(o);
    const l = new Dt(oi, li, e, t);
    (l.layers = this.layers), this.add(l);
    const c = new Dt(oi, li, e, t);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === cn)
      n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === xr)
      n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e
      );
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [s, a, o, l, c, d] = this.children,
      f = e.getRenderTarget(),
      p = e.getActiveCubeFace(),
      m = e.getActiveMipmapLevel(),
      x = e.xr.enabled;
    e.xr.enabled = !1;
    const v = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, r),
      e.render(t, s),
      e.setRenderTarget(n, 1, r),
      e.render(t, a),
      e.setRenderTarget(n, 2, r),
      e.render(t, o),
      e.setRenderTarget(n, 3, r),
      e.render(t, l),
      e.setRenderTarget(n, 4, r),
      e.render(t, c),
      (n.texture.generateMipmaps = v),
      e.setRenderTarget(n, 5, r),
      e.render(t, d),
      e.setRenderTarget(f, p, m),
      (e.xr.enabled = x),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Fo extends At {
  constructor(e, t, n, r, s, a, o, l, c, d) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : _i),
      super(e, t, n, r, s, a, o, l, c, d),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Pu extends un {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    (this.texture = new Fo(
      r,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.colorSpace
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Vt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new zi(5, 5, 5),
      s = new Jt({
        name: "CubemapFromEquirect",
        uniforms: xi(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Tt,
        blending: Mn,
      });
    s.uniforms.tEquirect.value = t;
    const a = new Gt(r, s),
      o = t.minFilter;
    return (
      t.minFilter === Hn && (t.minFilter = Vt),
      new Cu(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const ss = new F(),
  Lu = new F(),
  Uu = new Ie();
class Nn {
  constructor(e = new F(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = ss.subVectors(n, t).cross(Lu.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(ss),
      r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Uu.getNormalMatrix(e),
      r = this.coplanarPoint(ss).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Un = new Cs(),
  or = new F();
class Oo {
  constructor(
    e = new Nn(),
    t = new Nn(),
    n = new Nn(),
    r = new Nn(),
    s = new Nn(),
    a = new Nn()
  ) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(r),
      o[4].copy(s),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = cn) {
    const n = this.planes,
      r = e.elements,
      s = r[0],
      a = r[1],
      o = r[2],
      l = r[3],
      c = r[4],
      d = r[5],
      f = r[6],
      p = r[7],
      m = r[8],
      x = r[9],
      v = r[10],
      h = r[11],
      u = r[12],
      A = r[13],
      M = r[14],
      b = r[15];
    if (
      (n[0].setComponents(l - s, p - c, h - m, b - u).normalize(),
      n[1].setComponents(l + s, p + c, h + m, b + u).normalize(),
      n[2].setComponents(l + a, p + d, h + x, b + A).normalize(),
      n[3].setComponents(l - a, p - d, h - x, b - A).normalize(),
      n[4].setComponents(l - o, p - f, h - v, b - M).normalize(),
      t === cn)
    )
      n[5].setComponents(l + o, p + f, h + v, b + M).normalize();
    else if (t === xr) n[5].setComponents(o, f, v, M).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(),
        Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Un);
  }
  intersectsSprite(e) {
    return (
      Un.center.set(0, 0, 0),
      (Un.radius = 0.7071067811865476),
      Un.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(Un)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (
        ((or.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (or.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (or.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(or) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function zo() {
  let i = null,
    e = !1,
    t = null,
    n = null;
  function r(s, a) {
    t(s, a), (n = i.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = i.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      i.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      i = s;
    },
  };
}
function Du(i) {
  const e = new WeakMap();
  function t(o, l) {
    const c = o.array,
      d = o.usage,
      f = c.byteLength,
      p = i.createBuffer();
    i.bindBuffer(l, p), i.bufferData(l, c, d), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (m = i.HALF_FLOAT) : (m = i.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + c
      );
    return {
      buffer: p,
      type: m,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: f,
    };
  }
  function n(o, l, c) {
    const d = l.array,
      f = l._updateRange,
      p = l.updateRanges;
    if (
      (i.bindBuffer(c, o),
      f.count === -1 && p.length === 0 && i.bufferSubData(c, 0, d),
      p.length !== 0)
    ) {
      for (let m = 0, x = p.length; m < x; m++) {
        const v = p[m];
        i.bufferSubData(c, v.start * d.BYTES_PER_ELEMENT, d, v.start, v.count);
      }
      l.clearUpdateRanges();
    }
    f.count !== -1 &&
      (i.bufferSubData(c, f.offset * d.BYTES_PER_ELEMENT, d, f.offset, f.count),
      (f.count = -1)),
      l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isGLBufferAttribute) {
      const d = e.get(o);
      (!d || d.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    o.isInterleavedBufferAttribute && (o = o.data);
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      n(c.buffer, o, l), (c.version = o.version);
    }
  }
  return { get: r, remove: s, update: a };
}
class Si extends qn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: r,
      });
    const s = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(r),
      c = o + 1,
      d = l + 1,
      f = e / o,
      p = t / l,
      m = [],
      x = [],
      v = [],
      h = [];
    for (let u = 0; u < d; u++) {
      const A = u * p - a;
      for (let M = 0; M < c; M++) {
        const b = M * f - s;
        x.push(b, -A, 0), v.push(0, 0, 1), h.push(M / o), h.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let A = 0; A < o; A++) {
        const M = A + c * u,
          b = A + c * (u + 1),
          D = A + 1 + c * (u + 1),
          w = A + 1 + c * u;
        m.push(M, b, w), m.push(b, D, w);
      }
    this.setIndex(m),
      this.setAttribute("position", new Gn(x, 3)),
      this.setAttribute("normal", new Gn(v, 3)),
      this.setAttribute("uv", new Gn(h, 2));
  }
  copy(e) {
    return (
      super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this
    );
  }
  static fromJSON(e) {
    return new Si(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Iu = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  Nu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  Fu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  Ou = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  zu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  Bu = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Hu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Vu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Gu = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  ku = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  Wu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  Xu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  qu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  Yu = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  Ku = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ju = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  Zu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  $u = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Ju = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Qu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  ed = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  td = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  nd = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  id = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  rd = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  sd = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  ad = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  od = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  ld = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  cd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  ud = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  dd = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  hd = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  fd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  pd = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  md = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  _d = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  gd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  vd = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  xd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Md = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Sd = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  yd = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Ed = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Td = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Ad = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  bd = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  wd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Rd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Cd = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Pd = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Ld = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Ud = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  Dd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Id = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Nd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Fd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  Od = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  zd = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Bd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Hd = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Vd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Gd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  kd = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Wd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Xd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  qd = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Yd = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Kd = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  jd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  Zd = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  $d = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  Jd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Qd = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  eh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  th = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  nh = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  ih = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  rh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  sh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  ah = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  oh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  lh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  ch = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  uh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  dh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  hh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  fh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  ph = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  mh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  _h = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,
  gh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  vh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  xh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Mh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Sh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  yh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Eh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Th = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Ah = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  bh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  wh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Rh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Ch = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  Ph = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Lh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Uh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  Dh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Ih = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Nh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Fh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Oh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  zh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Bh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  Hh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Vh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Gh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  kh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Wh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Xh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  qh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Yh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Kh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  jh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Zh = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  $h = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Jh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Qh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ef = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  tf = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  nf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  rf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  sf = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  af = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  of = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  lf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  cf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  uf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  df = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  hf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  ff = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  pf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  De = {
    alphahash_fragment: Iu,
    alphahash_pars_fragment: Nu,
    alphamap_fragment: Fu,
    alphamap_pars_fragment: Ou,
    alphatest_fragment: zu,
    alphatest_pars_fragment: Bu,
    aomap_fragment: Hu,
    aomap_pars_fragment: Vu,
    batching_pars_vertex: Gu,
    batching_vertex: ku,
    begin_vertex: Wu,
    beginnormal_vertex: Xu,
    bsdfs: qu,
    iridescence_fragment: Yu,
    bumpmap_pars_fragment: Ku,
    clipping_planes_fragment: ju,
    clipping_planes_pars_fragment: Zu,
    clipping_planes_pars_vertex: $u,
    clipping_planes_vertex: Ju,
    color_fragment: Qu,
    color_pars_fragment: ed,
    color_pars_vertex: td,
    color_vertex: nd,
    common: id,
    cube_uv_reflection_fragment: rd,
    defaultnormal_vertex: sd,
    displacementmap_pars_vertex: ad,
    displacementmap_vertex: od,
    emissivemap_fragment: ld,
    emissivemap_pars_fragment: cd,
    colorspace_fragment: ud,
    colorspace_pars_fragment: dd,
    envmap_fragment: hd,
    envmap_common_pars_fragment: fd,
    envmap_pars_fragment: pd,
    envmap_pars_vertex: md,
    envmap_physical_pars_fragment: wd,
    envmap_vertex: _d,
    fog_vertex: gd,
    fog_pars_vertex: vd,
    fog_fragment: xd,
    fog_pars_fragment: Md,
    gradientmap_pars_fragment: Sd,
    lightmap_fragment: yd,
    lightmap_pars_fragment: Ed,
    lights_lambert_fragment: Td,
    lights_lambert_pars_fragment: Ad,
    lights_pars_begin: bd,
    lights_toon_fragment: Rd,
    lights_toon_pars_fragment: Cd,
    lights_phong_fragment: Pd,
    lights_phong_pars_fragment: Ld,
    lights_physical_fragment: Ud,
    lights_physical_pars_fragment: Dd,
    lights_fragment_begin: Id,
    lights_fragment_maps: Nd,
    lights_fragment_end: Fd,
    logdepthbuf_fragment: Od,
    logdepthbuf_pars_fragment: zd,
    logdepthbuf_pars_vertex: Bd,
    logdepthbuf_vertex: Hd,
    map_fragment: Vd,
    map_pars_fragment: Gd,
    map_particle_fragment: kd,
    map_particle_pars_fragment: Wd,
    metalnessmap_fragment: Xd,
    metalnessmap_pars_fragment: qd,
    morphinstance_vertex: Yd,
    morphcolor_vertex: Kd,
    morphnormal_vertex: jd,
    morphtarget_pars_vertex: Zd,
    morphtarget_vertex: $d,
    normal_fragment_begin: Jd,
    normal_fragment_maps: Qd,
    normal_pars_fragment: eh,
    normal_pars_vertex: th,
    normal_vertex: nh,
    normalmap_pars_fragment: ih,
    clearcoat_normal_fragment_begin: rh,
    clearcoat_normal_fragment_maps: sh,
    clearcoat_pars_fragment: ah,
    iridescence_pars_fragment: oh,
    opaque_fragment: lh,
    packing: ch,
    premultiplied_alpha_fragment: uh,
    project_vertex: dh,
    dithering_fragment: hh,
    dithering_pars_fragment: fh,
    roughnessmap_fragment: ph,
    roughnessmap_pars_fragment: mh,
    shadowmap_pars_fragment: _h,
    shadowmap_pars_vertex: gh,
    shadowmap_vertex: vh,
    shadowmask_pars_fragment: xh,
    skinbase_vertex: Mh,
    skinning_pars_vertex: Sh,
    skinning_vertex: yh,
    skinnormal_vertex: Eh,
    specularmap_fragment: Th,
    specularmap_pars_fragment: Ah,
    tonemapping_fragment: bh,
    tonemapping_pars_fragment: wh,
    transmission_fragment: Rh,
    transmission_pars_fragment: Ch,
    uv_pars_fragment: Ph,
    uv_pars_vertex: Lh,
    uv_vertex: Uh,
    worldpos_vertex: Dh,
    background_vert: Ih,
    background_frag: Nh,
    backgroundCube_vert: Fh,
    backgroundCube_frag: Oh,
    cube_vert: zh,
    cube_frag: Bh,
    depth_vert: Hh,
    depth_frag: Vh,
    distanceRGBA_vert: Gh,
    distanceRGBA_frag: kh,
    equirect_vert: Wh,
    equirect_frag: Xh,
    linedashed_vert: qh,
    linedashed_frag: Yh,
    meshbasic_vert: Kh,
    meshbasic_frag: jh,
    meshlambert_vert: Zh,
    meshlambert_frag: $h,
    meshmatcap_vert: Jh,
    meshmatcap_frag: Qh,
    meshnormal_vert: ef,
    meshnormal_frag: tf,
    meshphong_vert: nf,
    meshphong_frag: rf,
    meshphysical_vert: sf,
    meshphysical_frag: af,
    meshtoon_vert: of,
    meshtoon_frag: lf,
    points_vert: cf,
    points_frag: uf,
    shadow_vert: df,
    shadow_frag: hf,
    sprite_vert: ff,
    sprite_frag: pf,
  },
  ie = {
    common: {
      diffuse: { value: new Xe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Ie() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ie() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ie() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ie() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ie() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ie() },
      normalScale: { value: new Ve(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ie() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Ie() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Ie() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Ie() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Xe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Xe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ie() },
    },
    sprite: {
      diffuse: { value: new Xe(16777215) },
      opacity: { value: 1 },
      center: { value: new Ve(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
  },
  Kt = {
    basic: {
      uniforms: _t([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.fog,
      ]),
      vertexShader: De.meshbasic_vert,
      fragmentShader: De.meshbasic_frag,
    },
    lambert: {
      uniforms: _t([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new Xe(0) } },
      ]),
      vertexShader: De.meshlambert_vert,
      fragmentShader: De.meshlambert_frag,
    },
    phong: {
      uniforms: _t([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new Xe(0) },
          specular: { value: new Xe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: De.meshphong_vert,
      fragmentShader: De.meshphong_frag,
    },
    standard: {
      uniforms: _t([
        ie.common,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.roughnessmap,
        ie.metalnessmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new Xe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: De.meshphysical_vert,
      fragmentShader: De.meshphysical_frag,
    },
    toon: {
      uniforms: _t([
        ie.common,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.gradientmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new Xe(0) } },
      ]),
      vertexShader: De.meshtoon_vert,
      fragmentShader: De.meshtoon_frag,
    },
    matcap: {
      uniforms: _t([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: De.meshmatcap_vert,
      fragmentShader: De.meshmatcap_frag,
    },
    points: {
      uniforms: _t([ie.points, ie.fog]),
      vertexShader: De.points_vert,
      fragmentShader: De.points_frag,
    },
    dashed: {
      uniforms: _t([
        ie.common,
        ie.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: De.linedashed_vert,
      fragmentShader: De.linedashed_frag,
    },
    depth: {
      uniforms: _t([ie.common, ie.displacementmap]),
      vertexShader: De.depth_vert,
      fragmentShader: De.depth_frag,
    },
    normal: {
      uniforms: _t([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: De.meshnormal_vert,
      fragmentShader: De.meshnormal_frag,
    },
    sprite: {
      uniforms: _t([ie.sprite, ie.fog]),
      vertexShader: De.sprite_vert,
      fragmentShader: De.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ie() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: De.background_vert,
      fragmentShader: De.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ie() },
      },
      vertexShader: De.backgroundCube_vert,
      fragmentShader: De.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: De.cube_vert,
      fragmentShader: De.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: De.equirect_vert,
      fragmentShader: De.equirect_frag,
    },
    distanceRGBA: {
      uniforms: _t([
        ie.common,
        ie.displacementmap,
        {
          referencePosition: { value: new F() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: De.distanceRGBA_vert,
      fragmentShader: De.distanceRGBA_frag,
    },
    shadow: {
      uniforms: _t([
        ie.lights,
        ie.fog,
        { color: { value: new Xe(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: De.shadow_vert,
      fragmentShader: De.shadow_frag,
    },
  };
Kt.physical = {
  uniforms: _t([
    Kt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ie() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ie() },
      clearcoatNormalScale: { value: new Ve(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ie() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ie() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ie() },
      sheen: { value: 0 },
      sheenColor: { value: new Xe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ie() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ie() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ie() },
      transmissionSamplerSize: { value: new Ve() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ie() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Xe(0) },
      specularColor: { value: new Xe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ie() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ie() },
      anisotropyVector: { value: new Ve() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ie() },
    },
  ]),
  vertexShader: De.meshphysical_vert,
  fragmentShader: De.meshphysical_frag,
};
const lr = { r: 0, b: 0, g: 0 },
  Dn = new dn(),
  mf = new rt();
function _f(i, e, t, n, r, s, a) {
  const o = new Xe(0);
  let l = s === !0 ? 0 : 1,
    c,
    d,
    f = null,
    p = 0,
    m = null;
  function x(h, u) {
    let A = !1,
      M = u.isScene === !0 ? u.background : null;
    M && M.isTexture && (M = (u.backgroundBlurriness > 0 ? t : e).get(M)),
      M === null ? v(o, l) : M && M.isColor && (v(M, 1), (A = !0));
    const b = i.xr.getEnvironmentBlendMode();
    b === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (i.autoClear || A) &&
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === Sr)
        ? (d === void 0 &&
            ((d = new Gt(
              new zi(1, 1, 1),
              new Jt({
                name: "BackgroundCubeMaterial",
                uniforms: xi(Kt.backgroundCube.uniforms),
                vertexShader: Kt.backgroundCube.vertexShader,
                fragmentShader: Kt.backgroundCube.fragmentShader,
                side: Tt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            d.geometry.deleteAttribute("normal"),
            d.geometry.deleteAttribute("uv"),
            (d.onBeforeRender = function (D, w, R) {
              this.matrixWorld.copyPosition(R.matrixWorld);
            }),
            Object.defineProperty(d.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(d)),
          Dn.copy(u.backgroundRotation),
          (Dn.x *= -1),
          (Dn.y *= -1),
          (Dn.z *= -1),
          M.isCubeTexture &&
            M.isRenderTargetTexture === !1 &&
            ((Dn.y *= -1), (Dn.z *= -1)),
          (d.material.uniforms.envMap.value = M),
          (d.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (d.material.uniforms.backgroundBlurriness.value =
            u.backgroundBlurriness),
          (d.material.uniforms.backgroundIntensity.value =
            u.backgroundIntensity),
          d.material.uniforms.backgroundRotation.value.setFromMatrix4(
            mf.makeRotationFromEuler(Dn)
          ),
          (d.material.toneMapped = We.getTransfer(M.colorSpace) !== je),
          (f !== M || p !== M.version || m !== i.toneMapping) &&
            ((d.material.needsUpdate = !0),
            (f = M),
            (p = M.version),
            (m = i.toneMapping)),
          d.layers.enableAll(),
          h.unshift(d, d.geometry, d.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (c === void 0 &&
            ((c = new Gt(
              new Si(2, 2),
              new Jt({
                name: "BackgroundMaterial",
                uniforms: xi(Kt.background.uniforms),
                vertexShader: Kt.background.vertexShader,
                fragmentShader: Kt.background.fragmentShader,
                side: En,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.t2D.value = M),
          (c.material.uniforms.backgroundIntensity.value =
            u.backgroundIntensity),
          (c.material.toneMapped = We.getTransfer(M.colorSpace) !== je),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(M.matrix),
          (f !== M || p !== M.version || m !== i.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = M),
            (p = M.version),
            (m = i.toneMapping)),
          c.layers.enableAll(),
          h.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function v(h, u) {
    h.getRGB(lr, Io(i)), n.buffers.color.setClear(lr.r, lr.g, lr.b, u, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (h, u = 1) {
      o.set(h), (l = u), v(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (h) {
      (l = h), v(o, l);
    },
    render: x,
  };
}
function gf(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    n = {},
    r = p(null);
  let s = r,
    a = !1;
  function o(g, I, k, C, G) {
    let X = !1;
    const Z = f(C, k, I);
    s !== Z && ((s = Z), c(s.object)),
      (X = m(g, C, k, G)),
      X && x(g, C, k, G),
      G !== null && e.update(G, i.ELEMENT_ARRAY_BUFFER),
      (X || a) &&
        ((a = !1),
        b(g, I, k, C),
        G !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(G).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(g) {
    return i.bindVertexArray(g);
  }
  function d(g) {
    return i.deleteVertexArray(g);
  }
  function f(g, I, k) {
    const C = k.wireframe === !0;
    let G = n[g.id];
    G === void 0 && ((G = {}), (n[g.id] = G));
    let X = G[I.id];
    X === void 0 && ((X = {}), (G[I.id] = X));
    let Z = X[C];
    return Z === void 0 && ((Z = p(l())), (X[C] = Z)), Z;
  }
  function p(g) {
    const I = [],
      k = [],
      C = [];
    for (let G = 0; G < t; G++) (I[G] = 0), (k[G] = 0), (C[G] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: I,
      enabledAttributes: k,
      attributeDivisors: C,
      object: g,
      attributes: {},
      index: null,
    };
  }
  function m(g, I, k, C) {
    const G = s.attributes,
      X = I.attributes;
    let Z = 0;
    const re = k.getAttributes();
    for (const B in re)
      if (re[B].location >= 0) {
        const J = G[B];
        let de = X[B];
        if (
          (de === void 0 &&
            (B === "instanceMatrix" &&
              g.instanceMatrix &&
              (de = g.instanceMatrix),
            B === "instanceColor" && g.instanceColor && (de = g.instanceColor)),
          J === void 0 || J.attribute !== de || (de && J.data !== de.data))
        )
          return !0;
        Z++;
      }
    return s.attributesNum !== Z || s.index !== C;
  }
  function x(g, I, k, C) {
    const G = {},
      X = I.attributes;
    let Z = 0;
    const re = k.getAttributes();
    for (const B in re)
      if (re[B].location >= 0) {
        let J = X[B];
        J === void 0 &&
          (B === "instanceMatrix" && g.instanceMatrix && (J = g.instanceMatrix),
          B === "instanceColor" && g.instanceColor && (J = g.instanceColor));
        const de = {};
        (de.attribute = J), J && J.data && (de.data = J.data), (G[B] = de), Z++;
      }
    (s.attributes = G), (s.attributesNum = Z), (s.index = C);
  }
  function v() {
    const g = s.newAttributes;
    for (let I = 0, k = g.length; I < k; I++) g[I] = 0;
  }
  function h(g) {
    u(g, 0);
  }
  function u(g, I) {
    const k = s.newAttributes,
      C = s.enabledAttributes,
      G = s.attributeDivisors;
    (k[g] = 1),
      C[g] === 0 && (i.enableVertexAttribArray(g), (C[g] = 1)),
      G[g] !== I && (i.vertexAttribDivisor(g, I), (G[g] = I));
  }
  function A() {
    const g = s.newAttributes,
      I = s.enabledAttributes;
    for (let k = 0, C = I.length; k < C; k++)
      I[k] !== g[k] && (i.disableVertexAttribArray(k), (I[k] = 0));
  }
  function M(g, I, k, C, G, X, Z) {
    Z === !0
      ? i.vertexAttribIPointer(g, I, k, G, X)
      : i.vertexAttribPointer(g, I, k, C, G, X);
  }
  function b(g, I, k, C) {
    v();
    const G = C.attributes,
      X = k.getAttributes(),
      Z = I.defaultAttributeValues;
    for (const re in X) {
      const B = X[re];
      if (B.location >= 0) {
        let Q = G[re];
        if (
          (Q === void 0 &&
            (re === "instanceMatrix" &&
              g.instanceMatrix &&
              (Q = g.instanceMatrix),
            re === "instanceColor" && g.instanceColor && (Q = g.instanceColor)),
          Q !== void 0)
        ) {
          const J = Q.normalized,
            de = Q.itemSize,
            Fe = e.get(Q);
          if (Fe === void 0) continue;
          const Ge = Fe.buffer,
            V = Fe.type,
            ee = Fe.bytesPerElement,
            le = V === i.INT || V === i.UNSIGNED_INT || Q.gpuType === xo;
          if (Q.isInterleavedBufferAttribute) {
            const ae = Q.data,
              be = ae.stride,
              Le = Q.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let ze = 0; ze < B.locationSize; ze++)
                u(B.location + ze, ae.meshPerAttribute);
              g.isInstancedMesh !== !0 &&
                C._maxInstanceCount === void 0 &&
                (C._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let ze = 0; ze < B.locationSize; ze++) h(B.location + ze);
            i.bindBuffer(i.ARRAY_BUFFER, Ge);
            for (let ze = 0; ze < B.locationSize; ze++)
              M(
                B.location + ze,
                de / B.locationSize,
                V,
                J,
                be * ee,
                (Le + (de / B.locationSize) * ze) * ee,
                le
              );
          } else {
            if (Q.isInstancedBufferAttribute) {
              for (let ae = 0; ae < B.locationSize; ae++)
                u(B.location + ae, Q.meshPerAttribute);
              g.isInstancedMesh !== !0 &&
                C._maxInstanceCount === void 0 &&
                (C._maxInstanceCount = Q.meshPerAttribute * Q.count);
            } else
              for (let ae = 0; ae < B.locationSize; ae++) h(B.location + ae);
            i.bindBuffer(i.ARRAY_BUFFER, Ge);
            for (let ae = 0; ae < B.locationSize; ae++)
              M(
                B.location + ae,
                de / B.locationSize,
                V,
                J,
                de * ee,
                (de / B.locationSize) * ae * ee,
                le
              );
          }
        } else if (Z !== void 0) {
          const J = Z[re];
          if (J !== void 0)
            switch (J.length) {
              case 2:
                i.vertexAttrib2fv(B.location, J);
                break;
              case 3:
                i.vertexAttrib3fv(B.location, J);
                break;
              case 4:
                i.vertexAttrib4fv(B.location, J);
                break;
              default:
                i.vertexAttrib1fv(B.location, J);
            }
        }
      }
    }
    A();
  }
  function D() {
    H();
    for (const g in n) {
      const I = n[g];
      for (const k in I) {
        const C = I[k];
        for (const G in C) d(C[G].object), delete C[G];
        delete I[k];
      }
      delete n[g];
    }
  }
  function w(g) {
    if (n[g.id] === void 0) return;
    const I = n[g.id];
    for (const k in I) {
      const C = I[k];
      for (const G in C) d(C[G].object), delete C[G];
      delete I[k];
    }
    delete n[g.id];
  }
  function R(g) {
    for (const I in n) {
      const k = n[I];
      if (k[g.id] === void 0) continue;
      const C = k[g.id];
      for (const G in C) d(C[G].object), delete C[G];
      delete k[g.id];
    }
  }
  function H() {
    y(), (a = !0), s !== r && ((s = r), c(s.object));
  }
  function y() {
    (r.geometry = null), (r.program = null), (r.wireframe = !1);
  }
  return {
    setup: o,
    reset: H,
    resetDefaultState: y,
    dispose: D,
    releaseStatesOfGeometry: w,
    releaseStatesOfProgram: R,
    initAttributes: v,
    enableAttribute: h,
    disableUnusedAttributes: A,
  };
}
function vf(i, e, t) {
  let n;
  function r(l) {
    n = l;
  }
  function s(l, c) {
    i.drawArrays(n, l, c), t.update(c, n, 1);
  }
  function a(l, c, d) {
    d !== 0 && (i.drawArraysInstanced(n, l, c, d), t.update(c, n, d));
  }
  function o(l, c, d) {
    if (d === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null) for (let p = 0; p < d; p++) this.render(l[p], c[p]);
    else {
      f.multiDrawArraysWEBGL(n, l, 0, c, 0, d);
      let p = 0;
      for (let m = 0; m < d; m++) p += c[m];
      t.update(p, n, 1);
    }
  }
  (this.setMode = r),
    (this.render = s),
    (this.renderInstances = a),
    (this.renderMultiDraw = o);
}
function xf(i, e, t) {
  let n;
  function r() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const M = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(M) {
    if (M === "highp") {
      if (
        i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision >
          0 &&
        i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      M = "mediump";
    }
    return M === "mediump" &&
      i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision >
        0 &&
      i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let a = t.precision !== void 0 ? t.precision : "highp";
  const o = s(a);
  o !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      o,
      "instead."
    ),
    (a = o));
  const l = t.logarithmicDepthBuffer === !0,
    c = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    f = i.getParameter(i.MAX_TEXTURE_SIZE),
    p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    m = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    x = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    v = i.getParameter(i.MAX_VARYING_VECTORS),
    h = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    u = d > 0,
    A = i.getParameter(i.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: l,
    maxTextures: c,
    maxVertexTextures: d,
    maxTextureSize: f,
    maxCubemapSize: p,
    maxAttributes: m,
    maxVertexUniforms: x,
    maxVaryings: v,
    maxFragmentUniforms: h,
    vertexTextures: u,
    maxSamples: A,
  };
}
function Mf(i) {
  const e = this;
  let t = null,
    n = 0,
    r = !1,
    s = !1;
  const a = new Nn(),
    o = new Ie(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, p) {
      const m = f.length !== 0 || p || n !== 0 || r;
      return (r = p), (n = f.length), m;
    }),
    (this.beginShadows = function () {
      (s = !0), d(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, p) {
      t = d(f, p, 0);
    }),
    (this.setState = function (f, p, m) {
      const x = f.clippingPlanes,
        v = f.clipIntersection,
        h = f.clipShadows,
        u = i.get(f);
      if (!r || x === null || x.length === 0 || (s && !h)) s ? d(null) : c();
      else {
        const A = s ? 0 : n,
          M = A * 4;
        let b = u.clippingState || null;
        (l.value = b), (b = d(x, p, M, m));
        for (let D = 0; D !== M; ++D) b[D] = t[D];
        (u.clippingState = b),
          (this.numIntersection = v ? this.numPlanes : 0),
          (this.numPlanes += A);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function d(f, p, m, x) {
    const v = f !== null ? f.length : 0;
    let h = null;
    if (v !== 0) {
      if (((h = l.value), x !== !0 || h === null)) {
        const u = m + v * 4,
          A = p.matrixWorldInverse;
        o.getNormalMatrix(A),
          (h === null || h.length < u) && (h = new Float32Array(u));
        for (let M = 0, b = m; M !== v; ++M, b += 4)
          a.copy(f[M]).applyMatrix4(A, o),
            a.normal.toArray(h, b),
            (h[b + 3] = a.constant);
      }
      (l.value = h), (l.needsUpdate = !0);
    }
    return (e.numPlanes = v), (e.numIntersection = 0), h;
  }
}
function Sf(i) {
  let e = new WeakMap();
  function t(a, o) {
    return o === vs ? (a.mapping = _i) : o === xs && (a.mapping = gi), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === vs || o === xs)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Pu(l.height);
            return (
              c.fromEquirectangularTexture(i, a),
              e.set(a, c),
              a.addEventListener("dispose", r),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class yf extends No {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = n - e,
      a = n + e,
      o = r + t,
      l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= d * this.view.offsetY),
        (l = o - d * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(
      s,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const ui = 4,
  Ha = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  zn = 20,
  as = new yf(),
  Va = new Xe();
let os = null,
  ls = 0,
  cs = 0,
  us = !1;
const Fn = (1 + Math.sqrt(5)) / 2,
  ci = 1 / Fn,
  Ga = [
    new F(1, 1, 1),
    new F(-1, 1, 1),
    new F(1, 1, -1),
    new F(-1, 1, -1),
    new F(0, Fn, ci),
    new F(0, Fn, -ci),
    new F(ci, 0, Fn),
    new F(-ci, 0, Fn),
    new F(Fn, ci, 0),
    new F(-Fn, ci, 0),
  ];
class ka {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    (os = this._renderer.getRenderTarget()),
      (ls = this._renderer.getActiveCubeFace()),
      (cs = this._renderer.getActiveMipmapLevel()),
      (us = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, r, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = qa()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Xa()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(os, ls, cs),
      (this._renderer.xr.enabled = us),
      (e.scissorTest = !1),
      cr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === _i || e.mapping === gi
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (os = this._renderer.getRenderTarget()),
      (ls = this._renderer.getActiveCubeFace()),
      (cs = this._renderer.getActiveMipmapLevel()),
      (us = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1);
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: Vt,
        minFilter: Vt,
        generateMipmaps: !1,
        type: mr,
        format: Nt,
        colorSpace: Tn,
        depthBuffer: !1,
      },
      r = Wa(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Wa(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Ef(s)),
        (this._blurMaterial = Tf(s, e, t));
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Gt(this._lodPlanes[0], e);
    this._renderer.compile(t, as);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Dt(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      f = d.autoClear,
      p = d.toneMapping;
    d.getClearColor(Va), (d.toneMapping = Sn), (d.autoClear = !1);
    const m = new Tr({
        name: "PMREM.Background",
        side: Tt,
        depthWrite: !1,
        depthTest: !1,
      }),
      x = new Gt(new zi(), m);
    let v = !1;
    const h = e.background;
    h
      ? h.isColor && (m.color.copy(h), (e.background = null), (v = !0))
      : (m.color.copy(Va), (v = !0));
    for (let u = 0; u < 6; u++) {
      const A = u % 3;
      A === 0
        ? (o.up.set(0, l[u], 0), o.lookAt(c[u], 0, 0))
        : A === 1
        ? (o.up.set(0, 0, l[u]), o.lookAt(0, c[u], 0))
        : (o.up.set(0, l[u], 0), o.lookAt(0, 0, c[u]));
      const M = this._cubeSize;
      cr(r, A * M, u > 2 ? M : 0, M, M),
        d.setRenderTarget(r),
        v && d.render(x, o),
        d.render(e, o);
    }
    x.geometry.dispose(),
      x.material.dispose(),
      (d.toneMapping = p),
      (d.autoClear = f),
      (e.background = h);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      r = e.mapping === _i || e.mapping === gi;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = qa()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Xa());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new Gt(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    cr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, as);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1]
        ),
        a = Ga[(r - 1) % Ga.length];
      this._blur(e, r - 1, r, s, a);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, "latitudinal", s),
      this._halfBlur(a, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const d = 3,
      f = new Gt(this._lodPlanes[r], c),
      p = c.uniforms,
      m = this._sizeLods[n] - 1,
      x = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * zn - 1),
      v = s / x,
      h = isFinite(s) ? 1 + Math.floor(d * v) : zn;
    h > zn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${zn}`
      );
    const u = [];
    let A = 0;
    for (let R = 0; R < zn; ++R) {
      const H = R / v,
        y = Math.exp((-H * H) / 2);
      u.push(y), R === 0 ? (A += y) : R < h && (A += 2 * y);
    }
    for (let R = 0; R < u.length; R++) u[R] = u[R] / A;
    (p.envMap.value = e.texture),
      (p.samples.value = h),
      (p.weights.value = u),
      (p.latitudinal.value = a === "latitudinal"),
      o && (p.poleAxis.value = o);
    const { _lodMax: M } = this;
    (p.dTheta.value = x), (p.mipInt.value = M - n);
    const b = this._sizeLods[r],
      D = 3 * b * (r > M - ui ? r - M + ui : 0),
      w = 4 * (this._cubeSize - b);
    cr(t, D, w, 3 * b, 2 * b), l.setRenderTarget(t), l.render(f, as);
  }
}
function Ef(i) {
  const e = [],
    t = [],
    n = [];
  let r = i;
  const s = i - ui + 1 + Ha.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - ui ? (l = Ha[a - i + ui - 1]) : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2),
      d = -c,
      f = 1 + c,
      p = [d, d, f, d, f, f, d, d, f, f, d, f],
      m = 6,
      x = 6,
      v = 3,
      h = 2,
      u = 1,
      A = new Float32Array(v * x * m),
      M = new Float32Array(h * x * m),
      b = new Float32Array(u * x * m);
    for (let w = 0; w < m; w++) {
      const R = ((w % 3) * 2) / 3 - 1,
        H = w > 2 ? 0 : -1,
        y = [
          R,
          H,
          0,
          R + 2 / 3,
          H,
          0,
          R + 2 / 3,
          H + 1,
          0,
          R,
          H,
          0,
          R + 2 / 3,
          H + 1,
          0,
          R,
          H + 1,
          0,
        ];
      A.set(y, v * x * w), M.set(p, h * x * w);
      const g = [w, w, w, w, w, w];
      b.set(g, u * x * w);
    }
    const D = new qn();
    D.setAttribute("position", new $t(A, v)),
      D.setAttribute("uv", new $t(M, h)),
      D.setAttribute("faceIndex", new $t(b, u)),
      e.push(D),
      r > ui && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Wa(i, e, t) {
  const n = new un(i, e, t);
  return (
    (n.texture.mapping = Sr),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function cr(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function Tf(i, e, t) {
  const n = new Float32Array(zn),
    r = new F(0, 1, 0);
  return new Jt({
    name: "SphericalGaussianBlur",
    defines: {
      n: zn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: Ps(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Mn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Xa() {
  return new Jt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Ps(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Mn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function qa() {
  return new Jt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Ps(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Mn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ps() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Af(i) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === vs || l === xs,
        d = l === _i || l === gi;
      if (c || d) {
        let f = e.get(o);
        const p = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== p)
          return (
            t === null && (t = new ka(i)),
            (f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f)),
            (f.texture.pmremVersion = o.pmremVersion),
            e.set(o, f),
            f.texture
          );
        if (f !== void 0) return f.texture;
        {
          const m = o.image;
          return (c && m && m.height > 0) || (d && m && r(m))
            ? (t === null && (t = new ka(i)),
              (f = c ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (f.texture.pmremVersion = o.pmremVersion),
              e.set(o, f),
              o.addEventListener("dispose", s),
              f.texture)
            : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let d = 0; d < c; d++) o[d] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: a };
}
function bf(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r =
          i.getExtension("WEBGL_depth_texture") ||
          i.getExtension("MOZ_WEBGL_depth_texture") ||
          i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r =
          i.getExtension("EXT_texture_filter_anisotropic") ||
          i.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r =
          i.getExtension("WEBGL_compressed_texture_s3tc") ||
          i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r =
          i.getExtension("WEBGL_compressed_texture_pvrtc") ||
          i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return (e[n] = r), r;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent");
    },
    get: function (n) {
      const r = t(n);
      return (
        r === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        r
      );
    },
  };
}
function wf(i, e, t, n) {
  const r = {},
    s = new WeakMap();
  function a(f) {
    const p = f.target;
    p.index !== null && e.remove(p.index);
    for (const x in p.attributes) e.remove(p.attributes[x]);
    for (const x in p.morphAttributes) {
      const v = p.morphAttributes[x];
      for (let h = 0, u = v.length; h < u; h++) e.remove(v[h]);
    }
    p.removeEventListener("dispose", a), delete r[p.id];
    const m = s.get(p);
    m && (e.remove(m), s.delete(p)),
      n.releaseStatesOfGeometry(p),
      p.isInstancedBufferGeometry === !0 && delete p._maxInstanceCount,
      t.memory.geometries--;
  }
  function o(f, p) {
    return (
      r[p.id] === !0 ||
        (p.addEventListener("dispose", a),
        (r[p.id] = !0),
        t.memory.geometries++),
      p
    );
  }
  function l(f) {
    const p = f.attributes;
    for (const x in p) e.update(p[x], i.ARRAY_BUFFER);
    const m = f.morphAttributes;
    for (const x in m) {
      const v = m[x];
      for (let h = 0, u = v.length; h < u; h++) e.update(v[h], i.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const p = [],
      m = f.index,
      x = f.attributes.position;
    let v = 0;
    if (m !== null) {
      const A = m.array;
      v = m.version;
      for (let M = 0, b = A.length; M < b; M += 3) {
        const D = A[M + 0],
          w = A[M + 1],
          R = A[M + 2];
        p.push(D, w, w, R, R, D);
      }
    } else if (x !== void 0) {
      const A = x.array;
      v = x.version;
      for (let M = 0, b = A.length / 3 - 1; M < b; M += 3) {
        const D = M + 0,
          w = M + 1,
          R = M + 2;
        p.push(D, w, w, R, R, D);
      }
    } else return;
    const h = new (wo(p) ? Do : Uo)(p, 1);
    h.version = v;
    const u = s.get(f);
    u && e.remove(u), s.set(f, h);
  }
  function d(f) {
    const p = s.get(f);
    if (p) {
      const m = f.index;
      m !== null && p.version < m.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: d };
}
function Rf(i, e, t) {
  let n;
  function r(f) {
    n = f;
  }
  let s, a;
  function o(f) {
    (s = f.type), (a = f.bytesPerElement);
  }
  function l(f, p) {
    i.drawElements(n, p, s, f * a), t.update(p, n, 1);
  }
  function c(f, p, m) {
    m !== 0 && (i.drawElementsInstanced(n, p, s, f * a, m), t.update(p, n, m));
  }
  function d(f, p, m) {
    if (m === 0) return;
    const x = e.get("WEBGL_multi_draw");
    if (x === null) for (let v = 0; v < m; v++) this.render(f[v] / a, p[v]);
    else {
      x.multiDrawElementsWEBGL(n, p, 0, s, f, 0, m);
      let v = 0;
      for (let h = 0; h < m; h++) v += p[h];
      t.update(v, n, 1);
    }
  }
  (this.setMode = r),
    (this.setIndex = o),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = d);
}
function Cf(i) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch ((t.calls++, a)) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n,
  };
}
function Pf(i, e, t) {
  const n = new WeakMap(),
    r = new ut();
  function s(a, o, l) {
    const c = a.morphTargetInfluences,
      d =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      f = d !== void 0 ? d.length : 0;
    let p = n.get(o);
    if (p === void 0 || p.count !== f) {
      let y = function () {
        R.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      p !== void 0 && p.texture.dispose();
      const m = o.morphAttributes.position !== void 0,
        x = o.morphAttributes.normal !== void 0,
        v = o.morphAttributes.color !== void 0,
        h = o.morphAttributes.position || [],
        u = o.morphAttributes.normal || [],
        A = o.morphAttributes.color || [];
      let M = 0;
      m === !0 && (M = 1), x === !0 && (M = 2), v === !0 && (M = 3);
      let b = o.attributes.position.count * M,
        D = 1;
      b > e.maxTextureSize &&
        ((D = Math.ceil(b / e.maxTextureSize)), (b = e.maxTextureSize));
      const w = new Float32Array(b * D * 4 * f),
        R = new Co(w, b, D, f);
      (R.type = Zt), (R.needsUpdate = !0);
      const H = M * 4;
      for (let g = 0; g < f; g++) {
        const I = h[g],
          k = u[g],
          C = A[g],
          G = b * D * 4 * g;
        for (let X = 0; X < I.count; X++) {
          const Z = X * H;
          m === !0 &&
            (r.fromBufferAttribute(I, X),
            (w[G + Z + 0] = r.x),
            (w[G + Z + 1] = r.y),
            (w[G + Z + 2] = r.z),
            (w[G + Z + 3] = 0)),
            x === !0 &&
              (r.fromBufferAttribute(k, X),
              (w[G + Z + 4] = r.x),
              (w[G + Z + 5] = r.y),
              (w[G + Z + 6] = r.z),
              (w[G + Z + 7] = 0)),
            v === !0 &&
              (r.fromBufferAttribute(C, X),
              (w[G + Z + 8] = r.x),
              (w[G + Z + 9] = r.y),
              (w[G + Z + 10] = r.z),
              (w[G + Z + 11] = C.itemSize === 4 ? r.w : 1));
        }
      }
      (p = { count: f, texture: R, size: new Ve(b, D) }),
        n.set(o, p),
        o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let m = 0;
      for (let v = 0; v < c.length; v++) m += c[v];
      const x = o.morphTargetsRelative ? 1 : 1 - m;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", x),
        l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", p.texture, t),
      l.getUniforms().setValue(i, "morphTargetsTextureSize", p.size);
  }
  return { update: s };
}
function Lf(i, e, t, n) {
  let r = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      d = l.geometry,
      f = e.get(l, d);
    if (
      (r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        r.get(l) !== c &&
          (t.update(l.instanceMatrix, i.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const p = l.skeleton;
      r.get(p) !== c && (p.update(), r.set(p, c));
    }
    return f;
  }
  function a() {
    r = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
class Bo extends At {
  constructor(e, t, n, r, s, a, o, l, c, d) {
    if (((d = d !== void 0 ? d : pi), d !== pi && d !== Ui))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && d === pi && (n = vi),
      n === void 0 && d === Ui && (n = Ii),
      super(null, r, s, a, o, l, d, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = o !== void 0 ? o : It),
      (this.minFilter = l !== void 0 ? l : It),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
const Ho = new At(),
  Vo = new Bo(1, 1);
Vo.compareFunction = bo;
const Go = new Co(),
  ko = new fu(),
  Wo = new Fo(),
  Ya = [],
  Ka = [],
  ja = new Float32Array(16),
  Za = new Float32Array(9),
  $a = new Float32Array(4);
function yi(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Ya[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (Ya[r] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += t), i[a].toArray(s, o);
  }
  return s;
}
function st(i, e) {
  if (i.length !== e.length) return !1;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return !1;
  return !0;
}
function at(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function Ar(i, e) {
  let t = Ka[e];
  t === void 0 && ((t = new Int32Array(e)), (Ka[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function Uf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), (t[0] = e));
}
function Df(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (st(t, e)) return;
    i.uniform2fv(this.addr, e), at(t, e);
  }
}
function If(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (i.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (st(t, e)) return;
    i.uniform3fv(this.addr, e), at(t, e);
  }
}
function Nf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (st(t, e)) return;
    i.uniform4fv(this.addr, e), at(t, e);
  }
}
function Ff(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (st(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), at(t, e);
  } else {
    if (st(t, n)) return;
    $a.set(n), i.uniformMatrix2fv(this.addr, !1, $a), at(t, n);
  }
}
function Of(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (st(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), at(t, e);
  } else {
    if (st(t, n)) return;
    Za.set(n), i.uniformMatrix3fv(this.addr, !1, Za), at(t, n);
  }
}
function zf(i, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (st(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), at(t, e);
  } else {
    if (st(t, n)) return;
    ja.set(n), i.uniformMatrix4fv(this.addr, !1, ja), at(t, n);
  }
}
function Bf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), (t[0] = e));
}
function Hf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (st(t, e)) return;
    i.uniform2iv(this.addr, e), at(t, e);
  }
}
function Vf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (st(t, e)) return;
    i.uniform3iv(this.addr, e), at(t, e);
  }
}
function Gf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (st(t, e)) return;
    i.uniform4iv(this.addr, e), at(t, e);
  }
}
function kf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), (t[0] = e));
}
function Wf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (i.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (st(t, e)) return;
    i.uniform2uiv(this.addr, e), at(t, e);
  }
}
function Xf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (i.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (st(t, e)) return;
    i.uniform3uiv(this.addr, e), at(t, e);
  }
}
function qf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (st(t, e)) return;
    i.uniform4uiv(this.addr, e), at(t, e);
  }
}
function Yf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r));
  const s = this.type === i.SAMPLER_2D_SHADOW ? Vo : Ho;
  t.setTexture2D(e || s, r);
}
function Kf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture3D(e || ko, r);
}
function jf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTextureCube(e || Wo, r);
}
function Zf(i, e, t) {
  const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), (n[0] = r)),
    t.setTexture2DArray(e || Go, r);
}
function $f(i) {
  switch (i) {
    case 5126:
      return Uf;
    case 35664:
      return Df;
    case 35665:
      return If;
    case 35666:
      return Nf;
    case 35674:
      return Ff;
    case 35675:
      return Of;
    case 35676:
      return zf;
    case 5124:
    case 35670:
      return Bf;
    case 35667:
    case 35671:
      return Hf;
    case 35668:
    case 35672:
      return Vf;
    case 35669:
    case 35673:
      return Gf;
    case 5125:
      return kf;
    case 36294:
      return Wf;
    case 36295:
      return Xf;
    case 36296:
      return qf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Yf;
    case 35679:
    case 36299:
    case 36307:
      return Kf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return jf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Zf;
  }
}
function Jf(i, e) {
  i.uniform1fv(this.addr, e);
}
function Qf(i, e) {
  const t = yi(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function ep(i, e) {
  const t = yi(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function tp(i, e) {
  const t = yi(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function np(i, e) {
  const t = yi(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function ip(i, e) {
  const t = yi(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function rp(i, e) {
  const t = yi(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function sp(i, e) {
  i.uniform1iv(this.addr, e);
}
function ap(i, e) {
  i.uniform2iv(this.addr, e);
}
function op(i, e) {
  i.uniform3iv(this.addr, e);
}
function lp(i, e) {
  i.uniform4iv(this.addr, e);
}
function cp(i, e) {
  i.uniform1uiv(this.addr, e);
}
function up(i, e) {
  i.uniform2uiv(this.addr, e);
}
function dp(i, e) {
  i.uniform3uiv(this.addr, e);
}
function hp(i, e) {
  i.uniform4uiv(this.addr, e);
}
function fp(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ar(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || Ho, s[a]);
}
function pp(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ar(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || ko, s[a]);
}
function mp(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ar(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || Wo, s[a]);
}
function _p(i, e, t) {
  const n = this.cache,
    r = e.length,
    s = Ar(t, r);
  st(n, s) || (i.uniform1iv(this.addr, s), at(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || Go, s[a]);
}
function gp(i) {
  switch (i) {
    case 5126:
      return Jf;
    case 35664:
      return Qf;
    case 35665:
      return ep;
    case 35666:
      return tp;
    case 35674:
      return np;
    case 35675:
      return ip;
    case 35676:
      return rp;
    case 5124:
    case 35670:
      return sp;
    case 35667:
    case 35671:
      return ap;
    case 35668:
    case 35672:
      return op;
    case 35669:
    case 35673:
      return lp;
    case 5125:
      return cp;
    case 36294:
      return up;
    case 36295:
      return dp;
    case 36296:
      return hp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return fp;
    case 35679:
    case 36299:
    case 36307:
      return pp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return mp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return _p;
  }
}
class vp {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = $f(t.type));
  }
}
class xp {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = gp(t.type));
  }
}
class Mp {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const ds = /(\w+)(\])?(\[|\.)?/g;
function Ja(i, e) {
  i.seq.push(e), (i.map[e.id] = e);
}
function Sp(i, e, t) {
  const n = i.name,
    r = n.length;
  for (ds.lastIndex = 0; ; ) {
    const s = ds.exec(n),
      a = ds.lastIndex;
    let o = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === r))) {
      Ja(t, c === void 0 ? new vp(o, i, e) : new xp(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && ((f = new Mp(o)), Ja(t, f)), (t = f);
    }
  }
}
class hr {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r),
        a = e.getUniformLocation(t, s.name);
      Sp(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Qa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const yp = 37297;
let Ep = 0;
function Tp(i, e) {
  const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
function Ap(i) {
  const e = We.getPrimaries(We.workingColorSpace),
    t = We.getPrimaries(i);
  let n;
  switch (
    (e === t
      ? (n = "")
      : e === vr && t === gr
      ? (n = "LinearDisplayP3ToLinearSRGB")
      : e === gr && t === vr && (n = "LinearSRGBToLinearDisplayP3"),
    i)
  ) {
    case Tn:
    case yr:
      return [n, "LinearTransferOETF"];
    case Yt:
    case Rs:
      return [n, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space:", i),
        [n, "LinearTransferOETF"]
      );
  }
}
function eo(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      Tp(i.getShaderSource(e), a)
    );
  } else return r;
}
function bp(i, e) {
  const t = Ap(e);
  return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`;
}
function wp(i, e) {
  let t;
  switch (e) {
    case Pc:
      t = "Linear";
      break;
    case Lc:
      t = "Reinhard";
      break;
    case Uc:
      t = "OptimizedCineon";
      break;
    case Dc:
      t = "ACESFilmic";
      break;
    case Nc:
      t = "AgX";
      break;
    case Fc:
      t = "Neutral";
      break;
    case Ic:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Rp(i) {
  return [
    i.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(Ci).join(`
`);
}
function Cp(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Pp(i, e) {
  const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2),
      s.type === i.FLOAT_MAT3 && (o = 3),
      s.type === i.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: s.type,
        location: i.getAttribLocation(e, a),
        locationSize: o,
      });
  }
  return t;
}
function Ci(i) {
  return i !== "";
}
function to(i, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function no(i, e) {
  return i
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Lp = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Es(i) {
  return i.replace(Lp, Dp);
}
const Up = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"],
]);
function Dp(i, e) {
  let t = De[e];
  if (t === void 0) {
    const n = Up.get(e);
    if (n !== void 0)
      (t = De[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n
        );
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Es(t);
}
const Ip =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function io(i) {
  return i.replace(Ip, Np);
}
function Np(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function ro(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return (
    i.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : i.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : i.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Fp(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    i.shadowMapType === mo
      ? (e = "SHADOWMAP_TYPE_PCF")
      : i.shadowMapType === nc
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : i.shadowMapType === an && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Op(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case _i:
      case gi:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Sr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function zp(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case gi:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Bp(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case _o:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Rc:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Cc:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Hp(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Vp(i, e, t, n) {
  const r = i.getContext(),
    s = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = Fp(t),
    c = Op(t),
    d = zp(t),
    f = Bp(t),
    p = Hp(t),
    m = Rp(t),
    x = Cp(s),
    v = r.createProgram();
  let h,
    u,
    A = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((h = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(Ci).join(`
`)),
      h.length > 0 &&
        (h += `
`),
      (u = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
      ].filter(Ci).join(`
`)),
      u.length > 0 &&
        (u += `
`))
    : ((h = [
        ro(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + d : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(Ci).join(`
`)),
      (u = [
        ro(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        x,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + d : "",
        t.envMap ? "#define " + f : "",
        p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
        p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
        p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Sn ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Sn ? De.tonemapping_pars_fragment : "",
        t.toneMapping !== Sn ? wp("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        De.colorspace_pars_fragment,
        bp("linearToOutputTexel", t.outputColorSpace),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(Ci).join(`
`))),
    (a = Es(a)),
    (a = to(a, t)),
    (a = no(a, t)),
    (o = Es(o)),
    (o = to(o, t)),
    (o = no(o, t)),
    (a = io(a)),
    (o = io(o)),
    t.isRawShaderMaterial !== !0 &&
      ((A = `#version 300 es
`),
      (h =
        [
          m,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        h),
      (u =
        [
          "#define varying in",
          t.glslVersion === Ma
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Ma ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        u));
  const M = A + h + a,
    b = A + u + o,
    D = Qa(r, r.VERTEX_SHADER, M),
    w = Qa(r, r.FRAGMENT_SHADER, b);
  r.attachShader(v, D),
    r.attachShader(v, w),
    t.index0AttributeName !== void 0
      ? r.bindAttribLocation(v, 0, t.index0AttributeName)
      : t.morphTargets === !0 && r.bindAttribLocation(v, 0, "position"),
    r.linkProgram(v);
  function R(I) {
    if (i.debug.checkShaderErrors) {
      const k = r.getProgramInfoLog(v).trim(),
        C = r.getShaderInfoLog(D).trim(),
        G = r.getShaderInfoLog(w).trim();
      let X = !0,
        Z = !0;
      if (r.getProgramParameter(v, r.LINK_STATUS) === !1)
        if (((X = !1), typeof i.debug.onShaderError == "function"))
          i.debug.onShaderError(r, v, D, w);
        else {
          const re = eo(r, D, "vertex"),
            B = eo(r, w, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              r.getError() +
              " - VALIDATE_STATUS " +
              r.getProgramParameter(v, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              I.name +
              `
Material Type: ` +
              I.type +
              `

Program Info Log: ` +
              k +
              `
` +
              re +
              `
` +
              B
          );
        }
      else
        k !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", k)
          : (C === "" || G === "") && (Z = !1);
      Z &&
        (I.diagnostics = {
          runnable: X,
          programLog: k,
          vertexShader: { log: C, prefix: h },
          fragmentShader: { log: G, prefix: u },
        });
    }
    r.deleteShader(D), r.deleteShader(w), (H = new hr(r, v)), (y = Pp(r, v));
  }
  let H;
  this.getUniforms = function () {
    return H === void 0 && R(this), H;
  };
  let y;
  this.getAttributes = function () {
    return y === void 0 && R(this), y;
  };
  let g = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return g === !1 && (g = r.getProgramParameter(v, yp)), g;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        r.deleteProgram(v),
        (this.program = void 0);
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = Ep++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = v),
    (this.vertexShader = D),
    (this.fragmentShader = w),
    this
  );
}
let Gp = 0;
class kp {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Wp(e)), t.set(e, n)), n;
  }
}
class Wp {
  constructor(e) {
    (this.id = Gp++), (this.code = e), (this.usedTimes = 0);
  }
}
function Xp(i, e, t, n, r, s, a) {
  const o = new Po(),
    l = new kp(),
    c = new Set(),
    d = [],
    f = r.logarithmicDepthBuffer,
    p = r.vertexTextures;
  let m = r.precision;
  const x = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function v(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function h(y, g, I, k, C) {
    const G = k.fog,
      X = C.geometry,
      Z = y.isMeshStandardMaterial ? k.environment : null,
      re = (y.isMeshStandardMaterial ? t : e).get(y.envMap || Z),
      B = re && re.mapping === Sr ? re.image.height : null,
      Q = x[y.type];
    y.precision !== null &&
      ((m = r.getMaxPrecision(y.precision)),
      m !== y.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          y.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const J =
        X.morphAttributes.position ||
        X.morphAttributes.normal ||
        X.morphAttributes.color,
      de = J !== void 0 ? J.length : 0;
    let Fe = 0;
    X.morphAttributes.position !== void 0 && (Fe = 1),
      X.morphAttributes.normal !== void 0 && (Fe = 2),
      X.morphAttributes.color !== void 0 && (Fe = 3);
    let Ge, V, ee, le;
    if (Q) {
      const dt = Kt[Q];
      (Ge = dt.vertexShader), (V = dt.fragmentShader);
    } else
      (Ge = y.vertexShader),
        (V = y.fragmentShader),
        l.update(y),
        (ee = l.getVertexShaderID(y)),
        (le = l.getFragmentShaderID(y));
    const ae = i.getRenderTarget(),
      be = C.isInstancedMesh === !0,
      Le = C.isBatchedMesh === !0,
      ze = !!y.map,
      L = !!y.matcap,
      Ne = !!re,
      ge = !!y.aoMap,
      et = !!y.lightMap,
      Ee = !!y.bumpMap,
      ke = !!y.normalMap,
      E = !!y.displacementMap,
      _ = !!y.emissiveMap,
      z = !!y.metalnessMap,
      W = !!y.roughnessMap,
      K = y.anisotropy > 0,
      j = y.clearcoat > 0,
      _e = y.iridescence > 0,
      $ = y.sheen > 0,
      me = y.transmission > 0,
      ve = K && !!y.anisotropyMap,
      q = j && !!y.clearcoatMap,
      Y = j && !!y.clearcoatNormalMap,
      Se = j && !!y.clearcoatRoughnessMap,
      oe = _e && !!y.iridescenceMap,
      ce = _e && !!y.iridescenceThicknessMap,
      Ae = $ && !!y.sheenColorMap,
      Oe = $ && !!y.sheenRoughnessMap,
      Be = !!y.specularMap,
      He = !!y.specularColorMap,
      qe = !!y.specularIntensityMap,
      he = me && !!y.transmissionMap,
      T = me && !!y.thicknessMap,
      ne = !!y.gradientMap,
      te = !!y.alphaMap,
      ue = y.alphaTest > 0,
      fe = !!y.alphaHash,
      Ye = !!y.extensions;
    let Ze = Sn;
    y.toneMapped &&
      (ae === null || ae.isXRRenderTarget === !0) &&
      (Ze = i.toneMapping);
    const Je = {
      shaderID: Q,
      shaderType: y.type,
      shaderName: y.name,
      vertexShader: Ge,
      fragmentShader: V,
      defines: y.defines,
      customVertexShaderID: ee,
      customFragmentShaderID: le,
      isRawShaderMaterial: y.isRawShaderMaterial === !0,
      glslVersion: y.glslVersion,
      precision: m,
      batching: Le,
      instancing: be,
      instancingColor: be && C.instanceColor !== null,
      instancingMorph: be && C.morphTexture !== null,
      supportsVertexTextures: p,
      outputColorSpace:
        ae === null
          ? i.outputColorSpace
          : ae.isXRRenderTarget === !0
          ? ae.texture.colorSpace
          : Tn,
      alphaToCoverage: !!y.alphaToCoverage,
      map: ze,
      matcap: L,
      envMap: Ne,
      envMapMode: Ne && re.mapping,
      envMapCubeUVHeight: B,
      aoMap: ge,
      lightMap: et,
      bumpMap: Ee,
      normalMap: ke,
      displacementMap: p && E,
      emissiveMap: _,
      normalMapObjectSpace: ke && y.normalMapType === $c,
      normalMapTangentSpace: ke && y.normalMapType === Zc,
      metalnessMap: z,
      roughnessMap: W,
      anisotropy: K,
      anisotropyMap: ve,
      clearcoat: j,
      clearcoatMap: q,
      clearcoatNormalMap: Y,
      clearcoatRoughnessMap: Se,
      iridescence: _e,
      iridescenceMap: oe,
      iridescenceThicknessMap: ce,
      sheen: $,
      sheenColorMap: Ae,
      sheenRoughnessMap: Oe,
      specularMap: Be,
      specularColorMap: He,
      specularIntensityMap: qe,
      transmission: me,
      transmissionMap: he,
      thicknessMap: T,
      gradientMap: ne,
      opaque:
        y.transparent === !1 && y.blending === fi && y.alphaToCoverage === !1,
      alphaMap: te,
      alphaTest: ue,
      alphaHash: fe,
      combine: y.combine,
      mapUv: ze && v(y.map.channel),
      aoMapUv: ge && v(y.aoMap.channel),
      lightMapUv: et && v(y.lightMap.channel),
      bumpMapUv: Ee && v(y.bumpMap.channel),
      normalMapUv: ke && v(y.normalMap.channel),
      displacementMapUv: E && v(y.displacementMap.channel),
      emissiveMapUv: _ && v(y.emissiveMap.channel),
      metalnessMapUv: z && v(y.metalnessMap.channel),
      roughnessMapUv: W && v(y.roughnessMap.channel),
      anisotropyMapUv: ve && v(y.anisotropyMap.channel),
      clearcoatMapUv: q && v(y.clearcoatMap.channel),
      clearcoatNormalMapUv: Y && v(y.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Se && v(y.clearcoatRoughnessMap.channel),
      iridescenceMapUv: oe && v(y.iridescenceMap.channel),
      iridescenceThicknessMapUv: ce && v(y.iridescenceThicknessMap.channel),
      sheenColorMapUv: Ae && v(y.sheenColorMap.channel),
      sheenRoughnessMapUv: Oe && v(y.sheenRoughnessMap.channel),
      specularMapUv: Be && v(y.specularMap.channel),
      specularColorMapUv: He && v(y.specularColorMap.channel),
      specularIntensityMapUv: qe && v(y.specularIntensityMap.channel),
      transmissionMapUv: he && v(y.transmissionMap.channel),
      thicknessMapUv: T && v(y.thicknessMap.channel),
      alphaMapUv: te && v(y.alphaMap.channel),
      vertexTangents: !!X.attributes.tangent && (ke || K),
      vertexColors: y.vertexColors,
      vertexAlphas:
        y.vertexColors === !0 &&
        !!X.attributes.color &&
        X.attributes.color.itemSize === 4,
      pointsUvs: C.isPoints === !0 && !!X.attributes.uv && (ze || te),
      fog: !!G,
      useFog: y.fog === !0,
      fogExp2: !!G && G.isFogExp2,
      flatShading: y.flatShading === !0,
      sizeAttenuation: y.sizeAttenuation === !0,
      logarithmicDepthBuffer: f,
      skinning: C.isSkinnedMesh === !0,
      morphTargets: X.morphAttributes.position !== void 0,
      morphNormals: X.morphAttributes.normal !== void 0,
      morphColors: X.morphAttributes.color !== void 0,
      morphTargetsCount: de,
      morphTextureStride: Fe,
      numDirLights: g.directional.length,
      numPointLights: g.point.length,
      numSpotLights: g.spot.length,
      numSpotLightMaps: g.spotLightMap.length,
      numRectAreaLights: g.rectArea.length,
      numHemiLights: g.hemi.length,
      numDirLightShadows: g.directionalShadowMap.length,
      numPointLightShadows: g.pointShadowMap.length,
      numSpotLightShadows: g.spotShadowMap.length,
      numSpotLightShadowsWithMaps: g.numSpotLightShadowsWithMaps,
      numLightProbes: g.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: y.dithering,
      shadowMapEnabled: i.shadowMap.enabled && I.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: Ze,
      useLegacyLights: i._useLegacyLights,
      decodeVideoTexture:
        ze &&
        y.map.isVideoTexture === !0 &&
        We.getTransfer(y.map.colorSpace) === je,
      premultipliedAlpha: y.premultipliedAlpha,
      doubleSided: y.side === on,
      flipSided: y.side === Tt,
      useDepthPacking: y.depthPacking >= 0,
      depthPacking: y.depthPacking || 0,
      index0AttributeName: y.index0AttributeName,
      extensionClipCullDistance:
        Ye &&
        y.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        Ye && y.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile"
      ),
      customProgramCacheKey: y.customProgramCacheKey(),
    };
    return (
      (Je.vertexUv1s = c.has(1)),
      (Je.vertexUv2s = c.has(2)),
      (Je.vertexUv3s = c.has(3)),
      c.clear(),
      Je
    );
  }
  function u(y) {
    const g = [];
    if (
      (y.shaderID
        ? g.push(y.shaderID)
        : (g.push(y.customVertexShaderID), g.push(y.customFragmentShaderID)),
      y.defines !== void 0)
    )
      for (const I in y.defines) g.push(I), g.push(y.defines[I]);
    return (
      y.isRawShaderMaterial === !1 &&
        (A(g, y), M(g, y), g.push(i.outputColorSpace)),
      g.push(y.customProgramCacheKey),
      g.join()
    );
  }
  function A(y, g) {
    y.push(g.precision),
      y.push(g.outputColorSpace),
      y.push(g.envMapMode),
      y.push(g.envMapCubeUVHeight),
      y.push(g.mapUv),
      y.push(g.alphaMapUv),
      y.push(g.lightMapUv),
      y.push(g.aoMapUv),
      y.push(g.bumpMapUv),
      y.push(g.normalMapUv),
      y.push(g.displacementMapUv),
      y.push(g.emissiveMapUv),
      y.push(g.metalnessMapUv),
      y.push(g.roughnessMapUv),
      y.push(g.anisotropyMapUv),
      y.push(g.clearcoatMapUv),
      y.push(g.clearcoatNormalMapUv),
      y.push(g.clearcoatRoughnessMapUv),
      y.push(g.iridescenceMapUv),
      y.push(g.iridescenceThicknessMapUv),
      y.push(g.sheenColorMapUv),
      y.push(g.sheenRoughnessMapUv),
      y.push(g.specularMapUv),
      y.push(g.specularColorMapUv),
      y.push(g.specularIntensityMapUv),
      y.push(g.transmissionMapUv),
      y.push(g.thicknessMapUv),
      y.push(g.combine),
      y.push(g.fogExp2),
      y.push(g.sizeAttenuation),
      y.push(g.morphTargetsCount),
      y.push(g.morphAttributeCount),
      y.push(g.numDirLights),
      y.push(g.numPointLights),
      y.push(g.numSpotLights),
      y.push(g.numSpotLightMaps),
      y.push(g.numHemiLights),
      y.push(g.numRectAreaLights),
      y.push(g.numDirLightShadows),
      y.push(g.numPointLightShadows),
      y.push(g.numSpotLightShadows),
      y.push(g.numSpotLightShadowsWithMaps),
      y.push(g.numLightProbes),
      y.push(g.shadowMapType),
      y.push(g.toneMapping),
      y.push(g.numClippingPlanes),
      y.push(g.numClipIntersection),
      y.push(g.depthPacking);
  }
  function M(y, g) {
    o.disableAll(),
      g.supportsVertexTextures && o.enable(0),
      g.instancing && o.enable(1),
      g.instancingColor && o.enable(2),
      g.instancingMorph && o.enable(3),
      g.matcap && o.enable(4),
      g.envMap && o.enable(5),
      g.normalMapObjectSpace && o.enable(6),
      g.normalMapTangentSpace && o.enable(7),
      g.clearcoat && o.enable(8),
      g.iridescence && o.enable(9),
      g.alphaTest && o.enable(10),
      g.vertexColors && o.enable(11),
      g.vertexAlphas && o.enable(12),
      g.vertexUv1s && o.enable(13),
      g.vertexUv2s && o.enable(14),
      g.vertexUv3s && o.enable(15),
      g.vertexTangents && o.enable(16),
      g.anisotropy && o.enable(17),
      g.alphaHash && o.enable(18),
      g.batching && o.enable(19),
      y.push(o.mask),
      o.disableAll(),
      g.fog && o.enable(0),
      g.useFog && o.enable(1),
      g.flatShading && o.enable(2),
      g.logarithmicDepthBuffer && o.enable(3),
      g.skinning && o.enable(4),
      g.morphTargets && o.enable(5),
      g.morphNormals && o.enable(6),
      g.morphColors && o.enable(7),
      g.premultipliedAlpha && o.enable(8),
      g.shadowMapEnabled && o.enable(9),
      g.useLegacyLights && o.enable(10),
      g.doubleSided && o.enable(11),
      g.flipSided && o.enable(12),
      g.useDepthPacking && o.enable(13),
      g.dithering && o.enable(14),
      g.transmission && o.enable(15),
      g.sheen && o.enable(16),
      g.opaque && o.enable(17),
      g.pointsUvs && o.enable(18),
      g.decodeVideoTexture && o.enable(19),
      g.alphaToCoverage && o.enable(20),
      y.push(o.mask);
  }
  function b(y) {
    const g = x[y.type];
    let I;
    if (g) {
      const k = Kt[g];
      I = bu.clone(k.uniforms);
    } else I = y.uniforms;
    return I;
  }
  function D(y, g) {
    let I;
    for (let k = 0, C = d.length; k < C; k++) {
      const G = d[k];
      if (G.cacheKey === g) {
        (I = G), ++I.usedTimes;
        break;
      }
    }
    return I === void 0 && ((I = new Vp(i, g, y, s)), d.push(I)), I;
  }
  function w(y) {
    if (--y.usedTimes === 0) {
      const g = d.indexOf(y);
      (d[g] = d[d.length - 1]), d.pop(), y.destroy();
    }
  }
  function R(y) {
    l.remove(y);
  }
  function H() {
    l.dispose();
  }
  return {
    getParameters: h,
    getProgramCacheKey: u,
    getUniforms: b,
    acquireProgram: D,
    releaseProgram: w,
    releaseShaderCache: R,
    programs: d,
    dispose: H,
  };
}
function qp() {
  let i = new WeakMap();
  function e(s) {
    let a = i.get(s);
    return a === void 0 && ((a = {}), i.set(s, a)), a;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, a, o) {
    i.get(s)[a] = o;
  }
  function r() {
    i = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: r };
}
function Yp(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.material.id !== e.material.id
    ? i.material.id - e.material.id
    : i.z !== e.z
    ? i.z - e.z
    : i.id - e.id;
}
function so(i, e) {
  return i.groupOrder !== e.groupOrder
    ? i.groupOrder - e.groupOrder
    : i.renderOrder !== e.renderOrder
    ? i.renderOrder - e.renderOrder
    : i.z !== e.z
    ? e.z - i.z
    : i.id - e.id;
}
function ao() {
  const i = [];
  let e = 0;
  const t = [],
    n = [],
    r = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (r.length = 0);
  }
  function a(f, p, m, x, v, h) {
    let u = i[e];
    return (
      u === void 0
        ? ((u = {
            id: f.id,
            object: f,
            geometry: p,
            material: m,
            groupOrder: x,
            renderOrder: f.renderOrder,
            z: v,
            group: h,
          }),
          (i[e] = u))
        : ((u.id = f.id),
          (u.object = f),
          (u.geometry = p),
          (u.material = m),
          (u.groupOrder = x),
          (u.renderOrder = f.renderOrder),
          (u.z = v),
          (u.group = h)),
      e++,
      u
    );
  }
  function o(f, p, m, x, v, h) {
    const u = a(f, p, m, x, v, h);
    m.transmission > 0
      ? n.push(u)
      : m.transparent === !0
      ? r.push(u)
      : t.push(u);
  }
  function l(f, p, m, x, v, h) {
    const u = a(f, p, m, x, v, h);
    m.transmission > 0
      ? n.unshift(u)
      : m.transparent === !0
      ? r.unshift(u)
      : t.unshift(u);
  }
  function c(f, p) {
    t.length > 1 && t.sort(f || Yp),
      n.length > 1 && n.sort(p || so),
      r.length > 1 && r.sort(p || so);
  }
  function d() {
    for (let f = e, p = i.length; f < p; f++) {
      const m = i[f];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: d,
    sort: c,
  };
}
function Kp() {
  let i = new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return (
      s === void 0
        ? ((a = new ao()), i.set(n, [a]))
        : r >= s.length
        ? ((a = new ao()), s.push(a))
        : (a = s[r]),
      a
    );
  }
  function t() {
    i = new WeakMap();
  }
  return { get: e, dispose: t };
}
function jp() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new F(), color: new Xe() };
          break;
        case "SpotLight":
          t = {
            position: new F(),
            direction: new F(),
            color: new Xe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new F(), color: new Xe(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new F(), skyColor: new Xe(), groundColor: new Xe() };
          break;
        case "RectAreaLight":
          t = {
            color: new Xe(),
            position: new F(),
            halfWidth: new F(),
            halfHeight: new F(),
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
function Zp() {
  const i = {};
  return {
    get: function (e) {
      if (i[e.id] !== void 0) return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ve(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (i[e.id] = t), t;
    },
  };
}
let $p = 0;
function Jp(i, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (i.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (i.map ? 1 : 0)
  );
}
function Qp(i) {
  const e = new jp(),
    t = Zp(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) n.probe.push(new F());
  const r = new F(),
    s = new rt(),
    a = new rt();
  function o(c, d) {
    let f = 0,
      p = 0,
      m = 0;
    for (let I = 0; I < 9; I++) n.probe[I].set(0, 0, 0);
    let x = 0,
      v = 0,
      h = 0,
      u = 0,
      A = 0,
      M = 0,
      b = 0,
      D = 0,
      w = 0,
      R = 0,
      H = 0;
    c.sort(Jp);
    const y = d === !0 ? Math.PI : 1;
    for (let I = 0, k = c.length; I < k; I++) {
      const C = c[I],
        G = C.color,
        X = C.intensity,
        Z = C.distance,
        re = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight)
        (f += G.r * X * y), (p += G.g * X * y), (m += G.b * X * y);
      else if (C.isLightProbe) {
        for (let B = 0; B < 9; B++)
          n.probe[B].addScaledVector(C.sh.coefficients[B], X);
        H++;
      } else if (C.isDirectionalLight) {
        const B = e.get(C);
        if (
          (B.color.copy(C.color).multiplyScalar(C.intensity * y), C.castShadow)
        ) {
          const Q = C.shadow,
            J = t.get(C);
          (J.shadowBias = Q.bias),
            (J.shadowNormalBias = Q.normalBias),
            (J.shadowRadius = Q.radius),
            (J.shadowMapSize = Q.mapSize),
            (n.directionalShadow[x] = J),
            (n.directionalShadowMap[x] = re),
            (n.directionalShadowMatrix[x] = C.shadow.matrix),
            M++;
        }
        (n.directional[x] = B), x++;
      } else if (C.isSpotLight) {
        const B = e.get(C);
        B.position.setFromMatrixPosition(C.matrixWorld),
          B.color.copy(G).multiplyScalar(X * y),
          (B.distance = Z),
          (B.coneCos = Math.cos(C.angle)),
          (B.penumbraCos = Math.cos(C.angle * (1 - C.penumbra))),
          (B.decay = C.decay),
          (n.spot[h] = B);
        const Q = C.shadow;
        if (
          (C.map &&
            ((n.spotLightMap[w] = C.map),
            w++,
            Q.updateMatrices(C),
            C.castShadow && R++),
          (n.spotLightMatrix[h] = Q.matrix),
          C.castShadow)
        ) {
          const J = t.get(C);
          (J.shadowBias = Q.bias),
            (J.shadowNormalBias = Q.normalBias),
            (J.shadowRadius = Q.radius),
            (J.shadowMapSize = Q.mapSize),
            (n.spotShadow[h] = J),
            (n.spotShadowMap[h] = re),
            D++;
        }
        h++;
      } else if (C.isRectAreaLight) {
        const B = e.get(C);
        B.color.copy(G).multiplyScalar(X),
          B.halfWidth.set(C.width * 0.5, 0, 0),
          B.halfHeight.set(0, C.height * 0.5, 0),
          (n.rectArea[u] = B),
          u++;
      } else if (C.isPointLight) {
        const B = e.get(C);
        if (
          (B.color.copy(C.color).multiplyScalar(C.intensity * y),
          (B.distance = C.distance),
          (B.decay = C.decay),
          C.castShadow)
        ) {
          const Q = C.shadow,
            J = t.get(C);
          (J.shadowBias = Q.bias),
            (J.shadowNormalBias = Q.normalBias),
            (J.shadowRadius = Q.radius),
            (J.shadowMapSize = Q.mapSize),
            (J.shadowCameraNear = Q.camera.near),
            (J.shadowCameraFar = Q.camera.far),
            (n.pointShadow[v] = J),
            (n.pointShadowMap[v] = re),
            (n.pointShadowMatrix[v] = C.shadow.matrix),
            b++;
        }
        (n.point[v] = B), v++;
      } else if (C.isHemisphereLight) {
        const B = e.get(C);
        B.skyColor.copy(C.color).multiplyScalar(X * y),
          B.groundColor.copy(C.groundColor).multiplyScalar(X * y),
          (n.hemi[A] = B),
          A++;
      }
    }
    u > 0 &&
      (i.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = ie.LTC_FLOAT_1), (n.rectAreaLTC2 = ie.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = ie.LTC_HALF_1), (n.rectAreaLTC2 = ie.LTC_HALF_2))),
      (n.ambient[0] = f),
      (n.ambient[1] = p),
      (n.ambient[2] = m);
    const g = n.hash;
    (g.directionalLength !== x ||
      g.pointLength !== v ||
      g.spotLength !== h ||
      g.rectAreaLength !== u ||
      g.hemiLength !== A ||
      g.numDirectionalShadows !== M ||
      g.numPointShadows !== b ||
      g.numSpotShadows !== D ||
      g.numSpotMaps !== w ||
      g.numLightProbes !== H) &&
      ((n.directional.length = x),
      (n.spot.length = h),
      (n.rectArea.length = u),
      (n.point.length = v),
      (n.hemi.length = A),
      (n.directionalShadow.length = M),
      (n.directionalShadowMap.length = M),
      (n.pointShadow.length = b),
      (n.pointShadowMap.length = b),
      (n.spotShadow.length = D),
      (n.spotShadowMap.length = D),
      (n.directionalShadowMatrix.length = M),
      (n.pointShadowMatrix.length = b),
      (n.spotLightMatrix.length = D + w - R),
      (n.spotLightMap.length = w),
      (n.numSpotLightShadowsWithMaps = R),
      (n.numLightProbes = H),
      (g.directionalLength = x),
      (g.pointLength = v),
      (g.spotLength = h),
      (g.rectAreaLength = u),
      (g.hemiLength = A),
      (g.numDirectionalShadows = M),
      (g.numPointShadows = b),
      (g.numSpotShadows = D),
      (g.numSpotMaps = w),
      (g.numLightProbes = H),
      (n.version = $p++));
  }
  function l(c, d) {
    let f = 0,
      p = 0,
      m = 0,
      x = 0,
      v = 0;
    const h = d.matrixWorldInverse;
    for (let u = 0, A = c.length; u < A; u++) {
      const M = c[u];
      if (M.isDirectionalLight) {
        const b = n.directional[f];
        b.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          b.direction.sub(r),
          b.direction.transformDirection(h),
          f++;
      } else if (M.isSpotLight) {
        const b = n.spot[m];
        b.position.setFromMatrixPosition(M.matrixWorld),
          b.position.applyMatrix4(h),
          b.direction.setFromMatrixPosition(M.matrixWorld),
          r.setFromMatrixPosition(M.target.matrixWorld),
          b.direction.sub(r),
          b.direction.transformDirection(h),
          m++;
      } else if (M.isRectAreaLight) {
        const b = n.rectArea[x];
        b.position.setFromMatrixPosition(M.matrixWorld),
          b.position.applyMatrix4(h),
          a.identity(),
          s.copy(M.matrixWorld),
          s.premultiply(h),
          a.extractRotation(s),
          b.halfWidth.set(M.width * 0.5, 0, 0),
          b.halfHeight.set(0, M.height * 0.5, 0),
          b.halfWidth.applyMatrix4(a),
          b.halfHeight.applyMatrix4(a),
          x++;
      } else if (M.isPointLight) {
        const b = n.point[p];
        b.position.setFromMatrixPosition(M.matrixWorld),
          b.position.applyMatrix4(h),
          p++;
      } else if (M.isHemisphereLight) {
        const b = n.hemi[v];
        b.direction.setFromMatrixPosition(M.matrixWorld),
          b.direction.transformDirection(h),
          v++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function oo(i) {
  const e = new Qp(i),
    t = [],
    n = [];
  function r() {
    (t.length = 0), (n.length = 0);
  }
  function s(d) {
    t.push(d);
  }
  function a(d) {
    n.push(d);
  }
  function o(d) {
    e.setup(t, d);
  }
  function l(d) {
    e.setupView(t, d);
  }
  return {
    init: r,
    state: {
      lightsArray: t,
      shadowsArray: n,
      lights: e,
      transmissionRenderTarget: null,
    },
    setupLights: o,
    setupLightsView: l,
    pushLight: s,
    pushShadow: a,
  };
}
function em(i) {
  let e = new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return (
      a === void 0
        ? ((o = new oo(i)), e.set(r, [o]))
        : s >= a.length
        ? ((o = new oo(i)), a.push(o))
        : (o = a[s]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
class tm extends Er {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Kc),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class nm extends Er {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const im = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  rm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function sm(i, e, t) {
  let n = new Oo();
  const r = new Ve(),
    s = new Ve(),
    a = new ut(),
    o = new tm({ depthPacking: jc }),
    l = new nm(),
    c = {},
    d = t.maxTextureSize,
    f = { [En]: Tt, [Tt]: En, [on]: on },
    p = new Jt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ve() },
        radius: { value: 4 },
      },
      vertexShader: im,
      fragmentShader: rm,
    }),
    m = p.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const x = new qn();
  x.setAttribute(
    "position",
    new $t(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const v = new Gt(x, p),
    h = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = mo);
  let u = this.type;
  this.render = function (w, R, H) {
    if (
      h.enabled === !1 ||
      (h.autoUpdate === !1 && h.needsUpdate === !1) ||
      w.length === 0
    )
      return;
    const y = i.getRenderTarget(),
      g = i.getActiveCubeFace(),
      I = i.getActiveMipmapLevel(),
      k = i.state;
    k.setBlending(Mn),
      k.buffers.color.setClear(1, 1, 1, 1),
      k.buffers.depth.setTest(!0),
      k.setScissorTest(!1);
    const C = u !== an && this.type === an,
      G = u === an && this.type !== an;
    for (let X = 0, Z = w.length; X < Z; X++) {
      const re = w[X],
        B = re.shadow;
      if (B === void 0) {
        console.warn("THREE.WebGLShadowMap:", re, "has no shadow.");
        continue;
      }
      if (B.autoUpdate === !1 && B.needsUpdate === !1) continue;
      r.copy(B.mapSize);
      const Q = B.getFrameExtents();
      if (
        (r.multiply(Q),
        s.copy(B.mapSize),
        (r.x > d || r.y > d) &&
          (r.x > d &&
            ((s.x = Math.floor(d / Q.x)),
            (r.x = s.x * Q.x),
            (B.mapSize.x = s.x)),
          r.y > d &&
            ((s.y = Math.floor(d / Q.y)),
            (r.y = s.y * Q.y),
            (B.mapSize.y = s.y))),
        B.map === null || C === !0 || G === !0)
      ) {
        const de = this.type !== an ? { minFilter: It, magFilter: It } : {};
        B.map !== null && B.map.dispose(),
          (B.map = new un(r.x, r.y, de)),
          (B.map.texture.name = re.name + ".shadowMap"),
          B.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(B.map), i.clear();
      const J = B.getViewportCount();
      for (let de = 0; de < J; de++) {
        const Fe = B.getViewport(de);
        a.set(s.x * Fe.x, s.y * Fe.y, s.x * Fe.z, s.y * Fe.w),
          k.viewport(a),
          B.updateMatrices(re, de),
          (n = B.getFrustum()),
          b(R, H, B.camera, re, this.type);
      }
      B.isPointLightShadow !== !0 && this.type === an && A(B, H),
        (B.needsUpdate = !1);
    }
    (u = this.type), (h.needsUpdate = !1), i.setRenderTarget(y, g, I);
  };
  function A(w, R) {
    const H = e.update(v);
    p.defines.VSM_SAMPLES !== w.blurSamples &&
      ((p.defines.VSM_SAMPLES = w.blurSamples),
      (m.defines.VSM_SAMPLES = w.blurSamples),
      (p.needsUpdate = !0),
      (m.needsUpdate = !0)),
      w.mapPass === null && (w.mapPass = new un(r.x, r.y)),
      (p.uniforms.shadow_pass.value = w.map.texture),
      (p.uniforms.resolution.value = w.mapSize),
      (p.uniforms.radius.value = w.radius),
      i.setRenderTarget(w.mapPass),
      i.clear(),
      i.renderBufferDirect(R, null, H, p, v, null),
      (m.uniforms.shadow_pass.value = w.mapPass.texture),
      (m.uniforms.resolution.value = w.mapSize),
      (m.uniforms.radius.value = w.radius),
      i.setRenderTarget(w.map),
      i.clear(),
      i.renderBufferDirect(R, null, H, m, v, null);
  }
  function M(w, R, H, y) {
    let g = null;
    const I =
      H.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
    if (I !== void 0) g = I;
    else if (
      ((g = H.isPointLight === !0 ? l : o),
      (i.localClippingEnabled &&
        R.clipShadows === !0 &&
        Array.isArray(R.clippingPlanes) &&
        R.clippingPlanes.length !== 0) ||
        (R.displacementMap && R.displacementScale !== 0) ||
        (R.alphaMap && R.alphaTest > 0) ||
        (R.map && R.alphaTest > 0))
    ) {
      const k = g.uuid,
        C = R.uuid;
      let G = c[k];
      G === void 0 && ((G = {}), (c[k] = G));
      let X = G[C];
      X === void 0 &&
        ((X = g.clone()), (G[C] = X), R.addEventListener("dispose", D)),
        (g = X);
    }
    if (
      ((g.visible = R.visible),
      (g.wireframe = R.wireframe),
      y === an
        ? (g.side = R.shadowSide !== null ? R.shadowSide : R.side)
        : (g.side = R.shadowSide !== null ? R.shadowSide : f[R.side]),
      (g.alphaMap = R.alphaMap),
      (g.alphaTest = R.alphaTest),
      (g.map = R.map),
      (g.clipShadows = R.clipShadows),
      (g.clippingPlanes = R.clippingPlanes),
      (g.clipIntersection = R.clipIntersection),
      (g.displacementMap = R.displacementMap),
      (g.displacementScale = R.displacementScale),
      (g.displacementBias = R.displacementBias),
      (g.wireframeLinewidth = R.wireframeLinewidth),
      (g.linewidth = R.linewidth),
      H.isPointLight === !0 && g.isMeshDistanceMaterial === !0)
    ) {
      const k = i.properties.get(g);
      k.light = H;
    }
    return g;
  }
  function b(w, R, H, y, g) {
    if (w.visible === !1) return;
    if (
      w.layers.test(R.layers) &&
      (w.isMesh || w.isLine || w.isPoints) &&
      (w.castShadow || (w.receiveShadow && g === an)) &&
      (!w.frustumCulled || n.intersectsObject(w))
    ) {
      w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse, w.matrixWorld);
      const C = e.update(w),
        G = w.material;
      if (Array.isArray(G)) {
        const X = C.groups;
        for (let Z = 0, re = X.length; Z < re; Z++) {
          const B = X[Z],
            Q = G[B.materialIndex];
          if (Q && Q.visible) {
            const J = M(w, Q, y, g);
            w.onBeforeShadow(i, w, R, H, C, J, B),
              i.renderBufferDirect(H, null, C, J, w, B),
              w.onAfterShadow(i, w, R, H, C, J, B);
          }
        }
      } else if (G.visible) {
        const X = M(w, G, y, g);
        w.onBeforeShadow(i, w, R, H, C, X, null),
          i.renderBufferDirect(H, null, C, X, w, null),
          w.onAfterShadow(i, w, R, H, C, X, null);
      }
    }
    const k = w.children;
    for (let C = 0, G = k.length; C < G; C++) b(k[C], R, H, y, g);
  }
  function D(w) {
    w.target.removeEventListener("dispose", D);
    for (const H in c) {
      const y = c[H],
        g = w.target.uuid;
      g in y && (y[g].dispose(), delete y[g]);
    }
  }
}
function am(i) {
  function e() {
    let T = !1;
    const ne = new ut();
    let te = null;
    const ue = new ut(0, 0, 0, 0);
    return {
      setMask: function (fe) {
        te !== fe && !T && (i.colorMask(fe, fe, fe, fe), (te = fe));
      },
      setLocked: function (fe) {
        T = fe;
      },
      setClear: function (fe, Ye, Ze, Je, dt) {
        dt === !0 && ((fe *= Je), (Ye *= Je), (Ze *= Je)),
          ne.set(fe, Ye, Ze, Je),
          ue.equals(ne) === !1 && (i.clearColor(fe, Ye, Ze, Je), ue.copy(ne));
      },
      reset: function () {
        (T = !1), (te = null), ue.set(-1, 0, 0, 0);
      },
    };
  }
  function t() {
    let T = !1,
      ne = null,
      te = null,
      ue = null;
    return {
      setTest: function (fe) {
        fe ? le(i.DEPTH_TEST) : ae(i.DEPTH_TEST);
      },
      setMask: function (fe) {
        ne !== fe && !T && (i.depthMask(fe), (ne = fe));
      },
      setFunc: function (fe) {
        if (te !== fe) {
          switch (fe) {
            case Sc:
              i.depthFunc(i.NEVER);
              break;
            case yc:
              i.depthFunc(i.ALWAYS);
              break;
            case Ec:
              i.depthFunc(i.LESS);
              break;
            case pr:
              i.depthFunc(i.LEQUAL);
              break;
            case Tc:
              i.depthFunc(i.EQUAL);
              break;
            case Ac:
              i.depthFunc(i.GEQUAL);
              break;
            case bc:
              i.depthFunc(i.GREATER);
              break;
            case wc:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          te = fe;
        }
      },
      setLocked: function (fe) {
        T = fe;
      },
      setClear: function (fe) {
        ue !== fe && (i.clearDepth(fe), (ue = fe));
      },
      reset: function () {
        (T = !1), (ne = null), (te = null), (ue = null);
      },
    };
  }
  function n() {
    let T = !1,
      ne = null,
      te = null,
      ue = null,
      fe = null,
      Ye = null,
      Ze = null,
      Je = null,
      dt = null;
    return {
      setTest: function (Ke) {
        T || (Ke ? le(i.STENCIL_TEST) : ae(i.STENCIL_TEST));
      },
      setMask: function (Ke) {
        ne !== Ke && !T && (i.stencilMask(Ke), (ne = Ke));
      },
      setFunc: function (Ke, Wt, Xt) {
        (te !== Ke || ue !== Wt || fe !== Xt) &&
          (i.stencilFunc(Ke, Wt, Xt), (te = Ke), (ue = Wt), (fe = Xt));
      },
      setOp: function (Ke, Wt, Xt) {
        (Ye !== Ke || Ze !== Wt || Je !== Xt) &&
          (i.stencilOp(Ke, Wt, Xt), (Ye = Ke), (Ze = Wt), (Je = Xt));
      },
      setLocked: function (Ke) {
        T = Ke;
      },
      setClear: function (Ke) {
        dt !== Ke && (i.clearStencil(Ke), (dt = Ke));
      },
      reset: function () {
        (T = !1),
          (ne = null),
          (te = null),
          (ue = null),
          (fe = null),
          (Ye = null),
          (Ze = null),
          (Je = null),
          (dt = null);
      },
    };
  }
  const r = new e(),
    s = new t(),
    a = new n(),
    o = new WeakMap(),
    l = new WeakMap();
  let c = {},
    d = {},
    f = new WeakMap(),
    p = [],
    m = null,
    x = !1,
    v = null,
    h = null,
    u = null,
    A = null,
    M = null,
    b = null,
    D = null,
    w = new Xe(0, 0, 0),
    R = 0,
    H = !1,
    y = null,
    g = null,
    I = null,
    k = null,
    C = null;
  const G = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = !1,
    Z = 0;
  const re = i.getParameter(i.VERSION);
  re.indexOf("WebGL") !== -1
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(re)[1])), (X = Z >= 1))
    : re.indexOf("OpenGL ES") !== -1 &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(re)[1])), (X = Z >= 2));
  let B = null,
    Q = {};
  const J = i.getParameter(i.SCISSOR_BOX),
    de = i.getParameter(i.VIEWPORT),
    Fe = new ut().fromArray(J),
    Ge = new ut().fromArray(de);
  function V(T, ne, te, ue) {
    const fe = new Uint8Array(4),
      Ye = i.createTexture();
    i.bindTexture(T, Ye),
      i.texParameteri(T, i.TEXTURE_MIN_FILTER, i.NEAREST),
      i.texParameteri(T, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ze = 0; Ze < te; Ze++)
      T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY
        ? i.texImage3D(ne, 0, i.RGBA, 1, 1, ue, 0, i.RGBA, i.UNSIGNED_BYTE, fe)
        : i.texImage2D(
            ne + Ze,
            0,
            i.RGBA,
            1,
            1,
            0,
            i.RGBA,
            i.UNSIGNED_BYTE,
            fe
          );
    return Ye;
  }
  const ee = {};
  (ee[i.TEXTURE_2D] = V(i.TEXTURE_2D, i.TEXTURE_2D, 1)),
    (ee[i.TEXTURE_CUBE_MAP] = V(
      i.TEXTURE_CUBE_MAP,
      i.TEXTURE_CUBE_MAP_POSITIVE_X,
      6
    )),
    (ee[i.TEXTURE_2D_ARRAY] = V(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1)),
    (ee[i.TEXTURE_3D] = V(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    le(i.DEPTH_TEST),
    s.setFunc(pr),
    Ee(!1),
    ke(ks),
    le(i.CULL_FACE),
    ge(Mn);
  function le(T) {
    c[T] !== !0 && (i.enable(T), (c[T] = !0));
  }
  function ae(T) {
    c[T] !== !1 && (i.disable(T), (c[T] = !1));
  }
  function be(T, ne) {
    return d[T] !== ne
      ? (i.bindFramebuffer(T, ne),
        (d[T] = ne),
        T === i.DRAW_FRAMEBUFFER && (d[i.FRAMEBUFFER] = ne),
        T === i.FRAMEBUFFER && (d[i.DRAW_FRAMEBUFFER] = ne),
        !0)
      : !1;
  }
  function Le(T, ne) {
    let te = p,
      ue = !1;
    if (T) {
      (te = f.get(ne)), te === void 0 && ((te = []), f.set(ne, te));
      const fe = T.textures;
      if (te.length !== fe.length || te[0] !== i.COLOR_ATTACHMENT0) {
        for (let Ye = 0, Ze = fe.length; Ye < Ze; Ye++)
          te[Ye] = i.COLOR_ATTACHMENT0 + Ye;
        (te.length = fe.length), (ue = !0);
      }
    } else te[0] !== i.BACK && ((te[0] = i.BACK), (ue = !0));
    ue && i.drawBuffers(te);
  }
  function ze(T) {
    return m !== T ? (i.useProgram(T), (m = T), !0) : !1;
  }
  const L = {
    [On]: i.FUNC_ADD,
    [rc]: i.FUNC_SUBTRACT,
    [sc]: i.FUNC_REVERSE_SUBTRACT,
  };
  (L[ac] = i.MIN), (L[oc] = i.MAX);
  const Ne = {
    [lc]: i.ZERO,
    [cc]: i.ONE,
    [uc]: i.SRC_COLOR,
    [_s]: i.SRC_ALPHA,
    [_c]: i.SRC_ALPHA_SATURATE,
    [pc]: i.DST_COLOR,
    [hc]: i.DST_ALPHA,
    [dc]: i.ONE_MINUS_SRC_COLOR,
    [gs]: i.ONE_MINUS_SRC_ALPHA,
    [mc]: i.ONE_MINUS_DST_COLOR,
    [fc]: i.ONE_MINUS_DST_ALPHA,
    [gc]: i.CONSTANT_COLOR,
    [vc]: i.ONE_MINUS_CONSTANT_COLOR,
    [xc]: i.CONSTANT_ALPHA,
    [Mc]: i.ONE_MINUS_CONSTANT_ALPHA,
  };
  function ge(T, ne, te, ue, fe, Ye, Ze, Je, dt, Ke) {
    if (T === Mn) {
      x === !0 && (ae(i.BLEND), (x = !1));
      return;
    }
    if ((x === !1 && (le(i.BLEND), (x = !0)), T !== ic)) {
      if (T !== v || Ke !== H) {
        if (
          ((h !== On || M !== On) &&
            (i.blendEquation(i.FUNC_ADD), (h = On), (M = On)),
          Ke)
        )
          switch (T) {
            case fi:
              i.blendFuncSeparate(
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Ws:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Xs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case qs:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        else
          switch (T) {
            case fi:
              i.blendFuncSeparate(
                i.SRC_ALPHA,
                i.ONE_MINUS_SRC_ALPHA,
                i.ONE,
                i.ONE_MINUS_SRC_ALPHA
              );
              break;
            case Ws:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Xs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case qs:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        (u = null),
          (A = null),
          (b = null),
          (D = null),
          w.set(0, 0, 0),
          (R = 0),
          (v = T),
          (H = Ke);
      }
      return;
    }
    (fe = fe || ne),
      (Ye = Ye || te),
      (Ze = Ze || ue),
      (ne !== h || fe !== M) &&
        (i.blendEquationSeparate(L[ne], L[fe]), (h = ne), (M = fe)),
      (te !== u || ue !== A || Ye !== b || Ze !== D) &&
        (i.blendFuncSeparate(Ne[te], Ne[ue], Ne[Ye], Ne[Ze]),
        (u = te),
        (A = ue),
        (b = Ye),
        (D = Ze)),
      (Je.equals(w) === !1 || dt !== R) &&
        (i.blendColor(Je.r, Je.g, Je.b, dt), w.copy(Je), (R = dt)),
      (v = T),
      (H = !1);
  }
  function et(T, ne) {
    T.side === on ? ae(i.CULL_FACE) : le(i.CULL_FACE);
    let te = T.side === Tt;
    ne && (te = !te),
      Ee(te),
      T.blending === fi && T.transparent === !1
        ? ge(Mn)
        : ge(
            T.blending,
            T.blendEquation,
            T.blendSrc,
            T.blendDst,
            T.blendEquationAlpha,
            T.blendSrcAlpha,
            T.blendDstAlpha,
            T.blendColor,
            T.blendAlpha,
            T.premultipliedAlpha
          ),
      s.setFunc(T.depthFunc),
      s.setTest(T.depthTest),
      s.setMask(T.depthWrite),
      r.setMask(T.colorWrite);
    const ue = T.stencilWrite;
    a.setTest(ue),
      ue &&
        (a.setMask(T.stencilWriteMask),
        a.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask),
        a.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)),
      _(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits),
      T.alphaToCoverage === !0
        ? le(i.SAMPLE_ALPHA_TO_COVERAGE)
        : ae(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ee(T) {
    y !== T && (T ? i.frontFace(i.CW) : i.frontFace(i.CCW), (y = T));
  }
  function ke(T) {
    T !== ec
      ? (le(i.CULL_FACE),
        T !== g &&
          (T === ks
            ? i.cullFace(i.BACK)
            : T === tc
            ? i.cullFace(i.FRONT)
            : i.cullFace(i.FRONT_AND_BACK)))
      : ae(i.CULL_FACE),
      (g = T);
  }
  function E(T) {
    T !== I && (X && i.lineWidth(T), (I = T));
  }
  function _(T, ne, te) {
    T
      ? (le(i.POLYGON_OFFSET_FILL),
        (k !== ne || C !== te) && (i.polygonOffset(ne, te), (k = ne), (C = te)))
      : ae(i.POLYGON_OFFSET_FILL);
  }
  function z(T) {
    T ? le(i.SCISSOR_TEST) : ae(i.SCISSOR_TEST);
  }
  function W(T) {
    T === void 0 && (T = i.TEXTURE0 + G - 1),
      B !== T && (i.activeTexture(T), (B = T));
  }
  function K(T, ne, te) {
    te === void 0 && (B === null ? (te = i.TEXTURE0 + G - 1) : (te = B));
    let ue = Q[te];
    ue === void 0 && ((ue = { type: void 0, texture: void 0 }), (Q[te] = ue)),
      (ue.type !== T || ue.texture !== ne) &&
        (B !== te && (i.activeTexture(te), (B = te)),
        i.bindTexture(T, ne || ee[T]),
        (ue.type = T),
        (ue.texture = ne));
  }
  function j() {
    const T = Q[B];
    T !== void 0 &&
      T.type !== void 0 &&
      (i.bindTexture(T.type, null), (T.type = void 0), (T.texture = void 0));
  }
  function _e() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function $() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function me() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ve() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function q() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Y() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Se() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function oe() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ce() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Ae() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Oe(T) {
    Fe.equals(T) === !1 && (i.scissor(T.x, T.y, T.z, T.w), Fe.copy(T));
  }
  function Be(T) {
    Ge.equals(T) === !1 && (i.viewport(T.x, T.y, T.z, T.w), Ge.copy(T));
  }
  function He(T, ne) {
    let te = l.get(ne);
    te === void 0 && ((te = new WeakMap()), l.set(ne, te));
    let ue = te.get(T);
    ue === void 0 && ((ue = i.getUniformBlockIndex(ne, T.name)), te.set(T, ue));
  }
  function qe(T, ne) {
    const ue = l.get(ne).get(T);
    o.get(ne) !== ue &&
      (i.uniformBlockBinding(ne, ue, T.__bindingPointIndex), o.set(ne, ue));
  }
  function he() {
    i.disable(i.BLEND),
      i.disable(i.CULL_FACE),
      i.disable(i.DEPTH_TEST),
      i.disable(i.POLYGON_OFFSET_FILL),
      i.disable(i.SCISSOR_TEST),
      i.disable(i.STENCIL_TEST),
      i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
      i.blendEquation(i.FUNC_ADD),
      i.blendFunc(i.ONE, i.ZERO),
      i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
      i.blendColor(0, 0, 0, 0),
      i.colorMask(!0, !0, !0, !0),
      i.clearColor(0, 0, 0, 0),
      i.depthMask(!0),
      i.depthFunc(i.LESS),
      i.clearDepth(1),
      i.stencilMask(4294967295),
      i.stencilFunc(i.ALWAYS, 0, 4294967295),
      i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
      i.clearStencil(0),
      i.cullFace(i.BACK),
      i.frontFace(i.CCW),
      i.polygonOffset(0, 0),
      i.activeTexture(i.TEXTURE0),
      i.bindFramebuffer(i.FRAMEBUFFER, null),
      i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
      i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
      i.useProgram(null),
      i.lineWidth(1),
      i.scissor(0, 0, i.canvas.width, i.canvas.height),
      i.viewport(0, 0, i.canvas.width, i.canvas.height),
      (c = {}),
      (B = null),
      (Q = {}),
      (d = {}),
      (f = new WeakMap()),
      (p = []),
      (m = null),
      (x = !1),
      (v = null),
      (h = null),
      (u = null),
      (A = null),
      (M = null),
      (b = null),
      (D = null),
      (w = new Xe(0, 0, 0)),
      (R = 0),
      (H = !1),
      (y = null),
      (g = null),
      (I = null),
      (k = null),
      (C = null),
      Fe.set(0, 0, i.canvas.width, i.canvas.height),
      Ge.set(0, 0, i.canvas.width, i.canvas.height),
      r.reset(),
      s.reset(),
      a.reset();
  }
  return {
    buffers: { color: r, depth: s, stencil: a },
    enable: le,
    disable: ae,
    bindFramebuffer: be,
    drawBuffers: Le,
    useProgram: ze,
    setBlending: ge,
    setMaterial: et,
    setFlipSided: Ee,
    setCullFace: ke,
    setLineWidth: E,
    setPolygonOffset: _,
    setScissorTest: z,
    activeTexture: W,
    bindTexture: K,
    unbindTexture: j,
    compressedTexImage2D: _e,
    compressedTexImage3D: $,
    texImage2D: ce,
    texImage3D: Ae,
    updateUBOMapping: He,
    uniformBlockBinding: qe,
    texStorage2D: Se,
    texStorage3D: oe,
    texSubImage2D: me,
    texSubImage3D: ve,
    compressedTexSubImage2D: q,
    compressedTexSubImage3D: Y,
    scissor: Oe,
    viewport: Be,
    reset: he,
  };
}
function om(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new Ve(),
    d = new WeakMap();
  let f;
  const p = new WeakMap();
  let m = !1;
  try {
    m =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function x(E, _) {
    return m ? new OffscreenCanvas(E, _) : Mr("canvas");
  }
  function v(E, _, z) {
    let W = 1;
    const K = ke(E);
    if (
      ((K.width > z || K.height > z) && (W = z / Math.max(K.width, K.height)),
      W < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && E instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && E instanceof VideoFrame)
      ) {
        const j = Math.floor(W * K.width),
          _e = Math.floor(W * K.height);
        f === void 0 && (f = x(j, _e));
        const $ = _ ? x(j, _e) : f;
        return (
          ($.width = j),
          ($.height = _e),
          $.getContext("2d").drawImage(E, 0, 0, j, _e),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              K.width +
              "x" +
              K.height +
              ") to (" +
              j +
              "x" +
              _e +
              ")."
          ),
          $
        );
      } else
        return (
          "data" in E &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                K.width +
                "x" +
                K.height +
                ")."
            ),
          E
        );
    return E;
  }
  function h(E) {
    return E.generateMipmaps && E.minFilter !== It && E.minFilter !== Vt;
  }
  function u(E) {
    i.generateMipmap(E);
  }
  function A(E, _, z, W, K = !1) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          E +
          "'"
      );
    }
    let j = _;
    if (
      (_ === i.RED &&
        (z === i.FLOAT && (j = i.R32F),
        z === i.HALF_FLOAT && (j = i.R16F),
        z === i.UNSIGNED_BYTE && (j = i.R8)),
      _ === i.RED_INTEGER &&
        (z === i.UNSIGNED_BYTE && (j = i.R8UI),
        z === i.UNSIGNED_SHORT && (j = i.R16UI),
        z === i.UNSIGNED_INT && (j = i.R32UI),
        z === i.BYTE && (j = i.R8I),
        z === i.SHORT && (j = i.R16I),
        z === i.INT && (j = i.R32I)),
      _ === i.RG &&
        (z === i.FLOAT && (j = i.RG32F),
        z === i.HALF_FLOAT && (j = i.RG16F),
        z === i.UNSIGNED_BYTE && (j = i.RG8)),
      _ === i.RG_INTEGER &&
        (z === i.UNSIGNED_BYTE && (j = i.RG8UI),
        z === i.UNSIGNED_SHORT && (j = i.RG16UI),
        z === i.UNSIGNED_INT && (j = i.RG32UI),
        z === i.BYTE && (j = i.RG8I),
        z === i.SHORT && (j = i.RG16I),
        z === i.INT && (j = i.RG32I)),
      _ === i.RGB && z === i.UNSIGNED_INT_5_9_9_9_REV && (j = i.RGB9_E5),
      _ === i.RGBA)
    ) {
      const _e = K ? _r : We.getTransfer(W);
      z === i.FLOAT && (j = i.RGBA32F),
        z === i.HALF_FLOAT && (j = i.RGBA16F),
        z === i.UNSIGNED_BYTE && (j = _e === je ? i.SRGB8_ALPHA8 : i.RGBA8),
        z === i.UNSIGNED_SHORT_4_4_4_4 && (j = i.RGBA4),
        z === i.UNSIGNED_SHORT_5_5_5_1 && (j = i.RGB5_A1);
    }
    return (
      (j === i.R16F ||
        j === i.R32F ||
        j === i.RG16F ||
        j === i.RG32F ||
        j === i.RGBA16F ||
        j === i.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      j
    );
  }
  function M(E, _) {
    return h(E) === !0 ||
      (E.isFramebufferTexture && E.minFilter !== It && E.minFilter !== Vt)
      ? Math.log2(Math.max(_.width, _.height)) + 1
      : E.mipmaps !== void 0 && E.mipmaps.length > 0
      ? E.mipmaps.length
      : E.isCompressedTexture && Array.isArray(E.image)
      ? _.mipmaps.length
      : 1;
  }
  function b(E) {
    const _ = E.target;
    _.removeEventListener("dispose", b), w(_), _.isVideoTexture && d.delete(_);
  }
  function D(E) {
    const _ = E.target;
    _.removeEventListener("dispose", D), H(_);
  }
  function w(E) {
    const _ = n.get(E);
    if (_.__webglInit === void 0) return;
    const z = E.source,
      W = p.get(z);
    if (W) {
      const K = W[_.__cacheKey];
      K.usedTimes--,
        K.usedTimes === 0 && R(E),
        Object.keys(W).length === 0 && p.delete(z);
    }
    n.remove(E);
  }
  function R(E) {
    const _ = n.get(E);
    i.deleteTexture(_.__webglTexture);
    const z = E.source,
      W = p.get(z);
    delete W[_.__cacheKey], a.memory.textures--;
  }
  function H(E) {
    const _ = n.get(E);
    if ((E.depthTexture && E.depthTexture.dispose(), E.isWebGLCubeRenderTarget))
      for (let W = 0; W < 6; W++) {
        if (Array.isArray(_.__webglFramebuffer[W]))
          for (let K = 0; K < _.__webglFramebuffer[W].length; K++)
            i.deleteFramebuffer(_.__webglFramebuffer[W][K]);
        else i.deleteFramebuffer(_.__webglFramebuffer[W]);
        _.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer[W]);
      }
    else {
      if (Array.isArray(_.__webglFramebuffer))
        for (let W = 0; W < _.__webglFramebuffer.length; W++)
          i.deleteFramebuffer(_.__webglFramebuffer[W]);
      else i.deleteFramebuffer(_.__webglFramebuffer);
      if (
        (_.__webglDepthbuffer && i.deleteRenderbuffer(_.__webglDepthbuffer),
        _.__webglMultisampledFramebuffer &&
          i.deleteFramebuffer(_.__webglMultisampledFramebuffer),
        _.__webglColorRenderbuffer)
      )
        for (let W = 0; W < _.__webglColorRenderbuffer.length; W++)
          _.__webglColorRenderbuffer[W] &&
            i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);
      _.__webglDepthRenderbuffer &&
        i.deleteRenderbuffer(_.__webglDepthRenderbuffer);
    }
    const z = E.textures;
    for (let W = 0, K = z.length; W < K; W++) {
      const j = n.get(z[W]);
      j.__webglTexture &&
        (i.deleteTexture(j.__webglTexture), a.memory.textures--),
        n.remove(z[W]);
    }
    n.remove(E);
  }
  let y = 0;
  function g() {
    y = 0;
  }
  function I() {
    const E = y;
    return (
      E >= r.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            E +
            " texture units while this GPU supports only " +
            r.maxTextures
        ),
      (y += 1),
      E
    );
  }
  function k(E) {
    const _ = [];
    return (
      _.push(E.wrapS),
      _.push(E.wrapT),
      _.push(E.wrapR || 0),
      _.push(E.magFilter),
      _.push(E.minFilter),
      _.push(E.anisotropy),
      _.push(E.internalFormat),
      _.push(E.format),
      _.push(E.type),
      _.push(E.generateMipmaps),
      _.push(E.premultiplyAlpha),
      _.push(E.flipY),
      _.push(E.unpackAlignment),
      _.push(E.colorSpace),
      _.join()
    );
  }
  function C(E, _) {
    const z = n.get(E);
    if (
      (E.isVideoTexture && et(E),
      E.isRenderTargetTexture === !1 &&
        E.version > 0 &&
        z.__version !== E.version)
    ) {
      const W = E.image;
      if (W === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (W.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Fe(z, E, _);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + _);
  }
  function G(E, _) {
    const z = n.get(E);
    if (E.version > 0 && z.__version !== E.version) {
      Fe(z, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + _);
  }
  function X(E, _) {
    const z = n.get(E);
    if (E.version > 0 && z.__version !== E.version) {
      Fe(z, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + _);
  }
  function Z(E, _) {
    const z = n.get(E);
    if (E.version > 0 && z.__version !== E.version) {
      Ge(z, E, _);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + _);
  }
  const re = { [Ms]: i.REPEAT, [Bn]: i.CLAMP_TO_EDGE, [Ss]: i.MIRRORED_REPEAT },
    B = {
      [It]: i.NEAREST,
      [Oc]: i.NEAREST_MIPMAP_NEAREST,
      [Gi]: i.NEAREST_MIPMAP_LINEAR,
      [Vt]: i.LINEAR,
      [Ir]: i.LINEAR_MIPMAP_NEAREST,
      [Hn]: i.LINEAR_MIPMAP_LINEAR,
    },
    Q = {
      [Jc]: i.NEVER,
      [ru]: i.ALWAYS,
      [Qc]: i.LESS,
      [bo]: i.LEQUAL,
      [eu]: i.EQUAL,
      [iu]: i.GEQUAL,
      [tu]: i.GREATER,
      [nu]: i.NOTEQUAL,
    };
  function J(E, _) {
    if (
      (_.type === Zt &&
        e.has("OES_texture_float_linear") === !1 &&
        (_.magFilter === Vt ||
          _.magFilter === Ir ||
          _.magFilter === Gi ||
          _.magFilter === Hn ||
          _.minFilter === Vt ||
          _.minFilter === Ir ||
          _.minFilter === Gi ||
          _.minFilter === Hn) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."
        ),
      i.texParameteri(E, i.TEXTURE_WRAP_S, re[_.wrapS]),
      i.texParameteri(E, i.TEXTURE_WRAP_T, re[_.wrapT]),
      (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) &&
        i.texParameteri(E, i.TEXTURE_WRAP_R, re[_.wrapR]),
      i.texParameteri(E, i.TEXTURE_MAG_FILTER, B[_.magFilter]),
      i.texParameteri(E, i.TEXTURE_MIN_FILTER, B[_.minFilter]),
      _.compareFunction &&
        (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, Q[_.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        _.magFilter === It ||
        (_.minFilter !== Gi && _.minFilter !== Hn) ||
        (_.type === Zt && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (_.anisotropy > 1 || n.get(_).__currentAnisotropy) {
        const z = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(
          E,
          z.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(_.anisotropy, r.getMaxAnisotropy())
        ),
          (n.get(_).__currentAnisotropy = _.anisotropy);
      }
    }
  }
  function de(E, _) {
    let z = !1;
    E.__webglInit === void 0 &&
      ((E.__webglInit = !0), _.addEventListener("dispose", b));
    const W = _.source;
    let K = p.get(W);
    K === void 0 && ((K = {}), p.set(W, K));
    const j = k(_);
    if (j !== E.__cacheKey) {
      K[j] === void 0 &&
        ((K[j] = { texture: i.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (z = !0)),
        K[j].usedTimes++;
      const _e = K[E.__cacheKey];
      _e !== void 0 &&
        (K[E.__cacheKey].usedTimes--, _e.usedTimes === 0 && R(_)),
        (E.__cacheKey = j),
        (E.__webglTexture = K[j].texture);
    }
    return z;
  }
  function Fe(E, _, z) {
    let W = i.TEXTURE_2D;
    (_.isDataArrayTexture || _.isCompressedArrayTexture) &&
      (W = i.TEXTURE_2D_ARRAY),
      _.isData3DTexture && (W = i.TEXTURE_3D);
    const K = de(E, _),
      j = _.source;
    t.bindTexture(W, E.__webglTexture, i.TEXTURE0 + z);
    const _e = n.get(j);
    if (j.version !== _e.__version || K === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const $ = We.getPrimaries(We.workingColorSpace),
        me = _.colorSpace === xn ? null : We.getPrimaries(_.colorSpace),
        ve = _.colorSpace === xn || $ === me ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, ve);
      let q = v(_.image, !1, r.maxTextureSize);
      q = Ee(_, q);
      const Y = s.convert(_.format, _.colorSpace),
        Se = s.convert(_.type);
      let oe = A(_.internalFormat, Y, Se, _.colorSpace, _.isVideoTexture);
      J(W, _);
      let ce;
      const Ae = _.mipmaps,
        Oe = _.isVideoTexture !== !0 && oe !== Ao,
        Be = _e.__version === void 0 || K === !0,
        He = j.dataReady,
        qe = M(_, q);
      if (_.isDepthTexture)
        (oe = i.DEPTH_COMPONENT16),
          _.type === Zt
            ? (oe = i.DEPTH_COMPONENT32F)
            : _.type === vi
            ? (oe = i.DEPTH_COMPONENT24)
            : _.type === Ii && (oe = i.DEPTH24_STENCIL8),
          Be &&
            (Oe
              ? t.texStorage2D(i.TEXTURE_2D, 1, oe, q.width, q.height)
              : t.texImage2D(
                  i.TEXTURE_2D,
                  0,
                  oe,
                  q.width,
                  q.height,
                  0,
                  Y,
                  Se,
                  null
                ));
      else if (_.isDataTexture)
        if (Ae.length > 0) {
          Oe &&
            Be &&
            t.texStorage2D(i.TEXTURE_2D, qe, oe, Ae[0].width, Ae[0].height);
          for (let he = 0, T = Ae.length; he < T; he++)
            (ce = Ae[he]),
              Oe
                ? He &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    he,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    Y,
                    Se,
                    ce.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    he,
                    oe,
                    ce.width,
                    ce.height,
                    0,
                    Y,
                    Se,
                    ce.data
                  );
          _.generateMipmaps = !1;
        } else
          Oe
            ? (Be && t.texStorage2D(i.TEXTURE_2D, qe, oe, q.width, q.height),
              He &&
                t.texSubImage2D(
                  i.TEXTURE_2D,
                  0,
                  0,
                  0,
                  q.width,
                  q.height,
                  Y,
                  Se,
                  q.data
                ))
            : t.texImage2D(
                i.TEXTURE_2D,
                0,
                oe,
                q.width,
                q.height,
                0,
                Y,
                Se,
                q.data
              );
      else if (_.isCompressedTexture)
        if (_.isCompressedArrayTexture) {
          Oe &&
            Be &&
            t.texStorage3D(
              i.TEXTURE_2D_ARRAY,
              qe,
              oe,
              Ae[0].width,
              Ae[0].height,
              q.depth
            );
          for (let he = 0, T = Ae.length; he < T; he++)
            (ce = Ae[he]),
              _.format !== Nt
                ? Y !== null
                  ? Oe
                    ? He &&
                      t.compressedTexSubImage3D(
                        i.TEXTURE_2D_ARRAY,
                        he,
                        0,
                        0,
                        0,
                        ce.width,
                        ce.height,
                        q.depth,
                        Y,
                        ce.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        i.TEXTURE_2D_ARRAY,
                        he,
                        oe,
                        ce.width,
                        ce.height,
                        q.depth,
                        0,
                        ce.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Oe
                ? He &&
                  t.texSubImage3D(
                    i.TEXTURE_2D_ARRAY,
                    he,
                    0,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    q.depth,
                    Y,
                    Se,
                    ce.data
                  )
                : t.texImage3D(
                    i.TEXTURE_2D_ARRAY,
                    he,
                    oe,
                    ce.width,
                    ce.height,
                    q.depth,
                    0,
                    Y,
                    Se,
                    ce.data
                  );
        } else {
          Oe &&
            Be &&
            t.texStorage2D(i.TEXTURE_2D, qe, oe, Ae[0].width, Ae[0].height);
          for (let he = 0, T = Ae.length; he < T; he++)
            (ce = Ae[he]),
              _.format !== Nt
                ? Y !== null
                  ? Oe
                    ? He &&
                      t.compressedTexSubImage2D(
                        i.TEXTURE_2D,
                        he,
                        0,
                        0,
                        ce.width,
                        ce.height,
                        Y,
                        ce.data
                      )
                    : t.compressedTexImage2D(
                        i.TEXTURE_2D,
                        he,
                        oe,
                        ce.width,
                        ce.height,
                        0,
                        ce.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : Oe
                ? He &&
                  t.texSubImage2D(
                    i.TEXTURE_2D,
                    he,
                    0,
                    0,
                    ce.width,
                    ce.height,
                    Y,
                    Se,
                    ce.data
                  )
                : t.texImage2D(
                    i.TEXTURE_2D,
                    he,
                    oe,
                    ce.width,
                    ce.height,
                    0,
                    Y,
                    Se,
                    ce.data
                  );
        }
      else if (_.isDataArrayTexture)
        Oe
          ? (Be &&
              t.texStorage3D(
                i.TEXTURE_2D_ARRAY,
                qe,
                oe,
                q.width,
                q.height,
                q.depth
              ),
            He &&
              t.texSubImage3D(
                i.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                q.width,
                q.height,
                q.depth,
                Y,
                Se,
                q.data
              ))
          : t.texImage3D(
              i.TEXTURE_2D_ARRAY,
              0,
              oe,
              q.width,
              q.height,
              q.depth,
              0,
              Y,
              Se,
              q.data
            );
      else if (_.isData3DTexture)
        Oe
          ? (Be &&
              t.texStorage3D(i.TEXTURE_3D, qe, oe, q.width, q.height, q.depth),
            He &&
              t.texSubImage3D(
                i.TEXTURE_3D,
                0,
                0,
                0,
                0,
                q.width,
                q.height,
                q.depth,
                Y,
                Se,
                q.data
              ))
          : t.texImage3D(
              i.TEXTURE_3D,
              0,
              oe,
              q.width,
              q.height,
              q.depth,
              0,
              Y,
              Se,
              q.data
            );
      else if (_.isFramebufferTexture) {
        if (Be)
          if (Oe) t.texStorage2D(i.TEXTURE_2D, qe, oe, q.width, q.height);
          else {
            let he = q.width,
              T = q.height;
            for (let ne = 0; ne < qe; ne++)
              t.texImage2D(i.TEXTURE_2D, ne, oe, he, T, 0, Y, Se, null),
                (he >>= 1),
                (T >>= 1);
          }
      } else if (Ae.length > 0) {
        if (Oe && Be) {
          const he = ke(Ae[0]);
          t.texStorage2D(i.TEXTURE_2D, qe, oe, he.width, he.height);
        }
        for (let he = 0, T = Ae.length; he < T; he++)
          (ce = Ae[he]),
            Oe
              ? He && t.texSubImage2D(i.TEXTURE_2D, he, 0, 0, Y, Se, ce)
              : t.texImage2D(i.TEXTURE_2D, he, oe, Y, Se, ce);
        _.generateMipmaps = !1;
      } else if (Oe) {
        if (Be) {
          const he = ke(q);
          t.texStorage2D(i.TEXTURE_2D, qe, oe, he.width, he.height);
        }
        He && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Y, Se, q);
      } else t.texImage2D(i.TEXTURE_2D, 0, oe, Y, Se, q);
      h(_) && u(W), (_e.__version = j.version), _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function Ge(E, _, z) {
    if (_.image.length !== 6) return;
    const W = de(E, _),
      K = _.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + z);
    const j = n.get(K);
    if (K.version !== j.__version || W === !0) {
      t.activeTexture(i.TEXTURE0 + z);
      const _e = We.getPrimaries(We.workingColorSpace),
        $ = _.colorSpace === xn ? null : We.getPrimaries(_.colorSpace),
        me = _.colorSpace === xn || _e === $ ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, _.flipY),
        i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, _.premultiplyAlpha),
        i.pixelStorei(i.UNPACK_ALIGNMENT, _.unpackAlignment),
        i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, me);
      const ve = _.isCompressedTexture || _.image[0].isCompressedTexture,
        q = _.image[0] && _.image[0].isDataTexture,
        Y = [];
      for (let T = 0; T < 6; T++)
        !ve && !q
          ? (Y[T] = v(_.image[T], !0, r.maxCubemapSize))
          : (Y[T] = q ? _.image[T].image : _.image[T]),
          (Y[T] = Ee(_, Y[T]));
      const Se = Y[0],
        oe = s.convert(_.format, _.colorSpace),
        ce = s.convert(_.type),
        Ae = A(_.internalFormat, oe, ce, _.colorSpace),
        Oe = _.isVideoTexture !== !0,
        Be = j.__version === void 0 || W === !0,
        He = K.dataReady;
      let qe = M(_, Se);
      J(i.TEXTURE_CUBE_MAP, _);
      let he;
      if (ve) {
        Oe &&
          Be &&
          t.texStorage2D(i.TEXTURE_CUBE_MAP, qe, Ae, Se.width, Se.height);
        for (let T = 0; T < 6; T++) {
          he = Y[T].mipmaps;
          for (let ne = 0; ne < he.length; ne++) {
            const te = he[ne];
            _.format !== Nt
              ? oe !== null
                ? Oe
                  ? He &&
                    t.compressedTexSubImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                      ne,
                      0,
                      0,
                      te.width,
                      te.height,
                      oe,
                      te.data
                    )
                  : t.compressedTexImage2D(
                      i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                      ne,
                      Ae,
                      te.width,
                      te.height,
                      0,
                      te.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Oe
              ? He &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                  ne,
                  0,
                  0,
                  te.width,
                  te.height,
                  oe,
                  ce,
                  te.data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                  ne,
                  Ae,
                  te.width,
                  te.height,
                  0,
                  oe,
                  ce,
                  te.data
                );
          }
        }
      } else {
        if (((he = _.mipmaps), Oe && Be)) {
          he.length > 0 && qe++;
          const T = ke(Y[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, qe, Ae, T.width, T.height);
        }
        for (let T = 0; T < 6; T++)
          if (q) {
            Oe
              ? He &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                  0,
                  0,
                  0,
                  Y[T].width,
                  Y[T].height,
                  oe,
                  ce,
                  Y[T].data
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                  0,
                  Ae,
                  Y[T].width,
                  Y[T].height,
                  0,
                  oe,
                  ce,
                  Y[T].data
                );
            for (let ne = 0; ne < he.length; ne++) {
              const ue = he[ne].image[T].image;
              Oe
                ? He &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                    ne + 1,
                    0,
                    0,
                    ue.width,
                    ue.height,
                    oe,
                    ce,
                    ue.data
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                    ne + 1,
                    Ae,
                    ue.width,
                    ue.height,
                    0,
                    oe,
                    ce,
                    ue.data
                  );
            }
          } else {
            Oe
              ? He &&
                t.texSubImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                  0,
                  0,
                  0,
                  oe,
                  ce,
                  Y[T]
                )
              : t.texImage2D(
                  i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                  0,
                  Ae,
                  oe,
                  ce,
                  Y[T]
                );
            for (let ne = 0; ne < he.length; ne++) {
              const te = he[ne];
              Oe
                ? He &&
                  t.texSubImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                    ne + 1,
                    0,
                    0,
                    oe,
                    ce,
                    te.image[T]
                  )
                : t.texImage2D(
                    i.TEXTURE_CUBE_MAP_POSITIVE_X + T,
                    ne + 1,
                    Ae,
                    oe,
                    ce,
                    te.image[T]
                  );
            }
          }
      }
      h(_) && u(i.TEXTURE_CUBE_MAP),
        (j.__version = K.version),
        _.onUpdate && _.onUpdate(_);
    }
    E.__version = _.version;
  }
  function V(E, _, z, W, K, j) {
    const _e = s.convert(z.format, z.colorSpace),
      $ = s.convert(z.type),
      me = A(z.internalFormat, _e, $, z.colorSpace);
    if (!n.get(_).__hasExternalTextures) {
      const q = Math.max(1, _.width >> j),
        Y = Math.max(1, _.height >> j);
      K === i.TEXTURE_3D || K === i.TEXTURE_2D_ARRAY
        ? t.texImage3D(K, j, me, q, Y, _.depth, 0, _e, $, null)
        : t.texImage2D(K, j, me, q, Y, 0, _e, $, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E),
      ge(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            W,
            K,
            n.get(z).__webglTexture,
            0,
            Ne(_)
          )
        : (K === i.TEXTURE_2D ||
            (K >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
              K <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          i.framebufferTexture2D(
            i.FRAMEBUFFER,
            W,
            K,
            n.get(z).__webglTexture,
            j
          ),
      t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function ee(E, _, z) {
    if (
      (i.bindRenderbuffer(i.RENDERBUFFER, E), _.depthBuffer && !_.stencilBuffer)
    ) {
      let W = i.DEPTH_COMPONENT24;
      if (z || ge(_)) {
        const K = _.depthTexture;
        K &&
          K.isDepthTexture &&
          (K.type === Zt
            ? (W = i.DEPTH_COMPONENT32F)
            : K.type === vi && (W = i.DEPTH_COMPONENT24));
        const j = Ne(_);
        ge(_)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              j,
              W,
              _.width,
              _.height
            )
          : i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              j,
              W,
              _.width,
              _.height
            );
      } else i.renderbufferStorage(i.RENDERBUFFER, W, _.width, _.height);
      i.framebufferRenderbuffer(
        i.FRAMEBUFFER,
        i.DEPTH_ATTACHMENT,
        i.RENDERBUFFER,
        E
      );
    } else if (_.depthBuffer && _.stencilBuffer) {
      const W = Ne(_);
      z && ge(_) === !1
        ? i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            W,
            i.DEPTH24_STENCIL8,
            _.width,
            _.height
          )
        : ge(_)
        ? o.renderbufferStorageMultisampleEXT(
            i.RENDERBUFFER,
            W,
            i.DEPTH24_STENCIL8,
            _.width,
            _.height
          )
        : i.renderbufferStorage(
            i.RENDERBUFFER,
            i.DEPTH_STENCIL,
            _.width,
            _.height
          ),
        i.framebufferRenderbuffer(
          i.FRAMEBUFFER,
          i.DEPTH_STENCIL_ATTACHMENT,
          i.RENDERBUFFER,
          E
        );
    } else {
      const W = _.textures;
      for (let K = 0; K < W.length; K++) {
        const j = W[K],
          _e = s.convert(j.format, j.colorSpace),
          $ = s.convert(j.type),
          me = A(j.internalFormat, _e, $, j.colorSpace),
          ve = Ne(_);
        z && ge(_) === !1
          ? i.renderbufferStorageMultisample(
              i.RENDERBUFFER,
              ve,
              me,
              _.width,
              _.height
            )
          : ge(_)
          ? o.renderbufferStorageMultisampleEXT(
              i.RENDERBUFFER,
              ve,
              me,
              _.width,
              _.height
            )
          : i.renderbufferStorage(i.RENDERBUFFER, me, _.width, _.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function le(E, _) {
    if (_ && _.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(i.FRAMEBUFFER, E),
      !(_.depthTexture && _.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(_.depthTexture).__webglTexture ||
      _.depthTexture.image.width !== _.width ||
      _.depthTexture.image.height !== _.height) &&
      ((_.depthTexture.image.width = _.width),
      (_.depthTexture.image.height = _.height),
      (_.depthTexture.needsUpdate = !0)),
      C(_.depthTexture, 0);
    const W = n.get(_.depthTexture).__webglTexture,
      K = Ne(_);
    if (_.depthTexture.format === pi)
      ge(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            W,
            0,
            K
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_ATTACHMENT,
            i.TEXTURE_2D,
            W,
            0
          );
    else if (_.depthTexture.format === Ui)
      ge(_)
        ? o.framebufferTexture2DMultisampleEXT(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            W,
            0,
            K
          )
        : i.framebufferTexture2D(
            i.FRAMEBUFFER,
            i.DEPTH_STENCIL_ATTACHMENT,
            i.TEXTURE_2D,
            W,
            0
          );
    else throw new Error("Unknown depthTexture format");
  }
  function ae(E) {
    const _ = n.get(E),
      z = E.isWebGLCubeRenderTarget === !0;
    if (E.depthTexture && !_.__autoAllocateDepthBuffer) {
      if (z)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      le(_.__webglFramebuffer, E);
    } else if (z) {
      _.__webglDepthbuffer = [];
      for (let W = 0; W < 6; W++)
        t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer[W]),
          (_.__webglDepthbuffer[W] = i.createRenderbuffer()),
          ee(_.__webglDepthbuffer[W], E, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, _.__webglFramebuffer),
        (_.__webglDepthbuffer = i.createRenderbuffer()),
        ee(_.__webglDepthbuffer, E, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function be(E, _, z) {
    const W = n.get(E);
    _ !== void 0 &&
      V(
        W.__webglFramebuffer,
        E,
        E.texture,
        i.COLOR_ATTACHMENT0,
        i.TEXTURE_2D,
        0
      ),
      z !== void 0 && ae(E);
  }
  function Le(E) {
    const _ = E.texture,
      z = n.get(E),
      W = n.get(_);
    E.addEventListener("dispose", D);
    const K = E.textures,
      j = E.isWebGLCubeRenderTarget === !0,
      _e = K.length > 1;
    if (
      (_e ||
        (W.__webglTexture === void 0 && (W.__webglTexture = i.createTexture()),
        (W.__version = _.version),
        a.memory.textures++),
      j)
    ) {
      z.__webglFramebuffer = [];
      for (let $ = 0; $ < 6; $++)
        if (_.mipmaps && _.mipmaps.length > 0) {
          z.__webglFramebuffer[$] = [];
          for (let me = 0; me < _.mipmaps.length; me++)
            z.__webglFramebuffer[$][me] = i.createFramebuffer();
        } else z.__webglFramebuffer[$] = i.createFramebuffer();
    } else {
      if (_.mipmaps && _.mipmaps.length > 0) {
        z.__webglFramebuffer = [];
        for (let $ = 0; $ < _.mipmaps.length; $++)
          z.__webglFramebuffer[$] = i.createFramebuffer();
      } else z.__webglFramebuffer = i.createFramebuffer();
      if (_e)
        for (let $ = 0, me = K.length; $ < me; $++) {
          const ve = n.get(K[$]);
          ve.__webglTexture === void 0 &&
            ((ve.__webglTexture = i.createTexture()), a.memory.textures++);
        }
      if (E.samples > 0 && ge(E) === !1) {
        (z.__webglMultisampledFramebuffer = i.createFramebuffer()),
          (z.__webglColorRenderbuffer = []),
          t.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let $ = 0; $ < K.length; $++) {
          const me = K[$];
          (z.__webglColorRenderbuffer[$] = i.createRenderbuffer()),
            i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[$]);
          const ve = s.convert(me.format, me.colorSpace),
            q = s.convert(me.type),
            Y = A(
              me.internalFormat,
              ve,
              q,
              me.colorSpace,
              E.isXRRenderTarget === !0
            ),
            Se = Ne(E);
          i.renderbufferStorageMultisample(
            i.RENDERBUFFER,
            Se,
            Y,
            E.width,
            E.height
          ),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + $,
              i.RENDERBUFFER,
              z.__webglColorRenderbuffer[$]
            );
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null),
          E.depthBuffer &&
            ((z.__webglDepthRenderbuffer = i.createRenderbuffer()),
            ee(z.__webglDepthRenderbuffer, E, !0)),
          t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (j) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, W.__webglTexture),
        J(i.TEXTURE_CUBE_MAP, _);
      for (let $ = 0; $ < 6; $++)
        if (_.mipmaps && _.mipmaps.length > 0)
          for (let me = 0; me < _.mipmaps.length; me++)
            V(
              z.__webglFramebuffer[$][me],
              E,
              _,
              i.COLOR_ATTACHMENT0,
              i.TEXTURE_CUBE_MAP_POSITIVE_X + $,
              me
            );
        else
          V(
            z.__webglFramebuffer[$],
            E,
            _,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_CUBE_MAP_POSITIVE_X + $,
            0
          );
      h(_) && u(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (_e) {
      for (let $ = 0, me = K.length; $ < me; $++) {
        const ve = K[$],
          q = n.get(ve);
        t.bindTexture(i.TEXTURE_2D, q.__webglTexture),
          J(i.TEXTURE_2D, ve),
          V(
            z.__webglFramebuffer,
            E,
            ve,
            i.COLOR_ATTACHMENT0 + $,
            i.TEXTURE_2D,
            0
          ),
          h(ve) && u(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let $ = i.TEXTURE_2D;
      if (
        ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) &&
          ($ = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
        t.bindTexture($, W.__webglTexture),
        J($, _),
        _.mipmaps && _.mipmaps.length > 0)
      )
        for (let me = 0; me < _.mipmaps.length; me++)
          V(z.__webglFramebuffer[me], E, _, i.COLOR_ATTACHMENT0, $, me);
      else V(z.__webglFramebuffer, E, _, i.COLOR_ATTACHMENT0, $, 0);
      h(_) && u($), t.unbindTexture();
    }
    E.depthBuffer && ae(E);
  }
  function ze(E) {
    const _ = E.textures;
    for (let z = 0, W = _.length; z < W; z++) {
      const K = _[z];
      if (h(K)) {
        const j = E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D,
          _e = n.get(K).__webglTexture;
        t.bindTexture(j, _e), u(j), t.unbindTexture();
      }
    }
  }
  function L(E) {
    if (E.samples > 0 && ge(E) === !1) {
      const _ = E.textures,
        z = E.width,
        W = E.height;
      let K = i.COLOR_BUFFER_BIT;
      const j = [],
        _e = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        $ = n.get(E),
        me = _.length > 1;
      if (me)
        for (let ve = 0; ve < _.length; ve++)
          t.bindFramebuffer(i.FRAMEBUFFER, $.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ve,
              i.RENDERBUFFER,
              null
            ),
            t.bindFramebuffer(i.FRAMEBUFFER, $.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ve,
              i.TEXTURE_2D,
              null,
              0
            );
      t.bindFramebuffer(i.READ_FRAMEBUFFER, $.__webglMultisampledFramebuffer),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, $.__webglFramebuffer);
      for (let ve = 0; ve < _.length; ve++) {
        j.push(i.COLOR_ATTACHMENT0 + ve), E.depthBuffer && j.push(_e);
        const q = $.__ignoreDepthValues !== void 0 ? $.__ignoreDepthValues : !1;
        if (
          (q === !1 &&
            (E.depthBuffer && (K |= i.DEPTH_BUFFER_BIT),
            E.stencilBuffer &&
              $.__isTransmissionRenderTarget !== !0 &&
              (K |= i.STENCIL_BUFFER_BIT)),
          me &&
            i.framebufferRenderbuffer(
              i.READ_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0,
              i.RENDERBUFFER,
              $.__webglColorRenderbuffer[ve]
            ),
          q === !0 &&
            (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [_e]),
            i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [_e])),
          me)
        ) {
          const Y = n.get(_[ve]).__webglTexture;
          i.framebufferTexture2D(
            i.DRAW_FRAMEBUFFER,
            i.COLOR_ATTACHMENT0,
            i.TEXTURE_2D,
            Y,
            0
          );
        }
        i.blitFramebuffer(0, 0, z, W, 0, 0, z, W, K, i.NEAREST),
          l && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, j);
      }
      if (
        (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        me)
      )
        for (let ve = 0; ve < _.length; ve++) {
          t.bindFramebuffer(i.FRAMEBUFFER, $.__webglMultisampledFramebuffer),
            i.framebufferRenderbuffer(
              i.FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ve,
              i.RENDERBUFFER,
              $.__webglColorRenderbuffer[ve]
            );
          const q = n.get(_[ve]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, $.__webglFramebuffer),
            i.framebufferTexture2D(
              i.DRAW_FRAMEBUFFER,
              i.COLOR_ATTACHMENT0 + ve,
              i.TEXTURE_2D,
              q,
              0
            );
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, $.__webglMultisampledFramebuffer);
    }
  }
  function Ne(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function ge(E) {
    const _ = n.get(E);
    return (
      E.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      _.__useRenderToTexture !== !1
    );
  }
  function et(E) {
    const _ = a.render.frame;
    d.get(E) !== _ && (d.set(E, _), E.update());
  }
  function Ee(E, _) {
    const z = E.colorSpace,
      W = E.format,
      K = E.type;
    return (
      E.isCompressedTexture === !0 ||
        E.isVideoTexture === !0 ||
        (z !== Tn &&
          z !== xn &&
          (We.getTransfer(z) === je
            ? (W !== Nt || K !== yn) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                z
              ))),
      _
    );
  }
  function ke(E) {
    return (
      typeof HTMLImageElement < "u" && E instanceof HTMLImageElement
        ? ((c.width = E.naturalWidth || E.width),
          (c.height = E.naturalHeight || E.height))
        : typeof VideoFrame < "u" && E instanceof VideoFrame
        ? ((c.width = E.displayWidth), (c.height = E.displayHeight))
        : ((c.width = E.width), (c.height = E.height)),
      c
    );
  }
  (this.allocateTextureUnit = I),
    (this.resetTextureUnits = g),
    (this.setTexture2D = C),
    (this.setTexture2DArray = G),
    (this.setTexture3D = X),
    (this.setTextureCube = Z),
    (this.rebindTextures = be),
    (this.setupRenderTarget = Le),
    (this.updateRenderTargetMipmap = ze),
    (this.updateMultisampleRenderTarget = L),
    (this.setupDepthRenderbuffer = ae),
    (this.setupFrameBufferTexture = V),
    (this.useMultisampledRTT = ge);
}
function lm(i, e) {
  function t(n, r = xn) {
    let s;
    const a = We.getTransfer(r);
    if (n === yn) return i.UNSIGNED_BYTE;
    if (n === Mo) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === So) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === Hc) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === zc) return i.BYTE;
    if (n === Bc) return i.SHORT;
    if (n === vo) return i.UNSIGNED_SHORT;
    if (n === xo) return i.INT;
    if (n === vi) return i.UNSIGNED_INT;
    if (n === Zt) return i.FLOAT;
    if (n === mr) return i.HALF_FLOAT;
    if (n === Vc) return i.ALPHA;
    if (n === Gc) return i.RGB;
    if (n === Nt) return i.RGBA;
    if (n === kc) return i.LUMINANCE;
    if (n === Wc) return i.LUMINANCE_ALPHA;
    if (n === pi) return i.DEPTH_COMPONENT;
    if (n === Ui) return i.DEPTH_STENCIL;
    if (n === Xc) return i.RED;
    if (n === yo) return i.RED_INTEGER;
    if (n === qc) return i.RG;
    if (n === Eo) return i.RG_INTEGER;
    if (n === To) return i.RGBA_INTEGER;
    if (n === Nr || n === Fr || n === Or || n === zr)
      if (a === je)
        if (((s = e.get("WEBGL_compressed_texture_s3tc_srgb")), s !== null)) {
          if (n === Nr) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Fr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Or) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === zr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((s = e.get("WEBGL_compressed_texture_s3tc")), s !== null)) {
        if (n === Nr) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Fr) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Or) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === zr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === Ys || n === Ks || n === js || n === Zs)
      if (((s = e.get("WEBGL_compressed_texture_pvrtc")), s !== null)) {
        if (n === Ys) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === Ks) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === js) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === Zs) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === Ao)
      return (
        (s = e.get("WEBGL_compressed_texture_etc1")),
        s !== null ? s.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (n === $s || n === Js)
      if (((s = e.get("WEBGL_compressed_texture_etc")), s !== null)) {
        if (n === $s)
          return a === je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
        if (n === Js)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : s.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === Qs ||
      n === ea ||
      n === ta ||
      n === na ||
      n === ia ||
      n === ra ||
      n === sa ||
      n === aa ||
      n === oa ||
      n === la ||
      n === ca ||
      n === ua ||
      n === da ||
      n === ha
    )
      if (((s = e.get("WEBGL_compressed_texture_astc")), s !== null)) {
        if (n === Qs)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ea)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === ta)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === na)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ia)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === ra)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === sa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === aa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === oa)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === la)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === ca)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === ua)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === da)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === ha)
          return a === je
            ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === Br || n === fa || n === pa)
      if (((s = e.get("EXT_texture_compression_bptc")), s !== null)) {
        if (n === Br)
          return a === je
            ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === fa) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === pa) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === Yc || n === ma || n === _a || n === ga)
      if (((s = e.get("EXT_texture_compression_rgtc")), s !== null)) {
        if (n === Br) return s.COMPRESSED_RED_RGTC1_EXT;
        if (n === ma) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === _a) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === ga) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === Ii ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
class cm extends Dt {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class ur extends Pt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const um = { type: "move" };
class hs {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new ur()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new ur()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new F()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new F())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new ur()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new F()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new F())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const v of e.hand.values()) {
          const h = t.getJointPose(v, n),
            u = this._getHandJoint(c, v);
          h !== null &&
            (u.matrix.fromArray(h.transform.matrix),
            u.matrix.decompose(u.position, u.rotation, u.scale),
            (u.matrixWorldNeedsUpdate = !0),
            (u.jointRadius = h.radius)),
            (u.visible = h !== null);
        }
        const d = c.joints["index-finger-tip"],
          f = c.joints["thumb-tip"],
          p = d.position.distanceTo(f.position),
          m = 0.02,
          x = 0.005;
        c.inputState.pinching && p > m + x
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            p <= m - x &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((r = t.getPose(e.targetRaySpace, n)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(um)));
    }
    return (
      o !== null && (o.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ur();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const dm = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  hm = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class fm {
  constructor() {
    (this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0);
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new At(),
        s = e.properties.get(r);
      (s.__webglTexture = t.texture),
        (t.depthNear != n.depthNear || t.depthFar != n.depthFar) &&
          ((this.depthNear = t.depthNear), (this.depthFar = t.depthFar)),
        (this.texture = r);
    }
  }
  render(e, t) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const n = t.cameras[0].viewport,
          r = new Jt({
            vertexShader: dm,
            fragmentShader: hm,
            uniforms: {
              depthColor: { value: this.texture },
              depthWidth: { value: n.z },
              depthHeight: { value: n.w },
            },
          });
        this.mesh = new Gt(new Si(20, 20), r);
      }
      e.render(this.mesh, t);
    }
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
}
class pm extends Mi {
  constructor(e, t) {
    super();
    const n = this;
    let r = null,
      s = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      d = null,
      f = null,
      p = null,
      m = null,
      x = null;
    const v = new fm(),
      h = t.getContextAttributes();
    let u = null,
      A = null;
    const M = [],
      b = [],
      D = new Ve();
    let w = null;
    const R = new Dt();
    R.layers.enable(1), (R.viewport = new ut());
    const H = new Dt();
    H.layers.enable(2), (H.viewport = new ut());
    const y = [R, H],
      g = new cm();
    g.layers.enable(1), g.layers.enable(2);
    let I = null,
      k = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (V) {
        let ee = M[V];
        return (
          ee === void 0 && ((ee = new hs()), (M[V] = ee)),
          ee.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (V) {
        let ee = M[V];
        return (
          ee === void 0 && ((ee = new hs()), (M[V] = ee)), ee.getGripSpace()
        );
      }),
      (this.getHand = function (V) {
        let ee = M[V];
        return (
          ee === void 0 && ((ee = new hs()), (M[V] = ee)), ee.getHandSpace()
        );
      });
    function C(V) {
      const ee = b.indexOf(V.inputSource);
      if (ee === -1) return;
      const le = M[ee];
      le !== void 0 &&
        (le.update(V.inputSource, V.frame, c || a),
        le.dispatchEvent({ type: V.type, data: V.inputSource }));
    }
    function G() {
      r.removeEventListener("select", C),
        r.removeEventListener("selectstart", C),
        r.removeEventListener("selectend", C),
        r.removeEventListener("squeeze", C),
        r.removeEventListener("squeezestart", C),
        r.removeEventListener("squeezeend", C),
        r.removeEventListener("end", G),
        r.removeEventListener("inputsourceschange", X);
      for (let V = 0; V < M.length; V++) {
        const ee = b[V];
        ee !== null && ((b[V] = null), M[V].disconnect(ee));
      }
      (I = null),
        (k = null),
        v.reset(),
        e.setRenderTarget(u),
        (m = null),
        (p = null),
        (f = null),
        (r = null),
        (A = null),
        Ge.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(w),
        e.setSize(D.width, D.height, !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (V) {
      (s = V),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (V) {
        (o = V),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (V) {
        c = V;
      }),
      (this.getBaseLayer = function () {
        return p !== null ? p : m;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return x;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (V) {
        if (((r = V), r !== null)) {
          if (
            ((u = e.getRenderTarget()),
            r.addEventListener("select", C),
            r.addEventListener("selectstart", C),
            r.addEventListener("selectend", C),
            r.addEventListener("squeeze", C),
            r.addEventListener("squeezestart", C),
            r.addEventListener("squeezeend", C),
            r.addEventListener("end", G),
            r.addEventListener("inputsourceschange", X),
            h.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (w = e.getPixelRatio()),
            e.getSize(D),
            r.renderState.layers === void 0)
          ) {
            const ee = {
              antialias: h.antialias,
              alpha: !0,
              depth: h.depth,
              stencil: h.stencil,
              framebufferScaleFactor: s,
            };
            (m = new XRWebGLLayer(r, t, ee)),
              r.updateRenderState({ baseLayer: m }),
              e.setPixelRatio(1),
              e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
              (A = new un(m.framebufferWidth, m.framebufferHeight, {
                format: Nt,
                type: yn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: h.stencil,
              }));
          } else {
            let ee = null,
              le = null,
              ae = null;
            h.depth &&
              ((ae = h.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (ee = h.stencil ? Ui : pi),
              (le = h.stencil ? Ii : vi));
            const be = {
              colorFormat: t.RGBA8,
              depthFormat: ae,
              scaleFactor: s,
            };
            (f = new XRWebGLBinding(r, t)),
              (p = f.createProjectionLayer(be)),
              r.updateRenderState({ layers: [p] }),
              e.setPixelRatio(1),
              e.setSize(p.textureWidth, p.textureHeight, !1),
              (A = new un(p.textureWidth, p.textureHeight, {
                format: Nt,
                type: yn,
                depthTexture: new Bo(
                  p.textureWidth,
                  p.textureHeight,
                  le,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  ee
                ),
                stencilBuffer: h.stencil,
                colorSpace: e.outputColorSpace,
                samples: h.antialias ? 4 : 0,
              }));
            const Le = e.properties.get(A);
            Le.__ignoreDepthValues = p.ignoreDepthValues;
          }
          (A.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await r.requestReferenceSpace(o)),
            Ge.setContext(r),
            Ge.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      });
    function X(V) {
      for (let ee = 0; ee < V.removed.length; ee++) {
        const le = V.removed[ee],
          ae = b.indexOf(le);
        ae >= 0 && ((b[ae] = null), M[ae].disconnect(le));
      }
      for (let ee = 0; ee < V.added.length; ee++) {
        const le = V.added[ee];
        let ae = b.indexOf(le);
        if (ae === -1) {
          for (let Le = 0; Le < M.length; Le++)
            if (Le >= b.length) {
              b.push(le), (ae = Le);
              break;
            } else if (b[Le] === null) {
              (b[Le] = le), (ae = Le);
              break;
            }
          if (ae === -1) break;
        }
        const be = M[ae];
        be && be.connect(le);
      }
    }
    const Z = new F(),
      re = new F();
    function B(V, ee, le) {
      Z.setFromMatrixPosition(ee.matrixWorld),
        re.setFromMatrixPosition(le.matrixWorld);
      const ae = Z.distanceTo(re),
        be = ee.projectionMatrix.elements,
        Le = le.projectionMatrix.elements,
        ze = be[14] / (be[10] - 1),
        L = be[14] / (be[10] + 1),
        Ne = (be[9] + 1) / be[5],
        ge = (be[9] - 1) / be[5],
        et = (be[8] - 1) / be[0],
        Ee = (Le[8] + 1) / Le[0],
        ke = ze * et,
        E = ze * Ee,
        _ = ae / (-et + Ee),
        z = _ * -et;
      ee.matrixWorld.decompose(V.position, V.quaternion, V.scale),
        V.translateX(z),
        V.translateZ(_),
        V.matrixWorld.compose(V.position, V.quaternion, V.scale),
        V.matrixWorldInverse.copy(V.matrixWorld).invert();
      const W = ze + _,
        K = L + _,
        j = ke - z,
        _e = E + (ae - z),
        $ = ((Ne * L) / K) * W,
        me = ((ge * L) / K) * W;
      V.projectionMatrix.makePerspective(j, _e, $, me, W, K),
        V.projectionMatrixInverse.copy(V.projectionMatrix).invert();
    }
    function Q(V, ee) {
      ee === null
        ? V.matrixWorld.copy(V.matrix)
        : V.matrixWorld.multiplyMatrices(ee.matrixWorld, V.matrix),
        V.matrixWorldInverse.copy(V.matrixWorld).invert();
    }
    this.updateCamera = function (V) {
      if (r === null) return;
      v.texture !== null && ((V.near = v.depthNear), (V.far = v.depthFar)),
        (g.near = H.near = R.near = V.near),
        (g.far = H.far = R.far = V.far),
        (I !== g.near || k !== g.far) &&
          (r.updateRenderState({ depthNear: g.near, depthFar: g.far }),
          (I = g.near),
          (k = g.far),
          (R.near = I),
          (R.far = k),
          (H.near = I),
          (H.far = k),
          R.updateProjectionMatrix(),
          H.updateProjectionMatrix(),
          V.updateProjectionMatrix());
      const ee = V.parent,
        le = g.cameras;
      Q(g, ee);
      for (let ae = 0; ae < le.length; ae++) Q(le[ae], ee);
      le.length === 2
        ? B(g, R, H)
        : g.projectionMatrix.copy(R.projectionMatrix),
        J(V, g, ee);
    };
    function J(V, ee, le) {
      le === null
        ? V.matrix.copy(ee.matrixWorld)
        : (V.matrix.copy(le.matrixWorld),
          V.matrix.invert(),
          V.matrix.multiply(ee.matrixWorld)),
        V.matrix.decompose(V.position, V.quaternion, V.scale),
        V.updateMatrixWorld(!0),
        V.projectionMatrix.copy(ee.projectionMatrix),
        V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),
        V.isPerspectiveCamera &&
          ((V.fov = ys * 2 * Math.atan(1 / V.projectionMatrix.elements[5])),
          (V.zoom = 1));
    }
    (this.getCamera = function () {
      return g;
    }),
      (this.getFoveation = function () {
        if (!(p === null && m === null)) return l;
      }),
      (this.setFoveation = function (V) {
        (l = V),
          p !== null && (p.fixedFoveation = V),
          m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = V);
      }),
      (this.hasDepthSensing = function () {
        return v.texture !== null;
      });
    let de = null;
    function Fe(V, ee) {
      if (((d = ee.getViewerPose(c || a)), (x = ee), d !== null)) {
        const le = d.views;
        m !== null &&
          (e.setRenderTargetFramebuffer(A, m.framebuffer),
          e.setRenderTarget(A));
        let ae = !1;
        le.length !== g.cameras.length && ((g.cameras.length = 0), (ae = !0));
        for (let Le = 0; Le < le.length; Le++) {
          const ze = le[Le];
          let L = null;
          if (m !== null) L = m.getViewport(ze);
          else {
            const ge = f.getViewSubImage(p, ze);
            (L = ge.viewport),
              Le === 0 &&
                (e.setRenderTargetTextures(
                  A,
                  ge.colorTexture,
                  p.ignoreDepthValues ? void 0 : ge.depthStencilTexture
                ),
                e.setRenderTarget(A));
          }
          let Ne = y[Le];
          Ne === void 0 &&
            ((Ne = new Dt()),
            Ne.layers.enable(Le),
            (Ne.viewport = new ut()),
            (y[Le] = Ne)),
            Ne.matrix.fromArray(ze.transform.matrix),
            Ne.matrix.decompose(Ne.position, Ne.quaternion, Ne.scale),
            Ne.projectionMatrix.fromArray(ze.projectionMatrix),
            Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),
            Ne.viewport.set(L.x, L.y, L.width, L.height),
            Le === 0 &&
              (g.matrix.copy(Ne.matrix),
              g.matrix.decompose(g.position, g.quaternion, g.scale)),
            ae === !0 && g.cameras.push(Ne);
        }
        const be = r.enabledFeatures;
        if (be && be.includes("depth-sensing")) {
          const Le = f.getDepthInformation(le[0]);
          Le && Le.isValid && Le.texture && v.init(e, Le, r.renderState);
        }
      }
      for (let le = 0; le < M.length; le++) {
        const ae = b[le],
          be = M[le];
        ae !== null && be !== void 0 && be.update(ae, ee, c || a);
      }
      v.render(e, g),
        de && de(V, ee),
        ee.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: ee }),
        (x = null);
    }
    const Ge = new zo();
    Ge.setAnimationLoop(Fe),
      (this.setAnimationLoop = function (V) {
        de = V;
      }),
      (this.dispose = function () {});
  }
}
const In = new dn(),
  mm = new rt();
function _m(i, e) {
  function t(h, u) {
    h.matrixAutoUpdate === !0 && h.updateMatrix(), u.value.copy(h.matrix);
  }
  function n(h, u) {
    u.color.getRGB(h.fogColor.value, Io(i)),
      u.isFog
        ? ((h.fogNear.value = u.near), (h.fogFar.value = u.far))
        : u.isFogExp2 && (h.fogDensity.value = u.density);
  }
  function r(h, u, A, M, b) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial
      ? s(h, u)
      : u.isMeshToonMaterial
      ? (s(h, u), f(h, u))
      : u.isMeshPhongMaterial
      ? (s(h, u), d(h, u))
      : u.isMeshStandardMaterial
      ? (s(h, u), p(h, u), u.isMeshPhysicalMaterial && m(h, u, b))
      : u.isMeshMatcapMaterial
      ? (s(h, u), x(h, u))
      : u.isMeshDepthMaterial
      ? s(h, u)
      : u.isMeshDistanceMaterial
      ? (s(h, u), v(h, u))
      : u.isMeshNormalMaterial
      ? s(h, u)
      : u.isLineBasicMaterial
      ? (a(h, u), u.isLineDashedMaterial && o(h, u))
      : u.isPointsMaterial
      ? l(h, u, A, M)
      : u.isSpriteMaterial
      ? c(h, u)
      : u.isShadowMaterial
      ? (h.color.value.copy(u.color), (h.opacity.value = u.opacity))
      : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(h, u) {
    (h.opacity.value = u.opacity),
      u.color && h.diffuse.value.copy(u.color),
      u.emissive &&
        h.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),
      u.map && ((h.map.value = u.map), t(u.map, h.mapTransform)),
      u.alphaMap &&
        ((h.alphaMap.value = u.alphaMap), t(u.alphaMap, h.alphaMapTransform)),
      u.bumpMap &&
        ((h.bumpMap.value = u.bumpMap),
        t(u.bumpMap, h.bumpMapTransform),
        (h.bumpScale.value = u.bumpScale),
        u.side === Tt && (h.bumpScale.value *= -1)),
      u.normalMap &&
        ((h.normalMap.value = u.normalMap),
        t(u.normalMap, h.normalMapTransform),
        h.normalScale.value.copy(u.normalScale),
        u.side === Tt && h.normalScale.value.negate()),
      u.displacementMap &&
        ((h.displacementMap.value = u.displacementMap),
        t(u.displacementMap, h.displacementMapTransform),
        (h.displacementScale.value = u.displacementScale),
        (h.displacementBias.value = u.displacementBias)),
      u.emissiveMap &&
        ((h.emissiveMap.value = u.emissiveMap),
        t(u.emissiveMap, h.emissiveMapTransform)),
      u.specularMap &&
        ((h.specularMap.value = u.specularMap),
        t(u.specularMap, h.specularMapTransform)),
      u.alphaTest > 0 && (h.alphaTest.value = u.alphaTest);
    const A = e.get(u),
      M = A.envMap,
      b = A.envMapRotation;
    if (
      (M &&
        ((h.envMap.value = M),
        In.copy(b),
        (In.x *= -1),
        (In.y *= -1),
        (In.z *= -1),
        M.isCubeTexture &&
          M.isRenderTargetTexture === !1 &&
          ((In.y *= -1), (In.z *= -1)),
        h.envMapRotation.value.setFromMatrix4(mm.makeRotationFromEuler(In)),
        (h.flipEnvMap.value =
          M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
        (h.reflectivity.value = u.reflectivity),
        (h.ior.value = u.ior),
        (h.refractionRatio.value = u.refractionRatio)),
      u.lightMap)
    ) {
      h.lightMap.value = u.lightMap;
      const D = i._useLegacyLights === !0 ? Math.PI : 1;
      (h.lightMapIntensity.value = u.lightMapIntensity * D),
        t(u.lightMap, h.lightMapTransform);
    }
    u.aoMap &&
      ((h.aoMap.value = u.aoMap),
      (h.aoMapIntensity.value = u.aoMapIntensity),
      t(u.aoMap, h.aoMapTransform));
  }
  function a(h, u) {
    h.diffuse.value.copy(u.color),
      (h.opacity.value = u.opacity),
      u.map && ((h.map.value = u.map), t(u.map, h.mapTransform));
  }
  function o(h, u) {
    (h.dashSize.value = u.dashSize),
      (h.totalSize.value = u.dashSize + u.gapSize),
      (h.scale.value = u.scale);
  }
  function l(h, u, A, M) {
    h.diffuse.value.copy(u.color),
      (h.opacity.value = u.opacity),
      (h.size.value = u.size * A),
      (h.scale.value = M * 0.5),
      u.map && ((h.map.value = u.map), t(u.map, h.uvTransform)),
      u.alphaMap &&
        ((h.alphaMap.value = u.alphaMap), t(u.alphaMap, h.alphaMapTransform)),
      u.alphaTest > 0 && (h.alphaTest.value = u.alphaTest);
  }
  function c(h, u) {
    h.diffuse.value.copy(u.color),
      (h.opacity.value = u.opacity),
      (h.rotation.value = u.rotation),
      u.map && ((h.map.value = u.map), t(u.map, h.mapTransform)),
      u.alphaMap &&
        ((h.alphaMap.value = u.alphaMap), t(u.alphaMap, h.alphaMapTransform)),
      u.alphaTest > 0 && (h.alphaTest.value = u.alphaTest);
  }
  function d(h, u) {
    h.specular.value.copy(u.specular),
      (h.shininess.value = Math.max(u.shininess, 1e-4));
  }
  function f(h, u) {
    u.gradientMap && (h.gradientMap.value = u.gradientMap);
  }
  function p(h, u) {
    (h.metalness.value = u.metalness),
      u.metalnessMap &&
        ((h.metalnessMap.value = u.metalnessMap),
        t(u.metalnessMap, h.metalnessMapTransform)),
      (h.roughness.value = u.roughness),
      u.roughnessMap &&
        ((h.roughnessMap.value = u.roughnessMap),
        t(u.roughnessMap, h.roughnessMapTransform)),
      u.envMap && (h.envMapIntensity.value = u.envMapIntensity);
  }
  function m(h, u, A) {
    (h.ior.value = u.ior),
      u.sheen > 0 &&
        (h.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),
        (h.sheenRoughness.value = u.sheenRoughness),
        u.sheenColorMap &&
          ((h.sheenColorMap.value = u.sheenColorMap),
          t(u.sheenColorMap, h.sheenColorMapTransform)),
        u.sheenRoughnessMap &&
          ((h.sheenRoughnessMap.value = u.sheenRoughnessMap),
          t(u.sheenRoughnessMap, h.sheenRoughnessMapTransform))),
      u.clearcoat > 0 &&
        ((h.clearcoat.value = u.clearcoat),
        (h.clearcoatRoughness.value = u.clearcoatRoughness),
        u.clearcoatMap &&
          ((h.clearcoatMap.value = u.clearcoatMap),
          t(u.clearcoatMap, h.clearcoatMapTransform)),
        u.clearcoatRoughnessMap &&
          ((h.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap),
          t(u.clearcoatRoughnessMap, h.clearcoatRoughnessMapTransform)),
        u.clearcoatNormalMap &&
          ((h.clearcoatNormalMap.value = u.clearcoatNormalMap),
          t(u.clearcoatNormalMap, h.clearcoatNormalMapTransform),
          h.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),
          u.side === Tt && h.clearcoatNormalScale.value.negate())),
      u.iridescence > 0 &&
        ((h.iridescence.value = u.iridescence),
        (h.iridescenceIOR.value = u.iridescenceIOR),
        (h.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0]),
        (h.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1]),
        u.iridescenceMap &&
          ((h.iridescenceMap.value = u.iridescenceMap),
          t(u.iridescenceMap, h.iridescenceMapTransform)),
        u.iridescenceThicknessMap &&
          ((h.iridescenceThicknessMap.value = u.iridescenceThicknessMap),
          t(u.iridescenceThicknessMap, h.iridescenceThicknessMapTransform))),
      u.transmission > 0 &&
        ((h.transmission.value = u.transmission),
        (h.transmissionSamplerMap.value = A.texture),
        h.transmissionSamplerSize.value.set(A.width, A.height),
        u.transmissionMap &&
          ((h.transmissionMap.value = u.transmissionMap),
          t(u.transmissionMap, h.transmissionMapTransform)),
        (h.thickness.value = u.thickness),
        u.thicknessMap &&
          ((h.thicknessMap.value = u.thicknessMap),
          t(u.thicknessMap, h.thicknessMapTransform)),
        (h.attenuationDistance.value = u.attenuationDistance),
        h.attenuationColor.value.copy(u.attenuationColor)),
      u.anisotropy > 0 &&
        (h.anisotropyVector.value.set(
          u.anisotropy * Math.cos(u.anisotropyRotation),
          u.anisotropy * Math.sin(u.anisotropyRotation)
        ),
        u.anisotropyMap &&
          ((h.anisotropyMap.value = u.anisotropyMap),
          t(u.anisotropyMap, h.anisotropyMapTransform))),
      (h.specularIntensity.value = u.specularIntensity),
      h.specularColor.value.copy(u.specularColor),
      u.specularColorMap &&
        ((h.specularColorMap.value = u.specularColorMap),
        t(u.specularColorMap, h.specularColorMapTransform)),
      u.specularIntensityMap &&
        ((h.specularIntensityMap.value = u.specularIntensityMap),
        t(u.specularIntensityMap, h.specularIntensityMapTransform));
  }
  function x(h, u) {
    u.matcap && (h.matcap.value = u.matcap);
  }
  function v(h, u) {
    const A = e.get(u).light;
    h.referencePosition.value.setFromMatrixPosition(A.matrixWorld),
      (h.nearDistance.value = A.shadow.camera.near),
      (h.farDistance.value = A.shadow.camera.far);
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function gm(i, e, t, n) {
  let r = {},
    s = {},
    a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, M) {
    const b = M.program;
    n.uniformBlockBinding(A, b);
  }
  function c(A, M) {
    let b = r[A.id];
    b === void 0 &&
      (x(A), (b = d(A)), (r[A.id] = b), A.addEventListener("dispose", h));
    const D = M.program;
    n.updateUBOMapping(A, D);
    const w = e.render.frame;
    s[A.id] !== w && (p(A), (s[A.id] = w));
  }
  function d(A) {
    const M = f();
    A.__bindingPointIndex = M;
    const b = i.createBuffer(),
      D = A.__size,
      w = A.usage;
    return (
      i.bindBuffer(i.UNIFORM_BUFFER, b),
      i.bufferData(i.UNIFORM_BUFFER, D, w),
      i.bindBuffer(i.UNIFORM_BUFFER, null),
      i.bindBufferBase(i.UNIFORM_BUFFER, M, b),
      b
    );
  }
  function f() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return a.push(A), A;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function p(A) {
    const M = r[A.id],
      b = A.uniforms,
      D = A.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, M);
    for (let w = 0, R = b.length; w < R; w++) {
      const H = Array.isArray(b[w]) ? b[w] : [b[w]];
      for (let y = 0, g = H.length; y < g; y++) {
        const I = H[y];
        if (m(I, w, y, D) === !0) {
          const k = I.__offset,
            C = Array.isArray(I.value) ? I.value : [I.value];
          let G = 0;
          for (let X = 0; X < C.length; X++) {
            const Z = C[X],
              re = v(Z);
            typeof Z == "number" || typeof Z == "boolean"
              ? ((I.__data[0] = Z),
                i.bufferSubData(i.UNIFORM_BUFFER, k + G, I.__data))
              : Z.isMatrix3
              ? ((I.__data[0] = Z.elements[0]),
                (I.__data[1] = Z.elements[1]),
                (I.__data[2] = Z.elements[2]),
                (I.__data[3] = 0),
                (I.__data[4] = Z.elements[3]),
                (I.__data[5] = Z.elements[4]),
                (I.__data[6] = Z.elements[5]),
                (I.__data[7] = 0),
                (I.__data[8] = Z.elements[6]),
                (I.__data[9] = Z.elements[7]),
                (I.__data[10] = Z.elements[8]),
                (I.__data[11] = 0))
              : (Z.toArray(I.__data, G),
                (G += re.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          i.bufferSubData(i.UNIFORM_BUFFER, k, I.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(A, M, b, D) {
    const w = A.value,
      R = M + "_" + b;
    if (D[R] === void 0)
      return (
        typeof w == "number" || typeof w == "boolean"
          ? (D[R] = w)
          : (D[R] = w.clone()),
        !0
      );
    {
      const H = D[R];
      if (typeof w == "number" || typeof w == "boolean") {
        if (H !== w) return (D[R] = w), !0;
      } else if (H.equals(w) === !1) return H.copy(w), !0;
    }
    return !1;
  }
  function x(A) {
    const M = A.uniforms;
    let b = 0;
    const D = 16;
    for (let R = 0, H = M.length; R < H; R++) {
      const y = Array.isArray(M[R]) ? M[R] : [M[R]];
      for (let g = 0, I = y.length; g < I; g++) {
        const k = y[g],
          C = Array.isArray(k.value) ? k.value : [k.value];
        for (let G = 0, X = C.length; G < X; G++) {
          const Z = C[G],
            re = v(Z),
            B = b % D;
          B !== 0 && D - B < re.boundary && (b += D - B),
            (k.__data = new Float32Array(
              re.storage / Float32Array.BYTES_PER_ELEMENT
            )),
            (k.__offset = b),
            (b += re.storage);
        }
      }
    }
    const w = b % D;
    return w > 0 && (b += D - w), (A.__size = b), (A.__cache = {}), this;
  }
  function v(A) {
    const M = { boundary: 0, storage: 0 };
    return (
      typeof A == "number" || typeof A == "boolean"
        ? ((M.boundary = 4), (M.storage = 4))
        : A.isVector2
        ? ((M.boundary = 8), (M.storage = 8))
        : A.isVector3 || A.isColor
        ? ((M.boundary = 16), (M.storage = 12))
        : A.isVector4
        ? ((M.boundary = 16), (M.storage = 16))
        : A.isMatrix3
        ? ((M.boundary = 48), (M.storage = 48))
        : A.isMatrix4
        ? ((M.boundary = 64), (M.storage = 64))
        : A.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            A
          ),
      M
    );
  }
  function h(A) {
    const M = A.target;
    M.removeEventListener("dispose", h);
    const b = a.indexOf(M.__bindingPointIndex);
    a.splice(b, 1), i.deleteBuffer(r[M.id]), delete r[M.id], delete s[M.id];
  }
  function u() {
    for (const A in r) i.deleteBuffer(r[A]);
    (a = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: u };
}
class vm {
  constructor(e = {}) {
    const {
      canvas: t = au(),
      context: n = null,
      depth: r = !0,
      stencil: s = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: d = "default",
      failIfMajorPerformanceCaveat: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let p;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163."
        );
      p = n.getContextAttributes().alpha;
    } else p = a;
    const m = new Uint32Array(4),
      x = new Int32Array(4);
    let v = null,
      h = null;
    const u = [],
      A = [];
    (this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Yt),
      (this._useLegacyLights = !1),
      (this.toneMapping = Sn),
      (this.toneMappingExposure = 1);
    const M = this;
    let b = !1,
      D = 0,
      w = 0,
      R = null,
      H = -1,
      y = null;
    const g = new ut(),
      I = new ut();
    let k = null;
    const C = new Xe(0);
    let G = 0,
      X = t.width,
      Z = t.height,
      re = 1,
      B = null,
      Q = null;
    const J = new ut(0, 0, X, Z),
      de = new ut(0, 0, X, Z);
    let Fe = !1;
    const Ge = new Oo();
    let V = !1,
      ee = !1;
    const le = new rt(),
      ae = new Ve(),
      be = new F(),
      Le = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    function ze() {
      return R === null ? re : 1;
    }
    let L = n;
    function Ne(S, P) {
      const N = t.getContext(S, P);
      return N !== null ? N : null;
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: d,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${ws}`),
        t.addEventListener("webglcontextlost", ne, !1),
        t.addEventListener("webglcontextrestored", te, !1),
        t.addEventListener("webglcontextcreationerror", ue, !1),
        L === null)
      ) {
        const P = "webgl2";
        if (((L = Ne(P, S)), L === null))
          throw Ne(P)
            ? new Error(
                "Error creating WebGL context with your selected attributes."
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (S) {
      throw (console.error("THREE.WebGLRenderer: " + S.message), S);
    }
    let ge,
      et,
      Ee,
      ke,
      E,
      _,
      z,
      W,
      K,
      j,
      _e,
      $,
      me,
      ve,
      q,
      Y,
      Se,
      oe,
      ce,
      Ae,
      Oe,
      Be,
      He,
      qe;
    function he() {
      (ge = new bf(L)),
        ge.init(),
        (et = new xf(L, ge, e)),
        (Be = new lm(L, ge)),
        (Ee = new am(L)),
        (ke = new Cf(L)),
        (E = new qp()),
        (_ = new om(L, ge, Ee, E, et, Be, ke)),
        (z = new Sf(M)),
        (W = new Af(M)),
        (K = new Du(L)),
        (He = new gf(L, K)),
        (j = new wf(L, K, ke, He)),
        (_e = new Lf(L, j, K, ke)),
        (ce = new Pf(L, et, _)),
        (Y = new Mf(E)),
        ($ = new Xp(M, z, W, ge, et, He, Y)),
        (me = new _m(M, E)),
        (ve = new Kp()),
        (q = new em(ge)),
        (oe = new _f(M, z, W, Ee, _e, p, l)),
        (Se = new sm(M, _e, et)),
        (qe = new gm(L, ke, et, Ee)),
        (Ae = new vf(L, ge, ke)),
        (Oe = new Rf(L, ge, ke)),
        (ke.programs = $.programs),
        (M.capabilities = et),
        (M.extensions = ge),
        (M.properties = E),
        (M.renderLists = ve),
        (M.shadowMap = Se),
        (M.state = Ee),
        (M.info = ke);
    }
    he();
    const T = new pm(M, L);
    (this.xr = T),
      (this.getContext = function () {
        return L;
      }),
      (this.getContextAttributes = function () {
        return L.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const S = ge.get("WEBGL_lose_context");
        S && S.loseContext();
      }),
      (this.forceContextRestore = function () {
        const S = ge.get("WEBGL_lose_context");
        S && S.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return re;
      }),
      (this.setPixelRatio = function (S) {
        S !== void 0 && ((re = S), this.setSize(X, Z, !1));
      }),
      (this.getSize = function (S) {
        return S.set(X, Z);
      }),
      (this.setSize = function (S, P, N = !0) {
        if (T.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting."
          );
          return;
        }
        (X = S),
          (Z = P),
          (t.width = Math.floor(S * re)),
          (t.height = Math.floor(P * re)),
          N === !0 && ((t.style.width = S + "px"), (t.style.height = P + "px")),
          this.setViewport(0, 0, S, P);
      }),
      (this.getDrawingBufferSize = function (S) {
        return S.set(X * re, Z * re).floor();
      }),
      (this.setDrawingBufferSize = function (S, P, N) {
        (X = S),
          (Z = P),
          (re = N),
          (t.width = Math.floor(S * N)),
          (t.height = Math.floor(P * N)),
          this.setViewport(0, 0, S, P);
      }),
      (this.getCurrentViewport = function (S) {
        return S.copy(g);
      }),
      (this.getViewport = function (S) {
        return S.copy(J);
      }),
      (this.setViewport = function (S, P, N, O) {
        S.isVector4 ? J.set(S.x, S.y, S.z, S.w) : J.set(S, P, N, O),
          Ee.viewport(g.copy(J).multiplyScalar(re).round());
      }),
      (this.getScissor = function (S) {
        return S.copy(de);
      }),
      (this.setScissor = function (S, P, N, O) {
        S.isVector4 ? de.set(S.x, S.y, S.z, S.w) : de.set(S, P, N, O),
          Ee.scissor(I.copy(de).multiplyScalar(re).round());
      }),
      (this.getScissorTest = function () {
        return Fe;
      }),
      (this.setScissorTest = function (S) {
        Ee.setScissorTest((Fe = S));
      }),
      (this.setOpaqueSort = function (S) {
        B = S;
      }),
      (this.setTransparentSort = function (S) {
        Q = S;
      }),
      (this.getClearColor = function (S) {
        return S.copy(oe.getClearColor());
      }),
      (this.setClearColor = function () {
        oe.setClearColor.apply(oe, arguments);
      }),
      (this.getClearAlpha = function () {
        return oe.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        oe.setClearAlpha.apply(oe, arguments);
      }),
      (this.clear = function (S = !0, P = !0, N = !0) {
        let O = 0;
        if (S) {
          let U = !1;
          if (R !== null) {
            const se = R.texture.format;
            U = se === To || se === Eo || se === yo;
          }
          if (U) {
            const se = R.texture.type,
              pe =
                se === yn ||
                se === vi ||
                se === vo ||
                se === Ii ||
                se === Mo ||
                se === So,
              xe = oe.getClearColor(),
              Te = oe.getClearAlpha(),
              Ce = xe.r,
              we = xe.g,
              Pe = xe.b;
            pe
              ? ((m[0] = Ce),
                (m[1] = we),
                (m[2] = Pe),
                (m[3] = Te),
                L.clearBufferuiv(L.COLOR, 0, m))
              : ((x[0] = Ce),
                (x[1] = we),
                (x[2] = Pe),
                (x[3] = Te),
                L.clearBufferiv(L.COLOR, 0, x));
          } else O |= L.COLOR_BUFFER_BIT;
        }
        P && (O |= L.DEPTH_BUFFER_BIT),
          N &&
            ((O |= L.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          L.clear(O);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        t.removeEventListener("webglcontextlost", ne, !1),
          t.removeEventListener("webglcontextrestored", te, !1),
          t.removeEventListener("webglcontextcreationerror", ue, !1),
          ve.dispose(),
          q.dispose(),
          E.dispose(),
          z.dispose(),
          W.dispose(),
          _e.dispose(),
          He.dispose(),
          qe.dispose(),
          $.dispose(),
          T.dispose(),
          T.removeEventListener("sessionstart", Wt),
          T.removeEventListener("sessionend", Xt),
          An.stop();
      });
    function ne(S) {
      S.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (b = !0);
    }
    function te() {
      console.log("THREE.WebGLRenderer: Context Restored."), (b = !1);
      const S = ke.autoReset,
        P = Se.enabled,
        N = Se.autoUpdate,
        O = Se.needsUpdate,
        U = Se.type;
      he(),
        (ke.autoReset = S),
        (Se.enabled = P),
        (Se.autoUpdate = N),
        (Se.needsUpdate = O),
        (Se.type = U);
    }
    function ue(S) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        S.statusMessage
      );
    }
    function fe(S) {
      const P = S.target;
      P.removeEventListener("dispose", fe), Ye(P);
    }
    function Ye(S) {
      Ze(S), E.remove(S);
    }
    function Ze(S) {
      const P = E.get(S).programs;
      P !== void 0 &&
        (P.forEach(function (N) {
          $.releaseProgram(N);
        }),
        S.isShaderMaterial && $.releaseShaderCache(S));
    }
    this.renderBufferDirect = function (S, P, N, O, U, se) {
      P === null && (P = Le);
      const pe = U.isMesh && U.matrixWorld.determinant() < 0,
        xe = jo(S, P, N, O, U);
      Ee.setMaterial(O, pe);
      let Te = N.index,
        Ce = 1;
      if (O.wireframe === !0) {
        if (((Te = j.getWireframeAttribute(N)), Te === void 0)) return;
        Ce = 2;
      }
      const we = N.drawRange,
        Pe = N.attributes.position;
      let tt = we.start * Ce,
        bt = (we.start + we.count) * Ce;
      se !== null &&
        ((tt = Math.max(tt, se.start * Ce)),
        (bt = Math.min(bt, (se.start + se.count) * Ce))),
        Te !== null
          ? ((tt = Math.max(tt, 0)), (bt = Math.min(bt, Te.count)))
          : Pe != null &&
            ((tt = Math.max(tt, 0)), (bt = Math.min(bt, Pe.count)));
      const ot = bt - tt;
      if (ot < 0 || ot === 1 / 0) return;
      He.setup(U, O, xe, N, Te);
      let Qt,
        Qe = Ae;
      if (
        (Te !== null && ((Qt = K.get(Te)), (Qe = Oe), Qe.setIndex(Qt)),
        U.isMesh)
      )
        O.wireframe === !0
          ? (Ee.setLineWidth(O.wireframeLinewidth * ze()), Qe.setMode(L.LINES))
          : Qe.setMode(L.TRIANGLES);
      else if (U.isLine) {
        let Ue = O.linewidth;
        Ue === void 0 && (Ue = 1),
          Ee.setLineWidth(Ue * ze()),
          U.isLineSegments
            ? Qe.setMode(L.LINES)
            : U.isLineLoop
            ? Qe.setMode(L.LINE_LOOP)
            : Qe.setMode(L.LINE_STRIP);
      } else
        U.isPoints
          ? Qe.setMode(L.POINTS)
          : U.isSprite && Qe.setMode(L.TRIANGLES);
      if (U.isBatchedMesh)
        Qe.renderMultiDraw(
          U._multiDrawStarts,
          U._multiDrawCounts,
          U._multiDrawCount
        );
      else if (U.isInstancedMesh) Qe.renderInstances(tt, ot, U.count);
      else if (N.isInstancedBufferGeometry) {
        const Ue = N._maxInstanceCount !== void 0 ? N._maxInstanceCount : 1 / 0,
          br = Math.min(N.instanceCount, Ue);
        Qe.renderInstances(tt, ot, br);
      } else Qe.render(tt, ot);
    };
    function Je(S, P, N) {
      S.transparent === !0 && S.side === on && S.forceSinglePass === !1
        ? ((S.side = Tt),
          (S.needsUpdate = !0),
          Hi(S, P, N),
          (S.side = En),
          (S.needsUpdate = !0),
          Hi(S, P, N),
          (S.side = on))
        : Hi(S, P, N);
    }
    (this.compile = function (S, P, N = null) {
      N === null && (N = S),
        (h = q.get(N)),
        h.init(),
        A.push(h),
        N.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(P.layers) &&
            (h.pushLight(U), U.castShadow && h.pushShadow(U));
        }),
        S !== N &&
          S.traverseVisible(function (U) {
            U.isLight &&
              U.layers.test(P.layers) &&
              (h.pushLight(U), U.castShadow && h.pushShadow(U));
          }),
        h.setupLights(M._useLegacyLights);
      const O = new Set();
      return (
        S.traverse(function (U) {
          const se = U.material;
          if (se)
            if (Array.isArray(se))
              for (let pe = 0; pe < se.length; pe++) {
                const xe = se[pe];
                Je(xe, N, U), O.add(xe);
              }
            else Je(se, N, U), O.add(se);
        }),
        A.pop(),
        (h = null),
        O
      );
    }),
      (this.compileAsync = function (S, P, N = null) {
        const O = this.compile(S, P, N);
        return new Promise((U) => {
          function se() {
            if (
              (O.forEach(function (pe) {
                E.get(pe).currentProgram.isReady() && O.delete(pe);
              }),
              O.size === 0)
            ) {
              U(S);
              return;
            }
            setTimeout(se, 10);
          }
          ge.get("KHR_parallel_shader_compile") !== null
            ? se()
            : setTimeout(se, 10);
        });
      });
    let dt = null;
    function Ke(S) {
      dt && dt(S);
    }
    function Wt() {
      An.stop();
    }
    function Xt() {
      An.start();
    }
    const An = new zo();
    An.setAnimationLoop(Ke),
      typeof self < "u" && An.setContext(self),
      (this.setAnimationLoop = function (S) {
        (dt = S), T.setAnimationLoop(S), S === null ? An.stop() : An.start();
      }),
      T.addEventListener("sessionstart", Wt),
      T.addEventListener("sessionend", Xt),
      (this.render = function (S, P) {
        if (P !== void 0 && P.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
          );
          return;
        }
        if (b === !0) return;
        S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(),
          P.parent === null &&
            P.matrixWorldAutoUpdate === !0 &&
            P.updateMatrixWorld(),
          T.enabled === !0 &&
            T.isPresenting === !0 &&
            (T.cameraAutoUpdate === !0 && T.updateCamera(P),
            (P = T.getCamera())),
          S.isScene === !0 && S.onBeforeRender(M, S, P, R),
          (h = q.get(S, A.length)),
          h.init(),
          A.push(h),
          le.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse),
          Ge.setFromProjectionMatrix(le),
          (ee = this.localClippingEnabled),
          (V = Y.init(this.clippingPlanes, ee)),
          (v = ve.get(S, u.length)),
          v.init(),
          u.push(v),
          Us(S, P, 0, M.sortObjects),
          v.finish(),
          M.sortObjects === !0 && v.sort(B, Q),
          this.info.render.frame++,
          V === !0 && Y.beginShadows();
        const N = h.state.shadowsArray;
        if (
          (Se.render(N, S, P),
          V === !0 && Y.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          (T.enabled === !1 ||
            T.isPresenting === !1 ||
            T.hasDepthSensing() === !1) &&
            oe.render(v, S),
          h.setupLights(M._useLegacyLights),
          P.isArrayCamera)
        ) {
          const O = P.cameras;
          for (let U = 0, se = O.length; U < se; U++) {
            const pe = O[U];
            Ds(v, S, pe, pe.viewport);
          }
        } else Ds(v, S, P);
        R !== null &&
          (_.updateMultisampleRenderTarget(R), _.updateRenderTargetMipmap(R)),
          S.isScene === !0 && S.onAfterRender(M, S, P),
          He.resetDefaultState(),
          (H = -1),
          (y = null),
          A.pop(),
          A.length > 0 ? (h = A[A.length - 1]) : (h = null),
          u.pop(),
          u.length > 0 ? (v = u[u.length - 1]) : (v = null);
      });
    function Us(S, P, N, O) {
      if (S.visible === !1) return;
      if (S.layers.test(P.layers)) {
        if (S.isGroup) N = S.renderOrder;
        else if (S.isLOD) S.autoUpdate === !0 && S.update(P);
        else if (S.isLight) h.pushLight(S), S.castShadow && h.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || Ge.intersectsSprite(S)) {
            O && be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);
            const pe = _e.update(S),
              xe = S.material;
            xe.visible && v.push(S, pe, xe, N, be.z, null);
          }
        } else if (
          (S.isMesh || S.isLine || S.isPoints) &&
          (!S.frustumCulled || Ge.intersectsObject(S))
        ) {
          const pe = _e.update(S),
            xe = S.material;
          if (
            (O &&
              (S.boundingSphere !== void 0
                ? (S.boundingSphere === null && S.computeBoundingSphere(),
                  be.copy(S.boundingSphere.center))
                : (pe.boundingSphere === null && pe.computeBoundingSphere(),
                  be.copy(pe.boundingSphere.center)),
              be.applyMatrix4(S.matrixWorld).applyMatrix4(le)),
            Array.isArray(xe))
          ) {
            const Te = pe.groups;
            for (let Ce = 0, we = Te.length; Ce < we; Ce++) {
              const Pe = Te[Ce],
                tt = xe[Pe.materialIndex];
              tt && tt.visible && v.push(S, pe, tt, N, be.z, Pe);
            }
          } else xe.visible && v.push(S, pe, xe, N, be.z, null);
        }
      }
      const se = S.children;
      for (let pe = 0, xe = se.length; pe < xe; pe++) Us(se[pe], P, N, O);
    }
    function Ds(S, P, N, O) {
      const U = S.opaque,
        se = S.transmissive,
        pe = S.transparent;
      h.setupLightsView(N),
        V === !0 && Y.setGlobalState(M.clippingPlanes, N),
        se.length > 0 && Ko(U, se, P, N),
        O && Ee.viewport(g.copy(O)),
        U.length > 0 && Bi(U, P, N),
        se.length > 0 && Bi(se, P, N),
        pe.length > 0 && Bi(pe, P, N),
        Ee.buffers.depth.setTest(!0),
        Ee.buffers.depth.setMask(!0),
        Ee.buffers.color.setMask(!0),
        Ee.setPolygonOffset(!1);
    }
    function Ko(S, P, N, O) {
      if ((N.isScene === !0 ? N.overrideMaterial : null) !== null) return;
      if (h.state.transmissionRenderTarget === null) {
        h.state.transmissionRenderTarget = new un(1, 1, {
          generateMipmaps: !0,
          type:
            ge.has("EXT_color_buffer_half_float") ||
            ge.has("EXT_color_buffer_float")
              ? mr
              : yn,
          minFilter: Hn,
          samples: 4,
          stencilBuffer: s,
        });
        const Ce = E.get(h.state.transmissionRenderTarget);
        Ce.__isTransmissionRenderTarget = !0;
      }
      const se = h.state.transmissionRenderTarget;
      M.getDrawingBufferSize(ae), se.setSize(ae.x, ae.y);
      const pe = M.getRenderTarget();
      M.setRenderTarget(se),
        M.getClearColor(C),
        (G = M.getClearAlpha()),
        G < 1 && M.setClearColor(16777215, 0.5),
        M.clear();
      const xe = M.toneMapping;
      (M.toneMapping = Sn),
        Bi(S, N, O),
        _.updateMultisampleRenderTarget(se),
        _.updateRenderTargetMipmap(se);
      let Te = !1;
      for (let Ce = 0, we = P.length; Ce < we; Ce++) {
        const Pe = P[Ce],
          tt = Pe.object,
          bt = Pe.geometry,
          ot = Pe.material,
          Qt = Pe.group;
        if (ot.side === on && tt.layers.test(O.layers)) {
          const Qe = ot.side;
          (ot.side = Tt),
            (ot.needsUpdate = !0),
            Is(tt, N, O, bt, ot, Qt),
            (ot.side = Qe),
            (ot.needsUpdate = !0),
            (Te = !0);
        }
      }
      Te === !0 &&
        (_.updateMultisampleRenderTarget(se), _.updateRenderTargetMipmap(se)),
        M.setRenderTarget(pe),
        M.setClearColor(C, G),
        (M.toneMapping = xe);
    }
    function Bi(S, P, N) {
      const O = P.isScene === !0 ? P.overrideMaterial : null;
      for (let U = 0, se = S.length; U < se; U++) {
        const pe = S[U],
          xe = pe.object,
          Te = pe.geometry,
          Ce = O === null ? pe.material : O,
          we = pe.group;
        xe.layers.test(N.layers) && Is(xe, P, N, Te, Ce, we);
      }
    }
    function Is(S, P, N, O, U, se) {
      S.onBeforeRender(M, P, N, O, U, se),
        S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, S.matrixWorld),
        S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
        U.onBeforeRender(M, P, N, O, S, se),
        U.transparent === !0 && U.side === on && U.forceSinglePass === !1
          ? ((U.side = Tt),
            (U.needsUpdate = !0),
            M.renderBufferDirect(N, P, O, U, S, se),
            (U.side = En),
            (U.needsUpdate = !0),
            M.renderBufferDirect(N, P, O, U, S, se),
            (U.side = on))
          : M.renderBufferDirect(N, P, O, U, S, se),
        S.onAfterRender(M, P, N, O, U, se);
    }
    function Hi(S, P, N) {
      P.isScene !== !0 && (P = Le);
      const O = E.get(S),
        U = h.state.lights,
        se = h.state.shadowsArray,
        pe = U.state.version,
        xe = $.getParameters(S, U.state, se, P, N),
        Te = $.getProgramCacheKey(xe);
      let Ce = O.programs;
      (O.environment = S.isMeshStandardMaterial ? P.environment : null),
        (O.fog = P.fog),
        (O.envMap = (S.isMeshStandardMaterial ? W : z).get(
          S.envMap || O.environment
        )),
        (O.envMapRotation =
          O.environment !== null && S.envMap === null
            ? P.environmentRotation
            : S.envMapRotation),
        Ce === void 0 &&
          (S.addEventListener("dispose", fe),
          (Ce = new Map()),
          (O.programs = Ce));
      let we = Ce.get(Te);
      if (we !== void 0) {
        if (O.currentProgram === we && O.lightsStateVersion === pe)
          return Fs(S, xe), we;
      } else
        (xe.uniforms = $.getUniforms(S)),
          S.onBuild(N, xe, M),
          S.onBeforeCompile(xe, M),
          (we = $.acquireProgram(xe, Te)),
          Ce.set(Te, we),
          (O.uniforms = xe.uniforms);
      const Pe = O.uniforms;
      return (
        ((!S.isShaderMaterial && !S.isRawShaderMaterial) ||
          S.clipping === !0) &&
          (Pe.clippingPlanes = Y.uniform),
        Fs(S, xe),
        (O.needsLights = $o(S)),
        (O.lightsStateVersion = pe),
        O.needsLights &&
          ((Pe.ambientLightColor.value = U.state.ambient),
          (Pe.lightProbe.value = U.state.probe),
          (Pe.directionalLights.value = U.state.directional),
          (Pe.directionalLightShadows.value = U.state.directionalShadow),
          (Pe.spotLights.value = U.state.spot),
          (Pe.spotLightShadows.value = U.state.spotShadow),
          (Pe.rectAreaLights.value = U.state.rectArea),
          (Pe.ltc_1.value = U.state.rectAreaLTC1),
          (Pe.ltc_2.value = U.state.rectAreaLTC2),
          (Pe.pointLights.value = U.state.point),
          (Pe.pointLightShadows.value = U.state.pointShadow),
          (Pe.hemisphereLights.value = U.state.hemi),
          (Pe.directionalShadowMap.value = U.state.directionalShadowMap),
          (Pe.directionalShadowMatrix.value = U.state.directionalShadowMatrix),
          (Pe.spotShadowMap.value = U.state.spotShadowMap),
          (Pe.spotLightMatrix.value = U.state.spotLightMatrix),
          (Pe.spotLightMap.value = U.state.spotLightMap),
          (Pe.pointShadowMap.value = U.state.pointShadowMap),
          (Pe.pointShadowMatrix.value = U.state.pointShadowMatrix)),
        (O.currentProgram = we),
        (O.uniformsList = null),
        we
      );
    }
    function Ns(S) {
      if (S.uniformsList === null) {
        const P = S.currentProgram.getUniforms();
        S.uniformsList = hr.seqWithValue(P.seq, S.uniforms);
      }
      return S.uniformsList;
    }
    function Fs(S, P) {
      const N = E.get(S);
      (N.outputColorSpace = P.outputColorSpace),
        (N.batching = P.batching),
        (N.instancing = P.instancing),
        (N.instancingColor = P.instancingColor),
        (N.instancingMorph = P.instancingMorph),
        (N.skinning = P.skinning),
        (N.morphTargets = P.morphTargets),
        (N.morphNormals = P.morphNormals),
        (N.morphColors = P.morphColors),
        (N.morphTargetsCount = P.morphTargetsCount),
        (N.numClippingPlanes = P.numClippingPlanes),
        (N.numIntersection = P.numClipIntersection),
        (N.vertexAlphas = P.vertexAlphas),
        (N.vertexTangents = P.vertexTangents),
        (N.toneMapping = P.toneMapping);
    }
    function jo(S, P, N, O, U) {
      P.isScene !== !0 && (P = Le), _.resetTextureUnits();
      const se = P.fog,
        pe = O.isMeshStandardMaterial ? P.environment : null,
        xe =
          R === null
            ? M.outputColorSpace
            : R.isXRRenderTarget === !0
            ? R.texture.colorSpace
            : Tn,
        Te = (O.isMeshStandardMaterial ? W : z).get(O.envMap || pe),
        Ce =
          O.vertexColors === !0 &&
          !!N.attributes.color &&
          N.attributes.color.itemSize === 4,
        we = !!N.attributes.tangent && (!!O.normalMap || O.anisotropy > 0),
        Pe = !!N.morphAttributes.position,
        tt = !!N.morphAttributes.normal,
        bt = !!N.morphAttributes.color;
      let ot = Sn;
      O.toneMapped &&
        (R === null || R.isXRRenderTarget === !0) &&
        (ot = M.toneMapping);
      const Qt =
          N.morphAttributes.position ||
          N.morphAttributes.normal ||
          N.morphAttributes.color,
        Qe = Qt !== void 0 ? Qt.length : 0,
        Ue = E.get(O),
        br = h.state.lights;
      if (V === !0 && (ee === !0 || S !== y)) {
        const Lt = S === y && O.id === H;
        Y.setState(O, S, Lt);
      }
      let $e = !1;
      O.version === Ue.__version
        ? ((Ue.needsLights && Ue.lightsStateVersion !== br.state.version) ||
            Ue.outputColorSpace !== xe ||
            (U.isBatchedMesh && Ue.batching === !1) ||
            (!U.isBatchedMesh && Ue.batching === !0) ||
            (U.isInstancedMesh && Ue.instancing === !1) ||
            (!U.isInstancedMesh && Ue.instancing === !0) ||
            (U.isSkinnedMesh && Ue.skinning === !1) ||
            (!U.isSkinnedMesh && Ue.skinning === !0) ||
            (U.isInstancedMesh &&
              Ue.instancingColor === !0 &&
              U.instanceColor === null) ||
            (U.isInstancedMesh &&
              Ue.instancingColor === !1 &&
              U.instanceColor !== null) ||
            (U.isInstancedMesh &&
              Ue.instancingMorph === !0 &&
              U.morphTexture === null) ||
            (U.isInstancedMesh &&
              Ue.instancingMorph === !1 &&
              U.morphTexture !== null) ||
            Ue.envMap !== Te ||
            (O.fog === !0 && Ue.fog !== se) ||
            (Ue.numClippingPlanes !== void 0 &&
              (Ue.numClippingPlanes !== Y.numPlanes ||
                Ue.numIntersection !== Y.numIntersection)) ||
            Ue.vertexAlphas !== Ce ||
            Ue.vertexTangents !== we ||
            Ue.morphTargets !== Pe ||
            Ue.morphNormals !== tt ||
            Ue.morphColors !== bt ||
            Ue.toneMapping !== ot ||
            Ue.morphTargetsCount !== Qe) &&
          ($e = !0)
        : (($e = !0), (Ue.__version = O.version));
      let bn = Ue.currentProgram;
      $e === !0 && (bn = Hi(O, P, U));
      let Os = !1,
        Ei = !1,
        wr = !1;
      const ht = bn.getUniforms(),
        hn = Ue.uniforms;
      if (
        (Ee.useProgram(bn.program) && ((Os = !0), (Ei = !0), (wr = !0)),
        O.id !== H && ((H = O.id), (Ei = !0)),
        Os || y !== S)
      ) {
        ht.setValue(L, "projectionMatrix", S.projectionMatrix),
          ht.setValue(L, "viewMatrix", S.matrixWorldInverse);
        const Lt = ht.map.cameraPosition;
        Lt !== void 0 &&
          Lt.setValue(L, be.setFromMatrixPosition(S.matrixWorld)),
          et.logarithmicDepthBuffer &&
            ht.setValue(
              L,
              "logDepthBufFC",
              2 / (Math.log(S.far + 1) / Math.LN2)
            ),
          (O.isMeshPhongMaterial ||
            O.isMeshToonMaterial ||
            O.isMeshLambertMaterial ||
            O.isMeshBasicMaterial ||
            O.isMeshStandardMaterial ||
            O.isShaderMaterial) &&
            ht.setValue(L, "isOrthographic", S.isOrthographicCamera === !0),
          y !== S && ((y = S), (Ei = !0), (wr = !0));
      }
      if (U.isSkinnedMesh) {
        ht.setOptional(L, U, "bindMatrix"),
          ht.setOptional(L, U, "bindMatrixInverse");
        const Lt = U.skeleton;
        Lt &&
          (Lt.boneTexture === null && Lt.computeBoneTexture(),
          ht.setValue(L, "boneTexture", Lt.boneTexture, _));
      }
      U.isBatchedMesh &&
        (ht.setOptional(L, U, "batchingTexture"),
        ht.setValue(L, "batchingTexture", U._matricesTexture, _));
      const Rr = N.morphAttributes;
      if (
        ((Rr.position !== void 0 ||
          Rr.normal !== void 0 ||
          Rr.color !== void 0) &&
          ce.update(U, N, bn),
        (Ei || Ue.receiveShadow !== U.receiveShadow) &&
          ((Ue.receiveShadow = U.receiveShadow),
          ht.setValue(L, "receiveShadow", U.receiveShadow)),
        O.isMeshGouraudMaterial &&
          O.envMap !== null &&
          ((hn.envMap.value = Te),
          (hn.flipEnvMap.value =
            Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1)),
        O.isMeshStandardMaterial &&
          O.envMap === null &&
          P.environment !== null &&
          (hn.envMapIntensity.value = P.environmentIntensity),
        Ei &&
          (ht.setValue(L, "toneMappingExposure", M.toneMappingExposure),
          Ue.needsLights && Zo(hn, wr),
          se && O.fog === !0 && me.refreshFogUniforms(hn, se),
          me.refreshMaterialUniforms(
            hn,
            O,
            re,
            Z,
            h.state.transmissionRenderTarget
          ),
          hr.upload(L, Ns(Ue), hn, _)),
        O.isShaderMaterial &&
          O.uniformsNeedUpdate === !0 &&
          (hr.upload(L, Ns(Ue), hn, _), (O.uniformsNeedUpdate = !1)),
        O.isSpriteMaterial && ht.setValue(L, "center", U.center),
        ht.setValue(L, "modelViewMatrix", U.modelViewMatrix),
        ht.setValue(L, "normalMatrix", U.normalMatrix),
        ht.setValue(L, "modelMatrix", U.matrixWorld),
        O.isShaderMaterial || O.isRawShaderMaterial)
      ) {
        const Lt = O.uniformsGroups;
        for (let Cr = 0, Jo = Lt.length; Cr < Jo; Cr++) {
          const zs = Lt[Cr];
          qe.update(zs, bn), qe.bind(zs, bn);
        }
      }
      return bn;
    }
    function Zo(S, P) {
      (S.ambientLightColor.needsUpdate = P),
        (S.lightProbe.needsUpdate = P),
        (S.directionalLights.needsUpdate = P),
        (S.directionalLightShadows.needsUpdate = P),
        (S.pointLights.needsUpdate = P),
        (S.pointLightShadows.needsUpdate = P),
        (S.spotLights.needsUpdate = P),
        (S.spotLightShadows.needsUpdate = P),
        (S.rectAreaLights.needsUpdate = P),
        (S.hemisphereLights.needsUpdate = P);
    }
    function $o(S) {
      return (
        S.isMeshLambertMaterial ||
        S.isMeshToonMaterial ||
        S.isMeshPhongMaterial ||
        S.isMeshStandardMaterial ||
        S.isShadowMaterial ||
        (S.isShaderMaterial && S.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return D;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return R;
      }),
      (this.setRenderTargetTextures = function (S, P, N) {
        (E.get(S.texture).__webglTexture = P),
          (E.get(S.depthTexture).__webglTexture = N);
        const O = E.get(S);
        (O.__hasExternalTextures = !0),
          (O.__autoAllocateDepthBuffer = N === void 0),
          O.__autoAllocateDepthBuffer ||
            (ge.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (O.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (S, P) {
        const N = E.get(S);
        (N.__webglFramebuffer = P), (N.__useDefaultFramebuffer = P === void 0);
      }),
      (this.setRenderTarget = function (S, P = 0, N = 0) {
        (R = S), (D = P), (w = N);
        let O = !0,
          U = null,
          se = !1,
          pe = !1;
        if (S) {
          const Te = E.get(S);
          Te.__useDefaultFramebuffer !== void 0
            ? (Ee.bindFramebuffer(L.FRAMEBUFFER, null), (O = !1))
            : Te.__webglFramebuffer === void 0
            ? _.setupRenderTarget(S)
            : Te.__hasExternalTextures &&
              _.rebindTextures(
                S,
                E.get(S.texture).__webglTexture,
                E.get(S.depthTexture).__webglTexture
              );
          const Ce = S.texture;
          (Ce.isData3DTexture ||
            Ce.isDataArrayTexture ||
            Ce.isCompressedArrayTexture) &&
            (pe = !0);
          const we = E.get(S).__webglFramebuffer;
          S.isWebGLCubeRenderTarget
            ? (Array.isArray(we[P]) ? (U = we[P][N]) : (U = we[P]), (se = !0))
            : S.samples > 0 && _.useMultisampledRTT(S) === !1
            ? (U = E.get(S).__webglMultisampledFramebuffer)
            : Array.isArray(we)
            ? (U = we[N])
            : (U = we),
            g.copy(S.viewport),
            I.copy(S.scissor),
            (k = S.scissorTest);
        } else
          g.copy(J).multiplyScalar(re).floor(),
            I.copy(de).multiplyScalar(re).floor(),
            (k = Fe);
        if (
          (Ee.bindFramebuffer(L.FRAMEBUFFER, U) && O && Ee.drawBuffers(S, U),
          Ee.viewport(g),
          Ee.scissor(I),
          Ee.setScissorTest(k),
          se)
        ) {
          const Te = E.get(S.texture);
          L.framebufferTexture2D(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            L.TEXTURE_CUBE_MAP_POSITIVE_X + P,
            Te.__webglTexture,
            N
          );
        } else if (pe) {
          const Te = E.get(S.texture),
            Ce = P || 0;
          L.framebufferTextureLayer(
            L.FRAMEBUFFER,
            L.COLOR_ATTACHMENT0,
            Te.__webglTexture,
            N || 0,
            Ce
          );
        }
        H = -1;
      }),
      (this.readRenderTargetPixels = function (S, P, N, O, U, se, pe) {
        if (!(S && S.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
          );
          return;
        }
        let xe = E.get(S).__webglFramebuffer;
        if ((S.isWebGLCubeRenderTarget && pe !== void 0 && (xe = xe[pe]), xe)) {
          Ee.bindFramebuffer(L.FRAMEBUFFER, xe);
          try {
            const Te = S.texture,
              Ce = Te.format,
              we = Te.type;
            if (
              Ce !== Nt &&
              Be.convert(Ce) !==
                L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
              );
              return;
            }
            const Pe =
              we === mr &&
              (ge.has("EXT_color_buffer_half_float") ||
                ge.has("EXT_color_buffer_float"));
            if (
              we !== yn &&
              Be.convert(we) !==
                L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE) &&
              we !== Zt &&
              !Pe
            ) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
              );
              return;
            }
            P >= 0 &&
              P <= S.width - O &&
              N >= 0 &&
              N <= S.height - U &&
              L.readPixels(P, N, O, U, Be.convert(Ce), Be.convert(we), se);
          } finally {
            const Te = R !== null ? E.get(R).__webglFramebuffer : null;
            Ee.bindFramebuffer(L.FRAMEBUFFER, Te);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (S, P, N = 0) {
        const O = Math.pow(2, -N),
          U = Math.floor(P.image.width * O),
          se = Math.floor(P.image.height * O);
        _.setTexture2D(P, 0),
          L.copyTexSubImage2D(L.TEXTURE_2D, N, 0, 0, S.x, S.y, U, se),
          Ee.unbindTexture();
      }),
      (this.copyTextureToTexture = function (S, P, N, O = 0) {
        const U = P.image.width,
          se = P.image.height,
          pe = Be.convert(N.format),
          xe = Be.convert(N.type);
        _.setTexture2D(N, 0),
          L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, N.flipY),
          L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, N.premultiplyAlpha),
          L.pixelStorei(L.UNPACK_ALIGNMENT, N.unpackAlignment),
          P.isDataTexture
            ? L.texSubImage2D(
                L.TEXTURE_2D,
                O,
                S.x,
                S.y,
                U,
                se,
                pe,
                xe,
                P.image.data
              )
            : P.isCompressedTexture
            ? L.compressedTexSubImage2D(
                L.TEXTURE_2D,
                O,
                S.x,
                S.y,
                P.mipmaps[0].width,
                P.mipmaps[0].height,
                pe,
                P.mipmaps[0].data
              )
            : L.texSubImage2D(L.TEXTURE_2D, O, S.x, S.y, pe, xe, P.image),
          O === 0 && N.generateMipmaps && L.generateMipmap(L.TEXTURE_2D),
          Ee.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (S, P, N, O, U = 0) {
        const se = Math.round(S.max.x - S.min.x),
          pe = Math.round(S.max.y - S.min.y),
          xe = S.max.z - S.min.z + 1,
          Te = Be.convert(O.format),
          Ce = Be.convert(O.type);
        let we;
        if (O.isData3DTexture) _.setTexture3D(O, 0), (we = L.TEXTURE_3D);
        else if (O.isDataArrayTexture || O.isCompressedArrayTexture)
          _.setTexture2DArray(O, 0), (we = L.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
          );
          return;
        }
        L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL, O.flipY),
          L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha),
          L.pixelStorei(L.UNPACK_ALIGNMENT, O.unpackAlignment);
        const Pe = L.getParameter(L.UNPACK_ROW_LENGTH),
          tt = L.getParameter(L.UNPACK_IMAGE_HEIGHT),
          bt = L.getParameter(L.UNPACK_SKIP_PIXELS),
          ot = L.getParameter(L.UNPACK_SKIP_ROWS),
          Qt = L.getParameter(L.UNPACK_SKIP_IMAGES),
          Qe = N.isCompressedTexture ? N.mipmaps[U] : N.image;
        L.pixelStorei(L.UNPACK_ROW_LENGTH, Qe.width),
          L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, Qe.height),
          L.pixelStorei(L.UNPACK_SKIP_PIXELS, S.min.x),
          L.pixelStorei(L.UNPACK_SKIP_ROWS, S.min.y),
          L.pixelStorei(L.UNPACK_SKIP_IMAGES, S.min.z),
          N.isDataTexture || N.isData3DTexture
            ? L.texSubImage3D(we, U, P.x, P.y, P.z, se, pe, xe, Te, Ce, Qe.data)
            : O.isCompressedArrayTexture
            ? L.compressedTexSubImage3D(
                we,
                U,
                P.x,
                P.y,
                P.z,
                se,
                pe,
                xe,
                Te,
                Qe.data
              )
            : L.texSubImage3D(we, U, P.x, P.y, P.z, se, pe, xe, Te, Ce, Qe),
          L.pixelStorei(L.UNPACK_ROW_LENGTH, Pe),
          L.pixelStorei(L.UNPACK_IMAGE_HEIGHT, tt),
          L.pixelStorei(L.UNPACK_SKIP_PIXELS, bt),
          L.pixelStorei(L.UNPACK_SKIP_ROWS, ot),
          L.pixelStorei(L.UNPACK_SKIP_IMAGES, Qt),
          U === 0 && O.generateMipmaps && L.generateMipmap(we),
          Ee.unbindTexture();
      }),
      (this.initTexture = function (S) {
        S.isCubeTexture
          ? _.setTextureCube(S, 0)
          : S.isData3DTexture
          ? _.setTexture3D(S, 0)
          : S.isDataArrayTexture || S.isCompressedArrayTexture
          ? _.setTexture2DArray(S, 0)
          : _.setTexture2D(S, 0),
          Ee.unbindTexture();
      }),
      (this.resetState = function () {
        (D = 0), (w = 0), (R = null), Ee.reset(), He.reset();
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  get coordinateSystem() {
    return cn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    (t.drawingBufferColorSpace = e === Rs ? "display-p3" : "srgb"),
      (t.unpackColorSpace =
        We.workingColorSpace === yr ? "display-p3" : "srgb");
  }
  get useLegacyLights() {
    return (
      console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
    ),
      (this._useLegacyLights = e);
  }
}
class Xo extends Pt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new dn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new dn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: ws } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = ws));
function xm() {
  const i = new Mm();
  let e,
    t,
    n = !1;
  function r() {
    const c = new vm({ antialias: !0 });
    c.setSize(it.width, it.height);
    const d = c.domElement,
      f = 65,
      p = (f / 2 / 180) * Math.PI,
      m = it.height / 2 / Math.tan(p),
      x = new Dt(f, it.width / it.height, 0.1, m * 4);
    x.position.z = m;
    const v = { renderer: c, camera: x, width: it.width, height: it.height };
    return (
      (e = new Sm(v)),
      (t = new ym(v)),
      i.on(() => {
        c.setSize(it.width, it.height);
      }),
      d
    );
  }
  async function s() {
    n &&
      (e.update(),
      e.draw(),
      t.update(e.getVelocity()),
      t.draw(),
      requestAnimationFrame(s));
  }
  function a() {
    (n = !0), s();
  }
  function o() {
    n = !1;
  }
  function l() {
    o(), i.destroy();
  }
  return { play: a, pause: o, destroy: l, canvas: r() };
}
var Di;
class Mm {
  constructor() {
    Pr(this, "resizeTimeout", null);
    Pr(this, "callback", null);
    Bs(this, Di, () => {
      this.resizeTimeout !== null && clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = window.setTimeout(() => {
          this.callback !== null && this.callback();
        }, 250));
    });
  }
  on(e) {
    (this.callback = e), window.addEventListener("resize", Lr(this, Di));
  }
  destroy() {
    window.removeEventListener("resize", Lr(this, Di)), (this.callback = null);
  }
}
Di = new WeakMap();
class Sm {
  constructor(e) {
    (this.context = e),
      (this.speed = 4),
      (this.forceInitMaterial = this.createShaderMaterial(Am)),
      (this.divergenceMaterial = this.createShaderMaterial(Tm)),
      (this.advectionMaterial = this.createShaderMaterial(Em)),
      (this.pressureMaterial = this.createShaderMaterial(Rm)),
      (this.updateMaterial = this.createShaderMaterial(wm)),
      (this.renderMaterial = this.createShaderMaterial(bm)),
      (this.velocity = [this.createRenderTarget(), this.createRenderTarget()]),
      (this.pressure = [this.createRenderTarget(), this.createRenderTarget()]),
      (this.divergence = this.createRenderTarget()),
      (this.advection = this.createRenderTarget()),
      (this.blank = this.createRenderTarget()),
      (this.mainScene = new Xo()),
      (this.mainMesh = this.createMesh(
        0,
        0,
        this.context.width,
        this.context.height
      )),
      this.mainScene.add(this.mainMesh),
      this.init();
  }
  init() {
    (this.velocityIndex = 0),
      this.context.renderer.setRenderTarget(this.velocity[0]),
      (this.mainMesh.material = this.forceInitMaterial);
    const e = 44.261670113037965;
    (this.forceInitMaterial.uniforms.seed = { value: e }),
      this.context.renderer.render(this.mainScene, this.context.camera),
      this.context.renderer.setRenderTarget(null);
  }
  createShaderMaterial(e) {
    return new Jt({
      vertexShader: qo,
      fragmentShader: e,
      uniforms: {
        tex: { value: null },
        res: { value: [this.context.width, this.context.height] },
        speed: { value: this.speed },
      },
    });
  }
  createRenderTarget() {
    return new un(this.context.width, this.context.height, {
      format: Nt,
      type: Zt,
    });
  }
  createMesh(e, t, n, r) {
    const s = new Si(n, r),
      a = new Tr({ color: 16711680 }),
      o = new Gt(s, a);
    return (o.position.x = e), (o.position.y = t), o;
  }
  update() {
    this.updateAdvection(),
      this.updateDivergence(),
      this.updatePressure(),
      this.updateVelocity();
  }
  updateAdvection() {
    this.context.renderer.setRenderTarget(this.advection),
      (this.mainMesh.material = this.advectionMaterial),
      (this.advectionMaterial.uniforms.tex = {
        value: this.velocity[this.velocityIndex].texture,
      }),
      this.context.renderer.render(this.mainScene, this.context.camera),
      this.context.renderer.setRenderTarget(null);
  }
  updateDivergence() {
    this.context.renderer.setRenderTarget(this.divergence),
      (this.mainMesh.material = this.divergenceMaterial),
      (this.divergenceMaterial.uniforms.tex = {
        value: this.advection.texture,
      }),
      this.context.renderer.render(this.mainScene, this.context.camera),
      this.context.renderer.setRenderTarget(null);
  }
  updatePressure() {
    this.context.renderer.setRenderTarget(this.pressure[0]),
      this.context.renderer.clear(),
      this.context.renderer.setRenderTarget(null);
    for (let e = 0; e < 4; e++) {
      const t = e % 2,
        n = (e + 1) % 2,
        r = this.pressure[t],
        s = this.pressure[n];
      this.context.renderer.setRenderTarget(s),
        (this.mainMesh.material = this.pressureMaterial),
        (this.pressureMaterial.uniforms.tex = { value: r.texture }),
        (this.pressureMaterial.uniforms.divergence = {
          value: this.divergence.texture,
        }),
        this.context.renderer.render(this.mainScene, this.context.camera),
        this.context.renderer.setRenderTarget(null);
    }
  }
  updateVelocity() {
    const e = (this.velocityIndex + 1) % 2,
      t = this.velocity[e];
    (this.velocityIndex = e),
      this.context.renderer.setRenderTarget(t),
      (this.mainMesh.material = this.updateMaterial),
      (this.updateMaterial.uniforms.pressure = {
        value: this.pressure[1].texture,
      }),
      (this.updateMaterial.uniforms.advection = {
        value: this.advection.texture,
      }),
      this.context.renderer.render(this.mainScene, this.context.camera),
      this.context.renderer.setRenderTarget(null);
  }
  draw() {
    (this.mainMesh.material = this.renderMaterial),
      (this.renderMaterial.uniforms.tex = {
        value: this.getVelocity().texture,
      }),
      this.context.renderer.render(this.mainScene, this.context.camera);
  }
  getVelocity() {
    return this.velocity[this.velocityIndex];
  }
}
class ym {
  constructor(e) {
    (this.context = e),
      (this.speed = 4),
      (this.initMaterial = this.createShaderMaterial(Cm)),
      (this.updateMaterial = this.createShaderMaterial(Lm)),
      (this.renderMaterial = this.createShaderMaterial(Pm)),
      (this.paint = [this.createRenderTarget(), this.createRenderTarget()]),
      (this.mainScene = new Xo()),
      (this.mainMesh = this.createMesh(
        0,
        0,
        this.context.width,
        this.context.height
      )),
      this.mainScene.add(this.mainMesh),
      this.init();
  }
  init() {
    (this.paintIndex = 0),
      this.context.renderer.setRenderTarget(this.paint[0]),
      (this.mainMesh.material = this.initMaterial);
    const e = 98.16526975555149;
    (this.initMaterial.uniforms.seed = { value: e }),
      this.context.renderer.render(this.mainScene, this.context.camera),
      this.context.renderer.setRenderTarget(null);
  }
  createShaderMaterial(e) {
    return new Jt({
      vertexShader: qo,
      fragmentShader: e,
      uniforms: {
        tex: { value: null },
        res: { value: [this.context.width, this.context.height] },
        speed: { value: this.speed },
      },
    });
  }
  createRenderTarget() {
    return new un(this.context.width, this.context.height, {
      format: Nt,
      type: Zt,
    });
  }
  createMesh(e, t, n, r) {
    const s = new Si(n, r),
      a = new Tr({ color: 16711680 }),
      o = new Gt(s, a);
    return (o.position.x = e), (o.position.y = t), o;
  }
  update(e) {
    const t = this.paintIndex % 2,
      n = (this.paintIndex + 1) % 2,
      r = this.paint[t],
      s = this.paint[n];
    (this.paintIndex = n),
      this.context.renderer.setRenderTarget(s),
      (this.mainMesh.material = this.updateMaterial),
      (this.updateMaterial.uniforms.tex = { value: r.texture }),
      (this.updateMaterial.uniforms.velocity = { value: e.texture }),
      this.context.renderer.render(this.mainScene, this.context.camera),
      this.context.renderer.setRenderTarget(null);
  }
  draw() {
    (this.mainMesh.material = this.renderMaterial),
      (this.renderMaterial.uniforms.tex = { value: this.getPaint().texture }),
      this.context.renderer.render(this.mainScene, this.context.camera);
  }
  getPaint() {
    return this.paint[this.paintIndex];
  }
}
const Ls = `
/*
Simplex Noise code is from:
(Shader Library) Simplex Noise in GLSL
http://www.geeks3d.com/20110317/shader-library-simplex-noise-glsl-opengl/
*/

#define  NORMALIZE_GRADIENTS
#undef  USE_CIRCLE
#define COLLAPSE_SORTNET

    float permute(float x0,vec3 p) {
        float x1 = mod(x0 * p.y, p.x);
        return floor(  mod( (x1 + p.z) *x0, p.x ));
    }
    vec2 permute(vec2 x0,vec3 p) {
        vec2 x1 = mod(x0 * p.y, p.x);
        return floor(  mod( (x1 + p.z) *x0, p.x ));
    }
    vec3 permute(vec3 x0,vec3 p) {
        vec3 x1 = mod(x0 * p.y, p.x);
        return floor(  mod( (x1 + p.z) *x0, p.x ));
    }
    vec4 permute(vec4 x0,vec3 p) {
        vec4 x1 = mod(x0 * p.y, p.x);
        return floor(  mod( (x1 + p.z) *x0, p.x ));
    }

    //uniform vec4 pParam;
    // Example constant with a 289 element permutation
    const vec4 pParam = vec4( 17.0*17.0, 34.0, 1.0, 7.0);

    float taylorInvSqrt(float r)
    {
        return ( 0.83666002653408 + 0.7*0.85373472095314 - 0.85373472095314 * r );
    }

    float simplexNoise2(vec2 v)
    {
        const vec2 C = vec2(0.211324865405187134, // (3.0-sqrt(3.0))/6.;
                            0.366025403784438597); // 0.5*(sqrt(3.0)-1.);
        const vec3 D = vec3( 0., 0.5, 2.0) * 3.14159265358979312;
        // First corner
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);

        // Other corners
        vec2 i1  =  (x0.x > x0.y) ? vec2(1.,0.) : vec2(0.,1.) ;

        //  x0 = x0 - 0. + 0. * C
        vec2 x1 = x0 - i1 + 1. * C.xx ;
        vec2 x2 = x0 - 1. + 2. * C.xx ;

        // Permutations
        i = mod(i, pParam.x);
        vec3 p = permute( permute(
                                  i.y + vec3(0., i1.y, 1. ), pParam.xyz)
                         + i.x + vec3(0., i1.x, 1. ), pParam.xyz);

#ifndef USE_CIRCLE
        // ( N points uniformly over a line, mapped onto a diamond.)
        vec3 x = fract(p / pParam.w) ;
        vec3 h = 0.5 - abs(x) ;

        vec3 sx = vec3(lessThan(x,D.xxx)) *2. -1.;
        vec3 sh = vec3(lessThan(h,D.xxx));

        vec3 a0 = x + sx*sh;
        vec2 p0 = vec2(a0.x,h.x);
        vec2 p1 = vec2(a0.y,h.y);
        vec2 p2 = vec2(a0.z,h.z);

#ifdef NORMALISE_GRADIENTS
        p0 *= taylorInvSqrt(dot(p0,p0));
        p1 *= taylorInvSqrt(dot(p1,p1));
        p2 *= taylorInvSqrt(dot(p2,p2));
#endif

        vec3 g = 2.0 * vec3( dot(p0, x0), dot(p1, x1), dot(p2, x2) );
#else
        // N points around a unit circle.
        vec3 phi = D.z * mod(p,pParam.w) /pParam.w ;
        vec4 a0 = sin(phi.xxyy+D.xyxy);
        vec2 a1 = sin(phi.zz  +D.xy);
        vec3 g = vec3( dot(a0.xy, x0), dot(a0.zw, x1), dot(a1.xy, x2) );
#endif
        // mix
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.);
        m = m*m ;
        return 1.66666* 70.*dot(m*m, g);
    }

    float simplexNoise3(vec3 v)
    {
        const vec2  C = vec2(1./6. , 1./3. ) ;
        const vec4  D = vec4(0., 0.5, 1.0, 2.0);

        // First corner
        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        // Other corners
#ifdef COLLAPSE_SORTNET
        vec3 g = vec3( greaterThan(   x0.xyz, x0.yzx) );
        vec3 l = vec3( lessThanEqual( x0.xyz, x0.yzx) );

        vec3 i1 = g.xyz  * l.zxy;
        vec3 i2 = max( g.xyz, l.zxy);
#else
        // Keeping this clean - let the compiler optimize.
        vec3 q1;
        q1.x = max(x0.x, x0.y);
        q1.y = min(x0.x, x0.y);
        q1.z = x0.z;

        vec3 q2;
        q2.x = max(q1.x,q1.z);
        q2.z = min(q1.x,q1.z);
        q2.y = q1.y;

        vec3 q3;
        q3.y = max(q2.y, q2.z);
        q3.z = min(q2.y, q2.z);
        q3.x = q2.x;

        vec3 i1 = vec3(equal(q3.xxx, x0));
        vec3 i2 = i1 + vec3(equal(q3.yyy, x0));
#endif

        //  x0 = x0 - 0. + 0. * C
        vec3 x1 = x0 - i1 + 1. * C.xxx;
        vec3 x2 = x0 - i2 + 2. * C.xxx;
        vec3 x3 = x0 - 1. + 3. * C.xxx;

        // Permutations
        i = mod(i, pParam.x );
        vec4 p = permute( permute( permute(
                                           i.z + vec4(0., i1.z, i2.z, 1. ), pParam.xyz)
                                  + i.y + vec4(0., i1.y, i2.y, 1. ), pParam.xyz)
                         + i.x + vec4(0., i1.x, i2.x, 1. ), pParam.xyz);

        // Gradients
        // ( N*N points uniformly over a square, mapped onto a octohedron.)
        float n_ = 1.0/pParam.w ;
        vec3  ns = n_ * D.wyz - D.xzx ;

        vec4 j = p - pParam.w*pParam.w*floor(p * ns.z *ns.z);  //  mod(p,N*N)

        vec4 x_ = floor(j * ns.z)  ;
        vec4 y_ = floor(j - pParam.w * x_ ) ;    // mod(j,N)

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1. - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = vec4(lessThan(b0,D.xxxx)) *2. -1.;
        vec4 s1 = vec4(lessThan(b1,D.xxxx)) *2. -1.;
        vec4 sh = vec4(lessThan(h, D.xxxx));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

#ifdef NORMALISE_GRADIENTS
        p0 *= taylorInvSqrt(dot(p0,p0));
        p1 *= taylorInvSqrt(dot(p1,p1));
        p2 *= taylorInvSqrt(dot(p2,p2));
        p3 *= taylorInvSqrt(dot(p3,p3));
#endif

        // Mix
        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.);
        m = m * m;
        //used to be 64.
        return 48.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                     dot(p2,x2), dot(p3,x3) ) );
    }

    vec4 grad4(float j, vec4 ip)
    {
        const vec4 ones = vec4(1.,1.,1.,-1.);
        vec4 p,s;

        p.xyz = floor( fract (vec3(j) * ip.xyz) *pParam.w) * ip.z -1.0;
        p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
        s = vec4(lessThan(p,vec4(0.)));
        p.xyz = p.xyz + (s.xyz*2.-1.) * s.www;

        return p;
    }

    float simplexNoise4(vec4 v)
    {
        const vec2  C = vec2( 0.138196601125010504,
                             0.309016994374947451);
        // First corner
        vec4 i  = floor(v + dot(v, C.yyyy) );
        vec4 x0 = v -   i + dot(i, C.xxxx);

        // Other corners

        // Force existance of strict total ordering in sort.
        vec4 q0 = floor(x0 * 1024.0) + vec4( 0., 1./4., 2./4. , 3./4.);
        vec4 q1;
        q1.xy = max(q0.xy,q0.zw);   //  x:z  y:w
        q1.zw = min(q0.xy,q0.zw);

        vec4 q2;
        q2.xz = max(q1.xz,q1.yw);   //  x:y  z:w
        q2.yw = min(q1.xz,q1.yw);

        vec4 q3;
        q3.y = max(q2.y,q2.z);      //  y:z
        q3.z = min(q2.y,q2.z);
        q3.xw = q2.xw;

        vec4 i1 = vec4(lessThanEqual(q3.xxxx, q0));
        vec4 i2 = vec4(lessThanEqual(q3.yyyy, q0));
        vec4 i3 = vec4(lessThanEqual(q3.zzzz, q0));

        //  x0 = x0 - 0. + 0. * C
        vec4 x1 = x0 - i1 + 1. * C.xxxx;
        vec4 x2 = x0 - i2 + 2. * C.xxxx;
        vec4 x3 = x0 - i3 + 3. * C.xxxx;
        vec4 x4 = x0 - 1. + 4. * C.xxxx;

        // Permutations
        i = mod(i, pParam.x );
        float j0 = permute( permute( permute( permute (
                                                       i.w, pParam.xyz) + i.z, pParam.xyz)
                                    + i.y, pParam.xyz) + i.x, pParam.xyz);
        vec4 j1 = permute( permute( permute( permute (
                                                      i.w + vec4(i1.w, i2.w, i3.w, 1. ), pParam.xyz)
                                            + i.z + vec4(i1.z, i2.z, i3.z, 1. ), pParam.xyz)
                                   + i.y + vec4(i1.y, i2.y, i3.y, 1. ), pParam.xyz)
                          + i.x + vec4(i1.x, i2.x, i3.x, 1. ), pParam.xyz);
        // Gradients
        // ( N*N*N points uniformly over a cube,
        // mapped onto a 4-octohedron.)
        vec4 ip = pParam ;
        ip.xy *= pParam.w ;
        ip.x  *= pParam.w ;
        ip = vec4(1.,1.,1.,2.) / ip ;

        vec4 p0 = grad4(j0,   ip);
        vec4 p1 = grad4(j1.x, ip);
        vec4 p2 = grad4(j1.y, ip);
        vec4 p3 = grad4(j1.z, ip);
        vec4 p4 = grad4(j1.w, ip);

#ifdef NORMALISE_GRADIENTS
        p0 *= taylorInvSqrt(dot(p0,p0));
        p1 *= taylorInvSqrt(dot(p1,p1));
        p2 *= taylorInvSqrt(dot(p2,p2));
        p3 *= taylorInvSqrt(dot(p3,p3));
        p4 *= taylorInvSqrt(dot(p4,p4));
#endif

        // Mix
        vec3 m0 = max(0.6 - vec3(dot(x0,x0), dot(x1,x1), dot(x2,x2)), 0.);
        vec2 m1 = max(0.6 - vec2(dot(x3,x3), dot(x4,x4)            ), 0.);
        m0 = m0 * m0;
        m1 = m1 * m1;
        return 32. * (dot(m0*m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)))
                      + dot(m1*m1, vec2(dot(p3, x3), dot(p4, x4)))) ;

    }

float v3n1(vec3 v) {
	return simplexNoise3(v);
}

vec3 v3n3(vec3 v) {
    float n0 = simplexNoise3(v * 0.01);
    float n1 = simplexNoise3(v * 0.0123 + vec3(100.0));
    float n2 = simplexNoise3(v * 0.0134 + vec3(200.0));
    return vec3(n0, n1, n2);
}

vec2 v2n2(vec2 v) {
    float n0 = simplexNoise2(v * 0.01);
    float n1 = simplexNoise2(v * 0.0123 + vec2(100.0));
    return vec2(n0, n1);
}
`,
  qo = `
varying vec2 vUv;
varying vec3 vNormal;

void main()
{
    vNormal = normalize(normalMatrix * normal);
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;
}`,
  Em = `
uniform vec2 res;
uniform float speed;
uniform sampler2D tex;
varying vec2 vUv;
varying vec3 vNormal;

vec2 wrap(vec2 v) {
    return vec2(fract(v.x), fract(v.y));
}

void main()
{
    vec2 vel = texture(tex, wrap(vUv)).xy;
    vec4 color = texture(tex, wrap(vUv + vel * speed / res));
    gl_FragColor = color;
}`,
  Tm = `
uniform vec2 res;
uniform float speed;
uniform sampler2D tex;
varying vec2 vUv;
varying vec3 vNormal;

vec2 wrap(vec2 v) {
    return vec2(fract(v.x), fract(v.y));
}

vec2 u(vec2 coord) {
    return texture(tex, wrap(coord)).xy;
}

void main()
{
    float rho = 1.0;
    float deltaT = 1.0 / 60.0;
    vec3 px = vec3(1.0 / res.x, 1.0 / res.y, 0.0) * speed;

    float divergence =
        (px.x * rho / deltaT) *
        (
            (u(vUv - px.xz).x -
            u(vUv + px.xz).x)
            +
            (u(vUv - px.zy).y -
            u(vUv + px.zy).y)
        );

    gl_FragColor = vec4(divergence , 0.0, 0.0, 1.0);
}`,
  Am =
    Ls +
    `
uniform float seed;
uniform vec2 res;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
	float n0 = seed + 12.3;
	float n1 = seed + 123.4;
	float n2 = seed + 1234.5;

	vec2 v0 = vUv * res / 1111.5;
	vec2 v1 = vUv * res / 1124.0;
	vec2 v2 = vUv * res / 1136.0;

	float nr = (v3n1(vec3(v0, n0)) + v3n1(vec3(v1, n1)) + v3n1(vec3(v2, n2)));
	float ng = (v3n1(vec3(v0, n1)) + v3n1(vec3(v1, n2)) + v3n1(vec3(v2, n0)));

	gl_FragColor = vec4(nr, ng, 0.0, 1.0);
}
`,
  bm = `
varying vec2 vUv;
varying vec3 vNormal;

uniform sampler2D tex;

void main( void ) {
  gl_FragColor = texture(tex, vUv);
}`,
  wm = `
uniform vec2 res;
uniform float speed;
uniform sampler2D pressure;
uniform sampler2D advection;

varying vec2 vUv;
varying vec3 vNormal;

vec2 wrap(vec2 v) {
    return vec2(fract(v.x), fract(v.y));
}

float p(vec2 coord) {
    return texture(pressure, wrap(coord)).x;
}

void main()
{
    float deltaT = 1.0 / 60.0;
    float rho = 0.999;
    vec3 px = vec3(1.0 / res.x, 1.0 / res.y, 0.0) * speed;
    vec4 u_a = texture(advection, vUv);

    float diff_p_x = (p(vUv + px.xz) - p(vUv - px.xz));
    float u_x = u_a.x - deltaT / (2.0 * rho * px.x) * diff_p_x;
    float diff_p_y = (p(vUv + px.zy) - p(vUv - px.zy));
    float u_y = u_a.y - deltaT / (2.0 * rho * px.y) * diff_p_y;
    u_a = vec4(vec2(u_x, u_y) * 1.0, 0.0, 1.0);

    gl_FragColor = u_a;
}
`,
  Rm =
    Ls +
    `
uniform vec2 res;
uniform float speed;
uniform sampler2D tex;
uniform sampler2D divergence;

varying vec2 vUv;
varying vec3 vNormal;

vec2 wrap(vec2 v) {
    return vec2(fract(v.x), fract(v.y));
}

float d(vec2 coord) {
    return texture(divergence, wrap(coord)).x;
}

float p(vec2 coord) {
    return texture(tex, wrap(coord)).x;
}

void main() {
    vec3 px = vec3(1.0 / res.x, 1.0 / res.y, 0.0) * speed;

    float pressure = 0.25 * (d(vUv)
    + p(vUv + px.xz)
    + p(vUv - px.xz)
    + p(vUv + px.zy)
    + p(vUv - px.zy)
    );

    gl_FragColor = vec4(vec3(pressure), 1.0);
}
`,
  Cm =
    Ls +
    `
uniform float seed;
uniform vec2 res;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  float n0 = seed + 12.3;
  float n1 = seed + 123.4;
  float n2 = seed + 1234.5;

  vec2 v0 = vUv * res / 1234.5;
  vec2 v1 = vUv * res / 2345.0;
  vec2 v2 = vUv * res / 3456.0;

  // float nr = v3n1(vec3(v0, n0)) + v3n1(vec3(v1, n2)) + v3n1(vec3(v2, n1));
  // float ng = v3n1(vec3(v1, n1)) + v3n1(vec3(v2, n0)) + v3n1(vec3(v0, n2));
  float nb = v3n1(vec3(v2, n2)) + v3n1(vec3(v0, n1)) + v3n1(vec3(v1, n0));

  vec4 color = vec4(0.2, 0.42, 0.54, 1.0);
  color.rgb += vec3(nb * 0.78, nb * 0.78, nb * 0.78);

  float grayscale = dot(color.rgb, vec3(0.299, 0.587, 0.114));
  float saturation = 0.72;
  color.rgb = mix(vec3(grayscale), color.rgb, saturation);

  gl_FragColor = color;
}
`,
  Pm = `
varying vec2 vUv;
varying vec3 vNormal;
uniform vec2 res;
uniform sampler2D tex;

vec2 wrap(vec2 v) {
  return vec2(fract(v.x), fract(v.y));
}

void main( void ) {
  vec3 px = vec3(1.0 / res.x, 1.0 / res.y, 0.0);
  vec4 pu = texture(tex, vUv);
  vec4 p = texture(tex, wrap(vUv + px.yz));
  //float d = (p.r + p.g + p.b) - (pu.r + pu.g + pu.b);

  vec4 color = p;
  color.r += p.r - pu.r;
  color.g += p.g - pu.g;
  color.b += p.b - pu.b;

  gl_FragColor = color;
}`,
  Lm = `
uniform vec2 res;
uniform float speed;
uniform sampler2D tex;
uniform sampler2D velocity;

varying vec2 vUv;
varying vec3 vNormal;

vec2 wrap(vec2 v) {
    return vec2(fract(v.x), fract(v.y));
}

void main()
{
    vec3 px = vec3(1.0 / res.x, 1.0 / res.y, 0.0) * speed;
    vec4 v = texture(velocity, vUv);
    vec4 p = texture(tex, wrap(vUv + px.xy * v.xy));

    gl_FragColor = p;
}
`;
var Um = Ft(
  '<div class="pointer-events-none absolute inset-0 bg-white opacity-0"></div>'
);
function Dm(i, e) {
  kn(e, !0);
  let t = mt(void 0);
  Wn(() => {
    vt.setEl("pageFadeOutLayer", Re(t));
  });
  var n = Um();
  kt(
    n,
    (r) => ct(t, Et(r)),
    () => Re(t)
  ),
    xt(i, n),
    Xn();
}
var Im = Ft(
    '<div class="absolute inset-0"><video class="h-full w-full object-cover" loop muted playsinline="" preload="auto" src="/assets/fluid-image-for-sp.mp4"></video></div>'
  ),
  Nm = Ft('<div id="fluid-image-placeholder" class="sr-only"><!></div>');
function Fm(i, e) {
  kn(e, !0);
  let t = mt(void 0);
  Wn(() => {
    vt.setEl("fluidImagePlaceholder", Re(t)),
      Ct.fluidImage && Re(t).appendChild(Ct.fluidImage.canvas);
  });
  var n = Nm();
  kt(
    n,
    (s) => ct(t, Et(s)),
    () => Re(t)
  );
  var r = ye(n);
  Li(
    r,
    () => !Ct.fluidImage,
    (s) => {
      var a = Im();
      xt(s, a);
    }
  ),
    xt(i, n),
    Xn();
}
function Yo(i) {
  return { leave: i.enter, leaveFrom: i.enterTo, leaveTo: i.enterFrom, ...i };
}
function qt(i, e, t) {
  t == null ||
    t.split(" ").forEach((n) => {
      n && e.classList[i](n);
    });
}
function Om(i, e) {
  const t = Yo(e);
  return (n) => zm(i, n, t);
}
async function zm(i, e, t) {
  const {
    enter: n,
    enterFrom: r,
    enterTo: s,
    leave: a,
    leaveFrom: o,
    leaveTo: l,
  } = t;
  e
    ? (qt("remove", i, `${a} ${o} ${l}`),
      qt("add", i, `${n} ${r}`),
      await hi(0),
      qt("remove", i, r),
      qt("add", i, s))
    : (qt("remove", i, `${n} ${r} ${s}`),
      qt("add", i, `${a} ${o}`),
      await hi(0),
      qt("remove", i, o),
      qt("add", i, l));
}
const St = (i, e) => {
  const t = Yo(e),
    n = Om(i, t),
    r = Et({ show: e.show });
  return (
    qt("add", i, e.show ? t.enterTo : t.leaveTo),
    {
      update(s) {
        n(s.show), (r.show = s.show);
      },
      destroy() {
        qt(
          "remove",
          i,
          `${e.enter} ${e.enterFrom} ${e.enterTo} ${e.leave} ${e.leaveFrom} ${e.leaveTo}`
        );
      },
    }
  );
};
async function Bm() {
  const i = vt.getEl("pageNode"),
    e = vt.getEl("header"),
    t = vt.getEl("headerMenu"),
    n = vt.getEl("headerButton"),
    r = vt.getEl("headerLogo"),
    s = Ht.scroll,
    o = it.height * 1.3;
  document.body.classList.add("is-page-transitioning"),
    (i.style.zIndex = "50"),
    (i.style.overflow = "hidden"),
    (i.style.height = s + it.height + "px"),
    (i.style.pointerEvents = "none"),
    (i.style.willChange = "transform"),
    (e.style.zIndex = "40"),
    (e.style.top = `${s}px`),
    (e.style.pointerEvents = "none"),
    (e.style.mixBlendMode = "difference"),
    (r.style.display = "none"),
    (n.style.transitionDuration = "0s"),
    (n.style.transform = `translateY(${s}px)`),
    (t.style.top = `${s}px`),
    i.animate({ transform: ["translateY(0px)", `translateY(${-o}px)`] }, gl),
    vl(),
    await hi(10);
}
var Hm = (i, e, t) => e(t()),
  Vm = Ft(
    '<button class="font-classico group relative block w-full"><!></button>'
  ),
  Gm = Ft('<span class="absolute inset-x-0 top-[58%] h-px bg-white"></span>'),
  km = Ft(
    '<p class="flex origin-center scale-x-[0.8] flex-col items-center pb-1 text-center"><span class="flex flex-col items-center gap-y-0.5"><span class="overflow-hidden py-0.5"><span> </span></span> <span class="relative overflow-hidden"><span class="relative block px-[3cqw] text-[10cqw] leading-none md:text-[6cqw] lg:text-[4.3cqw]"><!> <!></span></span></span> <span class="absolute inset-x-[2.8cqw] bottom-[0.5px] h-px scale-x-0 bg-[#667f96] delay-[0.2s] duration-[0.3s] ease-out group-hover:scale-x-100"></span></p>'
  ),
  Wm = Ft(
    `<svg class="sr-only"><defs><clipPath class="origin-center ease-out"><rect></rect></clipPath></defs></svg> <div class="absolute inset-x-0 z-30 h-lvh [--delay:0.4s] [--number-delay:calc(var(--stagger)*3+var(--delay)+0.1s)] [--stagger:0.18s] [--title-ease:cubic-bezier(.16,1,.82,1)] md:[--number-delay:calc(var(--stagger)*2+var(--delay)+0.1s)]"><div class="absolute inset-0 bg-[url('/images/background-menu.webp')] bg-cover ease-out"></div> <div class="absolute inset-x-4 inset-y-16 bg-[#405260] ease-out md:inset-x-10 md:inset-y-24"></div> <div class="absolute inset-0 mix-blend-difference ease-out"><div class="flex h-full w-full flex-col items-center justify-center px-8"><div class="mx-auto w-full max-w-[1300px] [container-type:inline-size]"><div class="font-aboreto space-y-[11cqw] pb-14 md:space-y-[6cqw] lg:space-y-8"><ul class="relative flex justify-center"><li class="ml-[-30cqw] overflow-hidden md:ml-[-24cqw] lg:ml-[-16cqw]"><div class="origin-[--transform-origin] [--d:calc(var(--stagger)*0+var(--delay))]"><!></div></li> <li class="absolute mr-[-26cqw] overflow-hidden md:mr-[-24cqw] lg:mr-[-16cqw]"><div class="origin-[--transform-origin] [--d:calc(var(--stagger)*0+var(--delay))]"><!></div></li></ul> <ul class="relative flex justify-center max-md:flex-wrap"><li class="ml-[-30cqw] overflow-hidden md:ml-[-60cqw] lg:ml-[-45cqw]"><div class="origin-[--transform-origin] [--d:calc(var(--stagger)*1+var(--delay))]"><!></div></li> <li class="overflow-hidden max-md:mr-[-26cqw] md:absolute"><div class="origin-[--transform-origin] [--d:calc(var(--stagger)*1+var(--delay))]"><!></div></li> <li class="overflow-hidden max-md:mt-[11cqw] max-md:w-full md:absolute md:mr-[-60cqw] lg:mr-[-45cqw]"><div class="origin-[--transform-origin] [--d:calc(var(--stagger)*2+var(--delay))] md:[--d:calc(var(--stagger)*1+var(--delay))]"><!></div></li></ul> <ul class="relative flex justify-center max-md:flex-col max-md:items-center"><li class="overflow-hidden max-md:w-[72%]"><div class="origin-[--transform-origin] [--d:calc(var(--stagger)*3+var(--delay))] md:[--d:calc(var(--stagger)*2+var(--delay))]"><!></div></li></ul></div></div> <div class="flex w-full justify-center"><div class="relative h-px w-full max-w-[450px] overflow-hidden"><div class="absolute h-full w-full bg-white/30 will-change-transform"></div></div></div> <div class="mx-auto w-full max-w-[1300px] mix-blend-difference [container-type:inline-size]"><div class="mx-auto w-full max-w-[450px] pt-7 md:pt-10"><div class="flex flex-col items-center justify-center gap-2.5 font-serif text-[2.4cqw] leading-none text-white md:gap-[14px] md:text-[11px]"><div class="flex overflow-hidden"><p class="origin-[--transform-origin] will-change-transform">〒104-0028</p></div> <div class="flex overflow-hidden"><p class="origin-[--transform-origin]">東京都中央区八重洲2-2-1東京ミッドタウン八重洲</p></div> <div class="flex overflow-hidden"><p class="origin-[--transform-origin]">八重洲セントラルタワー11階</p></div></div> <div class="mt-5 overflow-hidden"><div class="flex origin-[--transform-origin] justify-center"><a href="https://www.google.com/maps?ll=35.679408,139.768931&z=15&t=m&hl=ja&gl=JP&mapclient=embed&cid=7351611049601110098" target="_blank" rel="noopener noreferrer" class="font-aboreto flex items-center justify-center border-b border-[#f9eade]/30 px-0.5 text-white"><span class="mr-[-10px] origin-left scale-x-[0.8] whitespace-nowrap text-[2.9cqw] leading-[1.2] md:mr-[-18px] md:text-[15px]">GOOGLE MAP</span> <img class="w-full max-w-[10.5px] max-md:max-w-[8px]" src="/images/up-right-arrow.webp" width="21" height="20" alt=""></a></div></div></div></div></div></div></div>`,
    1
  );
function Xm(i, e) {
  kn(e, !0);
  const t = {};
  As(t);
  const n = () => bs(fr, "$page", t),
    r = Math.random().toString(36).slice(-8),
    s = Ur(() => it.width >= 768),
    a = Ur(() => (Re(s) ? 40 : 16)),
    o = Ur(() => (Re(s) ? 96 : 64));
  let l = mt(void 0),
    c = mt(!1),
    d,
    f = mt(!1),
    p = mt(0);
  Wn(() => {
    vt.setEl("headerMenu", Re(l));
  }),
    ho(
      () => (
        e.isModalOpen &&
          (ct(c, !0),
          Ht.stop(),
          ct(p, Et(Ht.scroll)),
          (d = window.setTimeout(() => {
            ct(f, !0);
          }, 800))),
        !e.isModalOpen && Re(c) && (Ht.start(), clearTimeout(d), ct(f, !1)),
        () => {
          clearTimeout(d);
        }
      )
    );
  async function m(q) {
    if (q.startsWith("http")) {
      window.open(q, "_blank");
      return;
    }
    if (q === n().url.pathname) {
      e.setIsModalOpen(!1);
      return;
    }
    await Bm(), wl(q, { noScroll: !0 });
  }
  var x = Wm();
  function v(q, Y) {
    let Se = () => (Y == null ? void 0 : Y().index),
      oe = () => (Y == null ? void 0 : Y().href),
      ce = () => (Y == null ? void 0 : Y().text);
    var Ae = Vm();
    Ae.__click = [Hm, m, oe];
    var Oe = ye(Ae);
    h(Oe, () => ({ index: Se(), href: oe(), text: ce() })),
      Vn(() => Pi(Ae, "pointer-events-none", !oe())),
      gt(Ae, (Be) => xl(Be)),
      xt(q, Ae);
  }
  function h(q, Y) {
    let Se = () => (Y == null ? void 0 : Y().index),
      oe = () => (Y == null ? void 0 : Y().href),
      ce = () => (Y == null ? void 0 : Y().text);
    var Ae = km(),
      Oe = ye(Ae),
      Be = ye(Oe),
      He = ye(Be),
      qe = ye(He),
      he = Me(Me(Be, !0)),
      T = ye(he),
      ne = ye(T);
    Ml(ne, {
      get text() {
        return ce();
      },
    });
    var te = Me(Me(ne, !0));
    Li(
      te,
      () => !oe(),
      (ue) => {
        var fe = Gm();
        xt(ue, fe);
      }
    ),
      Vn(() => {
        ps(
          He,
          `flex text-[3.7cqw] leading-none text-white duration-[0.3s] will-change-transform group-hover:text-[#667f96] md:text-[2cqw] lg:text-[1.2cqw] ${wn(
            Re(f) ? "!delay-0" : ""
          )}`
        ),
          il(qe, `(${wn(Se())})`);
      }),
      gt(
        He,
        (ue, fe) => St(ue, fe),
        () => ({
          show: e.isModalOpen,
          enter: "duration-[0.4s] ease-[--title-ease] delay-[--number-delay]",
          enterFrom: "scale-0",
          enterTo: "scale-100",
          leave: "duration-[0.3s]",
        })
      ),
      gt(
        T,
        (ue, fe) => St(ue, fe),
        () => ({
          show: e.isModalOpen,
          enter: "duration-[0.7s] ease-[--title-ease] delay-[--d]",
          enterFrom: "translate-y-full",
          enterTo: "translate-y-0",
          leave: "duration-[0.3s]",
        })
      ),
      xt(q, Ae);
  }
  var u = di(x),
    A = ye(u),
    M = ye(A);
  Rn(M, "id", `header-menu-inner-clip-path-${wn(r)}`);
  var b = ye(M),
    D = Me(Me(u, !0));
  kt(
    D,
    (q) => ct(l, Et(q)),
    () => Re(l)
  );
  var w = ye(D),
    R = Me(Me(w, !0)),
    H = Me(Me(R, !0));
  Rn(H, "style", `clip-path: url(#header-menu-inner-clip-path-${wn(r)})`);
  var y = ye(H),
    g = ye(y),
    I = ye(g),
    k = ye(I),
    C = ye(k),
    G = ye(C),
    X = ye(G);
  v(X, () => ({ show: e.isModalOpen, index: 0, href: "/", text: "TOP" }));
  var Z = Me(Me(C, !0)),
    re = ye(Z),
    B = ye(re);
  v(B, () => ({ index: 1, href: "/news/", text: "NEWS" }));
  var Q = Me(Me(k, !0)),
    J = ye(Q),
    de = ye(J),
    Fe = ye(de);
  v(Fe, () => ({ index: 2, href: "/about/", text: "ABOUT US" }));
  var Ge = Me(Me(J, !0)),
    V = ye(Ge),
    ee = ye(V);
  v(ee, () => ({ index: 3, href: "/service/", text: "SERVICE" }));
  var le = Me(Me(Ge, !0)),
    ae = ye(le),
    be = ye(ae);
  v(be, () => ({
    index: 4,
    href: "https://recruit.m-trust.co.jp/",
    text: "RECRUIT",
  }));
  var Le = Me(Me(Q, !0)),
    ze = ye(Le),
    L = ye(ze),
    Ne = ye(L);
  v(Ne, () => ({ index: 5, href: "/contact/", text: "GET IN TOUCH" }));
  var ge = Me(Me(g, !0)),
    et = ye(ge),
    Ee = ye(et),
    ke = Me(Me(ge, !0)),
    E = ye(ke),
    _ = ye(E),
    z = ye(_),
    W = ye(z),
    K = Me(Me(z, !0)),
    j = ye(K),
    _e = Me(Me(K, !0)),
    $ = ye(_e),
    me = Me(Me(_, !0)),
    ve = ye(me);
  Vn(() => {
    Rn(u, "viewBox", `0 0 ${wn(it.width)} ${wn(it.height)}`),
      Rn(b, "x", Re(a)),
      Rn(b, "y", Re(o)),
      Rn(b, "width", it.width - Re(a) * 2),
      Rn(b, "height", it.height - Re(o) * 2),
      Pi(D, "pointer-events-none", !e.isModalOpen),
      Pi(D, "is-modal-open", e.isModalOpen),
      Ul(D, "top", `${wn(Re(p))}px`);
  }),
    gt(
      M,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter: "duration-[0.9s] delay-[0.13s]",
        enterFrom: "scale-0",
        enterTo: "scale-100",
        leave: "duration-[0.4s] delay-0",
        leaveFrom: "scale-100",
        leaveTo: "scale-0",
      })
    ),
    gt(
      D,
      (q, Y) => St(q, Y),
      () => ({ show: e.isModalOpen })
    ),
    gt(
      w,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter: "duration-[0.9s]",
        enterFrom: "scale-0",
        enterTo: "scale-100",
        leave: "duration-[0.4s]",
      })
    ),
    gt(
      R,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter: "duration-[0.9s] delay-[0.13s]",
        enterFrom: "opacity-0 scale-0",
        enterTo: "opacity-100 scale-100",
        leave: "duration-[0.4s] delay-0",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-0",
      })
    ),
    gt(
      Ee,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter:
          "duration-[0.7s] ease-[--title-ease] delay-[calc(var(--stagger)*3+var(--delay))] md:delay-[calc(var(--stagger)*2+var(--delay))]",
        enterFrom: "scale-x-0",
        enterTo: "",
        leave: "duration-[0.3s]",
      })
    ),
    gt(
      W,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter:
          "duration-[0.7s] ease-[--title-ease] delay-[calc(var(--stagger)*1.5+var(--delay))] md:delay-[calc(var(--stagger)*0.5+var(--delay))]",
        enterFrom: "translate-y-[110%]",
        enterTo: "",
        leave: "duration-[0.3s]",
      })
    ),
    gt(
      j,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter:
          "duration-[0.7s] ease-[--title-ease] delay-[calc(var(--stagger)*2+var(--delay))] md:delay-[calc(var(--stagger)*1+var(--delay))]",
        enterFrom: "translate-y-[110%]",
        enterTo: "",
        leave: "duration-[0.3s]",
      })
    ),
    gt(
      $,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter:
          "duration-[0.7s] ease-[--title-ease] delay-[calc(var(--stagger)*2.5+var(--delay))] md:delay-[calc(var(--stagger)*1.5+var(--delay))]",
        enterFrom: "translate-y-[110%]",
        enterTo: "",
        leave: "duration-[0.3s]",
      })
    ),
    gt(
      ve,
      (q, Y) => St(q, Y),
      () => ({
        show: e.isModalOpen,
        enter:
          "duration-[0.7s] ease-[--title-ease] delay-[calc(var(--stagger)*3+var(--delay))] md:delay-[calc(var(--stagger)*2+var(--delay))]",
        enterFrom: "translate-y-[110%]",
        enterTo: "",
        leave: "duration-[0.3s]",
      })
    ),
    xt(i, x),
    Xn();
}
lo(["click"]);
function qm(i, e, t, n, r) {
  t().route.id === "/" ? n.scrollTo(0) : r("/");
}
var Ym = Ft(
  '<header class=" group relative"><button><img class="w-[100px] object-cover md:w-[130px]" src="/images/logo-m-trust.webp" width="228" height="32" decoding="async" alt="M-Trust"></button> <button type="button"><span class="absolute">MENU</span> <span class="absolute">CLOSE</span></button></header> <!>',
  1
);
function Km(i, e) {
  kn(e, !0);
  const t = {};
  As(t);
  const n = () => bs(fr, "$page", t),
    r = new yl();
  let s = mt(void 0),
    a = mt(void 0),
    o = mt(void 0),
    l = mt(!1);
  function c(u) {
    ct(l, Et(u));
  }
  Wn(
    () => (
      r.start(),
      vt.setEl("header", Re(s)),
      vt.setEl("headerLogo", Re(a)),
      vt.setEl("headerButton", Re(o)),
      () => {
        r.destroy();
      }
    )
  );
  var d = Ym(),
    f = di(d);
  kt(
    f,
    (u) => ct(s, Et(u)),
    () => Re(s)
  );
  var p = ye(f);
  kt(
    p,
    (u) => ct(a, Et(u)),
    () => Re(a)
  ),
    Vn(() =>
      ps(
        p,
        Hs.e("fixed left-5 top-7 z-20 md:left-10 md:top-[45px]", {
          "group-[.is-layout-visible]": "duration-700",
          "group-[:not(.is-layout-visible)]": "pointer-events-none opacity-0",
        })
      )
    ),
    (p.__click = [qm, fr, n, Ht, Sl]);
  var m = Me(Me(p, !0));
  kt(
    m,
    (u) => ct(o, Et(u)),
    () => Re(o)
  ),
    Vn(() =>
      ps(
        m,
        Hs.e(
          "fixed right-[16px] top-[20px] z-40 flex h-[32px] w-[102px] items-center justify-center rounded-full border-[0.5px] text-[9px] font-light text-white md:right-10 md:top-[30px] md:h-[38px] md:w-[125px] md:border md:text-[12px]",
          {
            "group-[.is-layout-visible]": "duration-700",
            "group-[:not(.is-layout-visible)]": "pointer-events-none opacity-0",
          }
        )
      )
    );
  var x = ye(m),
    v = Me(Me(x, !0)),
    h = Me(Me(f, !0));
  Li(
    h,
    () => r.isVisible,
    (u) => {
      var A = fs(),
        M = di(A);
      Xm(M, {
        get isModalOpen() {
          return Re(l);
        },
        setIsModalOpen: c,
      }),
        xt(u, A);
    }
  ),
    Vn(() => Pi(f, "is-layout-visible", Ct.isLayoutVisible)),
    gt(
      m,
      (u, A) => St(u, A),
      () => ({
        show: Re(l),
        enter: "duration-[0.3s]",
        enterFrom: "border-transparent bg-[#3b3b3b]",
        enterTo: "border-[#f2f2f2] bg-transparent mix-blend-difference",
      })
    ),
    rl("click", m, () => ct(l, !Re(l)), !1),
    gt(
      x,
      (u, A) => St(u, A),
      () => ({
        show: Re(l),
        enter: "duration-[0.3s]",
        enterFrom: "opacity-100",
        enterTo: "opacity-0",
      })
    ),
    gt(
      v,
      (u, A) => St(u, A),
      () => ({ show: Re(l), enter: "duration-[0.3s]", enterFrom: "opacity-0" })
    ),
    xt(i, d),
    Xn();
}
lo(["click"]);
var jm = Ft(
    '<div class="group/page relative bg-[#f2f2f2]"><!> <main class="contents"><!></main> <!></div>'
  ),
  Zm = Ft('<div class="absolute inset-0"></div> <!> <!> <!> <!>', 1);
function l_(i, e) {
  kn(e, !0);
  const t = {};
  As(t);
  const n = () => bs(fr, "$page", t);
  let r = mt(void 0),
    s = mt(void 0),
    a = mt(!1);
  Wn(async () => {
    Dr.registerPlugin(Vs),
      (Ct.isIntroVisible = n().route.id === "/"),
      Ct.isIntroVisible ||
        ((Ct.newsItems = await Dl()),
        await Promise.all([Promise.all(Il.map((m) => Pl(m))), El(Nl)])),
      Ht.on("scroll", Vs.update),
      Dr.ticker.add((m) => {
        Ht.raf(m * 1e3);
      }),
      Dr.ticker.lagSmoothing(0),
      Tl() && it.width > 768 && (Ct.fluidImage = xm()),
      ct(a, !0),
      await hi(10),
      (Ct.isModuleLoaded = !0),
      await hi(100),
      Re(r).classList.add("is-visible"),
      (Re(s).style.display = "none");
  }),
    Rl(() => {
      (Ct.isKvVisible = !1), Ht.stop();
    }),
    Cl((m) => {
      var u, A, M;
      if (!Ct.isModuleLoaded) return;
      const x = ((u = m.to) == null ? void 0 : u.route.id) === "/",
        v = vt.getEl("pageNode");
      let h = 0;
      if (
        ((A = m.to) == null ? void 0 : A.route.id) === "/news" &&
        (M = m.to) != null &&
        M.url.hash
      ) {
        const b = document.querySelector(m.to.url.hash),
          { top: D } = (b == null ? void 0 : b.getBoundingClientRect()) ?? {
            top: 0,
          };
        (v.style.top = `${-D}px`), (h = D);
      }
      setTimeout(() => {
        v.classList.add("is-visible"), (Ct.isKvVisible = !0);
      }, Al),
        setTimeout(async () => {
          document.body.classList.remove("is-page-transitioning"),
            !x &&
              (Ht.scrollTo(h, { immediate: !0, force: !0 }),
              await hi(10),
              Fl(v),
              Ht.scrollTo(h, { immediate: !0, force: !0 }),
              Ht.start());
        }, Ts);
    }),
    ho(() => {
      if (!Re(r)) return;
      const m = Re(r);
      vt.setEl("pageNode", m);
    });
  var o = Zm(),
    l = di(o);
  kt(
    l,
    (m) => ct(s, Et(m)),
    () => Re(s)
  );
  var c = Me(Me(l, !0));
  Ql(c, {});
  var d = Me(Me(c, !0));
  Li(
    d,
    () => Re(a),
    (m) => {
      var x = fs(),
        v = di(x);
      Fm(v, {}), xt(m, x);
    }
  );
  var f = Me(Me(d, !0));
  Ol(
    f,
    () => e.data.pathname,
    (m) => {
      var x = jm();
      kt(
        x,
        (M) => ct(r, Et(M)),
        () => Re(r)
      ),
        Gs(2, x, () => jl),
        Gs(1, x, () => Kl);
      var v = ye(x);
      Li(
        v,
        () => Ct.isModuleLoaded,
        (M) => {
          var b = fs(),
            D = di(b);
          Km(D, {}), xt(M, b);
        }
      );
      var h = Me(Me(v, !0)),
        u = ye(h);
      bl(() => e.children, u);
      var A = Me(Me(h, !0));
      Dm(A, {}), xt(m, x);
    }
  );
  var p = Me(Me(f, !0));
  $l(p, {}),
    Vn(() => Pi(l, "bg-[#405260]", e.data.pathname === "/")),
    xt(i, o),
    Xn();
}
export { l_ as component, o_ as universal };
