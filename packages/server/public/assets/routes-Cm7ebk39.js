import { i as e, n as t, r as n, t as r } from "./index-DYe-0TLz.js";
function i(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e || t) return { ...e, ...t };
}
var a = {};
function o(e, t, n, r, i) {
  if (!n && !r && !i && !e) return c(t);
  let a = c(e);
  return (t && (a = l(a, t)), n && (a = l(a, n)), r && (a = l(a, r)), i && (a = l(a, i)), a);
}
function s(e) {
  if (e.length === 0) return a;
  if (e.length === 1) return c(e[0]);
  let t = c(e[0]);
  for (let n = 1; n < e.length; n += 1) t = l(t, e[n]);
  return t;
}
function c(e) {
  return p(e) ? { ...e(a) } : u(e);
}
function l(e, t) {
  return p(t) ? t(e) : d(e, t);
}
function u(e) {
  let t = { ...e };
  for (let e in t) {
    let n = t[e];
    f(e, n) && (t[e] = h(n));
  }
  return t;
}
function d(e, t) {
  if (!t) return e;
  for (let n in t) {
    let r = t[n];
    switch (n) {
      case `style`:
        e[n] = i(e.style, r);
        break;
      case `className`:
        e[n] = _(e.className, r);
        break;
      default:
        e[n] = f(n, r) ? m(e[n], r) : r;
    }
  }
  return e;
}
function f(e, t) {
  let n = e.charCodeAt(0),
    r = e.charCodeAt(1),
    i = e.charCodeAt(2);
  return n === 111 && r === 110 && i >= 65 && i <= 90 && (typeof t == `function` || t === void 0);
}
function p(e) {
  return typeof e == `function`;
}
function m(e, t) {
  return t
    ? e
      ? (...n) => {
          let r = n[0];
          if (v(r)) {
            let i = r;
            g(i);
            let a = t(...n);
            return (i.baseUIHandlerPrevented || e?.(...n), a);
          }
          let i = t(...n);
          return (e?.(...n), i);
        }
      : h(t)
    : e;
}
function h(e) {
  return (
    e &&
    ((...t) => {
      let n = t[0];
      return (v(n) && g(n), e(...t));
    })
  );
}
function g(e) {
  return (
    (e.preventBaseUIHandler = () => {
      e.baseUIHandlerPrevented = !0;
    }),
    e
  );
}
function _(e, t) {
  return t ? (e ? t + ` ` + e : t) : e;
}
function v(e) {
  return typeof e == `object` && !!e && `nativeEvent` in e;
}
var y = e(n(), 1),
  b = {};
