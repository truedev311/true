import { y as v, z as y, A as E } from "./index-client.hmWN-4Cw.js";
function g(u, s, i) {
  let r, o;
  v(() => {
    r !== (r = s()) && (o && (E(o), (o = null)), r && (o = y(() => i(r))));
  });
}
const k = "modulepreload",
  p = function (u, s) {
    return new URL(u, s).href;
  },
  m = {},
  P = function (s, i, r) {
    let o = Promise.resolve();
    if (i && i.length > 0) {
      const l = document.getElementsByTagName("link"),
        e = document.querySelector("meta[property=csp-nonce]"),
        h =
          (e == null ? void 0 : e.nonce) ||
          (e == null ? void 0 : e.getAttribute("nonce"));
      o = Promise.all(
        i.map((t) => {
          if (((t = p(t, r)), t in m)) return;
          m[t] = !0;
          const c = t.endsWith(".css"),
            d = c ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let a = l.length - 1; a >= 0; a--) {
              const f = l[a];
              if (f.href === t && (!c || f.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${t}"]${d}`)) return;
          const n = document.createElement("link");
          if (
            ((n.rel = c ? "stylesheet" : k),
            c || ((n.as = "script"), (n.crossOrigin = "")),
            (n.href = t),
            h && n.setAttribute("nonce", h),
            document.head.appendChild(n),
            c)
          )
            return new Promise((a, f) => {
              n.addEventListener("load", a),
                n.addEventListener("error", () =>
                  f(new Error(`Unable to preload CSS for ${t}`))
                );
            });
        })
      );
    }
    return o
      .then(() => s())
      .catch((l) => {
        const e = new Event("vite:preloadError", { cancelable: !0 });
        if (((e.payload = l), window.dispatchEvent(e), !e.defaultPrevented))
          throw l;
      });
  };
export { P as _, g as c };
