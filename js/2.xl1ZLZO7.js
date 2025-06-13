function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "./Message.DMBcDqdh.js",
      "./disclose-version.DQ6zD9ir.js",
      "./index-client.hmWN-4Cw.js",
      "./this.BnIkoQJo.js",
      "./index.ZORhgBxb.js",
      "./isHover.C_Gi8ajW.js",
      "./entry.B8zhSzpe.js",
      "./index.CUyvS_rG.js",
      "./props.IDBnocEi.js",
      "./ClippedBg.CeQQm4Kg.js",
      "./Message2.DTvRJ8ss.js",
      "./NextPage.DDFJuAP0.js",
      "./lifecycle.Cw3YHxgF.js",
      "./News.XetERlCe.js",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
import {
  a as T,
  t as V,
  c as p,
  b as n,
  e as D,
  s as ht,
  g as xe,
  f as U,
  d as Dt,
} from "./disclose-version.DQ6zD9ir.js";
import {
  a as J,
  q as We,
  g,
  s as O,
  p as Z,
  b as Y,
  k as Ie,
  o as Me,
  r as G,
  Z as Jt,
} from "./index-client.hmWN-4Cw.js";
import { p as B, b as ye, i as be } from "./this.BnIkoQJo.js";
import { i as Zt } from "./lifecycle.Cw3YHxgF.js";
import { p as Qt, s as er } from "./props.IDBnocEi.js";
import { I as tr, M as rr, G as or, N as nr } from "./NextPage.DDFJuAP0.js";
import { p as ar, n as ct } from "./entry.B8zhSzpe.js";
import {
  s as ae,
  l as Be,
  a as E,
  w as Ge,
  k as pt,
  c as te,
  t as fe,
  f as xt,
  b as pe,
  j as Oe,
  p as sr,
  m as ir,
} from "./isHover.C_Gi8ajW.js";
import { g as se } from "./index.ZORhgBxb.js";
import {
  l as lr,
  a as dr,
  p as cr,
  e as ve,
  s as Le,
  r as pr,
  S as ur,
} from "./index.CUyvS_rG.js";
import { _ as Ee, c as Ve } from "./preload-helper.CDr1bj0t.js";
function fr(e, r = 100) {
  let t,
    o = ae.width;
  return (...i) => {
    clearTimeout(t),
      (t = window.setTimeout(() => {
        o !== ae.width && ((o = ae.width), e(...i));
      }, r));
  };
}
var vr = V(
  '<div class="h-[16px] leading-none duration-[0.8s] ease-out will-change-transform *:block *:h-[16px] *:w-[0.64em] *:text-center md:h-[20px] md:*:h-[20px]"><span>0</span> <span>1</span> <span>2</span> <span>3</span> <span>4</span> <span>5</span> <span>6</span> <span>7</span> <span>8</span> <span>9</span></div>'
);
function Ye(e, r) {
  J(r, !0);
  let t = Y(void 0),
    o = Y(0),
    i = Y(0);
  We(() => {
    if (!(!g(t) || g(o) === r.number)) {
      if (g(o) < r.number) O(i, g(i) + (r.number - g(o))), O(o, B(r.number));
      else {
        for (let a = 0; a < 10; a++) g(t).innerHTML += `<span>${a}</span>`;
        O(i, g(i) + (10 + r.number - g(o))), O(o, B(r.number));
      }
      g(t).style.transform = `translateY(-${g(i) * 100}%)`;
    }
  });
  var s = vr();
  ye(
    s,
    (a) => O(t, B(a)),
    () => g(t)
  ),
    T(e, s),
    Z();
}
var gr = V(
  '<div class="font-classico flex scale-x-75 justify-center overflow-hidden text-[14px] text-[#97928e] md:text-[18px]"><!> <!> <!></div>'
);
function mr(e, r) {
  J(r, !0);
  const t = Ie(() => r.value.toString().padStart(3, "0"));
  var o = gr(),
    i = p(o),
    s = Ie(() => Number(g(t)[0] ?? "0"));
  Ye(i, {
    get number() {
      return g(s);
    },
  });
  var a = n(n(i, !0)),
    d = Ie(() => Number(g(t)[1] ?? "0"));
  Ye(a, {
    get number() {
      return g(d);
    },
  });
  var u = n(n(a, !0)),
    v = Ie(() => Number(g(t)[2] ?? "0"));
  Ye(u, {
    get number() {
      return g(v);
    },
  }),
    T(e, o),
    Z();
}
var br = V(
    '<div class="flex flex-1 items-center justify-center overflow-hidden"><div><p class="font-classico scale-x-75 text-[12px] leading-none text-[#97928e] md:text-[18px]"> </p></div></div>'
  ),
  hr = V(
    '<div class="group pointer-events-none fixed inset-x-0 top-0 z-50 flex h-lvh items-center justify-center overflow-hidden"><div class="relative flex h-full w-full items-center justify-center"><div class="relative flex w-full items-center"><div><!></div> <div class="overflow-hidden"><img src="/images/logo.webp" width="185" height="150" alt=""></div> <div><!></div> <div class="absolute bottom-[-86px] left-1/2 -translate-x-1/2 overflow-hidden md:bottom-[-75px]"><div><!></div></div></div></div></div>'
  );
function xr(e, r) {
  J(r, !0);
  let t = Y(0),
    o = Y(!1);
  Me(async () => {
    Be.stop(),
      (E.isLayoutVisible = !1),
      await Promise.all([Ge(200), pt(["/images/logo.webp"])]),
      O(o, !0),
      await Ge(800),
      (E.newsItems = await lr()),
      O(t, g(t) + 23),
      await Promise.all([Promise.all(dr.map((F) => ar(F))), pt(cr)]),
      $();
    function $() {
      const F = g(t) + se.utils.random(8, 24, 1);
      F >= 100
        ? ((E.introState = "intermediate"),
          setTimeout(() => O(t, 100), 400),
          setTimeout(_, 1210))
        : (O(t, F), setTimeout($, se.utils.random(300, 550)));
    }
    function _() {
      (E.introState = "completed"),
        setTimeout(() => {
          E.isKvVisible = !0;
        }, 200),
        setTimeout(() => {
          E.isLayoutVisible = !0;
        }, 1e3),
        setTimeout(() => {
          E.isIntroVisible = !1;
        }, 1200);
    }
  });
  var i = hr();
  function s($, _) {
    let F = () => (_ == null ? void 0 : _().text);
    var q = br(),
      Q = p(q),
      ie = p(Q),
      ee = p(ie);
    G(() => {
      te(
        Q,
        `origin-top-left duration-[1.2s] ease-out ${D(
          !g(o) || E.introState === "completed"
            ? "translate-y-full rotate-6"
            : ""
        )}`
      ),
        ht(ee, F());
    }),
      T($, q);
  }
  var a = p(i),
    d = p(a),
    u = p(d);
  G(() =>
    te(
      u,
      ve.e("flex flex-1 items-center justify-center", {
        "group-[:where(.is-intermediate,.is-completed)]":
          "translate-x-[calc(25vw-42px)] duration-[1.2s] ease-in-out md:translate-x-[calc(25vw-64px)] xl:translate-x-[calc(25vw-100px)]",
      })
    )
  );
  var v = p(u);
  s(v, () => ({ text: "M-TRUST" }));
  var c = n(n(u, !0)),
    m = p(c);
  G(() =>
    te(
      m,
      ve.e(
        "w-[28px] duration-[1.2s] ease-out will-change-transform [transition-property:transform] md:w-[42px]",
        {
          "group-[:not(.is-texts-visible)]": "scale-50 opacity-0",
          "group-[.is-completed]":
            "origin-top-left translate-y-[104%] rotate-6 ease-in-out",
        }
      )
    )
  );
  var l = n(n(c, !0));
  G(() =>
    te(
      l,
      ve.e("flex flex-1 items-center justify-center", {
        "group-[:where(.is-intermediate,.is-completed)]":
          "translate-x-[calc(-25vw+42px)] duration-[1.2s] ease-in-out md:translate-x-[calc(-25vw+64px)] xl:translate-x-[calc(-25vw+100px)]",
      })
    )
  );
  var y = p(l);
  s(y, () => ({ text: "LOADING" }));
  var A = n(n(l, !0)),
    k = p(A);
  G(() =>
    te(
      k,
      ve.e("origin-top-left duration-[1.2s] ease-in-out", {
        "group-[:where(:not(.is-texts-visible),.is-completed)]":
          "translate-y-[104%] rotate-6",
      })
    )
  );
  var S = p(k);
  mr(S, {
    get value() {
      return g(t);
    },
  }),
    G(() => {
      fe(i, "is-texts-visible", g(o)),
        fe(i, "is-intermediate", E.introState === "intermediate"),
        fe(i, "is-completed", E.introState === "completed");
    }),
    T(e, i),
    Z();
}
var ut = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  W = (e) => !e || typeof e != "object" || Object.keys(e).length === 0,
  yr = (e, r) => JSON.stringify(e) === JSON.stringify(r);
