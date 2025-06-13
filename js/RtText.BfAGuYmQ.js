import {
  a as u,
  t as c,
  c as n,
  e as o,
  s as I,
} from "./disclose-version.DQ6zD9ir.js";
import {
  a as b,
  p as g,
  o as R,
  s as m,
  g as p,
  r as _,
  b as x,
  k as T,
  u as k,
} from "./index-client.hmWN-4Cw.js";
import { f as w, c as f, e as V, i as C, b as E } from "./isHover.C_Gi8ajW.js";
import { b as L, p as M } from "./this.BnIkoQJo.js";
import { p as P } from "./props.IDBnocEi.js";
var O = c(
  '<span class="block overflow-hidden"><span class="block origin-top-left duration-[1.7s] ease-out group-[:not(.is-visible)]/page:translate-y-full group-[:not(.is-visible)]/page:rotate-6"><!></span></span>'
);
function J(r, a) {
  b(a, !0);
  var e = O(),
    s = n(e),
    t = n(s);
  w(() => a.children, t), u(r, e), g();
}
var j = c("<span><span><!></span></span>");
function K(r, a) {
  b(a, !0);
  const e = P(a, "appear", 3, !1);
  let s = x(void 0),
    t = x(!1);
  R(() => {
    if (e()) {
      m(t, !0);
      return;
    }
    new IntersectionObserver((l) => {
      l.forEach((y) => {
        y.isIntersecting && m(t, !0);
      });
    }).observe(p(s));
  });
  var i = j();
  L(
    i,
    (d) => m(s, M(d)),
    () => p(s)
  );
  var v = n(i),
    h = n(v);
  w(() => a.children, h),
    _(() => {
      f(
        i,
        `block overflow-hidden duration-[1.1s] ease-out [clip-path:inset(100%_0%_0%)] ${o(
          p(t) ? "group-[.is-visible]/page:![clip-path:inset(0%)]" : ""
        )}`
      ),
        f(
          v,
          `block translate-y-[24px] duration-[1.2s] ease-out ${o(
            p(t) ? "group-[.is-visible]/page:!translate-y-0" : ""
          )}`
        );
    }),
    u(r, i),
    g();
}
var q = c("<span><span></span></span>");
function N(r, a) {
  b(a, !0);
  var e = q(),
    s = n(e);
  _(() => {
    f(e, `block overflow-hidden ${o(a.rect)}`),
      f(
        s,
        `absolute block h-full w-full duration-[1.2s] ease-out ${o(
          a.color
        )} ${o(
          a.isVertical
            ? "group-[:not(.is-visible)]/page:translate-y-[-100%]"
            : "group-[:not(.is-visible)]/page:translate-x-[-100%]"
        )}`
      );
  }),
    u(r, e),
    g();
}
var z = c("<span> </span>"),
  A = c(
    '<span class="relative flex overflow-hidden opacity-0 [--duration:1.2s] group-[.is-visible]/page:opacity-100"><span class="flex *:min-w-[0.3em] *:translate-y-full *:duration-[--duration] *:ease-out group-[.is-visible]/page:*:translate-y-0 group-[.is-visible]/page:*:delay-[--delay]"></span></span>'
  );
function Q(r, a) {
  b(a, !0);
  const e = P(a, "delay", 3, 0),
    s = T(() => a.text.split(""));
  var t = A(),
    i = n(t);
  V(
    i,
    73,
    () => p(s),
    C,
    (v, h, d) => {
      var l = z(),
        y = n(l);
      _(() => {
        E(l, "style", `--delay: ${o(k(d) * 32 + e())}ms`), I(y, k(h));
      }),
        u(v, l);
    }
  ),
    u(r, t),
    g();
}
export { J as P, Q as R, N as a, K as b };
