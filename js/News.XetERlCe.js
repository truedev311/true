import {
  s as w,
  a as h,
  t as _,
  b as t,
  c as s,
  g as L,
  f as z,
} from "./disclose-version.DQ6zD9ir.js";
import {
  a as k,
  r as M,
  p as E,
  o as j,
  g as y,
  s as N,
  b as O,
  u as S,
} from "./index-client.hmWN-4Cw.js";
import {
  p as T,
  d as b,
  e as q,
  i as C,
  a as D,
  h as H,
} from "./isHover.C_Gi8ajW.js";
import { b as I, p as P } from "./this.BnIkoQJo.js";
import { g as m } from "./index.ZORhgBxb.js";
import { o as R } from "./2.xl1ZLZO7.js";
import { p as W } from "./NextPage.DDFJuAP0.js";
const B = (n, r) => {
  function o() {
    T(r, { fadeOut: !0 });
  }
  return (
    n.addEventListener("click", o),
    {
      destroy() {
        n.removeEventListener("click", o);
      },
    }
  );
};
var F = _(
  '<button class="group relative flex overflow-hidden pb-4 text-left"><div class="absolute inset-x-0 -top-0.5 h-0.5 bg-[#737373] duration-300 ease-out group-hover:translate-y-0.5"></div> <div class="flex gap-4 duration-300 ease-out group-hover:translate-y-4"><p class="flex rotate-180 items-center justify-end gap-2 whitespace-nowrap break-keep text-[2.667vw] font-semibold [text-orientation:mixed] [writing-mode:vertical-rl] max-md:pb-[1.5vw] md:text-[10px]"><span class="aspect-square w-2 rounded-full border border-black"></span> </p> <div class="space-y-2"><p class="font-classico origin-left scale-x-[0.8] text-[4vw] text-[#3d3d3d] md:text-[15px]"> </p> <p class="w-[111%] origin-left scale-x-90 font-serif text-[3.467vw] md:text-[14px]"> </p></div></div></button>'
);
function G(n, r) {
  k(r, !0);
  var o = F(),
    d = s(o),
    l = t(t(d, !0)),
    u = s(l),
    x = s(u),
    v = t(x, !0),
    f = t(t(u, !0)),
    p = s(f),
    e = s(p),
    a = t(t(p, !0)),
    c = s(a);
  M(() => {
    w(v, r.data.type), w(e, r.data.date), w(c, r.data.title);
  }),
    b(
      o,
      (i, g) => B(i, g),
      () => `/news#n${r.data.id}`
    ),
    h(n, o),
    E();
}
var A = _(
  '<div class="px-3 pb-[120px] pt-[160px] md:p-10 md:pb-[150px] md:pt-[500px]"><div class="mx-auto w-full max-w-[1040px]"><h3 class="font-aboreto scale-x-[0.8] text-center text-[6.667vw] md:text-[36px]">NEWS</h3> <div class="mb-[34px] mt-[74px] grid grid-cols-2 gap-x-5 gap-y-[50px] md:my-[74px] md:grid-cols-3 md:gap-x-10 md:gap-y-[110px] lg:grid-cols-4"></div> <div class="relative flex justify-center"><button class="font-aboreto flex aspect-square w-[100px] items-center justify-center rounded-full border border-[#303030] text-[13px] duration-[0.3s] hover:scale-90 hover:bg-[#292929] hover:text-white">MORE</button></div></div></div>'
);
function Z(n, r) {
  k(r, !0);
  const o = 8;
  let d = O(void 0);
  j(() => {
    const e = m.matchMedia();
    let a;
    e.add(
      {
        isDefault: "not all and (min-width: 768px)",
        isMd: "(min-width: 768px)",
      },
      (i) => (
        i.conditions,
        (a = m
          .timeline({
            scrollTrigger: {
              id: "news",
              trigger: y(d),
              scrub: !0,
              start: "top bottom",
              end: "+=100%",
              onEnter() {
                m.set("#fluid-image", {
                  clipPath: "url(#fluid-image-clip-path-news)",
                });
              },
              onEnterBack() {
                m.set("#fluid-image", {
                  clipPath: "url(#fluid-image-clip-path-news)",
                });
              },
            },
          })
          .to("#fluid-image-clip-path-news", {
            "--yp": 1,
            duration: 1,
            ease: "none",
          })
          .to(
            "#fluid-image-clip-path-news",
            { "--xp": 1, ease: "power3.out" },
            "<"
          )),
        () => {
          a.kill();
        }
      )
    );
    const c = R(() => {
      var i;
      (i = a.scrollTrigger) == null || i.refresh();
    });
    return (
      window.addEventListener("resize", c),
      () => {
        a.kill(), e.kill(), window.removeEventListener("resize", c);
      }
    );
  });
  var l = A();
  I(
    l,
    (e) => N(d, P(e)),
    () => y(d)
  );
  var u = s(l),
    x = s(u),
    v = t(t(x, !0));
  q(
    v,
    73,
    () => D.newsItems.slice(0, o),
    C,
    (e, a, c) => {
      var i = L(),
        g = z(i);
      G(g, {
        get data() {
          return S(a);
        },
      }),
        h(e, i);
    }
  );
  var f = t(t(v, !0)),
    p = s(f);
  b(
    p,
    (e, a) => W(e, a),
    () => "/news/"
  ),
    b(p, (e) => H(e)),
    h(n, l),
    E();
}
export { Z as default };