function ee(e, t) {
  let n = y.useRef(b);
  return (n.current === b && (n.current = e(t)), n);
}
function x(e, t, n, r) {
  let i = ee(C).current;
  return (te(i, e, t, n, r) && T(i, [e, t, n, r]), i.callback);
}
function S(e) {
  let t = ee(C).current;
  return (w(t, e) && T(t, e), t.callback);
}
function C() {
  return { callback: null, cleanup: null, refs: [] };
}
function te(e, t, n, r, i) {
  return e.refs[0] !== t || e.refs[1] !== n || e.refs[2] !== r || e.refs[3] !== i;
}
function w(e, t) {
  return e.refs.length !== t.length || e.refs.some((e, n) => e !== t[n]);
}
function T(e, t) {
  ((e.refs = t),
    (e.callback = t.every((e) => e == null)
      ? null
      : (n) => {
          if (((e.cleanup &&= (e.cleanup(), null)), n != null)) {
            let r = Array(t.length).fill(null);
            for (let e = 0; e < t.length; e += 1) {
              let i = t[e];
              if (i != null)
                switch (typeof i) {
                  case `function`: {
                    let t = i(n);
                    typeof t == `function` && (r[e] = t);
                    break;
                  }
                  case `object`:
                    i.current = n;
                }
            }
            e.cleanup = () => {
              for (let e = 0; e < t.length; e += 1) {
                let n = t[e];
                if (n != null)
                  switch (typeof n) {
                    case `function`: {
                      let t = r[e];
                      typeof t == `function` ? t() : n(null);
                      break;
                    }
                    case `object`:
                      n.current = null;
                  }
              }
            };
          }
        }));
}
var E = 19;
function D(e) {
  return E >= e;
}
function O(e) {
  if (!y.isValidElement(e)) return null;
  let t = e,
    n = t.props;
  return (D(19) ? n?.ref : t.ref) ?? null;
}
Object.freeze([]);
var ne = Object.freeze({});
function re(e, t) {
  let n = {};
  for (let r in e) {
    let i = e[r];
    if (t?.hasOwnProperty(r)) {
      let e = t[r](i);
      e != null && Object.assign(n, e);
    } else
      i === !0
        ? (n[`data-${r.toLowerCase()}`] = ``)
        : i && (n[`data-${r.toLowerCase()}`] = i.toString());
  }
  return n;
}
function ie(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function k(e, t) {
  return typeof e == `function` ? e(t) : e;
}
function A(e, t, n = {}) {
  let r = t.render;
  n.enabled !== !1 && (r = N(r));
  let i = j(t, n, r);
  if (n.enabled === !1) return null;
  let a = n.state ?? ne;
  return oe(e, r, i, a);
}
function j(e, t, n) {
  let { className: r, style: a } = e,
    { state: o = ne, ref: s, props: c, stateAttributesMapping: l, enabled: u = !0 } = t,
    d = u ? ie(r, o) : void 0,
    f = u ? k(a, o) : void 0,
    p = u ? re(o, l) : ne,
    m = u && c ? ae(c) : void 0,
    h = u ? (i(p, m) ?? {}) : ne;
  return (
    typeof document < `u` &&
      (u ? (h.ref = Array.isArray(s) ? S([h.ref, O(n), ...s]) : x(h.ref, O(n), s)) : x(null, null)),
    u
      ? (d !== void 0 && (h.className = _(h.className, d)),
        f !== void 0 && (h.style = i(h.style, f)),
        h)
      : ne
  );
}
function ae(e) {
  return Array.isArray(e) ? s(e) : o(void 0, e);
}
var M = Symbol.for(`react.lazy`);
function N(e) {
  if (e?.$$typeof !== M) return e;
  let t = y.Children.toArray(e)[0];
  return y.isValidElement(t) ? t : e;
}
function oe(e, t, n, r) {
  if (t) {
    if (typeof t == `function`) return t(n, r);
    let e = o(n, t.props);
    return ((e.ref = n.ref), y.cloneElement(t, e));
  }
  return se(e, n);
}
function se(e, t) {
  return e === `button`
    ? (0, y.createElement)(`button`, { type: `button`, ...t, key: t.key })
    : e === `img`
      ? (0, y.createElement)(`img`, { alt: ``, ...t, key: t.key })
      : y.createElement(e, t);
}
function ce(e) {
  return A(e.defaultTagName ?? `div`, e, e);
}
var P = t();
function F(e) {
  var t,
    n,
    r = ``;
  if (typeof e == `string` || typeof e == `number`) r += e;
  else if (typeof e == `object`) {
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (n = F(e[t])) && (r && (r += ` `), (r += n));
    } else for (n in e) e[n] && (r && (r += ` `), (r += n));
  }
  return r;
}
function le() {
  for (var e, t, n = 0, r = ``, i = arguments.length; n < i; n++)
    (e = arguments[n]) && (t = F(e)) && (r && (r += ` `), (r += t));
  return r;
}
var ue = (e) => (typeof e == `boolean` ? `${e}` : e === 0 ? `0` : e),
  de = le,
  I = (e, t) => (n) => {
    if (t?.variants == null) return de(e, n?.class, n?.className);
    let { variants: r, defaultVariants: i } = t,
      a = Object.keys(r).map((e) => {
        let t = n?.[e],
          a = i?.[e];
        if (t === null) return null;
        let o = ue(t) || ue(a);
        return r[e][o];
      }),
      o =
        n &&
        Object.entries(n).reduce((e, t) => {
          let [n, r] = t;
          return (r === void 0 || (e[n] = r), e);
        }, {});
    return de(
      e,
      a,
      t?.compoundVariants?.reduce((e, t) => {
        let { class: n, className: r, ...a } = t;
        return Object.entries(a).every((e) => {
          let [t, n] = e;
          return Array.isArray(n) ? n.includes({ ...i, ...o }[t]) : { ...i, ...o }[t] === n;
        })
          ? [...e, n, r]
          : e;
      }, []),
      n?.class,
      n?.className,
    );
  },
  fe = 48,
  L = (e, t = 0) => {
    let n = new Int32Array(e.length);
    for (let r = 0; r < e.length; r++) n[r] = e.charCodeAt(r) - fe - t;
    return n;
  },
  R = (e) => {
    let t = new Int32Array(e.length + 1);
    for (let n = 0; n < e.length; n++) t[n + 1] = t[n] + e[n];
    return t;
  },
  z = (e) => {
    let t = new Int32Array(e.length),
      n = 0;
    for (let r = 0; r < e.length; r++) {
      let i = e.charCodeAt(r) - fe;
      ((n += (i >>> 1) ^ -(i & 1)), (t[r] = n));
    }
    return t;
  },
  pe = 384,
  me = [],
  B = R(
    L(
      `E0500002005282000000002000150000020021820000011200000003022202000300004200120000200420001200021200301200010400162000010000220021010:2192001200220012000220012000200200200400010200040000000000400200108200110100000022010313000162002000020020012020080213000228200000000082000000000120002000120020020040101020300130001001010`,
    ),
  ),
  he = R(
    L(
      `:11111111211111119311546544411119731869:671397415686432441111111111161114151214313433415:78311132233313187211117221449443411141111151152226611131111112212518142224214215421421542142424242516171151615616347111111111197911327451111111111111111111113134714133513411111311111111111111111111112444411111342312715245411117:3`,
    ),
  ),
  ge = `@containerabcdefghinlmoprstunderlineviawzccentlignnimatespectuto-colsrowsaglorightnessckdrop-sisbcontrastfiltergrayscalehue-rotateinvertopacityslurrightnessaturateepia-coniclinearpositionradialsizeockurrderttom-belrstxyespacing-xyaretoursorlnt-umnsendspantartainentrasteividerop-shadowurationcorationlay-xyasendillexontromlter-featuresstretchapr-xyayscaleidow-colsrowsue-rotatedentlinesetvert-beringsxyeshadoweiadingftnest-clamp-imageabein-lrstxyskx--b-coniclpositionrsizet-x-y-fromto-fromto-inearfromto-fromto-adialfromto-fromtofromtofromtofromtoblockhinlinew-screenesblockhinlinewbjectpacityrutlinederigin-offsetbelrstxyesrspective-originaceholderioghtng-offsettateundedw-xyz-belrstlreseslr-endspantartaturatecepiahizekewpace-taleroll-xyz-barmpbelrstxyesbelrstxyes-thumbrackadowrink-xyxyartrokeabextora-shadowpckingnsformitionlate-xyz-offsetill-changeoom`,
  _e = (() => {
    let e = B.length - 1,
      t = new Int32Array(e);
    for (let n = e - 1; n >= 0; n--) {
      let e = 1,
        r = n + 1;
      for (let i = B[n]; i < B[n + 1]; i++) ((e += t[r]), (r += t[r]));
      t[n] = e;
    }
    let n = new Int32Array(B[e]),
      r = 0;
    for (let i = 0; i < e; i++) {
      let e = i + 1;
      for (let a = B[i]; a < B[i + 1]; a++) ((n[r++] = e), (e += t[e]));
    }
    return n;
  })(),
  ve = L(
    `02000000000000900<=0?000B000F00F00ŏI0J0LNPRTVX0000]_a00000000000000000000000rst0000000zŏ00000000000ŏ0000000ŏ00000000000000000000000000000000000000000000000000000000000000Ë000000000000000000000Þ000000000000000000ð0000000ø0ùúûüýþÿĀāĂăĄąĆ000000000000000000000000000000000000000000ħ0ĨĪ00000000000000000000ļĽ00000Ŭ000000`,
    1,
  ),
  ye = R(L(`123333359346463635126536711576`)),
  be = L(
    `93203242332583253248325D>E?F@03263243255B:032523853:0325B:8GA032542H<C=12727B:0328432553;D>E?3257D>032585:0325B:;0328B:032`,
  ),
  xe = L(
    `012113445661666666789111:5;;;;;;;;444;;;:62999<1161=62>>?61:21@ABCD4446996:64E:::;:?::64:F114GHHIHHHHIHH1HH1HH1HHHHHH::EEJ4444::EE4444441691;644444114244444:;K6666555555555555555999666664444444444444444444444226?6:66644L9M?D:111::::6DE199`,
  ),
  Se = z(
    `020200202020020020020020020020200200200200200200200002020202001003040106000200200200200200200200200200200200200200200200200200200200200200200200200200200200020020020020020020002020200202002002002002002002002002002020002002020020200220200200200200200200200200200200020020020000200020002000200200200020020020002000200200200020020202002020202000200200020022000200200020020002002000200220002002000200W0Z00020020002002020002002000200g0j0002002000200200020020002002000200200020020002000200002000002002002002002000200020000200002002002002002002002020020020200200200200200200200200202020020020020020020020020002002002020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020020002002002002002002000200200200200200200200200200020202020002000200020002002002002000020200200`,
  ),
  Ce = (() => {
    let e = new Int32Array(319).fill(-1),
      t = z(
        `02422242:222222242224222242442222222422222244442242226224222426222422442462222422622222222626222462242622422622422424242422222222422222222242422222222222222222622442224222222222222224424442262222222222222222222226224222424242422224422422422222`,
      ),
      n = z(
        `02222222222222222222202222222222222222222222221422222222222222222222222222222222222Y\\222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222221422222222222222222222222222222222222222Ŀł222222222222222222`,
      );
    for (let r = 0; r < t.length; r++) e[t[r]] = n[r];
    return e;
  })(),
  we =
    `container |break-after- all auto avoid avoid-page column left page right|break-before- all auto avoid avoid-page column left page right|break-inside-a uto void void-column void-page|box-decoration- clone slice|box- border content| contents flow-root hidden table table-caption table-cell table-column table-column-group table-footer-group table-header-group table-row table-row-group| not-sr-only sr-only|float- end left none right start|clear- both end left none right start|isolat e ion-auto|overflow- auto clip hidden scroll visible|overflow-x- auto clip hidden scroll visible|overflow-y- auto clip hidden scroll visible|overscroll- auto contain none|overscroll-x- auto contain none|overscroll-y- auto contain none| absolute fixed relative static sticky| collapse invisible visible|justify- around baseline between center center-safe end end-safe evenly normal start stretch|justify-items- center center-safe end end-safe normal start stretch|justify-self- auto center center-safe end end-safe start stretch|items- baseline baseline-last center center-safe end end-safe start stretch|self- auto baseline baseline-last center center-safe end end-safe start stretch|place-content- around baseline between center center-safe end end-safe evenly start stretch|place-items- baseline center center-safe end end-safe start stretch|place-self- auto center center-safe end end-safe start stretch| antialiased subpixel-antialiased| italic not-italic|normal-nums |ordinal |slashed-zero | lining-nums oldstyle-nums| proportional-nums tabular-nums| diagonal-fractions stacked-fractions| no-underline overline| capitalize lowercase normal-case uppercase|truncate |whitespace- break-spaces normal nowrap pre pre-line pre-wrap|break- all keep normal words|wrap- anywhere break-word normal|hyphens- auto manual none|mix-blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay plus-darker plus-lighter saturation screen soft-light|table- auto fixed|caption- bottom top|backface- hidden visible|appearance- auto none|scheme- dark light light-dark normal only-dark only-light|field-sizing- content fixed|pointer-events- auto none|resize  -none -x -y|snap- align-none center end start|snap- always normal|snap- both none x y|snap- mandatory proximity|touch- auto manipulation none|touch-pan- left right x|touch-pan- down up y|touch-pinch-zoom |select- all auto none text|forced-color-adjust- auto none| normal size| baseline bottom middle sub super text-bottom text-top top| bounce none ping pulse spin| auto square video| auto fr max min px|none | auto full px| fixed local scroll|clip- border content padding text|origin- border content padding| bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| no-repeat repeat repeat-round repeat-space repeat-x repeat-y| auto contain cover|blend- color color-burn color-dodge darken difference exclusion hard-light hue lighten luminosity multiply normal overlay saturation screen soft-light|to- b bl br l r t tl tr| auto dvh fit full lh lvh max min px screen svh| dashed dotted double hidden none solid| collapse separate|px |auto |full | content none strict| inline-size size|layout |paint |style | around baseline between center center-safe end end-safe evenly normal start stretch| alias all-scroll auto cell col-resize context-menu copy crosshair default e-resize ew-resize grab grabbing help move n-resize ne-resize nesw-resize no-drop none not-allowed ns-resize nw-resize nwse-resize pointer progress row-resize s-resize se-resize sw-resize text vertical-text w-resize wait zoom-in zoom-out| dashed dotted double solid wavy| auto from-font|reverse |initial | in in-out initial linear out| col col-reverse row row-reverse| nowrap wrap wrap-reverse| auto initial none| black bold extrabold extralight light medium normal semibold thin| condensed expanded extra-condensed extra-expanded normal semi-condensed semi-expanded ultra-condensed ultra-expanded|flow- col col-dense dense row row-dense| none subgrid| auto dvh dvw fit full lh lvh lvw max min px screen svh svw| block flex grid table| auto dvw fit full lvw max min px screen svw| loose none normal px relaxed snug tight|through |item | inside outside| decimal disc none| auto px| clip-border clip-content clip-fill clip-padding clip-stroke clip-view no-clip| add exclude intersect subtract| alpha luminance match|origin- border content fill padding stroke view|type- alpha luminance| circle ellipse| closest-corner closest-side farthest-corner farthest-side|at- bottom bottom-left bottom-right center left left-bottom left-top right right-bottom right-top top top-left top-right| dvh fit full lh lvh max min none px screen svh| auto dvh dvw fit full lh lvh lvw max min none px screen svh svw| dvw fit full lvw max min none px screen svw| auto dvh dvw fit full lvh lvw max min none prose px svh svw| auto dvh dvw fit full lvh lvw max min none px screen svh svw| contain cover fill none scale-down| first last none| distant dramatic midrange near none normal|inset | full none|3d | auto smooth|gutter- auto both stable| auto none thin| inner none| auto dvh dvw fit full lvh lvw max min px svh svw|base | center end justify left right start| clip ellipsis| balance nowrap pretty wrap| normal tight tighter wide wider widest| cpu gpu none| 3d flat| all colors none opacity shadow transform| discrete normal| full px| auto dvh dvw fit full lvh lvw max min px screen svh svw| auto contents scroll transform`
      .split(`|`)
      .map((e) => {
        let t = e.split(` `),
          n = t.shift();
        for (let e = 0; e < t.length; e++) t[e] = n + t[e];
        return t;
      }),
  Te = z(
    `0000000000000000000000000000000000000000000000000000000000000262242:6@200000006:240B428:4422400002046044222426220026642642462026224222824220022400000000\\00N222422242222222224062242222222422226264222422222222222222442804222422222222222222222222220<4<0204260002444020204224422`,
  ),
  Ee = z(
    `ɠ222222222222222222222222222222222222222222222222222222222222˕4222226>6ʰ22ʷʺʷʺʷ42ʴ2ʓ22>621422ɶ222ɹɼɷɺɷɺ22ɱ42222ɨ2ɧ26622ɘɓ244ƸƵ222]d24242ǖǓƚÄȫ2263ȨȥȨ2222222ǣ222222222222222222ǂƽ2ƾƵ2222222422222ƜƑ22222222222222222222144Ŧţ22Ţş222222222222222222222ĸ2ı68ĦģĦɡŰ4Ġ«®ĝ822ĔđĔ2ē2222622`,
  ),
  De = z(
    `02222222222222222222222222222222222222222222222222222222222222222202021422222222CF2200GJ021042222WZ222IL0ad2c10h2222U00X202[^2w0000120zy|}22:22z22222222222G000qOVI00000{2<40000@00000G¦§000ª00000000000000021K¬«00®000000000000000000000222HGH_1¸222½2¾2222ÇÊ000­°2±`,
  ),
  Oe = new Int32Array(987),
  ke = new Int32Array(987),
  Ae = new Int32Array(987),
  je = ``,
  Me = new Int32Array(1022);
{
  let e = new Map(),
    t = 0,
    n = 0;
  for (let r = 0; r < Te.length; r++)
    for (let i of we[De[r]]) {
      let a = e.get(i);
      (a === void 0 &&
        ((a = t++), e.set(i, a), (Me[a * 2] = je.length), (Me[a * 2 + 1] = i.length), (je += i)),
        (Oe[n] = Te[r]),
        (ke[n] = Ee[r]),
        (Ae[n] = a),
        n++);
    }
}
var Ne = z(`0b2N:222@R>F@286¦2@H2D266226FB22B2>BD\\6N22222Z222D222p`),
  Pe = R(L(`1::24444432:442:44:44>222222:44:4421322511111311111114`)),
  Fe = z(
    `24A;33N=C@H4A;33N=C@<27;83:;8393NQ:3NQʰ222ˉºŴŽ2R2=18cƴÅŇ=cĞÛC1ƈǝȈ:ħ25=11D3A@4=<1;1DEr25;11B3?<6;:371BCn9@7=<8192>2E121@9@EHE@9>2T25511<398454131<=V25511<398454131<=ƧNž2Đå242L222290000f22500ɛ000ǘ222`,
  ),
  Ie = L(`ĳ`),
  Le = L(``),
  V = L(`1`),
  Re = {
    GROUP_COUNT: pe,
    customValidatorNames: me,
    edgeStart: B,
    labelStart: he,
    labelText: ge,
    edgeTarget: _e,
    nodeGroup: ve,
    nodeVlist: Ce,
    vlistPat: ye,
    vlistOps: be,
    vlistRef: xe,
    vlistGroup: Se,
    litAnchor: Oe,
    litGroup: ke,
    litPool: Ae,
    poolOffsets: Me,
    poolText: je,
    adjGid: Ne,
    adjStart: Pe,
    adjTgt: Fe,
    patGid: Ie,
    patTgt: Le,
    postfixLookupGroups: V,
    orderSensitiveModifiers: `* ** after backdrop before details-content file first-letter first-line marker placeholder selection`,
  },
  ze = `line` in Error(),
  H = -1,
  Be = -1,
  Ve = (e, t, n) => {
    let r = 2166136261;
    for (let i = t; i < n; i++) r = Math.imul(r ^ e.charCodeAt(i), 16777619);
    return r;
  },
  He = (e, t, n) => {
    let r = n - t,
      i = Math.imul(r, 2654435761) ^ e.charCodeAt(t);
    if (r > 3) {
      let a = r >> 2,
        o = r >> 1;
      ((i = Math.imul(
        i ^ (e.charCodeAt(t + 1) << 8) ^ (e.charCodeAt(t + 2) << 16) ^ e.charCodeAt(t + a),
        2246822507,
      )),
        (i = Math.imul(
          i ^ (e.charCodeAt(t + o) << 8) ^ (e.charCodeAt(t + o + a) << 16) ^ e.charCodeAt(n - 3),
          3266489909,
        )),
        (i ^= (e.charCodeAt(n - 2) << 8) ^ (e.charCodeAt(n - 1) << 16)));
      for (let r = t + 3, a = n - 4; r < t + 8 && r < a; r++, a--)
        i = Math.imul(i ^ e.charCodeAt(r) ^ (e.charCodeAt(a) << 8), 16777619);
    }
    return i ^ (i >>> 15);
  },
  Ue = (e, t, n = {}) => {
    let {
        GROUP_COUNT: r,
        edgeStart: i,
        labelStart: a,
        labelText: o,
        edgeTarget: s,
        nodeGroup: c,
        nodeVlist: l,
        vlistPat: u,
        vlistOps: d,
        vlistRef: f,
        vlistGroup: p,
        litAnchor: m,
        litGroup: h,
        litPool: g,
        poolOffsets: _,
        poolText: v,
        adjGid: y,
        adjStart: b,
        adjTgt: ee,
        patGid: x,
        patTgt: S,
        postfixLookupGroups: C,
        customValidatorNames: te,
        orderSensitiveModifiers: w,
      } = e,
      T = new Int32Array(r).fill(-1);
    for (let e = 0; e < y.length; e++) T[y[e]] = e;
    let E = 0;
    for (let e = 0; e + 1 < b.length; e++) {
      let t = b[e + 1] - b[e];
      t > E && (E = t);
    }
    let D = 32;
    for (; D < 2 * (1 + E + x.length);) D <<= 1;
    let O = new Int32Array(f.length + 1);
    for (let e = 0; e < f.length; e++) O[e + 1] = O[e] + u[f[e] + 1] - u[f[e]];
    let ne = new Uint8Array(r);
    for (let e = 0; e < C.length; e++) ne[C[e]] = 1;
    let re = i.length - 1,
      ie = new Uint8Array(re),
      k = 0,
      A = !0;
    for (let e = 0; e < m.length; e++) {
      ie[m[e]] = 1;
      let t = _[g[e] * 2 + 1];
      t > k && (k = t);
      let n = v.charCodeAt(_[g[e] * 2]);
      (n === 91 || n === 40) && (A = !1);
    }
    let j = 1;
    for (; j < m.length * 2;) j <<= 1;
    let ae = new Int32Array(j).fill(-1);
    for (let e = 0; e < m.length; e++) {
      let t = _[g[e] * 2],
        n = ((Ve(v, t, t + _[g[e] * 2 + 1]) ^ Math.imul(m[e], 2654435761)) | 0) & (j - 1);
      for (; ae[n] !== -1;) n = (n + 1) & (j - 1);
      ae[n] = e;
    }
    let M = (e, t, n, r) => {
        let i = ((Ve(t, n, r) ^ Math.imul(e, 2654435761)) | 0) & (j - 1),
          a = r - n;
        for (;;) {
          let r = ae[i];
          if (r === -1) return -1;
          if (m[r] === e && _[g[r] * 2 + 1] === a) {
            let e = _[g[r] * 2],
              i = !0;
            for (let r = 0; r < a; r++)
              if (v.charCodeAt(e + r) !== t.charCodeAt(n + r)) {
                i = !1;
                break;
              }
            if (i) return h[r];
          }
          i = (i + 1) & (j - 1);
        }
      },
      N = n.cacheSize ?? 8192,
      oe = n.prefix ?? e.prefix ?? ``,
      se = oe === `` ? `` : oe + `:`,
      ce = se.length,
      P = (te ?? []).map((e) => {
        let n = t && t[e];
        if (!n) throw Error(`cn: missing validator ` + e);
        return n;
      }),
      F =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      le = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      ue = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      de =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      I = 0,
      fe = -1,
      L = -1,
      R = -1,
      z = -1,
      pe = (e) => (e >= 97 && e <= 122) || (e >= 65 && e <= 90) || (e >= 48 && e <= 57) || e === 95,
      me = (e) => /\s/.test(String.fromCharCode(e)),
      B = (e, t, n) => {
        if (((I = 0), (fe = -1), n - t < 3)) return;
        let r = e.charCodeAt(t),
          i = e.charCodeAt(n - 1);
        if (r === 91 && i === 93) I = 1;
        else if (r === 40 && i === 41) I = 2;
        else return;
        ((R = t + 1), (z = n - 1));
        let a = t + 1;
        if (pe(e.charCodeAt(a))) {
          for (a++; a < n - 1;) {
            let t = e.charCodeAt(a);
            if (!pe(t) && t !== 45) break;
            a++;
          }
          a < n - 2 && e.charCodeAt(a) === 58 && ((fe = t + 1), (L = a), (R = a + 1));
        }
      },
      he = (e, t, n, r) => {
        if (n - t !== r.length) return !1;
        for (let n = 0; n < r.length; n++) if (e.charCodeAt(t + n) !== r.charCodeAt(n)) return !1;
        return !0;
      },
      ge = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
      _e = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      ve = (e) => !!e && !Number.isNaN(Number(e)),
      ye = (e, t, n) => {
        if (n - t < 11 || !he(e, t, t + 10, `@container`)) return !1;
        if (e.charCodeAt(t + 10) === 47) return n - t >= 12;
        let r = e.charCodeAt(t + 11);
        return (
          (r === 115 && n - t >= 17 && he(e, t + 10, t + 16, `-size/`)) ||
          (r === 110 && n - t >= 19 && he(e, t + 10, t + 18, `-normal/`))
        );
      },
      be = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2],
      xe =
        `length|number|number weight|family-name|position percentage|length size bg-size|image url|shadow|length|family-name|position percentage|length size bg-size|image url|shadow|number weight`
          .split(`|`)
          .map((e) => e.split(` `)),
      Se = [2, 3, 1, 0, 0, 0, 4, 5, 0, 0, 0, 0, 0, 1, 1],
      Ce = (e, t, n, r) => {
        if (e >= 10) {
          if (e >= 25) return P[e - 25](t.slice(n, r));
          let i = e - 10;
          if (I !== be[i]) return !1;
          if (fe >= 0) {
            for (let e of xe[i]) if (he(t, fe, L, e)) return !0;
            return !1;
          }
          switch (Se[i]) {
            case 0:
              return !1;
            case 1:
              return !0;
            case 2: {
              let e = t.slice(R, z);
              return F.test(e) && !le.test(e);
            }
            case 3:
              return ve(t.slice(R, z));
            case 4:
              return de.test(t.slice(R, z));
            default:
              return ue.test(t.slice(R, z));
          }
        }
        switch (e) {
          case 0:
            return !0;
          case 1:
            return I === 0;
          case 2:
            return I === 1;
          case 3:
            return I === 2;
          case 4:
            return ge.test(t.slice(n, r));
          case 5:
            return ve(t.slice(n, r));
          case 6: {
            let e = t.slice(n, r);
            return !!e && Number.isInteger(Number(e));
          }
          case 7:
            return r > n && t.charCodeAt(r - 1) === 37 && ve(t.slice(n, r - 1));
          case 8:
            return _e.test(t.slice(n, r));
          default:
            return ye(t, n, r);
        }
      },
      we = new Set(typeof w == `string` ? w.split(` `) : w),
      Te = (e, t, n, r, i, a) => {
        let o = Ve(t, n, r) ^ (i ? 2654435769 : 0),
          s = e.get(o);
        if (s !== void 0)
          outer: for (let e = 0; e < s.length; e++) {
            let a = s[e];
            if (a.imp === i && a.k.length === r - n) {
              for (let e = 0; e < a.k.length; e++)
                if (a.k.charCodeAt(e) !== t.charCodeAt(n + e)) continue outer;
              return a.id;
            }
          }
        else e.set(o, (s = []));
        let c = t.slice(n, r),
          l = a(c);
        return (s.push({ k: c, imp: i, id: l }), l);
      },
      Ee = new Map(),
      De = new Map(),
      Oe = 2,
      ke = 4096,
      Ae = (e, t) => {
        let n = [],
          r = 0,
          i = 0,
          a = 0;
        for (let t = 0; t < e.length; t++) {
          let o = e.charCodeAt(t);
          r === 0 && i === 0 && o === 58
            ? (n.push(e.slice(a, t)), (a = t + 1))
            : o === 91
              ? r++
              : o === 93
                ? r--
                : o === 40
                  ? i++
                  : o === 41 && i--;
        }
        n.push(e.slice(a));
        let o = n[0];
        if (n.length > 1) {
          let e = [],
            t = [];
          for (let r of n)
            r.charCodeAt(0) === 91 || we.has(r)
              ? (t.length && (e.push(...t.sort()), (t = [])), e.push(r))
              : t.push(r);
          (t.length && e.push(...t.sort()), (o = e.join(`:`)));
        }
        let s = t ? o + ` !` : o,
          c = De.get(s);
        return (c === void 0 && De.set(s, (c = Oe++)), c);
      },
      je = new Map(),
      Me = r,
      Ne = r + 4096,
      Pe = () => Me++,
      Fe = 2097152,
      Ie = 8192,
      Le = new Int32Array(Ie),
      V = Array(Ie).fill(null),
      Re = new Int32Array(Ie),
      Ue = new Int32Array(Ie),
      We = new Uint8Array(Ie),
      Ge = 0,
      qe = (e, t, n, r, i, a, o, s) => {
        let c = e;
        if (V[e] !== null) {
          if (V[e | 1] === null) c = e | 1;
          else if (!(Ge++ & 3)) c = e | ((Ge >> 2) & 1);
          else return;
        }
        ((V[c] = t.slice(n, r)), (Le[c] = i), (Re[c] = a), (Ue[c] = o), (We[c] = s));
      },
      Je = () => V.fill(null),
      U = 256,
      Ye = [new Int32Array(U), new Int32Array(U), new Int32Array(U), new Int32Array(U)],
      [Xe, W, G, Ze] = Ye,
      Qe = new Uint8Array(U),
      $e = new Uint8Array(U),
      et = () => {
        ((U *= 2),
          (Ye = Ye.map((e) => {
            let t = new Int32Array(U);
            return (t.set(e), t);
          })),
          ([Xe, W, G, Ze] = Ye));
        let e = new Uint8Array(U);
        (e.set(Qe), (Qe = e), ($e = new Uint8Array(U)));
      },
      K = 64,
      tt = new Int32Array(K),
      q = new Int32Array(K),
      nt = new Int32Array(r),
      J = 2048,
      rt = 21,
      it = new Float64Array(J),
      at = new Int32Array(J),
      Y = 0,
      ot = (e, t) => {
        if (e === 0 && t < r) return nt[t] === Y ? 1 : ((nt[t] = Y), 0);
        let n = e * 2097152 + t + 1,
          i = Math.imul(n, 2654435761) >>> rt;
        for (; at[i] === Y;) {
          if (it[i] === n) return 1;
          i = (i + 1) & (J - 1);
        }
        return ((it[i] = n), (at[i] = Y), 0);
      },
      st = (e, t, n, r, i) => {
        if (n - t >= 2 && e.charCodeAt(t) === 91 && e.charCodeAt(n - 1) === 93) {
          let r = -1;
          for (let i = t + 1; i < n - 1; i++)
            if (e.charCodeAt(i) === 58) {
              r = i;
              break;
            }
          return r === -1 || r === t + 1 ? H : Te(je, e, t + 1, r, 0, Pe);
        }
        if (r >= 0 && c[r] >= 0) return c[r];
        for (let t = i - 1; t >= 0; t--) {
          let r = q[t];
          if (r > n) continue;
          let i = tt[t],
            a = n - r;
          if (ie[i] === 1 && a > 0 && a <= k) {
            let t = e.charCodeAt(r);
            if (A === !1 || (t !== 91 && t !== 40)) {
              let t = M(i, e, r, n);
              if (t >= 0) return t;
            }
          }
          let o = l[i];
          if (o < 0) continue;
          let s = f[o],
            c = u[s],
            m = u[s + 1];
          if (c === m) continue;
          B(e, r, n);
          let h = O[o] - c;
          for (let t = c; t < m; t++) if (Ce(d[t], e, r, n)) return p[h + t];
        }
        return H;
      },
      ct = (e) => {
        let t = e.length,
          n = 0,
          c = 0,
          u = !1;
        ((Oe > ke || Ee.size > ke) && ((Ee = new Map()), (De = new Map()), (Oe = 2), Je()),
          Me > Ne && ((je = new Map()), (Me = r), Je()));
        let d = 0;
        for (; d < t;) {
          let f = e.charCodeAt(d);
          if (f === 32 || (f >= 9 && f <= 13) || (f >= 160 && me(f))) {
            (f !== 32 && (u = !0), d++);
            continue;
          }
          let p = d,
            m = 0;
          for (; d < t;) {
            if (((f = e.charCodeAt(d)), f <= 32)) {
              if (f === 32) break;
              if (f >= 9 && f <= 13) {
                u = !0;
                break;
              }
            } else if (f >= 160 && me(f)) {
              u = !0;
              break;
            }
            ((m = Math.imul(m ^ f, 16777619)), d++);
          }
          let h = d,
            g = h - p;
          n === U && et();
          let _ = n++;
          ((Xe[_] = p), (W[_] = h), (c += g), (m ^= Math.imul(g, 2654435761)));
          let v = m ^ (m >>> 15),
            y = v & 8190;
          {
            let t = -1;
            if (
              (Le[y] === v && V[y] !== null && V[y].length === g
                ? (t = y)
                : Le[y | 1] === v && V[y | 1] !== null && V[y | 1].length === g && (t = y | 1),
              t >= 0)
            ) {
              let n = V[t],
                r = !0;
              for (let t = 0; t < g; t++)
                if (n.charCodeAt(t) !== e.charCodeAt(p + t)) {
                  r = !1;
                  break;
                }
              if (r) {
                ((G[_] = Re[t]), (Ze[_] = Ue[t]), (Qe[_] = We[t]));
                continue;
              }
            }
          }
          let b = p;
          if (ce !== 0) {
            if (h - p <= ce || !e.startsWith(se, p)) {
              ((G[_] = H), qe(y, e, p, h, v, H, 0, 0));
              continue;
            }
            b = p + ce;
          }
          let ee = 0,
            x = 0,
            S = -1,
            C = -1;
          for (let t = b; t < h; t++) {
            let n = e.charCodeAt(t);
            if (ee === 0 && x === 0) {
              if (n === 58) {
                S = t;
                continue;
              }
              if (n === 47) {
                C = t;
                continue;
              }
            }
            n === 91 ? ee++ : n === 93 ? ee-- : n === 40 ? x++ : n === 41 && x--;
          }
          let te = S >= b ? S + 1 : b,
            w = te,
            T = h,
            E = !1,
            D = 0;
          T > w && e.charCodeAt(T - 1) === 33
            ? ((E = !0), T--)
            : T > w && e.charCodeAt(w) === 33 && ((E = !0), w++, (D = 1));
          let O = -1;
          C > te && ((O = C + D), O >= T && (O = -1));
          let re = w;
          T - w > 1 && e.charCodeAt(w) === 45 && (re = w + 1);
          let k = 0,
            A = 0,
            j = 0,
            ae = -1,
            M = 0;
          (l[0] >= 0 || ie[0] === 1) && ((tt[0] = 0), (q[0] = re), (M = 1));
          let N = Be,
            oe = 0;
          for (let t = re; t < T; t++)
            if ((t === O && ((N = A < j ? Be : k), (oe = M)), k !== Be)) {
              let n = e.charCodeAt(t),
                r = -1;
              if (A < j) o.charCodeAt(A) === n ? (A++, A === j && (r = k = ae)) : (k = Be);
              else {
                let e = i[k],
                  t = i[k + 1],
                  c = Be;
                for (let i = e; i < t; i++) {
                  let e = a[i];
                  if (o.charCodeAt(e) === n) {
                    a[i + 1] - e === 1
                      ? (r = c = s[i])
                      : ((A = e + 1), (j = a[i + 1]), (ae = s[i]), (c = k));
                    break;
                  }
                }
                k = c;
              }
              if (r >= 0 && (l[r] >= 0 || ie[r] === 1) && t + 1 < T && e.charCodeAt(t + 1) === 45) {
                if (M === K) {
                  K *= 2;
                  let e = new Int32Array(K);
                  (e.set(tt), (tt = e));
                  let t = new Int32Array(K);
                  (t.set(q), (q = t));
                }
                ((tt[M] = r), (q[M] = t + 2), M++);
              }
            }
          O === T && ((N = A < j ? Be : k), (oe = M));
          let P = A < j ? Be : k,
            F,
            le = !1;
          if (O >= 0) {
            if (((le = !0), (F = st(e, w, O, N, oe)), F !== H && F < r && ne[F])) {
              let t = st(e, w, T, P, M);
              t !== H && t !== F && ((F = t), (le = !1));
            } else F === H && ((F = st(e, w, T, P, M)), (le = !1));
          } else F = st(e, w, T, P, M);
          let ue = 0,
            de = 0;
          (F === H
            ? (G[_] = H)
            : ((de = +!!le),
              (ue = b >= S ? +!!E : Te(Ee, e, b, S, +!!E, (e) => Ae(e, E))),
              (G[_] = F),
              (Qe[_] = de),
              (Ze[_] = ue)),
            qe(y, e, p, h, v, F, ue, de));
        }
        if (n === 0) return ``;
        if (n === 1) return Xe[0] === 0 && W[0] === t ? e : e.slice(Xe[0], W[0]);
        if (n * D > J) {
          for (; n * D > J;) ((J <<= 1), rt--);
          ((it = new Float64Array(J)), (at = new Int32Array(J)));
        }
        if (Oe >= Fe || Me >= Fe) throw Error(`cn: too many distinct classes in one merge`);
        ((Y = (Y + 1) | 0), Y === 0 && (nt.fill(0), at.fill(0), (Y = 1)));
        let f = !1;
        for (let e = n - 1; e >= 0; e--) {
          let t = G[e];
          if (t === H) {
            $e[e] = 1;
            continue;
          }
          let n = Ze[e];
          if (ot(n, t) === 1) (($e[e] = 0), (f = !0));
          else if ((($e[e] = 1), t < r)) {
            let r = T[t];
            if (r >= 0) for (let e = b[r]; e < b[r + 1]; e++) ot(n, ee[e]);
            if (Qe[e] & 1) for (let e = 0; e < x.length; e++) x[e] === t && ot(n, S[e]);
          }
        }
        if (!f && !u && t === c + n - 1) return e;
        let p = ``,
          m = 0;
        for (; m < n;) {
          if (!$e[m]) {
            m++;
            continue;
          }
          let t = Xe[m],
            r = W[m],
            i = m + 1;
          for (; i < n && $e[i] && Xe[i] === r + 1 && e.charCodeAt(r) === 32;) ((r = W[i]), i++);
          (p.length > 0 && (p += ` `), (p += e.slice(t, r)), (m = i));
        }
        return p;
      },
      X = 16384,
      Z = new Int32Array(X * 2),
      lt = 0,
      Q = 1,
      ut = Object.create(null),
      dt = Object.create(null),
      $ = new Map(),
      ft = new Map(),
      pt = 0,
      mt = 0,
      ht = () => {
        ((lt ^= X), (Q = (Q + 1) | 0), (mt = 0));
      },
      gt = (e) => {
        let t = ut[e];
        if (t !== void 0) return t;
        let n = He(e, 0, e.length),
          r = (n & 16383) + lt,
          i = Z[r] === (n ^ Q) || Z[r ^ X] === (n ^ (Q - 1));
        return i && ((t = dt[e]), t !== void 0)
          ? ((ut[e] = t), t)
          : ((t = ct(e)),
            i
              ? ((ut[e] = t), ++pt > N && ((pt = 0), (dt = ut), (ut = Object.create(null)), ht()))
              : ((Z[r] = n ^ Q), ++mt > X && ht()),
            t);
      },
      _t = (e) => {
        let t = $.get(e);
        if (t !== void 0) return t;
        let n = He(e, 0, e.length),
          r = (n & 16383) + lt,
          i = Z[r] === (n ^ Q) || Z[r ^ X] === (n ^ (Q - 1));
        return i && ((t = ft.get(e)), t !== void 0)
          ? ($.set(e, t), t)
          : ((t = ct(e)),
            i
              ? ($.set(e, t), ++pt > N && ((pt = 0), (ft = $), ($ = new Map()), ht()))
              : ((Z[r] = n ^ Q), ++mt > X && ht()),
            t);
      },
      vt = (e) => {
        let t = He(e, 0, e.length),
          n = (t & 16383) + lt;
        return (
          Z[n] === (t ^ Q) || Z[n ^ X] === (t ^ (Q - 1)) || ((Z[n] = t ^ Q), ++mt > X && ht(), !1)
        );
      },
      yt =
        N === 0
          ? ct
          : ze
            ? (e) => {
                let t = $.get(e);
                return t === void 0 ? _t(e) : t;
              }
            : gt;
    return {
      merge: function () {
        return arguments.length === 1 && typeof arguments[0] == `string`
          ? yt(arguments[0])
          : yt(Ke.apply(null, arguments));
      },
      mergeString: yt,
      seenBefore: N === 0 ? () => !1 : vt,
      mergeUncached: ct,
    };
  },
  We = (e, t) => {
    if (!e) return ``;
    if (typeof e == `string`) return e;
    let n = ``;
    if (typeof e.length == `number` && (!t || Array.isArray(e))) {
      let r = e;
      for (let e = 0; e < r.length; e++) {
        let i = r[e];
        if (!i) continue;
        let a = typeof i == `string` ? i : We(i, t);
        a && (n && (n += ` `), (n += a));
      }
      return n;
    }
    if (t) {
      if (typeof e == `number`) return `` + e;
      if (typeof e == `object`) for (let t in e) e[t] && (n && (n += ` `), (n += t));
    }
    return n;
  },
  Ge = (e, t) => {
    let n = ``;
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (!i) continue;
      let a = typeof i == `string` ? i : We(i, t);
      a && (n && (n += ` `), (n += a));
    }
    return n;
  },
  Ke = function () {
    return Ge(arguments, !1);
  },
  qe = 256,
  Je = 16,
  U = 1024,
  Ye = 4096,
  Xe = (e, t) => {
    let n = t === void 0 ? () => !0 : t.seenBefore,
      r = t === void 0 ? e : t.mergeUncached,
      i = new Map(),
      a = new Map(),
      o = 0,
      s = null,
      c = null,
      l = [],
      u = [],
      d = 0,
      f = (t, n, r) => {
        c === null &&
          ((c = Array(Ye).fill(``)), (l = Array(Ye).fill(``)), (u = Array(Ye).fill(``)));
        let i = He(t, 0, t.length) & 4094;
        if (c[i] === t && l[i] === n) return u[i];
        if (c[i | 1] === t && l[i | 1] === n) return u[i | 1];
        let a = e(r ? n + ` ` + t : t),
          o = c[i] === `` ? i : i | (c[i | 1] === `` ? 1 : d++ & 1);
        return ((c[o] = t), (l[o] = n), (u[o] = a), a);
      },
      p = (e, t, n, r) => {
        let i = 0;
        if (t) {
          if (t !== e.a0) return !1;
          i = 1;
        }
        if (n) {
          if (n !== (i === 0 ? e.a0 : e.a1)) return !1;
          i++;
        }
        if (r) {
          if (r !== (i === 0 ? e.a0 : i === 1 ? e.a1 : e.a2)) return !1;
          i++;
        }
        return i === e.t;
      },
      m = (e, t) => {
        let n = e.a,
          r = 0;
        for (let e = 0; e < t.length; e++) {
          let i = t[e];
          if (i) {
            if (i !== n[r]) return !1;
            r++;
          }
        }
        return r === e.t;
      },
      h = (t, c) => {
        let l = t.length,
          u = s === null ? null : s.n;
        if (!c) {
          if (u !== null && m(u, t)) return ((s = u), u.r);
          if (s !== null && s !== u && m(s, t)) return s.r;
        }
        let d = ``,
          p = -1,
          h = 0,
          g = !1;
        for (let e = 0; e < l; e++) {
          let n = t[e];
          if (n) {
            if (typeof n != `string`) {
              if (((n = t[e] = We(n, !0)), !n)) continue;
              g = !0;
            }
            (p < 0 && ((d = n), (p = e)), h++);
          }
        }
        if (h === 0) return ``;
        if (h === 1) return e(d);
        if (g) {
          if (u !== null && m(u, t)) return ((s = u), u.r);
          if (s !== null && s !== u && m(s, t)) return s.r;
        }
        let _ = i.get(d);
        _ === void 0 && ((_ = a.get(d)), _ !== void 0 && i.set(d, _));
        let v = null;
        if (_ !== void 0) {
          if (_.skip > 0) {
            (_.skip--, (s = null));
            let e = d;
            for (let n = p + 1; n < l; n++) {
              let r = t[n];
              r && (e += ` ` + r);
            }
            return f(e, ``, !1);
          }
          let e = _.e;
          outer: for (let n = 0; n < e.length; n++) {
            let r = e[n];
            if (r.t !== h) continue;
            let i = r.a,
              a = 1;
            for (let e = p + 1; e < l; e++) {
              let n = t[e];
              if (n && n !== i[a++]) continue outer;
            }
            v = r;
            break;
          }
          v !== null && (_.miss = 0);
        }
        if (v === null) {
          let s = d,
            c = [d];
          for (let e = p + 1; e < l; e++) {
            let n = t[e];
            n && ((s += ` ` + n), c.push(n));
          }
          if (!n(s)) return r(s);
          ((v = { r: e(s), t: c.length, a0: c[0], a1: c[1], a2: c[2] ?? ``, a: c, n: null }),
            _ === void 0
              ? i.set(d, (_ = { e: [], miss: 0, skip: 0, at: 0 }))
              : ++_.miss > Je && ((_.miss = Je), (_.skip = U), (_.e.length = 0), (_.at = 0)));
          let u = _.e;
          (u.length < qe ? u.push(v) : ((u[_.at] = v), (_.at = (_.at + 1) & 255)),
            ++o > 1e3 && ((o = 0), (a = i), (i = new Map())));
        }
        return (s !== null && s !== v && (s.n = v), (s = v), v.r);
      },
      g = (t) => (Array.isArray(t) ? h(t.slice(), !1) : e(We(t, !0)));
    return function (t, n, r) {
      let a = arguments.length;
      if ((a | 1) == 3) {
        let e = s;
        if (e !== null) {
          let i = e.n;
          if (i !== null && p(i, t, n, r)) return ((s = i), i.r);
          if (e !== i && p(e, t, n, r)) return e.r;
        }
        if (a === 2 && typeof n == `string` && n !== ``) {
          let e = i.get(t);
          if (e !== void 0 && e.skip > 0) return (e.skip--, (s = null), f(n, t, !0));
        }
        return h([t, n, r], !0);
      }
      if (a === 1) return typeof t == `string` ? e(t) : g(t);
      let o = s;
      if (o !== null) {
        let e = o.n;
        if (e !== null) {
          let t = e.a,
            n = 0,
            r = !0;
          for (let e = 0; e < a; e++) {
            let i = arguments[e];
            if (i) {
              if (i !== t[n]) {
                r = !1;
                break;
              }
              n++;
            }
          }
          if (r && n === e.t) return ((s = e), e.r);
        }
        if (o !== e) {
          let e = o.a,
            t = 0,
            n = !0;
          for (let r = 0; r < a; r++) {
            let i = arguments[r];
            if (i) {
              if (i !== e[t]) {
                n = !1;
                break;
              }
              t++;
            }
          }
          if (n && t === o.t) return o.r;
        }
      }
      let c = [];
      for (let e = 0; e < a; e++) c.push(arguments[e]);
      return h(c, !0);
    };
  },
  W = Ue(Re),
  G = Xe(W.mergeString, W);
