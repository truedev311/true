import {
  i as Mr,
  e as Ir,
  a as c,
  s as Se,
  t as v,
  c as a,
  b as e,
  f as Ie,
  h as Lr,
} from "./disclose-version.DQ6zD9ir.js";
import {
  r as I,
  a as G,
  p as V,
  q as zr,
  s as B,
  g as $,
  b as R,
} from "./index-client.hmWN-4Cw.js";
import { i as O, p as Nr } from "./this.BnIkoQJo.js";
import {
  r as Ge,
  c as Y,
  b as Ve,
  a as Br,
  d as Rr,
  w as Sr,
  p as Gr,
} from "./isHover.C_Gi8ajW.js";
import { s as Vr } from "./props.IDBnocEi.js";
import { u as Yr, s as w } from "./store.XiFg35UT.js";
import { g as M, d as Zr, w as qr } from "./entry.B8zhSzpe.js";
import { M as Dr, G as Hr, N as Jr, p as Ur } from "./NextPage.DDFJuAP0.js";
import { P as h, R as Wr, b as Le, a as S } from "./RtText.BfAGuYmQ.js";
import { B as Xr } from "./Banner.Dwm6Qx0G.js";
function Kr(r) {
  Mr && r.firstChild !== null && (r.textContent = "");
}
let ze = !1;
function Ye(r, t, n, o = n) {
  r.addEventListener(t, n);
  const u = r.__on_r;
  u
    ? (r.__on_r = () => {
        u(), o();
      })
    : (r.__on_r = o),
    ze ||
      ((ze = !0),
      document.addEventListener(
        "reset",
        (p) => {
          Promise.resolve().then(() => {
            var i;
            if (!p.defaultPrevented)
              for (const _ of p.target.elements)
                (i = _.__on_r) == null || i.call(_);
          });
        },
        { capture: !0 }
      ));
}
function Ze(r, t, n) {
  Ye(r, "input", () => {
    n(Ne(r) ? Be(r.value) : r.value);
  }),
    I(() => {
      var o = t();
      (r.__value = o),
        !(Ne(r) && o === Be(r.value)) &&
          ((r.type === "date" && !o && !r.value) || (r.value = Ir(o)));
    });
}
function Qr(r, t, n) {
  Ye(r, "change", () => {
    var o = r.checked;
    n(o);
  }),
    t() == null && n(!1),
    I(() => {
      var o = t();
      r.checked = !!o;
    });
}
function Ne(r) {
  var t = r.type;
  return t === "number" || t === "range";
}
function Be(r) {
  return r === "" ? null : +r;
}
function et(...r) {
  let t = [],
    n = [];
  if (
    (r.forEach((f) => {
      const d = M(f);
      t.includes(d.name)
        ? (n = n.includes(d.name) ? n : [...n, d.name])
        : (t = [...t, d.name]);
    }),
    n.length)
  )
    throw new Error(
      `Cannot have the fields with the same name: ${n.join(", ")}`
    );
  const o = Zr(r, (f) => ({
      valid: f.every((d) => d.valid),
      dirty: f.some((d) => d.dirty),
      get summary() {
        return f.reduce((d, g) => ((d[g.name] = g.value), d), {});
      },
      errors: f
        .map((d) =>
          d.errors.map((g) => (g.includes(".") ? g : `${d.name}.${g}`))
        )
        .flat()
        .filter((d, g, b) => b.indexOf(d) === g),
      hasError(d) {
        return this.errors.findIndex((g) => g === d) !== -1;
      },
    })),
    { subscribe: u } = o;
  function p() {
    r.forEach((f) => f.reset && f.reset());
  }
  function i() {
    r.forEach((f) => f.clear && f.clear());
  }
  async function _() {
    for (const f of r) f.validate && (await f.validate());
  }
  function x(f) {
    return r.find((d) => M(d).name === f);
  }
  function y() {
    return M(o).summary;
  }
  return {
    subscribe: u,
    reset: p,
    validate: _,
    getField: x,
    summary: y,
    clear: i,
  };
}
function rt(r) {
  return (
    !!r &&
    (typeof r == "object" || typeof r == "function") &&
    typeof r.then == "function"
  );
}
const tt = {
  valid: !0,
  checkOnInit: !1,
  validateOnChange: !0,
  stopAtFirstError: !1,
};
function at(r) {
  const t = Object.keys(r);
  return ["name", "value", "valid", "invalid", "errors"].every((n) =>
    t.includes(n)
  );
}
function nt(r) {
  const t = function (o) {
      return r.subscribe !== void 0;
    },
    n = function (o) {
      return !!r.name && r.valid !== void 0;
    };
  return t() ? M(r).value : n() ? r.value : r;
}
async function Re(r, t, n = !1) {
  const o = nt(r);
  let u = [];
  for (const p of t) {
    let i = p(o);
    if ((rt(i) && (i = await i), n && !i.valid)) {
      u = [i];
      break;
    }
    u = [...u, i];
  }
  return u;
}
function A(r, t, n = {}) {
  if (t) {
    const o = t.filter((p) => !p.valid).map((p) => p.name),
      u = !o.length;
    return { ...r, valid: u, invalid: !u, errors: o, ...n };
  }
  return r;
}
function ot(r, t, n = [], o) {
  const u = {
      name: r,
      value: t,
      valid: o.valid,
      invalid: !o.valid,
      dirty: !1,
      errors: [],
    },
    p = qr(u),
    { subscribe: i, update: _, set: x } = p;
  async function y(b, P = !1) {
    if ((at(b) || (b = A(M(p), [], { value: b })), P || o.validateOnChange)) {
      let F = await Re(b, n, o.stopAtFirstError);
      x(A(b, F, { dirty: !0 }));
    } else x(A(b, null, { dirty: !0 }));
  }
  async function f() {
    const b = await Re(p, n, o.stopAtFirstError);
    let P;
    return _((F) => ((P = A(F, b, { dirty: !1 })), P)), P;
  }
  function d() {
    x(
      A({
        dirty: !1,
        errors: [],
        name: r,
        valid: o.valid,
        invalid: !o.valid,
        value: t,
      })
    );
  }
  o.checkOnInit && y(u);
  function g() {
    x(
      A({
        dirty: !1,
        errors: [],
        name: r,
        valid: o.valid,
        invalid: !o.valid,
        value: null,
      })
    );
  }
  return { subscribe: i, update: _, set: y, validate: f, reset: d, clear: g };
}
function C(r, t, n = [], o = {}) {
  return ot(r, t, n, { ...tt, ...o });
}
function st() {
  return (r) => ({
    valid:
      !!r &&
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/.test(
        r
      ),
    name: "not_an_email",
  });
}
function T() {
  return (r) => {
    let t = !0;
    return (
      r == null && (t = !1),
      typeof r == "string" && (t = r.replace(/\s/g, "").length > 0),
      { valid: t, name: "required" }
    );
  };
}
var lt = v(
    '<img class="absolute right-0 top-1/2 z-10 w-4 -translate-y-1/2 md:w-[19px]" src="/images/icon-caution.svg" alt="">'
  ),
  it = v(
    '<div class="relative flex border-b border-[#9d9d9d] px-1 py-3 font-serif text-[12px] md:p-3 md:text-[14px]"><p class="w-[85px] origin-left scale-x-90 pt-2 md:w-[140px] md:origin-center"> </p> <div class="flex-1"><input type="text"> <!></div></div>'
  );
