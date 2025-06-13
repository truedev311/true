import {
  i as ya,
  j as Ta,
  a as t,
  s as M,
  g as da,
  e as $a,
  t as d,
  c as e,
  b as a,
  f as B,
  d as ja,
} from "./disclose-version.DQ6zD9ir.js";
import {
  r as O,
  g as y,
  B as Aa,
  D as Ia,
  k as z,
  a as sa,
  p as la,
  b as La,
  q as Na,
  s as Ea,
  u as Ca,
} from "./index-client.hmWN-4Cw.js";
import { i as D, p as ra } from "./this.BnIkoQJo.js";
import {
  b as Ma,
  a as W,
  e as Oa,
  d as Ba,
  i as Sa,
} from "./isHover.C_Gi8ajW.js";
import { s as Ra } from "./props.IDBnocEi.js";
import { M as Ua, G as Da, N as Fa, p as Ga } from "./NextPage.DDFJuAP0.js";
import { a as V, P as x, b as X, R as Wa } from "./RtText.BfAGuYmQ.js";
import "./entry.B8zhSzpe.js";
function q(h, i, p) {
  let _ = z(i);
  O(() => {
    var l = qa(h, y(_), p);
    if (l) return () => Aa(l);
  });
}
function qa(h, i, p) {
  if (ya) return Ta;
  var _ = i + "";
  p && (_ = `<svg>${_}</svg>`);
  var l = Ia(_);
  if ((p && (l = l.firstChild), l.childNodes.length === 1)) {
    var f = l.firstChild;
    return h.before(f), f;
  }
  var u = [...l.childNodes];
  if (p) for (; l.firstChild; ) h.before(l.firstChild);
  else h.before(l);
  return u;
}
var Va = d(
    '<p class="font-classico scale-y-125 text-[21px] tracking-wider"> </p>'
  ),
  Xa = d('<p class="mt-3 text-[10px] tracking-wide"> </p>'),
  Ya = d(
    '<h5 class="scale-y-110 font-serif text-[20px] uppercase md:text-[23px]"> </h5>'
  ),
  za = d(
    '<span class="inline-block w-[111%] origin-top-left scale-x-90 [&_a]:mx-1.5 [&_a]:inline-block [&_a]:border-b [&_a]:border-[#5997d1] [&_a]:leading-[1.2] [&_a]:text-[#5997d1]"><!></span>'
  ),
  Ha = d("<p>(備考)</p>"),
  Ja = d("<div><!></div>"),
  Ka = d("<p>none.</p>"),
  Qa = d(
    '<div class="relative w-full max-md:mb-5 max-md:flex max-md:justify-between max-md:pb-[14px] md:min-h-[90px] md:w-[11%]"><!> <!> <!></div> <div class="flex-1 overflow-hidden max-md:pb-10 md:px-[8%]"><div class="relative max-md:pb-12 md:min-h-[90px]"><!> <!></div> <div class="mt-4 break-all font-serif text-[14px] leading-[1.8] md:leading-loose"><!></div></div> <div class="w-full flex-col items-start max-md:flex md:w-[11%] md:items-end"><div class="relative min-h-1 max-md:w-[30px] md:min-h-[90px]"><!></div> <div class="mt-4 font-serif text-[12px] tracking-tighter md:mt-6"><!> <!></div></div>',
    1
  ),
  Za = d("<div><!></div>"),
  ae = d("<p>none.</p>"),
  ee = d(
    '<div class="relative w-full max-md:mb-5 max-md:flex max-md:justify-between max-md:pb-[14px] md:min-h-[90px] md:w-[11%]"><span class="absolute bottom-0 left-0 block h-0.5 w-[30px] overflow-hidden"><span class="absolute block h-full w-full bg-[#404040]"></span></span> <p class="font-classico scale-y-125 text-[21px] tracking-wider"> </p> <p class="mt-3 text-[10px] tracking-wide"> </p></div> <div class="flex-1 overflow-hidden max-md:pb-10 md:px-[8%]"><div class="relative max-md:pb-12 md:min-h-[90px]"><span class="absolute bottom-0 left-0 block h-0.5 w-[30px] overflow-hidden"><span class="absolute block h-full w-full bg-[#404040]"></span></span> <h5 class="scale-y-110 font-serif text-[20px] uppercase md:text-[23px]"> </h5></div> <div class="mt-4 break-all font-serif text-[14px] leading-[1.8] md:leading-loose"><span class="inline-block w-[111%] origin-top-left scale-x-90 [&_a]:mx-1.5 [&_a]:inline-block [&_a]:border-b [&_a]:border-[#5997d1] [&_a]:leading-[1.2] [&_a]:text-[#5997d1]"><!></span></div></div> <div class="w-full flex-col items-start max-md:flex md:w-[11%] md:items-end"><div class="relative min-h-1 max-md:w-[30px] md:min-h-[90px]"><span class="absolute bottom-0 left-0 block h-0.5 w-[30px] overflow-hidden"><span class="absolute block h-full w-full bg-[#404040]"></span></span></div> <div class="mt-4 font-serif text-[12px] tracking-tighter md:mt-6"><p>(備考)</p> <!></div></div>',
    1
  ),
  te = d(
    '<div class="flex items-start border-b border-[#a9a9a9] px-5 py-14 max-md:flex-col md:px-10 md:py-[80px]"><!></div>'
  );
