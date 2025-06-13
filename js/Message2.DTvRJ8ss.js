import {
  e as R,
  a as U,
  t as F,
  c as e,
  b as o,
} from "./disclose-version.DQ6zD9ir.js";
import {
  a as ee,
  o as ie,
  g as t,
  s as n,
  r as c,
  p as te,
  b as d,
} from "./index-client.hmWN-4Cw.js";
import {
  g as re,
  s as q,
  l as A,
  c as f,
  e as se,
  i as ae,
  t as le,
  b as oe,
} from "./isHover.C_Gi8ajW.js";
import { b as y, p as z } from "./this.BnIkoQJo.js";
import { g as M } from "./index.ZORhgBxb.js";
import { e as x } from "./index.CUyvS_rG.js";
import { I as ne } from "./NextPage.DDFJuAP0.js";
import { o as de } from "./2.xl1ZLZO7.js";
var ve = F(
    `<div class="w-[45.333vw] md:w-[290px]"><figure class="origin-left px-[10vw] text-white md:px-[64px]"><div class="origin-left text-[8vw] max-md:scale-50 md:text-[51px]"><!></div></figure> <p class="font-aboreto whitespace-nowrap border-l border-white px-[10vw] text-[1.6vw] uppercase leading-tight text-white md:mt-1 md:px-[64px] md:text-[10px]">We produce <br> your future and bring out<br> our client's potential<br> to its fullest.</p></div>`
  ),
  ce = F(
    '<div class="group pointer-events-none relative flex flex-col items-center justify-between pt-[calc(50lvh-41px)] mix-blend-difference max-md:mt-[-20lvh] md:pt-[calc(50lvh-82.5px)]"><div class="relative z-10"><div class="flex w-full items-center justify-center gap-2 font-serif text-[4vw] tracking-widest text-white md:gap-5 md:text-[30px]"><div class="relative flex flex-1 items-center justify-end"><div class="absolute right-0 origin-right scale-x-[0.75] overflow-hidden whitespace-nowrap leading-none"><div>希望は、</div></div></div> <figure class="size-[82px] will-change-transform md:size-[165px]"><div><div class="will-change-transform"><div class="duration-[0.8s] ease-out will-change-transform"><img src="/images/circle.svg" alt=""></div></div></div></figure> <div class="relative flex flex-1 items-center"><div class="absolute left-0 origin-left scale-x-[0.75] overflow-hidden whitespace-nowrap leading-none"><div>すべての土地にある。</div></div></div></div></div> <div class="relative mt-[40px] h-[72px] w-full overflow-hidden mix-blend-difference max-md:mb-[14vw] md:mt-[150px]"><div><div class="absolute left-0 flex h-full animate-[marquee-1/12_5s_linear_infinite] will-change-transform"></div></div></div></div>'
  );
function be(H, V) {
  ee(V, !0);
  let p = d(void 0),
    u = d(void 0),
    h = d(void 0),
    k = d(!1),
    E = d(!1),
    w = d(0),
    S = 0;
  ie(() => {
    const i = re(t(p)),
      _ = M.matchMedia();
    let v, s;
    _.add(
      {
        isDefault: "not all and (min-width: 768px)",
        isMd: "(min-width: 768px)",
      },
      (a) => {
        const { isMd: r } = a.conditions,
          j = r ? 140 : 70,
          I = (r ? 640 : 290) + j;
        (v = M.timeline({
          scrollTrigger: {
            id: "message2-1",
            trigger: t(p),
            pinSpacing: !0,
            pin: !0,
            scrub: !0,
            start: "top top",
            end: `+=${q.height * (r ? 1.2 : 0.8)}`,
            onUpdate: (l) => {
              n(k, l.progress > 0);
            },
            onEnter: i,
            onLeave: i,
            onLeaveBack: i,
            onEnterBack: i,
          },
        })),
          (s = M.timeline({
            scrollTrigger: {
              id: "message2-2",
              trigger: t(u),
              scrub: !0,
              start: `center+=${q.height * (r ? 1.2 : 0.8)} center`,
              end: `+=${I}`,
              onUpdate: (l) => {
                n(E, l.progress > 0.98);
              },
            },
            defaults: { ease: "none", duration: 1 },
          })
            .to(t(u), { y: I })
            .to(t(h), { y: -j, ease: "power2.in", duration: 0.5 }, 0.5));
        const C = (l) => {
          const Z = l.scroll - S;
          (S = l.scroll), n(w, t(w) + Z * (r ? 0.12 : 0.18));
        };
        return (
          A.on("scroll", C),
          () => {
            v.kill(), s.kill(), A.off("scroll", C);
          }
        );
      }
    );
    const m = de(() => {
      var a, r;
      (a = v.scrollTrigger) == null || a.refresh(),
        (r = s.scrollTrigger) == null || r.refresh();
    });
    return (
      window.addEventListener("resize", m),
      () => {
        v.kill(), s.kill(), _.kill(), window.removeEventListener("resize", m);
      }
    );
  });
  var g = ce();
  y(
    g,
    (i) => n(p, z(i)),
    () => t(p)
  );
  var $ = e(g),
    Y = e($),
    D = e(Y),
    G = e(D),
    J = e(G);
  c(() =>
    f(
      J,
      x.e("origin-top-left delay-300 duration-[0.6s] ease-out", {
        "group-[&:not(.is-visible)]": "translate-y-full rotate-6 delay-0",
      })
    )
  );
  var b = o(o(D, !0));
  y(
    b,
    (i) => n(u, z(i)),
    () => t(u)
  );
  var T = e(b);
  c(() =>
    f(
      T,
      x.e("size-full duration-[0.6s] ease-out", {
        "group-[&:not(.is-visible)]": "scale-0",
      })
    )
  );
  var B = e(T);
  y(
    B,
    (i) => n(h, z(i)),
    () => t(h)
  );
  var L = e(B),
    K = e(L),
    N = o(o(b, !0)),
    O = e(N),
    P = e(O);
  c(() =>
    f(
      P,
      x.e("origin-top-left delay-300 duration-[0.6s] ease-out", {
        "group-[&:not(.is-visible)]": "translate-y-full rotate-6 delay-0",
      })
    )
  );
  var Q = o(o($, !0)),
    W = e(Q);
  c(() =>
    f(
      W,
      x.e("relative size-full delay-300 duration-[0.6s]", {
        "group-[&:not(.is-visible)]": "translate-y-full delay-0",
      })
    )
  );
  var X = e(W);
  se(
    X,
    73,
    () => Array(12),
    ae,
    (i, _, v) => {
      var s = ve(),
        m = e(s),
        a = e(m),
        r = e(a);
      ne(r, {}), U(i, s);
    }
  ),
    c(() => {
      le(g, "is-visible", t(k)),
        oe(L, "style", `transform: rotate(${R(t(w))}deg)`),
        f(K, `size-full duration-500 ease-out ${R(t(E) ? "scale-[1.7]" : "")}`);
    }),
    U(H, g),
    te();
}
export { be as default };