function yt(e, r) {
  e.forEach(function (t) {
    Array.isArray(t) ? yt(t, r) : r.push(t);
  });
}
function wt(e) {
  let r = [];
  return yt(e, r), r;
}
var _t = (...e) => wt(e).filter(Boolean),
  kt = (e, r) => {
    let t = {},
      o = Object.keys(e),
      i = Object.keys(r);
    for (let s of o)
      if (i.includes(s)) {
        let a = e[s],
          d = r[s];
        typeof a == "object" && typeof d == "object"
          ? (t[s] = kt(a, d))
          : Array.isArray(a) || Array.isArray(d)
          ? (t[s] = _t(d, a))
          : (t[s] = d + " " + a);
      } else t[s] = e[s];
    for (let s of i) o.includes(s) || (t[s] = r[s]);
    return t;
  },
  ft = (e) => (!e || typeof e != "string" ? e : e.replace(/\s+/g, " ").trim());
const De = "-";
function wr(e) {
  const r = kr(e),
    { conflictingClassGroups: t, conflictingClassGroupModifiers: o } = e;
  function i(a) {
    const d = a.split(De);
    return d[0] === "" && d.length !== 1 && d.shift(), Pt(d, r) || _r(a);
  }
  function s(a, d) {
    const u = t[a] || [];
    return d && o[a] ? [...u, ...o[a]] : u;
  }
  return { getClassGroupId: i, getConflictingClassGroupIds: s };
}
function Pt(e, r) {
  var a;
  if (e.length === 0) return r.classGroupId;
  const t = e[0],
    o = r.nextPart.get(t),
    i = o ? Pt(e.slice(1), o) : void 0;
  if (i) return i;
  if (r.validators.length === 0) return;
  const s = e.join(De);
  return (a = r.validators.find(({ validator: d }) => d(s))) == null
    ? void 0
    : a.classGroupId;
}
const vt = /^\[(.+)\]$/;
function _r(e) {
  if (vt.test(e)) {
    const r = vt.exec(e)[1],
      t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t) return "arbitrary.." + t;
  }
}
function kr(e) {
  const { theme: r, prefix: t } = e,
    o = { nextPart: new Map(), validators: [] };
  return (
    Ar(Object.entries(e.classGroups), t).forEach(([s, a]) => {
      Fe(a, o, s, r);
    }),
    o
  );
}
function Fe(e, r, t, o) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? r : gt(r, i);
      s.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (Pr(i)) {
        Fe(i(o), r, t, o);
        return;
      }
      r.validators.push({ validator: i, classGroupId: t });
      return;
    }
    Object.entries(i).forEach(([s, a]) => {
      Fe(a, gt(r, s), t, o);
    });
  });
}
function gt(e, r) {
  let t = e;
  return (
    r.split(De).forEach((o) => {
      t.nextPart.has(o) ||
        t.nextPart.set(o, { nextPart: new Map(), validators: [] }),
        (t = t.nextPart.get(o));
    }),
    t
  );
}
function Pr(e) {
  return e.isThemeGetter;
}
function Ar(e, r) {
  return r
    ? e.map(([t, o]) => {
        const i = o.map((s) =>
          typeof s == "string"
            ? r + s
            : typeof s == "object"
            ? Object.fromEntries(Object.entries(s).map(([a, d]) => [r + a, d]))
            : s
        );
        return [t, i];
      })
    : e;
}
function Sr(e) {
  if (e < 1) return { get: () => {}, set: () => {} };
  let r = 0,
    t = new Map(),
    o = new Map();
  function i(s, a) {
    t.set(s, a), r++, r > e && ((r = 0), (o = t), (t = new Map()));
  }
  return {
    get(s) {
      let a = t.get(s);
      if (a !== void 0) return a;
      if ((a = o.get(s)) !== void 0) return i(s, a), a;
    },
    set(s, a) {
      t.has(s) ? t.set(s, a) : i(s, a);
    },
  };
}
const At = "!";
function Cr(e) {
  const r = e.separator,
    t = r.length === 1,
    o = r[0],
    i = r.length;
  return function (a) {
    const d = [];
    let u = 0,
      v = 0,
      c;
    for (let k = 0; k < a.length; k++) {
      let S = a[k];
      if (u === 0) {
        if (S === o && (t || a.slice(k, k + i) === r)) {
          d.push(a.slice(v, k)), (v = k + i);
          continue;
        }
        if (S === "/") {
          c = k;
          continue;
        }
      }
      S === "[" ? u++ : S === "]" && u--;
    }
    const m = d.length === 0 ? a : a.substring(v),
      l = m.startsWith(At),
      y = l ? m.substring(1) : m,
      A = c && c > v ? c - v : void 0;
    return {
      modifiers: d,
      hasImportantModifier: l,
      baseClassName: y,
      maybePostfixModifierPosition: A,
    };
  };
}
function Mr(e) {
  if (e.length <= 1) return e;
  const r = [];
  let t = [];
  return (
    e.forEach((o) => {
      o[0] === "[" ? (r.push(...t.sort(), o), (t = [])) : t.push(o);
    }),
    r.push(...t.sort()),
    r
  );
}
function Tr(e) {
  return { cache: Sr(e.cacheSize), splitModifiers: Cr(e), ...wr(e) };
}
const zr = /\s+/;
function Ir(e, r) {
  const {
      splitModifiers: t,
      getClassGroupId: o,
      getConflictingClassGroupIds: i,
    } = r,
    s = new Set();
  return e
    .trim()
    .split(zr)
    .map((a) => {
      const {
        modifiers: d,
        hasImportantModifier: u,
        baseClassName: v,
        maybePostfixModifierPosition: c,
      } = t(a);
      let m = o(c ? v.substring(0, c) : v),
        l = !!c;
      if (!m) {
        if (!c) return { isTailwindClass: !1, originalClassName: a };
        if (((m = o(v)), !m))
          return { isTailwindClass: !1, originalClassName: a };
        l = !1;
      }
      const y = Mr(d).join(":");
      return {
        isTailwindClass: !0,
        modifierId: u ? y + At : y,
        classGroupId: m,
        originalClassName: a,
        hasPostfixModifier: l,
      };
    })
    .reverse()
    .filter((a) => {
      if (!a.isTailwindClass) return !0;
      const { modifierId: d, classGroupId: u, hasPostfixModifier: v } = a,
        c = d + u;
      return s.has(c)
        ? !1
        : (s.add(c), i(u, v).forEach((m) => s.add(d + m)), !0);
    })
    .reverse()
    .map((a) => a.originalClassName)
    .join(" ");
}
function Er() {
  let e = 0,
    r,
    t,
    o = "";
  for (; e < arguments.length; )
    (r = arguments[e++]) && (t = St(r)) && (o && (o += " "), (o += t));
  return o;
}
function St(e) {
  if (typeof e == "string") return e;
  let r,
    t = "";
  for (let o = 0; o < e.length; o++)
    e[o] && (r = St(e[o])) && (t && (t += " "), (t += r));
  return t;
}
function He(e, ...r) {
  let t,
    o,
    i,
    s = a;
  function a(u) {
    const v = r.reduce((c, m) => m(c), e());
    return (t = Tr(v)), (o = t.cache.get), (i = t.cache.set), (s = d), d(u);
  }
  function d(u) {
    const v = o(u);
    if (v) return v;
    const c = Ir(u, t);
    return i(u, c), c;
  }
  return function () {
    return s(Er.apply(null, arguments));
  };
}
function I(e) {
  const r = (t) => t[e] || [];
  return (r.isThemeGetter = !0), r;
}
const Ct = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Vr = /^\d+\/\d+$/,
  jr = new Set(["px", "full", "screen"]),
  Lr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Rr =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Gr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Or = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Nr =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function oe(e) {
  return he(e) || jr.has(e) || Vr.test(e);
}
function de(e) {
  return we(e, "length", Hr);
}
function he(e) {
  return !!e && !Number.isNaN(Number(e));
}
function je(e) {
  return we(e, "number", he);
}
function Pe(e) {
  return !!e && Number.isInteger(Number(e));
}
function $r(e) {
  return e.endsWith("%") && he(e.slice(0, -1));
}
function b(e) {
  return Ct.test(e);
}
function ce(e) {
  return Lr.test(e);
}
const Xr = new Set(["length", "size", "percentage"]);
function Yr(e) {
  return we(e, Xr, Mt);
}
function Kr(e) {
  return we(e, "position", Mt);
}
const Wr = new Set(["image", "url"]);
function Br(e) {
  return we(e, Wr, Ur);
}
function Fr(e) {
  return we(e, "", qr);
}
function Ae() {
  return !0;
}
function we(e, r, t) {
  const o = Ct.exec(e);
  return o
    ? o[1]
      ? typeof r == "string"
        ? o[1] === r
        : r.has(o[1])
      : t(o[2])
    : !1;
}
function Hr(e) {
  return Rr.test(e) && !Gr.test(e);
}
function Mt() {
  return !1;
}
function qr(e) {
  return Or.test(e);
}
function Ur(e) {
  return Nr.test(e);
}
function qe() {
  const e = I("colors"),
    r = I("spacing"),
    t = I("blur"),
    o = I("brightness"),
    i = I("borderColor"),
    s = I("borderRadius"),
    a = I("borderSpacing"),
    d = I("borderWidth"),
    u = I("contrast"),
    v = I("grayscale"),
    c = I("hueRotate"),
    m = I("invert"),
    l = I("gap"),
    y = I("gradientColorStops"),
    A = I("gradientColorStopPositions"),
    k = I("inset"),
    S = I("margin"),
    $ = I("opacity"),
    _ = I("padding"),
    F = I("saturate"),
    q = I("scale"),
    Q = I("sepia"),
    ie = I("skew"),
    ee = I("space"),
    ge = I("translate"),
    re = () => ["auto", "contain", "none"],
    me = () => ["auto", "hidden", "clip", "visible", "scroll"],
    le = () => ["auto", b, r],
    f = () => [b, r],
    w = () => ["", oe, de],
    h = () => ["auto", he, b],
    P = () => [
      "bottom",
      "center",
      "left",
      "left-bottom",
      "left-top",
      "right",
      "right-bottom",
      "right-top",
      "top",
    ],
    x = () => ["solid", "dashed", "dotted", "double", "none"],
    C = () => [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
      "plus-lighter",
    ],
    M = () => [
      "start",
      "end",
      "center",
      "between",
      "around",
      "evenly",
      "stretch",
    ],
    z = () => ["", "0", b],
    L = () => [
      "auto",
      "avoid",
      "all",
      "avoid-page",
      "page",
      "left",
      "right",
      "column",
    ],
    H = () => [he, je],
    K = () => [he, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Ae],
      spacing: [oe, de],
      blur: ["none", "", ce, b],
      brightness: H(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ce, b],
      borderSpacing: f(),
      borderWidth: w(),
      contrast: H(),
      grayscale: z(),
      hueRotate: K(),
      invert: z(),
      gap: f(),
      gradientColorStops: [e],
      gradientColorStopPositions: [$r, de],
      inset: le(),
      margin: le(),
      opacity: H(),
      padding: f(),
      saturate: H(),
      scale: H(),
      sepia: z(),
      skew: K(),
      space: f(),
      translate: f(),
    },
    classGroups: {
      aspect: [{ aspect: ["auto", "square", "video", b] }],
      container: ["container"],
      columns: [{ columns: [ce] }],
      "break-after": [{ "break-after": L() }],
      "break-before": [{ "break-before": L() }],
      "break-inside": [
        { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
      ],
      "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
      box: [{ box: ["border", "content"] }],
      display: [
        "block",
        "inline-block",
        "inline",
        "flex",
        "inline-flex",
        "table",
        "inline-table",
        "table-caption",
        "table-cell",
        "table-column",
        "table-column-group",
        "table-footer-group",
        "table-header-group",
        "table-row-group",
        "table-row",
        "flow-root",
        "grid",
        "inline-grid",
        "contents",
        "list-item",
        "hidden",
      ],
      float: [{ float: ["right", "left", "none", "start", "end"] }],
      clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [
        { object: ["contain", "cover", "fill", "none", "scale-down"] },
      ],
      "object-position": [{ object: [...P(), b] }],
      overflow: [{ overflow: me() }],
      "overflow-x": [{ "overflow-x": me() }],
      "overflow-y": [{ "overflow-y": me() }],
      overscroll: [{ overscroll: re() }],
      "overscroll-x": [{ "overscroll-x": re() }],
      "overscroll-y": [{ "overscroll-y": re() }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{ inset: [k] }],
      "inset-x": [{ "inset-x": [k] }],
      "inset-y": [{ "inset-y": [k] }],
      start: [{ start: [k] }],
      end: [{ end: [k] }],
      top: [{ top: [k] }],
      right: [{ right: [k] }],
      bottom: [{ bottom: [k] }],
      left: [{ left: [k] }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{ z: ["auto", Pe, b] }],
      basis: [{ basis: le() }],
      "flex-direction": [
        { flex: ["row", "row-reverse", "col", "col-reverse"] },
      ],
      "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
      flex: [{ flex: ["1", "auto", "initial", "none", b] }],
      grow: [{ grow: z() }],
      shrink: [{ shrink: z() }],
      order: [{ order: ["first", "last", "none", Pe, b] }],
      "grid-cols": [{ "grid-cols": [Ae] }],
      "col-start-end": [{ col: ["auto", { span: ["full", Pe, b] }, b] }],
      "col-start": [{ "col-start": h() }],
      "col-end": [{ "col-end": h() }],
      "grid-rows": [{ "grid-rows": [Ae] }],
      "row-start-end": [{ row: ["auto", { span: [Pe, b] }, b] }],
      "row-start": [{ "row-start": h() }],
      "row-end": [{ "row-end": h() }],
      "grid-flow": [
        { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
      ],
      "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", b] }],
      "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", b] }],
      gap: [{ gap: [l] }],
      "gap-x": [{ "gap-x": [l] }],
      "gap-y": [{ "gap-y": [l] }],
      "justify-content": [{ justify: ["normal", ...M()] }],
      "justify-items": [
        { "justify-items": ["start", "end", "center", "stretch"] },
      ],
      "justify-self": [
        { "justify-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      "align-content": [{ content: ["normal", ...M(), "baseline"] }],
      "align-items": [
        { items: ["start", "end", "center", "baseline", "stretch"] },
      ],
      "align-self": [
        { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
      ],
      "place-content": [{ "place-content": [...M(), "baseline"] }],
      "place-items": [
        { "place-items": ["start", "end", "center", "baseline", "stretch"] },
      ],
      "place-self": [
        { "place-self": ["auto", "start", "end", "center", "stretch"] },
      ],
      p: [{ p: [_] }],
      px: [{ px: [_] }],
      py: [{ py: [_] }],
      ps: [{ ps: [_] }],
      pe: [{ pe: [_] }],
      pt: [{ pt: [_] }],
      pr: [{ pr: [_] }],
      pb: [{ pb: [_] }],
      pl: [{ pl: [_] }],
      m: [{ m: [S] }],
      mx: [{ mx: [S] }],
      my: [{ my: [S] }],
      ms: [{ ms: [S] }],
      me: [{ me: [S] }],
      mt: [{ mt: [S] }],
      mr: [{ mr: [S] }],
      mb: [{ mb: [S] }],
      ml: [{ ml: [S] }],
      "space-x": [{ "space-x": [ee] }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{ "space-y": [ee] }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", b, r] }],
      "min-w": [{ "min-w": [b, r, "min", "max", "fit"] }],
      "max-w": [
        {
          "max-w": [
            b,
            r,
            "none",
            "full",
            "min",
            "max",
            "fit",
            "prose",
            { screen: [ce] },
            ce,
          ],
        },
      ],
      h: [{ h: [b, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "min-h": [{ "min-h": [b, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      "max-h": [{ "max-h": [b, r, "min", "max", "fit", "svh", "lvh", "dvh"] }],
      size: [{ size: [b, r, "auto", "min", "max", "fit"] }],
      "font-size": [{ text: ["base", ce, de] }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [
        {
          font: [
            "thin",
            "extralight",
            "light",
            "normal",
            "medium",
            "semibold",
            "bold",
            "extrabold",
            "black",
            je,
          ],
        },
      ],
      "font-family": [{ font: [Ae] }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [
        {
          tracking: [
            "tighter",
            "tight",
            "normal",
            "wide",
            "wider",
            "widest",
            b,
          ],
        },
      ],
      "line-clamp": [{ "line-clamp": ["none", he, je] }],
      leading: [
        {
          leading: [
            "none",
            "tight",
            "snug",
            "normal",
            "relaxed",
            "loose",
            oe,
            b,
          ],
        },
      ],
      "list-image": [{ "list-image": ["none", b] }],
      "list-style-type": [{ list: ["none", "disc", "decimal", b] }],
      "list-style-position": [{ list: ["inside", "outside"] }],
      "placeholder-color": [{ placeholder: [e] }],
      "placeholder-opacity": [{ "placeholder-opacity": [$] }],
      "text-alignment": [
        { text: ["left", "center", "right", "justify", "start", "end"] },
      ],
      "text-color": [{ text: [e] }],
      "text-opacity": [{ "text-opacity": [$] }],
      "text-decoration": [
        "underline",
        "overline",
        "line-through",
        "no-underline",
      ],
      "text-decoration-style": [{ decoration: [...x(), "wavy"] }],
      "text-decoration-thickness": [
        { decoration: ["auto", "from-font", oe, de] },
      ],
      "underline-offset": [{ "underline-offset": ["auto", oe, b] }],
      "text-decoration-color": [{ decoration: [e] }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
      indent: [{ indent: f() }],
      "vertical-align": [
        {
          align: [
            "baseline",
            "top",
            "middle",
            "bottom",
            "text-top",
            "text-bottom",
            "sub",
            "super",
            b,
          ],
        },
      ],
      whitespace: [
        {
          whitespace: [
            "normal",
            "nowrap",
            "pre",
            "pre-line",
            "pre-wrap",
            "break-spaces",
          ],
        },
      ],
      break: [{ break: ["normal", "words", "all", "keep"] }],
      hyphens: [{ hyphens: ["none", "manual", "auto"] }],
      content: [{ content: ["none", b] }],
      "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
      "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
      "bg-opacity": [{ "bg-opacity": [$] }],
      "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
      "bg-position": [{ bg: [...P(), Kr] }],
      "bg-repeat": [
        { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
      ],
      "bg-size": [{ bg: ["auto", "cover", "contain", Yr] }],
      "bg-image": [
        {
          bg: [
            "none",
            { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
            Br,
          ],
        },
      ],
      "bg-color": [{ bg: [e] }],
      "gradient-from-pos": [{ from: [A] }],
      "gradient-via-pos": [{ via: [A] }],
      "gradient-to-pos": [{ to: [A] }],
      "gradient-from": [{ from: [y] }],
      "gradient-via": [{ via: [y] }],
      "gradient-to": [{ to: [y] }],
      rounded: [{ rounded: [s] }],
      "rounded-s": [{ "rounded-s": [s] }],
      "rounded-e": [{ "rounded-e": [s] }],
      "rounded-t": [{ "rounded-t": [s] }],
      "rounded-r": [{ "rounded-r": [s] }],
      "rounded-b": [{ "rounded-b": [s] }],
      "rounded-l": [{ "rounded-l": [s] }],
      "rounded-ss": [{ "rounded-ss": [s] }],
      "rounded-se": [{ "rounded-se": [s] }],
      "rounded-ee": [{ "rounded-ee": [s] }],
      "rounded-es": [{ "rounded-es": [s] }],
      "rounded-tl": [{ "rounded-tl": [s] }],
      "rounded-tr": [{ "rounded-tr": [s] }],
      "rounded-br": [{ "rounded-br": [s] }],
      "rounded-bl": [{ "rounded-bl": [s] }],
      "border-w": [{ border: [d] }],
      "border-w-x": [{ "border-x": [d] }],
      "border-w-y": [{ "border-y": [d] }],
      "border-w-s": [{ "border-s": [d] }],
      "border-w-e": [{ "border-e": [d] }],
      "border-w-t": [{ "border-t": [d] }],
      "border-w-r": [{ "border-r": [d] }],
      "border-w-b": [{ "border-b": [d] }],
      "border-w-l": [{ "border-l": [d] }],
      "border-opacity": [{ "border-opacity": [$] }],
      "border-style": [{ border: [...x(), "hidden"] }],
      "divide-x": [{ "divide-x": [d] }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{ "divide-y": [d] }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{ "divide-opacity": [$] }],
      "divide-style": [{ divide: x() }],
      "border-color": [{ border: [i] }],
      "border-color-x": [{ "border-x": [i] }],
      "border-color-y": [{ "border-y": [i] }],
      "border-color-t": [{ "border-t": [i] }],
      "border-color-r": [{ "border-r": [i] }],
      "border-color-b": [{ "border-b": [i] }],
      "border-color-l": [{ "border-l": [i] }],
      "divide-color": [{ divide: [i] }],
      "outline-style": [{ outline: ["", ...x()] }],
      "outline-offset": [{ "outline-offset": [oe, b] }],
      "outline-w": [{ outline: [oe, de] }],
      "outline-color": [{ outline: [e] }],
      "ring-w": [{ ring: w() }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{ ring: [e] }],
      "ring-opacity": [{ "ring-opacity": [$] }],
      "ring-offset-w": [{ "ring-offset": [oe, de] }],
      "ring-offset-color": [{ "ring-offset": [e] }],
      shadow: [{ shadow: ["", "inner", "none", ce, Fr] }],
      "shadow-color": [{ shadow: [Ae] }],
      opacity: [{ opacity: [$] }],
      "mix-blend": [{ "mix-blend": C() }],
      "bg-blend": [{ "bg-blend": C() }],
      filter: [{ filter: ["", "none"] }],
      blur: [{ blur: [t] }],
      brightness: [{ brightness: [o] }],
      contrast: [{ contrast: [u] }],
      "drop-shadow": [{ "drop-shadow": ["", "none", ce, b] }],
      grayscale: [{ grayscale: [v] }],
      "hue-rotate": [{ "hue-rotate": [c] }],
      invert: [{ invert: [m] }],
      saturate: [{ saturate: [F] }],
      sepia: [{ sepia: [Q] }],
      "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
      "backdrop-blur": [{ "backdrop-blur": [t] }],
      "backdrop-brightness": [{ "backdrop-brightness": [o] }],
      "backdrop-contrast": [{ "backdrop-contrast": [u] }],
      "backdrop-grayscale": [{ "backdrop-grayscale": [v] }],
      "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
      "backdrop-invert": [{ "backdrop-invert": [m] }],
      "backdrop-opacity": [{ "backdrop-opacity": [$] }],
      "backdrop-saturate": [{ "backdrop-saturate": [F] }],
      "backdrop-sepia": [{ "backdrop-sepia": [Q] }],
      "border-collapse": [{ border: ["collapse", "separate"] }],
      "border-spacing": [{ "border-spacing": [a] }],
      "border-spacing-x": [{ "border-spacing-x": [a] }],
      "border-spacing-y": [{ "border-spacing-y": [a] }],
      "table-layout": [{ table: ["auto", "fixed"] }],
      caption: [{ caption: ["top", "bottom"] }],
      transition: [
        {
          transition: [
            "none",
            "all",
            "",
            "colors",
            "opacity",
            "shadow",
            "transform",
            b,
          ],
        },
      ],
      duration: [{ duration: K() }],
      ease: [{ ease: ["linear", "in", "out", "in-out", b] }],
      delay: [{ delay: K() }],
      animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", b] }],
      transform: [{ transform: ["", "gpu", "none"] }],
      scale: [{ scale: [q] }],
      "scale-x": [{ "scale-x": [q] }],
      "scale-y": [{ "scale-y": [q] }],
      rotate: [{ rotate: [Pe, b] }],
      "translate-x": [{ "translate-x": [ge] }],
      "translate-y": [{ "translate-y": [ge] }],
      "skew-x": [{ "skew-x": [ie] }],
      "skew-y": [{ "skew-y": [ie] }],
      "transform-origin": [
        {
          origin: [
            "center",
            "top",
            "top-right",
            "right",
            "bottom-right",
            "bottom",
            "bottom-left",
            "left",
            "top-left",
            b,
          ],
        },
      ],
      accent: [{ accent: ["auto", e] }],
      appearance: [{ appearance: ["none", "auto"] }],
      cursor: [
        {
          cursor: [
            "auto",
            "default",
            "pointer",
            "wait",
            "text",
            "move",
            "help",
            "not-allowed",
            "none",
            "context-menu",
            "progress",
            "cell",
            "crosshair",
            "vertical-text",
            "alias",
            "copy",
            "no-drop",
            "grab",
            "grabbing",
            "all-scroll",
            "col-resize",
            "row-resize",
            "n-resize",
            "e-resize",
            "s-resize",
            "w-resize",
            "ne-resize",
            "nw-resize",
            "se-resize",
            "sw-resize",
            "ew-resize",
            "ns-resize",
            "nesw-resize",
            "nwse-resize",
            "zoom-in",
            "zoom-out",
            b,
          ],
        },
      ],
      "caret-color": [{ caret: [e] }],
      "pointer-events": [{ "pointer-events": ["none", "auto"] }],
      resize: [{ resize: ["none", "y", "x", ""] }],
      "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
      "scroll-m": [{ "scroll-m": f() }],
      "scroll-mx": [{ "scroll-mx": f() }],
      "scroll-my": [{ "scroll-my": f() }],
      "scroll-ms": [{ "scroll-ms": f() }],
      "scroll-me": [{ "scroll-me": f() }],
      "scroll-mt": [{ "scroll-mt": f() }],
      "scroll-mr": [{ "scroll-mr": f() }],
      "scroll-mb": [{ "scroll-mb": f() }],
      "scroll-ml": [{ "scroll-ml": f() }],
      "scroll-p": [{ "scroll-p": f() }],
      "scroll-px": [{ "scroll-px": f() }],
      "scroll-py": [{ "scroll-py": f() }],
      "scroll-ps": [{ "scroll-ps": f() }],
      "scroll-pe": [{ "scroll-pe": f() }],
      "scroll-pt": [{ "scroll-pt": f() }],
      "scroll-pr": [{ "scroll-pr": f() }],
      "scroll-pb": [{ "scroll-pb": f() }],
      "scroll-pl": [{ "scroll-pl": f() }],
      "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
      "snap-stop": [{ snap: ["normal", "always"] }],
      "snap-type": [{ snap: ["none", "x", "y", "both"] }],
      "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
      touch: [{ touch: ["auto", "none", "manipulation"] }],
      "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
      "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{ select: ["none", "text", "all", "auto"] }],
      "will-change": [
        { "will-change": ["auto", "scroll", "contents", "transform", b] },
      ],
      fill: [{ fill: [e, "none"] }],
      "stroke-w": [{ stroke: [oe, de, je] }],
      stroke: [{ stroke: [e, "none"] }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: [
        "inset-x",
        "inset-y",
        "start",
        "end",
        "top",
        "right",
        "bottom",
        "left",
      ],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": [
        "fvn-ordinal",
        "fvn-slashed-zero",
        "fvn-figure",
        "fvn-spacing",
        "fvn-fraction",
      ],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: [
        "rounded-s",
        "rounded-e",
        "rounded-t",
        "rounded-r",
        "rounded-b",
        "rounded-l",
        "rounded-ss",
        "rounded-se",
        "rounded-ee",
        "rounded-es",
        "rounded-tl",
        "rounded-tr",
        "rounded-br",
        "rounded-bl",
      ],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": [
        "border-w-s",
        "border-w-e",
        "border-w-t",
        "border-w-r",
        "border-w-b",
        "border-w-l",
      ],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": [
        "border-color-t",
        "border-color-r",
        "border-color-b",
        "border-color-l",
      ],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": [
        "scroll-mx",
        "scroll-my",
        "scroll-ms",
        "scroll-me",
        "scroll-mt",
        "scroll-mr",
        "scroll-mb",
        "scroll-ml",
      ],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": [
        "scroll-px",
        "scroll-py",
        "scroll-ps",
        "scroll-pe",
        "scroll-pt",
        "scroll-pr",
        "scroll-pb",
        "scroll-pl",
      ],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"],
    },
    conflictingClassGroupModifiers: { "font-size": ["leading"] },
  };
}
function Dr(
  e,
  { cacheSize: r, prefix: t, separator: o, extend: i = {}, override: s = {} }
) {
  Re(e, "cacheSize", r), Re(e, "prefix", t), Re(e, "separator", o);
  for (const a in s) Jr(e[a], s[a]);
  for (const a in i) Zr(e[a], i[a]);
  return e;
}
function Re(e, r, t) {
  t !== void 0 && (e[r] = t);
}
function Jr(e, r) {
  if (r) for (const t in r) Re(e, t, r[t]);
}
function Zr(e, r) {
  if (r)
    for (const t in r) {
      const o = r[t];
      o !== void 0 && (e[t] = (e[t] || []).concat(o));
    }
}
function Qr(e, ...r) {
  return typeof e == "function" ? He(qe, e, ...r) : He(() => Dr(qe(), e), ...r);
}
const eo = He(qe);
var to = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  Tt = (e) => e || void 0,
  Ce = (...e) => Tt(wt(e).filter(Boolean).join(" ")),
  Ke = null,
  ne = {},
  Ue = !1,
  Se =
    (...e) =>
    (r) =>
      r.twMerge
        ? ((!Ke || Ue) &&
            ((Ue = !1),
            (Ke = W(ne)
              ? eo
              : Qr({
                  ...ne,
                  extend: {
                    theme: ne.theme,
                    classGroups: ne.classGroups,
                    conflictingClassGroupModifiers:
                      ne.conflictingClassGroupModifiers,
                    conflictingClassGroups: ne.conflictingClassGroups,
                    ...ne.extend,
                  },
                }))),
          Tt(Ke(Ce(e))))
        : Ce(e),
  mt = (e, r) => {
    for (let t in r)
      e.hasOwnProperty(t) ? (e[t] = Ce(e[t], r[t])) : (e[t] = r[t]);
    return e;
  },
  ro = (e, r) => {
    let {
        extend: t = null,
        slots: o = {},
        variants: i = {},
        compoundVariants: s = [],
        compoundSlots: a = [],
        defaultVariants: d = {},
      } = e,
      u = { ...to, ...r },
      v =
        t != null && t.base
          ? Ce(t.base, e == null ? void 0 : e.base)
          : e == null
          ? void 0
          : e.base,
      c = t != null && t.variants && !W(t.variants) ? kt(i, t.variants) : i,
      m =
        t != null && t.defaultVariants && !W(t.defaultVariants)
          ? { ...t.defaultVariants, ...d }
          : d;
    !W(u.twMergeConfig) &&
      !yr(u.twMergeConfig, ne) &&
      ((Ue = !0), (ne = u.twMergeConfig));
    let l = W(t == null ? void 0 : t.slots),
      y = W(o)
        ? {}
        : {
            base: Ce(
              e == null ? void 0 : e.base,
              l && (t == null ? void 0 : t.base)
            ),
            ...o,
          },
      A = l
        ? y
        : mt(
            { ...(t == null ? void 0 : t.slots) },
            W(y) ? { base: e == null ? void 0 : e.base } : y
          ),
      k = W(t == null ? void 0 : t.compoundVariants)
        ? s
        : _t(t == null ? void 0 : t.compoundVariants, s),
      S = (_) => {
        if (W(c) && W(o) && l)
          return Se(
            v,
            _ == null ? void 0 : _.class,
            _ == null ? void 0 : _.className
          )(u);
        if (k && !Array.isArray(k))
          throw new TypeError(
            `The "compoundVariants" prop must be an array. Received: ${typeof k}`
          );
        if (a && !Array.isArray(a))
          throw new TypeError(
            `The "compoundSlots" prop must be an array. Received: ${typeof a}`
          );
        let F = (f, w, h = [], P) => {
            let x = h;
            if (typeof w == "string")
              x = x.concat(
                ft(w)
                  .split(" ")
                  .map((C) => `${f}:${C}`)
              );
            else if (Array.isArray(w))
              x = x.concat(w.reduce((C, M) => C.concat(`${f}:${M}`), []));
            else if (typeof w == "object" && typeof P == "string") {
              for (let C in w)
                if (w.hasOwnProperty(C) && C === P) {
                  let M = w[C];
                  if (M && typeof M == "string") {
                    let z = ft(M);
                    x[P]
                      ? (x[P] = x[P].concat(
                          z.split(" ").map((L) => `${f}:${L}`)
                        ))
                      : (x[P] = z.split(" ").map((L) => `${f}:${L}`));
                  } else
                    Array.isArray(M) &&
                      M.length > 0 &&
                      (x[P] = M.reduce((z, L) => z.concat(`${f}:${L}`), []));
                }
            }
            return x;
          },
          q = (f, w = c, h = null, P = null) => {
            var x;
            let C = w[f];
            if (!C || W(C)) return null;
            let M =
              (x = P == null ? void 0 : P[f]) != null
                ? x
                : _ == null
                ? void 0
                : _[f];
            if (M === null) return null;
            let z = ut(M),
              L =
                (Array.isArray(u.responsiveVariants) &&
                  u.responsiveVariants.length > 0) ||
                u.responsiveVariants === !0,
              H = m == null ? void 0 : m[f],
              K = [];
            if (typeof z == "object" && L)
              for (let [ke, ze] of Object.entries(z)) {
                let Ne = C[ze];
                if (ke === "initial") {
                  H = ze;
                  continue;
                }
                (Array.isArray(u.responsiveVariants) &&
                  !u.responsiveVariants.includes(ke)) ||
                  (K = F(ke, Ne, K, h));
              }
            let Te = z != null && typeof z != "object" ? z : ut(H),
              _e = C[Te || "false"];
            return typeof K == "object" && typeof h == "string" && K[h]
              ? mt(K, _e)
              : K.length > 0
              ? (K.push(_e), K)
              : _e;
          },
          Q = () => (c ? Object.keys(c).map((f) => q(f, c)) : null),
          ie = (f, w) => {
            if (!c || typeof c != "object") return null;
            let h = new Array();
            for (let P in c) {
              let x = q(P, c, f, w),
                C = f === "base" && typeof x == "string" ? x : x && x[f];
              C && (h[h.length] = C);
            }
            return h;
          },
          ee = {};
        for (let f in _) _[f] !== void 0 && (ee[f] = _[f]);
        let ge = (f, w) => {
            var h;
            let P =
              typeof (_ == null ? void 0 : _[f]) == "object"
                ? { [f]: (h = _[f]) == null ? void 0 : h.initial }
                : {};
            return { ...m, ...ee, ...P, ...w };
          },
          re = (f = [], w) => {
            let h = [];
            for (let { class: P, className: x, ...C } of f) {
              let M = !0;
              for (let [z, L] of Object.entries(C)) {
                let H = ge(z, w);
                if (Array.isArray(L)) {
                  if (!L.includes(H[z])) {
                    M = !1;
                    break;
                  }
                } else if (H[z] !== L) {
                  M = !1;
                  break;
                }
              }
              M && (P && h.push(P), x && h.push(x));
            }
            return h;
          },
          me = (f) => {
            let w = re(k, f);
            if (!Array.isArray(w)) return w;
            let h = {};
            for (let P of w)
              if (
                (typeof P == "string" && (h.base = Se(h.base, P)(u)),
                typeof P == "object")
              )
                for (let [x, C] of Object.entries(P)) h[x] = Se(h[x], C)(u);
            return h;
          },
          le = (f) => {
            if (a.length < 1) return null;
            let w = {};
            for (let { slots: h = [], class: P, className: x, ...C } of a) {
              if (!W(C)) {
                let M = !0;
                for (let z of Object.keys(C)) {
                  let L = ge(z, f)[z];
                  if (
                    L === void 0 ||
                    (Array.isArray(C[z]) ? !C[z].includes(L) : C[z] !== L)
                  ) {
                    M = !1;
                    break;
                  }
                }
                if (!M) continue;
              }
              for (let M of h) (w[M] = w[M] || []), w[M].push([P, x]);
            }
            return w;
          };
        if (!W(o) || !l) {
          let f = {};
          if (typeof A == "object" && !W(A))
            for (let w of Object.keys(A))
              f[w] = (h) => {
                var P, x;
                return Se(
                  A[w],
                  ie(w, h),
                  ((P = me(h)) != null ? P : [])[w],
                  ((x = le(h)) != null ? x : [])[w],
                  h == null ? void 0 : h.class,
                  h == null ? void 0 : h.className
                )(u);
              };
          return f;
        }
        return Se(
          v,
          Q(),
          re(k),
          _ == null ? void 0 : _.class,
          _ == null ? void 0 : _.className
        )(u);
      },
      $ = () => {
        if (!(!c || typeof c != "object")) return Object.keys(c);
      };
    return (
      (S.variantKeys = $()),
      (S.extend = t),
      (S.base = v),
      (S.slots = A),
      (S.variants = c),
      (S.defaultVariants = m),
      (S.compoundSlots = a),
      (S.compoundVariants = k),
      S
    );
  };
const oo = ro({
  base: "block ease-out group-[:not(.is-visible)]:translate-y-full",
  variants: {
    duration: { "1.2s": "duration-[1.2s]", "1.4s": "duration-[1.4s]" },
    origin: {
      left: "origin-top-left group-[:not(.is-visible)]:rotate-6",
      right: "origin-top-right group-[:not(.is-visible)]:-rotate-6",
    },
  },
  defaultVariants: { duration: "1.2s", origin: "left" },
});
var no = V('<span class="block overflow-hidden"><span><!></span></span>');
function ao(e, r) {
  J(r, !0);
  var t = no(),
    o = p(t);
  G(() => te(o, oo()));
  var i = p(o);
  xt(() => r.children, i), T(e, t), Z();
}
var so = V(
  '<span class="block overflow-hidden"><span class="block origin-left will-change-transform"><!></span></span>'
);
function ue(e, r) {
  J(r, !0);
  const t = Qt(r, "progress", 3, 0);
  var o = so(),
    i = p(o),
    s = p(i);
  ao(s, {
    children: (a, d) => {
      var u = xe(),
        v = U(u);
      xt(() => r.children, v), T(a, u);
    },
  }),
    G(() =>
      Le(
        i,
        "transform",
        `translateY(${D(100 * t())}%) rotate(${D(6 * t())}deg)`
      )
    ),
    T(e, o),
    Z();
}
var io = V(
    '<span class="block translate-x-[calc(1.3em*var(--progress))] md:translate-x-[calc(1.5em*var(--progress))]"><!></span>'
  ),
  lo = V('<span class="block">We produce</span>'),
  co = V("your future and bring out", 1),
  po = V(`<span class="block">our client's potential</span>`),
  uo = V('<span class="block">to its fullest</span>'),
  fo = V(
    '<p><span class="mb-1 block overflow-hidden text-[8vw] text-[rgb(117,117,117)] mix-blend-difference md:text-[51px]"><!></span> <span class="font-aboreto origin-left scale-x-90 whitespace-nowrap text-[1.3vw] font-light uppercase tracking-wider md:text-[10px]"><!> <!> <!> <!></span></p>'
  );
function bt(e, r) {
  J(r, !0);
  var t = fo(),
    o = p(t),
    i = p(o);
  ue(i, {
    get progress() {
      return r.textProgress;
    },
    children: (c, m) => {
      var l = io(),
        y = p(l);
      tr(y, {}),
        G(() => pe(l, "style", `--progress: ${D(r.progress)};`)),
        T(c, l);
    },
  });
  var s = n(n(o, !0)),
    a = p(s);
  ue(a, {
    get progress() {
      return r.textProgress;
    },
    children: (c, m) => {
      var l = lo();
      G(() => Le(l, "transform", `translateX(${D(5.1 * r.progress)}em)`)),
        T(c, l);
    },
  });
  var d = n(n(a, !0));
  ue(d, {
    get progress() {
      return r.textProgress;
    },
    children: (c, m) => {
      var l = co();
      T(c, l);
    },
  });
  var u = n(n(d, !0));
  ue(u, {
    get progress() {
      return r.textProgress;
    },
    children: (c, m) => {
      var l = po();
      G(() => Le(l, "transform", `translateX(${D(1.7 * r.progress)}em)`)),
        T(c, l);
    },
  });
  var v = n(n(u, !0));
  ue(v, {
    get progress() {
      return r.textProgress;
    },
    children: (c, m) => {
      var l = uo();
      G(() => Le(l, "transform", `translateX(${D(4.7 * r.progress)}em)`)),
        T(c, l);
    },
  }),
    T(e, t),
    Z();
}
var vo = V("<span> </span>"),
  go = V('<div class="group contents"><div></div> <div></div></div> <!>', 1),
  mo = V("希望は、", 1),
  bo = V("すべての土地にある。", 1),
  ho = V("(SCROLL)", 1),
  xo = V(
    '<!> <div class="relative h-[300lvh] text-white mix-blend-difference"><div class="fixed inset-x-0 top-0 h-lvh"><div class="mx-auto h-full max-w-[1280px]"><div class="group mx-auto flex h-full w-full flex-col items-center justify-center max-md:px-5 md:max-w-[77%]"><div class="w-full overflow-hidden"><h5 class="font-classico text-[14.933vw] leading-[1.17em] md:text-[10.938vw] xl:text-[140px]"><span class="flex origin-left scale-x-[0.65] items-center py-[0.15em] leading-[0.9] *:flex *:overflow-hidden"><span><!></span> <span><!></span> <span><!></span> <span><!></span> <span class="w-[0.2em]"></span> <span><!></span> <span><!></span> <span><!></span> <span><!></span> <span class="w-[0.2em]"></span> <span><!></span> <span><!></span></span></h5></div> <div class="mt-[21vh] w-full overflow-hidden md:mt-[21vmax] lg:mt-[14%]"><h5 class="font-classico flex items-center justify-end text-[14.933vw] md:text-[10.938vw] xl:text-[140px]"><span class="flex origin-right scale-x-[0.65] items-center py-[0.15em] leading-[0.9] *:flex *:overflow-hidden"><span><!></span> <span><!></span> <span><!></span> <span><!></span> <span><!></span> <span class="w-[0.3em]"></span> <span><!></span> <span><!></span> <span><!></span> <span><!></span></span></h5></div></div></div></div> <div class="group fixed inset-x-0 top-0 h-lvh"><div class="absolute left-[calc(71.5vw+12px)] top-[17.616vh] w-[22.2vw] translate-x-[calc((-21.5vw-6px-11.1vw)*var(--progress))] md:left-[70.2vw] md:top-[10%] md:w-[172px] md:translate-x-[calc((-20.2vw-86px)*var(--progress))] lg:left-[63.2vw] lg:top-[5%] lg:translate-x-[calc((-13.2vw-86px)*var(--progress))]"><!></div> <div class="absolute left-5 top-1/2 -translate-y-1/2 overflow-hidden md:left-10"><p class="origin-left scale-x-[0.8] font-serif text-[4.133vw] uppercase tracking-wider md:text-[16px]"><!> <!></p></div> <div class="absolute right-5 top-1/2 -translate-y-1/2 overflow-hidden md:right-10"><p class="origin-right text-[2.4vw] uppercase md:text-[11px]"><!></p></div> <div class="absolute bottom-[19vh] left-3 w-[22.2vw] translate-x-[calc((-12px+50vw-11.1vw)*var(--progress))] md:bottom-[10%] md:left-10 md:w-[172px] md:translate-x-[calc((-40px+50vw-86px)*var(--progress))] lg:bottom-[5%]"><!></div></div></div>',
    1
  );
function yo(e, r) {
  J(r, !0);
  let t = Y(void 0),
    o = Y(void 0),
    i = Y(void 0),
    s = Y(!1),
    a = Y(!1),
    d = B({ progress: 0 }),
    u = B({ progress: 0 }),
    v = null,
    c = null;
  We(() => {
    E.isKvVisible &&
      (O(s, !0),
      setTimeout(async () => {
        (E.isLayoutVisible = !0), O(a, !0);
        const R = Oe.getEl("pageNode");
        Be.scrollTo(0, { immediate: !0, force: !0 }),
          await Ge(10),
          pr(R),
          await Ge(400),
          (E.isKvReady = !0),
          Be.start();
      }, 800));
  }),
    We(() => {
      if (E.isKvReady)
        return (
          (c = se.matchMedia()),
          c.add(
            {
              isDefault: "not all and (min-width: 768px)",
              isMd: "(min-width: 768px)",
              isLg: "(min-width: 1024px)",
            },
            (R) => {
              const { isMd: N, isLg: j } = R.conditions;
              return (
                (v = se
                  .timeline({
                    scrollTrigger: {
                      id: "kv",
                      trigger: g(t),
                      scrub: !0,
                      start: "top top",
                      end: "bottom top",
                      onEnter() {
                        se.set("#fluid-image", {
                          clipPath: "url(#fluid-image-clip-path-kv)",
                        });
                      },
                      onEnterBack() {
                        se.set("#fluid-image", {
                          clipPath: "url(#fluid-image-clip-path-kv)",
                        });
                      },
                    },
                    defaults: { ease: "power2.inOut" },
                  })
                  .set("#fluid-image-clip-path-kv", {
                    scaleX: j ? "0.25" : N ? "0.37" : "0.43",
                    scaleY: j ? "0.9" : N ? "0.8" : "0.65",
                    rotate: 0,
                  })
                  .to("#fluid-image-clip-path-kv", {
                    scaleX: "0.9",
                    scaleY: j ? "0.35" : N ? "0.28" : "0.25",
                  })
                  .to(
                    "#fluid-image-clip-path-kv",
                    { scaleX: 2.2, scaleY: 0, rotate: 90, duration: 0.68 },
                    ">0.15"
                  )
                  .fromTo(
                    g(o).querySelectorAll(":scope > span"),
                    { x: 0, scale: 1 },
                    {
                      stagger: -0.02,
                      x: (X) =>
                        N ? `${(X + 1.8) * 0.35}em` : `${(X + 1.8) * 0.23}em`,
                      scale: N ? 1.42 : 1.24,
                    },
                    0
                  )
                  .fromTo(
                    g(i).querySelectorAll(":scope > span"),
                    { x: 0, scale: 1 },
                    {
                      stagger: 0.02,
                      x: (X) =>
                        N
                          ? `-${(11.6 - X) * 0.36}em`
                          : `-${(11.5 - X) * 0.24}em`,
                      scale: N ? 1.42 : 1.24,
                    },
                    "<"
                  )
                  .to(
                    g(o).querySelectorAll(":scope > span"),
                    { stagger: -0.018, y: "117%", duration: 0.6 },
                    ">-0.05"
                  )
                  .to(
                    g(i).querySelectorAll(":scope > span"),
                    { stagger: -0.018, y: "117%", duration: 0.6 },
                    "<"
                  )
                  .to(d, { progress: 1 }, 0)
                  .to(u, { progress: 1 }, 0.7)),
                () => {
                  v == null || v.kill();
                }
              );
            }
          ),
          () => {
            c == null || c.kill();
          }
        );
    }),
    Me(() => {
      function R() {
        const j = window.matchMedia("(min-width: 768px)").matches,
          X = window.matchMedia("(min-width: 1024px)").matches;
        se.set("#fluid-image-clip-path-kv", {
          scaleX: X ? "0.25" : j ? "0.37" : "0.43",
          scaleY: X ? "0.9" : j ? "0.8" : "0.65",
          rotate: 0,
        }),
          se.set("#fluid-image", {
            clipPath: "url(#fluid-image-clip-path-kv)",
          });
      }
      R();
      const N = fr(() => {
        var j;
        (j = v == null ? void 0 : v.scrollTrigger) == null || j.refresh();
      });
      return (
        window.addEventListener("resize", N),
        () => {
          v == null || v.kill(),
            c == null || c.kill(),
            window.removeEventListener("resize", N);
        }
      );
    }),
    Jt(() => {
      E.isKvReady = !1;
    });
  var m = xo();
  function l(R, N = ct, j = ct) {
    var X = vo();
    G(() =>
      te(
        X,
        ve.e("delay-[--delay] duration-[1.2s] ease-out", {
          "group-[:not(.is-visible)]": "translate-y-full",
        })
      )
    );
    var Xe = p(X);
    G(() => {
      pe(X, "style", `--delay: ${D(j())}s`), ht(Xe, N());
    }),
      T(R, X);
  }
  var y = U(m);
  be(
    y,
    () => E.isIntroVisible,
    (R) => {
      var N = go(),
        j = U(N),
        X = p(j);
      G(() =>
        te(
          X,
          ve.e(
            "fixed inset-x-0 top-0 h-lvh bg-[#2f353a] duration-[1.2s] ease-in-out",
            { "group-[.is-intro-completed]": "translate-y-full" }
          )
        )
      );
      var Xe = n(n(X, !0));
      G(() =>
        te(
          Xe,
          ve.e(
            "fixed inset-x-0 top-px h-lvh origin-top bg-[#405260] ease-in-out",
            {
              "group-[.is-intro-intermediate]":
                "translate-y-[17.5%] scale-x-[0.43] scale-y-[0.65] duration-[1.2s] md:translate-y-[10%] md:scale-x-[0.37] md:scale-y-[0.8] lg:translate-y-[5%] lg:scale-x-[0.25] lg:scale-y-[0.9]",
              "group-[.is-intro-completed]":
                "translate-y-[17.5%] scale-x-[0.43] scale-y-0 delay-[0.15s] duration-[1.2s] md:translate-y-[10%] md:scale-x-[0.37] lg:translate-y-[5%] lg:scale-x-[0.25]",
            }
          )
        )
      );
      var Ut = n(n(j, !0));
      xr(Ut, {}),
        G(() => {
          fe(j, "is-intro-intermediate", E.introState === "intermediate"),
            fe(j, "is-intro-completed", E.introState === "completed");
        }),
        T(R, N);
    }
  );
  var A = n(n(y, !0));
  ye(
    A,
    (R) => O(t, B(R)),
    () => g(t)
  );
  var k = p(A),
    S = p(k),
    $ = p(S),
    _ = p($),
    F = p(_),
    q = p(F);
  ye(
    q,
    (R) => O(o, B(R)),
    () => g(o)
  );
  var Q = p(q),
    ie = p(Q);
  l(
    ie,
    () => "H",
    () => 1e-5
  );
  var ee = n(n(Q, !0)),
    ge = p(ee);
  l(
    ge,
    () => "O",
    () => 0.02
  );
  var re = n(n(ee, !0)),
    me = p(re);
  l(
    me,
    () => "P",
    () => 0.04
  );
  var le = n(n(re, !0)),
    f = p(le);
  l(
    f,
    () => "E",
    () => 0.06
  );
  var w = n(n(le, !0)),
    h = n(n(w, !0)),
    P = p(h);
  l(
    P,
    () => "L",
    () => 0.1
  );
  var x = n(n(h, !0)),
    C = p(x);
  l(
    C,
    () => "I",
    () => 0.12
  );
  var M = n(n(x, !0)),
    z = p(M);
  l(
    z,
    () => "E",
    () => 0.14
  );
  var L = n(n(M, !0)),
    H = p(L);
  l(
    H,
    () => "S",
    () => 0.16
  );
  var K = n(n(L, !0)),
    Te = n(n(K, !0)),
    _e = p(Te);
  l(
    _e,
    () => "I",
    () => 0.2
  );
  var ke = n(n(Te, !0)),
    ze = p(ke);
  l(
    ze,
    () => "N",
    () => 0.22
  );
  var Ne = n(n(_, !0)),
    zt = p(Ne),
    Je = p(zt);
  ye(
    Je,
    (R) => O(i, B(R)),
    () => g(i)
  );
  var Ze = p(Je),
    It = p(Ze);
  l(
    It,
    () => "E",
    () => 1e-5
  );
  var Qe = n(n(Ze, !0)),
    Et = p(Qe);
  l(
    Et,
    () => "V",
    () => 0.02
  );
  var et = n(n(Qe, !0)),
    Vt = p(et);
  l(
    Vt,
    () => "E",
    () => 0.04
  );
  var tt = n(n(et, !0)),
    jt = p(tt);
  l(
    jt,
    () => "R",
    () => 0.06
  );
  var rt = n(n(tt, !0)),
    Lt = p(rt);
  l(
    Lt,
    () => "Y",
    () => 0.08
  );
  var Rt = n(n(rt, !0)),
    ot = n(n(Rt, !0)),
    Gt = p(ot);
  l(
    Gt,
    () => "L",
    () => 0.12
  );
  var nt = n(n(ot, !0)),
    Ot = p(nt);
  l(
    Ot,
    () => "A",
    () => 0.14
  );
  var at = n(n(nt, !0)),
    Nt = p(at);
  l(
    Nt,
    () => "N",
    () => 0.16
  );
  var $t = n(n(at, !0)),
    Xt = p($t);
  l(
    Xt,
    () => "D",
    () => 0.18
  );
  var $e = n(n(k, !0)),
    st = p($e),
    Yt = p(st);
  bt(Yt, {
    get progress() {
      return d.progress;
    },
    get textProgress() {
      return u.progress;
    },
  });
  var it = n(n(st, !0)),
    Kt = p(it),
    lt = p(Kt);
  ue(lt, {
    get progress() {
      return u.progress;
    },
    children: (R, N) => {
      var j = mo();
      T(R, j);
    },
  });
  var Wt = n(n(lt, !0));
  ue(Wt, {
    get progress() {
      return u.progress;
    },
    children: (R, N) => {
      var j = bo();
      T(R, j);
    },
  });
  var dt = n(n(it, !0)),
    Bt = p(dt),
    Ft = p(Bt);
  ue(Ft, {
    get progress() {
      return u.progress;
    },
    children: (R, N) => {
      var j = ho();
      T(R, j);
    },
  });
  var Ht = n(n(dt, !0)),
    qt = p(Ht);
  bt(qt, {
    get progress() {
      return d.progress;
    },
    get textProgress() {
      return u.progress;
    },
  }),
    G(() => {
      fe($, "is-visible", g(s)),
        pe($e, "style", `--progress: ${D(d.progress)};`),
        fe($e, "is-visible", g(a));
    }),
    T(e, m),
    Z();
}
function wo(e, r, t) {
  let o = !1;
  r.getAll().forEach((i) => {
    i.isActive && (o = !0);
  }),
    t("/contact", { fadeOut: o });
}
var _o = V(
  '<div class="pointer-events-none fixed inset-x-0 top-0 z-20 h-dvh mix-blend-difference"><div class="group pointer-events-auto absolute bottom-8 right-5 md:bottom-10 md:right-10"><button type="button">CONTACT <span>→</span></button></div></div>'
);
function ko(e, r) {
  J(r, !0);
  let t = Y(void 0);
  Me(
    () => (
      Oe.setEl("topContact", g(t)),
      () => {
        Oe.setEl("topContact", null);
      }
    )
  );
  var o = _o();
  ye(
    o,
    (a) => O(t, B(a)),
    () => g(t)
  );
  var i = p(o),
    s = p(i);
  G(() =>
    te(
      s,
      ve.e(
        "top-[30px] flex h-[32px] w-[102px] items-center justify-center gap-1.5 rounded-[18px] border-[0.5px] border-[#f2f2f2] text-[9px] font-light text-white will-change-transform md:h-[38px] md:w-[125px] md:border md:text-[12px]",
        {
          "group-[.is-layout-visible]": "duration-700",
          "group-[:not(.is-layout-visible)]": "pointer-events-none opacity-0",
        }
      )
    )
  ),
    (s.__click = [wo, ur, sr]),
    G(() => fe(i, "is-layout-visible", E.isLayoutVisible)),
    T(e, o),
    Z();
}
Dt(["click"]);
var Po = V(
  `<svg class="sr-only"><defs><clipPath id="fluid-image-clip-path-kv" class="origin-center will-change-transform"><rect x="0" y="0"></rect></clipPath><clipPath id="fluid-image-clip-path-clipped-bg" class="origin-[50%_calc(50%+38px*var(--origin-p))] will-change-transform" style="--origin-p: 0; --w: 191.44px; --h: 158.74px; --XY: calc(50% - var(--w) / 2), calc(50% - var(--h) / 2);"><path style="transform: translate(var(--XY));" d="M25.1,158.7c0,0-10.8-13.2-12.4-39.7h-0.3C10.8,145.4,0,158.7,0,158.7H25.1L25.1,158.7z"></path><path style="transform: translate(var(--XY));" d="M191.4,158.7c0,0-10.8-13.2-12.4-39.7h-0.3c-1.6,26.3-12.4,39.7-12.4,39.7H191.4L191.4,158.7z"></path><path style="transform: translate(var(--XY));" d="M25,77.2c-2.4-3.7-3.7-8.2-3.7-12.8V0H10.7v66.8c0,4.6,1.3,9.1,3.7,12.9l50.5,79.1l0,0h12.4l-6.2-9.7L25,77.2z"></path><polygon style="transform: translate(var(--XY));" points="71.1,149.4 77.3,158.8 77.4,158.7 83.5,149.2 77.3,139.5 "></polygon><polygon style="transform: translate(var(--XY));" points="89.6,120.5 83.3,130.2 89.5,139.8 95.8,130.1 "></polygon><path style="transform: translate(var(--XY));" d="M133.5,71.2c2.8-4.4,4.4-9.7,4.4-15.1v-56h-10.7v53.6c0,5.4-1.5,10.7-4.4,15.1l-27.2,42.3l6.2,9.7L133.5,71.2L133.5,71.2z"></path><path style="transform: translate(var(--XY));" d="M46.4,72.5c-2.4-3.7-3.7-8.2-3.7-12.8V0H32.1v62.1c0,4.6,1.3,9,3.7,12.8l53.6,83.9h12.5L46.4,72.5L46.4,72.5z"></path><polygon style="transform: translate(var(--XY));" points="95.6,149.2 101.9,158.8 101.9,158.8 101.9,158.8 107.9,149.2 101.7,139.5 "></polygon><path style="transform: translate(var(--XY));" d="M159.1,60.9V0.1h-10.7v58.4c0,5.4-1.5,10.7-4.4,15.1l-36.2,56.3l6.2,9.6l40.7-63.6C157.6,71.6,159.1,66.3,159.1,60.9
    L159.1,60.9z"></path><path style="transform: translate(var(--XY));" d="M67.8,67.7c-2.4-3.7-3.7-8.2-3.7-12.8V0H53.4v57.3c0,4.6,1.3,9,3.7,12.8l56.9,88.7h12.5L67.8,67.7L67.8,67.7z"></path><path style="transform: translate(var(--XY));" d="M170.1,0v63.2c0,5.4-1.5,10.7-4.3,15.1l-45.6,70.9l6.3,9.6l50-78.1c2.8-4.4,4.3-9.7,4.3-15V0H170.1L170.1,0z"></path></clipPath><clipPath id="fluid-image-clip-path-news" class="origin-top will-change-transform [transform:translateY(calc((-100lvh-240px)*var(--yp)))_scaleX(calc(1-0.12*var(--xp)))] md:[transform:translateY(calc((-100lvh-260px)*var(--yp)))_scaleX(calc(1-0.12*var(--xp)))]" style="--yp: 0; --xp: 0;"><rect x="0" y="0"></rect></clipPath></defs></svg> <div id="fluid-image" class="pointer-events-none fixed inset-x-0 top-0 h-lvh" style="clip-path: url(#fluid-image-clip-path-kv);"></div>`,
  1
);
function Ao(e, r) {
  J(r, !0);
  let t = Y(void 0);
  Me(() => {
    const l = Oe.getEl("fluidImagePlaceholder");
    g(t).appendChild(l.firstElementChild);
    const y = g(t).firstElementChild,
      A = y.querySelector("video");
    return (
      E.fluidImage ? E.fluidImage.play() : A.play(),
      ir() &&
        se.set("#fluid-image-clip-path-clipped-bg", {
          transformOrigin: "0% calc(38px * var(--origin-p))",
        }),
      () => {
        E.fluidImage ? E.fluidImage.pause() : (A.pause(), (A.currentTime = 0)),
          l.appendChild(y);
      }
    );
  });
  var o = Po(),
    i = U(o),
    s = p(i),
    a = p(s),
    d = p(a),
    u = n(a),
    v = n(u),
    c = p(v),
    m = n(n(i, !0));
  ye(
    m,
    (l) => O(t, B(l)),
    () => g(t)
  ),
    G(() => {
      pe(i, "viewBox", `0 0 ${D(ae.width)} ${D(ae.height)}`),
        pe(d, "width", ae.width),
        pe(d, "height", ae.height),
        pe(c, "width", ae.width),
        pe(c, "height", ae.height);
    }),
    T(e, o),
    Z();
}
var So = V("<!> <!> <!> <!>", 1);
function Co(e, r) {
  J(r, !0);
  let t = Y(void 0),
    o = Y(void 0),
    i = Y(void 0),
    s = Y(void 0);
  Me(() => {
    setTimeout(async () => {
      O(
        t,
        B(
          (
            await Ee(
              () => import("./Message.DMBcDqdh.js"),
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
              import.meta.url
            )
          ).default
        )
      ),
        O(
          o,
          B(
            (
              await Ee(
                () => import("./ClippedBg.CeQQm4Kg.js"),
                __vite__mapDeps([9, 1, 2, 5, 3, 6, 4]),
                import.meta.url
              )
            ).default
          )
        ),
        O(
          i,
          B(
            (
              await Ee(
                () => import("./Message2.DTvRJ8ss.js"),
                __vite__mapDeps([10, 1, 2, 5, 3, 6, 4, 7, 11, 8, 12]),
                import.meta.url
              )
            ).default
          )
        ),
        O(
          s,
          B(
            (
              await Ee(
                () => import("./News.XetERlCe.js"),
                __vite__mapDeps([13, 1, 2, 5, 3, 6, 4, 11, 8, 12]),
                import.meta.url
              )
            ).default
          )
        );
    }, 10);
  });
  var a = So(),
    d = U(a);
  be(
    d,
    () => g(t),
    (m) => {
      var l = xe(),
        y = U(l);
      Ve(
        y,
        () => g(t),
        (A) => {
          A(y, {});
        }
      ),
        T(m, l);
    }
  );
  var u = n(n(d, !0));
  be(
    u,
    () => g(o),
    (m) => {
      var l = xe(),
        y = U(l);
      Ve(
        y,
        () => g(o),
        (A) => {
          A(y, {});
        }
      ),
        T(m, l);
    }
  );
  var v = n(n(u, !0));
  be(
    v,
    () => g(i),
    (m) => {
      var l = xe(),
        y = U(l);
      Ve(
        y,
        () => g(i),
        (A) => {
          A(y, {});
        }
      ),
        T(m, l);
    }
  );
  var c = n(n(v, !0));
  be(
    c,
    () => g(s),
    (m) => {
      var l = xe(),
        y = U(l);
      Ve(
        y,
        () => g(s),
        (A) => {
          A(y, {});
        }
      ),
        T(m, l);
    }
  ),
    T(e, a),
    Z();
}
var Mo = V("<!> <!> <!> <!> <!> <!>", 1),
  To = V("<!> <!>", 1);
function Xo(e, r) {
  J(r, !1);
  const t = {
    type: "website",
    title: "エムトラスト株式会社 | 不動産売買",
    canonical: "https://m-trust.co.jp",
  };
  Zt();
  var o = To(),
    i = U(o);
  rr(i, er(t));
  var s = n(n(i, !0));
  be(
    s,
    () => E.isModuleLoaded,
    (a) => {
      var d = Mo(),
        u = U(d);
      Ao(u, {});
      var v = n(n(u, !0));
      yo(v, {});
      var c = n(n(v, !0));
      be(
        c,
        () => E.isKvReady,
        (A) => {
          var k = xe(),
            S = U(k);
          Co(S, {}), T(A, k);
        }
      );
      var m = n(n(c, !0));
      ko(m, {});
      var l = n(n(m, !0));
      or(l, {});
      var y = n(n(l, !0));
      nr(y, { href: "/news/", text: "NEWS", number: "1" }), T(a, d);
    }
  ),
    T(e, o),
    Z();
}
export { Xo as _, fr as o };