W.merge;
var Ze = I(
  `group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!`,
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground [a]:hover:bg-primary/80`,
        secondary: `bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80`,
        destructive: `bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20`,
        outline: `border-border bg-input/30 text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground`,
        ghost: `hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50`,
        link: `text-primary underline-offset-4 hover:underline`,
      },
    },
    defaultVariants: { variant: `default` },
  },
);
function Qe(e) {
  let t = (0, P.c)(13),
    n,
    r,
    i,
    a,
    s;
  if (t[0] !== e) {
    let { className: c, variant: l, render: u, ...d } = e;
    ((n = u),
      (s = l === void 0 ? `default` : l),
      (a = ce),
      (r = `span`),
      (i = o({ className: G(Ze({ variant: s }), c) }, d)),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s));
  } else ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (s = t[5]));
  let c;
  t[6] === s ? (c = t[7]) : ((c = { slot: `badge`, variant: s }), (t[6] = s), (t[7] = c));
  let l;
  return (
    t[8] !== n || t[9] !== r || t[10] !== i || t[11] !== c
      ? ((l = { defaultTagName: r, props: i, render: n, state: c }),
        (t[8] = n),
        (t[9] = r),
        (t[10] = i),
        (t[11] = c),
        (t[12] = l))
      : (l = t[12]),
    a(l)
  );
}
function $e() {
  return typeof window < `u`;
}
function et(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function K(e) {
  return $e() ? e instanceof HTMLElement || e instanceof et(e).HTMLElement : !1;
}
var tt = { ...y },
  q = tt.useInsertionEffect,
  nt = q && q !== tt.useLayoutEffect ? q : (e) => e();
function J(e) {
  let t = ee(rt).current;
  return ((t.next = e), nt(t.effect), t.trampoline);
}
function rt() {
  let e = {
    next: void 0,
    callback: it,
    trampoline: (...t) => e.callback?.(...t),
    effect: () => {
      e.callback = e.next;
    },
  };
  return e;
}
function it() {}
var at = typeof document < `u` ? y.useLayoutEffect : () => {};
function Y(e, t) {
  return function (n, ...r) {
    let i = new URL(e);
    return (
      i.searchParams.set(`code`, n.toString()),
      r.forEach((e) => i.searchParams.append(`args[]`, e)),
      `${t} error #${n}; visit ${i} for the full message.`
    );
  };
}
var ot = Y(`https://base-ui.com/production-error`, `Base UI`),
  st = y.createContext(void 0);