function E(r, t) {
  G(t, !0);
  var n = it(),
    o = a(n),
    u = a(o),
    p = e(e(o, !0)),
    i = a(p);
  Ge(i);
  var _ = e(e(i, !0));
  O(
    _,
    () => t.error,
    (x) => {
      var y = lt();
      c(x, y);
    }
  ),
    I(() => {
      Se(u, t.label),
        Y(
          i,
          `w-full border-none bg-transparent p-2 font-medium focus:border-transparent focus:outline-none ${
            t.error ? "placeholder-[#e67e97]" : "placeholder-[#a7a7a7]"
          }`
        ),
        Ve(i, "placeholder", t.error ? t.errorMsg : t.placeholder);
    }),
    Ze(
      i,
      () => t.value.value,
      (x) => (t.value.value = x)
    ),
    c(r, n),
    V();
}
var dt = v(
    '<img class="absolute right-0 top-4 z-10 w-4 md:w-[19px]" src="/images/icon-caution.svg" alt="">'
  ),
  ct = v(
    '<div class="relative border-b border-[#9d9d9d] px-1 py-3 font-serif text-[12px] md:flex md:p-3 md:text-[14px]"><p class="w-[100px] origin-left scale-x-90 pt-2 md:w-[140px] md:origin-center"> </p> <div class="flex-1 max-md:mt-2"><textarea></textarea> <!></div></div>'
  );
