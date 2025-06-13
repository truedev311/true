var Bt = Object.defineProperty;
var Ft = (i, t, e) =>
  t in i
    ? Bt(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[t] = e);
var N = (i, t, e) => (Ft(i, typeof t != "symbol" ? t + "" : t, e), e),
  Lt = (i, t, e) => {
    if (!t.has(i)) throw TypeError("Cannot " + e);
  };
var d = (i, t, e) => (
    Lt(i, t, "read from private field"), e ? e.call(i) : t.get(i)
  ),
  y = (i, t, e) => {
    if (t.has(i))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(i) : t.set(i, e);
  },
  Tt = (i, t, e, s) => (
    Lt(i, t, "write to private field"), s ? s.call(i, e) : t.set(i, e), e
  );
import {
  y as Ut,
  I as St,
  K as $t,
  B as qt,
  O as Gt,
  L as Ht,
  z as _t,
  A as Jt,
  e as kt,
  c as Yt,
  a3 as D,
  s as L,
  a4 as yt,
  a5 as wt,
  m as Qt,
  b as E,
  a6 as Zt,
  a7 as jt,
  a8 as te,
  a9 as Wt,
  aa as ee,
  E as ie,
  S as se,
  ab as ne,
  r as nt,
  x as re,
  g as S,
  a as oe,
  u as it,
  p as ae,
  k as le,
} from "./index-client.hmWN-4Cw.js";
import {
  i as O,
  q as xt,
  r as he,
  j as bt,
  k as dt,
  v as ce,
  e as zt,
  s as Mt,
  a as pt,
  t as Et,
  c as mt,
  b as Ct,
} from "./disclose-version.DQ6zD9ir.js";
import { p as z } from "./this.BnIkoQJo.js";
import { c as ue } from "./entry.B8zhSzpe.js";
let vt = null;
function Rt(i, t) {
  return t;
}
function de(i, t, e) {
  for (var s = [], n = i.length, r = 0; r < n; r++) Zt(i[r].e, s, !0);
  if (n > 0 && s.length === 0 && t !== null) {
    var c = t.parentNode;
    (c.textContent = ""), c.append(t);
  }
  jt(s, () => {
    for (var p = 0; p < n; p++) te(i[p].e);
    e !== void 0 && e();
  });
}
function It(i, t, e, s, n, r = null) {
  var c = { flags: t, items: new Map(), next: null },
    p = (t & Wt) !== 0;
  if (p) {
    var u = i;
    i = O ? xt(u.firstChild) : u.appendChild(he());
  }
  var l = null;
  Ut(() => {
    var f = e(),
      o = St(f) ? f : f == null ? [] : Array.from(f),
      g = o.length,
      h = c.flags;
    h & wt &&
      !ie(o) &&
      !(se in o) &&
      ((h ^= wt), h & ne && !(h & D) && (h ^= D));
    let A = !1;
    if (O) {
      var _ = i.data === $t;
      _ !== (g === 0) && (qt(bt), dt(!1), (A = !0));
    }
    if (O) {
      for (var m = bt[0], x = c, T, a = 0; a < g; a++) {
        if (m.nodeType !== 8 || m.data !== Gt) {
          (A = !0), dt(!1);
          break;
        }
        m = xt(m);
        var v = o[a],
          w = s(v, a);
        (T = Dt(m, x, null, v, w, a, n, h)),
          c.items.set(w, T),
          (m = m.nextSibling),
          (x = T);
      }
      if (g > 0)
        for (; m !== i; ) {
          var C = m.nextSibling;
          m.remove(), (m = C);
        }
    }
    O || pe(o, c, i, n, h, s),
      r !== null &&
        (g === 0
          ? l
            ? Ht(l)
            : (l = _t(() => r(i)))
          : l !== null &&
            Jt(l, () => {
              l = null;
            })),
      A && dt(!0);
  });
}
function pe(i, t, e, s, n, r) {
  var et;
  var c = (n & ee) !== 0,
    p = (n & (D | yt)) !== 0,
    u = i.length,
    l = t.items,
    f = t.next,
    o = f,
    g = new Set(),
    h = t,
    A = [],
    _ = [],
    m = [],
    x,
    T,
    a,
    v;
  if (c)
    for (v = 0; v < u; v += 1)
      (x = i[v]),
        (T = r(x, v)),
        (a = l.get(T)),
        a !== void 0 && ((et = a.a) == null || et.measure(), A.push(a));
  for (v = 0; v < u; v += 1) {
    if (((x = i[v]), (T = r(x, v)), (a = l.get(T)), a === void 0)) {
      (h = Dt(o ? ft(o) : e, h, h.next, x, T, v, s, n)),
        l.set(T, h),
        (_ = []),
        (m = []),
        (o = h.next);
      continue;
    }
    if ((p && me(a, x, v, n), Ht(a.e), a !== o)) {
      if (g.has(a)) {
        if (_.length < m.length) {
          var w = m[0],
            C = ft(w),
            M;
          h = w.prev;
          var tt = _[0],
            W = _[_.length - 1];
          for (
            k(tt.prev, W.next), k(h, tt), k(W, w), M = 0;
            M < _.length;
            M += 1
          )
            Nt(_[M], C);
          for (M = 0; M < m.length; M += 1) g.delete(m[M]);
          (o = w), (h = W), (v -= 1), (_ = []), (m = []);
        } else
          g.delete(a),
            Nt(a, o ? ft(o) : e),
            k(a.prev, a.next),
            k(a, h.next),
            k(h, a),
            (h = a);
        continue;
      }
      for (_ = [], m = []; o !== null && o.k !== T; )
        g.add(o), m.push(o), (o = o.next);
      if (o === null) continue;
      a = o;
    }
    _.push(a), (h = a), (o = a.next);
  }
  const R = Array.from(g);
  for (; o; ) R.push(o), (o = o.next);
  var H = n & Wt && u === 0 ? e : null;
  de(R, H, () => {
    for (var I = 0; I < R.length; I += 1) {
      var b = R[I];
      l.delete(b.k), k(b.prev, b.next);
    }
  }),
    c &&
      kt(() => {
        Yt(() => {
          var I;
          for (a of A) (I = a.a) == null || I.apply();
        });
      });
}
function ft(i) {
  var t = i.e.dom;
  return St(t) ? t[0] : t;
}
function me(i, t, e, s) {
  s & D && L(i.v, t), s & yt ? L(i.i, e) : (i.i = e);
}
function Dt(i, t, e, s, n, r, c, p) {
  var u = vt;
  try {
    var l = (p & D) !== 0,
      f = (p & wt) === 0,
      o = l ? (f ? Qt(s) : E(s)) : s,
      g = p & yt ? E(r) : r,
      h = { i: g, v: o, k: n, a: null, e: null, prev: t, next: e };
    return (
      (t.next = h),
      e !== null && (e.prev = h),
      (vt = h),
      (h.e = _t(() => c(i, o, g))),
      h
    );
  } finally {
    vt = u;
  }
}
function Nt(i, t) {
  var e = i.e.dom;
  if (e !== null)
    if (St(e)) for (var s = 0; s < e.length; s++) t.before(e[s]);
    else t.before(e);
}
function k(i, t) {
  (i.next = t), t !== null && (t.prev = i);
}
function He(i, t, ...e) {
  var s;
  nt(() => {
    s !== (s = i()) && s && _t(() => s(t, ...e));
  });
}
function ke(i, t, e) {
  kt(() => {
    var s = Yt(() => t(i, e == null ? void 0 : e()) || {});
    if (e && s != null && s.update) {
      var n = !1;
      nt(() => {
        var r = e();
        re(r), n && s.update(r);
      }),
        (n = !0);
    }
    if (s != null && s.destroy) return () => s.destroy();
  });
}
function Ye(i) {
  O && (rt(i, "value", null), rt(i, "checked", null));
}
function rt(i, t, e) {
  e = e == null ? null : e + "";
  var s = i.__attributes ?? (i.__attributes = {});
  (O &&
    ((s[t] = i.getAttribute(t)),
    t === "src" || t === "href" || t === "srcset")) ||
    (s[t] !== (s[t] = e) &&
      (e === null ? i.removeAttribute(t) : i.setAttribute(t, e)));
}
function We(i, t) {
  var e = i.__className,
    s = ve(t);
  O && i.className === s
    ? (i.__className = s)
    : (e !== s || (O && i.className !== s)) &&
      (t == null ? i.removeAttribute("class") : ce(i, s), (i.__className = s));
}
function ve(i) {
  return i ?? "";
}
function De(i, t, e) {
  e ? i.classList.add(t) : i.classList.remove(t);
}
function Pt(i, t, e) {
  return Math.max(i, Math.min(t, e));
}
class fe {
  advance(t) {
    var p;
    if (!this.isRunning) return;
    let e = !1;
    if (this.lerp)
      (this.value =
        ((s = this.value),
        (n = this.to),
        (r = 60 * this.lerp),
        (c = t),
        (function (u, l, f) {
          return (1 - f) * u + f * l;
        })(s, n, 1 - Math.exp(-r * c)))),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (e = !0));
    else {
      this.currentTime += t;
      const u = Pt(0, this.currentTime / this.duration, 1);
      e = u >= 1;
      const l = e ? 1 : this.easing(u);
      this.value = this.from + (this.to - this.from) * l;
    }
    var s, n, r, c;
    (p = this.onUpdate) == null || p.call(this, this.value, e),
      e && this.stop();
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    t,
    e,
    {
      lerp: s = 0.1,
      duration: n = 1,
      easing: r = (u) => u,
      onStart: c,
      onUpdate: p,
    }
  ) {
    (this.from = this.value = t),
      (this.to = e),
      (this.lerp = s),
      (this.duration = n),
      (this.easing = r),
      (this.currentTime = 0),
      (this.isRunning = !0),
      c == null || c(),
      (this.onUpdate = p);
  }
}
class ge {
  constructor({
    wrapper: t,
    content: e,
    autoResize: s = !0,
    debounce: n = 250,
  } = {}) {
    N(this, "resize", () => {
      this.onWrapperResize(), this.onContentResize();
    });
    N(this, "onWrapperResize", () => {
      this.wrapper === window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth),
          (this.height = this.wrapper.clientHeight));
    });
    N(this, "onContentResize", () => {
      this.wrapper === window
        ? ((this.scrollHeight = this.content.scrollHeight),
          (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight),
          (this.scrollWidth = this.wrapper.scrollWidth));
    });
    (this.wrapper = t),
      (this.content = e),
      s &&
        ((this.debouncedResize = (function (r, c) {
          let p;
          return function () {
            let u = arguments,
              l = this;
            clearTimeout(p),
              (p = setTimeout(function () {
                r.apply(l, u);
              }, c));
          };
        })(this.resize, n)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize();
  }
  destroy() {
    var t, e;
    (t = this.wrapperResizeObserver) == null || t.disconnect(),
      (e = this.contentResizeObserver) == null || e.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1);
  }
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class Vt {
  constructor() {
    this.events = {};
  }
  emit(t, ...e) {
    let s = this.events[t] || [];
    for (let n = 0, r = s.length; n < r; n++) s[n](...e);
  }
  on(t, e) {
    var s;
    return (
      ((s = this.events[t]) != null && s.push(e)) || (this.events[t] = [e]),
      () => {
        var n;
        this.events[t] =
          (n = this.events[t]) == null ? void 0 : n.filter((r) => e !== r);
      }
    );
  }
  off(t, e) {
    var s;
    this.events[t] =
      (s = this.events[t]) == null ? void 0 : s.filter((n) => e !== n);
  }
  destroy() {
    this.events = {};
  }
}
const At = 100 / 6;
class we {
  constructor(t, { wheelMultiplier: e = 1, touchMultiplier: s = 1 }) {
    N(this, "onTouchStart", (t) => {
      const { clientX: e, clientY: s } = t.targetTouches
        ? t.targetTouches[0]
        : t;
      (this.touchStart.x = e),
        (this.touchStart.y = s),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
    });
    N(this, "onTouchMove", (t) => {
      const { clientX: e, clientY: s } = t.targetTouches
          ? t.targetTouches[0]
          : t,
        n = -(e - this.touchStart.x) * this.touchMultiplier,
        r = -(s - this.touchStart.y) * this.touchMultiplier;
      (this.touchStart.x = e),
        (this.touchStart.y = s),
        (this.lastDelta = { x: n, y: r }),
        this.emitter.emit("scroll", { deltaX: n, deltaY: r, event: t });
    });
    N(this, "onTouchEnd", (t) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: t,
      });
    });
    N(this, "onWheel", (t) => {
      let { deltaX: e, deltaY: s, deltaMode: n } = t;
      (e *= n === 1 ? At : n === 2 ? this.windowWidth : 1),
        (s *= n === 1 ? At : n === 2 ? this.windowHeight : 1),
        (e *= this.wheelMultiplier),
        (s *= this.wheelMultiplier),
        this.emitter.emit("scroll", { deltaX: e, deltaY: s, event: t });
    });
    N(this, "onWindowResize", () => {
      (this.windowWidth = window.innerWidth),
        (this.windowHeight = window.innerHeight);
    });
    (this.element = t),
      (this.wheelMultiplier = e),
      (this.touchMultiplier = s),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new Vt()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  destroy() {
    this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      });
  }
}
class Se {
  constructor({
    wrapper: t = window,
    content: e = document.documentElement,
    wheelEventsTarget: s = t,
    eventsTarget: n = s,
    smoothWheel: r = !0,
    syncTouch: c = !1,
    syncTouchLerp: p = 0.075,
    touchInertiaMultiplier: u = 35,
    duration: l,
    easing: f = (a) => Math.min(1, 1.001 - Math.pow(2, -10 * a)),
    lerp: o = !l && 0.1,
    infinite: g = !1,
    orientation: h = "vertical",
    gestureOrientation: A = "vertical",
    touchMultiplier: _ = 1,
    wheelMultiplier: m = 1,
    autoResize: x = !0,
    __experimental__naiveDimensions: T = !1,
  } = {}) {
    (this.__isSmooth = !1),
      (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.onVirtualScroll = ({ deltaX: a, deltaY: v, event: w }) => {
        if (w.ctrlKey) return;
        const C = w.type.includes("touch"),
          M = w.type.includes("wheel");
        if (
          this.options.syncTouch &&
          C &&
          w.type === "touchstart" &&
          !this.isStopped &&
          !this.isLocked
        )
          return void this.reset();
        const tt = a === 0 && v === 0,
          W =
            (this.options.gestureOrientation === "vertical" && v === 0) ||
            (this.options.gestureOrientation === "horizontal" && a === 0);
        if (tt || W) return;
        let R = w.composedPath();
        if (
          ((R = R.slice(0, R.indexOf(this.rootElement))),
          R.find((b) => {
            var at, lt, ht, ct, ut;
            return (
              ((at = b.hasAttribute) === null || at === void 0
                ? void 0
                : at.call(b, "data-lenis-prevent")) ||
              (C &&
                ((lt = b.hasAttribute) === null || lt === void 0
                  ? void 0
                  : lt.call(b, "data-lenis-prevent-touch"))) ||
              (M &&
                ((ht = b.hasAttribute) === null || ht === void 0
                  ? void 0
                  : ht.call(b, "data-lenis-prevent-wheel"))) ||
              (((ct = b.classList) === null || ct === void 0
                ? void 0
                : ct.contains("lenis")) &&
                !(
                  !((ut = b.classList) === null || ut === void 0) &&
                  ut.contains("lenis-stopped")
                ))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void w.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.syncTouch && C) || (this.options.smoothWheel && M)),
          !this.isSmooth)
        )
          return (this.isScrolling = !1), void this.animate.stop();
        w.preventDefault();
        let H = v;
        this.options.gestureOrientation === "both"
          ? (H = Math.abs(v) > Math.abs(a) ? v : a)
          : this.options.gestureOrientation === "horizontal" && (H = a);
        const et = C && this.options.syncTouch,
          I = C && w.type === "touchend" && Math.abs(H) > 5;
        I && (H = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + H,
            Object.assign(
              { programmatic: !1 },
              et
                ? { lerp: I ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  }
            )
          );
      }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const a = this.animatedScroll;
          (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - a)),
            this.emit();
        }
      }),
      (window.lenisVersion = "1.0.42"),
      (t !== document.documentElement && t !== document.body) || (t = window),
      (this.options = {
        wrapper: t,
        content: e,
        wheelEventsTarget: s,
        eventsTarget: n,
        smoothWheel: r,
        syncTouch: c,
        syncTouchLerp: p,
        touchInertiaMultiplier: u,
        duration: l,
        easing: f,
        lerp: o,
        infinite: g,
        gestureOrientation: A,
        orientation: h,
        touchMultiplier: _,
        wheelMultiplier: m,
        autoResize: x,
        __experimental__naiveDimensions: T,
      }),
      (this.animate = new fe()),
      (this.emitter = new Vt()),
      (this.dimensions = new ge({ wrapper: t, content: e, autoResize: x })),
      this.toggleClassName("lenis", !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = c || r),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new we(n, {
        touchMultiplier: _,
        wheelMultiplier: m,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll);
  }
  destroy() {
    this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClassName("lenis", !1),
      this.toggleClassName("lenis-smooth", !1),
      this.toggleClassName("lenis-scrolling", !1),
      this.toggleClassName("lenis-stopped", !1),
      this.toggleClassName("lenis-locked", !1);
  }
  on(t, e) {
    return this.emitter.on(t, e);
  }
  off(t, e) {
    return this.emitter.off(t, e);
  }
  setScroll(t) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = t)
      : (this.rootElement.scrollTop = t);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    (this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop();
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(t) {
    const e = t - (this.time || t);
    (this.time = t), this.animate.advance(0.001 * e);
  }
  scrollTo(
    t,
    {
      offset: e = 0,
      immediate: s = !1,
      lock: n = !1,
      duration: r = this.options.duration,
      easing: c = this.options.easing,
      lerp: p = !r && this.options.lerp,
      onComplete: u,
      force: l = !1,
      programmatic: f = !0,
    } = {}
  ) {
    if ((!this.isStopped && !this.isLocked) || l) {
      if (["top", "left", "start"].includes(t)) t = 0;
      else if (["bottom", "right", "end"].includes(t)) t = this.limit;
      else {
        let o;
        if (
          (typeof t == "string"
            ? (o = document.querySelector(t))
            : t != null && t.nodeType && (o = t),
          o)
        ) {
          if (this.options.wrapper !== window) {
            const h = this.options.wrapper.getBoundingClientRect();
            e -= this.isHorizontal ? h.left : h.top;
          }
          const g = o.getBoundingClientRect();
          t = (this.isHorizontal ? g.left : g.top) + this.animatedScroll;
        }
      }
      if (typeof t == "number") {
        if (
          ((t += e),
          (t = Math.round(t)),
          this.options.infinite
            ? f && (this.targetScroll = this.animatedScroll = this.scroll)
            : (t = Pt(0, t, this.limit)),
          s)
        )
          return (
            (this.animatedScroll = this.targetScroll = t),
            this.setScroll(this.scroll),
            this.reset(),
            void (u == null || u(this))
          );
        if (!f) {
          if (t === this.targetScroll) return;
          this.targetScroll = t;
        }
        this.animate.fromTo(this.animatedScroll, t, {
          duration: r,
          easing: c,
          lerp: p,
          onStart: () => {
            n && (this.isLocked = !0), (this.isScrolling = !0);
          },
          onUpdate: (o, g) => {
            (this.isScrolling = !0),
              (this.velocity = o - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = o),
              this.setScroll(this.scroll),
              f && (this.targetScroll = o),
              g || this.emit(),
              g &&
                (this.reset(),
                this.emit(),
                u == null || u(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                }));
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((t = this.animatedScroll), (e = this.limit), ((t % e) + e) % e)
      : this.animatedScroll;
    var t, e;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(t) {
    this.__isSmooth !== t &&
      ((this.__isSmooth = t), this.toggleClassName("lenis-smooth", t));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(t) {
    this.__isScrolling !== t &&
      ((this.__isScrolling = t), this.toggleClassName("lenis-scrolling", t));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(t) {
    this.__isStopped !== t &&
      ((this.__isStopped = t), this.toggleClassName("lenis-stopped", t));
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(t) {
    this.__isLocked !== t &&
      ((this.__isLocked = t), this.toggleClassName("lenis-locked", t));
  }
  get className() {
    let t = "lenis";
    return (
      this.isStopped && (t += " lenis-stopped"),
      this.isLocked && (t += " lenis-locked"),
      this.isScrolling && (t += " lenis-scrolling"),
      this.isSmooth && (t += " lenis-smooth"),
      t
    );
  }
  toggleClassName(t, e) {
    this.rootElement.classList.toggle(t, e),
      this.emitter.emit("className change", this);
  }
}
const Xt = new Se({ lerp: 0.12 }),
  st = 1e3,
  _e = 150,
  Pe = 450,
  ot = "cubic-bezier(0.42,0,0.25,1)",
  gt = { duration: st, easing: ot, delay: _e };
var P, V, X;
class ye {
  constructor() {
    y(this, P, E(!1));
    y(this, V, E(0));
    y(this, X, E(0));
  }
  set size(t) {
    L(d(this, P), !0), L(d(this, V), z(t.width)), L(d(this, X), z(t.height));
  }
  get isInitialized() {
    return S(d(this, P));
  }
  get width() {
    return S(d(this, V));
  }
  get height() {
    return S(d(this, X));
  }
}
(P = new WeakMap()), (V = new WeakMap()), (X = new WeakMap());
const Ot = new ye();
var K;
class Ee {
  constructor() {
    y(
      this,
      K,
      E(
        z({
          pageTransitionLayer: null,
          pageTransitionInnerLayer: null,
          pageFadeOutLayer: null,
          pageNode: null,
          header: null,
          headerLogo: null,
          headerButton: null,
          headerMenu: null,
          fluidImage: null,
          fluidImagePlaceholder: null,
          topContact: null,
        })
      )
    );
  }
  getEl(t) {
    return S(d(this, K))[t];
  }
  setEl(t, e) {
    S(d(this, K))[t] = e;
  }
}
K = new WeakMap();
const Y = new Ee();
var B, F, U, $, q, G, J, Q;
class Le {
  constructor() {
    y(this, B, E(!1));
    y(this, F, E(!1));
    y(this, U, E("init"));
    y(this, $, E(!1));
    y(this, q, E(!1));
    y(this, G, E(!0));
    y(this, J, E(null));
    y(this, Q, E(z([])));
  }
  get isModuleLoaded() {
    return S(d(this, B));
  }
  set isModuleLoaded(t) {
    L(d(this, B), z(t));
  }
  get isIntroVisible() {
    return S(d(this, F));
  }
  set isIntroVisible(t) {
    L(d(this, F), z(t));
  }
  get introState() {
    return S(d(this, U));
  }
  set introState(t) {
    L(d(this, U), z(t));
  }
  get isKvVisible() {
    return S(d(this, $));
  }
  set isKvVisible(t) {
    L(d(this, $), z(t));
  }
  get isKvReady() {
    return S(d(this, q));
  }
  set isKvReady(t) {
    L(d(this, q), z(t));
  }
  get isLayoutVisible() {
    return S(d(this, G));
  }
  set isLayoutVisible(t) {
    L(d(this, G), z(t));
  }
  get fluidImage() {
    return S(d(this, J));
  }
  set fluidImage(t) {
    L(d(this, J), z(t));
  }
  get newsItems() {
    return S(d(this, Q));
  }
  set newsItems(t) {
    L(d(this, Q), z(t));
  }
}
(B = new WeakMap()),
  (F = new WeakMap()),
  (U = new WeakMap()),
  ($ = new WeakMap()),
  (q = new WeakMap()),
  (G = new WeakMap()),
  (J = new WeakMap()),
  (Q = new WeakMap());
const Ve = new Le();
function Kt(i) {
  return new Promise((t) => setTimeout(t, i));
}
function Xe() {
  var s;
  if (!(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream))
    return !1;
  const t = ((s = navigator.appVersion) == null
    ? void 0
    : s.match(/OS (\d+)_(\d+)_?(\d+)?/)) ?? [null, "0"];
  return parseInt(t[1], 10) === 16;
}
function Ke(i) {
  return () => {
    const t = i == null ? void 0 : i.parentElement;
    !(t != null && t.classList.contains("pin-spacer")) ||
      Xt.isStopped ||
      ((t.style.mixBlendMode = ""),
      t.offsetHeight,
      (t.style.mixBlendMode = "difference"));
  };
}
function Be() {
  const i = document.createElement("canvas"),
    t = i.getContext("webgl") || i.getContext("experimental-webgl");
  return !!(t != null && t.getExtension("OES_texture_float_linear"));
}
function Fe(i) {
  return new Promise((t) => {
    let e = 0;
    i.forEach((s) => {
      const n = new Image();
      (n.onload = () => {
        e++, e === i.length && t();
      }),
        (n.src = s);
    });
  });
}
var Z, j;
class Ue {
  constructor() {
    y(this, Z, void 0);
    y(this, j, E(!1));
  }
  get isVisible() {
    return S(d(this, j));
  }
  start(t = 80) {
    Tt(
      this,
      Z,
      window.setTimeout(() => {
        L(d(this, j), !0);
      }, t)
    );
  }
  destroy() {
    clearTimeout(d(this, Z));
  }
}
(Z = new WeakMap()), (j = new WeakMap());
async function Te() {
  Y.getEl("pageFadeOutLayer").animate(
    { opacity: [0, 1] },
    { fill: "forwards", easing: ot, duration: 300 }
  ),
    await Kt(300);
}
function xe() {
  const i = Y.getEl("pageTransitionLayer"),
    t = Y.getEl("pageTransitionInnerLayer");
  (i.style.willChange = "transform"),
    (t.style.willChange = "transform"),
    i.animate(
      { transform: ["translateY(99%)", "translateY(-30%)"] },
      { duration: st, easing: ot }
    ),
    t.animate(
      [
        { transform: "scaleY(1)" },
        { transform: "scaleY(1)", offset: 0.2 },
        { transform: "scaleY(0.3)" },
      ],
      { duration: st, easing: ot }
    ),
    setTimeout(() => {
      (i.style.willChange = ""), (t.style.willChange = "");
    }, st);
}
async function be() {
  const i = Y.getEl("pageNode"),
    t = Y.getEl("header"),
    e = Y.getEl("topContact"),
    s = Xt.scroll,
    r = Ot.height * 1.3;
  document.body.classList.add("is-page-transitioning"),
    (i.style.zIndex = "50"),
    (i.style.overflow = "hidden"),
    (i.style.height = s + Ot.height + "px"),
    (i.style.pointerEvents = "none"),
    (i.style.willChange = "transform"),
    (t.style.zIndex = "40"),
    (t.style.top = `${s}px`),
    (t.style.pointerEvents = "none"),
    (t.style.willChange = "transform"),
    i.animate({ transform: ["translateY(0px)", `translateY(${-r}px)`] }, gt),
    t.animate({ transform: ["translateY(0px)", `translateY(${r}px)`] }, gt),
    e &&
      ((e.style.top = `${s}px`),
      (e.style.pointerEvents = "none"),
      (e.style.willChange = "transform"),
      e.animate({ transform: ["translateY(0px)", `translateY(${r}px)`] }, gt)),
    xe(),
    await Kt(10);
}
async function $e(i, t) {
  t != null && t.fadeOut && (await Te()), await be(), ue(i, { noScroll: !0 });
}
var ze = Et("<span> </span>"),
  Me = Et("<span> </span>"),
  Ce = Et(
    '<span class="relative flex overflow-hidden [--duration:0.8s]"><span class="absolute flex text-white *:min-w-[0.3em] *:duration-[--duration] *:ease-out group-hover:*:-translate-y-full group-hover:*:delay-[--delay]"></span> <span class="flex text-[#667f96] *:min-w-[0.3em] *:translate-y-full *:duration-[--duration] *:ease-out group-hover:*:translate-y-0 group-hover:*:delay-[--delay]"></span></span>'
  );
function qe(i, t) {
  oe(t, !0);
  const e = le(() => t.text.split(""));
  var s = Ce(),
    n = mt(s);
  It(
    n,
    73,
    () => S(e),
    Rt,
    (c, p, u) => {
      var l = ze();
      rt(l, "style", `--delay: ${zt(it(u) * 18)}ms`);
      var f = mt(l);
      nt(() => Mt(f, it(p))), pt(c, l);
    }
  );
  var r = Ct(Ct(n, !0));
  It(
    r,
    73,
    () => S(e),
    Rt,
    (c, p, u) => {
      var l = Me();
      rt(l, "style", `--delay: ${zt(it(u) * 18)}ms`);
      var f = mt(l);
      nt(() => Mt(f, it(p))), pt(c, l);
    }
  ),
    pt(i, s),
    ae();
}
const Ge = (i) => {
  function t() {
    window.matchMedia("(pointer: fine)").matches && i.classList.add("is-hover");
  }
  function e() {
    document.body.classList.contains("is-page-transitioning") ||
      i.classList.remove("is-hover");
  }
  return (
    i.addEventListener("mouseenter", t),
    i.addEventListener("mouseleave", e),
    {
      destroy() {
        i.removeEventListener("mouseenter", t),
          i.removeEventListener("mouseleave", e);
      },
    }
  );
};
export {
  qe as H,
  Ue as L,
  st as P,
  Ve as a,
  rt as b,
  We as c,
  ke as d,
  It as e,
  He as f,
  Ke as g,
  Ge as h,
  Rt as i,
  Y as j,
  Fe as k,
  Xt as l,
  Xe as m,
  gt as n,
  xe as o,
  $e as p,
  Be as q,
  Ye as r,
  Ot as s,
  De as t,
  Pe as u,
  Kt as w,
};
