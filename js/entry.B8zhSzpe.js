import { N as de, o as he } from "./index-client.hmWN-4Cw.js";
const D = () => {};
function ln(t) {
  return t();
}
function pe(t) {
  for (var e = 0; e < t.length; e++) t[e]();
}
function qt(t, e, n) {
  if (t == null) return e(void 0), n && n(void 0), D;
  const r = t.subscribe(e, n);
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
new URL("sveltekit-internal://");
function ge(t, e) {
  return t === "/" || e === "ignore"
    ? t
    : e === "never"
    ? t.endsWith("/")
      ? t.slice(0, -1)
      : t
    : e === "always" && !t.endsWith("/")
    ? t + "/"
    : t;
}
function me(t) {
  return t.split("%25").map(decodeURI).join("%25");
}
function _e(t) {
  for (const e in t) t[e] = decodeURIComponent(t[e]);
  return t;
}
function dt({ href: t }) {
  return t.split("#")[0];
}
const ye = ["href", "pathname", "search", "toString", "toJSON"];
function we(t, e, n) {
  const r = new URL(t);
  Object.defineProperty(r, "searchParams", {
    value: new Proxy(r.searchParams, {
      get(a, o) {
        if (o === "get" || o === "getAll" || o === "has")
          return (s) => (n(s), a[o](s));
        e();
        const i = Reflect.get(a, o);
        return typeof i == "function" ? i.bind(a) : i;
      },
    }),
    enumerable: !0,
    configurable: !0,
  });
  for (const a of ye)
    Object.defineProperty(r, a, {
      get() {
        return e(), t[a];
      },
      enumerable: !0,
      configurable: !0,
    });
  return r;
}
const be = "/__data.json",
  ve = ".html__data.json";
function Ee(t) {
  return t.endsWith(".html")
    ? t.replace(/\.html$/, ve)
    : t.replace(/\/$/, "") + be;
}
function ke(...t) {
  let e = 5381;
  for (const n of t)
    if (typeof n == "string") {
      let r = n.length;
      for (; r; ) e = (e * 33) ^ n.charCodeAt(--r);
    } else if (ArrayBuffer.isView(n)) {
      const r = new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
      let a = r.length;
      for (; a; ) e = (e * 33) ^ r[--a];
    } else throw new TypeError("value must be a string or TypedArray");
  return (e >>> 0).toString(36);
}
function Se(t) {
  const e = atob(t),
    n = new Uint8Array(e.length);
  for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r);
  return n.buffer;
}
const Mt = window.fetch;
window.fetch = (t, e) => (
  (t instanceof Request
    ? t.method
    : (e == null ? void 0 : e.method) || "GET") !== "GET" && G.delete(yt(t)),
  Mt(t, e)
);
const G = new Map();
function Ae(t, e) {
  const n = yt(t, e),
    r = document.querySelector(n);
  if (r != null && r.textContent) {
    let { body: a, ...o } = JSON.parse(r.textContent);
    const i = r.getAttribute("data-ttl");
    return (
      i && G.set(n, { body: a, init: o, ttl: 1e3 * Number(i) }),
      r.getAttribute("data-b64") !== null && (a = Se(a)),
      Promise.resolve(new Response(a, o))
    );
  }
  return window.fetch(t, e);
}
function Re(t, e, n) {
  if (G.size > 0) {
    const r = yt(t, n),
      a = G.get(r);
    if (a) {
      if (
        performance.now() < a.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(
          n == null ? void 0 : n.cache
        )
      )
        return new Response(a.body, a.init);
      G.delete(r);
    }
  }
  return window.fetch(e, n);
}
function yt(t, e) {
  let r = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    t instanceof Request ? t.url : t
  )}]`;
  if ((e != null && e.headers) || (e != null && e.body)) {
    const a = [];
    e.headers && a.push([...new Headers(e.headers)].join(",")),
      e.body &&
        (typeof e.body == "string" || ArrayBuffer.isView(e.body)) &&
        a.push(e.body),
      (r += `[data-hash="${ke(...a)}"]`);
  }
  return r;
}
const Ie = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function Le(t) {
  const e = [];
  return {
    pattern:
      t === "/"
        ? /^\/$/
        : new RegExp(
            `^${xe(t)
              .map((r) => {
                const a = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);
                if (a)
                  return (
                    e.push({
                      name: a[1],
                      matcher: a[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const o = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);
                if (o)
                  return (
                    e.push({
                      name: o[1],
                      matcher: o[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!r) return;
                const i = r.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  i
                    .map((c, l) => {
                      if (l % 2) {
                        if (c.startsWith("x+"))
                          return ht(
                            String.fromCharCode(parseInt(c.slice(2), 16))
                          );
                        if (c.startsWith("u+"))
                          return ht(
                            String.fromCharCode(
                              ...c
                                .slice(2)
                                .split("-")
                                .map((f) => parseInt(f, 16))
                            )
                          );
                        const u = Ie.exec(c),
                          [, h, p, d, g] = u;
                        return (
                          e.push({
                            name: d,
                            matcher: g,
                            optional: !!h,
                            rest: !!p,
                            chained: p ? l === 1 && i[0] === "" : !1,
                          }),
                          p ? "(.*?)" : h ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return ht(c);
                    })
                    .join("")
                );
              })
              .join("")}/?$`
          ),
    params: e,
  };
}
function Pe(t) {
  return !/^\([^)]+\)$/.test(t);
}
function xe(t) {
  return t.slice(1).split("/").filter(Pe);
}
function Ue(t, e, n) {
  const r = {},
    a = t.slice(1),
    o = a.filter((s) => s !== void 0);
  let i = 0;
  for (let s = 0; s < e.length; s += 1) {
    const c = e[s];
    let l = a[s - i];
    if (
      (c.chained &&
        c.rest &&
        i &&
        ((l = a
          .slice(s - i, s + 1)
          .filter((u) => u)
          .join("/")),
        (i = 0)),
      l === void 0)
    ) {
      c.rest && (r[c.name] = "");
      continue;
    }
    if (!c.matcher || n[c.matcher](l)) {
      r[c.name] = l;
      const u = e[s + 1],
        h = a[s + 1];
      u && !u.rest && u.optional && h && c.chained && (i = 0),
        !u && !h && Object.keys(r).length === o.length && (i = 0);
      continue;
    }
    if (c.optional && c.chained) {
      i++;
      continue;
    }
    return;
  }
  if (!i) return r;
}
function ht(t) {
  return t
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function Ne({ nodes: t, server_loads: e, dictionary: n, matchers: r }) {
  const a = new Set(e);
  return Object.entries(n).map(([s, [c, l, u]]) => {
    const { pattern: h, params: p } = Le(s),
      d = {
        id: s,
        exec: (g) => {
          const f = h.exec(g);
          if (f) return Ue(f, p, r);
        },
        errors: [1, ...(u || [])].map((g) => t[g]),
        layouts: [0, ...(l || [])].map(i),
        leaf: o(c),
      };
    return (
      (d.errors.length = d.layouts.length =
        Math.max(d.errors.length, d.layouts.length)),
      d
    );
  });
  function o(s) {
    const c = s < 0;
    return c && (s = ~s), [c, t[s]];
  }
  function i(s) {
    return s === void 0 ? s : [a.has(s), t[s]];
  }
}
function Gt(t, e = JSON.parse) {
  try {
    return e(sessionStorage[t]);
  } catch {}
}
function Ut(t, e, n = JSON.stringify) {
  const r = n(e);
  try {
    sessionStorage[t] = r;
  } catch {}
}
const j = [];
function Te(t, e) {
  return { subscribe: at(t, e).subscribe };
}
function Oe(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
function at(t, e = D) {
  let n = null;
  const r = new Set();
  function a(s) {
    if (Oe(t, s) && ((t = s), n)) {
      const c = !j.length;
      for (const l of r) l[1](), j.push(l, t);
      if (c) {
        for (let l = 0; l < j.length; l += 2) j[l][0](j[l + 1]);
        j.length = 0;
      }
    }
  }
  function o(s) {
    a(s(t));
  }
  function i(s, c = D) {
    const l = [s, c];
    return (
      r.add(l),
      r.size === 1 && (n = e(a, o) || D),
      s(t),
      () => {
        r.delete(l), r.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: a, update: o, subscribe: i };
}
function fn(t, e, n) {
  const r = !Array.isArray(t),
    a = r ? [t] : t;
  if (!a.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = e.length < 2;
  return Te(n, (i, s) => {
    let c = !1;
    const l = [];
    let u = 0,
      h = D;
    const p = () => {
        if (u) return;
        h();
        const g = e(r ? l[0] : l, i, s);
        o ? i(g) : (h = typeof g == "function" ? g : D);
      },
      d = a.map((g, f) =>
        qt(
          g,
          (_) => {
            (l[f] = _), (u &= ~(1 << f)), c && p();
          },
          () => {
            u |= 1 << f;
          }
        )
      );
    return (
      (c = !0),
      p(),
      function () {
        pe(d), h(), (c = !1);
      }
    );
  });
}
function un(t) {
  let e;
  return qt(t, (n) => (e = n))(), e;
}
var Vt;
const P =
  ((Vt = globalThis.__sveltekit_1ful96d) == null ? void 0 : Vt.base) ?? "";
var Ft;
const je =
    ((Ft = globalThis.__sveltekit_1ful96d) == null ? void 0 : Ft.assets) ?? P,
  $e = "1717620630230",
  Bt = "sveltekit:snapshot",
  Ht = "sveltekit:scroll",
  Kt = "sveltekit:states",
  De = "sveltekit:pageurl",
  C = "sveltekit:history",
  H = "sveltekit:navigation",
  W = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
  Y = location.origin;
function wt(t) {
  if (t instanceof URL) return t;
  let e = document.baseURI;
  if (!e) {
    const n = document.getElementsByTagName("base");
    e = n.length ? n[0].href : document.URL;
  }
  return new URL(t, e);
}
function bt() {
  return { x: pageXOffset, y: pageYOffset };
}
function $(t, e) {
  return t.getAttribute(`data-sveltekit-${e}`);
}
const Nt = { ...W, "": W.hover };
function zt(t) {
  let e = t.assignedSlot ?? t.parentNode;
  return (e == null ? void 0 : e.nodeType) === 11 && (e = e.host), e;
}
function Yt(t, e) {
  for (; t && t !== e; ) {
    if (t.nodeName.toUpperCase() === "A" && t.hasAttribute("href")) return t;
    t = zt(t);
  }
}
function gt(t, e) {
  let n;
  try {
    n = new URL(
      t instanceof SVGAElement ? t.href.baseVal : t.href,
      document.baseURI
    );
  } catch {}
  const r = t instanceof SVGAElement ? t.target.baseVal : t.target,
    a =
      !n ||
      !!r ||
      ot(n, e) ||
      (t.getAttribute("rel") || "").split(/\s+/).includes("external"),
    o = (n == null ? void 0 : n.origin) === Y && t.hasAttribute("download");
  return { url: n, external: a, target: r, download: o };
}
function X(t) {
  let e = null,
    n = null,
    r = null,
    a = null,
    o = null,
    i = null,
    s = t;
  for (; s && s !== document.documentElement; )
    r === null && (r = $(s, "preload-code")),
      a === null && (a = $(s, "preload-data")),
      e === null && (e = $(s, "keepfocus")),
      n === null && (n = $(s, "noscroll")),
      o === null && (o = $(s, "reload")),
      i === null && (i = $(s, "replacestate")),
      (s = zt(s));
  function c(l) {
    switch (l) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return;
    }
  }
  return {
    preload_code: Nt[r ?? "off"],
    preload_data: Nt[a ?? "off"],
    keepfocus: c(e),
    noscroll: c(n),
    reload: c(o),
    replace_state: c(i),
  };
}
function Tt(t) {
  const e = at(t);
  let n = !0;
  function r() {
    (n = !0), e.update((i) => i);
  }
  function a(i) {
    (n = !1), e.set(i);
  }
  function o(i) {
    let s;
    return e.subscribe((c) => {
      (s === void 0 || (n && c !== s)) && i((s = c));
    });
  }
  return { notify: r, set: a, subscribe: o };
}
function Ce() {
  const { set: t, subscribe: e } = at(!1);
  let n;
  async function r() {
    clearTimeout(n);
    try {
      const a = await fetch(`${je}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!a.ok) return !1;
      const i = (await a.json()).version !== $e;
      return i && (t(!0), clearTimeout(n)), i;
    } catch {
      return !1;
    }
  }
  return { subscribe: e, check: r };
}
function ot(t, e) {
  return t.origin !== Y || !t.pathname.startsWith(e);
}
const Ve = -1,
  Fe = -2,
  qe = -3,
  Me = -4,
  Ge = -5,
  Be = -6;
function He(t, e) {
  if (typeof t == "number") return a(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const n = t,
    r = Array(n.length);
  function a(o, i = !1) {
    if (o === Ve) return;
    if (o === qe) return NaN;
    if (o === Me) return 1 / 0;
    if (o === Ge) return -1 / 0;
    if (o === Be) return -0;
    if (i) throw new Error("Invalid input");
    if (o in r) return r[o];
    const s = n[o];
    if (!s || typeof s != "object") r[o] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == "string") {
        const c = s[0],
          l = e == null ? void 0 : e[c];
        if (l) return (r[o] = l(a(s[1])));
        switch (c) {
          case "Date":
            r[o] = new Date(s[1]);
            break;
          case "Set":
            const u = new Set();
            r[o] = u;
            for (let d = 1; d < s.length; d += 1) u.add(a(s[d]));
            break;
          case "Map":
            const h = new Map();
            r[o] = h;
            for (let d = 1; d < s.length; d += 2) h.set(a(s[d]), a(s[d + 1]));
            break;
          case "RegExp":
            r[o] = new RegExp(s[1], s[2]);
            break;
          case "Object":
            r[o] = Object(s[1]);
            break;
          case "BigInt":
            r[o] = BigInt(s[1]);
            break;
          case "null":
            const p = Object.create(null);
            r[o] = p;
            for (let d = 1; d < s.length; d += 2) p[s[d]] = a(s[d + 1]);
            break;
          default:
            throw new Error(`Unknown type ${c}`);
        }
      } else {
        const c = new Array(s.length);
        r[o] = c;
        for (let l = 0; l < s.length; l += 1) {
          const u = s[l];
          u !== Fe && (c[l] = a(u));
        }
      }
    else {
      const c = {};
      r[o] = c;
      for (const l in s) {
        const u = s[l];
        c[l] = a(u);
      }
    }
    return r[o];
  }
  return a(0);
}
const Jt = new Set([
  "load",
  "prerender",
  "csr",
  "ssr",
  "trailingSlash",
  "config",
]);
[...Jt];
const Ke = new Set([...Jt]);
[...Ke];
function ze(t) {
  return t.filter((e) => e != null);
}
class st {
  constructor(e, n) {
    (this.status = e),
      typeof n == "string"
        ? (this.body = { message: n })
        : n
        ? (this.body = n)
        : (this.body = { message: `Error: ${e}` });
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Wt {
  constructor(e, n) {
    (this.status = e), (this.location = n);
  }
}
class vt extends Error {
  constructor(e, n, r) {
    super(r), (this.status = e), (this.text = n);
  }
}
const Ye = "x-sveltekit-invalidated",
  Je = "x-sveltekit-trailing-slash";
function Z(t) {
  return t instanceof st || t instanceof vt ? t.status : 500;
}
function We(t) {
  return t instanceof vt ? t.text : "Internal Error";
}
const O = Gt(Ht) ?? {},
  K = Gt(Bt) ?? {},
  U = { url: Tt({}), page: Tt({}), navigating: at(null), updated: Ce() };
function Et(t) {
  O[t] = bt();
}
function Xe(t, e) {
  let n = t + 1;
  for (; O[n]; ) delete O[n], (n += 1);
  for (n = e + 1; K[n]; ) delete K[n], (n += 1);
}
function F(t) {
  return (location.href = t.href), new Promise(() => {});
}
function Ot() {}
let it, mt, Q, x, _t, q;
const Xt = [],
  tt = [];
let I = null;
const kt = [],
  Ze = [];
let T = [],
  y = { branch: [], error: null, url: null },
  St = !1,
  et = !1,
  jt = !0,
  z = !1,
  M = !1,
  Zt = !1,
  At = !1,
  Rt,
  S,
  L,
  R,
  nt;
const B = new Set();
async function dn(t, e, n) {
  var a, o;
  document.URL !== location.href && (location.href = location.href),
    (q = t),
    (it = Ne(t)),
    (x = document.documentElement),
    (_t = e),
    (mt = t.nodes[0]),
    (Q = t.nodes[1]),
    mt(),
    Q(),
    (S = (a = history.state) == null ? void 0 : a[C]),
    (L = (o = history.state) == null ? void 0 : o[H]),
    S ||
      ((S = L = Date.now()),
      history.replaceState({ ...history.state, [C]: S, [H]: L }, ""));
  const r = O[S];
  r && ((history.scrollRestoration = "manual"), scrollTo(r.x, r.y)),
    n ? await on(_t, n) : rn(location.href, { replaceState: !0 }),
    an();
}
function Qe() {
  (Xt.length = 0), (At = !1);
}
function Qt(t) {
  tt.some((e) => (e == null ? void 0 : e.snapshot)) &&
    (K[t] = tt.map((e) => {
      var n;
      return (n = e == null ? void 0 : e.snapshot) == null
        ? void 0
        : n.capture();
    }));
}
function te(t) {
  var e;
  (e = K[t]) == null ||
    e.forEach((n, r) => {
      var a, o;
      (o = (a = tt[r]) == null ? void 0 : a.snapshot) == null || o.restore(n);
    });
}
function $t() {
  Et(S), Ut(Ht, O), Qt(L), Ut(Bt, K);
}
async function ee(t, e, n, r) {
  return J({
    type: "goto",
    url: wt(t),
    keepfocus: e.keepFocus,
    noscroll: e.noScroll,
    replace_state: e.replaceState,
    state: e.state,
    redirect_count: n,
    nav_token: r,
    accept: () => {
      e.invalidateAll && (At = !0);
    },
  });
}
async function ne(t) {
  if (t.id !== (I == null ? void 0 : I.id)) {
    const e = {};
    B.add(e),
      (I = {
        id: t.id,
        token: e,
        promise: ae({ ...t, preload: e }).then(
          (n) => (
            B.delete(e), n.type === "loaded" && n.state.error && (I = null), n
          )
        ),
      });
  }
  return I.promise;
}
async function pt(t) {
  const e = it.find((n) => n.exec(oe(t)));
  e &&
    (await Promise.all(
      [...e.layouts, e.leaf].map((n) => (n == null ? void 0 : n[1]()))
    ));
}
function re(t, e, n) {
  var o;
  y = t.state;
  const r = document.querySelector("style[data-sveltekit]");
  r && r.remove(),
    (R = t.props.page),
    (Rt = new q.root({
      target: e,
      props: { ...t.props, stores: U, components: tt },
      hydrate: n,
    })),
    te(L);
  const a = {
    from: null,
    to: {
      params: y.params,
      route: { id: ((o = y.route) == null ? void 0 : o.id) ?? null },
      url: new URL(location.href),
    },
    willUnload: !1,
    type: "enter",
    complete: Promise.resolve(),
  };
  T.forEach((i) => i(a)), (et = !0);
}
async function rt({
  url: t,
  params: e,
  branch: n,
  status: r,
  error: a,
  route: o,
  form: i,
}) {
  let s = "never";
  if (P && (t.pathname === P || t.pathname === P + "/")) s = "always";
  else
    for (const d of n)
      (d == null ? void 0 : d.slash) !== void 0 && (s = d.slash);
  (t.pathname = ge(t.pathname, s)), (t.search = t.search);
  const c = {
    type: "loaded",
    state: { url: t, params: e, branch: n, error: a, route: o },
    props: { constructors: ze(n).map((d) => d.node.component), page: R },
  };
  i !== void 0 && (c.props.form = i);
  let l = {},
    u = !R,
    h = 0;
  for (let d = 0; d < Math.max(n.length, y.branch.length); d += 1) {
    const g = n[d],
      f = y.branch[d];
    (g == null ? void 0 : g.data) !== (f == null ? void 0 : f.data) && (u = !0),
      g &&
        ((l = { ...l, ...g.data }), u && (c.props[`data_${h}`] = l), (h += 1));
  }
  return (
    (!y.url ||
      t.href !== y.url.href ||
      y.error !== a ||
      (i !== void 0 && i !== R.form) ||
      u) &&
      (c.props.page = {
        error: a,
        params: e,
        route: { id: (o == null ? void 0 : o.id) ?? null },
        state: {},
        status: r,
        url: new URL(t),
        form: i ?? null,
        data: u ? l : R.data,
      }),
    c
  );
}
async function It({
  loader: t,
  parent: e,
  url: n,
  params: r,
  route: a,
  server_data_node: o,
}) {
  var u, h, p;
  let i = null,
    s = !0;
  const c = {
      dependencies: new Set(),
      params: new Set(),
      parent: !1,
      route: !1,
      url: !1,
      search_params: new Set(),
    },
    l = await t();
  if ((u = l.universal) != null && u.load) {
    let d = function (...f) {
      for (const _ of f) {
        const { href: v } = new URL(_, n);
        c.dependencies.add(v);
      }
    };
    const g = {
      route: new Proxy(a, { get: (f, _) => (s && (c.route = !0), f[_]) }),
      params: new Proxy(r, { get: (f, _) => (s && c.params.add(_), f[_]) }),
      data: (o == null ? void 0 : o.data) ?? null,
      url: we(
        n,
        () => {
          s && (c.url = !0);
        },
        (f) => {
          s && c.search_params.add(f);
        }
      ),
      async fetch(f, _) {
        let v;
        f instanceof Request
          ? ((v = f.url),
            (_ = {
              body:
                f.method === "GET" || f.method === "HEAD"
                  ? void 0
                  : await f.blob(),
              cache: f.cache,
              credentials: f.credentials,
              headers: f.headers,
              integrity: f.integrity,
              keepalive: f.keepalive,
              method: f.method,
              mode: f.mode,
              redirect: f.redirect,
              referrer: f.referrer,
              referrerPolicy: f.referrerPolicy,
              signal: f.signal,
              ..._,
            }))
          : (v = f);
        const A = new URL(v, n);
        return (
          s && d(A.href),
          A.origin === n.origin && (v = A.href.slice(n.origin.length)),
          et ? Re(v, A.href, _) : Ae(v, _)
        );
      },
      setHeaders: () => {},
      depends: d,
      parent() {
        return s && (c.parent = !0), e();
      },
      untrack(f) {
        s = !1;
        try {
          return f();
        } finally {
          s = !0;
        }
      },
    };
    i = (await l.universal.load.call(null, g)) ?? null;
  }
  return {
    node: l,
    loader: t,
    server: o,
    universal:
      (h = l.universal) != null && h.load
        ? { type: "data", data: i, uses: c }
        : null,
    data: i ?? (o == null ? void 0 : o.data) ?? null,
    slash:
      ((p = l.universal) == null ? void 0 : p.trailingSlash) ??
      (o == null ? void 0 : o.slash),
  };
}
function Dt(t, e, n, r, a, o) {
  if (At) return !0;
  if (!a) return !1;
  if ((a.parent && t) || (a.route && e) || (a.url && n)) return !0;
  for (const i of a.search_params) if (r.has(i)) return !0;
  for (const i of a.params) if (o[i] !== y.params[i]) return !0;
  for (const i of a.dependencies) if (Xt.some((s) => s(new URL(i)))) return !0;
  return !1;
}
function Lt(t, e) {
  return (t == null ? void 0 : t.type) === "data"
    ? t
    : (t == null ? void 0 : t.type) === "skip"
    ? e ?? null
    : null;
}
function tn(t, e) {
  if (!t) return new Set(e.searchParams.keys());
  const n = new Set([...t.searchParams.keys(), ...e.searchParams.keys()]);
  for (const r of n) {
    const a = t.searchParams.getAll(r),
      o = e.searchParams.getAll(r);
    a.every((i) => o.includes(i)) &&
      o.every((i) => a.includes(i)) &&
      n.delete(r);
  }
  return n;
}
function Ct({ error: t, url: e, route: n, params: r }) {
  return {
    type: "loaded",
    state: { error: t, url: e, route: n, params: r, branch: [] },
    props: { page: R, constructors: [] },
  };
}
async function ae({
  id: t,
  invalidating: e,
  url: n,
  params: r,
  route: a,
  preload: o,
}) {
  if ((I == null ? void 0 : I.id) === t) return B.delete(I.token), I.promise;
  const { errors: i, layouts: s, leaf: c } = a,
    l = [...s, c];
  i.forEach((m) => (m == null ? void 0 : m().catch(() => {}))),
    l.forEach((m) => (m == null ? void 0 : m[1]().catch(() => {})));
  let u = null;
  const h = y.url ? t !== y.url.pathname + y.url.search : !1,
    p = y.route ? a.id !== y.route.id : !1,
    d = tn(y.url, n);
  let g = !1;
  const f = l.map((m, b) => {
    var N;
    const E = y.branch[b],
      k =
        !!(m != null && m[0]) &&
        ((E == null ? void 0 : E.loader) !== m[1] ||
          Dt(g, p, h, d, (N = E.server) == null ? void 0 : N.uses, r));
    return k && (g = !0), k;
  });
  if (f.some(Boolean)) {
    try {
      u = await le(n, f);
    } catch (m) {
      const b = await V(m, { url: n, params: r, route: { id: t } });
      return B.has(o)
        ? Ct({ error: b, url: n, params: r, route: a })
        : ct({ status: Z(m), error: b, url: n, route: a });
    }
    if (u.type === "redirect") return u;
  }
  const _ = u == null ? void 0 : u.nodes;
  let v = !1;
  const A = l.map(async (m, b) => {
    var ft;
    if (!m) return;
    const E = y.branch[b],
      k = _ == null ? void 0 : _[b];
    if (
      (!k || k.type === "skip") &&
      m[1] === (E == null ? void 0 : E.loader) &&
      !Dt(v, p, h, d, (ft = E.universal) == null ? void 0 : ft.uses, r)
    )
      return E;
    if (((v = !0), (k == null ? void 0 : k.type) === "error")) throw k;
    return It({
      loader: m[1],
      url: n,
      params: r,
      route: a,
      parent: async () => {
        var xt;
        const Pt = {};
        for (let ut = 0; ut < b; ut += 1)
          Object.assign(Pt, (xt = await A[ut]) == null ? void 0 : xt.data);
        return Pt;
      },
      server_data_node: Lt(
        k === void 0 && m[0] ? { type: "skip" } : k ?? null,
        m[0] ? (E == null ? void 0 : E.server) : void 0
      ),
    });
  });
  for (const m of A) m.catch(() => {});
  const w = [];
  for (let m = 0; m < l.length; m += 1)
    if (l[m])
      try {
        w.push(await A[m]);
      } catch (b) {
        if (b instanceof Wt) return { type: "redirect", location: b.location };
        if (B.has(o))
          return Ct({
            error: await V(b, { params: r, url: n, route: { id: a.id } }),
            url: n,
            params: r,
            route: a,
          });
        let E = Z(b),
          k;
        if (_ != null && _.includes(b)) (E = b.status ?? E), (k = b.error);
        else if (b instanceof st) k = b.body;
        else {
          if (await U.updated.check()) return await F(n);
          k = await V(b, { params: r, url: n, route: { id: a.id } });
        }
        const N = await en(m, w, i);
        return N
          ? await rt({
              url: n,
              params: r,
              branch: w.slice(0, N.idx).concat(N.node),
              status: E,
              error: k,
              route: a,
            })
          : await ie(n, { id: a.id }, k, E);
      }
    else w.push(void 0);
  return await rt({
    url: n,
    params: r,
    branch: w,
    status: 200,
    error: null,
    route: a,
    form: e ? void 0 : null,
  });
}
async function en(t, e, n) {
  for (; t--; )
    if (n[t]) {
      let r = t;
      for (; !e[r]; ) r -= 1;
      try {
        return {
          idx: r + 1,
          node: {
            node: await n[t](),
            loader: n[t],
            data: {},
            server: null,
            universal: null,
          },
        };
      } catch {
        continue;
      }
    }
}
async function ct({ status: t, error: e, url: n, route: r }) {
  const a = {};
  let o = null;
  if (q.server_loads[0] === 0)
    try {
      const l = await le(n, [!0]);
      if (l.type !== "data" || (l.nodes[0] && l.nodes[0].type !== "data"))
        throw 0;
      o = l.nodes[0] ?? null;
    } catch {
      (n.origin !== Y || n.pathname !== location.pathname || St) &&
        (await F(n));
    }
  const s = await It({
      loader: mt,
      url: n,
      params: a,
      route: r,
      parent: () => Promise.resolve({}),
      server_data_node: Lt(o),
    }),
    c = {
      node: await Q(),
      loader: Q,
      universal: null,
      server: null,
      data: null,
    };
  return await rt({
    url: n,
    params: a,
    branch: [s, c],
    status: t,
    error: e,
    route: null,
  });
}
function lt(t, e) {
  if (!t || ot(t, P)) return;
  let n;
  try {
    n = q.hooks.reroute({ url: new URL(t) }) ?? t.pathname;
  } catch {
    return;
  }
  const r = oe(n);
  for (const a of it) {
    const o = a.exec(r);
    if (o)
      return {
        id: t.pathname + t.search,
        invalidating: e,
        route: a,
        params: _e(o),
        url: t,
      };
  }
}
function oe(t) {
  return me(t.slice(P.length) || "/");
}
function se({ url: t, type: e, intent: n, delta: r }) {
  let a = !1;
  const o = ue(y, n, t, e);
  r !== void 0 && (o.navigation.delta = r);
  const i = {
    ...o.navigation,
    cancel: () => {
      (a = !0), o.reject(new Error("navigation cancelled"));
    },
  };
  return z || kt.forEach((s) => s(i)), a ? null : o;
}
async function J({
  type: t,
  url: e,
  popped: n,
  keepfocus: r,
  noscroll: a,
  replace_state: o,
  state: i = {},
  redirect_count: s = 0,
  nav_token: c = {},
  accept: l = Ot,
  block: u = Ot,
}) {
  const h = lt(e, !1),
    p = se({ url: e, type: t, delta: n == null ? void 0 : n.delta, intent: h });
  if (!p) {
    u();
    return;
  }
  const d = S,
    g = L;
  l(), (z = !0), et && U.navigating.set(p.navigation), (nt = c);
  let f = h && (await ae(h));
  if (!f) {
    if (ot(e, P)) return await F(e);
    f = await ie(
      e,
      { id: null },
      await V(new vt(404, "Not Found", `Not found: ${e.pathname}`), {
        url: e,
        params: {},
        route: { id: null },
      }),
      404
    );
  }
  if (((e = (h == null ? void 0 : h.url) || e), nt !== c))
    return p.reject(new Error("navigation aborted")), !1;
  if (f.type === "redirect")
    if (s >= 20)
      f = await ct({
        status: 500,
        error: await V(new Error("Redirect loop"), {
          url: e,
          params: {},
          route: { id: null },
        }),
        url: e,
        route: { id: null },
      });
    else return ee(new URL(f.location, e).href, {}, s + 1, c), !1;
  else f.props.page.status >= 400 && (await U.updated.check()) && (await F(e));
  if (
    (Qe(),
    Et(d),
    Qt(g),
    f.props.page.url.pathname !== e.pathname &&
      (e.pathname = f.props.page.url.pathname),
    (i = n ? n.state : i),
    !n)
  ) {
    const w = o ? 0 : 1,
      m = { [C]: (S += w), [H]: (L += w), [Kt]: i };
    (o ? history.replaceState : history.pushState).call(history, m, "", e),
      o || Xe(S, L);
  }
  if (((I = null), (f.props.page.state = i), et)) {
    (y = f.state), f.props.page && (f.props.page.url = e);
    const w = (await Promise.all(Ze.map((m) => m(p.navigation)))).filter(
      (m) => typeof m == "function"
    );
    if (w.length > 0) {
      let m = function () {
        T = T.filter((b) => !w.includes(b));
      };
      w.push(m), T.push(...w);
    }
    Rt.$set(f.props), (Zt = !0);
  } else re(f, _t, !1);
  const { activeElement: _ } = document;
  await de();
  const v = n ? n.scroll : a ? bt() : null;
  if (jt) {
    const w =
      e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
    v ? scrollTo(v.x, v.y) : w ? w.scrollIntoView() : scrollTo(0, 0);
  }
  const A =
    document.activeElement !== _ && document.activeElement !== document.body;
  !r && !A && sn(),
    (jt = !0),
    f.props.page && (R = f.props.page),
    (z = !1),
    t === "popstate" && te(L),
    p.fulfil(void 0),
    T.forEach((w) => w(p.navigation)),
    U.navigating.set(null);
}
async function ie(t, e, n, r) {
  return t.origin === Y && t.pathname === location.pathname && !St
    ? await ct({ status: r, error: n, url: t, route: e })
    : await F(t);
}
function nn() {
  let t;
  x.addEventListener("mousemove", (o) => {
    const i = o.target;
    clearTimeout(t),
      (t = setTimeout(() => {
        r(i, 2);
      }, 20));
  });
  function e(o) {
    r(o.composedPath()[0], 1);
  }
  x.addEventListener("mousedown", e),
    x.addEventListener("touchstart", e, { passive: !0 });
  const n = new IntersectionObserver(
    (o) => {
      for (const i of o)
        i.isIntersecting && (pt(i.target.href), n.unobserve(i.target));
    },
    { threshold: 0 }
  );
  function r(o, i) {
    const s = Yt(o, x);
    if (!s) return;
    const { url: c, external: l, download: u } = gt(s, P);
    if (l || u) return;
    const h = X(s);
    if (!h.reload)
      if (i <= h.preload_data) {
        const p = lt(c, !1);
        p && ne(p);
      } else i <= h.preload_code && pt(c.pathname);
  }
  function a() {
    n.disconnect();
    for (const o of x.querySelectorAll("a")) {
      const { url: i, external: s, download: c } = gt(o, P);
      if (s || c) continue;
      const l = X(o);
      l.reload ||
        (l.preload_code === W.viewport && n.observe(o),
        l.preload_code === W.eager && pt(i.pathname));
    }
  }
  T.push(a), a();
}
function V(t, e) {
  if (t instanceof st) return t.body;
  const n = Z(t),
    r = We(t);
  return (
    q.hooks.handleError({ error: t, event: e, status: n, message: r }) ?? {
      message: r,
    }
  );
}
function ce(t, e) {
  he(
    () => (
      t.push(e),
      () => {
        const n = t.indexOf(e);
        t.splice(n, 1);
      }
    )
  );
}
function hn(t) {
  ce(T, t);
}
function pn(t) {
  ce(kt, t);
}
function rn(t, e = {}) {
  return (
    (t = wt(t)),
    t.origin !== Y
      ? Promise.reject(new Error("goto: invalid URL"))
      : ee(t, e, 0)
  );
}
async function gn(t) {
  const e = wt(t),
    n = lt(e, !1);
  if (!n)
    throw new Error(
      `Attempted to preload a URL that does not belong to this app: ${e}`
    );
  const r = await ne(n);
  if (r.type === "redirect") return { type: r.type, location: r.location };
  const { status: a, data: o } = r.props.page ?? R;
  return { type: r.type, status: a, data: o };
}
function an() {
  var e;
  (history.scrollRestoration = "manual"),
    addEventListener("beforeunload", (n) => {
      let r = !1;
      if (($t(), !z)) {
        const a = ue(y, void 0, null, "leave"),
          o = {
            ...a.navigation,
            cancel: () => {
              (r = !0), a.reject(new Error("navigation cancelled"));
            },
          };
        kt.forEach((i) => i(o));
      }
      r
        ? (n.preventDefault(), (n.returnValue = ""))
        : (history.scrollRestoration = "auto");
    }),
    addEventListener("visibilitychange", () => {
      document.visibilityState === "hidden" && $t();
    }),
    ((e = navigator.connection) != null && e.saveData) || nn(),
    x.addEventListener("click", (n) => {
      var p;
      if (
        n.button ||
        n.which !== 1 ||
        n.metaKey ||
        n.ctrlKey ||
        n.shiftKey ||
        n.altKey ||
        n.defaultPrevented
      )
        return;
      const r = Yt(n.composedPath()[0], x);
      if (!r) return;
      const { url: a, external: o, target: i, download: s } = gt(r, P);
      if (!a) return;
      if (i === "_parent" || i === "_top") {
        if (window.parent !== window) return;
      } else if (i && i !== "_self") return;
      const c = X(r);
      if (
        (!(r instanceof SVGAElement) &&
          a.protocol !== location.protocol &&
          !(a.protocol === "https:" || a.protocol === "http:")) ||
        s
      )
        return;
      if (o || c.reload) {
        se({ url: a, type: "link" }) ? (z = !0) : n.preventDefault();
        return;
      }
      const [u, h] = a.href.split("#");
      if (h !== void 0 && u === dt(location)) {
        const [, d] = y.url.href.split("#");
        if (d === h) {
          n.preventDefault(),
            h === "" ||
            (h === "top" && r.ownerDocument.getElementById("top") === null)
              ? window.scrollTo({ top: 0 })
              : (p = r.ownerDocument.getElementById(h)) == null ||
                p.scrollIntoView();
          return;
        }
        if (((M = !0), Et(S), t(a), !c.replace_state)) return;
        M = !1;
      }
      n.preventDefault(),
        J({
          type: "link",
          url: a,
          keepfocus: c.keepfocus,
          noscroll: c.noscroll,
          replace_state: c.replace_state ?? a.href === location.href,
        });
    }),
    x.addEventListener("submit", (n) => {
      if (n.defaultPrevented) return;
      const r = HTMLFormElement.prototype.cloneNode.call(n.target),
        a = n.submitter;
      if (((a == null ? void 0 : a.formMethod) || r.method) !== "get") return;
      const i = new URL(
        ((a == null ? void 0 : a.hasAttribute("formaction")) &&
          (a == null ? void 0 : a.formAction)) ||
          r.action
      );
      if (ot(i, P)) return;
      const s = n.target,
        c = X(s);
      if (c.reload) return;
      n.preventDefault(), n.stopPropagation();
      const l = new FormData(s),
        u = a == null ? void 0 : a.getAttribute("name");
      u && l.append(u, (a == null ? void 0 : a.getAttribute("value")) ?? ""),
        (i.search = new URLSearchParams(l).toString()),
        J({
          type: "form",
          url: i,
          keepfocus: c.keepfocus,
          noscroll: c.noscroll,
          replace_state: c.replace_state ?? i.href === location.href,
        });
    }),
    addEventListener("popstate", async (n) => {
      var r;
      if ((r = n.state) != null && r[C]) {
        const a = n.state[C];
        if (((nt = {}), a === S)) return;
        const o = O[a],
          i = n.state[Kt] ?? {},
          s = new URL(n.state[De] ?? location.href),
          c = n.state[H],
          l = dt(location) === dt(y.url);
        if (c === L && (Zt || l)) {
          t(s),
            (O[S] = bt()),
            o && scrollTo(o.x, o.y),
            i !== R.state && ((R = { ...R, state: i }), Rt.$set({ page: R })),
            (S = a);
          return;
        }
        const h = a - S;
        await J({
          type: "popstate",
          url: s,
          popped: { state: i, scroll: o, delta: h },
          accept: () => {
            (S = a), (L = c);
          },
          block: () => {
            history.go(-h);
          },
          nav_token: nt,
        });
      } else if (!M) {
        const a = new URL(location.href);
        t(a);
      }
    }),
    addEventListener("hashchange", () => {
      M &&
        ((M = !1),
        history.replaceState(
          { ...history.state, [C]: ++S, [H]: L },
          "",
          location.href
        ));
    });
  for (const n of document.querySelectorAll("link"))
    n.rel === "icon" && (n.href = n.href);
  addEventListener("pageshow", (n) => {
    n.persisted && U.navigating.set(null);
  });
  function t(n) {
    (y.url = n), U.page.set({ ...R, url: n }), U.page.notify();
  }
}
async function on(
  t,
  {
    status: e = 200,
    error: n,
    node_ids: r,
    params: a,
    route: o,
    data: i,
    form: s,
  }
) {
  St = !0;
  const c = new URL(location.href);
  ({ params: a = {}, route: o = { id: null } } = lt(c, !1) || {});
  let l;
  try {
    const u = r.map(async (d, g) => {
        const f = i[g];
        return (
          f != null && f.uses && (f.uses = fe(f.uses)),
          It({
            loader: q.nodes[d],
            url: c,
            params: a,
            route: o,
            parent: async () => {
              const _ = {};
              for (let v = 0; v < g; v += 1)
                Object.assign(_, (await u[v]).data);
              return _;
            },
            server_data_node: Lt(f),
          })
        );
      }),
      h = await Promise.all(u),
      p = it.find(({ id: d }) => d === o.id);
    if (p) {
      const d = p.layouts;
      for (let g = 0; g < d.length; g++) d[g] || h.splice(g, 0, void 0);
    }
    l = await rt({
      url: c,
      params: a,
      branch: h,
      status: e,
      error: n,
      form: s,
      route: p ?? null,
    });
  } catch (u) {
    if (u instanceof Wt) {
      await F(new URL(u.location, location.href));
      return;
    }
    l = await ct({
      status: Z(u),
      error: await V(u, { url: c, params: a, route: o }),
      url: c,
      route: o,
    });
  }
  l.props.page && (l.props.page.state = {}), re(l, t, !0);
}
async function le(t, e) {
  var a;
  const n = new URL(t);
  (n.pathname = Ee(t.pathname)),
    t.pathname.endsWith("/") && n.searchParams.append(Je, "1"),
    n.searchParams.append(Ye, e.map((o) => (o ? "1" : "0")).join(""));
  const r = await Mt(n.href);
  if (!r.ok) {
    let o;
    throw (
      ((a = r.headers.get("content-type")) != null &&
      a.includes("application/json")
        ? (o = await r.json())
        : r.status === 404
        ? (o = "Not Found")
        : r.status === 500 && (o = "Internal Error"),
      new st(r.status, o))
    );
  }
  return new Promise(async (o) => {
    var h;
    const i = new Map(),
      s = r.body.getReader(),
      c = new TextDecoder();
    function l(p) {
      return He(p, {
        Promise: (d) =>
          new Promise((g, f) => {
            i.set(d, { fulfil: g, reject: f });
          }),
      });
    }
    let u = "";
    for (;;) {
      const { done: p, value: d } = await s.read();
      if (p && !u) break;
      for (
        u +=
          !d && u
            ? `
`
            : c.decode(d, { stream: !0 });
        ;

      ) {
        const g = u.indexOf(`
`);
        if (g === -1) break;
        const f = JSON.parse(u.slice(0, g));
        if (((u = u.slice(g + 1)), f.type === "redirect")) return o(f);
        if (f.type === "data")
          (h = f.nodes) == null ||
            h.forEach((_) => {
              (_ == null ? void 0 : _.type) === "data" &&
                ((_.uses = fe(_.uses)), (_.data = l(_.data)));
            }),
            o(f);
        else if (f.type === "chunk") {
          const { id: _, data: v, error: A } = f,
            w = i.get(_);
          i.delete(_), A ? w.reject(l(A)) : w.fulfil(l(v));
        }
      }
    }
  });
}
function fe(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url),
    search_params: new Set((t == null ? void 0 : t.search_params) ?? []),
  };
}
function sn() {
  const t = document.querySelector("[autofocus]");
  if (t) t.focus();
  else {
    const e = document.body,
      n = e.getAttribute("tabindex");
    (e.tabIndex = -1),
      e.focus({ preventScroll: !0, focusVisible: !1 }),
      n !== null
        ? e.setAttribute("tabindex", n)
        : e.removeAttribute("tabindex");
    const r = getSelection();
    if (r && r.type !== "None") {
      const a = [];
      for (let o = 0; o < r.rangeCount; o += 1) a.push(r.getRangeAt(o));
      setTimeout(() => {
        if (r.rangeCount === a.length) {
          for (let o = 0; o < r.rangeCount; o += 1) {
            const i = a[o],
              s = r.getRangeAt(o);
            if (
              i.commonAncestorContainer !== s.commonAncestorContainer ||
              i.startContainer !== s.startContainer ||
              i.endContainer !== s.endContainer ||
              i.startOffset !== s.startOffset ||
              i.endOffset !== s.endOffset
            )
              return;
          }
          r.removeAllRanges();
        }
      });
    }
  }
}
function ue(t, e, n, r) {
  var c, l;
  let a, o;
  const i = new Promise((u, h) => {
    (a = u), (o = h);
  });
  return (
    i.catch(() => {}),
    {
      navigation: {
        from: {
          params: t.params,
          route: { id: ((c = t.route) == null ? void 0 : c.id) ?? null },
          url: t.url,
        },
        to: n && {
          params: (e == null ? void 0 : e.params) ?? null,
          route: {
            id:
              ((l = e == null ? void 0 : e.route) == null ? void 0 : l.id) ??
              null,
          },
          url: n,
        },
        willUnload: !e,
        type: r,
        complete: i,
      },
      fulfil: a,
      reject: o,
    }
  );
}
export {
  qt as a,
  ln as b,
  rn as c,
  fn as d,
  pn as e,
  hn as f,
  un as g,
  dn as h,
  D as n,
  gn as p,
  pe as r,
  U as s,
  at as w,
};