function vt(r, t) {
  G(t, !0);
  var n = ct(),
    o = a(n),
    u = a(o),
    p = e(e(o, !0)),
    i = a(p);
  Kr(i);
  var _ = e(e(i, !0));
  O(
    _,
    () => t.error,
    (x) => {
      var y = dt();
      c(x, y);
    }
  ),
    I(() => {
      Se(u, t.label),
        Y(
          i,
          `h-[152px] w-full border-none bg-transparent p-2 font-medium focus:border-transparent focus:outline-none ${
            t.error ? "placeholder-[#e67e97]" : "placeholder-[#a7a7a7]"
          }`
        ),
        Ve(i, "placeholder", t.error ? t.errorMsg : t.placeholder);
    }),
    Ze(
      i,
      () => t.value.value,
      (x) => (t.value.value = x)
    ),
    c(r, n),
    V();
}
var ut = v("(SCROLL) - DOWN", 1),
  ft = v(
    'NEXT PAGE - <span class="font-aboreto inline-block scale-y-[1.2] text-[11px]">( PRIVACY POLICY )</span>',
    1
  ),
  pt = v("(5)", 1),
  mt = v(
    '<img class="w-full max-w-[700px] object-cover max-md:h-[80px]" src="/images/image-touch.webp" width="1400" height="220" alt="">'
  ),
  xt = v("Connect with us for your goals.", 1),
  _t = v("Please feel free to contact us first.", 1),
  gt = v("*", 1),
  ht = v("お電話はこちら", 1),
  bt = v("03-6281-9050", 1),
  yt = v("Click here to call us.", 1),
  wt = v("お問い合わせ", 1),
  Pt = v("CONTACT", 1),
  $t = v(
    'フォームに必要項⽬を⼊⼒の上、<br class="md:hidden">「内容を送信」ボタンを押してください。',
    1
  ),
  Ct = v(
    'なお、内容によっては、ご連絡までお時間がかかるものが<br class="md:hidden">ございますので、あらかじめご了承ください。',
    1
  ),
  Tt = v("※全て⼊⼒必須項⽬です。", 1),
  kt = v(
    '<img class="w-full max-w-[700px] object-cover max-md:h-[80px]" src="/images/image-touch-contact.webp" width="1400" height="220" alt="">'
  ),
  Et = v(
    '<img class="absolute right-0 top-1/2 z-10 w-4 -translate-y-1/2 md:w-[19px]" src="/images/icon-caution.svg" alt="">'
  ),
  Ft = v(
    '<p class="mt-6 text-center font-serif text-[11px] font-medium text-[#e67e97] md:mt-9 md:text-[13px]">未入力の項目がございます</p>'
  ),
  At = v(
    '<div class="mx-auto w-full pt-[112px] md:pt-[158px]"><div class="px-5 md:px-10"><div class="flex h-[20px] justify-between gap-6 md:h-[26px] md:gap-0"><div class="flex w-1/2"><div class="w-full max-w-[350px] md:ml-auto"><p class="whitespace-nowrap text-[10px]"><!></p></div></div> <div class="flex w-1/2 justify-end gap-8"><button class="flex whitespace-nowrap text-[10px]"><!></button></div></div> <div class="mx-auto mt-20 w-full max-w-[1536px] md:mt-[100px]"><div class="overflow-hidden max-md:flex max-md:w-[94vw] max-md:justify-center"><h4 class="font-classico flex origin-center scale-x-[0.7] justify-center whitespace-nowrap text-center text-[60px] leading-[0.8] max-md:w-[130vw] md:text-[88px] lg:text-[118px]"><!> <span class="font-classico ml-6 mt-0.5 inline-block align-top text-[26px] leading-none md:mt-1.5"><!></span></h4></div> <div class="mx-auto mt-6 max-w-[700px] md:mt-14"><div class="flex justify-center"><!></div> <div class="mb-4 mt-[30px] text-center md:mt-10"><div class="text-[8px] font-light uppercase md:text-[10px]"><p><!></p> <p><!></p> <span class="font-inter text-[21px] font-thin max-md:h-4 md:text-[31px]"><!></span></div></div> <a href="tel:03-6281-9050" target="_blank" rel="noopener noreferrer" class="relative flex items-center justify-between py-[34px]"><!> <!> <div class="flex items-center gap-8"><p class="font-serif text-[14px]"><!></p> <p class="font-aboreto relative p-1 text-[15px]"><!> <!></p></div> <p class="text-[8px] uppercase max-md:flex max-md:items-center md:text-[10px]"><!></p></a> <div class="mt-16"><div class="text-center"><h6 class="origin-center scale-x-90 font-serif text-[28px]"><!></h6> <p class="text-[10px]"><!></p></div> <div class="mt-8 origin-center scale-x-90 text-center font-serif text-[12px] leading-[1.8] md:text-[14px] md:leading-loose"><p><!></p> <p><!></p> <p><!></p></div> <figure class="mt-7"><!></figure> <form class="mb-32 mt-20"><div class="space-y-5"><!> <!> <!> <!> <!> <!> <!> <!></div> <div class="relative flex justify-center py-14"><div class="inline-flex items-center"><label class="relative flex cursor-pointer items-center rounded-full p-3" for="agree"><div class="relative h-5 w-5"><input type="checkbox" id="agree"> <span class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></span></div> <span class="ml-2 origin-left scale-x-90 font-serif text-[14px]">プライバシーポリシー に同意する</span></label></div> <!></div> <div class="flex justify-center"><button type="button" class="origin-center scale-x-90 border-b border-[#787878] px-3 py-1 font-serif text-[16px]">内容を送信</button></div> <!></form></div></div></div></div></div> <!> <!> <!>',
    1
  ),
  jt = v("<!> <!>", 1);