function ct(e = !1) {
  let t = y.useContext(st);
  if (t === void 0 && !e) throw Error(ot(16));
  return t;
}
function X(e) {
  let {
      focusableWhenDisabled: t,
      disabled: n,
      composite: r = !1,
      tabIndex: i = 0,
      isNativeButton: a,
    } = e,
    o = r && t !== !1,
    s = r && t === !1;
  return {
    props: y.useMemo(() => {
      let e = {
        onKeyDown(e) {
          n && t && e.key !== `Tab` && e.preventDefault();
        },
      };
      return (
        r || ((e.tabIndex = i), !a && n && (e.tabIndex = t ? i : -1)),
        ((a && (t || o)) || (!a && n)) && (e[`aria-disabled`] = n),
        a && (!t || s) && (e.disabled = n),
        e
      );
    }, [r, n, t, o, s, a, i]),
  };
}
function Z(e, t, { detail: n = 0, pointerType: r = `` } = {}) {
  e.dispatchEvent(
    new (et(e).PointerEvent)(`click`, {
      bubbles: !0,
      cancelable: !0,
      composed: !0,
      detail: n,
      pointerType: r,
      shiftKey: t.shiftKey,
      ctrlKey: t.ctrlKey,
      altKey: t.altKey,
      metaKey: t.metaKey,
    }),
  );
}
function lt(e = {}) {
  let {
      disabled: t = !1,
      focusableWhenDisabled: n,
      tabIndex: r = 0,
      native: i = !0,
      composite: a,
    } = e,
    s = y.useRef(null),
    c = ct(!0),
    l = a ?? c !== void 0,
    { props: u } = X({
      focusableWhenDisabled: n,
      disabled: t,
      composite: l,
      tabIndex: r,
      isNativeButton: i,
    }),
    d = y.useCallback(() => {
      let e = s.current;
      Q(e) && l && t && u.disabled === void 0 && e.disabled && (e.disabled = !1);
    }, [t, u.disabled, l]);
  return (
    at(d, [d]),
    {
      getButtonProps: y.useCallback(
        (e = {}) => {
          let { onClick: n, onMouseDown: r, onKeyUp: a, onKeyDown: s, onPointerDown: c, ...d } = e;
          return o(
            {
              onClick(e) {
                t ? e.preventDefault() : n?.(e);
              },
              onMouseDown(e) {
                t || r?.(e);
              },
              onKeyDown(e) {
                if (t || (g(e), s?.(e), e.baseUIHandlerPrevented)) return;
                let n = e.target === e.currentTarget,
                  r = e.currentTarget,
                  a = Q(r),
                  o = !i && ut(r),
                  c = n && (i ? a : !o),
                  u = e.key === `Enter`,
                  d = e.key === ` `,
                  f = r.getAttribute(`role`),
                  p = f?.startsWith(`menuitem`) || f === `option` || f === `gridcell`;
                if (n && l && d) {
                  if (e.defaultPrevented && p) return;
                  (e.preventDefault(), (!i || a) && (e.preventBaseUIHandler(), Z(r, e)));
                } else
                  !c || i || (!d && !u)
                    ? n && o && d && e.preventDefault()
                    : e.defaultPrevented ||
                      (e.preventDefault(), u && (e.preventBaseUIHandler(), Z(r, e)));
              },
              onKeyUp(e) {
                t ||
                  (g(e),
                  a?.(e),
                  e.target === e.currentTarget && i && l && Q(e.currentTarget) && e.key === ` `
                    ? e.preventDefault()
                    : e.baseUIHandlerPrevented ||
                      e.target !== e.currentTarget ||
                      i ||
                      l ||
                      e.defaultPrevented ||
                      e.key !== ` ` ||
                      (e.preventBaseUIHandler(), Z(e.currentTarget, e)));
              },
              onPointerDown(e) {
                t ? e.preventDefault() : c?.(e);
              },
            },
            i ? { type: `button` } : { role: `button` },
            u,
            d,
          );
        },
        [t, u, l, i],
      ),
      buttonRef: J((e) => {
        ((s.current = e), d());
      }),
    }
  );
}
function Q(e) {
  return K(e) && e.tagName === `BUTTON`;
}
function ut(e) {
  return K(e) && e.tagName === `A` && !!e.href;
}
var dt = y.forwardRef(function (e, t) {
    let {
        render: n,
        className: r,
        disabled: i = !1,
        focusableWhenDisabled: a = !1,
        nativeButton: o = !0,
        style: s,
        ...c
      } = e,
      { getButtonProps: l, buttonRef: u } = lt({
        disabled: i,
        focusableWhenDisabled: a,
        native: o,
      });
    return A(`button`, e, { state: { disabled: i }, ref: [t, u], props: [c, l] });
  }),
  $ = r(),
  ft = I(
    `group/button inline-flex shrink-0 items-center justify-center rounded-4xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4`,
    {
      variants: {
        variant: {
          default: `bg-primary text-primary-foreground hover:bg-primary/80`,
          outline: `border-border bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground`,
          secondary: `bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground`,
          ghost: `hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50`,
          destructive: `bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40`,
          link: `text-primary underline-offset-4 hover:underline`,
        },
        size: {
          default: `h-9 gap-1.5 px-3 has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5`,
          xs: `h-6 gap-1 px-2.5 text-xs has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3`,
          sm: `h-8 gap-1 px-3 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2`,
          lg: `h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3`,
          icon: `size-9`,
          "icon-xs": `size-6 [&_svg:not([class*='size-'])]:size-3`,
          "icon-sm": `size-8`,
          "icon-lg": `size-10`,
        },
      },
      defaultVariants: { variant: `default`, size: `default` },
    },
  );
