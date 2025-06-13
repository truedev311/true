import { n as i, a as l } from "./entry.B8zhSzpe.js";
import {
  e as c,
  c as f,
  g as b,
  U as o,
  s as a,
  m as _,
} from "./index-client.hmWN-4Cw.js";
function p(n, s, u) {
  let e = u[s];
  const t = e === void 0;
  t &&
    ((e = { store: null, last_value: null, value: _(o), unsubscribe: i }),
    (u[s] = e)),
    (t || e.store !== n) &&
      (e.unsubscribe(), (e.store = n ?? null), (e.unsubscribe = d(n, e.value)));
  const r = b(e.value);
  return r === o ? e.last_value : r;
}
function d(n, s) {
  return n == null ? (a(s, void 0), i) : l(n, (u) => a(s, u));
}
function I(n) {
  m(() => {
    let s;
    for (s in n) n[s].unsubscribe();
  });
}
function m(n) {
  c(() => () => f(n));
}
export { p as s, I as u };