function re(h, i) {
  sa(i, !0);
  var p = te(),
    _ = e(p);
  D(
    _,
    () => i.hasAnimation,
    (l) => {
      var f = Qa(),
        u = B(f),
        T = e(u);
      V(T, {
        rect: "absolute bottom-0 left-0 h-0.5 w-[30px]",
        color: "bg-[#404040]",
      });
      var w = a(a(T, !0));
      x(w, {
        children: (m, g) => {
          var n = Va(),
            v = e(n);
          O(() => M(v, i.data.date)), t(m, n);
        },
      });
      var S = a(a(w, !0));
      x(S, {
        children: (m, g) => {
          var n = Xa(),
            v = e(n);
          O(() => M(v, i.data.type)), t(m, n);
        },
      });
      var $ = a(a(u, !0)),
        b = e($),
        P = e(b);
      V(P, {
        rect: "absolute bottom-0 left-0 h-0.5 w-[30px]",
        color: "bg-[#404040]",
      });
      var j = a(a(P, !0));
      x(j, {
        children: (m, g) => {
          var n = Ya(),
            v = e(n);
          O(() => M(v, i.data.title)), t(m, n);
        },
      });
      var I = a(a(b, !0)),
        L = e(I);
      X(L, {
        appear: !0,
        children: (m, g) => {
          var n = za(),
            v = e(n);
          q(v, () => i.data.content, !1), t(m, n);
        },
      });
      var N = a(a($, !0)),
        E = e(N),
        R = e(E);
      V(R, {
        rect: "absolute bottom-0 left-0 h-0.5 w-[30px]",
        color: "bg-[#404040]",
      });
      var C = a(a(E, !0)),
        A = e(C);
      X(A, {
        appear: !0,
        children: (m, g) => {
          var n = Ha();
          t(m, n);
        },
      });
      var U = a(a(A, !0));
      X(U, {
        appear: !0,
        children: (m, g) => {
          var n = da(),
            v = B(n);
          D(
            v,
            () => i.data.remarks,
            (c) => {
              var k = Ja(),
                F = e(k);
              q(F, () => i.data.remarks, !1), t(c, k);
            },
            (c) => {
              var k = Ka();
              t(c, k);
            }
          ),
            t(m, n);
        },
      }),
        t(l, f);
    },
    (l) => {
      var f = ee(),
        u = B(f),
        T = e(u),
        w = a(a(T, !0)),
        S = e(w),
        $ = a(a(w, !0)),
        b = e($),
        P = a(a(u, !0)),
        j = e(P),
        I = e(j),
        L = a(a(I, !0)),
        N = e(L),
        E = a(a(j, !0)),
        R = e(E),
        C = e(R);
      q(C, () => i.data.content, !1);
      var A = a(a(P, !0)),
        U = e(A),
        m = a(a(U, !0)),
        g = e(m),
        n = a(a(g, !0));
      D(
        n,
        () => i.data.remarks,
        (v) => {
          var c = Za(),
            k = e(c);
          q(k, () => i.data.remarks, !1), t(v, c);
        },
        (v) => {
          var c = ae();
          t(v, c);
        }
      ),
        O(() => {
          M(S, i.data.date), M(b, i.data.type), M(N, i.data.title);
        }),
        t(l, f);
    }
  ),
    O(() => Ma(p, "id", `n${$a(i.data.id)}`)),
    t(h, p),
    la();
}
var de = d("TODAY -", 1),
  se = d("2024.02.12", 1),
  le = d('<p class="text-[10px]">(SCROLL) - DOWN</p>'),
  ie = d(
    '<button class="block text-[10px]">NEXT PAGE - <span class="font-aboreto inline-block scale-y-[1.2] text-[11px]">( ABOUT US )</span></button>'
  ),
  ne = d("*", 1),
  oe = d("Latest", 1),
  ve = d("Information", 1),
  me = d("Notification.", 1),
  xe = d("(1)", 1),
  pe = d("01", 1),
  ce = d("02", 1),
  _e = d("03", 1),
  fe = d(
    '<figure class="h-[120px] max-w-full md:h-auto md:w-[600px]"><img class="h-full w-full object-cover" src="/images/image-news.webp" width="1169" height="371" decoding="async" alt=""></figure>'
  ),
  ue = d(
    '<button type="button" class="font-aboreto mt-10 flex aspect-square w-[100px] items-center justify-center rounded-full border border-[#303030] text-[13px] duration-[0.3s] hover:scale-90 hover:bg-[#292929] hover:text-white">MORE</button>'
  ),
  he = d(
    '<div class="mx-auto max-w-[1536px] pt-28 md:pt-[158px]"><div class="px-5 md:px-10"><div class="flex justify-between gap-4 max-md:flex-wrap md:h-[26px] md:gap-10"><p class="w-full text-[10px] tracking-widest max-md:hidden md:w-1/2"><!> <!></p> <div class="relative flex w-full justify-between max-md:h-[20px] md:w-1/2 md:max-w-[600px]"><!> <div><!></div> <div><!></div></div></div> <div class="mt-20 flex md:mt-[100px]"><p class="flex w-1/3 flex-col justify-end text-[8px] uppercase md:w-[19%] md:text-[10px]"><span class="font-inter block text-[21px] font-thin leading-none max-md:h-4 md:text-[31px]"><!></span> <!> <!> <!></p> <div class="max-md:w-2/3"><h4 class="font-classico flex origin-left scale-x-[0.7] items-end whitespace-nowrap text-[60px] leading-[0.8] md:text-[118px]"><!> <span class="font-classico ml-6 text-[26px] leading-none max-md:-mb-0.5"><!></span></h4></div></div></div> <div class="flex justify-end px-5 max-md:mt-2 md:gap-10 md:px-10"><div class="flex w-1/3 flex-col items-end justify-end md:w-1/2"><ul class="w-full text-[8px] md:w-[60%] md:text-[10px]"><li><!></li> <li><!></li> <li><!></li></ul></div> <div class="flex w-2/3 justify-end md:w-1/2"><!></div></div> <div class="mt-8"><!> <div class="mb-28 flex justify-center"><!></div></div></div> <!> <!>',
    1
  ),
  be = d("<!> <!>", 1);