function pt(e) {
  let t = (0, P.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ className: n, variant: i, size: a, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = i === void 0 ? `default` : i,
    s = a === void 0 ? `default` : a,
    c;
  t[5] !== n || t[6] !== s || t[7] !== o
    ? ((c = G(ft({ variant: o, size: s, className: n }))),
      (t[5] = n),
      (t[6] = s),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] !== r || t[10] !== c
      ? ((l = (0, $.jsx)(dt, { "data-slot": `button`, className: c, ...r })),
        (t[9] = r),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var mt = y.forwardRef(function (e, t) {
  let { className: n, render: r, orientation: i = `horizontal`, style: a, ...o } = e;
  return A(`div`, e, {
    state: { orientation: i },
    ref: t,
    props: [{ role: `separator`, "aria-orientation": i }, o],
  });
});
function ht(e) {
  let t = (0, P.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, orientation: i, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a = i === void 0 ? `horizontal` : i,
    o;
  t[4] === n
    ? (o = t[5])
    : ((o = G(
        `shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch`,
        n,
      )),
      (t[4] = n),
      (t[5] = o));
  let s;
  return (
    t[6] !== a || t[7] !== r || t[8] !== o
      ? ((s = (0, $.jsx)(mt, { "data-slot": `separator`, orientation: a, className: o, ...r })),
        (t[6] = a),
        (t[7] = r),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
var gt = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  _t = y.createContext && y.createContext(gt),
  vt = [`attr`, `size`, `title`];
function yt(e, t) {
  if (e == null) return {};
  var n,
    r,
    i = bt(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++)
      ((n = a[r]), t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
  }
  return i;
}
function bt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
function xt() {
  return (
    (xt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    xt.apply(null, arguments)
  );
}
function St(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] == null ? {} : arguments[t];
    t % 2
      ? St(Object(n), !0).forEach(function (t) {
          wt(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : St(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
  }
  return e;
}
function wt(e, t, n) {
  return (
    (t = Tt(t)) in e
      ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = n),
    e
  );
}
function Tt(e) {
  var t = Et(e, `string`);
  return typeof t == `symbol` ? t : t + ``;
}
function Et(e, t) {
  if (typeof e != `object` || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || `default`);
    if (typeof r != `object`) return r;
    throw TypeError(`@@toPrimitive must return a primitive value.`);
  }
  return (t === `string` ? String : Number)(e);
}
function Dt(e) {
  return e && e.map((e, t) => y.createElement(e.tag, Ct({ key: t }, e.attr), Dt(e.child)));
}
function Ot(e) {
  return (t) => y.createElement(kt, xt({ attr: Ct({}, e.attr) }, t), Dt(e.child));
}
function kt(e) {
  var t = (t) => {
    var n = e.attr,
      r = e.size,
      i = e.title,
      a = yt(e, vt),
      o = r || t.size || `1em`,
      s;
    return (
      t.className && (s = t.className),
      e.className && (s = (s ? s + ` ` : ``) + e.className),
      y.createElement(
        `svg`,
        xt({ stroke: `currentColor`, fill: `currentColor`, strokeWidth: `0` }, t.attr, n, a, {
          className: s,
          style: Ct(Ct({ color: e.color || t.color }, t.style), e.style),
          height: o,
          width: o,
          xmlns: `http://www.w3.org/2000/svg`,
        }),
        i && y.createElement(`title`, null, i),
        e.children,
      )
    );
  };
  return _t === void 0 ? t(gt) : y.createElement(_t.Consumer, null, (e) => t(e));
}
function At(e) {
  return Ot({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `polyline`, attr: { points: `4 17 10 11 4 5` }, child: [] },
      { tag: `line`, attr: { x1: `12`, x2: `20`, y1: `19`, y2: `19` }, child: [] },
    ],
  })(e);
}
function jt(e) {
  return Ot({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `path`,
        attr: {
          d: `M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4`,
        },
        child: [],
      },
      { tag: `path`, attr: { d: `M9 18c-4.51 2-5-2-7-2` }, child: [] },
    ],
  })(e);
}
function Mt(e) {
  return Ot({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      {
        tag: `rect`,
        attr: { width: `14`, height: `14`, x: `8`, y: `8`, rx: `2`, ry: `2` },
        child: [],
      },
      {
        tag: `path`,
        attr: { d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2` },
        child: [],
      },
    ],
  })(e);
}
function Nt(e) {
  return Ot({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [{ tag: `path`, attr: { d: `M20 6 9 17l-5-5` }, child: [] }],
  })(e);
}
function Pt(e) {
  return Ot({
    tag: `svg`,
    attr: {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `2`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    },
    child: [
      { tag: `path`, attr: { d: `M7 7h10v10` }, child: [] },
      { tag: `path`, attr: { d: `M7 17 17 7` }, child: [] },
    ],
  })(e);
}
var Ft = [
    {
      name: `Vite`,
      description: `Fast frontend tooling`,
      href: `https://vite.dev`,
      icon: `vite.svg`,
    },
    {
      name: `React`,
      description: `Modern UI development`,
      href: `https://react.dev`,
      icon: `react.svg`,
    },
    {
      name: `Tailwind CSS`,
      description: `CSS provider for your app`,
      href: `https://tailwindcss.com/`,
      icon: `tailwind-css.svg`,
    },
    {
      name: `Base UI`,
      description: `Engine behind custom component`,
      href: `https://base-ui.com/`,
      icon: `base-ui.svg`,
    },
    {
      name: `shadcn/ui`,
      description: `Accessible UI components`,
      href: `https://ui.shadcn.com`,
      icon: `shadcn.svg`,
    },
    {
      name: `TanStack`,
      description: `Powerful application primitives`,
      href: `https://tanstack.com`,
      icon: `tanstack.svg`,
    },
  ],
  It = `pnpm dlx degit SoumabhaSaha15/VRST app`;
function Lt() {
  let e = (0, P.c)(16),
    [t, n] = (0, y.useState)(!1),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = async () => {
        try {
          (await navigator.clipboard.writeText(It), n(!0), setTimeout(() => n(!1), 1800));
        } catch {}
      }),
      (e[0] = r))
    : (r = e[0]);
  let i = r,
    a;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`div`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute left-1/2 top-56 -z-10 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[110px] motion-safe:animate-pulse motion-reduce:animate-none animation-duration-[4s]`,
      })),
      (e[1] = a))
    : (a = e[1]);
  let o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between`,
        children: [
          (0, $.jsx)(Qe, { variant: `outline`, className: `font-mono`, children: `VRST` }),
          (0, $.jsx)(Qe, { variant: `secondary`, className: `font-mono`, children: `v1.0.0` }),
        ],
      })),
      (e[2] = o))
    : (o = e[2]);
  let s;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsxs)(`div`, {
        className: `mt-16 space-y-5 text-center`,
        children: [
          (0, $.jsx)(`h1`, {
            className: `text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl`,
            children: `Scaffold react app faster, faster`,
          }),
          (0, $.jsx)(`p`, {
            className: `mx-auto max-w-md text-balance text-muted-foreground`,
            children: `A Vite and React starter wired up with TanStack Router and shadcn/ui, so you can skip the setup and start building.`,
          }),
        ],
      })),
      (e[3] = s))
    : (s = e[3]);
  let c;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-2.5 overflow-x-auto`,
        children: [
          (0, $.jsx)(At, { className: `size-4 shrink-0 text-muted-foreground` }),
          (0, $.jsx)(`code`, {
            className: `whitespace-nowrap font-mono text-sm text-foreground`,
            children: It,
          }),
        ],
      })),
      (e[4] = c))
    : (c = e[4]);
  let l;
  e[5] === t
    ? (l = e[6])
    : ((l = (0, $.jsxs)(`div`, {
        className: `mx-auto mt-10 flex max-w-md items-center justify-between gap-3 rounded-lg border bg-card px-4 py-3`,
        children: [
          c,
          (0, $.jsx)(pt, {
            size: `icon`,
            variant: `ghost`,
            className: `size-7 shrink-0`,
            onClick: i,
            "aria-label": `Copy install command`,
            children: t
              ? (0, $.jsx)(Nt, { className: `size-4 text-primary` })
              : (0, $.jsx)(Mt, { className: `size-4` }),
          }),
        ],
      })),
      (e[5] = t),
      (e[6] = l));
  let u;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsxs)(pt, {
        variant: `outline`,
        onClick: Bt,
        children: [`Documentation`, (0, $.jsx)(Pt, {})],
      })),
      (e[7] = u))
    : (u = e[7]);
  let d;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsxs)(`div`, {
        className: `mt-6 flex justify-center gap-3`,
        children: [
          u,
          (0, $.jsxs)(pt, {
            variant: `ghost`,
            onClick: zt,
            children: [(0, $.jsx)(jt, {}), `View source`],
          }),
        ],
      })),
      (e[8] = d))
    : (d = e[8]);
  let f;
  e[9] === l
    ? (f = e[10])
    : ((f = (0, $.jsxs)(`div`, { className: `w-full max-w-2xl`, children: [o, s, l, d] })),
      (e[9] = l),
      (e[10] = f));
  let p;
  e[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(ht, { className: `my-16 max-w-2xl` })), (e[11] = p))
    : (p = e[11]);
  let m;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(`p`, {
        className: `mb-6 text-center text-sm text-muted-foreground`,
        children: `Built with a stack you already know.`,
      })),
      (e[12] = m))
    : (m = e[12]);
  let h;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsxs)(`div`, {
        className: `w-full max-w-2xl`,
        children: [
          m,
          (0, $.jsx)(`div`, {
            className: `grid grid-cols-2 divide-x divide-y divide-border rounded-lg border sm:grid-cols-3 sm:divide-y-0`,
            children: Ft.map(Rt),
          }),
        ],
      })),
      (e[13] = h))
    : (h = e[13]);
  let g;
  return (
    e[14] === f
      ? (g = e[15])
      : ((g = (0, $.jsxs)(`div`, {
          className: `relative flex min-h-svh flex-col items-center overflow-hidden bg-background px-6 py-10`,
          children: [a, f, p, h],
        })),
        (e[14] = f),
        (e[15] = g)),
    g
  );
}
function Rt(e) {
  return (0, $.jsxs)(
    `a`,
    {
      href: e.href,
      target: `_blank`,
      rel: `noreferrer`,
      className: `group flex flex-col items-center gap-2 px-4 py-6 text-center transition-colors hover:bg-muted/50`,
      children: [
        (0, $.jsx)(`div`, {
          className: `flex size-9 items-center justify-center`,
          children: (0, $.jsx)(`img`, {
            src: e.icon,
            alt: e.description,
            className: `size-full object-contain grayscale transition-[filter] duration-200 group-hover:grayscale-0 rounded-md`,
          }),
        }),
        (0, $.jsx)(`span`, { className: `text-sm font-medium text-foreground`, children: e.name }),
        (0, $.jsx)(`span`, { className: `text-xs text-muted-foreground`, children: e.description }),
      ],
    },
    e.name,
  );
}
function zt() {
  window.open(`https://github.com/SoumabhaSaha15/VRST`, `_blank`);
}
function Bt() {
  window.open(`https://github.com/SoumabhaSaha15/VRST/blob/main/DOCS.md`, `_blank`);
}
export { Lt as component };
