import {
  a as g,
  t as _,
  s as o,
  c as p,
  f as h,
  b as i,
} from "./disclose-version.DQ6zD9ir.js";
import { r as v, p as b, a as d } from "./index-client.hmWN-4Cw.js";
import { i as l } from "./lifecycle.Cw3YHxgF.js";
import { u as x, s as $ } from "./store.XiFg35UT.js";
import { p as y } from "./stores.DDfPBFEx.js";
var E = _("<h1> </h1> <p> </p>", 1);
function A(m, n) {
  d(n, !1);
  const r = {};
  x(r);
  const s = () => $(y, "$page", r);
  l();
  var t = E(),
    a = h(t),
    f = p(a),
    c = i(i(a, !0)),
    u = p(c);
  v(() => {
    var e;
    o(f, s().status), o(u, (e = s().error) == null ? void 0 : e.message);
  }),
    g(m, t),
    b();
}
export { A as component };