function Ae(h, i) {
  sa(i, !0);
  const p = {
      title: "NEWS | エムトラスト株式会社",
      canonical: "https://m-trust.co.jp/news/",
    },
    _ = 8;
  let l = La(ra([])),
    f = z(() => y(l).length < W.newsItems.length);
  Na(() => {
    W.newsItems.length && y(l).length === 0 && u();
  });
  function u() {
    const b = y(l).length + _;
    Ea(l, ra(W.newsItems.slice(0, b)));
  }
  var T = be(),
    w = B(T);
  Ua(w, Ra(p));
  var S = a(a(w, !0));
  D(
    S,
    () => W.isModuleLoaded,
    ($) => {
      var b = he(),
        P = B(b),
        j = e(P),
        I = e(j),
        L = e(I),
        N = e(L);
      x(N, {
        children: (r, o) => {
          var s = de();
          t(r, s);
        },
      });
      var E = a(a(N, !0));
      x(E, {
        children: (r, o) => {
          var s = se();
          t(r, s);
        },
      });
      var R = a(a(L, !0)),
        C = e(R);
      V(C, { rect: "absolute bottom-0 inset-x-0 h-px", color: "bg-[#a9a9a9]" });
      var A = a(a(C, !0)),
        U = e(A);
      x(U, {
        children: (r, o) => {
          var s = le();
          t(r, s);
        },
      });
      var m = a(a(A, !0)),
        g = e(m);
      x(g, {
        children: (r, o) => {
          var s = ie();
          Ba(
            s,
            (G, Y) => Ga(G, Y),
            () => "/about/"
          ),
            t(r, s);
        },
      });
      var n = a(a(I, !0)),
        v = e(n),
        c = e(v),
        k = e(c);
      x(k, {
        children: (r, o) => {
          var s = ne();
          t(r, s);
        },
      });
      var F = a(a(c, !0));
      x(F, {
        children: (r, o) => {
          var s = oe();
          t(r, s);
        },
      });
      var H = a(a(F, !0));
      x(H, {
        children: (r, o) => {
          var s = ve();
          t(r, s);
        },
      });
      var ia = a(a(H, !0));
      x(ia, {
        children: (r, o) => {
          var s = me();
          t(r, s);
        },
      });
      var na = a(a(v, !0)),
        oa = e(na),
        J = e(oa);
      Wa(J, { text: "NEWS" });
      var va = a(a(J, !0)),
        ma = e(va);
      x(ma, {
        children: (r, o) => {
          var s = xe();
          t(r, s);
        },
      });
      var K = a(a(j, !0)),
        Q = e(K),
        xa = e(Q),
        Z = e(xa),
        pa = e(Z);
      x(pa, {
        children: (r, o) => {
          var s = pe();
          t(r, s);
        },
      });
      var aa = a(a(Z, !0)),
        ca = e(aa);
      x(ca, {
        children: (r, o) => {
          var s = ce();
          t(r, s);
        },
      });
      var _a = a(a(aa, !0)),
        fa = e(_a);
      x(fa, {
        children: (r, o) => {
          var s = _e();
          t(r, s);
        },
      });
      var ua = a(a(Q, !0)),
        ha = e(ua);
      X(ha, {
        children: (r, o) => {
          var s = fe();
          t(r, s);
        },
      });
      var ba = a(a(K, !0)),
        ea = e(ba);
      Oa(
        ea,
        65,
        () => y(l),
        Sa,
        (r, o, s) => {
          var G = da(),
            Y = B(G),
            ka = z(() => y(l).length <= _);
          re(Y, {
            get data() {
              return Ca(o);
            },
            get hasAnimation() {
              return y(ka);
            },
          }),
            t(r, G);
        }
      );
      var ga = a(a(ea, !0)),
        wa = e(ga);
      D(
        wa,
        () => y(f),
        (r) => {
          var o = ue();
          (o.__click = u), t(r, o);
        }
      );
      var ta = a(a(P, !0));
      Da(ta, {});
      var Pa = a(a(ta, !0));
      Fa(Pa, { href: "/about/", text: "ABOUT US", number: "2" }), t($, b);
    }
  ),
    t(h, T),
    la();
}
ja(["click"]);
export { Ae as component };