function Vt(r, t) {
  G(t, !0);
  const n = {};
  Yr(n);
  const o = () => w(U, "$myForm", n),
    u = () => w(b, "$company", n),
    p = () => w(P, "$deploy", n),
    i = () => w(F, "$name", n),
    _ = () => w(Z, "$postCode", n),
    x = () => w(q, "$phone", n),
    y = () => w(D, "$address", n),
    f = () => w(H, "$mail", n),
    d = () => w(J, "$content", n),
    g = {
      title: "CONTACT | エムトラスト株式会社",
      canonical: "https://m-trust.co.jp/contact/",
    },
    b = C("company", "", [T()]),
    P = C("deploy", "", [T()]),
    F = C("name", "", [T()]),
    Z = C("postCode", "", [T()]),
    q = C("phone", "", [T()]),
    D = C("address", "", [T()]),
    H = C("email", "", [T(), st()]),
    J = C("content", "", [T()]),
    U = et(b, P, F, Z, q, D, H, J);
  let L = R(void 0),
    z = R(!1),
    j = R(!1);
  zr(() => {
    B(L, Nr(o().valid));
  });
  async function qe() {
    return fetch("/sendmail.php", {
      method: "POST",
      body: JSON.stringify({
        company: u().value,
        deploy: p().value,
        name: i().value,
        postCode: _().value,
        phone: x().value,
        address: y().value,
        mail: f().value,
        content: d().value,
      }),
    })
      .then((k) => k.json())
      .then((k) => k.status === "success")
      .catch((k) => (console.error("Error:", k), !1));
  }
  async function De() {
    B(j, !$(z)),
      U.validate(),
      !$(j) &&
        (await Sr(300),
        $(L) &&
          ((await qe())
            ? Gr("/contact/thankyou")
            : alert("Failed to send mail")));
  }
  var W = jt(),
    X = Ie(W);
  Dr(X, Vr(g));
  var He = e(e(X, !0));
  O(
    He,
    () => Br.isModuleLoaded,
    (k) => {
      var K = At(),
        Q = Ie(K),
        Je = a(Q),
        ee = a(Je),
        re = a(ee),
        Ue = a(re),
        We = a(Ue),
        Xe = a(We);
      h(Xe, {
        children: (s, m) => {
          var l = ut();
          c(s, l);
        },
      });
      var Ke = e(e(re, !0)),
        te = a(Ke),
        Qe = a(te);
      h(Qe, {
        children: (s, m) => {
          var l = ft();
          c(s, l);
        },
      });
      var er = e(e(ee, !0)),
        ae = a(er),
        rr = a(ae),
        ne = a(rr);
      Wr(ne, { text: "GET IN TOUCH" });
      var tr = e(e(ne, !0)),
        ar = a(tr);
      h(ar, {
        children: (s, m) => {
          var l = pt();
          c(s, l);
        },
      });
      var nr = e(e(ae, !0)),
        oe = a(nr),
        or = a(oe);
      Le(or, {
        children: (s, m) => {
          var l = mt();
          c(s, l);
        },
      });
      var se = e(e(oe, !0)),
        sr = a(se),
        le = a(sr),
        lr = a(le);
      h(lr, {
        children: (s, m) => {
          var l = xt();
          c(s, l);
        },
      });
      var ie = e(e(le, !0)),
        ir = a(ie);
      h(ir, {
        children: (s, m) => {
          var l = _t();
          c(s, l);
        },
      });
      var dr = e(e(ie, !0)),
        cr = a(dr);
      h(cr, {
        children: (s, m) => {
          var l = gt();
          c(s, l);
        },
      });
      var de = e(e(se, !0)),
        ce = a(de);
      S(ce, { rect: "absolute top-0 inset-x-0 h-px", color: "bg-[#9d9d9d]" });
      var ve = e(e(ce, !0));
      S(ve, {
        rect: "absolute bottom-0 inset-x-0 h-px",
        color: "bg-[#9d9d9d]",
      });
      var ue = e(e(ve, !0)),
        fe = a(ue),
        vr = a(fe);
      h(vr, {
        children: (s, m) => {
          var l = ht();
          c(s, l);
        },
      });
      var ur = e(e(fe, !0)),
        pe = a(ur);
      S(pe, {
        rect: "absolute h-px inset-x-0 bottom-0",
        color: "bg-[#787878]",
      });
      var fr = e(e(pe, !0));
      h(fr, {
        children: (s, m) => {
          var l = bt();
          c(s, l);
        },
      });
      var pr = e(e(ue, !0)),
        mr = a(pr);
      h(mr, {
        children: (s, m) => {
          var l = yt();
          c(s, l);
        },
      });
      var xr = e(e(de, !0)),
        me = a(xr),
        xe = a(me),
        _r = a(xe);
      h(_r, {
        children: (s, m) => {
          var l = wt();
          c(s, l);
        },
      });
      var gr = e(e(xe, !0)),
        hr = a(gr);
      h(hr, {
        children: (s, m) => {
          var l = Pt();
          c(s, l);
        },
      });
      var _e = e(e(me, !0)),
        ge = a(_e),
        br = a(ge);
      h(br, {
        children: (s, m) => {
          var l = $t();
          c(s, l);
        },
      });
      var he = e(e(ge, !0)),
        yr = a(he);
      h(yr, {
        children: (s, m) => {
          var l = Ct();
          c(s, l);
        },
      });
      var wr = e(e(he, !0)),
        Pr = a(wr);
      h(Pr, {
        children: (s, m) => {
          var l = Tt();
          c(s, l);
        },
      });
      var be = e(e(_e, !0)),
        $r = a(be);
      Le($r, {
        children: (s, m) => {
          var l = kt();
          c(s, l);
        },
      });
      var Cr = e(e(be, !0)),
        ye = a(Cr),
        we = a(ye);
      E(we, {
        label: "貴社名",
        get value() {
          return u();
        },
        placeholder: "ex. エムトラスト株式会社",
        get error() {
          return u().invalid;
        },
        errorMsg: "入力してください",
      });
      var Pe = e(e(we, !0));
      E(Pe, {
        label: "部署",
        get value() {
          return p();
        },
        placeholder: "ex. 営業部",
        get error() {
          return p().invalid;
        },
        errorMsg: "入力してください",
      });
      var $e = e(e(Pe, !0));
      E($e, {
        label: "お名前",
        get value() {
          return i();
        },
        placeholder: "ex. ⼭⽥ 太郎",
        get error() {
          return i().invalid;
        },
        errorMsg: "入力してください",
      });
      var Ce = e(e($e, !0));
      E(Ce, {
        label: "郵便番号",
        get value() {
          return _();
        },
        placeholder: "ex. 104-0028",
        get error() {
          return _().invalid;
        },
        errorMsg: "入力してください",
      });
      var Te = e(e(Ce, !0));
      E(Te, {
        label: "住所",
        get value() {
          return y();
        },
        placeholder:
          "ex. 東京都中央区⼋重洲2-2-1 東京ミッドタウン⼋重洲 ⼋重洲セントラルタワー11階",
        get error() {
          return y().invalid;
        },
        errorMsg: "入力してください",
      });
      var ke = e(e(Te, !0));
      E(ke, {
        label: "電話番号",
        get value() {
          return x();
        },
        placeholder: "ex. 0362819050",
        get error() {
          return x().invalid;
        },
        errorMsg: "入力してください",
      });
      var Ee = e(e(ke, !0));
      E(Ee, {
        label: "メールアドレス",
        get value() {
          return f();
        },
        placeholder: "ex. info@m-trust.co.jp",
        get error() {
          return f().invalid;
        },
        errorMsg: "入力してください",
      });
      var Tr = e(e(Ee, !0));
      vt(Tr, {
        label: "お問い合わせ内容",
        get value() {
          return d();
        },
        placeholder: "ex. お問い合わせ内容を⼊⼒してください。",
        get error() {
          return d().invalid;
        },
        errorMsg: "入力してください",
      });
      var Fe = e(e(ye, !0)),
        Ae = a(Fe),
        kr = a(Ae),
        Er = a(kr),
        N = a(Er);
      Ge(N);
      var Fr = e(e(Ae, !0));
      O(
        Fr,
        () => $(j),
        (s) => {
          var m = Et();
          c(s, m);
        }
      );
      var je = e(e(Fe, !0)),
        Ar = a(je),
        jr = e(e(je, !0));
      O(
        jr,
        () => !$(L) || $(j),
        (s) => {
          var m = Ft();
          c(s, m);
        }
      );
      var Oe = e(e(Q, !0));
      Xr(Oe, {});
      var Me = e(e(Oe, !0));
      Hr(Me, { hasButton: !1 });
      var Or = e(e(Me, !0));
      Jr(Or, { href: "/privacy/", text: "PRIVACY PRIVACY", number: "6" }),
        I(() =>
          Y(
            N,
            `before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-[#b3b3b3] bg-[#eaeaea] transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10 ${
              $(j) ? "border-[#f87c9a]" : "border-[#b3b3b3]"
            }`
          )
        ),
        Rr(
          te,
          (s, m) => Ur(s, m),
          () => "/privacy/"
        ),
        Qr(
          N,
          () => $(z),
          (s) => B(z, s)
        ),
        Lr("click", Ar, De, !1),
        c(k, K);
    }
  ),
    c(r, W),
    V();
}
export { Vt as component };
