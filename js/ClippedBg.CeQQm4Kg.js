import {
  e as g,
  a as k,
  t as _,
  f as E,
  c as M,
  b as v,
} from "./disclose-version.DQ6zD9ir.js";
import {
  a as A,
  o as B,
  g as r,
  s as w,
  r as C,
  p as D,
  b,
} from "./index-client.hmWN-4Cw.js";
import { s as i, P as L, b as O } from "./isHover.C_Gi8ajW.js";
import { b as S, p as T } from "./this.BnIkoQJo.js";
import { g as a } from "./index.ZORhgBxb.js";
import { o as $ } from "./2.xl1ZLZO7.js";
var R = _(
  '<div class="mt-[-52lvh] h-[200lvh] md:mt-[-250lvh] md:h-[220lvh]"></div> <div class="pointer-events-none fixed inset-x-0 top-0 flex h-lvh items-center justify-center"><div class="origin-top bg-[#f2f2f2]"></div></div>',
  1
);
function N(x, y) {
  A(y, !0);
  let n = b(void 0),
    l = b(void 0);
  const t = { width: 191.44, height: 158.74, defaultScale: 0.2 };
  B(() => {
    const o = a.matchMedia();
    let p;
    o.add(
      {
        isDefault: "not all and (min-width: 768px)",
        isMd: "(min-width: 768px)",
      },
      (e) => {
        const { isMd: s } = e.conditions,
          z = (Math.max(i.width, i.height) / t.width) * 21;
        return (
          a.set(r(l), { autoAlpha: 0 }),
          (p = a
            .timeline({
              scrollTrigger: {
                id: "clipped-bg",
                trigger: r(n),
                scrub: !0,
                start: "top top",
                end: "bottom top",
                onEnter() {
                  a.set(r(l), { autoAlpha: 1 }),
                    a.set("#fluid-image", {
                      clipPath: "url(#fluid-image-clip-path-clipped-bg)",
                    });
                },
                onEnterBack() {
                  a.set("#fluid-image", {
                    clipPath: "url(#fluid-image-clip-path-clipped-bg)",
                  });
                },
                onLeaveBack() {
                  a.set("#fluid-image", {
                    clipPath: "url(#fluid-image-clip-path-kv)",
                  }),
                    a.set(r(l), { autoAlpha: 0 });
                },
              },
              defaults: { ease: "power3.in", duration: 1 },
            })
            .fromTo(
              r(l),
              { scaleY: 1 },
              { scaleY: 0, duration: s ? 0.4 : 0.12, ease: "power3.out" }
            )
            .fromTo(
              "#fluid-image-clip-path-clipped-bg",
              { scale: t.defaultScale },
              { scale: t.defaultScale, duration: s ? 0.4 : 0.12 },
              "<"
            )
            .fromTo(
              "#fluid-image-clip-path-clipped-bg",
              { scale: t.defaultScale },
              { scale: z, duration: 0.7 },
              s ? ">0.15" : ">-=0.04"
            )
            .fromTo(
              "#fluid-image-clip-path-clipped-bg",
              { "--origin-p": 0 },
              { "--origin-p": 1, duration: 0.7, ease: "power3.inOut" },
              "<"
            )
            .fromTo(
              "#fluid-image-clip-path-clipped-bg",
              { rotate: 0 },
              { rotate: 120, duration: 0.44, ease: "power2.inOut" },
              "<0.26"
            )),
          () => {
            p.kill();
          }
        );
      }
    );
    let d = {
      prevScreenSize: { width: i.width, height: i.height },
      timeout: 0,
    };
    const m = () => {
        clearTimeout(d.timeout),
          (d.prevScreenSize = { width: i.width, height: i.height });
        const e = document.querySelector("#fluid-image-clip-path-clipped-bg"),
          s = e.style.getPropertyValue("--w");
        e.style.setProperty("--w", `${parseFloat(s) - 1}px`),
          (d.timeout = window.setTimeout(
            () => e.style.setProperty("--w", s),
            500
          ));
      },
      f = $(() => {
        var e;
        (d.prevScreenSize.width !== i.width ||
          d.prevScreenSize.height !== i.height) &&
          m(),
          (e = p.scrollTrigger) == null || e.refresh();
      });
    return (
      window.addEventListener("resize", f),
      setTimeout(() => {
        var e;
        m(), (e = p.scrollTrigger) == null || e.refresh();
      }, L),
      () => {
        p.kill(), o.kill(), window.removeEventListener("resize", f);
      }
    );
  });
  var c = R(),
    h = E(c);
  S(
    h,
    (o) => w(n, T(o)),
    () => r(n)
  );
  var P = v(v(h, !0)),
    u = M(P);
  S(
    u,
    (o) => w(l, T(o)),
    () => r(l)
  ),
    C(() =>
      O(
        u,
        "style",
        `width: ${g(t.width * t.defaultScale + 2)}px; height: ${g(
          t.height * t.defaultScale + 2
        )}px;`
      )
    ),
    k(x, c),
    D();
}
export { N as default };
