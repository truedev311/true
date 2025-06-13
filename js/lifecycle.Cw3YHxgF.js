import {
  n as o,
  q as r,
  t as c,
  v as i,
  C as u,
  w as l,
  c as _,
  g as p,
  x as m,
} from "./index-client.hmWN-4Cw.js";
import { r as s, b } from "./entry.B8zhSzpe.js";
function h() {
  const t = c,
    n = t.u;
  n &&
    (n.b.length &&
      o(() => {
        var f;
        a(t), s(n.b);
        const e = (f = i) == null ? void 0 : f.parent;
        e != null && !(e.f & u) && l(e);
      }),
    r(() => {
      const e = _(() => n.m.map(b));
      return () => {
        for (const f of e) typeof f == "function" && f();
      };
    }),
    n.a.length &&
      r(() => {
        a(t), s(n.a);
      }));
}
function a(t) {
  if (t.d) for (const n of t.d) p(n);
  m(t.s);
}
export { h as i };
